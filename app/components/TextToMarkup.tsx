"use client";

import { useState } from "react";

type Mode = "html" | "xml" | "json";

const ta = { width: "100%", padding: 12, border: "1px solid var(--border)", borderRadius: 10, fontSize: 14, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", resize: "vertical" as const };

const escHtml = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const escXml = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

function convert(text: string, mode: Mode): string {
  const lines = text.replace(/\r\n?/g, "\n").split("\n");
  if (mode === "json") {
    return JSON.stringify({ lines: text.replace(/\r\n?/g, "\n").split("\n"), text }, null, 2);
  }
  if (mode === "xml") {
    const body = lines.map((l) => `  <line>${escXml(l)}</line>`).join("\n");
    return `<?xml version="1.0" encoding="UTF-8"?>\n<document>\n${body}\n</document>`;
  }
  // html
  const body = lines.map((l) => (l.trim() === "" ? "<br>" : `<p>${escHtml(l)}</p>`)).join("\n");
  return `<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>Converted document</title>\n</head>\n<body>\n${body}\n</body>\n</html>`;
}

export default function TextToMarkup({ mode }: { mode: Mode }) {
  const [text, setText] = useState("");
  const [out, setOut] = useState("");
  const [copied, setCopied] = useState(false);

  function run() {
    setCopied(false);
    setOut(text.trim() ? convert(text, mode) : "");
  }
  function copy() { navigator.clipboard?.writeText(out).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1500); }); }
  function download() {
    const blob = new Blob([out], { type: mode === "json" ? "application/json" : mode === "xml" ? "application/xml" : "text/html" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = `converted.${mode}`; a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }
  async function loadFile(f: File | undefined) {
    if (!f) return;
    const t = await f.text();
    setText(t); setOut(t.trim() ? convert(t, mode) : "");
  }

  return (
    <div className="card">
      <textarea value={text} onChange={(e) => setText(e.target.value)} rows={7} placeholder="Paste or type your text here…" style={ta} spellCheck={false} />
      <div className="preset-row" style={{ marginTop: 12 }}>
        <button type="button" className="btn" onClick={run}>Convert to {mode.toUpperCase()}</button>
        <label className="btn secondary" style={{ cursor: "pointer" }}>
          <input type="file" accept=".txt,text/plain" hidden onChange={(e) => { loadFile(e.target.files?.[0]); e.target.value = ""; }} />
          Upload .txt
        </label>
        <button type="button" className="btn secondary" onClick={() => { setText(""); setOut(""); }}>Clear</button>
      </div>
      {out && (
        <>
          <textarea value={out} readOnly rows={9} style={{ ...ta, marginTop: 14, background: "var(--bg-soft, #faf9fc)" }} spellCheck={false} />
          <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button className="btn secondary" onClick={copy}>{copied ? "Copied ✓" : `Copy ${mode.toUpperCase()}`}</button>
            <button className="btn secondary" onClick={download}>⬇ Download .{mode}</button>
          </div>
        </>
      )}
    </div>
  );
}
