"use client";

import { useEffect, useState } from "react";

const SETS = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  num: "0123456789",
  sym: "!@#$%^&*()-_=+[]{};:,.?",
};

function rand(n: number) {
  const a = new Uint32Array(1);
  crypto.getRandomValues(a);
  return a[0] % n;
}

function generate(len: number, opts: Record<keyof typeof SETS, boolean>) {
  const sets = (Object.keys(SETS) as (keyof typeof SETS)[]).filter((k) => opts[k]).map((k) => SETS[k]);
  if (!sets.length || len <= 0) return "";
  const pool = sets.join("");
  const chars: string[] = [];
  // Guarantee at least one character from each selected set (when length allows).
  for (const s of sets) if (chars.length < len) chars.push(s[rand(s.length)]);
  // Fill the remainder from the full pool.
  while (chars.length < len) chars.push(pool[rand(pool.length)]);
  // Fisher–Yates shuffle so the guaranteed characters aren't always at the front.
  for (let i = chars.length - 1; i > 0; i--) {
    const j = rand(i + 1);
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }
  return chars.join("");
}

export default function PasswordGen() {
  const [len, setLen] = useState(16);
  const [opts, setOpts] = useState({ lower: true, upper: true, num: true, sym: false });
  const [pwd, setPwd] = useState("");
  const [copied, setCopied] = useState(false);

  const regen = () => { setPwd(generate(len, opts)); setCopied(false); };
  useEffect(regen, [len, opts]); // eslint-disable-line react-hooks/exhaustive-deps

  const variety = Object.values(opts).filter(Boolean).length;
  const strength = len >= 16 && variety >= 3 ? "Strong" : len >= 12 && variety >= 2 ? "Good" : "Weak";
  const sColor = strength === "Strong" ? "var(--accent)" : strength === "Good" ? "#d97706" : "#dc2626";

  function copy() {
    navigator.clipboard?.writeText(pwd).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1500); });
  }

  const toggle = (k: keyof typeof SETS) => setOpts((o) => ({ ...o, [k]: !o[k] }));

  return (
    <div className="card">
      <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
        <input readOnly value={pwd} style={{ flex: 1, minWidth: 220, fontFamily: "monospace", fontSize: 17 }} />
        <button className="btn secondary" onClick={copy}>{copied ? "Copied ✓" : "Copy"}</button>
        <button className="btn" onClick={regen}>↻ Regenerate</button>
      </div>
      <p className="stat" style={{ marginTop: 10 }}>Strength: <b style={{ color: sColor }}>{strength}</b></p>

      <label htmlFor="len" style={{ marginTop: 12 }}>Length: {len}</label>
      <input id="len" type="range" min={6} max={48} value={len} onChange={(e) => setLen(Number(e.target.value))} style={{ width: "100%" }} />

      <div className="preset-row" style={{ marginTop: 10 }}>
        {([["lower", "abc"], ["upper", "ABC"], ["num", "123"], ["sym", "!@#"]] as [keyof typeof SETS, string][]).map(([k, l]) => (
          <button key={k} type="button" className="chip" onClick={() => toggle(k)} style={opts[k] ? { borderColor: "var(--brand)", color: "var(--brand)", background: "#f6f6ff" } : undefined}>
            {opts[k] ? "✓ " : ""}{l}
          </button>
        ))}
      </div>
    </div>
  );
}
