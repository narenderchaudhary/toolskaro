"use client";

import { useRef, useState } from "react";

const fmtKB = (b: number) => (b / 1024).toFixed(1) + " KB";
const cmToPx = (cm: number, dpi: number) => Math.max(1, Math.round((cm / 2.54) * dpi));

const PRESETS: { label: string; w: number; h: number }[] = [
  { label: "Passport 3.5×4.5", w: 3.5, h: 4.5 },
  { label: "Stamp 2×2.5", w: 2, h: 2.5 },
  { label: "4×6 photo", w: 10.2, h: 15.2 },
  { label: "Signature 6×2", w: 6, h: 2 },
];

export default function ResizeCm() {
  const [w, setW] = useState(3.5);
  const [h, setH] = useState(4.5);
  const [dpi, setDpi] = useState(300);
  const [name, setName] = useState("image");
  const [out, setOut] = useState<{ url: string; bytes: number; px: string } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function run(file: File | null) {
    if (!file) return;
    setName(file.name.replace(/\.[^.]+$/, ""));
    const bmp = await createImageBitmap(file);
    const pw = cmToPx(w, dpi);
    const ph = cmToPx(h, dpi);
    const c = document.createElement("canvas");
    c.width = pw;
    c.height = ph;
    const ctx = c.getContext("2d")!;
    ctx.imageSmoothingQuality = "high";
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, pw, ph);
    ctx.drawImage(bmp, 0, 0, pw, ph);
    const blob: Blob = await new Promise((res) => c.toBlob((b) => res(b!), "image/jpeg", 0.92));
    setOut({ url: URL.createObjectURL(blob), bytes: blob.size, px: `${pw}×${ph}` });
  }

  const pw = cmToPx(w, dpi);
  const ph = cmToPx(h, dpi);

  return (
    <div className="card">
      <div className="row">
        <div><label htmlFor="w">Width (cm)</label><input id="w" type="number" min={0.1} step={0.1} value={w} onChange={(e) => setW(Math.max(0.1, Number(e.target.value) || 0))} /></div>
        <div><label htmlFor="h">Height (cm)</label><input id="h" type="number" min={0.1} step={0.1} value={h} onChange={(e) => setH(Math.max(0.1, Number(e.target.value) || 0))} /></div>
        <div>
          <label htmlFor="dpi">DPI</label>
          <select id="dpi" value={dpi} onChange={(e) => setDpi(Number(e.target.value))}>
            <option value={300}>300 (print/forms)</option>
            <option value={200}>200</option>
            <option value={150}>150</option>
            <option value={96}>96 (screen)</option>
          </select>
        </div>
      </div>
      <div className="preset-row" style={{ marginTop: 8 }}>
        {PRESETS.map((p) => (
          <button key={p.label} type="button" className="chip" onClick={() => { setW(p.w); setH(p.h); }}>{p.label} cm</button>
        ))}
      </div>
      <p className="muted-note" style={{ marginTop: 8 }}>= <b>{pw}×{ph} px</b> at {dpi} DPI</p>

      <div className="dropzone" style={{ marginTop: 12 }} onClick={() => inputRef.current?.click()} onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); run(e.dataTransfer.files?.[0] ?? null); }}>
        📁 Drop a JPG/PNG here, or <u>click to choose</u>
        <input ref={inputRef} type="file" accept="image/*" hidden onChange={(e) => run(e.target.files?.[0] ?? null)} />
      </div>

      {out && (
        <div className="result">
          <p className="stat" style={{ fontSize: 16 }}>✅ Resized to <b>{w}×{h} cm</b> ({out.px} px) — {fmtKB(out.bytes)}</p>
          <a className="btn" href={out.url} download={`${name}-${w}x${h}cm.jpg`}>⬇ Download image</a>
        </div>
      )}
    </div>
  );
}
