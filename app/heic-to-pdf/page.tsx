import type { Metadata } from "next";
import HeicConvert from "@/app/components/HeicConvert";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "HEIC to PDF Converter — Free, No Watermark, No Upload",
  description:
    "Convert HEIC to PDF online for free. Turn iPhone HEIC/HEIF photos into one PDF — no watermark, no sign-up, no email. Combine multiple photos, 100% in your browser, never uploaded.",
  alternates: { canonical: "/heic-to-pdf/" },
};

const faqs = [
  { q: "How do I convert HEIC to PDF?", a: "Drop one or more iPhone HEIC photos above and the tool decodes them and combines them into a single PDF, one photo per page, which you can download. It all runs in your browser." },
  { q: "Can I combine several HEIC photos into one PDF?", a: "Yes. Select multiple .heic files and they are placed into one PDF in the order you add them — handy for turning a set of phone photos into a single document." },
  { q: "Why convert HEIC to PDF instead of JPG?", a: "PDF is the format most application portals, colleges and offices accept for documents. If you photographed pages or receipts on an iPhone, converting straight to PDF gives you one tidy, upload-ready file." },
  { q: "Is it free with no watermark?", a: "Yes — completely free, no watermark, no sign-up and no email, with no limit on the number of photos." },
  { q: "Are my photos uploaded?", a: "No. Everything is processed on your device, so your iPhone photos and the resulting PDF never leave your browser." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "HEIC to PDF Converter", url: "https://toolskaro.com/heic-to-pdf/", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Convert <span className="grad">HEIC to PDF</span></h1>
        <p className="lede">Turn iPhone HEIC photos into one PDF — combine several into a single document. Free, no watermark, no sign-up, 100% in your browser.</p>
      </div>

      <HeicConvert to="pdf" />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Turn iPhone photos into an upload-ready PDF</h2>
        <p>
          Photographed a document, receipt or form on your iPhone? It saves as <strong>HEIC</strong>,
          which most portals won&apos;t accept. This tool decodes your HEIC photos and combines them into
          one clean <strong>PDF</strong> — one photo per page — ready to upload or email.
        </p>
        <p>
          There is <strong>no watermark, no account and no email</strong>, and nothing is uploaded, so
          your documents stay private. Want separate images instead? Use{" "}
          <a href="/heic-to-jpg/">HEIC to JPG</a>. To shrink the final PDF for a size limit, run it
          through <a href="/pdf/compress/">Compress PDF</a> or a target like{" "}
          <a href="/compress-pdf-to-200kb/">200&nbsp;KB</a>.
        </p>
      </div>

      <Faq items={faqs} />

      <CtaBand heading="Build a document from your phone" text="Convert, combine and compress — no watermark, no upload." links={[["/heic-to-jpg/", "HEIC to JPG"], ["/pdf/jpg-to-pdf/", "Image to PDF"], ["/pdf/compress/", "Compress PDF"], ["/pdf-tools/", "All PDF Tools"]]} />
    </>
  );
}
