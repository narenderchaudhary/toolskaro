"use client";

import { useMemo, useState } from "react";

export default function WordCounter() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const trimmed = text.trim();
    const words = trimmed ? trimmed.split(/\s+/).length : 0;
    const charsNoSpaces = text.replace(/\s/g, "").length;
    const sentences = trimmed ? (trimmed.match(/[.!?]+(\s|$)/g)?.length || 1) : 0;
    const paragraphs = trimmed ? trimmed.split(/\n{2,}/).filter((p) => p.trim()).length || 1 : 0;
    const readingMins = Math.max(1, Math.ceil(words / 200));
    return { words, chars: text.length, charsNoSpaces, sentences, paragraphs, readingMins };
  }, [text]);

  const Stat = ({ label, value }: { label: string; value: number | string }) => (
    <div style={{ flex: 1, minWidth: 110 }}>
      <div style={{ fontSize: 26, fontWeight: 800, color: "var(--brand)" }}>{value}</div>
      <div className="muted-note">{label}</div>
    </div>
  );

  return (
    <div className="card">
      <div className="row" style={{ marginBottom: 16 }}>
        <Stat label="Words" value={stats.words.toLocaleString("en-IN")} />
        <Stat label="Characters" value={stats.chars.toLocaleString("en-IN")} />
        <Stat label="Characters (no spaces)" value={stats.charsNoSpaces.toLocaleString("en-IN")} />
        <Stat label="Sentences" value={stats.sentences} />
        <Stat label="Paragraphs" value={stats.paragraphs} />
        <Stat label="Reading time" value={`${stats.readingMins} min`} />
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing or paste your text here…"
        rows={10}
        style={{ width: "100%", padding: 12, border: "1px solid var(--border)", borderRadius: 10, fontSize: 15, fontFamily: "inherit", resize: "vertical" }}
      />
    </div>
  );
}
