"use client";

import { useState } from "react";

const ta = { width: "100%", padding: 12, border: "1px solid var(--border)", borderRadius: 10, fontSize: 14, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", resize: "vertical" as const };

export default function JsonFormatter() {
  const [text, setText] = useState("");
  const [out, setOut] = useState("");
  const [error, setError] = useState("");
  const [ok, setOk] = useState("");
  const [copied, setCopied] = useState(false);

  function run(mode: "beautify2" | "beautify4" | "minify" | "validate") {
    setError(""); setOk(""); setCopied(false);
    if (!text.trim()) { setError("Paste some JSON first."); setOut(""); return; }
    try {
      const parsed = JSON.parse(text);
      if (mode === "validate") { setOk("✓ Valid JSON"); setOut(JSON.stringify(parsed, null, 2)); return; }
      if (mode === "minify") { setOut(JSON.stringify(parsed)); return; }
      setOut(JSON.stringify(parsed, null, mode === "beautify4" ? 4 : 2));
    } catch (e) {
      setOut("");
      setError("Invalid JSON: " + (e instanceof Error ? e.message : String(e)));
    }
  }
  function copy() { navigator.clipboard?.writeText(out).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1500); }); }

  return (
    <div className="card">
      <textarea value={text} onChange={(e) => setText(e.target.value)} rows={8} placeholder='Paste JSON here, e.g. {"name":"Toolskaro","tools":40}' style={ta} spellCheck={false} />
      <div className="preset-row" style={{ marginTop: 12 }}>
        <button type="button" className="chip" onClick={() => run("beautify2")}>Beautify (2 spaces)</button>
        <button type="button" className="chip" onClick={() => run("beautify4")}>Beautify (4 spaces)</button>
        <button type="button" className="chip" onClick={() => run("minify")}>Minify</button>
        <button type="button" className="chip" onClick={() => run("validate")}>Validate</button>
      </div>
      {error && <p style={{ color: "#dc2626", marginTop: 14, fontSize: 14, fontFamily: "ui-monospace, monospace" }}>{error}</p>}
      {ok && <p style={{ color: "#16a34a", marginTop: 14, fontWeight: 600 }}>{ok}</p>}
      {out && (
        <>
          <textarea value={out} readOnly rows={8} style={{ ...ta, marginTop: 14, background: "var(--bg-soft, #faf9fc)" }} spellCheck={false} />
          <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
            <button className="btn secondary" onClick={copy}>{copied ? "Copied ✓" : "Copy result"}</button>
            <button className="btn secondary" onClick={() => { setText(""); setOut(""); setError(""); setOk(""); }}>Clear</button>
          </div>
        </>
      )}
    </div>
  );
}
