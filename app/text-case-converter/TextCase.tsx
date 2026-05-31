"use client";

import { useState } from "react";

const transforms: [string, (s: string) => string][] = [
  ["UPPERCASE", (s) => s.toUpperCase()],
  ["lowercase", (s) => s.toLowerCase()],
  ["Title Case", (s) => s.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase())],
  ["Sentence case", (s) => s.toLowerCase().replace(/(^\s*\w|[.!?]\s+\w)/g, (c) => c.toUpperCase())],
  ["aLtErNaTiNg", (s) => s.split("").map((c, i) => (i % 2 ? c.toUpperCase() : c.toLowerCase())).join("")],
  ["InVeRsE", (s) => s.split("").map((c) => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())).join("")],
];

export default function TextCase() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);
  const ta = { width: "100%", padding: 12, border: "1px solid var(--border)", borderRadius: 10, fontSize: 15, fontFamily: "inherit", resize: "vertical" as const };

  function apply(fn: (s: string) => string) { setText(fn(text)); setCopied(false); }
  function copy() { navigator.clipboard?.writeText(text).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1500); }); }

  return (
    <div className="card">
      <textarea value={text} onChange={(e) => setText(e.target.value)} rows={6} placeholder="Type or paste your text here…" style={ta} />
      <div className="preset-row" style={{ marginTop: 12 }}>
        {transforms.map(([label, fn]) => (
          <button key={label} type="button" className="chip" onClick={() => apply(fn)}>{label}</button>
        ))}
      </div>
      <div style={{ marginTop: 14, display: "flex", gap: 10 }}>
        <button className="btn secondary" onClick={copy} disabled={!text}>{copied ? "Copied ✓" : "Copy"}</button>
        <button className="btn secondary" onClick={() => setText("")} disabled={!text}>Clear</button>
      </div>
    </div>
  );
}
