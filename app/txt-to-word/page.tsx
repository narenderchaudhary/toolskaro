import type { Metadata } from "next";
import Link from "next/link";
import TxtToWord from "./TxtToWord";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import ToolBadges from "@/app/components/ToolBadges";
import RelatedTools from "@/app/components/RelatedTools";
import RecentTools from "@/app/components/RecentTools";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Text to Word Converter — TXT to Word .docx (Free)",
  description:
    "Convert text to Word online for free. Turn a .txt file or pasted text into an editable Word .docx you can open in Word, Google Docs or LibreOffice — no upload.",
  alternates: { canonical: "/txt-to-word/" },
};

const faqs = [
  { q: "How do I convert a TXT file to Word?", a: "Paste your text or upload a .txt file, then click Convert to Word. An editable .docx is generated in your browser and downloaded — no signup and nothing uploaded." },
  { q: "Will my line breaks and paragraphs be kept?", a: "Yes. Each line of your text becomes a paragraph in the Word document, so the structure of your notes stays intact." },
  { q: "Can I open the .docx in Google Docs?", a: "Yes. The file is a standard Word .docx, so it opens in Microsoft Word, Google Docs, LibreOffice Writer and Apple Pages." },
  { q: "Is there any formatting?", a: "The conversion focuses on clean, editable text — one paragraph per line. Once it's open in Word you can add headings, bold, fonts and styling as you like." },
  { q: "Is my text uploaded?", a: "No. The Word file is created entirely in your browser, so your text never leaves your device." },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "SoftwareApplication", name: "Text to Word Converter", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Text to <span className="grad">Word</span></h1>
        <p className="lede">Turn a .txt file or pasted text into an editable Word .docx — free, instant, and nothing is uploaded.</p>
        <ToolBadges />
      </div>

      <div className="tool-shell"><TxtToWord /></div>

      <Steps heading={<>Convert in <span className="grad">3 simple steps</span></>} steps={[
        { icon: "📋", title: "Add your text", text: "Paste text or upload a .txt file." },
        { icon: "🔄", title: "Convert to Word", text: "An editable .docx is built in your browser." },
        { icon: "⬇️", title: "Download", text: "Open it in Word, Google Docs or LibreOffice." },
      ]} />
      <Features heading={<>Why use this <span className="grad">text to Word converter</span></>} items={[
        { icon: "✍️", title: "Fully editable", text: "A real .docx you can format and edit freely." },
        { icon: "↩️", title: "Keeps paragraphs", text: "Each line becomes a paragraph in the document." },
        { icon: "🌍", title: "Opens anywhere", text: "Word, Google Docs, LibreOffice and Pages." },
        { icon: "📥", title: "File or paste", text: "Upload a .txt or type directly." },
        { icon: "🔒", title: "Private", text: "Created locally; nothing is uploaded." },
        { icon: "🆓", title: "Free", text: "No sign-up and no limits." },
      ]} />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Plain text into an editable Word file</h2>
        <p>
          A <strong>.txt</strong> file is plain and unformatted. Converting it to a Word{" "}
          <strong>.docx</strong> gives you a proper document you can style, print or share — with each
          line preserved as a paragraph. This tool builds the Word file right in your browser, so it’s
          instant and private.
        </p>
        <p>
          Need other conversions? Try <Link href="/ppt-to-word/">PowerPoint to Word</Link>,{" "}
          <Link href="/epub-to-word/">EPUB to Word</Link>, or turn text into{" "}
          <Link href="/text-to-html/">HTML</Link>, <Link href="/text-to-image/">an image</Link> and more
          in <Link href="/document-tools/">document tools</Link>.
        </p>
      </div>

      <RelatedTools heading="Related tools" hrefs={["/ppt-to-word/", "/epub-to-word/", "/text-to-html/", "/text-to-image/"]} />
      <RecentTools current="/txt-to-word/" />
      <Faq items={faqs} />
    </>
  );
}
