import type { Metadata } from "next";
import Link from "next/link";
import TextToMarkup from "@/app/components/TextToMarkup";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import ToolBadges from "@/app/components/ToolBadges";
import RelatedTools from "@/app/components/RelatedTools";
import RecentTools from "@/app/components/RecentTools";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Text to HTML Converter — Free Online, No Upload",
  description:
    "Convert plain text to HTML online for free. Turn a .txt file or pasted text into clean, escaped HTML with paragraphs — 100% in your browser, no signup.",
  alternates: { canonical: "/text-to-html/" },
};

const faqs = [
  { q: "How do I convert text to HTML?", a: "Paste your text or upload a .txt file, click Convert to HTML, and copy or download the result. Each line becomes a paragraph and special characters are safely escaped." },
  { q: "Does it escape special characters?", a: "Yes. Characters like <, > and & are converted to their HTML entities so your text displays correctly and can't break the page markup." },
  { q: "Will it keep my line breaks?", a: "Yes. Each non-empty line becomes a <p> paragraph and blank lines become spacing, so the structure of your text is preserved." },
  { q: "Is the output a full HTML page?", a: "Yes — it wraps your content in a complete, valid HTML5 document with a head and body, so you can open or publish it directly. You can keep just the body if you prefer." },
  { q: "Is my text uploaded?", a: "No. The conversion runs in your browser and your text is never sent to a server." },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "SoftwareApplication", name: "Text to HTML Converter", applicationCategory: "DeveloperApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Text to <span className="grad">HTML</span></h1>
        <p className="lede">Turn plain text into clean, escaped HTML with paragraphs — free, instant, and nothing is uploaded.</p>
        <ToolBadges />
      </div>

      <div className="tool-shell"><TextToMarkup mode="html" /></div>

      <Steps heading={<>Convert in <span className="grad">3 simple steps</span></>} steps={[
        { icon: "📋", title: "Add your text", text: "Paste text or upload a .txt file." },
        { icon: "🔄", title: "Convert to HTML", text: "Lines become paragraphs and characters are escaped." },
        { icon: "⬇️", title: "Copy or download", text: "Grab the HTML or save it as an .html file." },
      ]} />
      <Features heading={<>Why use this <span className="grad">text to HTML converter</span></>} items={[
        { icon: "🛡️", title: "Safe escaping", text: "Special characters become entities so nothing breaks." },
        { icon: "📄", title: "Full document", text: "Outputs a valid, ready-to-open HTML5 page." },
        { icon: "↩️", title: "Keeps structure", text: "Paragraphs and blank lines are preserved." },
        { icon: "📥", title: "File or paste", text: "Upload a .txt or paste directly." },
        { icon: "🔒", title: "Private", text: "Runs locally; nothing is uploaded." },
        { icon: "🆓", title: "Free", text: "No sign-up and no limits." },
      ]} />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Plain text into publish-ready HTML</h2>
        <p>
          Pasting raw text into a web page can break the layout if it contains characters like{" "}
          <code>&lt;</code> or <code>&amp;</code>. This tool turns your text into <strong>clean,
          escaped HTML</strong> — each line a paragraph — so it displays exactly as written.
        </p>
        <p>
          Need other formats? Convert the same text to{" "}
          <Link href="/text-to-xml/">XML</Link> or <Link href="/text-to-json/">JSON</Link>, or tidy code
          with the <Link href="/json-formatter/">JSON formatter</Link>.
        </p>
      </div>

      <RelatedTools heading="More developer tools" hrefs={["/text-to-xml/", "/text-to-json/", "/json-formatter/", "/csv-to-json/"]} />
      <RecentTools current="/text-to-html/" />
      <Faq items={faqs} />
    </>
  );
}
