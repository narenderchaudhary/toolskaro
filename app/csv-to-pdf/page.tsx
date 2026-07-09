import type { Metadata } from "next";
import Link from "next/link";
import CsvToPdf from "./CsvToPdf";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import ToolBadges from "@/app/components/ToolBadges";
import RelatedTools from "@/app/components/RelatedTools";
import RecentTools from "@/app/components/RecentTools";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "CSV to PDF Converter — Free Online, No Upload",
  description:
    "Convert CSV to PDF online for free. Turn spreadsheet data into a clean, printable PDF table with headers — any delimiter, portrait or landscape, 100% in your browser.",
  alternates: { canonical: "/csv-to-pdf/" },
};

const faqs = [
  { q: "How do I convert CSV to PDF?", a: "Paste your CSV (or copy a range from Excel/Google Sheets), pick the delimiter, then click Convert to PDF. The tool lays your data out as a table and downloads a ready-to-print PDF." },
  { q: "Does the first row become a header?", a: "Yes, if you keep “First row is a header” ticked. The header row is shaded and shown in bold so the table is easy to read." },
  { q: "My table is very wide — what can I do?", a: "Turn on Landscape mode for wide tables. Columns are sized to fit the page, and long cell values are trimmed with an ellipsis so nothing overflows." },
  { q: "Does it handle commas inside quotes?", a: "Yes. The parser follows standard CSV rules, so quoted fields containing commas, line breaks or escaped quotes are kept as a single cell." },
  { q: "Is my data uploaded?", a: "No. The PDF is built entirely in your browser, so your data never leaves your device — safe for private or sensitive spreadsheets." },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "SoftwareApplication", name: "CSV to PDF Converter", applicationCategory: "DeveloperApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>CSV to <span className="grad">PDF</span></h1>
        <p className="lede">Turn spreadsheet data into a clean, printable PDF table — any delimiter, portrait or landscape. Nothing is uploaded.</p>
        <ToolBadges />
      </div>

      <div className="tool-shell"><CsvToPdf /></div>

      <Steps heading={<>Convert in <span className="grad">3 simple steps</span></>} steps={[
        { icon: "📋", title: "Paste your CSV", text: "Paste CSV or copy a range from Excel or Google Sheets." },
        { icon: "⚙️", title: "Set options", text: "Choose the delimiter, header row and page orientation." },
        { icon: "⬇️", title: "Download PDF", text: "Get a tidy, printable PDF table in one click." },
      ]} />
      <Features heading={<>Why use this <span className="grad">CSV to PDF converter</span></>} items={[
        { icon: "🧾", title: "Clean table", text: "Rows, columns and a shaded header, laid out on A4." },
        { icon: "🔀", title: "Any delimiter", text: "Comma, semicolon, tab or pipe — from any export." },
        { icon: "↔️", title: "Portrait or landscape", text: "Landscape mode fits wide tables neatly." },
        { icon: "🧩", title: "Quotes handled", text: "Quoted commas and line breaks stay in one cell." },
        { icon: "🔒", title: "Private", text: "Built in your browser; nothing is uploaded." },
        { icon: "🆓", title: "Free", text: "No sign-up and no limits." },
      ]} />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Spreadsheet data into a printable PDF</h2>
        <p>
          CSV is great for machines but awkward to read or print. This tool lays your rows and columns out
          as a clean <strong>PDF table</strong> — with a bold header, page breaks and portrait or
          landscape orientation — so you can share or print your data without opening a spreadsheet app.
        </p>
        <p>
          Need JSON instead? Use <Link href="/csv-to-json/">CSV to JSON</Link>. To combine or shrink the
          resulting PDF, try <Link href="/pdf/merge/">Merge PDF</Link> or{" "}
          <Link href="/pdf/compress/">Compress PDF</Link>.
        </p>
      </div>

      <RelatedTools heading="Related tools" hrefs={["/csv-to-json/", "/pdf/merge/", "/pdf/compress/", "/json-formatter/"]} />
      <RecentTools current="/csv-to-pdf/" />
      <Faq items={faqs} />
    </>
  );
}
