import type { Metadata } from "next";
import PdfEditor from "./PdfEditor";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "PDF Editor — Add Text & Signature to PDF Online Free (No Upload)",
  description:
    "Edit a PDF online: add text, fill forms, and place your signature or images on any page, then download. Free, no signup, and 100% in your browser.",
  alternates: { canonical: "/pdf/editor/" },
};

const steps = [
  { icon: "📁", title: "Upload PDF", text: "Open your PDF — every page renders so you can edit it." },
  { icon: "✍️", title: "Add text & signature", text: "Add text boxes, fill fields, and drop in your signature image." },
  { icon: "⬇️", title: "Download", text: "Save a new PDF with your changes baked in." },
];
const features = [
  { icon: "✍️", title: "Add text anywhere", text: "Place text boxes to fill forms or annotate — set size and colour." },
  { icon: "🖊️", title: "Add your signature", text: "Drop a signature or any image onto the page and position it." },
  { icon: "⬜", title: "Whiteout & replace", text: "Cover an old word or number with a white box and type the new value — edits any value." },
  { icon: "🖱️", title: "Drag to position", text: "Move each item exactly where you want it on any page." },
  { icon: "🔒", title: "Private", text: "Editing runs entirely in your browser — your PDF is never uploaded." },
  { icon: "📄", title: "Multi-page", text: "Works across every page of your document." },
  { icon: "🆓", title: "Free", text: "No sign-up, no watermark, no limits." },
];
const faqs = [
  { q: "How do I add text to a PDF?", a: "Upload your PDF, click ‘Add text’, type your text in the toolbar, set the size and colour, then drag the text box to the right spot. Repeat for as many fields as you need and download." },
  { q: "Can I sign a PDF?", a: "Yes. Sign on white paper and photograph or scan it (or use our Signature Resize tool), then click ‘Add signature / image’, place it on the page, and resize with the slider." },
  { q: "Is my PDF uploaded to a server?", a: "No. The PDF is rendered and edited entirely in your browser, so your document never leaves your device." },
  { q: "Will my changes be permanent in the file?", a: "Yes. When you download, the text and images are written into the PDF itself, so they appear in any PDF viewer." },
  { q: "Can I change / edit existing text or numbers in the PDF?", a: "Yes — click ‘Whiteout / cover’, drag the white box over the old word or number and size it to cover it, then click ‘Add text’ and type the new value on top. (PDFs store text as fixed glyphs, so no online tool can truly re-type the original text — this cover-and-retype method is how it is done, and the result looks and prints like a real edit.)" },
  { q: "Is it free?", a: "Yes — free, no sign-up and no watermark." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "PDF Editor", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>PDF <span className="grad">Editor</span></h1>
        <p className="lede">Add text, fill forms and place your signature on any PDF page — then download. Free, no upload, 100% in your browser.</p>
      </div>
      <PdfEditor />
      <Steps heading={<>Edit in <span className="g">3 simple steps</span></>} steps={steps} />
      <Features heading={<>Why use this <span className="g">PDF editor</span></>} items={features} />
      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Fill and sign PDFs without any software</h2>
        <p>
          Need to fill a form, add a note, or sign a document that arrived as a PDF? This editor lets
          you add text boxes and images (like your signature) anywhere on the page, drag them into
          position, and download a new PDF with everything baked in — no Acrobat, no sign-up.
        </p>
        <p>
          Everything happens in your browser, so even sensitive documents stay completely private.
          Pair it with our Signature Resize tool to prepare a clean signature, and Merge or Compress
          PDF to finish your document.
        </p>
      </div>
      <Faq items={faqs} />
      <CtaBand heading="All your PDF tools in one place" text="Edit, sign, merge, split and compress — free and private." links={[["/pdf/merge/", "Merge PDF"], ["/pdf/split/", "Split PDF"], ["/pdf/compress/", "Compress PDF"], ["/signature-resize/", "Signature Resize"]]} />
    </>
  );
}
