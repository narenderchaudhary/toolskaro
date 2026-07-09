"use client";

import { useRef, useState } from "react";

// Shared engine for "X to JPG/PNG" converters. The browser decodes JFIF, BMP,
// AVIF, PNG, JPG, WebP etc. in an <img>, so we draw to a canvas and re-encode.
export default function ImageFormatConverter({ to, toLabel, downloadExt }: { to: "jpeg" | "png"; toLabel: string; downloadExt: string }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const lastFile = useRef<File | null>(null);
  const [srcName, setSrcName] = useState("");
  const [outUrl, setOutUrl] = useState("");
  const [error, setError] = useState("");
  const [over, setOver] = useState(false);
  const [quality, setQuality] = useState(92);

  function handle(file: File | undefined, q = quality) {
    if (!file) return;
    lastFile.current = file;
    setError(""); setOutUrl("");
    if (!file.type.startsWith("image/") && !/\.(jfif|bmp|avif|jpe?g|png|webp|gif)$/i.test(file.name)) {
      setError("Please choose an image file."); return;
    }
    setSrcName(file.name);
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth; canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) { setError("Could not process this image."); return; }
      if (to === "jpeg") { ctx.fillStyle = "#ffffff"; ctx.fillRect(0, 0, canvas.width, canvas.height); }
      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);
      canvas.toBlob((blob) => {
        if (!blob) { setError("Conversion failed — try a different file."); return; }
        setOutUrl((prev) => { if (prev) URL.revokeObjectURL(prev); return URL.createObjectURL(blob); });
      }, `image/${to}`, to === "jpeg" ? q / 100 : undefined);
    };
    img.onerror = () => { setError("Could not read this image. It may be corrupted or an unsupported format."); URL.revokeObjectURL(url); };
    img.src = url;
  }

  const base = srcName.replace(/\.[^.]+$/, "") || "converted";

  return (
    <div className="card">
      <div
        className={`ij-slot${over ? " over" : ""}`}
        style={{ minHeight: 150 }}
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setOver(true); }}
        onDragLeave={() => setOver(false)}
        onDrop={(e) => { e.preventDefault(); setOver(false); handle(e.dataTransfer.files?.[0]); }}
        role="button" tabIndex={0}
      >
        <input ref={inputRef} type="file" accept="image/*,.jfif,.bmp,.avif" hidden onChange={(e) => { handle(e.target.files?.[0]); e.target.value = ""; }} />
        <div className="ij-slot-empty">
          <span className="ij-slot-ic" aria-hidden="true">🖼️</span>
          <span>{srcName ? `Selected: ${srcName}` : "Click or drop an image to convert"}</span>
        </div>
      </div>

      {to === "jpeg" && (
        <div style={{ marginTop: 14 }}>
          <label style={{ fontSize: 13, fontWeight: 600 }}>JPG quality: {quality}%</label>
          <input type="range" min={40} max={100} value={quality} onChange={(e) => { const q = Number(e.target.value); setQuality(q); if (lastFile.current) handle(lastFile.current, q); }} style={{ width: "100%", marginTop: 6 }} />
        </div>
      )}

      {error && <p style={{ color: "#dc2626", marginTop: 14 }}>{error}</p>}

      {outUrl && (
        <div style={{ marginTop: 16 }}>
          <p className="stat" style={{ marginBottom: 10, color: "#16a34a", fontWeight: 600 }}>✓ Converted to {toLabel}</p>
          <img src={outUrl} alt="Converted preview" style={{ maxWidth: "100%", borderRadius: 10, border: "1px solid var(--border)" }} />
          <div style={{ marginTop: 12 }}>
            <a className="btn" href={outUrl} download={`${base}.${downloadExt}`}>⬇ Download {toLabel}</a>
          </div>
        </div>
      )}
    </div>
  );
}
