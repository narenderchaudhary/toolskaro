"use client";

import { useRef, useState } from "react";

type Sel = { x: number; y: number; w: number; h: number };

export default function Crop() {
  const [src, setSrc] = useState<string | null>(null);
  const [nat, setNat] = useState({ w: 0, h: 0 });
  const [sel, setSel] = useState<Sel | null>(null);
  const [out, setOut] = useState<string | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const drag = useRef<{ sx: number; sy: number } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function onPick(file: File | null) {
    if (!file) return;
    setSrc(URL.createObjectURL(file));
    setSel(null);
    setOut(null);
  }

  function rel(e: React.PointerEvent) {
    const r = imgRef.current!.getBoundingClientRect();
    return { x: Math.max(0, Math.min(e.clientX - r.left, r.width)), y: Math.max(0, Math.min(e.clientY - r.top, r.height)) };
  }
  function down(e: React.PointerEvent) {
    e.preventDefault();
    const p = rel(e);
    drag.current = { sx: p.x, sy: p.y };
    setSel({ x: p.x, y: p.y, w: 0, h: 0 });
  }
  function move(e: React.PointerEvent) {
    if (!drag.current) return;
    const p = rel(e);
    const { sx, sy } = drag.current;
    setSel({ x: Math.min(sx, p.x), y: Math.min(sy, p.y), w: Math.abs(p.x - sx), h: Math.abs(p.y - sy) });
  }
  function up() { drag.current = null; }

  function preset(ratio: number | null) {
    const el = imgRef.current;
    if (!el) return;
    const W = el.clientWidth, H = el.clientHeight;
    if (ratio === null) { setSel({ x: 0, y: 0, w: W, h: H }); return; }
    let w = W, h = W / ratio;
    if (h > H) { h = H; w = H * ratio; }
    setSel({ x: (W - w) / 2, y: (H - h) / 2, w, h });
  }

  function cropNow() {
    const el = imgRef.current;
    if (!el || !sel || sel.w < 4 || sel.h < 4) return;
    const scaleX = nat.w / el.clientWidth;
    const scaleY = nat.h / el.clientHeight;
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(sel.w * scaleX);
    canvas.height = Math.round(sel.h * scaleY);
    const ctx = canvas.getContext("2d")!;
    ctx.drawImage(el, sel.x * scaleX, sel.y * scaleY, sel.w * scaleX, sel.h * scaleY, 0, 0, canvas.width, canvas.height);
    canvas.toBlob((b) => b && setOut(URL.createObjectURL(b)), "image/png");
  }

  return (
    <div className="card">
      {!src ? (
        <div className="dropzone" onClick={() => inputRef.current?.click()} onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); onPick(e.dataTransfer.files?.[0] ?? null); }}>
          📁 Drop an image here, or <u>click to choose</u>
          <input ref={inputRef} type="file" accept="image/*" hidden onChange={(e) => onPick(e.target.files?.[0] ?? null)} />
        </div>
      ) : (
        <>
          <p className="muted-note">Drag on the image to select the area to keep.</p>
          <div style={{ position: "relative", display: "inline-block", maxWidth: "100%", touchAction: "none", userSelect: "none" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={imgRef}
              src={src}
              alt="To crop"
              onLoad={(e) => setNat({ w: e.currentTarget.naturalWidth, h: e.currentTarget.naturalHeight })}
              onPointerDown={down}
              onPointerMove={move}
              onPointerUp={up}
              onPointerLeave={up}
              style={{ maxWidth: "100%", display: "block", borderRadius: 8 }}
              draggable={false}
            />
            {sel && sel.w > 0 && (
              <div style={{ position: "absolute", left: sel.x, top: sel.y, width: sel.w, height: sel.h, border: "2px solid #fff", boxShadow: "0 0 0 9999px rgba(15,23,42,0.45)", pointerEvents: "none", borderRadius: 2 }} />
            )}
          </div>

          <label>Aspect ratio preset</label>
          <div className="preset-row">
            <button type="button" className="chip" onClick={() => preset(1)}>Square 1:1</button>
            <button type="button" className="chip" onClick={() => preset(3.5 / 4.5)}>Passport 3.5:4.5</button>
            <button type="button" className="chip" onClick={() => preset(4 / 3)}>4:3</button>
            <button type="button" className="chip" onClick={() => preset(16 / 9)}>16:9</button>
            <button type="button" className="chip" onClick={() => preset(null)}>Full</button>
          </div>

          <div style={{ marginTop: 16, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button className="btn" disabled={!sel || sel.w < 4} onClick={cropNow}>Crop image</button>
            <button className="btn secondary" onClick={() => { setSrc(null); setSel(null); setOut(null); }}>Choose another</button>
          </div>
        </>
      )}

      {out && (
        <div className="result">
          <p className="stat">✅ Cropped image ready</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={out} alt="Cropped" style={{ maxWidth: "100%", borderRadius: 8, margin: "10px 0" }} />
          <a className="btn" href={out} download="cropped.png">⬇ Download PNG</a>
        </div>
      )}
    </div>
  );
}
