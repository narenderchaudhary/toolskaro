import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CATEGORIES } from "@/app/tools-catalog";
import { ToolIcon } from "@/app/tool-icons";

type T = { href: string; t: string; d: string; color: string; tint: string };
const ALL: T[] = CATEGORIES.flatMap((c) => c.tools.map((t) => ({ href: t.href, t: t.t, d: t.d, color: c.color, tint: c.tint })));

export default function RelatedTools({ heading = "Related tools", hrefs }: { heading?: string; hrefs: string[] }) {
  const tools = hrefs.map((h) => ALL.find((x) => x.href === h)).filter((x): x is T => !!x);
  if (!tools.length) return null;
  return (
    <section className="related">
      <h2 className="section-center">{heading}</h2>
      <div className="related-grid">
        {tools.map((t) => (
          <Link key={t.href} href={t.href} className="related-card" style={{ ["--cat" as string]: t.color } as React.CSSProperties}>
            <span className="related-ic" style={{ background: t.tint, color: t.color }}><ToolIcon href={t.href} size={20} /></span>
            <span className="related-t">{t.t}</span>
            <span className="related-d">{t.d}</span>
            <span className="related-open">Open tool <ArrowRight size={14} /></span>
          </Link>
        ))}
      </div>
    </section>
  );
}
