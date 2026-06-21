"use client";
import { useState, useMemo, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CATEGORIES } from "@/app/tools-catalog";

// Flatten every live tool once, keeping its category colour for the result rows.
const ALL = CATEGORIES.flatMap((c) =>
  c.tools.filter((t) => t.ready).map((t) => ({ href: t.href, icon: t.icon, t: t.t, d: t.d, cat: c.name, color: c.color, tint: c.tint })),
);

export default function ToolSearch() {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const boxRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return [];
    const words = s.split(/\s+/);
    return ALL.filter((t) => {
      const hay = `${t.t} ${t.d} ${t.cat}`.toLowerCase();
      return words.every((w) => hay.includes(w));
    }).slice(0, 8);
  }, [q]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (results[0]) router.push(results[0].href);
  };

  return (
    <div className="tool-search" ref={boxRef}>
      <form className="tool-search-box" onSubmit={onSubmit} role="search">
        <svg className="ts-search-ic" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <input
          type="search"
          value={q}
          onChange={(e) => { setQ(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          placeholder="Search 60+ tools — e.g. compress, jpg to pdf, resume"
          aria-label="Search tools"
          autoComplete="off"
        />
        {q && (
          <button type="button" className="ts-clear" aria-label="Clear search" onClick={() => { setQ(""); setOpen(false); }}>
            ×
          </button>
        )}
      </form>

      {open && q.trim() && (
        <div className="tool-search-results" role="listbox">
          {results.length > 0 ? (
            results.map((t) => (
              <Link key={t.href} href={t.href} className="ts-item" role="option">
                <span className="ts-icon" style={{ background: t.tint, color: t.color }}>{t.icon}</span>
                <span className="ts-meta">
                  <b>{t.t}</b>
                  <span>{t.d}</span>
                </span>
                <span className="ts-cat">{t.cat}</span>
              </Link>
            ))
          ) : (
            <div className="ts-empty">No tools match “{q.trim()}”. Try “pdf”, “image”, “calculator” or “resume”.</div>
          )}
        </div>
      )}
    </div>
  );
}
