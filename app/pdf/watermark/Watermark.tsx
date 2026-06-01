"use client";

import { useRef, useState } from "react";

function hexToRgb01(hex: string) {
  const m = hex.replace("#", "");
  const n = parseInt(m.length === 3 ? m.split("").map((c) => c + c).join("") : m, 16);
  return { r: ((n >> 16) & 255) / 255, g: ((n >> 8) & 255) / 255, b: (n & 255) / 255 };
}

export default function Watermark() {
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState("CONFIDENTIAL");
  const [size, setSize] = useState(50);
  const [color, setColor] = useState("#ff0000");
  const [opacity, setOpacity] = useState(0.3);
  const [diagonal, setDiagonal] = useState(true);
  const [busy, setBusy] = useState(false);
  const [url, setUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function apply() {
    if (!file || !text.trim()) return;
    setBusy(true); setError(null); setUrl(null);
    try {
      const { PDFDocument, StandardFonts, rgb, degrees } = await import("pdf-lib");
      const doc = await PDFDocument.load(await file.arrayBuffer());
      const font = await doc.embedFont(StandardFonts.HelveticaBold);
      const c = hexToRgb01(color);
      doc.getPages().forEach((p) => {
        const { width, height } = p.getSize();
        const tw = font.widthOfTextAtSize(text, size);
        if (diagonal) {
          p.drawText(text, { x: width / 2 - (tw / 2) * 0.7, y: height / 2 - size / 2, size, font, color: rgb(c.r, c.g, c.b), opacity, rotate: degrees(45) });
        } else {
          p.drawText(text, { x: (width - tw) / 2, y: height / 2 - size / 2, size, font, color: rgb(c.r, c.g, c.b), opacity });
        }
      });
      const bytes = await doc.save();
      setUrl(URL.createObjectURL(new Blob([bytes as BlobPart], { type: "application/pdf" })));
    } catch { setError("Could not add the watermark. Make sure it is a valid, unencrypted PDF."); }
    finally { setBusy(false); }
  }

  return (
    <div className="card">
      <div className="dropzone" onClick={() => inputRef.current?.click()} onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); setFile(e.dataTransfer.files?.[0] ?? null); setUrl(null); }}>
        {file ? <><strong>{file.name}</strong> · click to change</> : <>📁 Drop a PDF here, or <u>click to choose</u></>}
        <input ref={inputRef} type="file" accept="application/pdf" hidden onChange={(e) => { setFile(e.target.files?.[0] ?? null); setUrl(null); }} />
      </div>

      <label htmlFor="wt">Watermark text</label>
      <input id="wt" type="text" value={text} onChange={(e) => setText(e.target.value)} />

      <div className="row">
        <div><label>Font size</label><input type="number" min={10} max={150} value={size} onChange={(e) => setSize(Number(e.target.value) || 50)} /></div>
        <div><label>Colour</label><input type="color" value={color} onChange={(e) => setColor(e.target.value)} style={{ height: 42, padding: 4 }} /></div>
        <div><label>Opacity: {Math.round(opacity * 100)}%</label><input type="range" min={10} max={100} value={Math.round(opacity * 100)} onChange={(e) => setOpacity(Number(e.target.value) / 100)} style={{ width: "100%" }} /></div>
      </div>
      <label style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 400, marginTop: 10 }}>
        <input type="checkbox" checked={diagonal} onChange={(e) => setDiagonal(e.target.checked)} style={{ width: "auto" }} /> Diagonal (45°)
      </label>

      <div style={{ marginTop: 16 }}>
        <button className="btn" disabled={!file || busy} onClick={apply}>{busy ? "Applying…" : "Add watermark"}</button>
      </div>

      {error && <p style={{ color: "#c0392b", marginTop: 14 }}>{error}</p>}
      {url && <div className="result"><p className="stat">✅ Watermarked PDF ready</p><a className="btn" href={url} download="watermarked.pdf">⬇ Download PDF</a></div>}
    </div>
  );
}
