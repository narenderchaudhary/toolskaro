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
  title: "BMP to JPG Converter — Free Online, No Upload",
  description:
    "Convert BMP to JPG online for free. Turn large .bmp bitmaps into compact .jpg files instantly in your browser — no signup, no watermark, files never uploaded.",
  alternates: { canonical: "/bmp-to-jpg/" },
};

const faqs = [
  { q: "How do I convert BMP to JPG?", a: "Click or drop your .bmp bitmap above, choose a quality, and download the .jpg. It's processed entirely in your browser." },
  { q: "Why convert BMP to JPG?", a: "BMP (bitmap) files are uncompressed and can be very large. Converting to JPG shrinks the file size dramatically — often by 90% or more — while keeping the image visually the same, which makes it far easier to email, upload or store." },
  { q: "How much smaller will the file be?", a: "A lot. Because BMP stores every pixel uncompressed, a multi-megabyte bitmap frequently becomes a few hundred kilobytes as a JPG at high quality." },
  { q: "Can I control the quality?", a: "Yes. Use the quality slider to trade a little detail for a smaller file, or keep it high for the sharpest result." },
  { q: "Is my bitmap uploaded?", a: "No. Everything runs locally in your browser, so your file never leaves your device." },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "SoftwareApplication", name: "BMP to JPG Converter", applicationCategory: "MultimediaApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>BMP to <span className="grad">JPG</span></h1>
        <p className="lede">Turn large .bmp bitmaps into compact .jpg files instantly — free, no watermark, and nothing is uploaded.</p>
        <ToolBadges />
      </div>

      <div className="tool-shell"><ImageFormatConverter to="jpeg" toLabel="JPG" downloadExt="jpg" /></div>

      <Steps heading={<>Convert in <span className="grad">3 simple steps</span></>} steps={[
        { icon: "📤", title: "Choose your BMP", text: "Click or drop a .bmp bitmap into the box." },
        { icon: "🎚️", title: "Pick quality", text: "Set the JPG quality to shrink the file as much as you like." },
        { icon: "⬇️", title: "Download JPG", text: "Save the much smaller .jpg to your device." },
      ]} />
      <Features heading={<>Why use this <span className="grad">BMP to JPG converter</span></>} items={[
        { icon: "🗜️", title: "Big size savings", text: "Uncompressed bitmaps become far smaller JPGs." },
        { icon: "🎚️", title: "Quality control", text: "Balance sharpness and file size with the slider." },
        { icon: "🚫", title: "No watermark", text: "Clean JPG output with no branding." },
        { icon: "📱", title: "Any device", text: "Works on phone, tablet and desktop." },
        { icon: "🔒", title: "Private", text: "Processed locally; nothing is uploaded." },
        { icon: "🆓", title: "Free", text: "No sign-up and no limits." },
      ]} />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Shrink bulky bitmaps</h2>
        <p>
          <strong>BMP</strong> files store images without compression, so they’re huge and awkward to
          share. Converting to <strong>JPG</strong> keeps the picture looking the same while cutting the
          file size dramatically — ideal for email, uploads and storage. This tool does it in your
          browser, with a quality slider so you decide the trade-off.
        </p>
        <p>
          Need to hit an exact size? After converting, use the{" "}
          <Link href="/image-compressor/">image compressor</Link> to reach a target KB, or the{" "}
          <Link href="/image-converter/">image converter</Link> for other formats.
        </p>
      </div>

      <RelatedTools heading="More image tools" hrefs={["/image-converter/", "/image-compressor/", "/png-to-jpg/", "/avif-to-jpg/"]} />
      <RecentTools current="/bmp-to-jpg/" />
      <Faq items={faqs} />
    </>
  );
}
