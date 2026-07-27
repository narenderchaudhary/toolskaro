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
  title: "PPT to Word Converter — PowerPoint to Word (Free)",
  description:
    "Convert PowerPoint to Word online for free. Extract the text from a .pptx into an editable Word .docx — 100% in your browser, no signup, files never uploaded.",
  alternates: { canonical: "/ppt-to-word/" },
};

const faqs = [
  { q: "How do I convert PowerPoint to Word?", a: "Click or drop your .pptx file above. The tool reads every slide, pulls out the text, and builds an editable Word .docx that downloads automatically — all in your browser." },
  { q: "Does it copy the slide design and images too?", a: "No. This is a text-extraction converter: it moves the words and slide-by-slide structure into Word so you can edit them, but it does not reproduce slide graphics, images, animations or exact layout. Recreating slide visuals inside Word requires desktop software or a paid server-based service." },
  { q: "What file types are supported?", a: "Modern PowerPoint files (.pptx, from PowerPoint 2007 onward). The old binary .ppt format isn't supported for in-browser conversion — open it in PowerPoint and save as .pptx first." },
  { q: "Is each slide separated?", a: "Yes. Each slide's text is grouped under a bold “Slide 1”, “Slide 2” heading in the Word document, so the structure stays clear." },
  { q: "Are my slides uploaded to a server?", a: "No. The whole conversion happens in your browser, so your presentation never leaves your device — safe for confidential decks." },
  { q: "Can I open the result anywhere?", a: "Yes. The .docx opens in Microsoft Word, Google Docs, LibreOffice Writer and most other word processors." },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "SoftwareApplication", name: "PPT to Word Converter", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>PowerPoint to <span className="grad">Word</span></h1>
        <p className="lede">Pull the text from a .pptx into an editable Word .docx — free, in your browser, and nothing is uploaded.</p>
        <ToolBadges />
      </div>

      <div className="tool-shell"><OfficeToWord kind="pptx" accept=".pptx,application/vnd.openxmlformats-officedocument.presentationml.presentation" inLabel="a .pptx file" /></div>

      <Steps heading={<>Convert in <span className="grad">3 simple steps</span></>} steps={[
        { icon: "📊", title: "Choose your PPTX", text: "Click or drop a .pptx PowerPoint file." },
        { icon: "🔄", title: "Extract the text", text: "Each slide's text is read and organised by slide." },
        { icon: "⬇️", title: "Download Word", text: "An editable .docx downloads automatically." },
      ]} />
      <Features heading={<>Why use this <span className="grad">PPT to Word converter</span></>} items={[
        { icon: "✍️", title: "Editable output", text: "Get your slide text as a real Word document you can edit." },
        { icon: "🗂️", title: "Slide by slide", text: "Text is grouped under a heading for each slide." },
        { icon: "🌍", title: "Opens anywhere", text: "Works in Word, Google Docs and LibreOffice." },
        { icon: "🔒", title: "Private", text: "Your presentation is processed locally — never uploaded." },
        { icon: "⚡", title: "Instant", text: "No queue, no email — the file downloads right away." },
        { icon: "🆓", title: "Free", text: "No sign-up and no limits." },
      ]} />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Get your slide text into Word</h2>
        <p>
          When you need to reuse the wording of a presentation — for notes, a report or a handout —
          copying slide by slide is tedious. This tool reads your <strong>.pptx</strong> and pulls all the
          text into an editable <strong>Word .docx</strong>, organised by slide, in one step.
        </p>
        <p>
          <strong>What to expect:</strong> this is a text converter. It captures the words and the
          slide-by-slide structure so you can edit them in Word — it does not redraw slide graphics,
          images or exact layouts, which only desktop apps or paid server services can do. For most
          “ppt to word” needs — reusing the content — the extracted text is exactly what you want.
        </p>
        <p>
          Related: turn slides’ companion documents with <Link href="/text-to-word/">Text to Word</Link>,
          or build a PDF with <Link href="/csv-to-pdf/">CSV to PDF</Link>. Browse more in{" "}
          <Link href="/document-tools/">document tools</Link>. Prefer a walkthrough? Read our{" "}<Link href="/blog/how-to-convert-powerpoint-to-word/">step-by-step guide to converting PowerPoint to Word</Link>.
        </p>
      </div>

      <RelatedTools heading="Related tools" hrefs={["/txt-to-word/", "/epub-to-word/", "/csv-to-pdf/", "/pdf/merge/"]} />
      <RecentTools current="/ppt-to-word/" />
      <Faq items={faqs} />
    </>
  );
}
