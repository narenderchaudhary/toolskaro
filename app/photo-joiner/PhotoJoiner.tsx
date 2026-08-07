"use client";

import { useRef, useState, type ReactNode } from "react";

type Img = { bmp: ImageBitmap; url: string };
type Layout = "horizontal" | "vertical" | "grid";
const fmtKB = (b: number) => (b / 1024).toFixed(1) + " KB";

function drawContain(ctx: CanvasRenderingContext2D, img: ImageBitmap, x: number, y: number, w: number, h: number) {
  const s = Math.min(w / img.width, h / img.height);
  const dw = img.width * s, dh = img.height * s;
  ctx.drawImage(img, x + (w - dw) / 2, y + (h - dh) / 2, dw, dh);
}

// Mini preview icons showing each arrangement (inherit the button colour via currentColor).
const LAYOUT_ICONS: Record<Layout, ReactNode> = {
  horizontal: (
    <svg width="28" height="18" viewBox="0 0 24 18" fill="currentColor" aria-hidden="true">
      <rect x="2" y="3" width="5" height="12" rx="1" /><rect x="9.5" y="3" width="5" height="12" rx="1" /><rect x="17" y="3" width="5" height="12" rx="1" />
    </svg>
  ),
  vertical: (
    <svg width="28" height="18" viewBox="0 0 24 18" fill="currentColor" aria-hidden="true">
      <rect x="4" y="2" width="16" height="3.6" rx="1" /><rect x="4" y="7.2" width="16" height="3.6" rx="1" /><rect x="4" y="12.4" width="16" height="3.6" rx="1" />
    </svg>
  ),
  grid: (
    <svg width="28" height="18" viewBox="0 0 24 18" fill="currentColor" aria-hidden="true">
      <rect x="3" y="2" width="8" height="6.5" rx="1" /><rect x="13" y="2" width="8" height="6.5" rx="1" /><rect x="3" y="9.5" width="8" height="6.5" rx="1" /><rect x="13" y="9.5" width="8" height="6.5" rx="1" />
    </svg>
  ),
};

