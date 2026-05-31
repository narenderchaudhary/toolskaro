import type { Metadata } from "next";
import JpgToPdf from "./JpgToPdf";

export const metadata: Metadata = {
  title: "JPG to PDF — Convert Images to PDF Online Free (No Upload)",
  description:
    "Convert JPG or PNG images into a single PDF. Add multiple photos, reorder, and download — free, no signup, and 100% in your browser. Perfect for exam document uploads.",
  alternates: { canonical: "/pdf/jpg-to-pdf/" },
};

const faqs = [
  { q: "Can I combine multiple images into one PDF?", a: "Yes. Add as many JPG or PNG images as you like — they are combined into a single PDF in the order shown." },
  { q: "Are my images uploaded anywhere?", a: "No. The PDF is created inside your browser, so your images never leave your device." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "JPG to PDF Converter", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1>JPG to PDF</h1>
      <p className="lede">Combine your JPG or PNG images into one PDF — free, no signup, and entirely in your browser.</p>
      <JpgToPdf />
      <div className="ad-slot">Ad placement (AdSense)</div>
      <div className="card faq">
        <h2 style={{ marginTop: 0 }}>FAQ</h2>
        <dl>{faqs.map((f) => (<div key={f.q}><dt>{f.q}</dt><dd>{f.a}</dd></div>))}</dl>
      </div>
    </>
  );
}
