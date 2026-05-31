import type { Metadata } from "next";
import WordCounter from "./WordCounter";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Word Counter — Count Words, Characters & Reading Time Online Free",
  description:
    "Free online word counter. Instantly count words, characters, sentences, paragraphs and reading time as you type or paste. 100% in your browser.",
  alternates: { canonical: "/word-counter/" },
};

const steps = [
  { icon: "⌨️", title: "Type or paste", text: "Add your text into the box." },
  { icon: "📊", title: "See live counts", text: "Words, characters, sentences and paragraphs update instantly." },
  { icon: "✂️", title: "Edit to fit", text: "Trim or expand to meet any word or character limit." },
];

const features = [
  { icon: "🔢", title: "Words & characters", text: "Counts words, plus characters with and without spaces." },
  { icon: "📝", title: "Sentences & paragraphs", text: "Track structure for essays, SOPs and articles." },
  { icon: "⏱️", title: "Reading time", text: "Estimates reading time at around 200 words per minute." },
  { icon: "⚡", title: "Real-time", text: "Every count updates the instant you type." },
  { icon: "🔒", title: "Private", text: "Your text stays in your browser — nothing is stored or sent." },
  { icon: "🆓", title: "Free, no limit", text: "Paste short answers or long documents — no sign-up needed." },
];

const faqs = [
  { q: "Does it count characters with and without spaces?", a: "Yes — it shows total characters and characters excluding spaces, which is handy for forms and applications with strict character limits." },
  { q: "How is reading time calculated?", a: "Reading time is estimated at about 200 words per minute, the average adult reading speed." },
  { q: "Can I use it to stay within an essay or SOP word limit?", a: "Absolutely. Paste your text and watch the live word count, so you can trim or expand to fit an exam essay, statement of purpose, or application limit." },
  { q: "Is my text private?", a: "Completely. The counting happens in your browser; nothing is sent to or stored on any server." },
  { q: "Is there a length limit?", a: "No. You can paste short answers or long documents — it counts everything instantly." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Word Counter", applicationCategory: "UtilitiesApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Free online <span className="grad">word counter</span></h1>
        <p className="lede">Count words, characters, sentences and reading time instantly as you type — free and private.</p>
      </div>

      <WordCounter />
      <div className="ad-slot">Ad placement (AdSense)</div>

      <Steps heading={<>Count in <span className="g">3 simple steps</span></>} steps={steps} />
      <Features heading={<>Why use this <span className="g">word counter</span></>} items={features} />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Stay within any word or character limit</h2>
        <p>
          Exam essays, statements of purpose, application answers, blog posts and social captions
          all come with limits. This counter gives you instant, accurate numbers as you write —
          words, characters with and without spaces, sentences, paragraphs and reading time — so you
          can edit to fit without guesswork.
        </p>
        <p>
          It’s also useful for students checking assignment lengths and for writers estimating how
          long a piece takes to read. Your text stays entirely in your browser and is never stored.
        </p>
      </div>

      <Faq items={faqs} />

      <CtaBand
        heading="More free, private tools"
        text="Everything runs in your browser — no sign-up required."
        links={[["/typing-test/", "Typing Test"], ["/qr-code-generator/", "QR Generator"], ["/resume-maker/", "Resume Maker"], ["/age-calculator/", "Age Calculator"]]}
      />
    </>
  );
}
