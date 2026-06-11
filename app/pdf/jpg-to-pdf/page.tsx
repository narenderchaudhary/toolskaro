import type { Metadata } from "next";
import JpgToPdf from "./JpgToPdf";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "JPG to PDF — Image & Photo to PDF Converter (Free)",
  description:
    "Convert image to PDF free: turn JPG, PNG or photos into a single PDF online. Add multiple photos, combine them into one PDF, and download — no signup, 100% in your browser.",
  alternates: { canonical: "/pdf/jpg-to-pdf/" },
};

const steps = [
  { icon: "📁", title: "Add images", text: "Drop or choose your JPG/PNG images — as many as you need." },
  { icon: "🗂️", title: "Arrange", text: "Each image becomes a page, in the order you add them." },
  { icon: "⬇️", title: "Download PDF", text: "Convert and save your combined PDF." },
];

const features = [
  { icon: "🗂️", title: "Multiple images", text: "Combine many photos or scans into one tidy PDF, one image per page." },
  { icon: "🔒", title: "Private", text: "The PDF is built in your browser; your images are never uploaded." },
  { icon: "🏆", title: "Original quality", text: "Images are embedded at full quality, ideal for documents and certificates." },
  { icon: "📄", title: "Upload-ready", text: "Meets portals that accept only PDF, not loose image files." },
  { icon: "🆓", title: "Free", text: "No watermark, no sign-up, no limit on the number of images." },
  { icon: "🧩", title: "Works with PDF tools", text: "Merge and compress the result with our other PDF tools." },
];

const faqs = [
  { q: "How do I convert an image to PDF?", a: "Upload your image (JPG, PNG or a photo), and the tool places it into a PDF that you can download. Add several images to combine them into one PDF, one image per page — all in your browser." },
  { q: "How do I put a photo into a PDF?", a: "Add the photo above and click Convert — it becomes a page in a new PDF. You can add more photos to build a multi-page PDF, then download it ready to upload or email." },
  { q: "Can I combine multiple images into one PDF?", a: "Yes. Add as many JPG or PNG images as you like — they are combined into a single PDF in the order shown, one image per page." },
  { q: "How do I convert a photo of a document into a PDF?", a: "Take a clear photo of the document, upload it here, and click Convert. You get a PDF ready to upload to portals that only accept PDF files." },
  { q: "Are my images uploaded anywhere?", a: "No. The PDF is created inside your browser, so your images never leave your device — ideal for sensitive documents like certificates and ID proofs." },
  { q: "Does it reduce image quality?", a: "Images are embedded at their original quality. If the resulting PDF is too large for an upload limit, run it through our Compress PDF tool afterwards." },
  { q: "Is it free?", a: "Yes — completely free, with no watermark, no sign-up, and no limit on the number of images." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "JPG to PDF Converter", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Convert <span className="grad">JPG to PDF</span> online</h1>
        <p className="lede">Turn any image or photo into a PDF — combine multiple JPG or PNG images into one PDF, free, no signup, entirely in your browser.</p>
      </div>

      <JpgToPdf />

      <Steps heading={<>Convert in <span className="g">3 simple steps</span></>} steps={steps} />
      <Features heading={<>Why use this <span className="g">JPG to PDF</span> tool</>} items={features} />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Turn photos and scans into a single PDF</h2>
        <p>
          Many application forms, colleges and offices only accept documents as a PDF, not as loose
          images. Whether you have a photo of a marksheet, a scanned certificate, or several pages
          captured on your phone, this tool stitches them into one clean PDF you can upload or email.
        </p>
        <p>
          Everything happens in your browser, so your personal documents are never uploaded to a
          server. Combine it with Merge PDF and Compress PDF to assemble and shrink a complete
          application packet without installing any software.
        </p>
      </div>

      <Faq items={faqs} />

      <CtaBand
        heading="Build your document packet for free"
        text="Convert, merge and compress PDFs — privately, in your browser."
        links={[["/pdf/merge/", "Merge PDF"], ["/pdf/compress/", "Compress PDF"], ["/pdf/pdf-to-jpg/", "PDF to JPG"], ["/image-compressor/", "Image Compressor"]]}
      />
    </>
  );
}
