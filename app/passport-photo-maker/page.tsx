import type { Metadata } from "next";
import PassportPhoto from "./PassportPhoto";

export const metadata: Metadata = {
  title: "Passport Size Photo Maker — Free Online (3.5×4.5 cm, White Background)",
  description:
    "Make a passport-size photo online for exam forms, visa and ID. Choose 3.5×4.5 cm, 2×2 inch or form sizes with a white background. Free, no signup, 100% in your browser.",
  alternates: { canonical: "/passport-photo-maker/" },
};

const faqs = [
  { q: "What is the correct passport photo size in India?", a: "The standard passport photo is 3.5×4.5 cm (about 413×531 px at 300 DPI). Many exam forms also accept it. Always confirm the exact size in the official instructions." },
  { q: "Can I get a white background?", a: "Yes — choose the white background option. For photos shot against a busy background, remove the background first, then make the passport photo." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Passport Photo Maker", applicationCategory: "MultimediaApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1>Passport Size Photo Maker</h1>
      <p className="lede">Create a passport-size photo with a white background for exam forms, visa and ID — free and entirely in your browser.</p>
      <PassportPhoto />
      <div className="ad-slot">Ad placement (AdSense)</div>
      <div className="card faq">
        <h2 style={{ marginTop: 0 }}>FAQ</h2>
        <dl>{faqs.map((f) => (<div key={f.q}><dt>{f.q}</dt><dd>{f.a}</dd></div>))}</dl>
      </div>
    </>
  );
}
