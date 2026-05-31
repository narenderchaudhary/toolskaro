"use client";

import { useRef, useState } from "react";

const PDFJS_VERSION = "6.0.227";

type Pic = { url: string; page: number };

export default function PdfToJpg() {
  const [pics, setPics] = useState<Pic[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  async function convert(file: File | null) {
    if (!file) return;
    setBusy(true);
    setError(null);
    setPics([]);
    setFileName(file.name.replace(/\.pdf$/i, ""));
    try {
      const pdfjs = await import("pdfjs-dist");
      pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${PDFJS_VERSION}/build/pdf.worker.min.mjs`;

      const data = new Uint8Array(await file.arrayBuffer());
      const pdf = await pdfjs.getDocument({ data }).promise;
      const out: Pic[] = [];
      for (let n = 1; n <= pdf.numPages; n++) {
        const page = await pdf.getPage(n);
        const viewport = page.getViewport({ scale: 2 }); // ~144 DPI, sharp
        const canvas = document.createElement("canvas");
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const ctx = canvas.getContext("2d")!;
        await page.render({ canvas, canvasContext: ctx, viewport }).promise;
        const blob: Blob = await new Promise((res) => canvas.toBlob((b) => res(b!), "image/jpeg", 0.9));
        out.push({ url: URL.createObjectURL(blob), page: n });
      }
      setPics(out);
    } catch {
      setError("Could not read this PDF. Make sure it is a valid, unencrypted file.");
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
        onDrop={(e) => { e.preventDefault(); convert(e.dataTransfer.files?.[0] ?? null); }}
      >
        {busy ? "Converting pages…" : <>📁 Drop a PDF here, or <u>click to choose</u></>}
        <input ref={inputRef} type="file" accept="application/pdf" hidden onChange={(e) => convert(e.target.files?.[0] ?? null)} />
      </div>

      {error && <p style={{ color: "#c0392b", marginTop: 14 }}>{error}</p>}

      {pics.length > 0 && (
        <div className="result">
          <p className="stat">✅ Converted {pics.length} page{pics.length === 1 ? "" : "s"} to JPG.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 12, marginTop: 10 }}>
            {pics.map((p) => (
              <div key={p.page} style={{ textAlign: "center" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.url} alt={`Page ${p.page}`} style={{ width: "100%", border: "1px solid var(--border)", borderRadius: 6 }} />
                <a className="chip" href={p.url} download={`${fileName}-page-${p.page}.jpg`} style={{ display: "inline-block", marginTop: 6 }}>⬇ Page {p.page}</a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
