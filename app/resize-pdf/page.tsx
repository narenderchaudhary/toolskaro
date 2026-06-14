import type { Metadata } from "next";
import ResizePdf from "./ResizePdf";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Resize PDF Online — Change PDF Page Size to A4 (Free)",
  description:
    "Resize PDF page size online for free — fit every page to A4, Letter, Legal, A5 or A3. Standardise a PDF before printing or uploading, 100% in your browser, no upload.",
  alternates: { canonical: "/resize-pdf/" },
};

const faqs = [
  { q: "How do I resize a PDF page size?", a: "Choose the page size you need (A4, Letter, Legal, A5 or A3) and upload your PDF. The tool scales every page to fit that size, centred and keeping its proportions, then lets you download the resized PDF." },
  { q: "What is the difference between resizing a PDF and compressing it?", a: "Resizing changes the page dimensions (e.g. making every page A4), while compressing reduces the file size in KB/MB. To make the file smaller for an upload limit, use our Compress PDF tool instead." },
  { q: "Will resizing distort my pages?", a: "No. Each page is scaled to fit the new size while keeping its aspect ratio, so content is never stretched — it is centred with even margins if the proportions differ." },
  { q: "Why standardise a PDF to A4?", a: "Mixed or unusual page sizes can print badly or get rejected by portals. Fitting everything to A4 (or Letter) gives a clean, consistent document that prints and uploads reliably." },
  { q: "Is it free and private?", a: "Yes — completely free with no sign-up, and the PDF is processed entirely in your browser and never uploaded." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Resize PDF", url: "https://toolskaro.com/resize-pdf/", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Resize <span className="grad">PDF</span> page size</h1>
        <p className="lede">Fit every page of your PDF to A4, Letter, Legal, A5 or A3 — clean, consistent and print-ready. Free, instant and 100% in your browser.</p>
      </div>

      <ResizePdf />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Standardise your PDF page size</h2>
        <p>
          PDFs assembled from scans and photos often end up with mixed or unusual page sizes, which can
          print badly or be rejected by upload portals. This tool resizes every page to a standard size —{" "}
          <strong>A4</strong> is the default for India — scaling each page to fit while keeping its
          proportions, so nothing is stretched.
        </p>
        <p>
          Resizing changes the page <em>dimensions</em>; to reduce the file <em>weight</em> for an upload
          limit, use <a href="/pdf/compress/">Compress PDF</a> or a target like{" "}
          <a href="/compress-pdf-to-200kb/">200&nbsp;KB</a>. You can also{" "}
          <a href="/pdf/merge/">merge</a>, <a href="/pdf/split/">split</a> and{" "}
          <a href="/pdf-tools/">do more with the full PDF toolkit</a> — all in your browser.
        </p>
      </div>

      <Faq items={faqs} />

      <CtaBand heading="More free PDF tools" text="Resize, merge, split and compress — all in your browser." links={[["/pdf/compress/", "Compress PDF"], ["/pdf/merge/", "Merge PDF"], ["/pdf/jpg-to-pdf/", "JPG to PDF"], ["/pdf-tools/", "All PDF Tools"]]} />
    </>
  );
}
