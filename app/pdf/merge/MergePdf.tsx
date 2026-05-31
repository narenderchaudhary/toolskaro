"use client";

import { useRef, useState } from "react";
import { PDFDocument } from "pdf-lib";

export default function MergePdf() {
  const [files, setFiles] = useState<File[]>([]);
  const [busy, setBusy] = useState(false);
  const [url, setUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function add(list: FileList | null) {
    if (!list) return;
    setFiles((prev) => [...prev, ...Array.from(list).filter((f) => f.type === "application/pdf")]);
    setUrl(null);
  }
  function move(i: number, dir: -1 | 1) {
    setFiles((prev) => {
      const next = [...prev];
      const j = i + dir;
      if (j < 0 || j >= next.length) return prev;
      [next[i], next[j]] = [next[j], next[i]];
      return next;
    });
    setUrl(null);
  }
  function remove(i: number) {
    setFiles((prev) => prev.filter((_, idx) => idx !== i));
    setUrl(null);
  }

  async function merge() {
    if (files.length < 2) return;
    setBusy(true);
    setError(null);
    try {
      const out = await PDFDocument.create();
      for (const file of files) {
        const src = await PDFDocument.load(await file.arrayBuffer());
        const pages = await out.copyPages(src, src.getPageIndices());
        pages.forEach((p) => out.addPage(p));
      }
      const bytes = await out.save();
      setUrl(URL.createObjectURL(new Blob([bytes as BlobPart], { type: "application/pdf" })));
    } catch {
      setError("One of the files could not be read. Make sure all files are valid, unencrypted PDFs.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="card">
      <div
        className="dropzone"
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => { e.preventDefault(); add(e.dataTransfer.files); }}
      >
        📁 Drop PDF files here, or <u>click to choose</u> (add 2 or more)
        <input ref={inputRef} type="file" accept="application/pdf" multiple hidden onChange={(e) => add(e.target.files)} />
      </div>

      {files.length > 0 && (
        <ul style={{ listStyle: "none", padding: 0, marginTop: 14 }}>
          {files.map((f, i) => (
            <li key={i} style={{ display: "flex", alignItems: "center", gap: 8, justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid var(--border)", fontSize: 14 }}>
              <span>{i + 1}. {f.name}</span>
              <span style={{ display: "flex", gap: 6 }}>
                <button className="chip" type="button" onClick={() => move(i, -1)} disabled={i === 0}>↑</button>
                <button className="chip" type="button" onClick={() => move(i, 1)} disabled={i === files.length - 1}>↓</button>
                <button className="chip" type="button" onClick={() => remove(i)}>✕</button>
              </span>
            </li>
          ))}
        </ul>
      )}

      <div style={{ marginTop: 16 }}>
        <button className="btn" disabled={files.length < 2 || busy} onClick={merge}>
          {busy ? "Merging…" : "Merge PDFs"}
        </button>
      </div>

      {error && <p style={{ color: "#c0392b", marginTop: 14 }}>{error}</p>}
      {url && (
        <div className="result">
          <p className="stat">✅ Merged {files.length} PDFs into one.</p>
          <a className="btn" href={url} download="merged.pdf">⬇ Download PDF</a>
        </div>
      )}
    </div>
  );
}
