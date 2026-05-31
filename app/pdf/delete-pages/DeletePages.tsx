"use client";

import { useRef, useState } from "react";

function parseRanges(input: string, max: number): number[] {
  const set = new Set<number>();
  for (const part of input.split(",")) {
    const p = part.trim(); if (!p) continue;
    const m = p.match(/^(\d+)\s*-\s*(\d+)$/);
    if (m) { for (let i = Math.min(+m[1], +m[2]); i <= Math.max(+m[1], +m[2]); i++) if (i >= 1 && i <= max) set.add(i); }
    else if (/^\d+$/.test(p)) { const i = +p; if (i >= 1 && i <= max) set.add(i); }
  }
  return [...set];
}

export default function DeletePages() {
  const [file, setFile] = useState<File | null>(null);
  const [pages, setPages] = useState(0);
  const [del, setDel] = useState("");
  const [busy, setBusy] = useState(false);
  const [url, setUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function onPick(f: File | null) {
    if (!f) return;
    setFile(f); setUrl(null); setError(null);
    try { const { PDFDocument } = await import("pdf-lib"); setPages((await PDFDocument.load(await f.arrayBuffer())).getPageCount()); }
    catch { setError("Could not read this PDF."); }
  }

  async function remove() {
    if (!file) return;
    const toDelete = new Set(parseRanges(del, pages));
    if (!toDelete.size) { setError("Enter valid page numbers to delete, e.g. 2, 4-6"); return; }
    if (toDelete.size >= pages) { setError("You can't delete every page."); return; }
    setBusy(true); setError(null); setUrl(null);
    try {
      const { PDFDocument } = await import("pdf-lib");
      const src = await PDFDocument.load(await file.arrayBuffer());
      const keep = [];
      for (let i = 0; i < pages; i++) if (!toDelete.has(i + 1)) keep.push(i);
      const out = await PDFDocument.create();
      const copied = await out.copyPages(src, keep);
      copied.forEach((p) => out.addPage(p));
      const bytes = await out.save();
      setUrl(URL.createObjectURL(new Blob([bytes as BlobPart], { type: "application/pdf" })));
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
          <label htmlFor="d">Pages to delete (e.g. 2, 4-6)</label>
          <input id="d" type="text" value={del} onChange={(e) => setDel(e.target.value)} placeholder="2, 4-6" />
          <div style={{ marginTop: 14 }}><button className="btn" disabled={busy} onClick={remove}>{busy ? "Working…" : "Delete pages"}</button></div>
        </>
      )}
      {error && <p style={{ color: "#c0392b", marginTop: 14 }}>{error}</p>}
      {url && <div className="result"><p className="stat">✅ New PDF ready (selected pages removed)</p><a className="btn" href={url} download="edited.pdf">⬇ Download PDF</a></div>}
    </div>
  );
}
