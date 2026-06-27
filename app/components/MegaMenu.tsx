"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CATEGORIES } from "@/app/tools-catalog";

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
      <button
        type="button"
        className="mega-trigger"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
      >
        Tools <span className={`mega-caret${open ? " up" : ""}`} aria-hidden="true">▾</span>
      </button>

      {open && (
        <div className="mega-panel">
          <div className="mega-inner">
            {CATEGORIES.map((cat) => (
              <div className="mega-col" key={cat.key}>
                <Link href={cat.hubHref} className="mega-h" style={{ color: cat.color }} onClick={close}>
                  {cat.name}
                </Link>
                <ul>
                  {cat.tools.slice(0, 8).map((t) => (
                    <li key={t.href}>
                      <Link href={t.href} onClick={close}>
                        <span className="mega-ic" style={{ background: cat.tint, color: cat.color }} aria-hidden="true">{t.icon}</span>
                        {t.t}
                      </Link>
                    </li>
                  ))}
                  {cat.tools.length > 8 && (
                    <li>
                      <Link href={cat.hubHref} className="mega-all" onClick={close}>View all {cat.tools.length} →</Link>
                    </li>
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
