import type { Metadata } from "next";
import WhatsappDp from "./WhatsappDp";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Resize Image for WhatsApp DP — Free Square DP Maker",
  description:
    "Resize a photo for your WhatsApp DP (display picture) online for free. Centre-crop to a clean square (256, 500 or 640 px) so it isn't zoomed or cut off — 100% in your browser.",
  alternates: { canonical: "/resize-image-for-whatsapp-dp/" },
};

const faqs = [
  { q: "What is the best size for a WhatsApp DP?", a: "WhatsApp display pictures are square. A 640×640 px image looks crisp on all devices; 500×500 also works well. The key is a square photo so WhatsApp doesn't zoom in or crop your face awkwardly." },
  { q: "Why does my WhatsApp DP look zoomed in or cut off?", a: "Because WhatsApp crops non-square photos to a circle. If you upload a tall or wide photo it gets zoomed to fill the square. This tool centre-crops your photo to a perfect square first, so it appears exactly as you expect." },
  { q: "How do I resize a photo for my WhatsApp DP?", a: "Pick a size (640×640 is recommended), upload your photo, and the tool centre-crops it to a square and resizes it. Download the result and set it as your DP — it will fit the circle perfectly." },
  { q: "Does it work for WhatsApp group icons too?", a: "Yes. WhatsApp group icons are also square/circular, so the same square DP works for personal profile pictures and group icons." },
  { q: "Is it free and private?", a: "Completely free with no sign-up, and your photo is processed in your browser and never uploaded to a server." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "WhatsApp DP Resizer", url: "https://toolskaro.com/resize-image-for-whatsapp-dp/", applicationCategory: "MultimediaApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Resize image for <span className="grad">WhatsApp DP</span></h1>
        <p className="lede">Make a clean, square WhatsApp display picture that isn&apos;t zoomed in or cut off — centre-cropped and resized. Free, instant and 100% in your browser.</p>
      </div>

      <WhatsappDp />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Get a WhatsApp DP that fits perfectly</h2>
        <p>
          WhatsApp shows your display picture inside a circle, and it crops any non-square photo to fit —
          which is why a normal portrait often ends up zoomed in or with your face cut off. This tool
          fixes that by <strong>centre-cropping your photo to a perfect square</strong> and resizing it to
          a clean size (640×640&nbsp;px works best), so it appears exactly the way you want.
        </p>
        <p>
          The same square image works for your <strong>profile picture and group icons</strong>. Want a
          different platform? Use the <a href="/social-media-image-resizer/">Social Media Image Resizer</a>{" "}
          for Instagram, Facebook, LinkedIn and more, or the{" "}
          <a href="/crop-image/">Crop tool</a> for a custom shape. Everything runs in your browser.
        </p>
      </div>

      <Faq items={faqs} />

      <CtaBand heading="Size images for any platform" text="WhatsApp, Instagram, Facebook and more — free and private." links={[["/social-media-image-resizer/", "Social Media Resizer"], ["/crop-image/", "Crop Image"], ["/image-resizer/", "Image Resizer"], ["/passport-photo-maker/", "Passport Photo"]]} />
    </>
  );
}
