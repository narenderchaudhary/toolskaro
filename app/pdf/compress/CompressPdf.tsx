"use client";

import { useRef, useState } from "react";

const PDFJS_VERSION = "6.0.227";

const LEVELS = [
  { label: "Light", scale: 2, quality: 0.8 },
  { label: "Recommended", scale: 1.5, quality: 0.6 },
  { label: "Strong", scale: 1.1, quality: 0.45 },
];

// Quick target presets (in KB). 1 MB = 1024 KB.
const TARGETS = [
  { label: "100 KB", kb: 100 },
  { label: "200 KB", kb: 200 },
  { label: "500 KB", kb: 500 },
  { label: "1 MB", kb: 1024 },
  { label: "2 MB", kb: 2048 },
];

function fmt(b: number) {
  return b > 1024 * 1024 ? (b / 1024 / 1024).toFixed(2) + " MB" : (b / 1024).toFixed(0) + " KB";
}

export default function CompressPdf() {
  const [mode, setMode] = useState<"quality" | "target">("quality");
  const [level, setLevel] = useState(LEVELS[1]);
  const [targetKb, setTargetKb] = useState(500);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [res, setRes] = useState<{ url: string; before: number; after: number; reached: boolean } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Single-pass rasterise at a fixed quality/scale (quality mode).
  async function compressByQuality(file: File) {
    const pdfjs = await import("pdfjs-dist");
    const { PDFDocument } = await import("pdf-lib");
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${PDFJS_VERSION}/build/pdf.worker.min.mjs`;
    const data = new Uint8Array(await file.arrayBuffer());
    const src = await pdfjs.getDocument({ data }).promise;
    const out = await PDFDocument.create();
    for (let n = 1; n <= src.numPages; n++) {
      setStatus(`Compressing page ${n} of ${src.numPages}…`);
      const page = await src.getPage(n);
      const viewport = page.getViewport({ scale: level.scale });
      const canvas = document.createElement("canvas");
      canvas.width = viewport.width; canvas.height = viewport.height;
      const ctx = canvas.getContext("2d")!;
      ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, canvas.width, canvas.height);
      await page.render({ canvas, canvasContext: ctx, viewport }).promise;
      const jpgBlob: Blob = await new Promise((r) => canvas.toBlob((b) => r(b!), "image/jpeg", level.quality));
      const jpg = await out.embedJpg(new Uint8Array(await jpgBlob.arrayBuffer()));
      const orig = page.getViewport({ scale: 1 });
      const p = out.addPage([orig.width, orig.height]);
      p.drawImage(jpg, { x: 0, y: 0, width: orig.width, height: orig.height });
    }
    const bytes = await out.save();
    const blob = new Blob([bytes as BlobPart], { type: "application/pdf" });
    return { blob, reached: true };
  }

  // Binary-search JPEG quality (and drop resolution if needed) to land at/under a target size.
  async function compressToTarget(file: File, targetBytes: number) {
    const pdfjs = await import("pdfjs-dist");
    const { PDFDocument } = await import("pdf-lib");
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${PDFJS_VERSION}/build/pdf.worker.min.mjs`;
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
        ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, canvas.width, canvas.height);
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
        if (blob.size <= targetBytes) { localBest = blob; lo = q; } else { hi = q; }
      }
      if (!localBest) {
        const low = await assemble(canvases, 0.1);
        if (low.size <= targetBytes) localBest = low;
        best = low;
      }
      if (localBest) { best = localBest; break; }
      scale *= 0.72;
    }
    if (!best) throw new Error("empty");
    return { blob: best, reached: best.size <= targetBytes };
  }

  async function compress(file: File | null) {
    if (!file) return;
    setBusy(true); setError(null); setRes(null);
    try {
      const before = file.size;
      const { blob, reached } = mode === "target"
        ? await compressToTarget(file, targetKb * 1024)
        : await compressByQuality(file);
      setRes({ url: URL.createObjectURL(blob), before, after: blob.size, reached });
      setStatus("");
    } catch {
      setError("Could not compress this PDF. Make sure it is a valid, unencrypted file.");
    } finally {
      setBusy(false);
    }
  }

  const chipStyle = (active: boolean) => (active ? { borderColor: "var(--brand)", color: "var(--brand)" } : undefined);

  return (
    <div className="card">
      <label>How should we compress?</label>
      <div className="preset-row" style={{ marginBottom: 16 }}>
        <button type="button" className="chip" onClick={() => setMode("quality")} style={chipStyle(mode === "quality")}>By quality</button>
        <button type="button" className="chip" onClick={() => setMode("target")} style={chipStyle(mode === "target")}>To a target size</button>
      </div>

      {mode === "quality" ? (
        <>
          <label>Compression level</label>
          <div className="preset-row">
            {LEVELS.map((l) => (
              <button key={l.label} type="button" className="chip" onClick={() => setLevel(l)} style={chipStyle(level.label === l.label)}>{l.label}</button>
            ))}
          </div>
        </>
      ) : (
        <>
          <label>Target size</label>
          <div className="preset-row">
            {TARGETS.map((t) => (
              <button key={t.kb} type="button" className="chip" onClick={() => setTargetKb(t.kb)} style={chipStyle(targetKb === t.kb)}>{t.label}</button>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 12 }}>
            <label htmlFor="cp-custom" style={{ margin: 0 }}>Custom (KB):</label>
            <input
              id="cp-custom" type="number" min={20} max={51200} inputMode="numeric" value={targetKb}
              onChange={(e) => setTargetKb(Math.max(1, Number(e.target.value) || 0))}
              style={{ width: 130 }}
            />
            <span className="muted-note">= {(targetKb / 1024).toFixed(2)} MB</span>
          </div>
        </>
      )}

      <div
        className="dropzone"
        style={{ marginTop: 16 }}
        onClick={() => !busy && inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => { e.preventDefault(); if (!busy) compress(e.dataTransfer.files?.[0] ?? null); }}
      >
        {busy ? status || "Working…" : <>📁 Drop a PDF here, or <u>click to choose</u>{mode === "target" ? <> — target {targetKb >= 1024 ? (targetKb / 1024).toFixed(targetKb % 1024 ? 1 : 0) + " MB" : targetKb + " KB"}</> : null}</>}
        <input ref={inputRef} type="file" accept="application/pdf" hidden onChange={(e) => compress(e.target.files?.[0] ?? null)} />
      </div>

      <p className="muted-note" style={{ marginTop: 10 }}>Best for scanned documents and image-heavy PDFs (the kind portals reject for size).</p>

      {error && <p style={{ color: "#c0392b", marginTop: 14 }}>{error}</p>}

      {res && (
        <div className="result">
          <p className="stat">
            ✅ {fmt(res.before)} → <b>{fmt(res.after)}</b>{" "}
            {mode === "target"
              ? (res.reached ? <>— under your target ✅</> : <>(smallest possible for this PDF)</>)
              : (res.after < res.before ? <>— saved <b>{Math.round((1 - res.after / res.before) * 100)}%</b></> : "(already well-optimised)")}
          </p>
          <a className="btn" href={res.url} download="compressed.pdf">⬇ Download PDF</a>
        </div>
      )}
    </div>
  );
}
