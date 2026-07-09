import type { Metadata } from "next";
import Link from "next/link";
import ImageFormatConverter from "@/app/components/ImageFormatConverter";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import ToolBadges from "@/app/components/ToolBadges";
import RelatedTools from "@/app/components/RelatedTools";
import RecentTools from "@/app/components/RecentTools";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "JFIF to PNG Converter — Free Online, No Upload",
  description:
    "Convert JFIF to PNG online for free. Turn .jfif images into standard .png files instantly in your browser — no signup, no watermark, files never uploaded.",
  alternates: { canonical: "/jfif-to-png/" },
};

const faqs = [
  { q: "How do I convert JFIF to PNG?", a: "Click or drop your .jfif file above and the tool re-encodes it as a PNG you can download right away — entirely in your browser." },
  { q: "Why convert JFIF to PNG instead of JPG?", a: "PNG is lossless and widely accepted by editors and design tools, so it's a good choice when you want the cleanest possible copy or need a format that many apps prefer over .jfif." },
  { q: "Will I lose quality?", a: "PNG is lossless, so no further compression artifacts are added during conversion. The result is a faithful copy of the JFIF image." },
  { q: "What is a JFIF file anyway?", a: "JFIF is a JPEG image saved with a .jfif extension. The image data is standard JPEG; only the file name is unusual, which is why some apps reject it." },
  { q: "Is anything uploaded?", a: "No. The conversion is done locally in your browser and your file never leaves your device." },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "SoftwareApplication", name: "JFIF to PNG Converter", applicationCategory: "MultimediaApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>JFIF to <span className="grad">PNG</span></h1>
        <p className="lede">Convert .jfif images to standard .png files instantly — free, lossless, and nothing is uploaded.</p>
        <ToolBadges />
      </div>

      <div className="tool-shell"><ImageFormatConverter to="png" toLabel="PNG" downloadExt="png" /></div>

      <Steps heading={<>Convert in <span className="grad">3 simple steps</span></>} steps={[
        { icon: "📤", title: "Choose your JFIF", text: "Click or drop a .jfif image into the box." },
        { icon: "🔄", title: "Convert", text: "The image is re-encoded as a lossless PNG automatically." },
        { icon: "⬇️", title: "Download PNG", text: "Save the converted .png to your device." },
      ]} />
      <Features heading={<>Why use this <span className="grad">JFIF to PNG converter</span></>} items={[
        { icon: "🧊", title: "Lossless", text: "PNG keeps every pixel — no extra compression artifacts." },
        { icon: "⚡", title: "Instant", text: "Conversion runs the moment you pick a file." },
        { icon: "🚫", title: "No watermark", text: "Clean PNG output with no branding." },
        { icon: "📱", title: "Any device", text: "Works on phone, tablet and desktop." },
        { icon: "🔒", title: "Private", text: "Processed locally; nothing is uploaded." },
        { icon: "🆓", title: "Free", text: "No sign-up and no limits." },
      ]} />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>From JFIF to a clean PNG</h2>
        <p>
          When an app won’t accept a <strong>.jfif</strong> file, converting it to <strong>PNG</strong>{" "}
          gives you a lossless, universally-supported image. This tool does it in your browser in one
          step — no installs and no uploads.
        </p>
        <p>
          Prefer a smaller file? Use <Link href="/jfif-to-jpg/">JFIF to JPG</Link> instead, or the
          all-in-one <Link href="/image-converter/">image converter</Link> for PNG, JPG and WebP.
        </p>
      </div>

      <RelatedTools heading="More image tools" hrefs={["/jfif-to-jpg/", "/png-to-jpg/", "/webp-to-jpg/", "/image-converter/"]} />
      <RecentTools current="/jfif-to-png/" />
      <Faq items={faqs} />
    </>
  );
}
