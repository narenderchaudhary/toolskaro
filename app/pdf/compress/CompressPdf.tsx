"use client";

import { useRef, useState } from "react";

const PDFJS_VERSION = "6.0.227";

const LEVELS = [
  { label: "Light", scale: 2, quality: 0.8 },
  { label: "Recommended", scale: 1.5, quality: 0.6 },
  { label: "Strong", scale: 1.1, quality: 0.45 },
];

function fmt(b: number) {
  return b > 1024 * 1024 ? (b / 1024 / 1024).toFixed(2) + " MB" : (b / 1024).toFixed(0) + " KB";
}

export default function CompressPdf() {
  const [level, setLevel] = useState(LEVELS[1]);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [res, setRes] = useState<{ url: string; before: number; after: number } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function compress(file: File | null) {
    if (!file) return;
    setBusy(true);
    setError(null);
    setRes(null);
    try {
      const pdfjs = await import("pdfjs-dist");
      const { PDFDocument } = await import("pdf-lib");
      pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${PDFJS_VERSION}/build/pdf.worker.min.mjs`;

      const before = file.size;
      const data = new Uint8Array(await file.arrayBuffer());
      const src = await pdfjs.getDocument({ data }).promise;
      const out = await PDFDocument.create();

      for (let n = 1; n <= src.numPages; n++) {
        setStatus(`Compressing page ${n} of ${src.numPages}…`);
        const page = await src.getPage(n);
        const viewport = page.getViewport({ scale: level.scale });
        const canvas = document.createElement("canvas");
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const ctx = canvas.getContext("2d")!;
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        await page.render({ canvas, canvasContext: ctx, viewport }).promise;
        const jpgBlob: Blob = await new Promise((r) => canvas.toBlob((b) => r(b!), "image/jpeg", level.quality));
        const jpg = await out.embedJpg(new Uint8Array(await jpgBlob.arrayBuffer()));
        const orig = page.getViewport({ scale: 1 });
        const p = out.addPage([orig.width, orig.height]);
        p.drawImage(jpg, { x: 0, y: 0, width: orig.width, height: orig.height });
      }

      const bytes = await out.save();
      const blob = new Blob([bytes as BlobPart], { type: "application/pdf" });
      setRes({ url: URL.createObjectURL(blob), before, after: blob.size });
      setStatus("");
    } catch {
      setError("Could not compress this PDF. Make sure it is a valid, unencrypted file.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="card">
      <label>Compression level</label>
      <div className="preset-row">
        {LEVELS.map((l) => (
          <button key={l.label} type="button" className="chip" onClick={() => setLevel(l)} style={level.label === l.label ? { borderColor: "var(--brand)", color: "var(--brand)" } : undefined}>{l.label}</button>
        ))}
      </div>

      <div
        className="dropzone"
        style={{ marginTop: 14 }}
        onClick={() => !busy && inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => { e.preventDefault(); if (!busy) compress(e.dataTransfer.files?.[0] ?? null); }}
      >
        {busy ? status || "Working…" : <>📁 Drop a PDF here, or <u>click to choose</u></>}
        <input ref={inputRef} type="file" accept="application/pdf" hidden onChange={(e) => compress(e.target.files?.[0] ?? null)} />
      </div>

      <p className="muted-note" style={{ marginTop: 10 }}>Best for scanned documents and image-heavy PDFs (the kind exam portals reject for size).</p>

      {error && <p style={{ color: "#c0392b", marginTop: 14 }}>{error}</p>}

      {res && (
        <div className="result">
          <p className="stat">
            ✅ {fmt(res.before)} → <b>{fmt(res.after)}</b>{" "}
            {res.after < res.before ? <>— saved <b>{Math.round((1 - res.after / res.before) * 100)}%</b></> : "(already well-optimised)"}
          </p>
          <a className="btn" href={res.url} download="compressed.pdf">⬇ Download PDF</a>
        </div>
      )}
    </div>
  );
}
