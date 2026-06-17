"use client";

import { useState } from "react";

const inp = { padding: 10, border: "1px solid var(--border)", borderRadius: 8, fontSize: 15, fontFamily: "ui-monospace, monospace", width: "100%", maxWidth: 280 };

function hexToRgb(hex: string): [number, number, number] | null {
  let h = hex.replace("#", "").trim();
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  if (!/^[0-9a-fA-F]{6}$/.test(h)) return null;
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
}
function rgbToHex(r: number, g: number, b: number) {
  return "#" + [r, g, b].map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0")).join("");
}
function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0; const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h /= 6;
  }
  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

export default function ColorConv() {
  const [hex, setHex] = useState("#7c3aed");
  const rgb = hexToRgb(hex);
  const hsl = rgb ? rgbToHsl(...rgb) : null;
  const [copied, setCopied] = useState("");

  const rgbStr = rgb ? `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})` : "—";
  const hslStr = hsl ? `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)` : "—";

  function copy(val: string, key: string) { navigator.clipboard?.writeText(val).then(() => { setCopied(key); setTimeout(() => setCopied(""), 1500); }); }
  const Row = ({ label, val, k }: { label: string; val: string; k: string }) => (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 10 }}>
      <span style={{ width: 56, fontSize: 13, color: "var(--muted, #5b6473)" }}>{label}</span>
      <code style={{ flex: 1, padding: "8px 10px", border: "1px solid var(--border)", borderRadius: 8, background: "var(--bg-soft, #faf9fc)" }}>{val}</code>
      <button type="button" className="chip" onClick={() => copy(val, k)} disabled={!rgb}>{copied === k ? "✓" : "Copy"}</button>
    </div>
  );

  return (
    <div className="card">
      <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
        <input type="color" value={rgb ? hex : "#7c3aed"} onChange={(e) => setHex(e.target.value)} style={{ width: 64, height: 64, border: "none", borderRadius: 12, cursor: "pointer", background: "none" }} aria-label="Pick a color" />
        <div style={{ width: 80, height: 64, borderRadius: 12, border: "1px solid var(--border)", background: rgb ? hex : "transparent" }} />
        <label style={{ fontSize: 14 }}>HEX:&nbsp;
          <input value={hex} onChange={(e) => setHex(e.target.value)} placeholder="#7c3aed" style={inp} spellCheck={false} />
        </label>
      </div>
      {!rgb && <p style={{ color: "#dc2626", marginTop: 12, fontSize: 14 }}>Enter a valid hex colour, e.g. #7c3aed or #abc.</p>}
      <Row label="HEX" val={rgb ? rgbToHex(...rgb) : "—"} k="hex" />
      <Row label="RGB" val={rgbStr} k="rgb" />
      <Row label="HSL" val={hslStr} k="hsl" />
    </div>
  );
}
