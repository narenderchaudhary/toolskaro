"use client";

import { useRef, useState } from "react";

type Preset = { label: string; w: number; h: number };
const GROUPS: { group: string; items: Preset[] }[] = [
  { group: "Instagram", items: [
    { label: "Square Post (1080×1080)", w: 1080, h: 1080 },
    { label: "Portrait Post (1080×1350)", w: 1080, h: 1350 },
    { label: "Story / Reel (1080×1920)", w: 1080, h: 1920 },
  ] },
  { group: "Facebook", items: [
    { label: "Post (1200×630)", w: 1200, h: 630 },
    { label: "Cover Photo (820×312)", w: 820, h: 312 },
    { label: "Story (1080×1920)", w: 1080, h: 1920 },
    { label: "Profile (500×500)", w: 500, h: 500 },
  ] },
  { group: "WhatsApp", items: [
    { label: "Profile / DP (500×500)", w: 500, h: 500 },
    { label: "Status (1080×1920)", w: 1080, h: 1920 },
  ] },
  { group: "LinkedIn", items: [
    { label: "Post (1200×627)", w: 1200, h: 627 },
    { label: "Cover Banner (1584×396)", w: 1584, h: 396 },
    { label: "Profile (400×400)", w: 400, h: 400 },
  ] },
  { group: "X (Twitter)", items: [
    { label: "Post (1600×900)", w: 1600, h: 900 },
    { label: "Header (1500×500)", w: 1500, h: 500 },
  ] },
  { group: "YouTube", items: [
    { label: "Thumbnail (1280×720)", w: 1280, h: 720 },
    { label: "Channel Art (2560×1440)", w: 2560, h: 1440 },
  ] },
  { group: "Pinterest", items: [{ label: "Pin (1000×1500)", w: 1000, h: 1500 }] },
];
const ALL = GROUPS.flatMap((g) => g.items);
const fmtKB = (b: number) => (b / 1024).toFixed(1) + " KB";

export default function SocialResizer() {
  const [img, setImg] = useState<ImageBitmap | null>(null);
  const [idx, setIdx] = useState(0);
  const [fit, setFit] = useState<"cover" | "contain">("cover");
  const [bg, setBg] = useState("#ffffff");
  const [out, setOut] = useState<{ url: string; bytes: number } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const preset = ALL[idx];

  async function onPick(file: File | null) {
    if (!file) return;
    setImg(await createImageBitmap(file));
    setOut(null);
  }

  async function resize() {
    if (!img) return;
    const canvas = document.createElement("canvas");
    canvas.width = preset.w;
    canvas.height = preset.h;
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, preset.w, preset.h);
    ctx.imageSmoothingQuality = "high";
    const s = fit === "cover" ? Math.max(preset.w / img.width, preset.h / img.height) : Math.min(preset.w / img.width, preset.h / img.height);
    const dw = img.width * s, dh = img.height * s;
    ctx.drawImage(img, (preset.w - dw) / 2, (preset.h - dh) / 2, dw, dh);
    const blob: Blob = await new Promise((res) => canvas.toBlob((b) => res(b!), "image/jpeg", 0.9));
    setOut({ url: URL.createObjectURL(blob), bytes: blob.size });
  }

  return (
    <div className="card">
      <div className="dropzone" onClick={() => inputRef.current?.click()} onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); onPick(e.dataTransfer.files?.[0] ?? null); }}>
        {img ? <><strong>Image loaded</strong> · click to change</> : <>📁 Drop your image here, or <u>click to choose</u></>}
        <input ref={inputRef} type="file" accept="image/*" hidden onChange={(e) => onPick(e.target.files?.[0] ?? null)} />
      </div>

      <label htmlFor="preset">Platform &amp; size</label>
      <select id="preset" value={idx} onChange={(e) => { setIdx(Number(e.target.value)); setOut(null); }}>
        {(() => {
          let i = -1;
          return GROUPS.map((g) => (
            <optgroup key={g.group} label={g.group}>
              {g.items.map((it) => { i++; const v = i; return <option key={it.label} value={v}>{it.label}</option>; })}
            </optgroup>
          ));
        })()}
      </select>

      <label>Fit</label>
      <div className="preset-row">
        <button type="button" className="chip" onClick={() => { setFit("cover"); setOut(null); }} style={fit === "cover" ? { borderColor: "var(--brand)", color: "var(--brand)" } : undefined}>Crop to fill</button>
        <button type="button" className="chip" onClick={() => { setFit("contain"); setOut(null); }} style={fit === "contain" ? { borderColor: "var(--brand)", color: "var(--brand)" } : undefined}>Fit with background</button>
        {fit === "contain" && <input type="color" value={bg} onChange={(e) => { setBg(e.target.value); setOut(null); }} style={{ width: 44, height: 36, padding: 3, borderRadius: 8, border: "1px solid var(--border)" }} />}
      </div>

      <div style={{ marginTop: 16 }}>
        <button className="btn" disabled={!img} onClick={resize}>Resize to {preset.w}×{preset.h}</button>
      </div>

      {out && (
        <div className="result">
          <p className="stat">✅ {preset.label} · {fmtKB(out.bytes)}</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={out.url} alt="Resized preview" style={{ maxWidth: "100%", borderRadius: 8, margin: "10px 0" }} />
          <a className="btn" href={out.url} download={`social-${preset.w}x${preset.h}.jpg`}>⬇ Download</a>
        </div>
      )}
    </div>
  );
}
