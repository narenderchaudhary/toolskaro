"use client";

import { useState } from "react";

const ta = { width: "100%", padding: 12, border: "1px solid var(--border)", borderRadius: 10, fontSize: 14, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", resize: "vertical" as const };

function encode(s: string) { return btoa(unescape(encodeURIComponent(s))); }
function decode(s: string) { return decodeURIComponent(escape(atob(s.trim()))); }

export default function Base64() {
  const [text, setText] = useState("");
  const [out, setOut] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  function run(mode: "encode" | "decode") {
    setError(""); setCopied(false);
    if (!text) { setError("Enter some text first."); setOut(""); return; }
    try {
      setOut(mode === "encode" ? encode(text) : decode(text));
    } catch {
      setOut("");
      setError(mode === "decode" ? "That is not valid Base64 text." : "Could not encode that text.");
    }
  }
  function copy() { navigator.clipboard?.writeText(out).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1500); }); }

  return (
    <div className="card">
      <textarea value={text} onChange={(e) => setText(e.target.value)} rows={6} placeholder="Type text to encode, or paste Base64 to decode…" style={ta} spellCheck={false} />
      <div className="preset-row" style={{ marginTop: 12 }}>
        <button type="button" className="chip" onClick={() => run("encode")}>Encode → Base64</button>
        <button type="button" className="chip" onClick={() => run("decode")}>Decode ← Base64</button>
      </div>
      {error && <p style={{ color: "#dc2626", marginTop: 14, fontSize: 14 }}>{error}</p>}
      {out && (
        <>
          <textarea value={out} readOnly rows={6} style={{ ...ta, marginTop: 14, background: "var(--bg-soft, #faf9fc)" }} spellCheck={false} />
          <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
            <button className="btn secondary" onClick={copy}>{copied ? "Copied ✓" : "Copy result"}</button>
            <button className="btn secondary" onClick={() => { setText(""); setOut(""); setError(""); }}>Clear</button>
          </div>
        </>
      )}
    </div>
  );
}
