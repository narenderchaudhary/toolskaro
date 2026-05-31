import type { Metadata } from "next";
import PdfToJpg from "./PdfToJpg";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "PDF to JPG — Convert PDF Pages to Images Online Free (No Upload)",
  description:
    "Convert every page of a PDF into high-quality JPG images and download them. Free, no signup, and 100% in your browser — your PDF is never uploaded.",
  alternates: { canonical: "/pdf/pdf-to-jpg/" },
};

const steps = [
  { icon: "📁", title: "Upload your PDF", text: "Choose a PDF file from your device." },
  { icon: "🖼️", title: "Pages → images", text: "Every page is rendered as a separate JPG." },
  { icon: "⬇️", title: "Download", text: "Save any page you need as a JPG image." },
];

const features = [
  { icon: "🖼️", title: "Every page", text: "Each page of your PDF becomes its own downloadable JPG." },
  { icon: "🔍", title: "Sharp output", text: "Pages render at a crisp resolution that is great for screen and upload." },
  { icon: "🔒", title: "Private", text: "Conversion runs in your browser; the PDF never leaves your device." },
  { icon: "📚", title: "Multi-page & scans", text: "Handles long documents and scanned PDFs alike." },
  { icon: "🆓", title: "Free", text: "No sign-up, no watermark, no limits." },
  { icon: "🔁", title: "Round-trip", text: "Need a PDF again later? Use our JPG to PDF tool." },
];

const faqs = [
  { q: "Does it convert every page?", a: "Yes — each page of your PDF becomes a separate JPG image that you can download individually." },
  { q: "How do I extract an image from a PDF?", a: "Upload the PDF and the tool renders each page as a JPG. Download the page that contains the image you need." },
  { q: "Is the quality good enough to print or upload?", a: "Pages are rendered at roughly 144 DPI, which is sharp on screen and fine for most uploads. For print-grade output, start from a higher-resolution source PDF." },
  { q: "Are my files uploaded?", a: "No. The conversion runs entirely in your browser, so your PDF and the images stay on your device." },
  { q: "Does it work with multi-page and scanned PDFs?", a: "Yes. It handles multi-page documents and scanned PDFs, turning each page into its own JPG." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "PDF to JPG Converter", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Convert <span className="grad">PDF to JPG</span> online</h1>
        <p className="lede">Turn each page of your PDF into a downloadable JPG image — free and entirely in your browser.</p>
      </div>

      <PdfToJpg />
      <div className="ad-slot">Ad placement (AdSense)</div>

      <Steps heading={<>Convert in <span className="g">3 simple steps</span></>} steps={steps} />
      <Features heading={<>Why use this <span className="g">PDF to JPG</span> tool</>} items={features} />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Extract images from any PDF</h2>
        <p>
          Sometimes you need an image, not a PDF — to upload a single page where a portal asks for a
          JPG, to share one page on WhatsApp, or to pull a diagram out of a document. This converter
          renders each page of your PDF into a clear JPG you can download individually.
        </p>
        <p>
          The conversion is done locally in your browser, so even confidential PDFs never leave your
          computer. If you later need to recombine images into a PDF, use our JPG to PDF tool.
        </p>
      </div>

      <Faq items={faqs} />

      <CtaBand
        heading="All the PDF tools you need — free"
        text="Convert, merge, compress and rebuild PDFs privately in your browser."
        links={[["/pdf/jpg-to-pdf/", "JPG to PDF"], ["/pdf/merge/", "Merge PDF"], ["/pdf/compress/", "Compress PDF"], ["/image-compressor/", "Image Compressor"]]}
      />
    </>
  );
}
