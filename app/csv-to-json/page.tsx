import type { Metadata } from "next";
import Link from "next/link";
import CsvToJson from "./CsvToJson";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import ToolBadges from "@/app/components/ToolBadges";
import RelatedTools from "@/app/components/RelatedTools";
import RecentTools from "@/app/components/RecentTools";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "CSV to JSON Converter — Free Online, No Upload",
  description:
    "Convert CSV to JSON online for free. Paste CSV, choose the delimiter and get clean JSON with headers as keys and auto-detected numbers and booleans — 100% in your browser.",
  alternates: { canonical: "/csv-to-json/" },
};

const faqs = [
  { q: "How do I convert CSV to JSON?", a: "Paste your CSV into the box, keep “First row is header” ticked if your first line contains column names, then click Convert to JSON. Each row becomes a JSON object whose keys are the header names, and you can copy or download the result." },
  { q: "Does it handle commas and quotes inside fields?", a: "Yes. The parser follows the common CSV rules: fields wrapped in double quotes can contain commas, line breaks and escaped quotes (written as two double quotes), so values like \"Smith, John\" stay in one field." },
  { q: "Can I use a semicolon or tab delimiter?", a: "Yes. Choose comma, semicolon, tab or pipe as the delimiter. Semicolon is common in European spreadsheets, and tab lets you paste straight from Excel or Google Sheets." },
  { q: "What does “detect numbers and booleans” do?", a: "With it on, values like 42 and 3.14 become JSON numbers, true/false become booleans and null becomes null, instead of everything being a string. Turn it off if you need every value kept as text — for example ID codes with leading zeros." },
  { q: "Is my data uploaded anywhere?", a: "No. The conversion runs entirely in your browser using JavaScript. Your CSV never leaves your device, which makes it safe for private or sensitive data." },
  { q: "What if my CSV has no header row?", a: "Untick “First row is header”. Each row is then converted to a JSON array of values instead of an object, so no data is lost." },
  { q: "Is there a row limit?", a: "There's no hard limit — it's bound only by your browser's memory. Very large files (hundreds of thousands of rows) may be slow, but typical spreadsheets convert instantly." },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "SoftwareApplication", name: "CSV to JSON Converter", applicationCategory: "DeveloperApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>CSV to <span className="grad">JSON</span></h1>
        <p className="lede">Paste CSV and get clean JSON — headers become keys, with optional number and boolean detection. Nothing is uploaded.</p>
        <ToolBadges />
      </div>

      <div className="tool-shell"><CsvToJson /></div>

      <Steps
        heading={<>Convert in <span className="grad">3 simple steps</span></>}
        steps={[
          { icon: "📋", title: "Paste your CSV", text: "Paste CSV text or copy a range straight from Excel or Google Sheets." },
          { icon: "⚙️", title: "Pick options", text: "Choose the delimiter and whether the first row is a header." },
          { icon: "⬇️", title: "Copy or download", text: "Get formatted JSON and copy it or download a .json file." },
        ]}
      />

      <Features
        heading={<>Why use this <span className="grad">CSV to JSON converter</span></>}
        items={[
          { icon: "🔤", title: "Headers as keys", text: "Your first row becomes the object keys, so JSON comes out readable and ready to use." },
          { icon: "🧠", title: "Smart typing", text: "Optionally turn numbers, booleans and null into real JSON types instead of strings." },
          { icon: "🧩", title: "Quotes & commas handled", text: "Quoted fields with commas, line breaks and escaped quotes are parsed correctly." },
          { icon: "🔀", title: "Any delimiter", text: "Comma, semicolon, tab or pipe — paste from any spreadsheet or export." },
          { icon: "🔒", title: "100% private", text: "Runs in your browser; your CSV is never uploaded to a server." },
          { icon: "🆓", title: "Free & unlimited", text: "No sign-up, no limits — works offline once the page has loaded." },
        ]}
      />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Turn spreadsheet data into JSON</h2>
        <p>
          CSV is how spreadsheets and databases export tabular data, but code and APIs almost always
          want <strong>JSON</strong>. This converter bridges the two: paste a CSV export, and each row
          becomes a tidy JSON object using your header row as the keys. It handles the awkward cases
          properly — quoted fields containing commas or line breaks, escaped quotes, and alternative
          delimiters like semicolons or tabs.
        </p>
        <p>
          Turn on <strong>number and boolean detection</strong> to get real JSON types instead of
          strings, or leave it off to preserve values exactly (handy for IDs with leading zeros).
          Everything runs in your browser, so even sensitive data stays on your device.
        </p>
        <h3>CSV to JSON for developers</h3>
        <p>
          Seed a database, mock an API response, or feed a front-end fixture in seconds. Once you have
          your JSON, tidy it with the <Link href="/json-formatter/">JSON formatter</Link>, or reach for
          the <Link href="/base64-encode-decode/">Base64 encoder</Link> and{" "}
          <Link href="/uuid-generator/">UUID generator</Link>. Browse the rest on the{" "}
          <Link href="/developer-tools/">developer tools</Link> page.
        </p>
      </div>

      <RelatedTools
        heading="More developer tools"
        hrefs={["/json-formatter/", "/base64-encode-decode/", "/url-encode-decode/", "/uuid-generator/"]}
      />

      <RecentTools current="/csv-to-json/" />

      <Faq items={faqs} />
    </>
  );
}
