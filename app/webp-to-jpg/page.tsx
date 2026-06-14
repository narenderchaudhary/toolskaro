import type { Metadata } from "next";
import Converter from "@/app/image-converter/Converter";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "WebP to JPG Converter — Free, No Watermark, No Upload",
  description:
    "Convert WebP to JPG online for free. Turn WebP images into standard JPG — no watermark, no sign-up, no email. 100% in your browser, files never uploaded.",
  alternates: { canonical: "/webp-to-jpg/" },
};

const faqs = [
  { q: "How do I convert WebP to JPG?", a: "Upload your WebP image, keep JPG as the output, and click Convert. The tool re-saves it as a standard .jpg you can download — all in your browser." },
  { q: "Why convert WebP to JPG?", a: "WebP is a modern web format that some apps, editors and upload forms still don't accept. Converting to JPG gives you a universally supported image." },
  { q: "What happens to transparency?", a: "JPG doesn't support transparency, so any transparent areas in the WebP are placed on a white background." },
  { q: "Is it free with no watermark?", a: "Yes — completely free, no watermark, no sign-up and no email, with no conversion limits." },
  { q: "Are my files uploaded?", a: "No. The conversion runs entirely on your device; your image is never uploaded to a server." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "WebP to JPG Converter", url: "https://toolskaro.com/webp-to-jpg/", applicationCategory: "MultimediaApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Convert <span className="grad">WebP to JPG</span></h1>
        <p className="lede">Turn WebP images into standard JPG — free, no watermark, no sign-up, 100% in your browser.</p>
      </div>

      <Converter />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Make WebP images work everywhere</h2>
        <p>
          <strong>WebP</strong> is a modern format that saves space on the web, but some apps, editors and
          upload forms still won&apos;t open it — so you need a plain <strong>JPG</strong>. Upload your
          WebP, choose JPG, and download a universally supported image. There is no watermark, no account
          and no email, and nothing is uploaded.
        </p>
        <p>
          Need a PDF instead? Use <a href="/webp-to-pdf/">WebP to PDF</a>. To switch other formats, the
          full <a href="/image-converter/">image converter</a> handles PNG, JPG and WebP, and you can{" "}
          <a href="/image-compressor/">compress to a size</a> afterwards.
        </p>
      </div>

      <Faq items={faqs} />

      <CtaBand heading="More free image tools" text="Convert, compress and resize — no watermark, no upload." links={[["/webp-to-pdf/", "WebP to PDF"], ["/image-converter/", "Image Converter"], ["/png-to-jpg/", "PNG to JPG"], ["/image-compressor/", "Image Compressor"]]} />
    </>
  );
}
