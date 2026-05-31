import type { Metadata } from "next";
import SignatureResize from "./SignatureResize";

export const metadata: Metadata = {
  title: "Signature Resize — Resize Signature to KB & Size for Exam Forms (Free)",
  description:
    "Resize your signature to the exact pixel size and KB limit required by SSC, UPSC, Bank and Railway exam forms (e.g. 10–20 KB). Free, no signup, 100% in your browser.",
  alternates: { canonical: "/signature-resize/" },
};

const faqs = [
  { q: "What size should a signature be for exam forms?", a: "Most forms ask for a signature around 3×1 cm with a file size of 10–20 KB. Set the width, height and max KB to match your form's instructions." },
  { q: "Will the white background be kept?", a: "Yes — the signature is placed on a clean white background and saved as JPG, which exam portals accept." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Signature Resizer", applicationCategory: "MultimediaApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1>Signature Resize</h1>
      <p className="lede">Resize your signature to the exact dimensions and KB limit your exam form needs — free and entirely in your browser.</p>
      <SignatureResize />
      <div className="ad-slot">Ad placement (AdSense)</div>
      <div className="card faq">
        <h2 style={{ marginTop: 0 }}>FAQ</h2>
        <dl>{faqs.map((f) => (<div key={f.q}><dt>{f.q}</dt><dd>{f.a}</dd></div>))}</dl>
      </div>
    </>
  );
}
