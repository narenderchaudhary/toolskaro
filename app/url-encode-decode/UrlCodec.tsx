"use client";

import { useState } from "react";

const ta = { width: "100%", padding: 12, border: "1px solid var(--border)", borderRadius: 10, fontSize: 14, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", resize: "vertical" as const };

export default function UrlCodec() {
  const [text, setText] = useState("");
  const [out, setOut] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  function run(fn: (s: string) => string, label: string) {
    setError(""); setCopied(false);
    if (!text) { setError("Enter a URL or text first."); setOut(""); return; }
    try { setOut(fn(text)); } catch { setOut(""); setError(`Could not ${label} that text — check for stray % characters.`); }
  }
  function copy() { navigator.clipboard?.writeText(out).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1500); }); }

  return (
    <div className="card">
      <textarea value={text} onChange={(e) => setText(e.target.value)} rows={5} placeholder="Paste a URL or a query value…" style={ta} spellCheck={false} />
      <div className="preset-row" style={{ marginTop: 12 }}>
        <button type="button" className="chip" onClick={() => run(encodeURIComponent, "encode")}>Encode component</button>
        <button type="button" className="chip" onClick={() => run(decodeURIComponent, "decode")}>Decode component</button>
        <button type="button" className="chip" onClick={() => run(encodeURI, "encode")}>Encode full URL</button>
        <button type="button" className="chip" onClick={() => run(decodeURI, "decode")}>Decode full URL</button>
      </div>
      {error && <p style={{ color: "#dc2626", marginTop: 14, fontSize: 14 }}>{error}</p>}
      {out && (
        <>
          <textarea value={out} readOnly rows={5} style={{ ...ta, marginTop: 14, background: "var(--bg-soft, #faf9fc)" }} spellCheck={false} />
          <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
            <button className="btn secondary" onClick={copy}>{copied ? "Copied ✓" : "Copy result"}</button>
            <button className="btn secondary" onClick={() => { setText(""); setOut(""); setError(""); }}>Clear</button>
          </div>
        </>
      )}
    </div>
  );
}
