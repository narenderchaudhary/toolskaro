"use client";

import { useState } from "react";

const ta = { width: "100%", padding: 12, border: "1px solid var(--border)", borderRadius: 10, fontSize: 14, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", resize: "vertical" as const };

// RFC-4180-ish CSV parser: handles quoted fields, escaped quotes ("") and
// commas / newlines inside quotes. `delim` is the field separator.
function parseCsv(input: string, delim: string): string[][] {
  const rows: string[][] = [];
  let field = "";
  let row: string[] = [];
  let inQuotes = false;
  const text = input.replace(/\r\n?/g, "\n");
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else inQuotes = false;
      } else field += c;
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === delim) {
      row.push(field); field = "";
    } else if (c === "\n") {
      row.push(field); field = ""; rows.push(row); row = [];
    } else {
      field += c;
    }
  }
  row.push(field);
  rows.push(row);
  // Drop a trailing empty row (from a final newline).
  if (rows.length && rows[rows.length - 1].length === 1 && rows[rows.length - 1][0] === "") rows.pop();
  return rows;
}

function coerce(v: string, typed: boolean): string | number | boolean | null {
  if (!typed) return v;
  const t = v.trim();
  if (t === "") return "";
  if (t === "true") return true;
  if (t === "false") return false;
  if (t === "null") return null;
  // Numeric, but not things like "007" or phone numbers with +
  if (/^-?\d+(\.\d+)?$/.test(t) && !/^0\d/.test(t)) return Number(t);
  return v;
}

const DELIMS: Record<string, string> = { comma: ",", semicolon: ";", tab: "\t", pipe: "|" };

export default function CsvToJson() {
  const [text, setText] = useState("");
  const [out, setOut] = useState("");
  const [error, setError] = useState("");
  const [rowCount, setRowCount] = useState(0);
  const [copied, setCopied] = useState(false);
  const [header, setHeader] = useState(true);
  const [typed, setTyped] = useState(true);
  const [minify, setMinify] = useState(false);
  const [delim, setDelim] = useState("comma");

  function convert() {
    setError(""); setCopied(false);
    if (!text.trim()) { setError("Paste some CSV first."); setOut(""); setRowCount(0); return; }
    try {
      const rows = parseCsv(text, DELIMS[delim]);
      if (!rows.length) { setError("No rows found."); setOut(""); setRowCount(0); return; }
      let result: unknown;
      if (header) {
        const keys = rows[0].map((k) => k.trim());
        result = rows.slice(1).map((r) => {
          const obj: Record<string, unknown> = {};
          keys.forEach((k, i) => { obj[k] = coerce(r[i] ?? "", typed); });
          return obj;
        });
      } else {
        result = rows.map((r) => r.map((v) => coerce(v, typed)));
      }
      setRowCount(Array.isArray(result) ? result.length : 0);
      setOut(JSON.stringify(result, null, minify ? 0 : 2));
    } catch (e) {
      setOut(""); setRowCount(0);
      setError("Could not parse CSV: " + (e instanceof Error ? e.message : String(e)));
    }
  }

  function copy() { navigator.clipboard?.writeText(out).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1500); }); }
  function download() {
    const blob = new Blob([out], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = "data.json"; a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }

  const chip = (active: boolean) => `chip${active ? " active" : ""}`;
  const check = { fontSize: 14, display: "flex", alignItems: "center", gap: 6, cursor: "pointer" as const };

  return (
    <div className="card">
      <textarea value={text} onChange={(e) => setText(e.target.value)} rows={7} placeholder={"Paste CSV here, e.g.\nname,age,active\nAda,36,true\nAlan,41,false"} style={ta} spellCheck={false} />

      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", marginTop: 12 }}>
        <div>
          <span style={{ fontSize: 13, fontWeight: 600, marginRight: 8 }}>Delimiter:</span>
          <span className="preset-row" style={{ display: "inline-flex" }}>
            {Object.keys(DELIMS).map((d) => (
              <button key={d} type="button" className={chip(delim === d)} onClick={() => setDelim(d)}>{d}</button>
            ))}
          </span>
        </div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 12 }}>
        <label style={check}><input type="checkbox" checked={header} onChange={(e) => setHeader(e.target.checked)} /> First row is header</label>
        <label style={check}><input type="checkbox" checked={typed} onChange={(e) => setTyped(e.target.checked)} /> Detect numbers &amp; booleans</label>
        <label style={check}><input type="checkbox" checked={minify} onChange={(e) => setMinify(e.target.checked)} /> Minify output</label>
      </div>

      <div className="preset-row" style={{ marginTop: 14 }}>
        <button type="button" className="btn" onClick={convert}>Convert to JSON</button>
        <button type="button" className="btn secondary" onClick={() => { setText(""); setOut(""); setError(""); setRowCount(0); }}>Clear</button>
      </div>

      {error && <p style={{ color: "#dc2626", marginTop: 14, fontSize: 14, fontFamily: "ui-monospace, monospace" }}>{error}</p>}

      {out && (
        <>
          <p style={{ marginTop: 16, marginBottom: 6, fontWeight: 600, color: "#16a34a" }}>✓ Converted {rowCount} {rowCount === 1 ? "row" : "rows"}</p>
          <textarea value={out} readOnly rows={8} style={{ ...ta, background: "var(--bg-soft, #faf9fc)" }} spellCheck={false} />
          <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button className="btn secondary" onClick={copy}>{copied ? "Copied ✓" : "Copy JSON"}</button>
            <button className="btn secondary" onClick={download}>⬇ Download .json</button>
          </div>
        </>
      )}
    </div>
  );
}
