import type { Metadata } from "next";
import CompressPdf from "./CompressPdf";

export const metadata: Metadata = {
  title: "Compress PDF — Reduce PDF File Size Online Free (No Upload)",
  description:
    "Compress a PDF to a smaller file size for exam form uploads and email. Choose a compression level and download — free, no signup, and 100% in your browser.",
  alternates: { canonical: "/pdf/compress/" },
};

const faqs = [
  { q: "How much can it reduce my PDF?", a: "For scanned or image-heavy PDFs, savings of 40–80% are common. PDFs that are already small or pure text may compress less." },
  { q: "Are my files uploaded?", a: "No. Compression runs in your browser, so your document never leaves your device." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Compress PDF", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1>Compress PDF</h1>
      <p className="lede">Shrink your PDF to a smaller file size for exam uploads and email — free and entirely in your browser.</p>
      <CompressPdf />
      <div className="ad-slot">Ad placement (AdSense)</div>
      <div className="card faq">
        <h2 style={{ marginTop: 0 }}>FAQ</h2>
        <dl>{faqs.map((f) => (<div key={f.q}><dt>{f.q}</dt><dd>{f.a}</dd></div>))}</dl>
      </div>
    </>
  );
}
