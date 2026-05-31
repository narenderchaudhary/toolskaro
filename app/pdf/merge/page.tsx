import type { Metadata } from "next";
import MergePdf from "./MergePdf";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Merge PDF — Combine PDF Files Online Free (No Upload)",
  description:
    "Combine multiple PDF files into one, reorder them as you like, and download — free, no signup, and 100% in your browser. Your files are never uploaded.",
  alternates: { canonical: "/pdf/merge/" },
};

const steps = [
  { icon: "📁", title: "Add PDF files", text: "Drop or choose two or more PDFs." },
  { icon: "↕️", title: "Reorder", text: "Use the arrows to set the page sequence you want." },
  { icon: "⬇️", title: "Merge & download", text: "Combine them into a single PDF and save it." },
];

const features = [
  { icon: "🗂️", title: "Unlimited files", text: "Combine as many PDFs as you need into one document." },
  { icon: "↕️", title: "Custom order", text: "Arrange files with up/down controls before merging." },
  { icon: "🏆", title: "No quality loss", text: "Pages are copied as-is, keeping original text and images." },
  { icon: "🔒", title: "Private", text: "Merging runs in your browser; files are never uploaded." },
  { icon: "🆓", title: "Free", text: "No watermark, no sign-up, no page limit." },
  { icon: "🧩", title: "Pairs with tools", text: "Combine with JPG to PDF and Compress PDF for a complete packet." },
];

const faqs = [
  { q: "How many PDFs can I merge?", a: "As many as you like. Add two or more files, drag them into the right order, and merge them into a single document." },
  { q: "Can I change the order of the files?", a: "Yes — use the up and down arrows next to each file to arrange them before merging." },
  { q: "Is it safe to merge confidential documents here?", a: "Yes. Merging happens inside your browser, so your PDFs never leave your device or get uploaded to any server." },
  { q: "Will merging change the quality of my PDFs?", a: "No. Pages are copied as-is, so text and images keep their original quality. If the merged file is too large, use our Compress PDF tool afterwards." },
  { q: "Is it free?", a: "Completely free — no watermark, no sign-up, and no page limit." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Merge PDF", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Merge <span className="grad">PDF files</span> into one</h1>
        <p className="lede">Combine multiple PDFs into a single file, in any order — free and entirely in your browser.</p>
      </div>

      <MergePdf />

      <Steps heading={<>Merge in <span className="g">3 simple steps</span></>} steps={steps} />
      <Features heading={<>Why use this <span className="g">PDF merger</span></>} items={features} />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Combine documents into one file for upload</h2>
        <p>
          Applications often ask you to upload a single PDF that contains several documents — your
          marksheets, certificates, ID proof and photo, for example. Instead of sending them
          separately, merge them here into one neatly ordered PDF that meets the “upload one file”
          requirement.
        </p>
        <p>
          Because the merge runs entirely in your browser, your documents are never uploaded to a
          server. Use it together with JPG to PDF (to convert images first) and Compress PDF (to
          shrink the final file) for a complete, upload-ready packet.
        </p>
      </div>

      <Faq items={faqs} />

      <CtaBand
        heading="Assemble your documents for free"
        text="Convert, merge and compress everything privately in your browser."
        links={[["/pdf/jpg-to-pdf/", "JPG to PDF"], ["/pdf/compress/", "Compress PDF"], ["/pdf/pdf-to-jpg/", "PDF to JPG"], ["/image-compressor/", "Image Compressor"]]}
      />
    </>
  );
}
