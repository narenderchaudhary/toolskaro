import type { Metadata } from "next";
import TextCase from "./TextCase";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Text Case Converter — UPPERCASE & lowercase",
  description:
    "Convert text to UPPERCASE, lowercase, Title Case, Sentence case and more, instantly. Free online text case converter — 100% in your browser.",
  alternates: { canonical: "/text-case-converter/" },
};

const faqs = [
  { q: "How do I change text to uppercase or lowercase?", a: "Paste your text, then click UPPERCASE or lowercase. The text updates instantly, and you can copy it with one tap." },
  { q: "What is Title Case vs Sentence case?", a: "Title Case capitalises the first letter of every word (Like This). Sentence case capitalises only the first letter of each sentence (Like this)." },
  { q: "Is my text private?", a: "Yes — the conversion happens in your browser, so your text is never uploaded or stored." },
  { q: "Is it free?", a: "Yes — free, no sign-up and no limits." },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "SoftwareApplication", name: "Text Case Converter", applicationCategory: "UtilitiesApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Text <span className="grad">case converter</span></h1>
        <p className="lede">Convert text to UPPERCASE, lowercase, Title Case, Sentence case and more — instantly and privately.</p>
      </div>
      <TextCase />
      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Fix your text case in one click</h2>
        <p>
          Caps Lock left on? Need a heading in Title Case, or a paragraph tidied into proper Sentence
          case? This converter transforms your text between six styles — UPPERCASE, lowercase, Title
          Case, Sentence case, aLtErNaTiNg and inverse — without retyping a thing.
        </p>
        <p>It works entirely in your browser, so your text stays private. Handy for headings, form fields, social posts and code.</p>
      </div>
      <Faq items={faqs} />
      <CtaBand heading="More free, private tools" text="Everything runs in your browser — no sign-up." links={[["/word-counter/", "Word Counter"], ["/password-generator/", "Password Generator"], ["/qr-code-generator/", "QR Generator"], ["/resume-maker/", "Resume Maker"]]} />
    </>
  );
}
