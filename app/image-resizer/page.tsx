import type { Metadata } from "next";
import Faq from "@/app/components/Faq";
import Resizer from "./Resizer";

export const metadata: Metadata = {
  title: "Image Resizer — Resize Photo by Pixels for Exam Forms (Free, No Upload)",
  description:
    "Resize your photo or signature to exact pixel dimensions for SSC, UPSC, Bank and Railway exam forms. Presets for passport size and signature. Free and 100% in your browser.",
  alternates: { canonical: "/image-resizer/" },
};

const faqs = [
  {
    q: "What size should my exam photo be?",
    a: "Most Indian exam portals ask for a passport-style photo around 3.5×4.5 cm (about 413×531 px at 300 DPI) and a signature around 3×1 cm. Always confirm the exact size in the official notification — use the presets here as a starting point.",
  },
  {
    q: "How do I resize an image to specific pixel dimensions?",
    a: "Upload your image, then type the width and height you need in pixels. Keep ‘Lock aspect ratio’ on to avoid stretching, or turn it off to force an exact size. Click Resize and download the result.",
  },
  {
    q: "Will resizing reduce my file size too?",
    a: "Resizing to smaller pixel dimensions usually reduces file size. If you need an exact KB target (for example 50 KB), resize first and then run the result through our Image Compressor.",
  },
  {
    q: "Does resizing reduce image quality?",
    a: "Some quality change is normal when scaling an image. We use high-quality smoothing to keep the result as crisp as possible. Avoid enlarging a small image far beyond its original size, as that always looks blurry.",
  },
  {
    q: "Is the tool free and private?",
    a: "Yes. It is completely free with no sign-up or watermark, and all resizing happens in your browser — your image is never uploaded to any server.",
  },
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
      <h1>Image Resizer</h1>
      <p className="lede">
        Resize your photo or signature to exact pixel dimensions — with one-tap presets for
        passport-size photos and signatures. Free, no signup, 100% in your browser.
      </p>

      <Resizer />

      <div className="ad-slot">Ad placement (AdSense)</div>

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>How to resize an image</h2>
        <ol className="steps">
          <li>Upload your photo or signature using the box above.</li>
          <li>Enter the width and height in pixels, or tap a preset such as “Passport 3.5×4.5cm”.</li>
          <li>Keep <strong>Lock aspect ratio</strong> on to prevent stretching (turn it off only if your form needs an exact non-proportional size).</li>
          <li>Click <strong>Resize image</strong> and download the result.</li>
        </ol>
      </div>

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
        <h3>Popular presets</h3>
        <ul>
          <li>Passport photo — 3.5×4.5 cm (≈413×531 px)</li>
          <li>2×2 inch photo — for visa and some applications (≈600×600 px)</li>
          <li>SSC / general form photo — around 200×230 px</li>
          <li>Signature — around 3×1 cm</li>
        </ul>
      </div>

      <Faq items={faqs} />
    </>
  );
}
