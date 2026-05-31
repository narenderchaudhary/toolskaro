import type { Metadata } from "next";
import RemoveBg from "./RemoveBg";

export const metadata: Metadata = {
  title: "Remove Background from Image — Free Online (No Upload, In-Browser)",
  description:
    "Erase the background from any photo automatically, right in your browser. Download a transparent PNG — free, no signup, and your image is never uploaded to a server.",
  alternates: { canonical: "/remove-background/" },
};

const faqs = [
  { q: "Is my photo uploaded to a server?", a: "No. Unlike most background removers, this runs an AI model entirely inside your browser — your image never leaves your device." },
  { q: "Why does the first use take a moment?", a: "The first time, your browser downloads the AI model (a few MB). After that it is cached and works much faster." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Background Remover", applicationCategory: "MultimediaApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1>Remove Background from Image</h1>
      <p className="lede">Automatically erase the background and get a transparent PNG — free, and 100% private because it runs in your browser.</p>
      <RemoveBg />
      <div className="ad-slot">Ad placement (AdSense)</div>
      <div className="card faq">
        <h2 style={{ marginTop: 0 }}>FAQ</h2>
        <dl>{faqs.map((f) => (<div key={f.q}><dt>{f.q}</dt><dd>{f.a}</dd></div>))}</dl>
      </div>
    </>
  );
}
