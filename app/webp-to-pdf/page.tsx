import type { Metadata } from "next";
import JpgToPdf from "@/app/pdf/jpg-to-pdf/JpgToPdf";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "WebP to PDF Converter — Free, No Watermark, No Upload",
  description:
    "Convert WebP to PDF online for free. Turn WebP images into one PDF — no watermark, no sign-up, no email. Combine several images, 100% in your browser, never uploaded.",
  alternates: { canonical: "/webp-to-pdf/" },
};

const faqs = [
  { q: "How do I convert WebP to PDF?", a: "Add one or more WebP images above and click Convert — each becomes a page in a single PDF you can download. It runs entirely in your browser." },
  { q: "Can I combine multiple WebP images into one PDF?", a: "Yes. Add as many WebP images as you like and they are combined into one PDF in the order shown, one image per page." },
  { q: "Does it accept JPG and PNG too?", a: "Yes — the converter accepts WebP, JPG and PNG, so you can mix formats into a single PDF." },
  { q: "Is it free with no watermark?", a: "Yes — completely free, no watermark, no sign-up and no email, with no limit on the number of images." },
  { q: "Are my images uploaded?", a: "No. The PDF is built on your device, so your images never leave your browser." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "WebP to PDF Converter", url: "https://toolskaro.com/webp-to-pdf/", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Convert <span className="grad">WebP to PDF</span></h1>
        <p className="lede">Turn WebP images into one PDF — combine several into a single document. Free, no watermark, no sign-up, 100% in your browser.</p>
      </div>

      <JpgToPdf />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Combine WebP images into a single PDF</h2>
        <p>
          Downloaded images often come as <strong>WebP</strong>, which most document portals won&apos;t
          accept. This tool turns your WebP images into one tidy <strong>PDF</strong> — one image per page
          — ready to upload or print. You can mix in JPG and PNG too.
        </p>
        <p>
          There is no watermark, no account and no email, and nothing is uploaded. Want a JPG instead of a
          PDF? Use <a href="/webp-to-jpg/">WebP to JPG</a>. To shrink the final PDF, run it through{" "}
          <a href="/pdf/compress/">Compress PDF</a>.
        </p>
      </div>

      <Faq items={faqs} />

      <CtaBand heading="More free PDF tools" text="Convert, combine and compress — no watermark, no upload." links={[["/webp-to-jpg/", "WebP to JPG"], ["/pdf/jpg-to-pdf/", "Image to PDF"], ["/pdf/compress/", "Compress PDF"], ["/pdf-tools/", "All PDF Tools"]]} />
    </>
  );
}
