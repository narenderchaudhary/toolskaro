import type { Metadata } from "next";
import Resizer from "./Resizer";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Image Resizer — Resize Photo by Pixels for Exam Forms (Free, No Upload)",
  description:
    "Resize your photo or signature to exact pixel dimensions for SSC, UPSC, Bank and Railway exam forms. Presets for passport size and signature. Free and 100% in your browser.",
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
  { q: "What size should my exam photo be?", a: "Most Indian exam portals ask for a passport-style photo around 3.5×4.5 cm (about 413×531 px at 300 DPI) and a signature around 3×1 cm. Always confirm the exact size in the official notification — use the presets here as a starting point." },
  { q: "How do I resize an image to specific pixel dimensions?", a: "Upload your image, then type the width and height you need in pixels. Keep ‘Lock aspect ratio’ on to avoid stretching, or turn it off to force an exact size. Click Resize and download the result." },
  { q: "Will resizing reduce my file size too?", a: "Resizing to smaller pixel dimensions usually reduces file size. If you need an exact KB target (for example 50 KB), resize first and then run the result through our Image Compressor." },
  { q: "Does resizing reduce image quality?", a: "Some quality change is normal when scaling an image. We use high-quality smoothing to keep the result as crisp as possible. Avoid enlarging a small image far beyond its original size, as that always looks blurry." },
  { q: "Is the tool free and private?", a: "Yes. It is completely free with no sign-up or watermark, and all resizing happens in your browser — your image is never uploaded to any server." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Image Resizer", applicationCategory: "MultimediaApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Resize your photo to <span className="grad">exact dimensions</span></h1>
        <p className="lede">Resize your photo or signature to exact pixel sizes — with one-tap presets for passport photos and signatures. Free, no signup, 100% in your browser.</p>
      </div>

      <Resizer />

      <Steps heading={<>Resize in <span className="g">3 simple steps</span></>} steps={steps} />
      <Features heading={<>Why use this <span className="g">image resizer</span></>} items={features} />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Resize photos for any government exam form</h2>
        <p>
          Government application portals require your photograph and signature in precise pixel
          dimensions. Upload an image that is too large or the wrong shape, and the form rejects it
          or distorts it. This resizer lets you set the exact width and height your form specifies,
          with handy presets for the most common passport-photo and signature sizes used across
          Indian exams.
        </p>
        <p>
          It pairs perfectly with our Image Compressor: first resize to the right dimensions here,
          then compress to the exact KB limit. Everything runs inside your browser, so your photo
          and signature stay private on your own device.
        </p>
      </div>

      <Faq items={faqs} />

      <CtaBand
        heading="Prepare your whole application in minutes"
        text="Resize, compress and convert every document — free and private."
        links={[["/image-compressor/", "Image Compressor"], ["/passport-photo-maker/", "Passport Photo"], ["/signature-resize/", "Signature Resize"], ["/remove-background/", "Remove Background"]]}
      />
    </>
  );
}
