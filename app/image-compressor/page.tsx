import type { Metadata } from "next";
import Compressor from "./Compressor";

export const metadata: Metadata = {
  title: "Compress Image to 20KB / 50KB / 100KB — Free Online (No Upload)",
  description:
    "Compress JPG or PNG to an exact KB size for SSC, UPSC, Bank & Railway exam forms. Free, no signup, and 100% in your browser — your photo is never uploaded.",
  alternates: { canonical: "/image-compressor/" },
};

const faqs = [
  {
    q: "How do I compress a photo to 50 KB for an exam form?",
    a: "Upload your photo, enter 50 in the target size box (or tap the 50 KB preset), and click Compress. Download the result — it will be at or just under 50 KB.",
  },
  {
    q: "Are my images uploaded to a server?",
    a: "No. All compression happens inside your browser using the Canvas API. Your file never leaves your device, so it is completely private.",
  },
  {
    q: "What formats are supported?",
    a: "JPG and PNG inputs are supported. The output is a JPEG, which gives the smallest size for photos and is accepted by virtually all government exam portals.",
  },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Image Compressor",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Web",
        offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1>Compress image to an exact KB size</h1>
      <p className="lede">
        Shrink your JPG or PNG to 20&nbsp;KB, 50&nbsp;KB, 100&nbsp;KB or any size your exam form
        requires. Free, no signup, and your file never leaves your browser.
      </p>

      <Compressor />

      <div className="ad-slot">Ad placement (AdSense)</div>

      <div className="card">
        <h2 style={{ marginTop: 0 }}>How to compress your photo</h2>
        <ol className="steps">
          <li>Drop your image above (or click to choose a JPG/PNG).</li>
          <li>Enter the target size in KB, or tap a preset (20 / 50 / 100 / 200 KB).</li>
          <li>Click <strong>Compress</strong>, then download the result.</li>
        </ol>
      </div>

      <div className="card faq">
        <h2 style={{ marginTop: 0 }}>FAQ</h2>
        <dl>
          {faqs.map((f) => (
            <div key={f.q}>
              <dt>{f.q}</dt>
              <dd>{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
}
