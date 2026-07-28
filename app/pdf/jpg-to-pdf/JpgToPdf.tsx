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

// Re-encode any browser-decodable image to PNG bytes (used by the full-quality "Auto" path).
async function toPngBytes(file: File): Promise<Uint8Array> {
  const url = URL.createObjectURL(file);
  try {
    const im = await loadImg(url);
    const c = document.createElement("canvas");
    c.width = im.naturalWidth; c.height = im.naturalHeight;
    c.getContext("2d")!.drawImage(im, 0, 0);
    const blob: Blob = await new Promise((r) => c.toBlob((b) => r(b!), "image/png"));
    return new Uint8Array(await blob.arrayBuffer());
  } finally { URL.revokeObjectURL(url); }
}

async function embedImage(pdf: PDFDocument, file: File): Promise<PDFImage> {
  const bytes = new Uint8Array(await file.arrayBuffer());
  const t = file.type.toLowerCase();
  try {
    if (t.includes("png")) return await pdf.embedPng(bytes);
    if (t.includes("jpeg") || t.includes("jpg")) return await pdf.embedJpg(bytes);
  } catch { /* fall through */ }
  return pdf.embedPng(await toPngBytes(file));
}

// --- target-size path: re-encode each image to JPEG at a quality/scale, embed, measure ---
function encodeJpeg(im: HTMLImageElement, quality: number, scale: number): Promise<Uint8Array> {
  const w = Math.max(1, Math.round(im.naturalWidth * scale));
  const h = Math.max(1, Math.round(im.naturalHeight * scale));
  const c = document.createElement("canvas");
  c.width = w; c.height = h;
  const ctx = c.getContext("2d")!;
  ctx.fillStyle = "#ffffff"; ctx.fillRect(0, 0, w, h); // flatten any transparency for JPEG
  ctx.drawImage(im, 0, 0, w, h);
  return new Promise((res) => c.toBlob(async (b) => res(new Uint8Array(await b!.arrayBuffer())), "image/jpeg", quality));
}

async function buildFromImgs(imgs: HTMLImageElement[], quality: number, scale: number): Promise<{ blob: Blob; size: number }> {
  const pdf = await PDFDocument.create();
  for (const im of imgs) {
    const img = await pdf.embedJpg(await encodeJpeg(im, quality, scale));
    const page = pdf.addPage([img.width, img.height]);
    page.drawImage(img, { x: 0, y: 0, width: img.width, height: img.height });
  }
  const out = await pdf.save();
  return { blob: new Blob([out as BlobPart], { type: "application/pdf" }), size: out.length };
}

const fmtKB = (b: number) => (b >= 1024 * 1024 ? (b / 1024 / 1024).toFixed(2) + " MB" : Math.round(b / 1024) + " KB");
const TARGETS: [string, number][] = [["Auto (best quality)", 0], ["50 KB", 50], ["100 KB", 100], ["200 KB", 200], ["300 KB", 300], ["500 KB", 500], ["1 MB", 1024]];

