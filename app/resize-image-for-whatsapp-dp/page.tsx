import type { Metadata } from "next";
import WhatsappDp from "./WhatsappDp";
import Faq from "@/app/components/Faq";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import ToolBadges from "@/app/components/ToolBadges";
import RelatedTools from "@/app/components/RelatedTools";
import RecentTools from "@/app/components/RecentTools";

export const metadata: Metadata = {
  title: "WhatsApp DP Resizer — Resize Photo for WhatsApp DP",
  description:
    "Free WhatsApp DP resizer — resize a photo to the right WhatsApp DP size (square 256/500/640 px) so it isn't zoomed or cut off. 100% in your browser, no upload.",
  alternates: { canonical: "/resize-image-for-whatsapp-dp/" },
};

const faqs = [
  { q: "What is the best size for a WhatsApp DP?", a: "WhatsApp display pictures are square. A 640×640 px image looks crisp on all devices; 500×500 also works well. The key is a square photo so WhatsApp doesn't zoom in or crop your face awkwardly." },
  { q: "Why does my WhatsApp DP look zoomed in or cut off?", a: "Because WhatsApp crops non-square photos to a circle. If you upload a tall or wide photo it gets zoomed to fill the square. This tool centre-crops your photo to a perfect square first, so it appears exactly as you expect." },
  { q: "How do I resize a photo for my WhatsApp DP?", a: "Pick a size (640×640 is recommended), upload your photo, and the tool centre-crops it to a square and resizes it. Download the result and set it as your DP — it will fit the circle perfectly." },
  { q: "How do I resize a photo for my WhatsApp profile picture?", a: "Use this free WhatsApp profile picture resizer: choose a square size, upload your photo, and it crops to a square and resizes for you. The downloaded image fits the WhatsApp circle with no zoom or awkward cropping." },
  { q: "Does it work for WhatsApp group icons too?", a: "Yes. WhatsApp group icons are also square/circular, so the same square DP works for personal profile pictures and group icons." },
  { q: "Is it free and private?", a: "Completely free with no sign-up, and your photo is processed in your browser and never uploaded to a server." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "WhatsApp DP Resizer", url: "https://toolskaro.com/resize-image-for-whatsapp-dp/", applicationCategory: "MultimediaApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Resize image for <span className="grad">WhatsApp DP</span></h1>
        <p className="lede">A free WhatsApp DP resizer to resize a photo for your WhatsApp DP — square-cropped to the right WhatsApp DP size so your profile picture isn&apos;t zoomed in or cut off. Instant and 100% in your browser.</p>
        <ToolBadges />
      </div>

      <div className="tool-shell"><WhatsappDp /></div>

      <Steps
        heading={<>Get your WhatsApp DP ready in <span className="grad">3 simple steps</span></>}
        steps={[
          { icon: "📐", title: "Pick a square size", text: "Choose 640×640 px (recommended), 500 or 256 — all square so the DP fits the circle." },
          { icon: "🖼️", title: "Upload your photo", text: "Drop a photo; it stays on your device and is never uploaded." },
          { icon: "⬇️", title: "Download & set", text: "The tool centre-crops to a square and resizes — download and set it as your DP." },
        ]}
      />

      <Features
        heading={<>Why use this <span className="grad">WhatsApp DP resizer</span></>}
        items={[
          { icon: "⭕", title: "No awkward crop", text: "Centre-crops to a perfect square so WhatsApp won't zoom in or cut off your face." },
          { icon: "🔒", title: "100% private", text: "Everything runs in your browser; your photo is never uploaded to a server." },
          { icon: "📏", title: "Right DP size", text: "Outputs crisp square sizes (640/500/256 px) that look sharp on every device." },
          { icon: "👥", title: "Works for group icons", text: "The same square image fits personal profile pictures and group icons." },
          { icon: "⚡", title: "Instant", text: "Crop and resize in about a second — no waiting and no queue." },
          { icon: "🆓", title: "Free & unlimited", text: "No sign-up, no watermark — use it as often as you like." },
        ]}
      />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Get a WhatsApp DP that fits perfectly</h2>
        <p>
          WhatsApp shows your display picture inside a circle, and it crops any non-square photo to fit —
          which is why a normal portrait often ends up zoomed in or with your face cut off. This
          WhatsApp DP maker fixes that: it acts as a square-crop
          <strong> WhatsApp profile picture resizer</strong> that centre-crops your photo to a perfect square
          and resizes it to a clean WhatsApp DP size (640×640&nbsp;px works best), so it appears exactly
          the way you want.
        </p>
        <p>
          The same square image works for your <strong>profile picture and group icons</strong>. Want a
          different platform? Use the <a href="/social-media-image-resizer/">Social Media Image Resizer</a>{" "}
          for Instagram, Facebook, LinkedIn and more, or the{" "}
          <a href="/crop-image/">Crop tool</a> for a custom shape. Everything runs in your browser.
        </p>
      </div>

      <RelatedTools
        heading="Related tools"
        hrefs={["/social-media-image-resizer/", "/crop-image/", "/image-resizer/", "/passport-photo-maker/"]}
      />

      <RecentTools current="/resize-image-for-whatsapp-dp/" />

      <Faq items={faqs} />
    </>
  );
}
