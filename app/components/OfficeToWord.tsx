"use client";

import { useRef, useState } from "react";
import { buildDocxBlob, extractPptx, extractEpub, downloadBlob, type Para } from "@/app/lib/office";

// Shared engine for PPTX->Word and EPUB->Word. Unzips the source, extracts text,
// builds a real .docx — all client-side.
export default function OfficeToWord({ kind, accept, inLabel }: { kind: "pptx" | "epub"; accept: string; inLabel: string }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "working" | "done" | "error">("idle");
  const [error, setError] = useState("");
  const [count, setCount] = useState(0);
  const [over, setOver] = useState(false);

  async function handle(file: File | undefined) {
    if (!file) return;
    setName(file.name); setError(""); setStatus("working"); setCount(0);
    try {
      const paras: Para[] = kind === "pptx" ? await extractPptx(file) : await extractEpub(file);
      const blob = await buildDocxBlob(paras);
      const base = file.name.replace(/\.[^.]+$/, "") || "converted";
      downloadBlob(blob, `${base}.docx`);
      setCount(paras.filter((p) => !p.heading).length);
      setStatus("done");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Conversion failed.");
      setStatus("error");
    }
  }

  return (
    <div className="card">
      <div
        className={`ij-slot${over ? " over" : ""}`}
        style={{ minHeight: 150 }}
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setOver(true); }}
        onDragLeave={() => setOver(false)}
        onDrop={(e) => { e.preventDefault(); setOver(false); handle(e.dataTransfer.files?.[0]); }}
        role="button" tabIndex={0}
      >
        <input ref={inputRef} type="file" accept={accept} hidden onChange={(e) => { handle(e.target.files?.[0]); e.target.value = ""; }} />
        <div className="ij-slot-empty">
          <span className="ij-slot-ic" aria-hidden="true">{kind === "pptx" ? "📊" : "📖"}</span>
          <span>{name ? `Selected: ${name}` : `Click or drop ${inLabel} to convert`}</span>
        </div>
      </div>

      {status === "working" && <p style={{ marginTop: 14, fontWeight: 600 }}>Converting…</p>}
      {status === "error" && <p style={{ color: "#dc2626", marginTop: 14 }}>{error}</p>}
      {status === "done" && (
        <div className="result" style={{ marginTop: 16 }}>
          <p className="stat" style={{ color: "#16a34a", fontWeight: 600 }}>✓ Word document downloaded ({count} paragraphs of text)</p>
          <p className="stat" style={{ fontSize: 13, color: "var(--muted, #6b7280)" }}>Extracted the text content into an editable .docx. Re-open it in Word, Google Docs or LibreOffice.</p>
        </div>
      )}
    </div>
  );
}
