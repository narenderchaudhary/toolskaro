import type { Metadata } from "next";
import JpgToPdf from "./JpgToPdf";

export const metadata: Metadata = {
  title: "JPG to PDF — Convert Images to PDF Online Free (No Upload)",
  description:
    "Convert JPG or PNG images into a single PDF. Add multiple photos, reorder, and download — free, no signup, and 100% in your browser. Perfect for exam document uploads.",
  alternates: { canonical: "/pdf/jpg-to-pdf/" },
};

const faqs = [
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
      <h1>JPG to PDF</h1>
      <p className="lede">Combine your JPG or PNG images into one PDF — free, no signup, and entirely in your browser.</p>
      <JpgToPdf />
      <div className="ad-slot">Ad placement (AdSense)</div>

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>How to convert JPG to PDF</h2>
        <ol className="steps">
          <li>Drop your images into the box above, or click to choose them.</li>
          <li>Add as many images as you need and remove any you don’t want.</li>
          <li>Click <strong>Convert to PDF</strong> — each image becomes one page in order.</li>
          <li>Download your combined PDF.</li>
        </ol>
      </div>

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

      <div className="card faq">
        <h2 style={{ marginTop: 0 }}>Frequently asked questions</h2>
        <dl>{faqs.map((f) => (<div key={f.q}><dt>{f.q}</dt><dd>{f.a}</dd></div>))}</dl>
      </div>
    </>
  );
}
