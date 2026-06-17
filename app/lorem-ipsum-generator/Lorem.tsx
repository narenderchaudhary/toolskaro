"use client";

import { useState } from "react";

const WORDS = "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat duis aute irure in reprehenderit voluptate velit esse cillum eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum".split(" ");

const ta = { width: "100%", padding: 12, border: "1px solid var(--border)", borderRadius: 10, fontSize: 15, fontFamily: "inherit", resize: "vertical" as const };

function pick(n: number) { return Array.from({ length: n }, () => WORDS[Math.floor(Math.random() * WORDS.length)]); }
function sentence() {
  const len = 8 + Math.floor(Math.random() * 9);
  const w = pick(len);
  w[0] = w[0][0].toUpperCase() + w[0].slice(1);
  return w.join(" ") + ".";
}
function paragraph() {
  const n = 3 + Math.floor(Math.random() * 4);
  return Array.from({ length: n }, sentence).join(" ");
}

export default function Lorem() {
  const [count, setCount] = useState(3);
  const [unit, setUnit] = useState<"paragraphs" | "sentences" | "words">("paragraphs");
  const [out, setOut] = useState("");
  const [copied, setCopied] = useState(false);

  function generate() {
    const n = Math.max(1, Math.min(100, count));
    if (unit === "paragraphs") setOut(Array.from({ length: n }, paragraph).join("\n\n"));
    else if (unit === "sentences") setOut(Array.from({ length: n }, sentence).join(" "));
    else { const w = pick(n); w[0] = w[0][0].toUpperCase() + w[0].slice(1); setOut(w.join(" ") + "."); }
    setCopied(false);
  }
  function copy() { navigator.clipboard?.writeText(out).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1500); }); }

  return (
    <div className="card">
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
        <label style={{ fontSize: 14 }}>How many:&nbsp;
          <input type="number" min={1} max={100} value={count} onChange={(e) => setCount(Number(e.target.value))} style={{ width: 70, padding: 8, border: "1px solid var(--border)", borderRadius: 8 }} />
        </label>
        <div className="preset-row">
          {(["paragraphs", "sentences", "words"] as const).map((u) => (
            <button key={u} type="button" className={`chip${unit === u ? " active" : ""}`} onClick={() => setUnit(u)}>{u}</button>
          ))}
        </div>
        <button className="btn" onClick={generate}>Generate</button>
      </div>
      {out && (
        <>
          <textarea value={out} readOnly rows={8} style={{ ...ta, marginTop: 14, background: "var(--bg-soft, #faf9fc)" }} />
          <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
            <button className="btn secondary" onClick={copy}>{copied ? "Copied ✓" : "Copy text"}</button>
            <button className="btn secondary" onClick={() => setOut("")}>Clear</button>
          </div>
        </>
      )}
    </div>
  );
}
