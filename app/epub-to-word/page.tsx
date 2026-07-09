import type { Metadata } from "next";
import Link from "next/link";
import OfficeToWord from "@/app/components/OfficeToWord";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import ToolBadges from "@/app/components/ToolBadges";
import RelatedTools from "@/app/components/RelatedTools";
import RecentTools from "@/app/components/RecentTools";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "EPUB to Word Converter — Free Online, No Upload",
  description:
    "Convert EPUB to Word online for free. Extract the text from an .epub ebook into an editable Word .docx — 100% in your browser, no signup, files never uploaded.",
  alternates: { canonical: "/epub-to-word/" },
};

const faqs = [
  { q: "How do I convert EPUB to Word?", a: "Click or drop your .epub file above. The tool reads the ebook's chapters in order, extracts the text and headings, and builds an editable Word .docx that downloads automatically — all in your browser." },
  { q: "Does it keep chapters and headings?", a: "It follows the ebook's reading order and preserves headings and paragraphs as text, so the structure of the book carries over. Fine styling, fonts and images are not reproduced." },
  { q: "Will images and covers be included?", a: "No. This is a text-extraction converter — it captures the words so you can edit them in Word, but it doesn't embed the ebook's images, cover or exact layout." },
  { q: "What EPUB versions work?", a: "Standard EPUB 2 and EPUB 3 files work, since both are ZIP packages of XHTML content. DRM-protected ebooks cannot be converted — remove DRM through the retailer's authorised method first." },
  { q: "Is my ebook uploaded?", a: "No. The conversion runs entirely in your browser, so your file never leaves your device." },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "SoftwareApplication", name: "EPUB to Word Converter", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>EPUB to <span className="grad">Word</span></h1>
        <p className="lede">Extract the text from an .epub ebook into an editable Word .docx — free, in your browser, nothing uploaded.</p>
        <ToolBadges />
      </div>

      <div className="tool-shell"><OfficeToWord kind="epub" accept=".epub,application/epub+zip" inLabel="an .epub file" /></div>

      <Steps heading={<>Convert in <span className="grad">3 simple steps</span></>} steps={[
        { icon: "📖", title: "Choose your EPUB", text: "Click or drop an .epub ebook." },
        { icon: "🔄", title: "Extract the text", text: "Chapters are read in order and headings kept." },
        { icon: "⬇️", title: "Download Word", text: "An editable .docx downloads automatically." },
      ]} />
      <Features heading={<>Why use this <span className="grad">EPUB to Word converter</span></>} items={[
        { icon: "✍️", title: "Editable output", text: "Turn an ebook's text into a document you can edit." },
        { icon: "📑", title: "Reading order", text: "Chapters follow the ebook's spine, with headings." },
        { icon: "🌍", title: "Opens anywhere", text: "Works in Word, Google Docs and LibreOffice." },
        { icon: "🔒", title: "Private", text: "Your ebook is processed locally — never uploaded." },
        { icon: "⚡", title: "Instant", text: "No queue or email — the file downloads right away." },
        { icon: "🆓", title: "Free", text: "No sign-up and no limits." },
      ]} />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Turn an ebook into an editable document</h2>
        <p>
          An <strong>EPUB</strong> is a fixed ebook format — great for reading, awkward for editing. This
          tool extracts the text from your .epub, in chapter order, into an editable Word{" "}
          <strong>.docx</strong> you can revise, quote or reformat.
        </p>
        <p>
          <strong>What to expect:</strong> it captures the words and heading structure. Fine typography,
          embedded images and the cover are not reproduced — those need dedicated ebook software. For
          working with the <em>text</em> of a book, the extracted .docx is exactly what you need.
        </p>
        <p>
          Also useful: <Link href="/ppt-to-word/">PowerPoint to Word</Link>,{" "}
          <Link href="/txt-to-word/">Text to Word</Link>, and more in{" "}
          <Link href="/document-tools/">document tools</Link>.
        </p>
      </div>

      <RelatedTools heading="Related tools" hrefs={["/ppt-to-word/", "/txt-to-word/", "/text-to-html/", "/csv-to-pdf/"]} />
      <RecentTools current="/epub-to-word/" />
      <Faq items={faqs} />
    </>
  );
}
