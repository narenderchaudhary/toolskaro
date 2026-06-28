import type { Metadata } from "next";
import Increase from "./Increase";
import Faq from "@/app/components/Faq";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import ToolBadges from "@/app/components/ToolBadges";
import RelatedTools from "@/app/components/RelatedTools";
import RecentTools from "@/app/components/RecentTools";

export const metadata: Metadata = {
  title: "Increase Image Size in KB — Free Online Image KB Increaser",
  description:
    "Increase the KB of an image or photo to a minimum size (20, 50, 100 KB) for free. A no-upload image KB increaser that makes a photo bigger in KB for forms that need a minimum — 100% in your browser.",
  alternates: { canonical: "/increase-image-size-in-kb/" },
};

const faqs = [
  { q: "Why would I need to increase an image's size in KB?", a: "Some exam and job portals set a MINIMUM file size as well as a maximum — for example, a photo must be between 20 KB and 50 KB. If your image is below the minimum, the form rejects it, so you need to increase its size to fit the range." },
  { q: "How do I increase an image to a minimum KB?", a: "Set the minimum KB you need above, then upload your photo. The tool re-saves it at top quality (enlarging it if necessary) and tops up the file to your target, then lets you download it — all in your browser." },
  { q: "Does increasing the file size reduce quality?", a: "No. The tool keeps your image at the highest quality and only adds harmless padding to reach the size — the picture looks identical, it just weighs more on disk so it passes the minimum-size check." },
  { q: "Is the image still a normal JPG I can upload?", a: "Yes. The result is a standard JPG that opens and uploads everywhere; the extra bytes are ignored by image viewers and form checkers, which only read the file size." },
  { q: "How do I increase the KB of a photo?", a: "Set the minimum KB you want, upload the photo, and download. The tool increases the KB of the image to your target while keeping it at full quality, so a small photo passes a form's minimum-size check." },
  { q: "Is this an image KB increaser?", a: "Yes. It is a free online image KB increaser — it makes a photo bigger in KB (for example from 8 KB up to 20, 50 or 100 KB) without changing how the picture looks." },
  { q: "Is it free and private?", a: "Completely free with no sign-up, and the image is processed entirely on your device — it is never uploaded to a server." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Increase Image Size in KB", url: "https://toolskaro.com/increase-image-size-in-kb/", applicationCategory: "MultimediaApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Increase image size <span className="grad">in KB</span></h1>
        <p className="lede">Increase the KB of a photo to meet a form&apos;s minimum file size — 20 KB, 50 KB, 100 KB or any target. A free, instant image KB increaser that runs 100% in your browser.</p>
        <ToolBadges />
      </div>

      <div className="tool-shell"><Increase /></div>

      <Steps
        heading={<>Increase your image in <span className="grad">3 simple steps</span></>}
        steps={[
          { icon: "📏", title: "Set the minimum KB", text: "Type the size your form needs, or tap a preset like 20, 50 or 100 KB." },
          { icon: "🖼️", title: "Upload your photo", text: "Drop a JPG or PNG — it stays on your device and is never uploaded." },
          { icon: "⬇️", title: "Download", text: "The tool tops the file up to your target and you download a standard JPG." },
        ]}
      />

      <Features
        heading={<>Why use this <span className="grad">KB increaser</span></>}
        items={[
          { icon: "🔒", title: "100% private", text: "Everything runs in your browser; your photo is never uploaded to a server." },
          { icon: "✨", title: "No quality loss", text: "It only adds harmless padding to reach the size — the picture looks identical." },
          { icon: "⚡", title: "Instant", text: "Hit any KB target in about a second — no waiting and no queue." },
          { icon: "🎯", title: "Exact size", text: "Meet a strict minimum like 20–50 KB so a form finally accepts your image." },
          { icon: "📱", title: "Works anywhere", text: "Phone, tablet or desktop, in any modern browser." },
          { icon: "🆓", title: "Free & unlimited", text: "No sign-up, no watermark — use it as many times as you like." },
        ]}
      />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>When you need to increase a photo&apos;s size in KB</h2>
        <p>
          Most people compress photos to get <em>under</em> a limit — but many online application
          forms also set a <strong>minimum</strong> file size. A common rule is a photo of
          &quot;20&nbsp;KB to 50&nbsp;KB&quot;, so an image that is only 8&nbsp;KB is rejected for being
          too small. This tool does the opposite of a compressor: it is an image KB increaser that makes
          your photo bigger in KB until it meets the size you need.
        </p>
        <h3>How to increase the KB of an image</h3>
        <p>
          Set the minimum KB you need, upload your photo, and download — the increaser keeps your
          picture at full quality and simply tops the file up to the target, so the photo looks exactly
          the same and uploads as a normal JPG. It works the same whether you want a 20&nbsp;KB,
          50&nbsp;KB or 100&nbsp;KB photo, and it is the easiest way to increase the KB of an image
          without any loss of clarity.
        </p>
        <p>
          Need to go the other way and reduce the size instead? Use our{" "}
          <a href="/image-compressor/">Image Compressor</a> or{" "}
          <a href="/resize-image-in-kb/">resize an image in KB</a> to a maximum.
        </p>
      </div>

      <RelatedTools
        heading="Related image tools"
        hrefs={["/resize-image-in-kb/", "/image-compressor/", "/image-resizer/", "/passport-photo-maker/"]}
      />

      <RecentTools current="/increase-image-size-in-kb/" />

      <Faq items={faqs} />
    </>
  );
}