export default function JpgToPdf({ initialTargetKb = 0 }: { initialTargetKb?: number }) {
  const [files, setFiles] = useState<File[]>([]);
  const [targetKb, setTargetKb] = useState(initialTargetKb);
  const [custom, setCustom] = useState("");
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  const [url, setUrl] = useState<string | null>(null);
  const [finalSize, setFinalSize] = useState<number | null>(null);
  const [metTarget, setMetTarget] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function add(list: FileList | null) { if (!list) return; setFiles((p) => [...p, ...Array.from(list)]); setUrl(null); }
  function remove(i: number) { setFiles((p) => p.filter((_, idx) => idx !== i)); setUrl(null); }

  async function build() {
    if (!files.length) return;
    setBusy(true); setErr(null); setUrl(null); setFinalSize(null);
    try {
      if (targetKb <= 0) {
        // Auto — full quality, preserves original bytes/PNG transparency.
        setStatus("Building PDF…");
        const pdf = await PDFDocument.create();
        for (const file of files) {
          const image = await embedImage(pdf, file);
          const page = pdf.addPage([image.width, image.height]);
          page.drawImage(image, { x: 0, y: 0, width: image.width, height: image.height });
        }
        const out = await pdf.save();
        const blob = new Blob([out as BlobPart], { type: "application/pdf" });
        setUrl(URL.createObjectURL(blob)); setFinalSize(out.length); setMetTarget(true);
      } else {
        // Target size — decode once, then binary-search quality across shrinking scales.
        setStatus(`Fitting under ${targetKb >= 1024 ? targetKb / 1024 + " MB" : targetKb + " KB"}…`);
        const target = targetKb * 1024;
        const imgs: HTMLImageElement[] = [];
        for (const f of files) { const u = URL.createObjectURL(f); imgs.push(await loadImg(u)); URL.revokeObjectURL(u); }
        let met: { blob: Blob; size: number } | null = null;
        let smallest: { blob: Blob; size: number } | null = null;
        for (const scale of [1, 0.85, 0.7, 0.55, 0.4, 0.3]) {
          let lo = 0.08, hi = 0.95, bestAtScale: { blob: Blob; size: number } | null = null;
          for (let it = 0; it < 6; it++) {
            const q = (lo + hi) / 2;
            const r = await buildFromImgs(imgs, q, scale);
            if (!smallest || r.size < smallest.size) smallest = r;
            if (r.size <= target) { bestAtScale = r; lo = q; } else hi = q;
          }
          if (bestAtScale) { met = bestAtScale; break; }
        }
        const finalR = met || smallest!;
        setUrl(URL.createObjectURL(finalR.blob)); setFinalSize(finalR.size); setMetTarget(!!met);
      }
    } catch {
      setErr("Sorry, one of the files couldn't be read as an image. Please use JPG, PNG or WebP files.");
    } finally { setBusy(false); setStatus(""); }
  }

  const chip = (a: boolean) => `chip${a ? " active" : ""}`;
  const activeKb = custom !== "" ? Number(custom) : targetKb;

  return (
    <div className="card">
      <div className="dropzone" onClick={() => inputRef.current?.click()} onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); add(e.dataTransfer.files); }}>
        📁 Drop images here, or <u>click to choose</u> (JPG / PNG — add as many as you like)
        <input ref={inputRef} type="file" accept="image/*" multiple hidden onChange={(e) => { add(e.target.files); e.target.value = ""; }} />
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
        <span style={{ fontSize: 13, fontWeight: 600, display: "block", marginBottom: 8 }}>Target file size</span>
        <div className="preset-row">
          {TARGETS.map(([label, kb]) => (
            <button key={label} type="button" className={chip(custom === "" && targetKb === kb)} onClick={() => { setTargetKb(kb); setCustom(""); }}>{label}</button>
          ))}
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
            <input type="number" min={10} placeholder="Custom" value={custom} onChange={(e) => setCustom(e.target.value)} style={{ width: 90, padding: "6px 8px", border: "1px solid var(--border)", borderRadius: 8, fontSize: 14 }} />
            <span style={{ fontSize: 13 }}>KB</span>
          </span>
        </div>
      </div>

      <div style={{ marginTop: 16 }}>
        <button className="btn" disabled={!files.length || busy} onClick={() => { if (custom !== "" && Number(custom) > 0) setTargetKb(Number(custom)); build(); }}>
          {busy ? (status || "Working…") : activeKb > 0 ? `Convert to PDF under ${activeKb >= 1024 ? activeKb / 1024 + " MB" : activeKb + " KB"}` : `Convert ${files.length || ""} image${files.length === 1 ? "" : "s"} to PDF`}
        </button>
      </div>

      {err && <p style={{ color: "#c0392b", marginTop: 12, fontSize: 14 }}>{err}</p>}

      {url && finalSize !== null && (
        <div className="result">
          {metTarget
            ? <p className="stat">✅ Your PDF is ready — <b>{fmtKB(finalSize)}</b>{activeKb > 0 ? ` (under your ${activeKb >= 1024 ? activeKb / 1024 + " MB" : activeKb + " KB"} target)` : ""}.</p>
            : <p className="stat" style={{ color: "#b45309" }}>⚠️ Smallest possible is <b>{fmtKB(finalSize)}</b> — couldn&apos;t reach your target with these images. Try fewer or smaller photos, or a larger target.</p>}
          <a className="btn" href={url} download="images.pdf">⬇ Download PDF</a>
        </div>
      )}
    </div>
  );
}
