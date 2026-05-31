"use client";

import { useRef, useState } from "react";

function parseRanges(input: string, max: number): number[] {
  const set = new Set<number>();
  for (const part of input.split(",")) {
    const p = part.trim();
    if (!p) continue;
    const m = p.match(/^(\d+)\s*-\s*(\d+)$/);
    if (m) {
      const a = +m[1], b = +m[2];
      for (let i = Math.min(a, b); i <= Math.max(a, b); i++) if (i >= 1 && i <= max) set.add(i);
    } else if (/^\d+$/.test(p)) {
      const i = +p; if (i >= 1 && i <= max) set.add(i);
    }
  }
  return [...set].sort((a, b) => a - b);
}

export default function SplitPdf() {
  const [file, setFile] = useState<File | null>(null);
  const [pages, setPages] = useState(0);
  const [range, setRange] = useState("");
  const [busy, setBusy] = useState(false);
  const [extractUrl, setExtractUrl] = useState<string | null>(null);
  const [singles, setSingles] = useState<{ url: string; n: number }[]>([]);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function onPick(f: File | null) {
    if (!f) return;
    setFile(f); setExtractUrl(null); setSingles([]); setError(null);
    try {
      const { PDFDocument } = await import("pdf-lib");
      const doc = await PDFDocument.load(await f.arrayBuffer());
      setPages(doc.getPageCount());
    } catch { setError("Could not read this PDF."); }
  }

  async function extract() {
    if (!file) return;
    const idx = parseRanges(range, pages).map((n) => n - 1);
    if (!idx.length) { setError("Enter valid page numbers, e.g. 1-3, 5"); return; }
    setBusy(true); setError(null); setExtractUrl(null);
    try {
      const { PDFDocument } = await import("pdf-lib");
      const src = await PDFDocument.load(await file.arrayBuffer());
      const out = await PDFDocument.create();
      const copied = await out.copyPages(src, idx);
      copied.forEach((p) => out.addPage(p));
      const bytes = await out.save();
      setExtractUrl(URL.createObjectURL(new Blob([bytes as BlobPart], { type: "application/pdf" })));
    } finally { setBusy(false); }
  }

  async function splitAll() {
    if (!file) return;
    setBusy(true); setError(null); setSingles([]);
    try {
      const { PDFDocument } = await import("pdf-lib");
      const src = await PDFDocument.load(await file.arrayBuffer());
      const res: { url: string; n: number }[] = [];
      for (let i = 0; i < src.getPageCount(); i++) {
        const out = await PDFDocument.create();
        const [pg] = await out.copyPages(src, [i]);
        out.addPage(pg);
        const bytes = await out.save();
        res.push({ url: URL.createObjectURL(new Blob([bytes as BlobPart], { type: "application/pdf" })), n: i + 1 });
      }
      setSingles(res);
    } finally { setBusy(false); }
  }

  return (
    <div className="card">
      <div className="dropzone" onClick={() => inputRef.current?.click()} onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); onPick(e.dataTransfer.files?.[0] ?? null); }}>
        {file ? <><strong>{file.name}</strong> — {pages} pages · click to change</> : <>📁 Drop a PDF here, or <u>click to choose</u></>}
        <input ref={inputRef} type="file" accept="application/pdf" hidden onChange={(e) => onPick(e.target.files?.[0] ?? null)} />
      </div>

      {file && (
        <>
          <label htmlFor="rg">Pages to extract (e.g. 1-3, 5, 8)</label>
          <input id="rg" type="text" value={range} onChange={(e) => setRange(e.target.value)} placeholder="1-3, 5" />
          <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button className="btn" disabled={busy} onClick={extract}>Extract pages → PDF</button>
            <button className="btn secondary" disabled={busy} onClick={splitAll}>{busy ? "Working…" : "Split every page"}</button>
          </div>
        </>
      )}

      {error && <p style={{ color: "#c0392b", marginTop: 14 }}>{error}</p>}

      {extractUrl && (
        <div className="result"><p className="stat">✅ Extracted PDF ready</p><a className="btn" href={extractUrl} download="extracted.pdf">⬇ Download PDF</a></div>
      )}

      {singles.length > 0 && (
        <div className="result">
          <p className="stat">✅ Split into {singles.length} single-page PDFs</p>
          <div className="preset-row">
            {singles.map((s) => (<a key={s.n} className="chip" href={s.url} download={`page-${s.n}.pdf`}>⬇ Page {s.n}</a>))}
          </div>
        </div>
      )}
    </div>
  );
}
