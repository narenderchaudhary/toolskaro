import type { Metadata } from "next";
import SplitPdf from "./SplitPdf";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Split PDF — Extract or Split Pages, Free",
  description:
    "Split a PDF online: extract a page range into a new PDF, or split every page into separate files. Free, no upload, 100% in your browser.",
  alternates: { canonical: "/pdf/split/" },
};

const steps = [
  { icon: "📁", title: "Upload PDF", text: "Choose your PDF file." },
  { icon: "🔢", title: "Pick pages", text: "Enter a range like 1-3, 5 — or split every page." },
  { icon: "⬇️", title: "Download", text: "Save the extracted PDF or each single page." },
];
const features = [
  { icon: "✂️", title: "Extract ranges", text: "Pull out specific pages (e.g. 1-3, 5) into one new PDF." },
  { icon: "📑", title: "Split all pages", text: "Turn a multi-page PDF into separate single-page files." },
  { icon: "🔒", title: "Private", text: "Splitting runs in your browser; nothing is uploaded." },
  { icon: "🏆", title: "No quality loss", text: "Pages are copied exactly, with text and images intact." },
  { icon: "🆓", title: "Free", text: "No sign-up, no watermark, no page limit." },
  { icon: "🧩", title: "Pairs with merge", text: "Recombine pages anytime with our Merge PDF tool." },
];
const faqs = [
  { q: "How do I extract certain pages from a PDF?", a: "Upload the PDF, type the pages you want (for example 1-3, 5), and click ‘Extract pages’. You get a new PDF containing only those pages." },
  { q: "Can I split a PDF into separate single-page files?", a: "Yes. Click ‘Split every page’ and the tool creates one PDF per page, each available to download." },
  { q: "Are my files uploaded?", a: "No. Everything runs in your browser, so your PDF never leaves your device." },
  { q: "Does it reduce quality?", a: "No — pages are copied exactly as they are, with no recompression." },
  { q: "Is it free?", a: "Yes — free, no sign-up and no watermark." },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "SoftwareApplication", name: "Split PDF", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Split <span className="grad">PDF</span></h1>
        <p className="lede">Extract a page range into a new PDF, or split every page into separate files — free, no upload, in your browser.</p>
      </div>
      <SplitPdf />
      <Steps heading={<>Split in <span className="g">3 simple steps</span></>} steps={steps} />
      <Features heading={<>Why use this <span className="g">PDF splitter</span></>} items={features} />
      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Take exactly the pages you need</h2>
        <p>
          Sometimes you only need a few pages from a long PDF — a single certificate from a scanned
          bundle, or chapter pages from a document. This tool lets you extract any page range into a
          fresh PDF, or break a multi-page file into individual single-page PDFs.
        </p>
        <p>It all happens in your browser, so even confidential documents stay private. To put pages back together, use our Merge PDF tool.</p>
      </div>
      <Faq items={faqs} />
      <CtaBand heading="All your PDF tools in one place" text="Split, merge, compress and convert — free and private." links={[["/pdf/merge/", "Merge PDF"], ["/pdf/compress/", "Compress PDF"], ["/pdf/rotate/", "Rotate PDF"], ["/pdf/delete-pages/", "Delete Pages"]]} />
    </>
  );
}
