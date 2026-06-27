"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { Search } from "lucide-react";
import { CATEGORIES } from "@/app/tools-catalog";
import { ToolIcon } from "@/app/tool-icons";

const ALL = CATEGORIES.flatMap((c) => c.tools.map((t) => ({ ...t, color: c.color, tint: c.tint, cat: c.name })));

export default function HeaderSearch() {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); inputRef.current?.focus(); }
      if (e.key === "Escape") { setOpen(false); inputRef.current?.blur(); }
    };
    const onClick = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => { window.removeEventListener("keydown", onKey); document.removeEventListener("mousedown", onClick); };
  }, []);

  const query = q.trim().toLowerCase();
  const results = useMemo(() => {
    if (!query) return [];
    return ALL.filter((t) => t.t.toLowerCase().includes(query) || t.d.toLowerCase().includes(query)).slice(0, 8);
  }, [query]);

  const close = () => { setQ(""); setOpen(false); };

  return (
    <div className="hdr-search" ref={ref}>
      <Search className="hdr-search-ic" size={17} aria-hidden="true" />
      <input
        ref={inputRef}
        type="search"
        className="hdr-search-input"
        placeholder="Search 60+ tools…"
        value={q}
        onChange={(e) => { setQ(e.target.value); setOpen(true); }}
        onFocus={() => { if (q) setOpen(true); }}
        onKeyDown={(e) => { if (e.key === "Enter" && results[0]) { close(); router.push(results[0].href); } }}
        aria-label="Search tools"
      />
      <kbd className="hdr-search-kbd" aria-hidden="true">⌘K</kbd>

      {open && query && (
        <div className="hdr-results">
          {results.length ? results.map((t) => (
            <Link key={t.href} href={t.href} className="hdr-result" onClick={close}>
              <span className="mega-ic" style={{ background: t.tint, color: t.color }} aria-hidden="true"><ToolIcon href={t.href} size={15} /></span>
              <span className="mr-txt"><span className="mr-t">{t.t}</span><span className="mr-c">{t.cat}</span></span>
            </Link>
          )) : <div className="hdr-empty">No tools match &ldquo;{q}&rdquo;.</div>}
        </div>
      )}
    </div>
  );
}
