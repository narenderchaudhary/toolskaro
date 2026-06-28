import type { Metadata } from "next";
import TextCase from "./TextCase";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import ToolBadges from "@/app/components/ToolBadges";
import RelatedTools from "@/app/components/RelatedTools";
import RecentTools from "@/app/components/RecentTools";
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
        <ToolBadges />
      </div>
      <div className="tool-shell"><TextCase /></div>

      <Steps
        heading={<>Convert text in <span className="grad">3 simple steps</span></>}
        steps={[
          { icon: "📥", title: "Paste your text", text: "Type or paste any text into the box — no length limit." },
          { icon: "🔤", title: "Pick a case", text: "Choose UPPERCASE, lowercase, Title Case, Sentence case and more." },
          { icon: "📋", title: "Copy the result", text: "Copy the converted text with one tap and paste it anywhere." },
        ]}
      />

      <Features
        heading={<>Why use this <span className="grad">case converter</span></>}
        items={[
          { icon: "🔠", title: "Six case styles", text: "UPPERCASE, lowercase, Title Case, Sentence case, aLtErNaTiNg and inverse." },
          { icon: "⚡", title: "Instant", text: "The text converts the moment you pick a style — no waiting." },
          { icon: "📋", title: "One-tap copy", text: "Copy the result straight to your clipboard, ready to paste." },
          { icon: "🔒", title: "100% private", text: "Conversion runs in your browser; your text is never uploaded." },
          { icon: "♻️", title: "No retyping", text: "Fix a stray Caps Lock or reformat a heading without typing it again." },
          { icon: "🆓", title: "Free, no limit", text: "No sign-up and no character limit — convert as much as you like." },
        ]}
      />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Fix your text case in one click</h2>
        <p>
          Caps Lock left on? Need a heading in Title Case, or a paragraph tidied into proper Sentence
          case? This converter transforms your text between six styles — UPPERCASE, lowercase, Title
          Case, Sentence case, aLtErNaTiNg and inverse — without retyping a thing.
        </p>
        <p>It works entirely in your browser, so your text stays private. Handy for headings, form fields, social posts and code.</p>
      </div>
      <RelatedTools
        heading="Related tools"
        hrefs={["/word-counter/", "/password-generator/", "/qr-code-generator/", "/typing-test/"]}
      />

      <RecentTools current="/text-case-converter/" />

      <Faq items={faqs} />
    </>
  );
}