export default function PhotoJoiner() {
  const [imgs, setImgs] = useState<Img[]>([]);
  const [layout, setLayout] = useState<Layout>("horizontal");
  const [gap, setGap] = useState(8);
  const [bg, setBg] = useState("#ffffff");
  const [out, setOut] = useState<{ url: string; bytes: number; w: number; h: number } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function add(list: FileList | null) {
    if (!list) return;
    const added: Img[] = [];
    for (const f of Array.from(list)) {
      if (!f.type.startsWith("image/")) continue;
      added.push({ bmp: await createImageBitmap(f), url: URL.createObjectURL(f) });
    }
    setImgs((prev) => [...prev, ...added]);
    setOut(null);
  }
  function remove(i: number) { setImgs((prev) => prev.filter((_, idx) => idx !== i)); setOut(null); }

  async function combine() {
    if (imgs.length < 2) return;
    const b = imgs.map((x) => x.bmp);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;

    if (layout === "horizontal") {
      const h = Math.min(...b.map((i) => i.height));
      const widths = b.map((i) => i.width * (h / i.height));
      canvas.width = Math.round(widths.reduce((s, w) => s + w, 0) + gap * (b.length - 1));
      canvas.height = Math.round(h);
      ctx.fillStyle = bg; ctx.fillRect(0, 0, canvas.width, canvas.height);
      let x = 0;
      b.forEach((img, i) => { ctx.drawImage(img, x, 0, widths[i], h); x += widths[i] + gap; });
    } else if (layout === "vertical") {
      const w = Math.min(...b.map((i) => i.width));
      const heights = b.map((i) => i.height * (w / i.width));
      canvas.width = Math.round(w);
      canvas.height = Math.round(heights.reduce((s, hh) => s + hh, 0) + gap * (b.length - 1));
      ctx.fillStyle = bg; ctx.fillRect(0, 0, canvas.width, canvas.height);
      let y = 0;
      b.forEach((img, i) => { ctx.drawImage(img, 0, y, w, heights[i]); y += heights[i] + gap; });
    } else {
      const cols = Math.ceil(Math.sqrt(b.length));
      const rows = Math.ceil(b.length / cols);
      const cellW = Math.min(...b.map((i) => i.width));
      const cellH = Math.min(...b.map((i) => i.height));
      canvas.width = cols * cellW + gap * (cols - 1);
      canvas.height = rows * cellH + gap * (rows - 1);
      ctx.fillStyle = bg; ctx.fillRect(0, 0, canvas.width, canvas.height);
      b.forEach((img, i) => {
        const c = i % cols, r = Math.floor(i / cols);
        drawContain(ctx, img, c * (cellW + gap), r * (cellH + gap), cellW, cellH);
      });
    }

    const blob: Blob = await new Promise((res) => canvas.toBlob((bb) => res(bb!), "image/jpeg", 0.92));
    setOut({ url: URL.createObjectURL(blob), bytes: blob.size, w: canvas.width, h: canvas.height });
  }

  return (
    <div className="card">
      <div className="dropzone" onClick={() => inputRef.current?.click()} onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); add(e.dataTransfer.files); }}>
        📁 Drop photos here, or <u>click to choose</u> (add 2 or more)
        <input ref={inputRef} type="file" accept="image/*" multiple hidden onChange={(e) => add(e.target.files)} />
      </div>

      {imgs.length > 0 && (
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 14 }}>
          {imgs.map((im, i) => (
            <div key={i} style={{ position: "relative" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={im.url} alt={`Photo ${i + 1}`} style={{ width: 72, height: 72, objectFit: "cover", borderRadius: 8, border: "1px solid var(--border)" }} />
              <button type="button" onClick={() => remove(i)} aria-label="Remove" style={{ position: "absolute", top: -7, right: -7, width: 22, height: 22, borderRadius: "50%", border: "none", background: "#dc2626", color: "#fff", cursor: "pointer", fontSize: 13, lineHeight: 1 }}>×</button>
            </div>
          ))}
        </div>
      )}

      <label>Layout</label>
      <div className="preset-row">
        {([["horizontal", "Side by side"], ["vertical", "Stacked"], ["grid", "Grid"]] as [Layout, string][]).map(([l, lbl]) => (
          <button
            key={l}
            type="button"
            className="chip"
            aria-pressed={layout === l}
            onClick={() => { setLayout(l); setOut(null); }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5, padding: "9px 16px", ...(layout === l ? { borderColor: "var(--brand)", color: "var(--brand)", background: "var(--bg-soft, #faf9fc)" } : {}) }}
          >
            {LAYOUT_ICONS[l]}
            <span>{lbl}</span>
          </button>
        ))}
      </div>

      <div className="row" style={{ marginTop: 6 }}>
        <div><label htmlFor="gap">Gap (px)</label><input id="gap" type="number" min={0} max={100} value={gap} onChange={(e) => { setGap(Math.max(0, Number(e.target.value) || 0)); setOut(null); }} /></div>
        <div><label htmlFor="bg">Background</label><input id="bg" type="color" value={bg} onChange={(e) => { setBg(e.target.value); setOut(null); }} style={{ height: 42, padding: 4 }} /></div>
      </div>

      <div style={{ marginTop: 16 }}>
        <button className="btn" disabled={imgs.length < 2} onClick={combine}>Join {imgs.length || ""} photos</button>
      </div>

      {out && (
        <div className="result">
          <p className="stat">✅ Joined image · {out.w}×{out.h}px · {fmtKB(out.bytes)}</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={out.url} alt="Joined photos" style={{ maxWidth: "100%", borderRadius: 8, margin: "10px 0" }} />
          <a className="btn" href={out.url} download="joined.jpg">⬇ Download</a>
        </div>
      )}
    </div>
  );
}
