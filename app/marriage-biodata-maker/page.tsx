import type { Metadata } from "next";
import BiodataMaker from "./BiodataMaker";

export const metadata: Metadata = {
  title: "Marriage Biodata Maker — Free Online (Hindi & English) Download PDF",
  description:
    "Create a marriage biodata in Hindi or English with a traditional header and download it as a PDF. Free, no signup, and 100% in your browser.",
  alternates: { canonical: "/marriage-biodata-maker/" },
};

const faqs = [
  { q: "Can I make the biodata in Hindi?", a: "Yes — switch the labels to हिंदी, and you can type your details in Hindi or English. A traditional header line is included by default." },
  { q: "How do I save it?", a: "Click Download / Print PDF and choose “Save as PDF” in your browser's print dialog." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Marriage Biodata Maker", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1>Marriage Biodata Maker</h1>
      <p className="lede">Create a clean marriage biodata in Hindi or English and download it as a PDF — free and entirely in your browser.</p>
      <BiodataMaker />
      <div className="ad-slot no-print">Ad placement (AdSense)</div>
      <div className="card faq">
        <h2 style={{ marginTop: 0 }}>FAQ</h2>
        <dl>{faqs.map((f) => (<div key={f.q}><dt>{f.q}</dt><dd>{f.a}</dd></div>))}</dl>
      </div>
    </>
  );
}
