import type { Metadata } from "next";
import PdfToJpg from "./PdfToJpg";

export const metadata: Metadata = {
  title: "PDF to JPG — Convert PDF Pages to Images Online Free (No Upload)",
  description:
    "Convert every page of a PDF into high-quality JPG images and download them. Free, no signup, and 100% in your browser — your PDF is never uploaded.",
  alternates: { canonical: "/pdf/pdf-to-jpg/" },
};

const faqs = [
  { q: "Does it convert every page?", a: "Yes — each page of your PDF becomes a separate JPG image that you can download individually." },
  { q: "Is the quality good enough to print?", a: "Pages are rendered at roughly 144 DPI, which is sharp on screen and fine for most uploads. For print-grade output, use a higher-resolution source PDF." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "PDF to JPG Converter", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1>PDF to JPG</h1>
      <p className="lede">Turn each page of your PDF into a downloadable JPG image — free and entirely in your browser.</p>
      <PdfToJpg />
      <div className="ad-slot">Ad placement (AdSense)</div>
      <div className="card faq">
        <h2 style={{ marginTop: 0 }}>FAQ</h2>
        <dl>{faqs.map((f) => (<div key={f.q}><dt>{f.q}</dt><dd>{f.a}</dd></div>))}</dl>
      </div>
    </>
  );
}
