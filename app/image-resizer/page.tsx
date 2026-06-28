import type { Metadata } from "next";
import Link from "next/link";
import Resizer from "./Resizer";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import Faq from "@/app/components/Faq";
import ToolBadges from "@/app/components/ToolBadges";
import RelatedTools from "@/app/components/RelatedTools";
import RecentTools from "@/app/components/RecentTools";

export const metadata: Metadata = {
  title: "Image Resizer — Resize Photo by Pixels, Free",
  description:
    "Resize an image to exact pixel dimensions in your browser. Resize a photo or signature with passport and signature presets. Resize image online free, no signup.",
  alternates: { canonical: "/image-resizer/" },
};

const steps = [
  { icon: "📁", title: "Upload your photo", text: "Drag & drop or choose a JPG/PNG image." },
  { icon: "📐", title: "Set width & height", text: "Type exact pixels or tap a passport/signature preset." },
  { icon: "⬇️", title: "Download", text: "Resize and save your correctly sized image." },
];

const features = [
  { icon: "📐", title: "Exact pixel sizes", text: "Set any width and height your form requires, down to the pixel." },
  { icon: "🪪", title: "Exam presets", text: "One-tap sizes for passport photos, signatures and common form formats." },
  { icon: "🔗", title: "Lock aspect ratio", text: "Keep proportions to avoid stretching, or force an exact size when needed." },
  { icon: "🔒", title: "Private — no upload", text: "Resizing runs in your browser; your image never leaves your device." },
  { icon: "⚡", title: "Fast & free", text: "Instant results with no sign-up, no watermark and no limits." },
  { icon: "🎯", title: "Pairs with compressor", text: "Resize first, then compress to the exact KB limit your portal needs." },
];

