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
  title: "Text to JSON Converter — Free Online, No Upload",
  description:
    "Convert plain text to JSON online for free. Turn a .txt file or pasted text into a valid JSON object with a lines array — 100% in your browser, no signup.",
  alternates: { canonical: "/text-to-json/" },
};

const faqs = [
  { q: "How do I convert text to JSON?", a: "Paste your text or upload a .txt file and click Convert to JSON. The tool returns a valid JSON object containing an array of your lines plus the full text, ready to copy or download." },
  { q: "What does the JSON look like?", a: "It's an object with two fields: `lines`, an array with one string per line of your input, and `text`, the whole input as a single escaped string. Both are safely JSON-encoded." },
  { q: "Are quotes and special characters handled?", a: "Yes. Everything is passed through the standard JSON encoder, so quotes, backslashes, tabs and newlines are escaped correctly and the output is always valid JSON." },
  { q: "How is this different from CSV to JSON?", a: "This tool treats your input as free-form text, one line per array item. If your data is tabular (rows and columns), use the CSV to JSON tool to get objects with named keys instead." },
  { q: "Is my text uploaded?", a: "No. Conversion happens in your browser and your text is never sent to a server." },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "SoftwareApplication", name: "Text to JSON Converter", applicationCategory: "DeveloperApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Text to <span className="grad">JSON</span></h1>
        <p className="lede">Turn plain text into a valid JSON object with a lines array — free, instant, nothing uploaded.</p>
        <ToolBadges />
      </div>

      <div className="tool-shell"><TextToMarkup mode="json" /></div>

      <Steps heading={<>Convert in <span className="grad">3 simple steps</span></>} steps={[
        { icon: "📋", title: "Add your text", text: "Paste text or upload a .txt file." },
        { icon: "🔄", title: "Convert to JSON", text: "Get a valid object with a lines array." },
        { icon: "⬇️", title: "Copy or download", text: "Grab the JSON or save it as a .json file." },
      ]} />
      <Features heading={<>Why use this <span className="grad">text to JSON converter</span></>} items={[
        { icon: "✅", title: "Always valid", text: "Output is produced by the standard JSON encoder." },
        { icon: "🛡️", title: "Properly escaped", text: "Quotes, tabs and newlines are handled correctly." },
        { icon: "🧾", title: "Lines array", text: "One array item per line, plus the full text." },
        { icon: "📥", title: "File or paste", text: "Upload a .txt or paste directly." },
        { icon: "🔒", title: "Private", text: "Runs locally; nothing is uploaded." },
        { icon: "🆓", title: "Free", text: "No sign-up and no limits." },
      ]} />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Plain text into valid JSON</h2>
        <p>
          Need your text as data? This tool wraps it in a valid <strong>JSON</strong> object — a{" "}
          <code>lines</code> array plus the full <code>text</code> — with everything correctly escaped,
          so you can drop it straight into code, a config file or an API request.
        </p>
        <p>
          If your data is tabular, the <Link href="/csv-to-json/">CSV to JSON</Link> tool produces objects
          with named keys instead. You can also convert text to{" "}
          <Link href="/text-to-xml/">XML</Link> or <Link href="/text-to-html/">HTML</Link>, or tidy the
          result with the <Link href="/json-formatter/">JSON formatter</Link>.
        </p>
      </div>

      <RelatedTools heading="More developer tools" hrefs={["/csv-to-json/", "/json-formatter/", "/text-to-xml/", "/text-to-html/"]} />
      <RecentTools current="/text-to-json/" />
      <Faq items={faqs} />
    </>
  );
}
