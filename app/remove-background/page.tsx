import type { Metadata } from "next";
import RemoveBg from "./RemoveBg";

export const metadata: Metadata = {
  title: "Remove Background from Image — Free Online (No Upload, In-Browser)",
  description:
    "Erase the background from any photo automatically, right in your browser. Download a transparent PNG — free, no signup, and your image is never uploaded to a server.",
  alternates: { canonical: "/remove-background/" },
};

const faqs = [
  { q: "Is my photo uploaded to a server?", a: "No. Unlike most background removers, this runs an AI model entirely inside your browser — your image never leaves your device, making it fully private." },
  { q: "Why does the first use take a moment?", a: "The first time, your browser downloads the AI model (a few MB). After that it is cached, so the next images process much faster." },
  { q: "What do I get as output?", a: "A PNG with a transparent background, so you can place your subject on any colour or design. For a white-background passport photo, send the result to our Passport Photo Maker." },
  { q: "Does it work for product photos and logos too?", a: "Yes. It works well for people, products and objects with a reasonably clear edge. Very fine details like loose hair or transparent glass can be harder for any automatic tool." },
  { q: "Is there a limit or watermark?", a: "No limits and no watermark. The tool is completely free and requires no sign-up." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Background Remover", applicationCategory: "MultimediaApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1>Remove Background from Image</h1>
      <p className="lede">Automatically erase the background and get a transparent PNG — free, and 100% private because it runs in your browser.</p>
      <RemoveBg />
      <div className="ad-slot">Ad placement (AdSense)</div>

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>How to remove a background</h2>
        <ol className="steps">
          <li>Upload your photo using the box above (JPG or PNG).</li>
          <li>Wait a few seconds while the AI model loads and processes it — entirely on your device.</li>
          <li>Compare the original and the cut-out preview.</li>
          <li>Click <strong>Download PNG</strong> to save your image with a transparent background.</li>
        </ol>
      </div>

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>A private background remover that never uploads your photo</h2>
        <p>
          Most “free” background removers upload your photo to their servers, add a watermark, or
          lock the full-resolution download behind a paywall. ToolsKaro is different: the entire AI
          cut-out runs inside your browser using on-device machine learning. Your image is never
          transmitted anywhere, and the transparent PNG you download is full quality and free.
        </p>
        <p>
          It is perfect for preparing a clean profile picture, putting a product on a white
          backdrop for a listing, or — combined with our Passport Photo Maker — turning a casual
          photo into a white-background passport photo for exam and visa forms.
        </p>
        <h3>Great for</h3>
        <ul>
          <li>White-background passport and ID photos.</li>
          <li>Profile pictures and social media posts.</li>
          <li>Product images for e-commerce and marketplaces.</li>
          <li>Logos and graphics that need a transparent backdrop.</li>
        </ul>
      </div>

      <div className="card faq">
        <h2 style={{ marginTop: 0 }}>Frequently asked questions</h2>
        <dl>{faqs.map((f) => (<div key={f.q}><dt>{f.q}</dt><dd>{f.a}</dd></div>))}</dl>
      </div>
    </>
  );
}
