"use client";

import { useRef, useState } from "react";

// Common signature box sizes for Indian exam forms (px @ ~300 DPI).
const SIZES = [
  { label: "3×1 cm (140×60)", w: 140, h: 60 },
  { label: "Signature 132×46", w: 132, h: 46 },
  { label: "300×80", w: 300, h: 80 },
];

function fmtKB(b: number) {
  return (b / 1024).toFixed(1) + " KB";
}

function encode(canvas: HTMLCanvasElement, q: number): Promise<Blob> {
  return new Promise((res) => canvas.toBlob((b) => res(b!), "image/jpeg", q));
}

export default function SignatureResize() {
  const [img, setImg] = useState<ImageBitmap | null>(null);
  const [w, setW] = useState(140);
  const [h, setH] = useState(60);
  const [maxKB, setMaxKB] = useState(20);
  const [out, setOut] = useState<{ url: string; bytes: number } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function onPick(file: File | null) {
    if (!file) return;
    setImg(await createImageBitmap(file));
    setOut(null);
  }

  async function process() {
    if (!img) return;
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, w, h);
    ctx.imageSmoothingQuality = "high";
    // contain (don't crop a signature)
    const scale = Math.min(w / img.width, h / img.height);
    const dw = img.width * scale;
    const dh = img.height * scale;
    ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh);

    // Hit the KB ceiling by searching quality.
    const target = maxKB * 1024;
    let lo = 0.3, hi = 0.95, best = await encode(canvas, 0.92), bestQ = 0.92;
    if (best.size > target) {
      for (let i = 0; i < 8; i++) {
        const q = (lo + hi) / 2;
        const blob = await encode(canvas, q);
        if (blob.size <= target) { best = blob; bestQ = q; lo = q; }
        else hi = q;
      }
    }
    void bestQ;
    setOut({ url: URL.createObjectURL(best), bytes: best.size });
  }

  return (
    <div className="card">
      <div
        className="dropzone"
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => { e.preventDefault(); onPick(e.dataTransfer.files?.[0] ?? null); }}
      >
        {img ? <>Signature loaded · click to change</> : <>📁 Drop your signature image, or <u>click to choose</u></>}
        <input ref={inputRef} type="file" accept="image/*" hidden onChange={(e) => onPick(e.target.files?.[0] ?? null)} />
      </div>

      <label>Size preset</label>
      <div className="preset-row">
        {SIZES.map((s) => (
          <button key={s.label} type="button" className="chip" onClick={() => { setW(s.w); setH(s.h); setOut(null); }}>{s.label}</button>
        ))}
      </div>

      <div className="row">
        <div><label htmlFor="sw">Width (px)</label><input id="sw" type="number" value={w} onChange={(e) => setW(Number(e.target.value) || 1)} /></div>
        <div><label htmlFor="sh">Height (px)</label><input id="sh" type="number" value={h} onChange={(e) => setH(Number(e.target.value) || 1)} /></div>
        <div><label htmlFor="skb">Max size (KB)</label><input id="skb" type="number" value={maxKB} onChange={(e) => setMaxKB(Number(e.target.value) || 1)} /></div>
      </div>

      <div style={{ marginTop: 16 }}>
        <button className="btn" disabled={!img} onClick={process}>Resize signature</button>
      </div>

      {out && (
        <div className="result">
          <p className="stat">✅ {w}×{h}px · <b>{fmtKB(out.bytes)}</b> {out.bytes <= maxKB * 1024 ? "(within limit)" : "(smallest possible)"}</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={out.url} alt="Signature preview" style={{ border: "1px solid var(--border)", borderRadius: 6, margin: "10px 0", background: "#fff" }} />
          <div><a className="btn" href={out.url} download={`signature-${w}x${h}.jpg`}>⬇ Download</a></div>
        </div>
      )}
    </div>
  );
}
