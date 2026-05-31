import type { Metadata } from "next";
import DeletePages from "./DeletePages";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Delete Pages from PDF — Remove PDF Pages Online (Free)",
  description:
    "Remove unwanted pages from a PDF online and download the smaller file. Free, no upload, 100% in your browser.",
  alternates: { canonical: "/pdf/delete-pages/" },
};

const steps = [
  { icon: "📁", title: "Upload PDF", text: "Choose your PDF file." },
  { icon: "🗑️", title: "Pick pages", text: "Enter the pages to remove, e.g. 2, 4-6." },
  { icon: "⬇️", title: "Download", text: "Save the PDF without those pages." },
];
const features = [
  { icon: "🗑️", title: "Remove any pages", text: "Delete single pages or ranges in one go." },
  { icon: "🔒", title: "Private", text: "Editing runs in your browser; nothing is uploaded." },
  { icon: "🏆", title: "No quality loss", text: "Remaining pages are kept exactly as they were." },
  { icon: "🪶", title: "Smaller file", text: "Dropping pages also trims the file size." },
  { icon: "🆓", title: "Free", text: "No sign-up, no watermark, no limits." },
  { icon: "🧩", title: "Pairs with tools", text: "Combine with split, merge and compress." },
];
const faqs = [
  { q: "How do I delete pages from a PDF?", a: "Upload the PDF, type the pages to remove (for example 2, 4-6), and click Delete pages. Download the new PDF without them." },
  { q: "Can I remove a range of pages?", a: "Yes — enter ranges like 4-6 and individual pages like 2, separated by commas." },
  { q: "Are my files uploaded?", a: "No. Everything happens in your browser, so your PDF stays on your device." },
  { q: "Is it free?", a: "Yes — free, no sign-up and no watermark." },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "SoftwareApplication", name: "Delete PDF Pages", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Delete pages from <span className="grad">PDF</span></h1>
        <p className="lede">Remove unwanted pages from your PDF and download the clean file — free, no upload, in your browser.</p>
      </div>
      <DeletePages />
      <Steps heading={<>Remove in <span className="g">3 simple steps</span></>} steps={steps} />
      <Features heading={<>Why use this <span className="g">page remover</span></>} items={features} />
      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Trim a PDF down to what you need</h2>
        <p>
          Scanned bundles and downloaded documents often contain blank pages, duplicates or sections
          you don&apos;t want to share. This tool removes any pages you specify and gives you a clean,
          smaller PDF — without recompressing the pages you keep.
        </p>
        <p>Everything runs in your browser, so your document never leaves your device.</p>
      </div>
      <Faq items={faqs} />
      <CtaBand heading="All your PDF tools in one place" text="Delete, split, merge and compress — free and private." links={[["/pdf/split/", "Split PDF"], ["/pdf/merge/", "Merge PDF"], ["/pdf/rotate/", "Rotate PDF"], ["/pdf/compress/", "Compress PDF"]]} />
    </>
  );
}
