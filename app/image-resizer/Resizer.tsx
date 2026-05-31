"use client";

import { useRef, useState } from "react";

type Loaded = { bitmap: ImageBitmap; name: string };

// Common exam / document photo dimensions (px @ ~300 DPI where relevant).
const PRESETS = [
  { label: "Passport 3.5×4.5cm", w: 413, h: 531 },
  { label: "Photo 2×2 in", w: 600, h: 600 },
  { label: "SSC photo", w: 200, h: 230 },
  { label: "Signature 3×1cm", w: 354, h: 118 },
];

function fmtKB(bytes: number) {
  return (bytes / 1024).toFixed(1) + " KB";
}

export default function Resizer() {
  const [img, setImg] = useState<Loaded | null>(null);
  const [w, setW] = useState(413);
  const [h, setH] = useState(531);
  const [lockAspect, setLockAspect] = useState(true);
  const [out, setOut] = useState<{ url: string; bytes: number } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function onPick(file: File | null) {
    if (!file) return;
    const bitmap = await createImageBitmap(file);
    setImg({ bitmap, name: file.name });
    setW(bitmap.width);
    setH(bitmap.height);
    setOut(null);
  }

  function changeW(value: number) {
    setW(value);
    if (lockAspect && img) setH(Math.round((value / img.bitmap.width) * img.bitmap.height));
  }
  function changeH(value: number) {
    setH(value);
    if (lockAspect && img) setW(Math.round((value / img.bitmap.height) * img.bitmap.width));
  }

  async function resize() {
    if (!img) return;
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d")!;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img.bitmap, 0, 0, w, h);
    const blob: Blob = await new Promise((res) =>
      canvas.toBlob((b) => res(b!), "image/jpeg", 0.92)
    );
    setOut({ url: URL.createObjectURL(blob), bytes: blob.size });
  }

  return (
    <div className="card">
      <div
        className="dropzone"
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          onPick(e.dataTransfer.files?.[0] ?? null);
        }}
      >
        {img ? (
          <>
            <strong>{img.name}</strong> — {img.bitmap.width}×{img.bitmap.height}px · click to change
          </>
        ) : (
          <>📁 Drop your image here, or <u>click to choose</u></>
        )}
        <input ref={inputRef} type="file" accept="image/*" hidden onChange={(e) => onPick(e.target.files?.[0] ?? null)} />
      </div>

      <div className="row">
        <div>
          <label htmlFor="w">Width (px)</label>
          <input id="w" type="number" min={1} value={w} onChange={(e) => changeW(Number(e.target.value) || 0)} />
        </div>
        <div>
          <label htmlFor="h">Height (px)</label>
          <input id="h" type="number" min={1} value={h} onChange={(e) => changeH(Number(e.target.value) || 0)} />
        </div>
      </div>

      <label style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 400, marginTop: 12 }}>
        <input type="checkbox" checked={lockAspect} onChange={(e) => setLockAspect(e.target.checked)} style={{ width: "auto" }} />
        Lock aspect ratio
      </label>

      <div className="preset-row">
        {PRESETS.map((p) => (
          <button key={p.label} type="button" className="chip" onClick={() => { setLockAspect(false); setW(p.w); setH(p.h); }}>
            {p.label}
          </button>
        ))}
      </div>

      <div style={{ marginTop: 16 }}>
        <button className="btn" disabled={!img} onClick={resize}>Resize image</button>
      </div>

      {out && (
        <div className="result">
          <p className="stat">✅ Resized to <b>{w}×{h}px</b> — {fmtKB(out.bytes)}</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={out.url} alt="Resized preview" style={{ maxWidth: "100%", borderRadius: 8, margin: "10px 0" }} />
          <a className="btn" href={out.url} download={`resized-${w}x${h}.jpg`}>⬇ Download</a>
        </div>
      )}
    </div>
  );
}
