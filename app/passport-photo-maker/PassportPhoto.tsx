"use client";

import { useRef, useState } from "react";

// Common passport / exam photo output sizes in pixels (~300 DPI).
const SIZES = [
  { label: "Passport 3.5×4.5 cm", w: 413, h: 531 },
  { label: "2×2 inch (US/visa)", w: 600, h: 600 },
  { label: "SSC / form (200×230)", w: 200, h: 230 },
  { label: "Stamp 2×2.5 cm", w: 236, h: 295 },
];

const BG = [
  { label: "White", color: "#ffffff" },
  { label: "Light blue", color: "#dbeaff" },
  { label: "Grey", color: "#e6e6e6" },
];

type Fit = "cover" | "contain";

export default function PassportPhoto() {
  const [img, setImg] = useState<ImageBitmap | null>(null);
  const [name, setName] = useState("");
  const [size, setSize] = useState(SIZES[0]);
  const [bg, setBg] = useState(BG[0].color);
  const [fit, setFit] = useState<Fit>("cover");
  const [out, setOut] = useState<{ url: string; bytes: number } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function onPick(file: File | null) {
    if (!file) return;
    setImg(await createImageBitmap(file));
    setName(file.name);
    setOut(null);
  }

  async function make() {
    if (!img) return;
    const canvas = document.createElement("canvas");
    canvas.width = size.w;
    canvas.height = size.h;
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, size.w, size.h);
    ctx.imageSmoothingQuality = "high";

    const scale =
      fit === "cover"
        ? Math.max(size.w / img.width, size.h / img.height)
        : Math.min(size.w / img.width, size.h / img.height);
    const dw = img.width * scale;
    const dh = img.height * scale;
    ctx.drawImage(img, (size.w - dw) / 2, (size.h - dh) / 2, dw, dh);

    const blob: Blob = await new Promise((res) => canvas.toBlob((b) => res(b!), "image/jpeg", 0.92));
    setOut({ url: URL.createObjectURL(blob), bytes: blob.size });
  }

  return (
    <div className="card">
      <div
        className="dropzone"
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => { e.preventDefault(); onPick(e.dataTransfer.files?.[0] ?? null); }}
      >
        {img ? <><strong>{name}</strong> · click to change</> : <>📁 Drop your photo here, or <u>click to choose</u></>}
        <input ref={inputRef} type="file" accept="image/*" hidden onChange={(e) => onPick(e.target.files?.[0] ?? null)} />
      </div>

      <label>Output size</label>
      <div className="preset-row">
        {SIZES.map((s) => (
          <button key={s.label} type="button" className="chip" onClick={() => { setSize(s); setOut(null); }} style={size.label === s.label ? { borderColor: "var(--brand)", color: "var(--brand)" } : undefined}>
            {s.label}
          </button>
        ))}
      </div>

      <label>Background</label>
      <div className="preset-row">
        {BG.map((b) => (
          <button key={b.color} type="button" className="chip" onClick={() => { setBg(b.color); setOut(null); }} style={bg === b.color ? { borderColor: "var(--brand)", color: "var(--brand)" } : undefined}>
            {b.label}
          </button>
        ))}
      </div>

      <label>Fit</label>
      <div className="preset-row">
        <button type="button" className="chip" onClick={() => { setFit("cover"); setOut(null); }} style={fit === "cover" ? { borderColor: "var(--brand)", color: "var(--brand)" } : undefined}>Crop to fill</button>
        <button type="button" className="chip" onClick={() => { setFit("contain"); setOut(null); }} style={fit === "contain" ? { borderColor: "var(--brand)", color: "var(--brand)" } : undefined}>Fit with border</button>
      </div>

      <div style={{ marginTop: 16 }}>
        <button className="btn" disabled={!img} onClick={make}>Make passport photo</button>
      </div>

      {out && (
        <div className="result">
          <p className="stat">✅ {size.w}×{size.h}px · {(out.bytes / 1024).toFixed(1)} KB</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={out.url} alt="Passport photo preview" style={{ border: "1px solid var(--border)", borderRadius: 6, margin: "10px 0" }} />
          <div><a className="btn" href={out.url} download="passport-photo.jpg">⬇ Download</a></div>
          <p className="muted-note" style={{ marginTop: 8 }}>Need an exact KB size? Run it through the Image Compressor next.</p>
        </div>
      )}
    </div>
  );
}
