"use client";

import { useMemo, useRef, useState } from "react";

const PASSAGES: Record<"en" | "hi", string> = {
  en: "The journey of a thousand miles begins with a single step. Practice typing every day to improve your speed and accuracy. Government skill tests often require a minimum words per minute, so focus on steady, error free typing rather than rushing through the passage.",
  hi: "सफलता का कोई शॉर्टकट नहीं होता, निरंतर अभ्यास ही सबसे बड़ी कुंजी है। हर दिन थोड़ा समय निकालकर टाइपिंग का अभ्यास करें ताकि आपकी गति और शुद्धता दोनों बेहतर हों। सरकारी परीक्षाओं में अक्सर एक निश्चित गति की आवश्यकता होती है।",
};

export default function TypingTest() {
  const [lang, setLang] = useState<"en" | "hi">("en");
  const [typed, setTyped] = useState("");
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const passage = PASSAGES[lang];

  function reset(newLang = lang) {
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
    setTyped("");
    setStartedAt(null);
    setElapsed(0);
    setLang(newLang);
  }

  function onChange(value: string) {
    if (startedAt === null && value.length > 0) {
      const start = performance.now();
      setStartedAt(start);
      timer.current = setInterval(() => setElapsed((performance.now() - start) / 1000), 200);
    }
    if (value.length >= passage.length && timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
    setTyped(value);
  }

  const { correct, accuracy, wpm } = useMemo(() => {
    let c = 0;
    for (let i = 0; i < typed.length; i++) if (typed[i] === passage[i]) c++;
    const acc = typed.length ? Math.round((c / typed.length) * 100) : 100;
    const mins = elapsed / 60;
    const words = c / 5;
    return { correct: c, accuracy: acc, wpm: mins > 0 ? Math.round(words / mins) : 0 };
  }, [typed, elapsed, passage]);

  const done = typed.length >= passage.length;

  return (
    <div className="card">
      <div className="preset-row" style={{ marginBottom: 14 }}>
        <button type="button" className="chip" onClick={() => reset("en")} style={lang === "en" ? { borderColor: "var(--brand)", color: "var(--brand)" } : undefined}>English</button>
        <button type="button" className="chip" onClick={() => reset("hi")} style={lang === "hi" ? { borderColor: "var(--brand)", color: "var(--brand)" } : undefined}>हिंदी</button>
      </div>

      <div className="row" style={{ marginBottom: 14 }}>
        <div><div style={{ fontSize: 26, fontWeight: 800, color: "var(--brand)" }}>{wpm}</div><div className="muted-note">WPM</div></div>
        <div><div style={{ fontSize: 26, fontWeight: 800, color: accuracy >= 95 ? "var(--accent)" : "var(--ink)" }}>{accuracy}%</div><div className="muted-note">Accuracy</div></div>
        <div><div style={{ fontSize: 26, fontWeight: 800 }}>{elapsed.toFixed(0)}s</div><div className="muted-note">Time</div></div>
        <div><div style={{ fontSize: 26, fontWeight: 800 }}>{correct}/{passage.length}</div><div className="muted-note">Correct chars</div></div>
      </div>

      <div style={{ padding: 14, background: "#fbfdff", border: "1px solid var(--border)", borderRadius: 10, fontSize: 17, lineHeight: 1.7, marginBottom: 12 }}>
        {passage.split("").map((ch, i) => {
          let color = "var(--muted)";
          if (i < typed.length) color = typed[i] === ch ? "var(--accent)" : "#c0392b";
          const underline = i === typed.length ? "2px solid var(--brand)" : undefined;
          return <span key={i} style={{ color, borderBottom: underline, background: i < typed.length && typed[i] !== ch ? "#fde8e8" : undefined }}>{ch}</span>;
        })}
      </div>

      <textarea
        value={typed}
        onChange={(e) => onChange(e.target.value)}
        disabled={done}
        rows={4}
        placeholder="Start typing the passage above…"
        style={{ width: "100%", padding: 12, border: "1px solid var(--border)", borderRadius: 10, fontSize: 16, fontFamily: "inherit", resize: "vertical" }}
      />

      <div style={{ marginTop: 14 }}>
        <button className="btn secondary" onClick={() => reset()}>Restart</button>
        {done && <span style={{ marginLeft: 12, color: "var(--accent)", fontWeight: 700 }}>✅ Finished — {wpm} WPM at {accuracy}% accuracy</span>}
      </div>
    </div>
  );
}
