"use client";

import { useState } from "react";
import { buildDocxBlob, txtToParagraphs, downloadBlob } from "@/app/lib/office";

export default function TxtToWord() {
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  async function convert() {
    setError(""); setDone(false);
    if (!text.trim()) { setError("Type or upload some text first."); return; }
    setBusy(true);
    try {
      const blob = await buildDocxBlob(txtToParagraphs(text));
      downloadBlob(blob, "document.docx");
      setDone(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Conversion failed.");
    } finally { setBusy(false); }
  }

  async function loadFile(f: File | undefined) {
    if (!f) return;
    setText(await f.text()); setDone(false); setError("");
  }

  return (
    <div className="card">
      <textarea value={text} onChange={(e) => { setText(e.target.value); setDone(false); }} rows={8} placeholder="Type or paste your text here…"
        style={{ width: "100%", padding: 12, border: "1px solid var(--border)", borderRadius: 10, fontSize: 15, resize: "vertical" }} />
      <div className="preset-row" style={{ marginTop: 12 }}>
        <button type="button" className="btn" onClick={convert} disabled={busy}>{busy ? "Converting…" : "⬇ Convert to Word (.docx)"}</button>
        <label className="btn secondary" style={{ cursor: "pointer" }}>
          <input type="file" accept=".txt,text/plain" hidden onChange={(e) => { loadFile(e.target.files?.[0]); e.target.value = ""; }} />
          Upload .txt
        </label>
        <button type="button" className="btn secondary" onClick={() => { setText(""); setDone(false); setError(""); }}>Clear</button>
      </div>
      {error && <p style={{ color: "#dc2626", marginTop: 14 }}>{error}</p>}
      {done && <p style={{ color: "#16a34a", marginTop: 14, fontWeight: 600 }}>✓ Word document downloaded. Open it in Word, Google Docs or LibreOffice.</p>}
    </div>
  );
}
