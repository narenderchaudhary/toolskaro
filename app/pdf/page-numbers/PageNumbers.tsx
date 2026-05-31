"use client";

import { useRef, useState } from "react";

type Pos = "bottom-center" | "bottom-right" | "top-right";

export default function PageNumbers() {
  const [file, setFile] = useState<File | null>(null);
  const [pos, setPos] = useState<Pos>("bottom-center");
  const [start, setStart] = useState(1);
  const [busy, setBusy] = useState(false);
  const [url, setUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function apply(f: File | null) {
    if (!f) return;
    setBusy(true); setError(null); setUrl(null); setFile(f);
    try {
      const { PDFDocument, StandardFonts, rgb } = await import("pdf-lib");
      const doc = await PDFDocument.load(await f.arrayBuffer());
      const font = await doc.embedFont(StandardFonts.Helvetica);
      const size = 11;
      doc.getPages().forEach((page, i) => {
        const { width, height } = page.getSize();
        const text = String(start + i);
        const tw = font.widthOfTextAtSize(text, size);
        let x = (width - tw) / 2, y = 24;
        if (pos === "bottom-right") { x = width - tw - 30; y = 24; }
        if (pos === "top-right") { x = width - tw - 30; y = height - 28; }
        page.drawText(text, { x, y, size, font, color: rgb(0.2, 0.2, 0.2) });
      });
      const bytes = await doc.save();
      setUrl(URL.createObjectURL(new Blob([bytes as BlobPart], { type: "application/pdf" })));
    } catch { setError("Could not add page numbers. Make sure it is a valid, unencrypted PDF."); }
    finally { setBusy(false); }
  }

  return (
    <div className="card">
      <label>Position</label>
      <div className="preset-row">
        {([["bottom-center", "Bottom centre"], ["bottom-right", "Bottom right"], ["top-right", "Top right"]] as [Pos, string][]).map(([p, l]) => (
          <button key={p} type="button" className="chip" onClick={() => setPos(p)} style={pos === p ? { borderColor: "var(--brand)", color: "var(--brand)" } : undefined}>{l}</button>
        ))}
      </div>
      <label htmlFor="s" style={{ marginTop: 12 }}>Start numbering from</label>
      <input id="s" type="number" min={0} value={start} onChange={(e) => setStart(Math.max(0, Number(e.target.value) || 0))} style={{ maxWidth: 160 }} />

      <div className="dropzone" style={{ marginTop: 14 }} onClick={() => !busy && inputRef.current?.click()} onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); if (!busy) apply(e.dataTransfer.files?.[0] ?? null); }}>
        {busy ? "Adding page numbers…" : file ? <><strong>{file.name}</strong> · click to change</> : <>📁 Drop a PDF here, or <u>click to choose</u></>}
        <input ref={inputRef} type="file" accept="application/pdf" hidden onChange={(e) => apply(e.target.files?.[0] ?? null)} />
      </div>

      {file && !busy && <div style={{ marginTop: 14 }}><button className="btn" onClick={() => apply(file)}>Add page numbers</button></div>}
      {error && <p style={{ color: "#c0392b", marginTop: 14 }}>{error}</p>}
      {url && <div className="result"><p className="stat">✅ Numbered PDF ready</p><a className="btn" href={url} download="numbered.pdf">⬇ Download PDF</a></div>}
    </div>
  );
}
