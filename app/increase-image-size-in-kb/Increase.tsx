"use client";

import { useRef, useState } from "react";

const fmtKB = (b: number) => (b / 1024).toFixed(1) + " KB";

// Increase an image's FILE size to at least a target KB (some forms require a minimum size).
// We re-encode at top quality, upscale if needed, then pad the file to hit the exact target —
// trailing bytes after the JPEG end marker are ignored by viewers, so the photo looks identical.
export default function Increase() {
  const [target, setTarget] = useState(50);
  const [busy, setBusy] = useState(false);
  const [name, setName] = useState("image");
  const [out, setOut] = useState<{ url: string; bytes: number; before: number } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function run(file: File | null) {
    if (!file) return;
    setBusy(true);
    setOut(null);
    setName(file.name.replace(/\.[^.]+$/, ""));
    const before = file.size;
    const targetBytes = Math.max(1, target) * 1024;
    const bmp = await createImageBitmap(file);

    const encode = (scale: number, q: number): Promise<Blob> => {
      const c = document.createElement("canvas");
      c.width = Math.max(1, Math.round(bmp.width * scale));
      c.height = Math.max(1, Math.round(bmp.height * scale));
      const ctx = c.getContext("2d")!;
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, c.width, c.height);
      ctx.drawImage(bmp, 0, 0, c.width, c.height);
      return new Promise((res) => c.toBlob((b) => res(b!), "image/jpeg", q));
    };

    let blob = await encode(1, 0.98);
    let scale = 1;
    while (blob.size < targetBytes && scale < 4) {
      scale *= 1.4;
      blob = await encode(scale, 0.98);
    }
    if (blob.size < targetBytes) {
      const pad = new Uint8Array(targetBytes - blob.size); // ignored padding bytes
      blob = new Blob([blob, pad], { type: "image/jpeg" });
    }
    setOut({ url: URL.createObjectURL(blob), bytes: blob.size, before });
    setBusy(false);
  }

  return (
    <div className="card">
      <div className="row">
        <div style={{ flexBasis: "100%" }}>
          <label htmlFor="t">Minimum size (KB)</label>
          <input id="t" type="number" min={1} value={target} onChange={(e) => setTarget(Math.max(1, Number(e.target.value) || 0))} />
          <div className="preset-row" style={{ marginTop: 8 }}>
            {[20, 50, 100, 200].map((k) => (
              <button key={k} type="button" className="chip" onClick={() => setTarget(k)}>{k} KB</button>
            ))}
          </div>
        </div>
      </div>

      <div className="dropzone" style={{ marginTop: 14 }} onClick={() => !busy && inputRef.current?.click()} onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); if (!busy) run(e.dataTransfer.files?.[0] ?? null); }}>
        {busy ? "Working…" : <>📁 Drop a JPG/PNG here, or <u>click to choose</u> — increase to {target}&nbsp;KB</>}
        <input ref={inputRef} type="file" accept="image/*" hidden onChange={(e) => run(e.target.files?.[0] ?? null)} />
      </div>

      {out && (
        <div className="result">
          <p className="stat" style={{ fontSize: 16 }}>{fmtKB(out.before)} → <b>{fmtKB(out.bytes)}</b> — at least {target}&nbsp;KB ✅</p>
          <a className="btn" href={out.url} download={`${name}-${target}kb.jpg`}>⬇ Download image</a>
        </div>
      )}
    </div>
  );
}
