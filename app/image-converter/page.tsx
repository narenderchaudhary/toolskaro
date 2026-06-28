import type { Metadata } from "next";
import Converter from "./Converter";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import Faq from "@/app/components/Faq";
import ToolBadges from "@/app/components/ToolBadges";
import RelatedTools from "@/app/components/RelatedTools";
import RecentTools from "@/app/components/RecentTools";

export const metadata: Metadata = {
  title: "Image Converter — PNG, JPG & WebP, Free",
  description:
    "Convert images between PNG, JPG and WebP online for free. Adjust quality and download instantly — 100% in your browser, no upload, no signup.",
  alternates: { canonical: "/image-converter/" },
};

const steps = [
  { icon: "📁", title: "Upload image", text: "Drop a PNG, JPG or WebP file." },
  { icon: "🔁", title: "Choose format", text: "Pick JPG, PNG or WebP, and set quality." },
  { icon: "⬇️", title: "Download", text: "Save the converted image." },
];
const features = [
  { icon: "🔁", title: "PNG · JPG · WebP", text: "Convert between all three popular web image formats." },
  { icon: "🎚️", title: "Quality control", text: "Set the compression quality for JPG and WebP output." },
  { icon: "⬜", title: "Smart transparency", text: "Converting to JPG adds a clean white background automatically." },
  { icon: "🔒", title: "Private", text: "Conversion runs in your browser; nothing is uploaded." },
  { icon: "⚡", title: "Instant & free", text: "No sign-up, no watermark, no limits." },
  { icon: "🪶", title: "Smaller files", text: "WebP often gives the smallest size at the same quality." },
];
const faqs = [
  { q: "How do I convert PNG to JPG?", a: "Upload your PNG, choose JPG as the output format, set the quality, and click Convert. Transparent areas are filled with white, since JPG does not support transparency." },
  { q: "How do I convert to WebP?", a: "Upload any image, select WebP, and download — WebP usually produces the smallest file at the same visual quality, great for websites." },
  { q: "Are my images uploaded?", a: "No. The conversion happens entirely in your browser, so your images never leave your device." },
  { q: "Will I lose quality?", a: "PNG is lossless. For JPG and WebP you control the quality with the slider — higher quality means a larger file." },
  { q: "Is it free?", a: "Yes — free, no sign-up and no watermark." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Image Converter", applicationCategory: "MultimediaApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Image converter — <span className="grad">PNG, JPG &amp; WebP</span></h1>
        <p className="lede">Convert images between PNG, JPG and WebP with quality control — free, no upload, 100% in your browser.</p>
        <ToolBadges />
      </div>
      <div className="tool-shell"><Converter /></div>
      <Steps heading={<>Convert in <span className="g">3 simple steps</span></>} steps={steps} />
      <Features heading={<>Why use this <span className="g">image converter</span></>} items={features} />
      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Convert between the formats you actually need</h2>
        <p>
          Different sites and apps accept different image formats. Some forms want a JPG, websites
          love WebP for speed, and logos or screenshots often need PNG for transparency. This
          converter switches between all three in one click, with a quality slider so you can balance
          file size and clarity.
        </p>
        <p>
          Because it runs in your browser, conversion is instant and completely private — your
          images are never uploaded. Need an exact file size afterwards? Use our Image Compressor.
        </p>
      </div>
      <RelatedTools
        heading="Related tools"
        hrefs={["/crop-image/", "/image-resizer/", "/image-compressor/", "/remove-background/"]}
      />
      <RecentTools current="/image-converter/" />
      <Faq items={faqs} />
    </>
  );
}
