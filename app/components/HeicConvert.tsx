"use client";

import { useRef, useState } from "react";

const fmt = (b: number) => (b > 1024 * 1024 ? (b / 1024 / 1024).toFixed(2) + " MB" : (b / 1024).toFixed(0) + " KB");

type Out = { url: string; name: string; bytes: number };

// Converts iPhone HEIC/HEIF photos in the browser. to="jpg" yields one JPG per file;
// to="pdf" combines them into a single PDF (one photo per page). HEIC decode runs locally.
export default function HeicConvert({ to }: { to: "jpg" | "pdf" }) {
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [out, setOut] = useState<Out[] | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function run(files: FileList | null) {
    if (!files || !files.length) return;
    setBusy(true);
    setError(null);
    setOut(null);
    try {
      const heic2any = (await import("heic2any")).default;
      const list = Array.from(files);
      const jpegs: { blob: Blob; name: string }[] = [];
      for (let i = 0; i < list.length; i++) {
        setStatus(`Converting ${i + 1} of ${list.length}…`);
        const f = list[i];
        const isHeic = /heic|heif/i.test(f.type) || /\.hei[cf]$/i.test(f.name);
        let blob: Blob = f;
        if (isHeic) {
          const r = await heic2any({ blob: f, toType: "image/jpeg", quality: 0.92 });
          blob = Array.isArray(r) ? r[0] : (r as Blob);
        }
        jpegs.push({ blob, name: f.name.replace(/\.[^.]+$/, "") });
      }

      if (to === "jpg") {
        setOut(jpegs.map((j) => ({ url: URL.createObjectURL(j.blob), name: `${j.name}.jpg`, bytes: j.blob.size })));
      } else {
        setStatus("Building PDF…");
        const { PDFDocument } = await import("pdf-lib");
        const pdf = await PDFDocument.create();
        for (const j of jpegs) {
          const img = await pdf.embedJpg(new Uint8Array(await j.blob.arrayBuffer()));
          const page = pdf.addPage([img.width, img.height]);
          page.drawImage(img, { x: 0, y: 0, width: img.width, height: img.height });
        }
        const bytes = await pdf.save();
        const blob = new Blob([bytes as BlobPart], { type: "application/pdf" });
        setOut([{ url: URL.createObjectURL(blob), name: "converted.pdf", bytes: blob.size }]);
      }
      setStatus("");
    } catch {
      setError("Could not convert this file. Make sure it is a HEIC/HEIF photo (the format iPhones use).");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="card">
      <div className="dropzone" onClick={() => !busy && inputRef.current?.click()} onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); if (!busy) run(e.dataTransfer.files); }}>
        {busy ? status || "Working…" : <>📁 Drop your HEIC photo{to === "pdf" ? "s" : "s"} here, or <u>click to choose</u> {to === "pdf" ? "(combined into one PDF)" : "(.heic / .heif)"}</>}
        <input ref={inputRef} type="file" accept=".heic,.heif,image/heic,image/heif" multiple hidden onChange={(e) => run(e.target.files)} />
      </div>
      <p className="muted-note" style={{ marginTop: 10 }}>HEIC is the format iPhones save photos in. Conversion runs in your browser — nothing is uploaded.</p>

      {error && <p style={{ color: "#c0392b", marginTop: 14 }}>{error}</p>}

      {out && (
        <div className="result">
          <p className="stat" style={{ fontSize: 16 }}>✅ Converted {out.length} file{out.length === 1 ? "" : "s"}{to === "pdf" ? " to PDF" : " to JPG"}.</p>
          {out.map((o) => (
            <a key={o.url} className="btn" href={o.url} download={o.name} style={{ marginRight: 10, marginTop: 8 }}>⬇ {o.name} <span style={{ opacity: 0.8 }}>({fmt(o.bytes)})</span></a>
          ))}
        </div>
      )}
    </div>
  );
}
