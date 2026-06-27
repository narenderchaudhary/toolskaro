"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { CATEGORIES } from "@/app/tools-catalog";
import { ToolIcon } from "@/app/tool-icons";

const ALL = CATEGORIES.flatMap((c) => c.tools.map((t) => ({ ...t, color: c.color, tint: c.tint, cat: c.name })));

export default function MegaMenu() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!open) { setQ(""); return; }
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    const onClick = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => { window.removeEventListener("keydown", onKey); document.removeEventListener("mousedown", onClick); };
  }, [open]);

  const close = () => setOpen(false);

  const query = q.trim().toLowerCase();
  const results = useMemo(() => {
    if (!query) return [];
    return ALL.filter((t) => t.t.toLowerCase().includes(query) || t.d.toLowerCase().includes(query)).slice(0, 24);
  }, [query]);

  return (
    <div className="mega" ref={ref}>
      <button type="button" className="mega-trigger" aria-expanded={open} aria-haspopup="true" onClick={() => setOpen((v) => !v)}>
        <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className="mega-grid"><rect x="1" y="1" width="6" height="6" rx="1.6" /><rect x="9" y="1" width="6" height="6" rx="1.6" /><rect x="1" y="9" width="6" height="6" rx="1.6" /><rect x="9" y="9" width="6" height="6" rx="1.6" /></svg>
        Tools <span className={`mega-caret${open ? " up" : ""}`} aria-hidden="true">▾</span>
      </button>

      {open && (
        <div className="mega-panel">
          <div className="mega-search-wrap">
            <input
              type="search"
              className="mega-search"
              placeholder="Search all tools…"
              value={q}
              autoFocus
              onChange={(e) => setQ(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter" && results[0]) { close(); router.push(results[0].href); } }}
              aria-label="Search tools"
            />
          </div>

          {query ? (
            <div className="mega-results">
              {results.length ? results.map((t) => (
                <Link key={t.href} href={t.href} className="mega-result" onClick={close}>
                  <span className="mega-ic" style={{ background: t.tint, color: t.color }} aria-hidden="true"><ToolIcon href={t.href} size={15} /></span>
                  <span className="mr-txt"><span className="mr-t">{t.t}</span><span className="mr-c">{t.cat}</span></span>
                </Link>
              )) : <div className="mega-empty">No tools match &ldquo;{q}&rdquo;.</div>}
            </div>
          ) : (
            <div className="mega-inner">
              {CATEGORIES.map((cat) => (
                <div className="mega-col" key={cat.key}>
                  <Link href={cat.hubHref} className="mega-h" style={{ color: cat.color }} onClick={close}>{cat.name}</Link>
                  <ul>
                    {cat.tools.slice(0, 8).map((t) => (
                      <li key={t.href}>
                        <Link href={t.href} onClick={close}>
                          <span className="mega-ic" style={{ background: cat.tint, color: cat.color }} aria-hidden="true"><ToolIcon href={t.href} size={15} /></span>
                          {t.t}
                        </Link>
                      </li>
                    ))}
                    {cat.tools.length > 8 && (
                      <li><Link href={cat.hubHref} className="mega-all" onClick={close}>View all {cat.tools.length} →</Link></li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
