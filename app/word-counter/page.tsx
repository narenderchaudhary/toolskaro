import type { Metadata } from "next";
import WordCounter from "./WordCounter";

export const metadata: Metadata = {
  title: "Word Counter — Count Words, Characters & Reading Time Online Free",
  description:
    "Free online word counter. Instantly count words, characters, sentences, paragraphs and reading time as you type or paste. 100% in your browser.",
  alternates: { canonical: "/word-counter/" },
};

const faqs = [
  { q: "Does it count characters with and without spaces?", a: "Yes — it shows total characters and characters excluding spaces, which is handy for forms with strict character limits." },
  { q: "Is my text private?", a: "Completely. The counting happens in your browser; nothing is sent to any server." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Word Counter", applicationCategory: "UtilitiesApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1>Word Counter</h1>
      <p className="lede">Count words, characters, sentences and reading time instantly as you type — free and private.</p>
      <WordCounter />
      <div className="ad-slot">Ad placement (AdSense)</div>
      <div className="card faq">
        <h2 style={{ marginTop: 0 }}>FAQ</h2>
        <dl>{faqs.map((f) => (<div key={f.q}><dt>{f.q}</dt><dd>{f.a}</dd></div>))}</dl>
      </div>
    </>
  );
}
