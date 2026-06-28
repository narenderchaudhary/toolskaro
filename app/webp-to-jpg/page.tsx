import type { Metadata } from "next";
import Converter from "@/app/image-converter/Converter";
import Faq from "@/app/components/Faq";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import ToolBadges from "@/app/components/ToolBadges";
import RelatedTools from "@/app/components/RelatedTools";
import RecentTools from "@/app/components/RecentTools";

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
        <ToolBadges />
      </div>

      <div className="tool-shell"><Converter /></div>

      <Steps
        heading={<>Convert WebP to JPG in <span className="grad">3 simple steps</span></>}
        steps={[
          { icon: "📤", title: "Upload your WebP", text: "Drop a .webp image — it stays on your device and is never uploaded." },
          { icon: "🔄", title: "Keep JPG and convert", text: "Leave the output set to JPG and click Convert; the tool re-saves it in your browser." },
          { icon: "⬇️", title: "Download", text: "Save a universally supported JPG you can open and upload anywhere." },
        ]}
      />

      <Features
        heading={<>Why use this <span className="grad">WebP to JPG converter</span></>}
        items={[
          { icon: "🔒", title: "100% private", text: "Conversion runs on your device; your image is never uploaded to a server." },
          { icon: "🚫", title: "No watermark", text: "No watermark, no sign-up and no email — just clean JPG files." },
          { icon: "🌍", title: "Works everywhere", text: "JPG opens in apps, editors and upload forms that still reject WebP." },
          { icon: "⬜", title: "Handles transparency", text: "Transparent areas are flattened onto a clean white background in the JPG." },
          { icon: "⚡", title: "Instant", text: "Convert in about a second — no waiting and no queue." },
          { icon: "🆓", title: "Free & unlimited", text: "No conversion limits — use it as often as you like." },
        ]}
      />

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

      <RelatedTools
        heading="Related tools"
        hrefs={["/image-converter/", "/png-to-jpg/", "/jpeg-to-jpg/", "/heic-to-jpg/"]}
      />

      <RecentTools current="/webp-to-jpg/" />

      <Faq items={faqs} />
    </>
  );
}
