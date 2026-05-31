import type { Metadata } from "next";
import WordCounter from "./WordCounter";

export const metadata: Metadata = {
  title: "Word Counter — Count Words, Characters & Reading Time Online Free",
  description:
    "Free online word counter. Instantly count words, characters, sentences, paragraphs and reading time as you type or paste. 100% in your browser.",
  alternates: { canonical: "/word-counter/" },
};

const faqs = [
  { q: "Does it count characters with and without spaces?", a: "Yes — it shows total characters and characters excluding spaces, which is handy for forms and applications with strict character limits." },
  { q: "How is reading time calculated?", a: "Reading time is estimated at about 200 words per minute, the average adult reading speed." },
  { q: "Can I use it to stay within an essay or SOP word limit?", a: "Absolutely. Paste your text and watch the live word count, so you can trim or expand to fit an exam essay, statement of purpose, or application limit." },
  { q: "Is my text private?", a: "Completely. The counting happens in your browser; nothing is sent to or stored on any server." },
  { q: "Is there a length limit?", a: "No. You can paste short answers or long documents — it counts everything instantly." },
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

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>How to use the word counter</h2>
        <ol className="steps">
          <li>Type directly in the box, or paste your text.</li>
          <li>Watch the live counts update for words, characters, sentences and paragraphs.</li>
          <li>Use the characters-without-spaces count for strict character limits.</li>
          <li>Check the estimated reading time for speeches or articles.</li>
        </ol>
      </div>

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Stay within any word or character limit</h2>
        <p>
          Exam essays, statements of purpose, application answers, blog posts and social captions
          all come with limits. This counter gives you instant, accurate numbers as you write —
          words, characters with and without spaces, sentences, paragraphs and reading time — so you
          can edit to fit without guesswork.
        </p>
        <p>
          It’s also useful for students checking assignment lengths and for writers estimating how
          long a piece takes to read. Your text stays entirely in your browser and is never stored.
        </p>
      </div>

      <div className="card faq">
        <h2 style={{ marginTop: 0 }}>Frequently asked questions</h2>
        <dl>{faqs.map((f) => (<div key={f.q}><dt>{f.q}</dt><dd>{f.a}</dd></div>))}</dl>
      </div>
    </>
  );
}
