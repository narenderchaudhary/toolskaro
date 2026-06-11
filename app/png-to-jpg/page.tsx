import type { Metadata } from "next";
import Converter from "@/app/image-converter/Converter";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "PNG to JPG Converter — Free Online, No Upload",
  description:
    "Convert PNG to JPG (or PNG to JPEG) online for free. Flatten transparency to a white background and get a smaller JPG instantly in your browser — no signup, files never uploaded.",
  alternates: { canonical: "/png-to-jpg/" },
};

const faqs = [
  { q: "How do I convert PNG to JPG?", a: "Upload your PNG above, choose JPG as the output, and click Convert. The tool places any transparent areas on a white background and saves a standard .jpg you can download. It all runs in your browser." },
  { q: "Why is my JPG smaller than the PNG?", a: "PNG is lossless and stores every pixel exactly, which makes photos large. JPG uses smart compression, so converting a photo-style PNG to JPG usually makes the file much smaller — handy for uploads with a size limit." },
  { q: "What happens to transparency when I convert PNG to JPG?", a: "JPG does not support transparency, so the tool fills transparent areas with a solid white background. If you need to keep transparency, keep the file as PNG or use our background tools instead." },
  { q: "Is PNG to JPEG the same as PNG to JPG?", a: "Yes. JPEG and JPG are the same format with different extensions, so 'PNG to JPEG' and 'PNG to JPG' produce the identical result — a .jpg file." },
  { q: "Is it free and private?", a: "Yes — completely free, no sign-up, no watermark, and your image is processed on your device and never uploaded." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "PNG to JPG Converter", url: "https://toolskaro.com/png-to-jpg/", applicationCategory: "MultimediaApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Convert <span className="grad">PNG to JPG</span></h1>
        <p className="lede">Turn a PNG into a smaller JPG (or JPEG) — transparency flattened to white, ready for any form or upload. Free, instant, 100% in your browser.</p>
      </div>

      <Converter />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Why convert PNG to JPG?</h2>
        <p>
          PNG is a lossless format — great for logos and screenshots, but photo-style PNGs are often
          very large. <strong>JPG</strong> compresses photographs far more efficiently, so converting a
          PNG to JPG usually shrinks the file dramatically while still looking sharp. That matters when an
          exam portal, job site or email caps the upload size.
        </p>
        <p>
          Because JPG can&apos;t store transparency, this tool places any see-through areas on a clean
          white background and saves a standard .jpg. Need an exact file size like 50&nbsp;KB? Convert
          here, then run it through our <a href="/image-compressor/">Image Compressor</a>. To go the other
          way or pick a different format, use the full <a href="/image-converter/">Image Converter</a>.
        </p>
      </div>

      <Faq items={faqs} />

      <CtaBand heading="More free image tools" text="Convert, compress and resize — all in your browser." links={[["/jpeg-to-jpg/", "JPEG to JPG"], ["/image-compressor/", "Image Compressor"], ["/image-converter/", "Image Converter"], ["/image-resizer/", "Image Resizer"]]} />
    </>
  );
}
