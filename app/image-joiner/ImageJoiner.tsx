"use client";

import { useEffect, useRef, useState } from "react";

type Img = { id: string; el: HTMLImageElement; name: string };

function loadImg(file: File): Promise<Img> {
  return new Promise((res) => {
    const el = new Image();
    const u = URL.createObjectURL(file);
    el.onload = () => res({ id: u + Math.random(), el, name: file.name });
    el.src = u;
  });
}

function Slot({ label, img, onFile, onRemove }: { label: string; img: Img | null; onFile: (f: File) => void; onRemove: () => void }) {
  const ref = useRef<HTMLInputElement>(null);
  const [over, setOver] = useState(false);
  return (
    <div
      className={`ij-slot${img ? " filled" : ""}${over ? " over" : ""}`}
      onClick={() => !img && ref.current?.click()}
      onDragOver={(e) => { e.preventDefault(); setOver(true); }}
      onDragLeave={() => setOver(false)}
      onDrop={(e) => { e.preventDefault(); setOver(false); const f = e.dataTransfer.files?.[0]; if (f && f.type.startsWith("image/")) onFile(f); }}
      role="button"
      tabIndex={0}
    >
      <input ref={ref} type="file" accept="image/*" hidden onChange={(e) => { const f = e.target.files?.[0]; if (f) onFile(f); e.target.value = ""; }} />
      <span className="ij-slot-label">{label}</span>
      {img ? (
        <>
          <img src={img.el.src} alt={img.name} />
          <div className="ij-slot-foot">
            <button type="button" onClick={(e) => { e.stopPropagation(); ref.current?.click(); }}>Change</button>
            <button type="button" className="ij-x" onClick={(e) => { e.stopPropagation(); onRemove(); }}>Remove</button>
          </div>
        </>
      ) : (
        <div className="ij-slot-empty">
          <span className="ij-slot-ic" aria-hidden="true">🖼️</span>
          <span>Click or drop to choose</span>
        </div>
      )}
    </div>
  );
}

export default function ImageJoiner() {
  const [slot1, setSlot1] = useState<Img | null>(null);
  const [slot2, setSlot2] = useState<Img | null>(null);
  const [extras, setExtras] = useState<Img[]>([]);
  const [layout, setLayout] = useState<"horizontal" | "vertical">("horizontal");
  const [gap, setGap] = useState(0);
  const [bg, setBg] = useState("#ffffff");
  const [transparent, setTransparent] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const ordered = [slot1, slot2, ...extras].filter(Boolean) as Img[];

  async function addExtras(list: FileList | null) {
    if (!list) return;
    const loaded = await Promise.all(Array.from(list).filter((f) => f.type.startsWith("image/")).map(loadImg));
    setExtras((p) => [...p, ...loaded]);
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || ordered.length < 1) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const els = ordered.map((i) => i.el);
    if (layout === "horizontal") {
      const h = Math.min(...els.map((e) => e.naturalHeight));
      const s = els.map((e) => ({ e, w: Math.max(1, Math.round(e.naturalWidth * h / e.naturalHeight)), h }));
      const totalW = s.reduce((a, x) => a + x.w, 0) + gap * (els.length - 1);
      canvas.width = totalW; canvas.height = h;
      ctx.clearRect(0, 0, totalW, h);
      if (!transparent) { ctx.fillStyle = bg; ctx.fillRect(0, 0, totalW, h); }
      let x = 0; for (const it of s) { ctx.drawImage(it.e, x, 0, it.w, h); x += it.w + gap; }
    } else {
      const w = Math.min(...els.map((e) => e.naturalWidth));
      const s = els.map((e) => ({ e, w, h: Math.max(1, Math.round(e.naturalHeight * w / e.naturalWidth)) }));
      const totalH = s.reduce((a, x) => a + x.h, 0) + gap * (els.length - 1);
      canvas.width = w; canvas.height = totalH;
      ctx.clearRect(0, 0, w, totalH);
      if (!transparent) { ctx.fillStyle = bg; ctx.fillRect(0, 0, w, totalH); }
      let y = 0; for (const it of s) { ctx.drawImage(it.e, 0, y, it.w, it.h); y += it.h + gap; }
    }
  }, [slot1, slot2, extras, layout, gap, bg, transparent]); // eslint-disable-line react-hooks/exhaustive-deps

  function download() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.toBlob((blob) => {
      if (!blob) return;
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "joined-image.png";
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    }, "image/png");
  }

  const chip = (active: boolean) => `chip${active ? " active" : ""}`;
  const lbl = { fontSize: 13, fontWeight: 600 as const, color: "var(--ink)", display: "block", marginBottom: 6 };

  return (
    <div className="card">
      <div className="ij-slots">
        <Slot label="Image 1" img={slot1} onFile={async (f) => setSlot1(await loadImg(f))} onRemove={() => setSlot1(null)} />
        <Slot label="Image 2" img={slot2} onFile={async (f) => setSlot2(await loadImg(f))} onRemove={() => setSlot2(null)} />
      </div>

      {extras.length > 0 && (
        <div className="ij-thumbs">
          {extras.map((im, idx) => (
            <div className="ij-thumb" key={im.id}>
              <img src={im.el.src} alt={im.name} />
              <div className="ij-thumb-bar">
                <span className="ij-thumb-n">#{idx + 3}</span>
                <button type="button" aria-label="Remove" className="ij-x" onClick={() => setExtras((p) => p.filter((x) => x.id !== im.id))}>✕</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <label className="ij-addmore">
        <input type="file" accept="image/*" multiple hidden onChange={(e) => { addExtras(e.target.files); e.target.value = ""; }} />
        + Add more images
      </label>

      {ordered.length >= 2 && (
        <>
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

          <div className="ij-preview">
            <canvas ref={canvasRef} className={transparent ? "ij-canvas checker" : "ij-canvas"} />
          </div>

          <div style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
            <button className="btn" onClick={download}>⬇ Download joined image (PNG)</button>
            <button className="btn secondary" onClick={() => { setSlot1(null); setSlot2(null); setExtras([]); }}>Start over</button>
          </div>
        </>
      )}
      {ordered.length < 2 && <p className="ij-hint" style={{ marginTop: 12 }}>Choose Image 1 and Image 2 to join them.</p>}
    </div>
  );
}
