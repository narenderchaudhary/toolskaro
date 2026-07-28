"use client";

import { useRef, useState } from "react";

const fmt = (b: number) => (b > 1024 * 1024 ? (b / 1024 / 1024).toFixed(2) + " MB" : (b / 1024).toFixed(0) + " KB");

type Out = { url: string; name: string; bytes: number };
type Fail = { name: string; reason: string };

// Decode one iPhone HEIC/HEIF photo to a JPEG blob. Tries the modern libheif-js
// decoder (heic-to) first, then falls back to heic2any — together they handle far
// more HEIC variants (incl. newer iPhone formats) than either alone. Non-HEIC images
// pass through unchanged.
async function toJpegBlob(f: File): Promise<Blob> {
  let looksHeic = /\.hei[cf]$/i.test(f.name) || /hei[cf]/i.test(f.type);
  // Confirm by magic bytes when the name/type is ambiguous.
  try {
    const { isHeic } = await import("heic-to/next");
    if (!looksHeic) looksHeic = await isHeic(f);
  } catch { /* detection is best-effort */ }

  if (!looksHeic) return f; // already a standard image — nothing to decode

  // 1) Primary: heic-to (libheif-js, actively maintained)
  try {
    const { heicTo } = await import("heic-to/next");
    return await heicTo({ blob: f, type: "image/jpeg", quality: 0.92 });
  } catch (e1) {
    // 2) Fallback: heic2any
    try {
      const heic2any = (await import("heic2any")).default;
      const r = await heic2any({ blob: f, toType: "image/jpeg", quality: 0.92 });
      return Array.isArray(r) ? (r[0] as Blob) : (r as Blob);
    } catch (e2) {
      console.error("HEIC decode failed for", f.name, { heicTo: e1, heic2any: e2 });
      throw new Error("could not be decoded — it may be an iPhone Live Photo or an unsupported HEIC variant");
    }
  }
}

export default function HeicConvert({ to }: { to: "jpg" | "pdf" }) {
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [fails, setFails] = useState<Fail[]>([]);
  const [out, setOut] = useState<Out[] | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function run(files: FileList | null) {
    if (!files || !files.length) return;
    setBusy(true); setError(null); setFails([]); setOut(null);
    const list = Array.from(files);
    const jpegs: { blob: Blob; name: string }[] = [];
    const failed: Fail[] = [];

    for (let i = 0; i < list.length; i++) {
      setStatus(`Converting ${i + 1} of ${list.length}…`);
      const f = list[i];
      try {
        const blob = await toJpegBlob(f);
        jpegs.push({ blob, name: f.name.replace(/\.[^.]+$/, "") });
      } catch (e) {
        failed.push({ name: f.name, reason: e instanceof Error ? e.message : "conversion failed" });
      }
    }

    try {
      if (!jpegs.length) {
        setError(failed.length
          ? "None of the files could be converted. Make sure they are HEIC/HEIF photos straight from an iPhone (Live Photos and some newer HEIC formats can’t be converted in the browser)."
          : "No files to convert.");
      } else if (to === "jpg") {
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
      setFails(failed);
    } catch (e) {
      console.error("HEIC post-processing failed", e);
      setError("Something went wrong building the output. Please try again with fewer files.");
    } finally {
      setStatus(""); setBusy(false);
    }
  }

  return (
    <div className="card">
      <div className="dropzone" onClick={() => !busy && inputRef.current?.click()} onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); if (!busy) run(e.dataTransfer.files); }}>
        {busy ? status || "Working…" : <>📁 Drop your HEIC photos here, or <u>click to choose</u> {to === "pdf" ? "(combined into one PDF)" : "(.heic / .heif)"}</>}
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

      {fails.length > 0 && (
        <div style={{ marginTop: 14, fontSize: 14, color: "#b45309" }}>
          <p style={{ fontWeight: 600, marginBottom: 4 }}>{fails.length} file{fails.length === 1 ? "" : "s"} couldn’t be converted:</p>
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            {fails.map((f) => <li key={f.name}>{f.name} — {f.reason}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}
