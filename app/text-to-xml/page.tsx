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
  title: "Text to XML Converter — Free Online, No Upload",
  description:
    "Convert plain text to XML online for free. Turn a .txt file or pasted text into valid, escaped XML with one element per line — 100% in your browser, no signup.",
  alternates: { canonical: "/text-to-xml/" },
};

const faqs = [
  { q: "How do I convert text to XML?", a: "Paste your text or upload a .txt file, click Convert to XML, and copy or download the result. Each line is wrapped in a <line> element inside a root <document> element." },
  { q: "Is the XML valid and escaped?", a: "Yes. It includes an XML declaration and a single root element, and reserved characters (< > & \" ') are escaped to entities, so the output is well-formed XML." },
  { q: "Can I change the element names?", a: "The tool uses a simple <document> / <line> structure that's easy to rename in any text editor afterwards, or to transform with your own stylesheet." },
  { q: "Why convert text to XML?", a: "XML is a common interchange format for configuration, data feeds and legacy systems. Wrapping plain lines as XML elements is a quick way to feed simple text into an XML-based pipeline." },
  { q: "Is my text uploaded?", a: "No. Everything runs locally in your browser and your text is never sent to a server." },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "SoftwareApplication", name: "Text to XML Converter", applicationCategory: "DeveloperApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Text to <span className="grad">XML</span></h1>
        <p className="lede">Turn plain text into valid, escaped XML — one element per line — free, instant, nothing uploaded.</p>
        <ToolBadges />
      </div>

      <div className="tool-shell"><TextToMarkup mode="xml" /></div>

      <Steps heading={<>Convert in <span className="grad">3 simple steps</span></>} steps={[
        { icon: "📋", title: "Add your text", text: "Paste text or upload a .txt file." },
        { icon: "🔄", title: "Convert to XML", text: "Each line becomes an escaped <line> element." },
        { icon: "⬇️", title: "Copy or download", text: "Grab the XML or save it as an .xml file." },
      ]} />
      <Features heading={<>Why use this <span className="grad">text to XML converter</span></>} items={[
        { icon: "✅", title: "Well-formed", text: "Includes a declaration and single root element." },
        { icon: "🛡️", title: "Escaped", text: "Reserved characters become safe XML entities." },
        { icon: "↩️", title: "Line by line", text: "Every line maps to its own element." },
        { icon: "📥", title: "File or paste", text: "Upload a .txt or paste directly." },
        { icon: "🔒", title: "Private", text: "Runs locally; nothing is uploaded." },
        { icon: "🆓", title: "Free", text: "No sign-up and no limits." },
      ]} />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Plain text into structured XML</h2>
        <p>
          XML remains common for config files, data feeds and legacy integrations. This tool wraps each
          line of your text in a <strong>well-formed, escaped</strong> XML element under a single root,
          giving you a valid document you can adapt or feed into an XML pipeline.
        </p>
        <p>
          Prefer a different format? Convert the same text to{" "}
          <Link href="/text-to-json/">JSON</Link> or <Link href="/text-to-html/">HTML</Link>, or format
          JSON with the <Link href="/json-formatter/">JSON formatter</Link>.
        </p>
      </div>

      <RelatedTools heading="More developer tools" hrefs={["/text-to-json/", "/text-to-html/", "/json-formatter/", "/csv-to-json/"]} />
      <RecentTools current="/text-to-xml/" />
      <Faq items={faqs} />
    </>
  );
}
