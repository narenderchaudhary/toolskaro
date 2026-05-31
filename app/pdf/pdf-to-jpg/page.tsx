import type { Metadata } from "next";
import Faq from "@/app/components/Faq";
import PdfToJpg from "./PdfToJpg";

export const metadata: Metadata = {
  title: "PDF to JPG — Convert PDF Pages to Images Online Free (No Upload)",
  description:
    "Convert every page of a PDF into high-quality JPG images and download them. Free, no signup, and 100% in your browser — your PDF is never uploaded.",
  alternates: { canonical: "/pdf/pdf-to-jpg/" },
};

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
      <h1>PDF to JPG</h1>
      <p className="lede">Turn each page of your PDF into a downloadable JPG image — free and entirely in your browser.</p>
      <PdfToJpg />
      <div className="ad-slot">Ad placement (AdSense)</div>

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>How to convert PDF to JPG</h2>
        <ol className="steps">
          <li>Upload your PDF using the box above.</li>
          <li>The tool renders every page as a separate JPG image.</li>
          <li>Preview the pages that appear.</li>
          <li>Click the download button under any page to save it as a JPG.</li>
        </ol>
      </div>

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
    </>
  );
}
