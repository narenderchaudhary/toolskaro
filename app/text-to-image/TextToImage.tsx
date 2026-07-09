"use client";

import { useEffect, useRef, useState } from "react";

function wrap(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const out: string[] = [];
  for (const para of text.replace(/\r\n?/g, "\n").split("\n")) {
    if (para === "") { out.push(""); continue; }
    let line = "";
    for (const word of para.split(/(\s+)/)) {
      const test = line + word;
      if (ctx.measureText(test).width > maxWidth && line !== "") { out.push(line.trimEnd()); line = word.trimStart(); }
      else line = test;
    }
    if (line) out.push(line.trimEnd());
  }
  return out;
}

export default function TextToImage() {
  const [text, setText] = useState("Hello world!\nType your text here and download it as an image.");
  const [fontSize, setFontSize] = useState(32);
  const [width, setWidth] = useState(800);
  const [bg, setBg] = useState("#ffffff");
  const [fg, setFg] = useState("#111827");
  const [format, setFormat] = useState<"png" | "jpeg">("png");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const pad = Math.round(fontSize * 0.9);
    const lineH = Math.round(fontSize * 1.4);
    const font = `${fontSize}px system-ui, -apple-system, Segoe UI, Roboto, sans-serif`;
    ctx.font = font;
    const lines = wrap(ctx, text || " ", width - pad * 2);
    const height = pad * 2 + Math.max(lineH, lines.length * lineH);
    canvas.width = width; canvas.height = height;
    ctx.fillStyle = bg; ctx.fillRect(0, 0, width, height);
    ctx.font = font; ctx.fillStyle = fg; ctx.textBaseline = "top";
    lines.forEach((l, i) => ctx.fillText(l, pad, pad + i * lineH));
  }, [text, fontSize, width, bg, fg]);

  function download() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (format === "jpeg") {
      // Flatten onto the chosen bg (already filled) — JPG has no alpha anyway.
    }
    canvas.toBlob((blob) => {
      if (!blob) return;
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob); a.download = `text-image.${format === "jpeg" ? "jpg" : "png"}`; a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    }, `image/${format}`, format === "jpeg" ? 0.92 : undefined);
  }

  const chip = (active: boolean) => `chip${active ? " active" : ""}`;
  const lbl = { fontSize: 13, fontWeight: 600 as const, display: "block", marginBottom: 6 };

  return (
    <div className="card">
      <textarea value={text} onChange={(e) => setText(e.target.value)} rows={5} placeholder="Type or paste text…" style={{ width: "100%", padding: 12, border: "1px solid var(--border)", borderRadius: 10, fontSize: 15, resize: "vertical" }} />

      <div className="ij-controls" style={{ marginTop: 14 }}>
        <div>
          <span style={lbl}>Font size: {fontSize}px</span>
          <input type="range" min={14} max={80} value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))} style={{ width: 150 }} />
        </div>
        <div>
          <span style={lbl}>Width: {width}px</span>
          <input type="range" min={320} max={1600} step={20} value={width} onChange={(e) => setWidth(Number(e.target.value))} style={{ width: 150 }} />
        </div>
        <div>
          <span style={lbl}>Background</span>
          <input type="color" value={bg} onChange={(e) => setBg(e.target.value)} aria-label="Background color" style={{ width: 40, height: 34, border: "none", background: "none", cursor: "pointer" }} />
        </div>
        <div>
          <span style={lbl}>Text color</span>
          <input type="color" value={fg} onChange={(e) => setFg(e.target.value)} aria-label="Text color" style={{ width: 40, height: 34, border: "none", background: "none", cursor: "pointer" }} />
        </div>
        <div>
          <span style={lbl}>Format</span>
          <div className="preset-row">
            <button type="button" className={chip(format === "png")} onClick={() => setFormat("png")}>PNG</button>
            <button type="button" className={chip(format === "jpeg")} onClick={() => setFormat("jpeg")}>JPG</button>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 16, overflow: "auto", border: "1px solid var(--border)", borderRadius: 10, background: "var(--bg-soft, #faf9fc)", padding: 12 }}>
        <canvas ref={canvasRef} style={{ maxWidth: "100%", height: "auto", display: "block" }} />
      </div>

      <div style={{ marginTop: 14 }}>
        <button className="btn" onClick={download}>⬇ Download image ({format === "jpeg" ? "JPG" : "PNG"})</button>
      </div>
    </div>
  );
}
