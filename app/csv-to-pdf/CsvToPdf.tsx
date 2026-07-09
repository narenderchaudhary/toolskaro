"use client";

import { useState } from "react";

const ta = { width: "100%", padding: 12, border: "1px solid var(--border)", borderRadius: 10, fontSize: 14, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", resize: "vertical" as const };

const DELIMS: Record<string, string> = { comma: ",", semicolon: ";", tab: "\t", pipe: "|" };

function parseCsv(input: string, delim: string): string[][] {
  const rows: string[][] = [];
  let field = "", row: string[] = [], inQ = false;
  const text = input.replace(/\r\n?/g, "\n");
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQ) {
      if (c === '"') { if (text[i + 1] === '"') { field += '"'; i++; } else inQ = false; }
      else field += c;
    } else if (c === '"') inQ = true;
    else if (c === delim) { row.push(field); field = ""; }
    else if (c === "\n") { row.push(field); field = ""; rows.push(row); row = []; }
    else field += c;
  }
  row.push(field); rows.push(row);
  if (rows.length && rows[rows.length - 1].length === 1 && rows[rows.length - 1][0] === "") rows.pop();
  return rows;
}

export default function CsvToPdf() {
  const [text, setText] = useState("");
  const [delim, setDelim] = useState("comma");
  const [header, setHeader] = useState(true);
  const [landscape, setLandscape] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function makePdf() {
    setError("");
    if (!text.trim()) { setError("Paste some CSV first."); return; }
    setBusy(true);
    try {
      const rows = parseCsv(text, DELIMS[delim]);
      const { PDFDocument, StandardFonts, rgb } = await import("pdf-lib");
      const pdf = await PDFDocument.create();
      const font = await pdf.embedFont(StandardFonts.Helvetica);
      const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
      const size = landscape ? [842, 595] : [595, 842]; // A4 pt
      const margin = 36, fontSize = 9, rowH = 18;
      const cols = Math.max(1, ...rows.map((r) => r.length));
      const usableW = size[0] - margin * 2;
      const colW = usableW / cols;

      let page = pdf.addPage(size as [number, number]);
      let y = size[1] - margin;
      const drawRow = (cells: string[], isHead: boolean) => {
        if (y < margin + rowH) { page = pdf.addPage(size as [number, number]); y = size[1] - margin; }
        if (isHead) { page.drawRectangle({ x: margin, y: y - rowH + 4, width: usableW, height: rowH, color: rgb(0.93, 0.92, 0.98) }); }
        for (let c = 0; c < cols; c++) {
          const raw = (cells[c] ?? "").replace(/\s+/g, " ").trim();
          const maxChars = Math.floor(colW / (fontSize * 0.5));
          const txt = raw.length > maxChars ? raw.slice(0, Math.max(1, maxChars - 1)) + "…" : raw;
          page.drawText(txt, { x: margin + c * colW + 3, y: y - rowH + 9, size: fontSize, font: isHead ? bold : font, color: rgb(0.1, 0.1, 0.12) });
        }
        page.drawLine({ start: { x: margin, y: y - rowH + 3 }, end: { x: margin + usableW, y: y - rowH + 3 }, thickness: 0.5, color: rgb(0.8, 0.8, 0.85) });
        y -= rowH;
      };
      rows.forEach((r, i) => drawRow(r, header && i === 0));

      const bytes = await pdf.save();
      const blob = new Blob([bytes as BlobPart], { type: "application/pdf" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob); a.download = "table.pdf"; a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    } catch (e) {
      setError("Could not build the PDF: " + (e instanceof Error ? e.message : String(e)));
    } finally { setBusy(false); }
  }

  const chip = (a: boolean) => `chip${a ? " active" : ""}`;
  const check = { fontSize: 14, display: "flex", alignItems: "center", gap: 6, cursor: "pointer" as const };

  return (
    <div className="card">
      <textarea value={text} onChange={(e) => setText(e.target.value)} rows={7} placeholder={"Paste CSV here, e.g.\nName,Role,City\nAda,Engineer,London\nAlan,Mathematician,Bletchley"} style={ta} spellCheck={false} />
      <div style={{ marginTop: 12 }}>
        <span style={{ fontSize: 13, fontWeight: 600, marginRight: 8 }}>Delimiter:</span>
        <span className="preset-row" style={{ display: "inline-flex" }}>
          {Object.keys(DELIMS).map((d) => <button key={d} type="button" className={chip(delim === d)} onClick={() => setDelim(d)}>{d}</button>)}
        </span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 12 }}>
        <label style={check}><input type="checkbox" checked={header} onChange={(e) => setHeader(e.target.checked)} /> First row is a header</label>
        <label style={check}><input type="checkbox" checked={landscape} onChange={(e) => setLandscape(e.target.checked)} /> Landscape (wide tables)</label>
      </div>
      <div className="preset-row" style={{ marginTop: 14 }}>
        <button type="button" className="btn" onClick={makePdf} disabled={busy}>{busy ? "Building…" : "⬇ Convert to PDF"}</button>
        <button type="button" className="btn secondary" onClick={() => { setText(""); setError(""); }}>Clear</button>
      </div>
      {error && <p style={{ color: "#dc2626", marginTop: 14, fontSize: 14 }}>{error}</p>}
    </div>
  );
}
