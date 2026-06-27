import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";
import Faq from "./Faq";
import CtaBand from "./CtaBand";
import { CATEGORIES, CAT_BY_KEY } from "@/app/tools-catalog";
import { ToolIcon } from "@/app/tool-icons";
import type { ToolCat } from "@/app/tools-map";

const SITE = "https://toolskaro.com";

export default function Hub({
  catKey,
  heading,
  headingNode,
  lede,
  children,
  faqs,
}: {
  catKey: ToolCat;
  heading: string;
  headingNode?: React.ReactNode;
  lede: string;
  children: React.ReactNode;
  faqs: { q: string; a: string }[];
}) {
  const cat = CAT_BY_KEY[catKey];
  const others = CATEGORIES.filter((c) => c.key !== catKey);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: heading,
        url: `${SITE}${cat.hubHref}`,
        description: lede,
        isPartOf: { "@id": `${SITE}/#website` },
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: cat.tools.length,
          itemListElement: cat.tools.map((t, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: t.t,
            url: `${SITE}${t.href}`,
          })),
        },
      },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: cat.name, href: cat.hubHref }]} />

      <div className="tool-hero">
        <h1>{headingNode ?? heading}</h1>
        <p className="lede">{lede}</p>
      </div>

      <div className="tool-grid">
        {cat.tools.map((tool) => (
          <Link key={tool.href} href={tool.href} className="tool-card" style={{ ["--cat" as string]: cat.color } as React.CSSProperties}>
            <div className="tool-icon" style={{ background: cat.tint, color: cat.color }}><ToolIcon href={tool.href} /></div>
            <div>
              <div className="t">{tool.t}</div>
              <div className="d">{tool.d}</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="card content">{children}</div>

      <Faq items={faqs} />

      <CtaBand
        heading="Explore more free tools"
        text="Every ToolsKaro tool is free, needs no sign-up and runs entirely in your browser."
        links={others.map((c) => [c.hubHref, c.name] as [string, string])}
      />
    </>
  );
}
