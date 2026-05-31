"use client";

import { useRef, useState } from "react";

type Fmt = "image/jpeg" | "image/png" | "image/webp";
const EXT: Record<Fmt, string> = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp" };
const fmtKB = (b: number) => (b / 1024).toFixed(1) + " KB";

export default function Converter() {
  const [img, setImg] = useState<ImageBitmap | null>(null);
  const [name, setName] = useState("");
  const [fmt, setFmt] = useState<Fmt>("image/jpeg");
  const [quality, setQuality] = useState(0.9);
  const [out, setOut] = useState<{ url: string; bytes: number } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function onPick(file: File | null) {
    if (!file) return;
    setImg(await createImageBitmap(file));
    setName(file.name.replace(/\.[^.]+$/, ""));
    setOut(null);
  }

  async function convert() {
    if (!img) return;
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d")!;
    if (fmt === "image/jpeg") {
      ctx.fillStyle = "#fff"; // JPEG has no transparency
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    ctx.drawImage(img, 0, 0);
    const lossy = fmt !== "image/png";
    const blob: Blob = await new Promise((res) => canvas.toBlob((b) => res(b!), fmt, lossy ? quality : undefined));
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
        {img ? <><strong>{name}</strong> · {img.width}×{img.height}px · click to change</> : <>📁 Drop an image here, or <u>click to choose</u> (PNG / JPG / WebP)</>}
        <input ref={inputRef} type="file" accept="image/*" hidden onChange={(e) => onPick(e.target.files?.[0] ?? null)} />
      </div>

      <label>Convert to</label>
      <div className="preset-row">
        {(["image/jpeg", "image/png", "image/webp"] as Fmt[]).map((f) => (
          <button key={f} type="button" className="chip" onClick={() => { setFmt(f); setOut(null); }} style={fmt === f ? { borderColor: "var(--brand)", color: "var(--brand)" } : undefined}>
            {EXT[f].toUpperCase()}
          </button>
        ))}
      </div>

      {fmt !== "image/png" && (
        <>
          <label htmlFor="q">Quality: {Math.round(quality * 100)}%</label>
          <input id="q" type="range" min={0.1} max={1} step={0.05} value={quality} onChange={(e) => setQuality(Number(e.target.value))} style={{ width: "100%" }} />
        </>
      )}

      <div style={{ marginTop: 16 }}>
        <button className="btn" disabled={!img} onClick={convert}>Convert image</button>
      </div>

      {out && (
        <div className="result">
          <p className="stat">✅ Converted to {EXT[fmt].toUpperCase()} — <b>{fmtKB(out.bytes)}</b></p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={out.url} alt="Converted preview" style={{ maxWidth: "100%", borderRadius: 8, margin: "10px 0" }} />
          <a className="btn" href={out.url} download={`${name || "image"}.${EXT[fmt]}`}>⬇ Download {EXT[fmt].toUpperCase()}</a>
        </div>
      )}
    </div>
  );
}
