"use client";

import { useRef, useState } from "react";

const fmtKB = (b: number) => (b / 1024).toFixed(1) + " KB";

// Set the JFIF density (DPI) inside a JPEG. Canvas output is a JFIF APP0 segment with units=0;
// we set units=1 (dots/inch) and the X/Y density to the chosen DPI so the file reports that DPI.
function setJpegDpi(bytes: Uint8Array, dpi: number) {
  for (let i = 2; i < bytes.length - 16; i++) {
    if (bytes[i] === 0xff && bytes[i + 1] === 0xe0 && bytes[i + 4] === 0x4a && bytes[i + 5] === 0x46 && bytes[i + 6] === 0x49 && bytes[i + 7] === 0x46) {
      bytes[i + 11] = 1; // units: dots per inch
      bytes[i + 12] = (dpi >> 8) & 0xff;
      bytes[i + 13] = dpi & 0xff; // Xdensity
      bytes[i + 14] = (dpi >> 8) & 0xff;
      bytes[i + 15] = dpi & 0xff; // Ydensity
      return;
    }
  }
}

export default function ChangeDpi() {
  const [dpi, setDpi] = useState(300);
  const [name, setName] = useState("image");
  const [out, setOut] = useState<{ url: string; bytes: number; px: string } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function run(file: File | null) {
    if (!file) return;
    setName(file.name.replace(/\.[^.]+$/, ""));
    const bmp = await createImageBitmap(file);
    const c = document.createElement("canvas");
    c.width = bmp.width;
    c.height = bmp.height;
    const ctx = c.getContext("2d")!;
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.drawImage(bmp, 0, 0);
    const blob: Blob = await new Promise((res) => c.toBlob((b) => res(b!), "image/jpeg", 0.95));
    const buf = new Uint8Array(await blob.arrayBuffer());
    setJpegDpi(buf, dpi);
    const outBlob = new Blob([buf as BlobPart], { type: "image/jpeg" });
    setOut({ url: URL.createObjectURL(outBlob), bytes: outBlob.size, px: `${bmp.width}×${bmp.height}` });
  }

  return (
    <div className="card">
      <div className="row">
        <div style={{ flexBasis: "100%" }}>
          <label htmlFor="dpi">Target DPI</label>
          <input id="dpi" type="number" min={1} value={dpi} onChange={(e) => setDpi(Math.max(1, Number(e.target.value) || 0))} />
          <div className="preset-row" style={{ marginTop: 8 }}>
            {[300, 200, 150, 96, 72].map((d) => (
              <button key={d} type="button" className="chip" onClick={() => setDpi(d)} style={dpi === d ? { borderColor: "var(--brand)", color: "var(--brand)" } : undefined}>{d} DPI</button>
            ))}
          </div>
        </div>
      </div>

      <div className="dropzone" style={{ marginTop: 14 }} onClick={() => inputRef.current?.click()} onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); run(e.dataTransfer.files?.[0] ?? null); }}>
        📁 Drop a JPG/PNG here, or <u>click to choose</u> — set to {dpi} DPI
        <input ref={inputRef} type="file" accept="image/*" hidden onChange={(e) => run(e.target.files?.[0] ?? null)} />
      </div>
      <p className="muted-note" style={{ marginTop: 10 }}>DPI sets the print resolution stored in the file. The pixel dimensions stay the same; only the DPI tag changes.</p>

      {out && (
        <div className="result">
          <p className="stat" style={{ fontSize: 16 }}>✅ Set to <b>{dpi} DPI</b> ({out.px} px) — {fmtKB(out.bytes)}</p>
          <a className="btn" href={out.url} download={`${name}-${dpi}dpi.jpg`}>⬇ Download image</a>
        </div>
      )}
    </div>
  );
}
