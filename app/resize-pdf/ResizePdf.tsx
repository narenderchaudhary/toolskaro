"use client";

import { useRef, useState } from "react";

const fmt = (b: number) => (b > 1024 * 1024 ? (b / 1024 / 1024).toFixed(2) + " MB" : (b / 1024).toFixed(0) + " KB");

const SIZES: Record<string, [number, number]> = {
  A4: [595.28, 841.89],
  Letter: [612, 792],
  Legal: [612, 1008],
  A5: [419.53, 595.28],
  A3: [841.89, 1190.55],
};

export default function ResizePdf() {
  const [size, setSize] = useState<keyof typeof SIZES>("A4");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [res, setRes] = useState<{ url: string; before: number; after: number } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function run(file: File | null) {
    if (!file) return;
    setBusy(true);
    setError(null);
    setRes(null);
    try {
      const { PDFDocument } = await import("pdf-lib");
      const before = file.size;
      const bytes = new Uint8Array(await file.arrayBuffer());
      const src = await PDFDocument.load(bytes);
      const out = await PDFDocument.create();
      const embedded = await out.embedPages(src.getPages());
      const [TW, TH] = SIZES[size];
      embedded.forEach((emb) => {
        const page = out.addPage([TW, TH]);
        const scale = Math.min(TW / emb.width, TH / emb.height);
        const w = emb.width * scale;
        const h = emb.height * scale;
        page.drawPage(emb, { x: (TW - w) / 2, y: (TH - h) / 2, xScale: scale, yScale: scale });
      });
      const outBytes = await out.save();
      const blob = new Blob([outBytes as BlobPart], { type: "application/pdf" });
      setRes({ url: URL.createObjectURL(blob), before, after: blob.size });
    } catch {
      setError("Could not resize this PDF. Make sure it is a valid, unencrypted file.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="card">
      <label>Resize every page to</label>
      <div className="preset-row">
        {(Object.keys(SIZES) as (keyof typeof SIZES)[]).map((s) => (
          <button key={s} type="button" className="chip" onClick={() => setSize(s)} style={size === s ? { borderColor: "var(--brand)", color: "var(--brand)" } : undefined}>{s}</button>
        ))}
      </div>

      <div className="dropzone" style={{ marginTop: 14 }} onClick={() => !busy && inputRef.current?.click()} onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); if (!busy) run(e.dataTransfer.files?.[0] ?? null); }}>
        {busy ? "Resizing…" : <>📁 Drop a PDF here, or <u>click to choose</u> — fit to {size}</>}
        <input ref={inputRef} type="file" accept="application/pdf" hidden onChange={(e) => run(e.target.files?.[0] ?? null)} />
      </div>
      <p className="muted-note" style={{ marginTop: 10 }}>Every page is scaled to fit the chosen page size, centred and keeping its proportions.</p>

      {error && <p style={{ color: "#c0392b", marginTop: 14 }}>{error}</p>}

      {res && (
        <div className="result">
          <p className="stat" style={{ fontSize: 16 }}>✅ Resized to <b>{size}</b> — {fmt(res.before)} → {fmt(res.after)}</p>
          <a className="btn" href={res.url} download={`resized-${size}.pdf`}>⬇ Download PDF</a>
        </div>
      )}
    </div>
  );
}
