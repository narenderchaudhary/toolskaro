import type { Metadata } from "next";
import MergePdf from "./MergePdf";

export const metadata: Metadata = {
  title: "Merge PDF — Combine PDF Files Online Free (No Upload)",
  description:
    "Combine multiple PDF files into one, reorder them as you like, and download — free, no signup, and 100% in your browser. Your files are never uploaded.",
  alternates: { canonical: "/pdf/merge/" },
};

const faqs = [
  { q: "How many PDFs can I merge?", a: "As many as you like. Add two or more files, drag them into the right order, and merge." },
  { q: "Is it safe?", a: "Yes — merging happens inside your browser, so your PDFs never leave your device." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Merge PDF", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1>Merge PDF</h1>
      <p className="lede">Combine multiple PDFs into a single file, in any order — free and entirely in your browser.</p>
      <MergePdf />
      <div className="ad-slot">Ad placement (AdSense)</div>
      <div className="card faq">
        <h2 style={{ marginTop: 0 }}>FAQ</h2>
        <dl>{faqs.map((f) => (<div key={f.q}><dt>{f.q}</dt><dd>{f.a}</dd></div>))}</dl>
      </div>
    </>
  );
}
