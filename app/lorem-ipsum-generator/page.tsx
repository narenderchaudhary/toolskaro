import type { Metadata } from "next";
import Link from "next/link";
import Lorem from "./Lorem";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import ToolBadges from "@/app/components/ToolBadges";
import RelatedTools from "@/app/components/RelatedTools";
import RecentTools from "@/app/components/RecentTools";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Lorem Ipsum Generator — Free Placeholder Text Generator",
  description:
    "Generate Lorem Ipsum placeholder text by paragraphs, sentences or words and copy it with one click. Free online dummy-text generator — 100% in your browser.",
  alternates: { canonical: "/lorem-ipsum-generator/" },
};

const faqs = [
  { q: "What is Lorem Ipsum?", a: "Lorem Ipsum is standard placeholder text used by designers and developers to fill a layout before the real copy is ready. Because it looks like natural language but means nothing, it lets you judge typography and spacing without being distracted by the words." },
  { q: "How much text can I generate?", a: "Choose any amount from 1 to 100 paragraphs, sentences or words. Pick the unit, set the count and click Generate." },
  { q: "Can I copy it quickly?", a: "Yes — generate your text and click Copy to put it on your clipboard, ready to paste into a mockup, CMS or code." },
  { q: "Is it free?", a: "Yes, completely free with no sign-up, and it runs entirely in your browser." },
  { q: "Why use Lorem Ipsum instead of real words?", a: "Because it is meaningless, Lorem Ipsum stops people from reading the content and judging the copy when they should be reviewing the design. It keeps attention on layout, font choices and spacing instead of the words themselves." },
  { q: "Where did Lorem Ipsum come from?", a: "Its roots trace to a scrambled passage of Cicero's Latin text from 45 BC, which printers have used as filler since the 1500s. The familiar wording survived because it has a natural distribution of letters and word lengths, much like English." },
  { q: "Can I generate a specific number of words?", a: "Yes. Switch the unit to words and set any count, or choose sentences or paragraphs instead. That makes it easy to fill a headline, a button label or a full article block to the exact length your mockup needs." },
  { q: "Is generated placeholder text safe to ship to production?", a: "No — always replace it with real copy before launch. Lorem Ipsum is strictly for drafts and design reviews; leaving it in a live page looks unfinished and gives visitors nothing useful to read." },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "SoftwareApplication", name: "Lorem Ipsum Generator", applicationCategory: "DeveloperApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Lorem Ipsum <span className="grad">generator</span></h1>
        <p className="lede">Generate placeholder text by paragraphs, sentences or words — then copy it in one click.</p>
        <ToolBadges />
      </div>

      <div className="tool-shell"><Lorem /></div>

      <Steps
        heading={<>Generate filler text in <span className="grad">3 simple steps</span></>}
        steps={[
          { icon: "📐", title: "Pick a unit", text: "Choose paragraphs, sentences or words depending on how much copy your layout needs." },
          { icon: "🔢", title: "Set the count", text: "Enter any amount from 1 to 100 to match a headline, button label or full article block." },
          { icon: "📋", title: "Generate & copy", text: "Click Generate, then copy the text straight into Figma, a CMS field or your code." },
        ]}
      />

      <Features
        heading={<>Why use this <span className="grad">Lorem Ipsum generator</span></>}
        items={[
          { icon: "📐", title: "Three units", text: "Generate by paragraphs, sentences or words to fill exactly the space you are designing." },
          { icon: "🎚️", title: "Any length", text: "Set any count from 1 to 100 to test how a layout breathes at different scales." },
          { icon: "👁️", title: "Distraction-free", text: "Meaningless text keeps reviewers focused on typography, spacing and hierarchy, not the words." },
          { icon: "📋", title: "One-click copy", text: "Copy the generated text instantly, ready to paste into a mockup, CMS or component." },
          { icon: "🔒", title: "100% in-browser", text: "Text is generated locally with no sign-up and nothing uploaded." },
          { icon: "🆓", title: "Free & unlimited", text: "Generate as many fresh batches as you like — no limits, no watermark." },
        ]}
      />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Placeholder text for any mockup</h2>
        <p>
          When you are building a page, a slide or a design and the real copy is not ready, Lorem Ipsum
          fills the space with realistic-looking text so you can focus on layout, typography and
          hierarchy. Choose how much you need — <strong>paragraphs, sentences or words</strong> — and
          generate it instantly.
        </p>
        <p>
          Drop it into a wireframe, a CMS draft, an email template or a component while you wait for
          final content. It is free, needs no sign-up and runs entirely in your browser.
        </p>
        <h3>How to generate placeholder text</h3>
        <p>
          Pick your unit — <strong>paragraphs, sentences or words</strong> — set the count, and click
          Generate. The text appears immediately, and one click copies it to your clipboard so you can
          paste it into Figma, a CMS field, an HTML template or a React component. Generate a fresh
          batch whenever you need a different length to test how a layout breathes at scale.
        </p>
        <h3>Who uses dummy text</h3>
        <p>
          Web designers, front-end developers, print designers and content teams all use placeholder
          text to prototype before the real words arrive. Pair it with the{" "}
          <Link href="/word-counter/">word counter</Link> to hit a target length, or the{" "}
          <Link href="/color-converter/">color converter</Link> while styling your mockup. Explore more
          on the <Link href="/utilities/">utilities</Link> page.
        </p>
      </div>
      <RelatedTools
        heading="More developer tools"
        hrefs={["/json-formatter/", "/uuid-generator/", "/color-converter/", "/base64-encode-decode/"]}
      />

      <RecentTools current="/lorem-ipsum-generator/" />

      <Faq items={faqs} />
    </>
  );
}
