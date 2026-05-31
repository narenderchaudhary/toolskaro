import type { Metadata } from "next";
import TypingTest from "./TypingTest";

export const metadata: Metadata = {
  title: "Typing Test — English & Hindi Typing Speed Test (WPM) Online Free",
  description:
    "Free online typing test in English and Hindi. Measure your typing speed (WPM) and accuracy in real time — great practice for government skill tests. 100% in your browser.",
  alternates: { canonical: "/typing-test/" },
};

const faqs = [
  { q: "How is WPM calculated?", a: "Words per minute is based on correctly typed characters divided by five, over the time you took — the standard method used in typing tests." },
  { q: "Does it support Hindi typing?", a: "Yes. Switch to the हिंदी passage to practise Hindi typing for state government skill tests." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Typing Test", applicationCategory: "EducationalApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1>Typing Test — English &amp; Hindi</h1>
      <p className="lede">Check your typing speed and accuracy in real time. Practise for government skill tests — free and entirely in your browser.</p>
      <TypingTest />
      <div className="ad-slot">Ad placement (AdSense)</div>
      <div className="card faq">
        <h2 style={{ marginTop: 0 }}>FAQ</h2>
        <dl>{faqs.map((f) => (<div key={f.q}><dt>{f.q}</dt><dd>{f.a}</dd></div>))}</dl>
      </div>
    </>
  );
}
