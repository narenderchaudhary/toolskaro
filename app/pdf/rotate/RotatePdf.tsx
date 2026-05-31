"use client";

import { useRef, useState } from "react";

export default function RotatePdf() {
  const [file, setFile] = useState<File | null>(null);
  const [angle, setAngle] = useState(90);
  const [busy, setBusy] = useState(false);
  const [url, setUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function rotate(f: File | null, deg: number) {
    if (!f) return;
    setBusy(true); setError(null); setUrl(null);
    try {
      const { PDFDocument, degrees } = await import("pdf-lib");
      const doc = await PDFDocument.load(await f.arrayBuffer());
      doc.getPages().forEach((p) => {
        const cur = p.getRotation().angle;
        p.setRotation(degrees((cur + deg) % 360));
      });
      const bytes = await doc.save();
      setUrl(URL.createObjectURL(new Blob([bytes as BlobPart], { type: "application/pdf" })));
    } catch { setError("Could not rotate this PDF. Make sure it is a valid, unencrypted file."); }
    finally { setBusy(false); }
  }

  return (
    <div className="card">
      <label>Rotation</label>
      <div className="preset-row">
        {[90, 180, 270].map((d) => (
          <button key={d} type="button" className="chip" onClick={() => setAngle(d)} style={angle === d ? { borderColor: "var(--brand)", color: "var(--brand)" } : undefined}>{d}° clockwise</button>
        ))}
      </div>

      <div className="dropzone" style={{ marginTop: 14 }} onClick={() => !busy && inputRef.current?.click()} onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); if (!busy) { setFile(e.dataTransfer.files?.[0] ?? null); rotate(e.dataTransfer.files?.[0] ?? null, angle); } }}>
        {busy ? "Rotating…" : file ? <><strong>{file.name}</strong> · click to change</> : <>📁 Drop a PDF here, or <u>click to choose</u></>}
        <input ref={inputRef} type="file" accept="application/pdf" hidden onChange={(e) => { setFile(e.target.files?.[0] ?? null); rotate(e.target.files?.[0] ?? null, angle); }} />
      </div>

      {file && !busy && <div style={{ marginTop: 14 }}><button className="btn" onClick={() => rotate(file, angle)}>Rotate {angle}°</button></div>}
      {error && <p style={{ color: "#c0392b", marginTop: 14 }}>{error}</p>}
      {url && <div className="result"><p className="stat">✅ Rotated PDF ready</p><a className="btn" href={url} download="rotated.pdf">⬇ Download PDF</a></div>}
    </div>
  );
}
