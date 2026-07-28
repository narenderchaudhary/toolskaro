"use client";

import { useEffect, useRef, useState } from "react";

export default function RotateImage() {
  const [img, setImg] = useState<HTMLImageElement | null>(null);
  const [name, setName] = useState("image");
  const [angle, setAngle] = useState(0); // degrees, -180..180
  const [flipH, setFlipH] = useState(false);
  const [flipV, setFlipV] = useState(false);
  const [bg, setBg] = useState("#ffffff");
  const [transparent, setTransparent] = useState(true);
  const [format, setFormat] = useState<"png" | "jpeg">("png");
  const [over, setOver] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function handle(file?: File) {
    if (!file || !file.type.startsWith("image/")) return;
    setName(file.name.replace(/\.[^.]+$/, "") || "image");
    const el = new Image();
    const url = URL.createObjectURL(file);
    el.onload = () => { setImg(el); setAngle(0); setFlipH(false); setFlipV(false); };
    el.src = url;
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !img) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const rad = (angle * Math.PI) / 180;
    const w = img.naturalWidth, h = img.naturalHeight;
    const cos = Math.abs(Math.cos(rad)), sin = Math.abs(Math.sin(rad));
    const nw = Math.max(1, Math.round(w * cos + h * sin));
    const nh = Math.max(1, Math.round(w * sin + h * cos));
    canvas.width = nw; canvas.height = nh;
    ctx.clearRect(0, 0, nw, nh);
    // JPG has no alpha, and non-90° angles leave transparent corners — fill unless PNG+transparent.
    if (format === "jpeg" || !transparent) { ctx.fillStyle = bg; ctx.fillRect(0, 0, nw, nh); }
    ctx.save();
    ctx.translate(nw / 2, nh / 2);
    ctx.rotate(rad);
    ctx.scale(flipH ? -1 : 1, flipV ? -1 : 1);
    ctx.drawImage(img, -w / 2, -h / 2, w, h);
    ctx.restore();
  }, [img, angle, flipH, flipV, bg, transparent, format]);

  function bump(d: number) {
    setAngle((a) => { let v = ((a + d) % 360 + 360) % 360; if (v > 180) v -= 360; return v; });
  }

  function download() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.toBlob((blob) => {
      if (!blob) return;
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `${name}-rotated.${format === "jpeg" ? "jpg" : "png"}`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    }, `image/${format}`, format === "jpeg" ? 0.92 : undefined);
  }

  const chip = (active: boolean) => `chip${active ? " active" : ""}`;
  const lbl = { fontSize: 13, fontWeight: 600 as const, display: "block", marginBottom: 6 };

  if (!img) {
    return (
      <div className="card">
        <div
          className={`ij-slot${over ? " over" : ""}`}
          style={{ minHeight: 160 }}
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setOver(true); }}
          onDragLeave={() => setOver(false)}
          onDrop={(e) => { e.preventDefault(); setOver(false); handle(e.dataTransfer.files?.[0]); }}
          role="button" tabIndex={0}
        >
          <input ref={inputRef} type="file" accept="image/*" hidden onChange={(e) => { handle(e.target.files?.[0]); e.target.value = ""; }} />
          <div className="ij-slot-empty">
            <span className="ij-slot-ic" aria-hidden="true">🔄</span>
            <span>Click or drop an image to rotate</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="ij-controls">
        <div>
          <span style={lbl}>Rotate</span>
          <div className="preset-row">
            <button type="button" className="chip" onClick={() => bump(-90)}>↺ 90° left</button>
            <button type="button" className="chip" onClick={() => bump(90)}>↻ 90° right</button>
            <button type="button" className="chip" onClick={() => bump(180)}>180°</button>
          </div>
        </div>
        <div>
          <span style={lbl}>Angle: {angle}°</span>
          <input type="range" min={-180} max={180} value={angle} onChange={(e) => setAngle(Number(e.target.value))} style={{ width: 180 }} />
        </div>
        <div>
          <span style={lbl}>Flip</span>
          <div className="preset-row">
            <button type="button" className={chip(flipH)} onClick={() => setFlipH((v) => !v)}>↔ Horizontal</button>
            <button type="button" className={chip(flipV)} onClick={() => setFlipV((v) => !v)}>↕ Vertical</button>
          </div>
        </div>
        <div>
          <span style={lbl}>Format</span>
          <div className="preset-row">
            <button type="button" className={chip(format === "png")} onClick={() => setFormat("png")}>PNG</button>
            <button type="button" className={chip(format === "jpeg")} onClick={() => setFormat("jpeg")}>JPG</button>
          </div>
        </div>
        <div>
          <span style={lbl}>Background</span>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <input type="color" value={bg} onChange={(e) => setBg(e.target.value)} disabled={transparent && format === "png"} aria-label="Background color" style={{ width: 40, height: 34, border: "none", background: "none", cursor: "pointer" }} />
            <label style={{ fontSize: 13, display: "flex", alignItems: "center", gap: 6 }}>
              <input type="checkbox" checked={transparent} onChange={(e) => setTransparent(e.target.checked)} disabled={format === "jpeg"} /> Transparent (PNG)
            </label>
          </div>
        </div>
      </div>

      <div className="ij-preview" style={{ marginTop: 16 }}>
        <canvas ref={canvasRef} className={transparent && format === "png" ? "ij-canvas checker" : "ij-canvas"} />
      </div>

      <div style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
        <button className="btn" onClick={download}>⬇ Download {format === "jpeg" ? "JPG" : "PNG"}</button>
        <button className="btn secondary" onClick={() => { setAngle(0); setFlipH(false); setFlipV(false); }}>Reset</button>
        <button className="btn secondary" onClick={() => setImg(null)}>Choose another</button>
      </div>
    </div>
  );
}
