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
  title: "AVIF to JPG Converter — Free Online, No Upload",
  description:
    "Convert AVIF to JPG online for free. Turn modern .avif images into widely-supported .jpg files instantly in your browser — no signup, no watermark, no upload.",
  alternates: { canonical: "/avif-to-jpg/" },
};

const faqs = [
  { q: "How do I convert AVIF to JPG?", a: "Click or drop your .avif image above, choose a quality, and download the .jpg. Your browser decodes the AVIF and re-saves it as JPG locally." },
  { q: "Why convert AVIF to JPG?", a: "AVIF is a modern, highly-efficient image format, but many apps, printers and older devices don't support it yet. Converting to JPG makes the image open everywhere." },
  { q: "Will the file get bigger?", a: "Sometimes slightly, because AVIF compresses more efficiently than JPG. You can lower the quality with the slider to keep the JPG small while staying visually close to the original." },
  { q: "Does this work on any device?", a: "It works in any modern browser that can display AVIF (most current versions of Chrome, Edge, Firefox and Safari). If your browser can show the AVIF, this tool can convert it." },
  { q: "Is my image uploaded?", a: "No. Conversion happens entirely in your browser and your file never leaves your device." },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "SoftwareApplication", name: "AVIF to JPG Converter", applicationCategory: "MultimediaApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>AVIF to <span className="grad">JPG</span></h1>
        <p className="lede">Convert modern .avif images to universally-supported .jpg files instantly — free, no watermark, nothing uploaded.</p>
        <ToolBadges />
      </div>

      <div className="tool-shell"><ImageFormatConverter to="jpeg" toLabel="JPG" downloadExt="jpg" /></div>

      <Steps heading={<>Convert in <span className="grad">3 simple steps</span></>} steps={[
        { icon: "📤", title: "Choose your AVIF", text: "Click or drop a .avif image into the box." },
        { icon: "🎚️", title: "Pick quality", text: "Set the JPG quality to control the file size." },
        { icon: "⬇️", title: "Download JPG", text: "Save the compatible .jpg to your device." },
      ]} />
      <Features heading={<>Why use this <span className="grad">AVIF to JPG converter</span></>} items={[
        { icon: "🌍", title: "Universal support", text: "JPG opens on every device, app and printer." },
        { icon: "🎚️", title: "Quality control", text: "Balance sharpness and size with the slider." },
        { icon: "🚫", title: "No watermark", text: "Clean JPG output with no branding." },
        { icon: "📱", title: "Any device", text: "Works in any modern browser." },
        { icon: "🔒", title: "Private", text: "Processed locally; nothing is uploaded." },
        { icon: "🆓", title: "Free", text: "No sign-up and no limits." },
      ]} />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Make AVIF images open everywhere</h2>
        <p>
          <strong>AVIF</strong> is one of the most efficient image formats around, but support is still
          catching up — some editors, printers and older phones can’t open it. Converting to{" "}
          <strong>JPG</strong> gives you a version that works everywhere, and this tool does it in your
          browser with no upload.
        </p>
        <p>
          Working with other modern formats? Try <Link href="/webp-to-jpg/">WebP to JPG</Link>,{" "}
          <Link href="/heic-to-jpg/">HEIC to JPG</Link> or the{" "}
          <Link href="/image-converter/">image converter</Link>.
        </p>
      </div>

      <RelatedTools heading="More image tools" hrefs={["/webp-to-jpg/", "/heic-to-jpg/", "/image-converter/", "/image-compressor/"]} />
      <RecentTools current="/avif-to-jpg/" />
      <Faq items={faqs} />
    </>
  );
}
