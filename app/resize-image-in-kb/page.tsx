import type { Metadata } from "next";
import Compressor from "@/app/image-compressor/Compressor";
import Faq from "@/app/components/Faq";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import ToolBadges from "@/app/components/ToolBadges";
import RelatedTools from "@/app/components/RelatedTools";
import RecentTools from "@/app/components/RecentTools";

export const metadata: Metadata = {
  title: "Resize Image in KB Online — Free Photo KB Resizer",
  description:
    "Resize any image to an exact KB size online — 20 KB, 50 KB, 100 KB or any target. Free photo KB resizer for online forms, 100% in your browser, no upload, no signup.",
  alternates: { canonical: "/resize-image-in-kb/" },
};

const faqs = [
  { q: "How do I resize an image in KB?", a: "Upload your photo above, type the size you need in KB (for example 50), and click Resize. The tool reduces the file to at or under your target KB while keeping the best possible quality, then lets you download it — all in your browser." },
  { q: "What does 'resize in KB' mean?", a: "It means reducing the file size (measured in kilobytes), not the pixel dimensions. Exam and job portals usually cap the file weight — e.g. a photo under 50 KB — so 'resize in KB' is about hitting that file-size limit." },
  { q: "Can I resize a photo to 20 KB or 50 KB?", a: "Yes. Enter 20 or 50 as the KB target and the tool compresses your image to fit. Common targets are 20 KB and 50 KB for photos and 10–20 KB for signatures on online forms." },
  { q: "Will my photo stay clear after resizing in KB?", a: "The tool keeps the highest quality that fits your KB limit. Larger targets stay sharper; very small targets soften the image. For a small KB target, resizing to passport dimensions first helps keep the face clear." },
  { q: "Is it free and are my files uploaded?", a: "It is completely free with no sign-up or watermark, and nothing is uploaded — the resizing runs entirely on your device." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Resize Image in KB", url: "https://toolskaro.com/resize-image-in-kb/", applicationCategory: "MultimediaApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Resize image <span className="grad">in KB</span></h1>
        <p className="lede">Reduce any photo to an exact file size in KB — 20 KB, 50 KB, 100 KB or any target you type. Free, instant and 100% in your browser.</p>
        <ToolBadges />
      </div>

      <div className="tool-shell"><Compressor initialTarget={50} /></div>

      <Steps
        heading={<>Resize your image in <span className="grad">3 simple steps</span></>}
        steps={[
          { icon: "📁", title: "Upload your photo", text: "Drop a JPG or PNG — it stays on your device and is never uploaded." },
          { icon: "⚖️", title: "Type the KB target", text: "Enter the size your form needs, such as 20, 50 or 100 KB." },
          { icon: "⬇️", title: "Download", text: "The tool shrinks the file to your target and you save the result." },
        ]}
      />

      <Features
        heading={<>Why use this <span className="grad">KB resizer</span></>}
        items={[
          { icon: "🎯", title: "Exact KB target", text: "Hit a strict limit like 20 or 50 KB so a form finally accepts your photo." },
          { icon: "✨", title: "Best quality kept", text: "It keeps the highest clarity that still fits inside your KB limit." },
          { icon: "🔒", title: "100% private", text: "Everything runs in your browser; your photo is never uploaded to a server." },
          { icon: "⚡", title: "Instant", text: "Reach your size in about a second — no waiting and no queue." },
          { icon: "📱", title: "Works anywhere", text: "Phone, tablet or desktop, in any modern browser." },
          { icon: "🆓", title: "Free & unlimited", text: "No sign-up, no watermark — resize as many photos as you like." },
        ]}
      />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Resize your photo to the exact KB you need</h2>
        <p>
          Online application portals almost always cap the <strong>file size in KB</strong> — a photo
          under 50&nbsp;KB, a signature under 20&nbsp;KB, and so on. A picture from your phone is far
          larger, so the form rejects it. This tool lets you type the exact KB target and it shrinks the
          file to fit, keeping the photo as sharp as possible.
        </p>
        <p>
          Need exact pixel dimensions as well? Use the <a href="/image-resizer/">Image Resizer</a> first,
          then resize in KB here. For a specific size there are one-click pages for{" "}
          <a href="/compress-image-to-50kb/">50&nbsp;KB</a>,{" "}
          <a href="/compress-image-to-100kb/">100&nbsp;KB</a> and more, and a{" "}
          <a href="/signature-resize/">Signature Resize</a> tool for signatures. Everything runs in your
          browser, so your photo never leaves your device.
        </p>
      </div>

      <RelatedTools
        heading="Related tools"
        hrefs={["/image-compressor/", "/image-resizer/", "/signature-resize/", "/increase-image-size-in-kb/"]}
      />

      <RecentTools current="/resize-image-in-kb/" />

      <Faq items={faqs} />
    </>
  );
}
