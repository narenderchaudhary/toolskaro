"use client";

import { useRef, useState } from "react";

const fmtKB = (b: number) => (b / 1024).toFixed(1) + " KB";
const SIZES = [256, 500, 640];

export default function WhatsappDp() {
  const [size, setSize] = useState(640);
  const [name, setName] = useState("dp");
  const [out, setOut] = useState<{ url: string; bytes: number } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function run(file: File | null) {
    if (!file) return;
    setName(file.name.replace(/\.[^.]+$/, ""));
    const bmp = await createImageBitmap(file);
    // centre-crop to a square, then resize to size×size
    const s = Math.min(bmp.width, bmp.height);
    const sx = (bmp.width - s) / 2;
    const sy = (bmp.height - s) / 2;
    const c = document.createElement("canvas");
    c.width = size;
    c.height = size;
    const ctx = c.getContext("2d")!;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(bmp, sx, sy, s, s, 0, 0, size, size);
    const blob: Blob = await new Promise((res) => c.toBlob((b) => res(b!), "image/jpeg", 0.9));
    setOut({ url: URL.createObjectURL(blob), bytes: blob.size });
  }

  return (
    <div className="card">
      <label>Display picture size</label>
      <div className="preset-row">
        {SIZES.map((s) => (
          <button key={s} type="button" className="chip" onClick={() => setSize(s)} style={size === s ? { borderColor: "var(--brand)", color: "var(--brand)" } : undefined}>{s}×{s} px</button>
        ))}
      </div>

      <div className="dropzone" style={{ marginTop: 14 }} onClick={() => inputRef.current?.click()} onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); run(e.dataTransfer.files?.[0] ?? null); }}>
        📁 Drop a photo here, or <u>click to choose</u> — square crop to {size}×{size}
        <input ref={inputRef} type="file" accept="image/*" hidden onChange={(e) => run(e.target.files?.[0] ?? null)} />
      </div>
      <p className="muted-note" style={{ marginTop: 10 }}>WhatsApp display pictures are square — your photo is centre-cropped to a clean square and resized.</p>

      {out && (
        <div className="result">
          <p className="stat" style={{ fontSize: 16 }}>✅ {size}×{size} px square — {fmtKB(out.bytes)}</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={out.url} alt="WhatsApp DP preview" style={{ width: 140, height: 140, borderRadius: "50%", objectFit: "cover", margin: "10px 0", display: "block" }} />
          <a className="btn" href={out.url} download={`${name}-whatsapp-dp.jpg`}>⬇ Download DP</a>
        </div>
      )}
    </div>
  );
}
