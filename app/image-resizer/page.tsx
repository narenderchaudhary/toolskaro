import type { Metadata } from "next";
import Resizer from "./Resizer";

export const metadata: Metadata = {
  title: "Image Resizer — Resize Photo by Pixels for Exam Forms (Free, No Upload)",
  description:
    "Resize your photo or signature to exact pixel dimensions for SSC, UPSC, Bank and Railway exam forms. Presets for passport size and signature. Free and 100% in your browser.",
  alternates: { canonical: "/image-resizer/" },
};

const faqs = [
  {
    q: "What size should my exam photo be?",
    a: "Most Indian exam portals ask for a passport-style photo around 3.5×4.5 cm (about 413×531 px at 300 DPI) and a signature around 3×1 cm. Always confirm the exact size in the official notification — use the presets here as a starting point.",
  },
  {
    q: "Will resizing reduce my file size too?",
    a: "Resizing to smaller pixel dimensions usually reduces file size. If you need an exact KB target (e.g. 50 KB), use the Image Compressor after resizing.",
  },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Image Resizer", applicationCategory: "MultimediaApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1>Image Resizer</h1>
      <p className="lede">
        Resize your photo or signature to exact pixel dimensions — with one-tap presets for
        passport-size photos and signatures. Free, no signup, 100% in your browser.
      </p>

      <Resizer />

      <div className="ad-slot">Ad placement (AdSense)</div>

      <div className="card faq">
        <h2 style={{ marginTop: 0 }}>FAQ</h2>
        <dl>
          {faqs.map((f) => (
            <div key={f.q}>
              <dt>{f.q}</dt>
              <dd>{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
}
