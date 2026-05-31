import type { Metadata } from "next";
import MergePdf from "./MergePdf";

export const metadata: Metadata = {
  title: "Merge PDF — Combine PDF Files Online Free (No Upload)",
  description:
    "Combine multiple PDF files into one, reorder them as you like, and download — free, no signup, and 100% in your browser. Your files are never uploaded.",
  alternates: { canonical: "/pdf/merge/" },
};

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
      <h1>Merge PDF</h1>
      <p className="lede">Combine multiple PDFs into a single file, in any order — free and entirely in your browser.</p>
      <MergePdf />
      <div className="ad-slot">Ad placement (AdSense)</div>

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>How to merge PDF files</h2>
        <ol className="steps">
          <li>Add two or more PDF files using the box above.</li>
          <li>Reorder them with the up/down arrows so the pages appear in the sequence you want.</li>
          <li>Click <strong>Merge PDFs</strong>.</li>
          <li>Download the combined PDF.</li>
        </ol>
      </div>

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

      <div className="card faq">
        <h2 style={{ marginTop: 0 }}>Frequently asked questions</h2>
        <dl>{faqs.map((f) => (<div key={f.q}><dt>{f.q}</dt><dd>{f.a}</dd></div>))}</dl>
      </div>
    </>
  );
}
