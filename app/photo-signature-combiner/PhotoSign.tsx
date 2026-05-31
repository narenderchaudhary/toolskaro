"use client";

import { useRef, useState } from "react";

type Layout = "stack" | "side";
const fmtKB = (b: number) => (b / 1024).toFixed(1) + " KB";

function Drop({ label, onPick, has }: { label: string; onPick: (f: File | null) => void; has: boolean }) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div style={{ flex: 1, minWidth: 200 }}>
      <div className="dropzone" style={{ padding: "24px 12px" }} onClick={() => ref.current?.click()} onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); onPick(e.dataTransfer.files?.[0] ?? null); }}>
        {has ? <>✅ {label} added · change</> : <>📁 {label}</>}
        <input ref={ref} type="file" accept="image/*" hidden onChange={(e) => onPick(e.target.files?.[0] ?? null)} />
      </div>
    </div>
  );
}

function drawContain(ctx: CanvasRenderingContext2D, img: ImageBitmap, x: number, y: number, w: number, h: number) {
  const s = Math.min(w / img.width, h / img.height);
  const dw = img.width * s, dh = img.height * s;
  ctx.drawImage(img, x + (w - dw) / 2, y + (h - dh) / 2, dw, dh);
}

export default function PhotoSign() {
  const [photo, setPhoto] = useState<ImageBitmap | null>(null);
  const [sign, setSign] = useState<ImageBitmap | null>(null);
  const [layout, setLayout] = useState<Layout>("stack");
  const [out, setOut] = useState<{ url: string; bytes: number } | null>(null);

  async function pick(setter: (b: ImageBitmap) => void, file: File | null) {
    if (!file) return;
    setter(await createImageBitmap(file));
    setOut(null);
  }

  async function combine() {
    if (!photo || !sign) return;
    const pad = 16, gap = 14;
    const pW = 240, pH = 300; // photo box (~3.5x4.5cm ratio)
    const sW = 240, sH = 90; // signature box
    const canvas = document.createElement("canvas");
    if (layout === "stack") {
      canvas.width = pW + pad * 2;
      canvas.height = pH + gap + sH + pad * 2;
    } else {
      canvas.width = pW + gap + sW + pad * 2;
      canvas.height = Math.max(pH, sH) + pad * 2;
    }
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (layout === "stack") {
      drawContain(ctx, photo, pad, pad, pW, pH);
      drawContain(ctx, sign, pad, pad + pH + gap, sW, sH);
    } else {
      drawContain(ctx, photo, pad, pad, pW, pH);
      drawContain(ctx, sign, pad + pW + gap, pad, sW, sH);
    }
    const blob: Blob = await new Promise((res) => canvas.toBlob((b) => res(b!), "image/jpeg", 0.92));
    setOut({ url: URL.createObjectURL(blob), bytes: blob.size });
  }

  return (
    <div className="card">
      <div className="row">
        <Drop label="Upload photo" has={!!photo} onPick={(f) => pick(setPhoto, f)} />
        <Drop label="Upload signature" has={!!sign} onPick={(f) => pick(setSign, f)} />
      </div>

      <label>Layout</label>
      <div className="preset-row">
        <button type="button" className="chip" onClick={() => { setLayout("stack"); setOut(null); }} style={layout === "stack" ? { borderColor: "var(--brand)", color: "var(--brand)" } : undefined}>Photo over signature</button>
        <button type="button" className="chip" onClick={() => { setLayout("side"); setOut(null); }} style={layout === "side" ? { borderColor: "var(--brand)", color: "var(--brand)" } : undefined}>Side by side</button>
      </div>

      <div style={{ marginTop: 16 }}>
        <button className="btn" disabled={!photo || !sign} onClick={combine}>Combine into one image</button>
      </div>

      {out && (
        <div className="result">
          <p className="stat">✅ Combined image · {fmtKB(out.bytes)}</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={out.url} alt="Combined photo and signature" style={{ border: "1px solid var(--border)", borderRadius: 6, margin: "10px 0", background: "#fff" }} />
          <div><a className="btn" href={out.url} download="photo-signature.jpg">⬇ Download</a></div>
          <p className="muted-note" style={{ marginTop: 8 }}>Need a specific KB size? Run it through the Image Compressor next.</p>
        </div>
      )}
    </div>
  );
}
