"use client";

import { useState } from "react";

const ta = { width: "100%", padding: 12, border: "1px solid var(--border)", borderRadius: 10, fontSize: 14, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", resize: "vertical" as const };
const ALGOS = ["SHA-1", "SHA-256", "SHA-384", "SHA-512"] as const;

function toHex(buf: ArrayBuffer) {
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

export default function HashGen() {
  const [text, setText] = useState("");
  const [hashes, setHashes] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState("");

  async function run() {
    if (!text) { setHashes({}); return; }
    const enc = new TextEncoder().encode(text);
    const out: Record<string, string> = {};
    for (const algo of ALGOS) {
      const digest = await crypto.subtle.digest(algo, enc);
      out[algo] = toHex(digest);
    }
    setHashes(out);
  }
  function copy(algo: string) { navigator.clipboard?.writeText(hashes[algo]).then(() => { setCopied(algo); setTimeout(() => setCopied(""), 1500); }); }

  return (
    <div className="card">
      <textarea value={text} onChange={(e) => setText(e.target.value)} rows={4} placeholder="Type or paste the text to hash…" style={ta} spellCheck={false} />
      <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
        <button className="btn" onClick={run} disabled={!text}>Generate hashes</button>
        <button className="btn secondary" onClick={() => { setText(""); setHashes({}); }} disabled={!text}>Clear</button>
      </div>
      {ALGOS.map((algo) => hashes[algo] && (
        <div key={algo} style={{ marginTop: 14 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
            <strong style={{ fontSize: 14 }}>{algo}</strong>
            <button className="chip" type="button" onClick={() => copy(algo)}>{copied === algo ? "Copied ✓" : "Copy"}</button>
          </div>
          <div style={{ ...ta, wordBreak: "break-all", background: "var(--bg-soft, #faf9fc)", padding: 12 }}>{hashes[algo]}</div>
        </div>
      ))}
    </div>
  );
}
