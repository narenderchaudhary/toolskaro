import type { Metadata } from "next";
import Faq from "@/app/components/Faq";
import CompressPdf from "./CompressPdf";

export const metadata: Metadata = {
  title: "Compress PDF — Reduce PDF File Size Online Free (No Upload)",
  description:
    "Compress a PDF to a smaller file size for exam form uploads and email. Choose a compression level and download — free, no signup, and 100% in your browser.",
  alternates: { canonical: "/pdf/compress/" },
};

const faqs = [
  { q: "How much can it reduce my PDF?", a: "For scanned or image-heavy PDFs, savings of 40–80% are common. PDFs that are already small or pure text may compress less." },
  { q: "How do I compress a PDF to upload it on a form?", a: "Pick a compression level (Recommended works for most files), upload your PDF, and download the smaller version. If you need it even smaller, choose ‘Strong’." },
  { q: "Are my files uploaded?", a: "No. Compression runs in your browser, so your document never leaves your device." },
  { q: "Why did my text PDF not shrink much?", a: "This tool is optimised for scanned and image-based PDFs, which are usually the ones that exceed size limits. A small, text-only PDF is already efficient and has little to compress." },
  { q: "Is it free?", a: "Yes — free to use with no watermark and no sign-up." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Compress PDF", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1>Compress PDF</h1>
      <p className="lede">Shrink your PDF to a smaller file size for exam uploads and email — free and entirely in your browser.</p>
      <CompressPdf />
      <div className="ad-slot">Ad placement (AdSense)</div>

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>How to compress a PDF</h2>
        <ol className="steps">
          <li>Choose a compression level — Light, Recommended, or Strong.</li>
          <li>Upload your PDF using the box.</li>
          <li>The tool re-encodes each page to reduce the file size, showing progress.</li>
          <li>Review the before/after size and download your smaller PDF.</li>
        </ol>
      </div>

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Get your PDF under the upload limit</h2>
        <p>
          Exam portals, job applications and email attachments all enforce a maximum file size, and
          scanned documents easily blow past it. This tool compresses your PDF by re-encoding its
          pages, often cutting the size dramatically while keeping it readable — so a 5&nbsp;MB scan
          can drop to a few hundred KB.
        </p>
        <p>
          Choose <strong>Recommended</strong> for a balance of size and clarity, or
          <strong> Strong</strong> when you must hit a tight limit. The whole process runs in your
          browser, so your document is never uploaded. It works best on scanned and image-heavy
          PDFs, which are usually the ones that exceed size limits.
        </p>
      </div>

      <Faq items={faqs} />
    </>
  );
}
