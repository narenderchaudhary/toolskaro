"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CATEGORIES } from "@/app/tools-catalog";
import { ToolIcon } from "@/app/tool-icons";

export default function MegaMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    const onClick = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => { window.removeEventListener("keydown", onKey); document.removeEventListener("mousedown", onClick); };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="mega" ref={ref}>
      <button type="button" className="mega-trigger" aria-expanded={open} aria-haspopup="true" aria-label="Browse all tools" onClick={() => setOpen((v) => !v)}>
        <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className="mega-grid"><rect x="1" y="1" width="6" height="6" rx="1.6" /><rect x="9" y="1" width="6" height="6" rx="1.6" /><rect x="1" y="9" width="6" height="6" rx="1.6" /><rect x="9" y="9" width="6" height="6" rx="1.6" /></svg>
        <span className="mega-label">Tools</span>
        <span className={`mega-caret${open ? " up" : ""}`} aria-hidden="true">▾</span>
      </button>

      {open && (
        <div className="mega-panel">
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
        </div>
      )}
    </div>
  );
}
