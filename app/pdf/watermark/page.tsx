import type { Metadata } from "next";
import Watermark from "./Watermark";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Watermark PDF — Add a Text Watermark Online Free (No Upload)",
  description:
    "Add a text watermark to every page of a PDF — choose text, size, colour, opacity and diagonal angle. Free, no signup, 100% in your browser.",
  alternates: { canonical: "/pdf/watermark/" },
};

const steps = [
  { icon: "📁", title: "Upload PDF", text: "Drop or choose your PDF file." },
  { icon: "💧", title: "Set the watermark", text: "Type the text and pick size, colour and opacity." },
  { icon: "⬇️", title: "Download", text: "Save the watermarked PDF." },
];
const features = [
  { icon: "💧", title: "Text watermark", text: "Stamp ‘Confidential’, ‘Draft’, your name or any text on every page." },
  { icon: "🎨", title: "Full control", text: "Adjust size, colour, opacity and diagonal angle." },
  { icon: "📄", title: "All pages", text: "The watermark is applied to every page automatically." },
  { icon: "🔒", title: "Private", text: "Runs in your browser; your PDF is never uploaded." },
  { icon: "🆓", title: "Free", text: "No sign-up, no watermark from us, no limits." },
  { icon: "🧩", title: "Works with tools", text: "Combine with merge, compress and the PDF editor." },
];
const faqs = [
  { q: "How do I add a watermark to a PDF?", a: "Upload your PDF, type the watermark text, choose the size, colour, opacity and whether it should be diagonal, then click Add watermark and download." },
  { q: "Can I make the watermark faint/transparent?", a: "Yes — use the opacity slider to make it as light or bold as you like (e.g. 20–30% for a subtle background stamp)." },
  { q: "Are my files uploaded?", a: "No. The watermark is added in your browser, so your PDF stays on your device." },
  { q: "Is it free?", a: "Yes — free, no sign-up and no added branding." },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "SoftwareApplication", name: "Watermark PDF", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Watermark <span className="grad">PDF</span></h1>
        <p className="lede">Add a text watermark to every page of your PDF — free, no upload, in your browser.</p>
      </div>
      <Watermark />
      <Steps heading={<>Watermark in <span className="g">3 simple steps</span></>} steps={steps} />
      <Features heading={<>Why use this <span className="g">PDF watermarker</span></>} items={features} />
      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Stamp your PDFs in seconds</h2>
        <p>
          A watermark marks a document as confidential, draft, a sample, or simply your own — across
          every page. This tool lets you add any text with full control over size, colour, opacity
          and a diagonal angle, then download the stamped PDF.
        </p>
        <p>It all runs in your browser, so your document is never uploaded.</p>
      </div>
      <Faq items={faqs} />
      <CtaBand heading="All your PDF tools in one place" text="Watermark, edit, merge and compress — free and private." links={[["/pdf/editor/", "PDF Editor"], ["/pdf/merge/", "Merge PDF"], ["/pdf/organize/", "Organize PDF"], ["/pdf/compress/", "Compress PDF"]]} />
    </>
  );
}