const faqs = [
  { q: "What size should my application photo be?", a: "Most online application portals ask for a passport-style photo around 3.5×4.5 cm (about 413×531 px at 300 DPI) and a signature around 3×1 cm. Always confirm the exact size in the official instructions — use the presets here as a starting point." },
  { q: "How do I resize an image to specific pixel dimensions?", a: "Upload your image, then type the width and height you need in pixels. Keep ‘Lock aspect ratio’ on to avoid stretching, or turn it off to force an exact size. Click Resize and download the result." },
  { q: "Will resizing reduce my file size too?", a: "Resizing to smaller pixel dimensions usually reduces file size. If you need an exact KB target (for example 50 KB), resize first and then run the result through our Image Compressor." },
  { q: "Does resizing reduce image quality?", a: "Some quality change is normal when scaling an image. We use high-quality smoothing to keep the result as crisp as possible. Avoid enlarging a small image far beyond its original size, as that always looks blurry." },
  { q: "Is the tool free and private?", a: "Yes. It is completely free with no sign-up or watermark, and all resizing happens in your browser — your image is never uploaded to any server." },
  { q: "What is the difference between resizing in pixels and in cm?", a: "Pixels measure the image on screen, while centimetres measure how big it prints. The two are linked by DPI: at 300 DPI, 3.5×4.5 cm equals about 413×531 px. Online forms almost always ask for pixels, but printers and some passport rules use cm — pick whichever your instructions specify." },
  { q: "How do I resize a photo without stretching or distorting it?", a: "Keep the ‘Lock aspect ratio’ option on so width and height scale together. If your form needs a shape different from your photo, crop the image to that ratio first, then resize. Turning the lock off forces an exact size but can squash faces, so only do it when the dimensions already match your photo's proportions." },
  { q: "Can I enlarge a small image to a bigger size?", a: "You can, but enlarging beyond an image's original pixels always softens it, because the tool has to invent detail that was never captured. For a crisp result, start from a photo that is at least as large as the target size. If you must scale up, keep the increase small." },
  { q: "Which sizes do I need for online application forms?", a: "Photo and signature dimensions differ slightly between forms, so we built exact presets for the most common ones. Open the format that matches your form, or set custom pixels here using the numbers from your official instructions." },
  { q: "How do I resize an image online?", a: "Upload your image to this page, type the width and height you want in pixels (or tap a preset), then click Resize and download. The whole image resize runs online in your browser, with nothing uploaded to a server." },
  { q: "Can I resize a photo for free?", a: "Yes. You can resize a photo or signature here completely free — no sign-up, no watermark and no limits. It is a fully free online tool, so resize image online free as many times as you need." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Image Resizer", applicationCategory: "MultimediaApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Resize your photo to <span className="grad">exact dimensions</span></h1>
        <p className="lede">Resize an image to exact pixel sizes — resize a photo or signature with one-tap presets for passport photos and signatures. Resize image online free, no signup, 100% in your browser.</p>
        <ToolBadges />
      </div>

      <div className="tool-shell"><Resizer /></div>

      <Steps heading={<>Resize in <span className="g">3 simple steps</span></>} steps={steps} />
      <Features heading={<>Why use this <span className="g">image resizer</span></>} items={features} />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Resize photos for forms, applications and everyday files</h2>
        <p>
          Online application portals require your photograph and signature in precise pixel
          dimensions. Upload an image that is too large or the wrong shape, and the form rejects it
          or distorts it. This resizer lets you set the exact width and height your form specifies,
          with handy presets for the most common passport-photo and signature sizes.
        </p>
        <p>
          Every image resize happens instantly here, and it pairs perfectly with our Image
          Compressor: first resize a photo to the right dimensions, then compress to the exact KB
          limit. Everything runs inside your browser, so your photo and signature stay private on
          your own device.
        </p>
        <h3>Common photo &amp; signature pixel sizes</h3>
        <p>
          Online forms usually want a passport-style photo around 200×230&nbsp;px or
          413×531&nbsp;px and a signature near 140×60&nbsp;px, though the exact figures change by
          form. Rather than guess, open the preset built for your form —
          {" "}<Link href="/photo-resize-for-ssc-cgl/">SSC CGL</Link>,
          {" "}<Link href="/photo-resize-for-ibps-po/">IBPS PO</Link>,
          {" "}<Link href="/photo-resize-for-upsc/">UPSC</Link> or
          {" "}<Link href="/resize-for-pan-card/">PAN card</Link> — and the correct dimensions are
          filled in for you. For a quick KB-only target instead, try
          {" "}<Link href="/resize-image-in-kb/">resize image in KB</Link>.
        </p>
        <h3>Pixels, centimetres and DPI explained</h3>
        <p>
          If your instructions are written in centimetres, you need to convert before resizing for
          the web. The link is DPI (dots per inch): at the common print value of 300 DPI, one inch
          equals 300&nbsp;px, so a 3.5×4.5&nbsp;cm photo becomes roughly 413×531&nbsp;px. When you
          need to work the other way — in physical size or print resolution — use
          {" "}<Link href="/resize-image-in-cm/">resize image in cm</Link> or
          {" "}<Link href="/change-image-dpi/">change image DPI</Link> to set the value your printer
          or form expects.
        </p>
        <h3>Step-by-step resizing tips</h3>
        <p>
          For the cleanest output, start from the largest, sharpest copy of your photo you have and
          scale down rather than up. Crop to the right shape before entering dimensions so faces are
          not squashed, and keep the aspect-ratio lock on unless your numbers already match. Once the
          size is right, finish by sending the file to the
          {" "}<Link href="/image-compressor/">Image Compressor</Link> to meet any KB ceiling, or to
          {" "}<Link href="/crop-image/">Crop Image</Link> if a final trim is needed.
        </p>
      </div>

      <RelatedTools
        heading="Related tools"
        hrefs={["/image-compressor/", "/resize-image-in-cm/", "/crop-image/", "/passport-photo-maker/"]}
      />

      <RecentTools current="/image-resizer/" />

      <Faq items={faqs} />
    </>
  );
}
