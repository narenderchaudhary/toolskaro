"use client";

import { useEffect, useRef, useState } from "react";

type Img = { id: string; el: HTMLImageElement; name: string };

export default function ImageJoiner() {
  const [imgs, setImgs] = useState<Img[]>([]);
  const [layout, setLayout] = useState<"horizontal" | "vertical">("horizontal");
  const [gap, setGap] = useState(0);
  const [bg, setBg] = useState("#ffffff");
  const [transparent, setTransparent] = useState(false);
  const [drag, setDrag] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  function addFiles(list: FileList | null) {
    if (!list) return;
    Array.from(list).filter((f) => f.type.startsWith("image/")).forEach((f) => {
      const el = new Image();
      const u = URL.createObjectURL(f);
      el.onload = () => setImgs((prev) => [...prev, { id: u + Math.random(), el, name: f.name }]);
      el.src = u;
    });
  }
  function remove(id: string) { setImgs((prev) => prev.filter((i) => i.id !== id)); }
  function move(id: string, dir: -1 | 1) {
    setImgs((prev) => {
      const i = prev.findIndex((x) => x.id === id);
      const j = i + dir;
      if (i < 0 || j < 0 || j >= prev.length) return prev;
      const next = [...prev];
      [next[i], next[j]] = [next[j], next[i]];
      return next;
    });
  }

  // Live preview — redraw whenever inputs change.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !imgs.length) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const els = imgs.map((i) => i.el);
    if (layout === "horizontal") {
      const h = Math.min(...els.map((e) => e.naturalHeight));
      const scaled = els.map((e) => ({ e, w: Math.max(1, Math.round(e.naturalWidth * h / e.naturalHeight)), h }));
      const totalW = scaled.reduce((s, x) => s + x.w, 0) + gap * (els.length - 1);
      canvas.width = totalW; canvas.height = h;
      ctx.clearRect(0, 0, totalW, h);
      if (!transparent) { ctx.fillStyle = bg; ctx.fillRect(0, 0, totalW, h); }
      let x = 0;
      for (const s of scaled) { ctx.drawImage(s.e, x, 0, s.w, h); x += s.w + gap; }
    } else {
      const w = Math.min(...els.map((e) => e.naturalWidth));
      const scaled = els.map((e) => ({ e, w, h: Math.max(1, Math.round(e.naturalHeight * w / e.naturalWidth)) }));
      const totalH = scaled.reduce((s, x) => s + x.h, 0) + gap * (els.length - 1);
      canvas.width = w; canvas.height = totalH;
      ctx.clearRect(0, 0, w, totalH);
      if (!transparent) { ctx.fillStyle = bg; ctx.fillRect(0, 0, w, totalH); }
      let y = 0;
      for (const s of scaled) { ctx.drawImage(s.e, 0, y, s.w, s.h); y += s.h + gap; }
    }
  }, [imgs, layout, gap, bg, transparent]);

  function download() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.toBlob((blob) => {
      if (!blob) return;
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `joined-image.${transparent ? "png" : "png"}`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    }, "image/png");
  }

  const chip = (active: boolean) => `chip${active ? " active" : ""}`;
  const lbl = { fontSize: 13, fontWeight: 600 as const, color: "var(--ink)", display: "block", marginBottom: 6 };

  return (
    <div className="card">
      {/* Upload / drop zone */}
      <div
        className={`ij-drop${drag ? " over" : ""}`}
        onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
        onDragLeave={() => setDrag(false)}
        onDrop={(e) => { e.preventDefault(); setDrag(false); addFiles(e.dataTransfer.files); }}
        onClick={() => fileRef.current?.click()}
        role="button"
        tabIndex={0}
      >
        <div className="ij-drop-ic" aria-hidden="true">🖼️</div>
        <div><strong>Drop images here</strong>, or <span className="ij-link">click to choose</span></div>
        <div className="ij-hint">JPG, PNG or WebP · add 2 or more · nothing is uploaded</div>
        <input ref={fileRef} type="file" accept="image/*" multiple hidden onChange={(e) => { addFiles(e.target.files); e.target.value = ""; }} />
      </div>

      {imgs.length > 0 && (
        <>
          {/* Thumbnails + reorder */}
          <div className="ij-thumbs">
            {imgs.map((im, idx) => (
              <div className="ij-thumb" key={im.id}>
                <img src={im.el.src} alt={im.name} />
                <div className="ij-thumb-bar">
                  <button type="button" aria-label="Move earlier" disabled={idx === 0} onClick={() => move(im.id, -1)}>‹</button>
                  <button type="button" aria-label="Remove" className="ij-x" onClick={() => remove(im.id)}>✕</button>
                  <button type="button" aria-label="Move later" disabled={idx === imgs.length - 1} onClick={() => move(im.id, 1)}>›</button>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="ij-controls">
            <div>
              <span style={lbl}>Direction</span>
              <div className="preset-row">
                <button type="button" className={chip(layout === "horizontal")} onClick={() => setLayout("horizontal")}>↔ Horizontal</button>
                <button type="button" className={chip(layout === "vertical")} onClick={() => setLayout("vertical")}>↕ Vertical</button>
              </div>
            </div>
            <div>
              <span style={lbl}>Gap: {gap}px</span>
              <input type="range" min={0} max={80} value={gap} onChange={(e) => setGap(Number(e.target.value))} style={{ width: 160 }} />
            </div>
            <div>
              <span style={lbl}>Background</span>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <input type="color" value={bg} onChange={(e) => setBg(e.target.value)} disabled={transparent} aria-label="Background color" style={{ width: 40, height: 34, border: "none", background: "none", cursor: "pointer" }} />
                <label style={{ fontSize: 13, display: "flex", alignItems: "center", gap: 6 }}>
                  <input type="checkbox" checked={transparent} onChange={(e) => setTransparent(e.target.checked)} /> Transparent
                </label>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="ij-preview">
            <canvas ref={canvasRef} className={transparent ? "ij-canvas checker" : "ij-canvas"} />
          </div>

          <div style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
            <button className="btn" onClick={download} disabled={imgs.length < 2}>⬇ Download joined image (PNG)</button>
            <button className="btn secondary" onClick={() => setImgs([])}>Start over</button>
          </div>
          {imgs.length < 2 && <p className="ij-hint" style={{ marginTop: 10 }}>Add at least 2 images to join them.</p>}
        </>
      )}
    </div>
  );
}
