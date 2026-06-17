"use client";

import { useState } from "react";

const ta = { width: "100%", padding: 12, border: "1px solid var(--border)", borderRadius: 10, fontSize: 14, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", resize: "vertical" as const };

export default function Uuid() {
  const [count, setCount] = useState(5);
  const [upper, setUpper] = useState(false);
  const [list, setList] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  function generate() {
    const n = Math.max(1, Math.min(100, count));
    const out = Array.from({ length: n }, () => {
      const id = crypto.randomUUID();
      return upper ? id.toUpperCase() : id;
    });
    setList(out); setCopied(false);
  }
  function copy() { navigator.clipboard?.writeText(list.join("\n")).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1500); }); }

  return (
    <div className="card">
      <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
        <label style={{ fontSize: 14 }}>How many:&nbsp;
          <input type="number" min={1} max={100} value={count} onChange={(e) => setCount(Number(e.target.value))} style={{ width: 70, padding: 8, border: "1px solid var(--border)", borderRadius: 8 }} />
        </label>
        <label style={{ fontSize: 14, display: "flex", alignItems: "center", gap: 6 }}>
          <input type="checkbox" checked={upper} onChange={(e) => setUpper(e.target.checked)} /> Uppercase
        </label>
        <button className="btn" onClick={generate}>Generate UUIDs</button>
      </div>
      {list.length > 0 && (
        <>
          <textarea value={list.join("\n")} readOnly rows={Math.min(10, list.length)} style={{ ...ta, marginTop: 14, background: "var(--bg-soft, #faf9fc)" }} spellCheck={false} />
          <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
            <button className="btn secondary" onClick={copy}>{copied ? "Copied ✓" : "Copy all"}</button>
            <button className="btn secondary" onClick={() => setList([])}>Clear</button>
          </div>
        </>
      )}
    </div>
  );
}
