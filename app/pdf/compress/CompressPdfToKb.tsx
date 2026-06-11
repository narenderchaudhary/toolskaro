"use client";

import { useRef, useState } from "react";

const PDFJS_VERSION = "6.0.227";
const fmt = (b: number) => (b > 1024 * 1024 ? (b / 1024 / 1024).toFixed(2) + " MB" : (b / 1024).toFixed(0) + " KB");

// Compress a PDF to land at or under a target KB by rasterising pages and binary-searching JPEG
// quality (re-encoding is cheap, so pages are rendered once per scale). Falls back to lower scale.
export default function CompressPdfToKb({ targetKb }: { targetKb: number }) {
  const target = targetKb * 1024;
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [res, setRes] = useState<{ url: string; before: number; after: number; reached: boolean } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function run(file: File | null) {
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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const pages: { pg: any; vp1: any }[] = [];
      for (let n = 1; n <= src.numPages; n++) {
        const pg = await src.getPage(n);
        pages.push({ pg, vp1: pg.getViewport({ scale: 1 }) });
      }

      async function renderCanvases(scale: number) {
        const canvases: HTMLCanvasElement[] = [];
        for (let i = 0; i < pages.length; i++) {
          setStatus(`Rendering page ${i + 1} of ${pages.length}…`);
          const vp = pages[i].pg.getViewport({ scale });
          const canvas = document.createElement("canvas");
          canvas.width = Math.max(1, Math.round(vp.width));
          canvas.height = Math.max(1, Math.round(vp.height));
          const ctx = canvas.getContext("2d")!;
          ctx.fillStyle = "#fff";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          await pages[i].pg.render({ canvas, canvasContext: ctx, viewport: vp }).promise;
          canvases.push(canvas);
        }
        return canvases;
      }

      async function assemble(canvases: HTMLCanvasElement[], quality: number) {
        const out = await PDFDocument.create();
        for (let i = 0; i < canvases.length; i++) {
          const blob: Blob = await new Promise((r) => canvases[i].toBlob((b) => r(b!), "image/jpeg", quality));
          const jpg = await out.embedJpg(new Uint8Array(await blob.arrayBuffer()));
          const o = pages[i].vp1;
          const p = out.addPage([o.width, o.height]);
          p.drawImage(jpg, { x: 0, y: 0, width: o.width, height: o.height });
        }
        const bytes = await out.save();
        return new Blob([bytes as BlobPart], { type: "application/pdf" });
      }

      let scale = 1.7;
      let best: Blob | null = null;
      for (let attempt = 0; attempt < 4; attempt++) {
        const canvases = await renderCanvases(scale);
        setStatus("Finding the best quality under your target…");
        let lo = 0.1, hi = 0.92;
        let localBest: Blob | null = null;
        for (let it = 0; it < 7; it++) {
          const q = (lo + hi) / 2;
          const blob = await assemble(canvases, q);
          if (blob.size <= target) { localBest = blob; lo = q; } else { hi = q; }
        }
        if (!localBest) {
          const low = await assemble(canvases, 0.1);
          if (low.size <= target) localBest = low;
          best = low; // smallest so far, kept as fallback
        }
        if (localBest) { best = localBest; break; }
        scale *= 0.72; // even lowest quality too big → shrink resolution and retry
      }

      if (!best) throw new Error("empty");
      const reached = best.size <= target;
      setRes({ url: URL.createObjectURL(best), before, after: best.size, reached });
      setStatus("");
    } catch {
      setError("Could not compress this PDF. Make sure it is a valid, unencrypted file.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="card">
      <div
        className="dropzone"
        onClick={() => !busy && inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => { e.preventDefault(); if (!busy) run(e.dataTransfer.files?.[0] ?? null); }}
      >
        {busy ? status || "Working…" : <>📁 Drop a PDF here, or <u>click to choose</u> — target {targetKb}&nbsp;KB</>}
        <input ref={inputRef} type="file" accept="application/pdf" hidden onChange={(e) => run(e.target.files?.[0] ?? null)} />
      </div>

      <p className="muted-note" style={{ marginTop: 10 }}>Best for scanned or image-heavy PDFs. The target is preset to {targetKb}&nbsp;KB.</p>

      {error && <p style={{ color: "#c0392b", marginTop: 14 }}>{error}</p>}

      {res && (
        <div className="result">
          <p className="stat" style={{ fontSize: 16 }}>
            {fmt(res.before)} → <b>{fmt(res.after)}</b>{" "}
            {res.reached ? <>— under {targetKb}&nbsp;KB ✅</> : <>(smallest possible for this PDF)</>}
          </p>
          <a className="btn" href={res.url} download={`compressed-${targetKb}kb.pdf`}>⬇ Download PDF</a>
        </div>
      )}
    </div>
  );
}
