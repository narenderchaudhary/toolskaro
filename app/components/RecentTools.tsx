"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CATEGORIES } from "@/app/tools-catalog";
import { ToolIcon } from "@/app/tool-icons";

type T = { href: string; t: string; color: string; tint: string };
const ALL: T[] = CATEGORIES.flatMap((c) => c.tools.map((t) => ({ href: t.href, t: t.t, color: c.color, tint: c.tint })));

// Records the current tool in localStorage and shows the visitor's other recently-used tools.
export default function RecentTools({ current }: { current: string }) {
  const [recent, setRecent] = useState<string[]>([]);

  useEffect(() => {
    let arr: string[] = [];
    try { arr = JSON.parse(localStorage.getItem("tk_recent") || "[]"); } catch {}
    const next = [current, ...arr.filter((h) => h !== current)].slice(0, 10);
    try { localStorage.setItem("tk_recent", JSON.stringify(next)); } catch {}
    setRecent(next.filter((h) => h !== current));
  }, [current]);

  const tools = recent.map((h) => ALL.find((x) => x.href === h)).filter((x): x is T => !!x).slice(0, 6);
  if (!tools.length) return null;

  return (
    <section className="recent">
      <h2 className="section-center">Recently used</h2>
      <div className="recent-rail">
        {tools.map((t) => (
          <Link key={t.href} href={t.href} className="recent-chip" style={{ ["--cat" as string]: t.color } as React.CSSProperties}>
            <span className="recent-ic" style={{ background: t.tint, color: t.color }}><ToolIcon href={t.href} size={16} /></span>
            {t.t}
          </Link>
        ))}
      </div>
    </section>
  );
}
