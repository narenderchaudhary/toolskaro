"use client";

import { useRef, useState } from "react";
import { PDFDocument, type PDFImage } from "pdf-lib";

function loadImg(src: string): Promise<HTMLImageElement> {
  return new Promise((res, rej) => {
    const im = new Image();
    im.onload = () => res(im);
    im.onerror = () => rej(new Error("decode failed"));
    im.src = src;
  });
}

// Re-encode any browser-decodable image (WebP, HEIC, GIF, BMP, progressive/CMYK JPEG…) to PNG bytes.
async function toPngBytes(file: File): Promise<Uint8Array> {
  const url = URL.createObjectURL(file);
  try {
    const im = await loadImg(url);
    const c = document.createElement("canvas");
    c.width = im.naturalWidth;
    c.height = im.naturalHeight;
    c.getContext("2d")!.drawImage(im, 0, 0);
    const blob: Blob = await new Promise((r) => c.toBlob((b) => r(b!), "image/png"));
    return new Uint8Array(await blob.arrayBuffer());
  } finally {
    URL.revokeObjectURL(url);
  }
}

// Embed by declared type; if pdf-lib rejects (wrong type / unsupported JPEG), fall back to canvas→PNG.
async function embedImage(pdf: PDFDocument, file: File): Promise<PDFImage> {
  const bytes = new Uint8Array(await file.arrayBuffer());
  const t = file.type.toLowerCase();
  try {
    if (t.includes("png")) return await pdf.embedPng(bytes);
    if (t.includes("jpeg") || t.includes("jpg")) return await pdf.embedJpg(bytes);
  } catch {
    /* fall through to canvas re-encode */
  }
  return pdf.embedPng(await toPngBytes(file));
}

export default function JpgToPdf() {
  const [files, setFiles] = useState<File[]>([]);
  const [busy, setBusy] = useState(false);
  const [url, setUrl] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);
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
    setErr(null);
    try {
      const pdf = await PDFDocument.create();
      for (const file of files) {
        const image = await embedImage(pdf, file);
        const page = pdf.addPage([image.width, image.height]);
        page.drawImage(image, { x: 0, y: 0, width: image.width, height: image.height });
      }
      const out = await pdf.save();
      const blob = new Blob([out as BlobPart], { type: "application/pdf" });
      setUrl((prev) => { if (prev) URL.revokeObjectURL(prev); return URL.createObjectURL(blob); });
    } catch {
      setErr("Sorry, one of the files couldn't be read as an image. Please use JPG, PNG or WebP files.");
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

      {err && <p style={{ color: "#c0392b", marginTop: 12, fontSize: 14 }}>{err}</p>}

      {url && (
        <div className="result">
          <p className="stat">✅ Your PDF is ready.</p>
          <a className="btn" href={url} download="images.pdf">⬇ Download PDF</a>
        </div>
      )}
    </div>
  );
}
