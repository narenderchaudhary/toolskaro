import type { Metadata } from "next";
import TypingTest from "./TypingTest";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Typing Test — English & Hindi Typing Speed Test (WPM) Online Free",
  description:
    "Free online typing test in English and Hindi. Measure your typing speed (WPM) and accuracy in real time — great practice for government skill tests. 100% in your browser.",
  alternates: { canonical: "/typing-test/" },
};

const steps = [
  { icon: "🌐", title: "Choose language", text: "Pick English or हिंदी." },
  { icon: "⌨️", title: "Start typing", text: "The timer begins on your first keystroke." },
  { icon: "📊", title: "See your score", text: "Get your WPM and accuracy, then retry to improve." },
];

const features = [
  { icon: "🇮🇳", title: "English & Hindi", text: "Practise both languages for government skill tests." },
  { icon: "⚡", title: "Live WPM", text: "Real-time words-per-minute and accuracy as you type." },
  { icon: "🎨", title: "Instant feedback", text: "Correct characters turn green and mistakes turn red." },
  { icon: "🔁", title: "Unlimited retries", text: "Restart any time to track your progress." },
  { icon: "🔒", title: "Private", text: "Runs entirely in your browser — nothing is uploaded." },
  { icon: "🆓", title: "Free", text: "No sign-up and no limits." },
];

const faqs = [
  { q: "How is WPM calculated?", a: "Words per minute is based on correctly typed characters divided by five, over the time you took — the standard method used in typing tests." },
  { q: "Does it support Hindi typing?", a: "Yes. Switch to the हिंदी passage to practise Hindi typing for state government skill tests." },
  { q: "How can I improve my typing speed?", a: "Practise daily, keep your fingers on the home row, and focus on accuracy first — speed follows naturally as errors drop. Re-take the test to track your progress." },
  { q: "What WPM do government skill tests require?", a: "Requirements vary by exam, commonly around 30–35 WPM in English and 25–30 WPM in Hindi. Check the official notification for the exact target, then practise to comfortably exceed it." },
  { q: "Is it free?", a: "Yes — free, no sign-up, and it runs entirely in your browser." },
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
      <div className="tool-hero">
        <h1>Typing test — <span className="grad">English &amp; Hindi</span></h1>
        <p className="lede">Check your typing speed and accuracy in real time. Practise for government skill tests — free and entirely in your browser.</p>
      </div>

      <TypingTest />

      <Steps heading={<>Test in <span className="g">3 simple steps</span></>} steps={steps} />
      <Features heading={<>Why use this <span className="g">typing test</span></>} items={features} />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Practise for government typing skill tests</h2>
        <p>
          Many government posts — clerks, data-entry operators, stenographers and more — include a
          typing skill test with a minimum speed and accuracy. This tool lets you practise in both
          English and Hindi and gives you instant feedback on words per minute and accuracy, just
          like the real test.
        </p>
        <p>
          Regular practice here builds the muscle memory and confidence you need on exam day. Focus
          on typing accurately first; as your error rate falls, your speed climbs naturally. The
          test runs entirely in your browser, with no sign-up required.
        </p>
      </div>

      <Faq items={faqs} />

      <CtaBand
        heading="Get exam-ready with free tools"
        text="From typing practice to photo and document prep — all in one place."
        links={[["/word-counter/", "Word Counter"], ["/age-calculator/", "Age Calculator"], ["/resume-maker/", "Resume Maker"], ["/image-compressor/", "Image Compressor"]]}
      />
    </>
  );
}
