"use client";

import { useRef, useState } from "react";

const PDFJS_VERSION = "6.0.227";

type PageImg = { url: string; pdfW: number; pdfH: number };
type Ann = {
  id: number;
  page: number;
  type: "text" | "image";
  fx: number; // top-left x as fraction of page width
  fy: number; // top-left y as fraction of page height
  text?: string;
  size?: number; // display px font size
  color?: string;
  src?: string; // image data URL
  imgW?: number; // natural px
  imgH?: number;
  fw?: number; // image width as fraction of page width
};

function hexToRgb01(hex: string) {
  const m = hex.replace("#", "");
  const n = parseInt(m.length === 3 ? m.split("").map((c) => c + c).join("") : m, 16);
  return { r: ((n >> 16) & 255) / 255, g: ((n >> 8) & 255) / 255, b: (n & 255) / 255 };
}
function dataUrlToBytes(d: string) {
  const b = atob(d.split(",")[1]);
  const u = new Uint8Array(b.length);
  for (let i = 0; i < b.length; i++) u[i] = b.charCodeAt(i);
  return u;
}

export default function PdfEditor() {
  const [file, setFile] = useState<File | null>(null);
  const [pages, setPages] = useState<PageImg[]>([]);
  const [anns, setAnns] = useState<Ann[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  const [outUrl, setOutUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const imgInputRef = useRef<HTMLInputElement>(null);
  const pageEls = useRef<(HTMLDivElement | null)[]>([]);
  const drag = useRef<{ id: number; rect: DOMRect; offX: number; offY: number } | null>(null);
  const idc = useRef(1);

  const sel = anns.find((a) => a.id === selected) || null;

  async function loadPdf(f: File | null) {
    if (!f) return;
    setBusy(true); setStatus("Loading PDF…"); setAnns([]); setSelected(null); setOutUrl(null); setPages([]);
    setFile(f);
    try {
      const pdfjs = await import("pdfjs-dist");
      pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${PDFJS_VERSION}/build/pdf.worker.min.mjs`;
      const data = new Uint8Array(await f.arrayBuffer());
      const pdf = await pdfjs.getDocument({ data }).promise;
      const out: PageImg[] = [];
      for (let n = 1; n <= pdf.numPages; n++) {
        setStatus(`Rendering page ${n} of ${pdf.numPages}…`);
        const page = await pdf.getPage(n);
        const base = page.getViewport({ scale: 1 });
        const vp = page.getViewport({ scale: 2 });
        const canvas = document.createElement("canvas");
        canvas.width = vp.width; canvas.height = vp.height;
        const ctx = canvas.getContext("2d")!;
        await page.render({ canvas, canvasContext: ctx, viewport: vp }).promise;
        out.push({ url: canvas.toDataURL("image/jpeg", 0.85), pdfW: base.width, pdfH: base.height });
      }
      setPages(out);
    } catch { setStatus("Could not open this PDF. Make sure it is a valid, unencrypted file."); setBusy(false); return; }
    setBusy(false); setStatus("");
  }

  function activePage(): number {
    const mid = window.innerHeight / 2;
    let best = 0, bestDist = Infinity;
    pageEls.current.forEach((el, i) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const c = r.top + r.height / 2;
      if (Math.abs(c - mid) < bestDist) { bestDist = Math.abs(c - mid); best = i; }
    });
    return best;
  }

  function addText() {
    const id = idc.current++;
    setAnns((a) => [...a, { id, page: activePage(), type: "text", fx: 0.1, fy: 0.1, text: "Type here", size: 18, color: "#111111" }]);
    setSelected(id);
  }
  function addImage(f: File | null) {
    if (!f) return;
    const url = URL.createObjectURL(f);
    const img = new Image();
    img.onload = () => {
      const id = idc.current++;
      const reader = new FileReader();
      reader.onload = () => {
        setAnns((a) => [...a, { id, page: activePage(), type: "image", fx: 0.1, fy: 0.1, fw: 0.3, src: reader.result as string, imgW: img.naturalWidth, imgH: img.naturalHeight }]);
        setSelected(id);
      };
      reader.readAsDataURL(f);
    };
    img.src = url;
  }

  function startDrag(e: React.PointerEvent, ann: Ann) {
    e.stopPropagation();
    setSelected(ann.id);
    const pageEl = pageEls.current[ann.page];
    if (!pageEl) return;
    const rect = pageEl.getBoundingClientRect();
    drag.current = { id: ann.id, rect, offX: e.clientX - (rect.left + ann.fx * rect.width), offY: e.clientY - (rect.top + ann.fy * rect.height) };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }
  function onDrag(e: React.PointerEvent) {
    const d = drag.current; if (!d) return;
    const fx = Math.max(0, Math.min(0.99, (e.clientX - d.rect.left - d.offX) / d.rect.width));
    const fy = Math.max(0, Math.min(0.99, (e.clientY - d.rect.top - d.offY) / d.rect.height));
    setAnns((a) => a.map((x) => (x.id === d.id ? { ...x, fx, fy } : x)));
  }
  function endDrag() { drag.current = null; }

  const upd = (patch: Partial<Ann>) => setAnns((a) => a.map((x) => (x.id === selected ? { ...x, ...patch } : x)));
  const del = () => { setAnns((a) => a.filter((x) => x.id !== selected)); setSelected(null); };

  async function download() {
    if (!file) return;
    setBusy(true); setStatus("Building edited PDF…"); setOutUrl(null);
    try {
      const { PDFDocument, StandardFonts, rgb } = await import("pdf-lib");
      const doc = await PDFDocument.load(await file.arrayBuffer());
      const font = await doc.embedFont(StandardFonts.Helvetica);
      const docPages = doc.getPages();
      for (const a of anns) {
        const p = docPages[a.page]; if (!p) continue;
        const { width: pw, height: ph } = p.getSize();
        const el = pageEls.current[a.page];
        const dispH = el ? el.clientHeight : ph;
        if (a.type === "text" && a.text) {
          const fontSize = (a.size || 18) * (ph / dispH);
          const c = hexToRgb01(a.color || "#111111");
          p.drawText(a.text, { x: a.fx * pw, y: ph - a.fy * ph - fontSize, size: fontSize, font, color: rgb(c.r, c.g, c.b) });
        } else if (a.type === "image" && a.src && a.imgW && a.imgH) {
          const bytes = dataUrlToBytes(a.src);
          const img = a.src.includes("image/png") ? await doc.embedPng(bytes) : await doc.embedJpg(bytes);
          const w = (a.fw || 0.3) * pw;
          const h = w * (a.imgH / a.imgW);
          p.drawImage(img, { x: a.fx * pw, y: ph - a.fy * ph - h, width: w, height: h });
        }
      }
      const bytes = await doc.save();
      setOutUrl(URL.createObjectURL(new Blob([bytes as BlobPart], { type: "application/pdf" })));
    } catch { setStatus("Something went wrong building the PDF."); setBusy(false); return; }
    setBusy(false); setStatus("");
  }

  if (!file || pages.length === 0) {
    return (
      <div className="card">
        <div className="dropzone" onClick={() => inputRef.current?.click()} onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); loadPdf(e.dataTransfer.files?.[0] ?? null); }}>
          {busy ? status || "Working…" : <>📁 Drop a PDF here, or <u>click to choose</u> to start editing</>}
          <input ref={inputRef} type="file" accept="application/pdf" hidden onChange={(e) => loadPdf(e.target.files?.[0] ?? null)} />
        </div>
        {status && !busy && <p style={{ color: "#c0392b", marginTop: 12 }}>{status}</p>}
      </div>
    );
  }

  return (
    <div className="card">
      <div style={{ position: "sticky", top: 70, zIndex: 5, background: "var(--card)", padding: "10px 0", borderBottom: "1px solid var(--border)", display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center", marginBottom: 14 }}>
        <button className="chip" onClick={addText}>➕ Add text</button>
        <button className="chip" onClick={() => imgInputRef.current?.click()}>🖼️ Add signature / image</button>
        <input ref={imgInputRef} type="file" accept="image/*" hidden onChange={(e) => addImage(e.target.files?.[0] ?? null)} />
        <button className="btn" disabled={busy} onClick={download} style={{ marginLeft: "auto" }}>{busy ? "Working…" : "⬇ Download edited PDF"}</button>
      </div>

      {sel && (
        <div className="result" style={{ marginTop: 0, marginBottom: 14 }}>
          {sel.type === "text" ? (
            <div className="row" style={{ alignItems: "flex-end" }}>
              <div style={{ flex: 2 }}><label style={{ margin: "0 0 4px" }}>Text</label><input value={sel.text} onChange={(e) => upd({ text: e.target.value })} /></div>
              <div><label style={{ margin: "0 0 4px" }}>Size</label><input type="number" min={6} max={96} value={sel.size} onChange={(e) => upd({ size: Number(e.target.value) || 18 })} /></div>
              <div><label style={{ margin: "0 0 4px" }}>Colour</label><input type="color" value={sel.color} onChange={(e) => upd({ color: e.target.value })} style={{ height: 42, padding: 4 }} /></div>
              <button className="chip" onClick={del}>Delete</button>
            </div>
          ) : (
            <div className="row" style={{ alignItems: "flex-end" }}>
              <div style={{ flex: 2 }}><label style={{ margin: "0 0 4px" }}>Size: {Math.round((sel.fw || 0.3) * 100)}% of page width</label><input type="range" min={5} max={90} value={Math.round((sel.fw || 0.3) * 100)} onChange={(e) => upd({ fw: Number(e.target.value) / 100 })} style={{ width: "100%" }} /></div>
              <button className="chip" onClick={del}>Delete</button>
            </div>
          )}
          <p className="muted-note" style={{ marginTop: 8 }}>Drag the item on the page to position it.</p>
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }} onPointerDown={() => setSelected(null)}>
        {pages.map((pg, i) => (
          <div
            key={i}
            ref={(el) => { pageEls.current[i] = el; }}
            style={{ position: "relative", width: "100%", border: "1px solid var(--border)", borderRadius: 6, overflow: "hidden", lineHeight: 0, touchAction: "none" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={pg.url} alt={`Page ${i + 1}`} style={{ width: "100%", display: "block" }} draggable={false} />
            {anns.filter((a) => a.page === i).map((a) => (
              <div
                key={a.id}
                onPointerDown={(e) => startDrag(e, a)}
                onPointerMove={onDrag}
                onPointerUp={endDrag}
                style={{
                  position: "absolute", left: `${a.fx * 100}%`, top: `${a.fy * 100}%`, cursor: "move",
                  outline: selected === a.id ? "2px dashed var(--brand)" : "1px dashed rgba(0,0,0,0.25)",
                  background: a.type === "text" ? "rgba(255,255,255,0.4)" : "transparent",
                  width: a.type === "image" ? `${(a.fw || 0.3) * 100}%` : "auto", maxWidth: "95%",
                }}
              >
                {a.type === "text" ? (
                  <span style={{ fontSize: a.size, color: a.color, lineHeight: 1.1, whiteSpace: "nowrap", fontFamily: "Helvetica, Arial, sans-serif", padding: "0 1px" }}>{a.text || " "}</span>
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={a.src} alt="overlay" style={{ width: "100%", display: "block", pointerEvents: "none" }} draggable={false} />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {outUrl && (
        <div className="result" style={{ marginTop: 16 }}>
          <p className="stat">✅ Your edited PDF is ready.</p>
          <a className="btn" href={outUrl} download="edited.pdf">⬇ Download edited PDF</a>
        </div>
      )}
    </div>
  );
}
