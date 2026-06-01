"use client";

import { useRef, useState } from "react";

const PDFJS_VERSION = "6.0.227";
type Pg = { orig: number; url: string; rot: number };

export default function Organize() {
  const [file, setFile] = useState<File | null>(null);
  const [pgs, setPgs] = useState<Pg[]>([]);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  const [url, setUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function load(f: File | null) {
    if (!f) return;
    setFile(f); setBusy(true); setStatus("Loading…"); setUrl(null); setPgs([]);
    try {
      const pdfjs = await import("pdfjs-dist");
      pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${PDFJS_VERSION}/build/pdf.worker.min.mjs`;
      const pdf = await pdfjs.getDocument({ data: new Uint8Array(await f.arrayBuffer()) }).promise;
      const out: Pg[] = [];
      for (let n = 1; n <= pdf.numPages; n++) {
        setStatus(`Rendering thumbnail ${n}/${pdf.numPages}…`);
        const page = await pdf.getPage(n);
        const vp = page.getViewport({ scale: 0.5 });
        const canvas = document.createElement("canvas");
        canvas.width = vp.width; canvas.height = vp.height;
        await page.render({ canvas, canvasContext: canvas.getContext("2d")!, viewport: vp }).promise;
        out.push({ orig: n - 1, url: canvas.toDataURL("image/jpeg", 0.7), rot: 0 });
      }
      setPgs(out);
    } catch { setStatus("Could not read this PDF."); setBusy(false); return; }
    setBusy(false); setStatus("");
  }

  const move = (i: number, d: -1 | 1) => setPgs((p) => { const n = [...p]; const j = i + d; if (j < 0 || j >= n.length) return p; [n[i], n[j]] = [n[j], n[i]]; return n; });
  const rotate = (i: number) => setPgs((p) => p.map((x, idx) => (idx === i ? { ...x, rot: (x.rot + 90) % 360 } : x)));
  const del = (i: number) => setPgs((p) => p.filter((_, idx) => idx !== i));

  async function save() {
    if (!file || !pgs.length) return;
    setBusy(true); setStatus("Building PDF…"); setUrl(null);
    try {
      const { PDFDocument, degrees } = await import("pdf-lib");
      const src = await PDFDocument.load(await file.arrayBuffer());
      const out = await PDFDocument.create();
      const copied = await out.copyPages(src, pgs.map((p) => p.orig));
      copied.forEach((page, i) => {
        if (pgs[i].rot) page.setRotation(degrees((page.getRotation().angle + pgs[i].rot) % 360));
        out.addPage(page);
      });
      const bytes = await out.save();
      setUrl(URL.createObjectURL(new Blob([bytes as BlobPart], { type: "application/pdf" })));
    } finally { setBusy(false); setStatus(""); }
  }

  if (!file || !pgs.length) {
    return (
      <div className="card">
        <div className="dropzone" onClick={() => inputRef.current?.click()} onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); load(e.dataTransfer.files?.[0] ?? null); }}>
          {busy ? status || "Working…" : <>📁 Drop a PDF here, or <u>click to choose</u></>}
          <input ref={inputRef} type="file" accept="application/pdf" hidden onChange={(e) => load(e.target.files?.[0] ?? null)} />
        </div>
        {status && !busy && <p style={{ color: "#c0392b", marginTop: 12 }}>{status}</p>}
      </div>
    );
  }

  return (
    <div className="card">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14, flexWrap: "wrap", gap: 10 }}>
        <span className="muted-note">{pgs.length} page{pgs.length === 1 ? "" : "s"} · reorder, rotate or delete, then save</span>
        <button className="btn" disabled={busy} onClick={save}>{busy ? "Working…" : "⬇ Save PDF"}</button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: 12 }}>
        {pgs.map((p, i) => (
          <div key={`${p.orig}-${i}`} style={{ border: "1px solid var(--border)", borderRadius: 8, padding: 8, textAlign: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.url} alt={`Page ${i + 1}`} style={{ width: "100%", borderRadius: 4, transform: `rotate(${p.rot}deg)`, transition: "transform .2s" }} />
            <div style={{ fontSize: 12, color: "var(--muted)", margin: "6px 0 4px" }}>Page {i + 1}</div>
            <div style={{ display: "flex", gap: 4, justifyContent: "center", flexWrap: "wrap" }}>
              <button className="chip" onClick={() => move(i, -1)} disabled={i === 0} aria-label="Move left">←</button>
              <button className="chip" onClick={() => rotate(i)} aria-label="Rotate">⟳</button>
              <button className="chip" onClick={() => del(i)} aria-label="Delete">✕</button>
              <button className="chip" onClick={() => move(i, 1)} disabled={i === pgs.length - 1} aria-label="Move right">→</button>
            </div>
          </div>
        ))}
      </div>
      {url && <div className="result" style={{ marginTop: 16 }}><p className="stat">✅ Reorganised PDF ready</p><a className="btn" href={url} download="organized.pdf">⬇ Download PDF</a></div>}
    </div>
  );
}
