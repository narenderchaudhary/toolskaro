"use client";

import { useRef, useState } from "react";
import { PDFDocument } from "pdf-lib";

export default function JpgToPdf() {
  const [files, setFiles] = useState<File[]>([]);
  const [busy, setBusy] = useState(false);
  const [url, setUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function add(list: FileList | null) {
    if (!list) return;
    setFiles((prev) => [...prev, ...Array.from(list)]);
    setUrl(null);
  }
  function remove(i: number) {
    setFiles((prev) => prev.filter((_, idx) => idx !== i));
    setUrl(null);
  }

  async function build() {
    if (!files.length) return;
    setBusy(true);
    try {
      const pdf = await PDFDocument.create();
      for (const file of files) {
        const bytes = new Uint8Array(await file.arrayBuffer());
        const isPng = file.type.includes("png");
        const image = isPng ? await pdf.embedPng(bytes) : await pdf.embedJpg(bytes);
        const page = pdf.addPage([image.width, image.height]);
        page.drawImage(image, { x: 0, y: 0, width: image.width, height: image.height });
      }
      const out = await pdf.save();
      const blob = new Blob([out as BlobPart], { type: "application/pdf" });
      setUrl(URL.createObjectURL(blob));
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
        📁 Drop images here, or <u>click to choose</u> (JPG / PNG — add as many as you like)
        <input ref={inputRef} type="file" accept="image/*" multiple hidden onChange={(e) => add(e.target.files)} />
      </div>

      {files.length > 0 && (
        <ul style={{ listStyle: "none", padding: 0, marginTop: 14 }}>
          {files.map((f, i) => (
            <li key={i} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid var(--border)", fontSize: 14 }}>
              <span>{i + 1}. {f.name}</span>
              <button className="chip" type="button" onClick={() => remove(i)}>Remove</button>
            </li>
          ))}
        </ul>
      )}

      <div style={{ marginTop: 16 }}>
        <button className="btn" disabled={!files.length || busy} onClick={build}>
          {busy ? "Building PDF…" : `Convert ${files.length || ""} image${files.length === 1 ? "" : "s"} to PDF`}
        </button>
      </div>

      {url && (
        <div className="result">
          <p className="stat">✅ Your PDF is ready.</p>
          <a className="btn" href={url} download="images.pdf">⬇ Download PDF</a>
        </div>
      )}
    </div>
  );
}
