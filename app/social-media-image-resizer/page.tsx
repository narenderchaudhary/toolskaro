import type { Metadata } from "next";
import SocialResizer from "./SocialResizer";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import Faq from "@/app/components/Faq";
import ToolBadges from "@/app/components/ToolBadges";
import RelatedTools from "@/app/components/RelatedTools";
import RecentTools from "@/app/components/RecentTools";

export const metadata: Metadata = {
  title: "Social Media Image Resizer — All Platforms",
  description:
    "Resize any image to the exact size for Instagram, Facebook, WhatsApp, LinkedIn, X (Twitter), YouTube and Pinterest. Free, no upload, 100% in your browser.",
  alternates: { canonical: "/social-media-image-resizer/" },
};

const steps = [
  { icon: "📁", title: "Upload image", text: "Drop or choose your photo or graphic." },
  { icon: "📱", title: "Pick platform & size", text: "Instagram, Facebook, WhatsApp, LinkedIn, X, YouTube, Pinterest." },
  { icon: "⬇️", title: "Download", text: "Get a perfectly sized image, ready to post." },
];
const features = [
  { icon: "📐", title: "Exact platform sizes", text: "Built-in presets for posts, stories, covers, profiles and thumbnails." },
  { icon: "✂️", title: "Crop or fit", text: "Crop to fill the frame, or fit the whole image on a background colour." },
  { icon: "🌈", title: "All major platforms", text: "Instagram, Facebook, WhatsApp, LinkedIn, X, YouTube and Pinterest." },
  { icon: "🔒", title: "Private", text: "Resizing runs in your browser; your image is never uploaded." },
  { icon: "⚡", title: "Instant & free", text: "No sign-up, no watermark, no limits." },
  { icon: "🖼️", title: "Any source", text: "Works with JPG, PNG and WebP images of any size." },
];
const faqs = [
  { q: "What size should an Instagram post be?", a: "A square Instagram post is 1080×1080 px, a portrait post 1080×1350 px, and a Story or Reel 1080×1920 px. Pick the one you need from the menu and the image is resized exactly." },
  { q: "What is the right size for a WhatsApp DP or status?", a: "A WhatsApp profile photo (DP) works best as a 500×500 square, and a WhatsApp status as 1080×1920 (9:16). Both presets are included." },
  { q: "What about LinkedIn, Facebook and YouTube?", a: "We include LinkedIn post (1200×627), cover banner (1584×396) and profile (400×400); Facebook post, cover and story; a YouTube thumbnail (1280×720) and channel art; plus X (Twitter) post and header, and Pinterest pins." },
  { q: "Will my image be cropped?", a: "Choose ‘Crop to fill’ to fill the frame (some edges trimmed), or ‘Fit with background’ to keep the whole image on a background colour you pick." },
  { q: "Is it free and private?", a: "Yes — completely free, no sign-up, and your image is resized in your browser without being uploaded." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Social Media Image Resizer", applicationCategory: "MultimediaApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Social media <span className="grad">image resizer</span></h1>
        <p className="lede">Resize any image to the exact size for Instagram, Facebook, WhatsApp, LinkedIn, X, YouTube and Pinterest — free, no upload, in your browser.</p>
        <ToolBadges />
      </div>
      <div className="tool-shell"><SocialResizer /></div>
      <Steps heading={<>Resize in <span className="g">3 simple steps</span></>} steps={steps} />
      <Features heading={<>Why use this <span className="g">social media resizer</span></>} items={features} />
      <div className="card content">
        <h2 style={{ marginTop: 0 }}>The right size for every platform</h2>
        <p>
          Every social network expects a different image size — a square for an Instagram post, a tall
          9:16 frame for stories and WhatsApp status, a wide banner for a LinkedIn or X header, a
          16:9 thumbnail for YouTube. Upload the wrong size and your image gets awkwardly cropped or
          stretched. This tool resizes your image to the exact dimensions each platform wants, in one
          click.
        </p>
        <p>
          Choose <strong>crop to fill</strong> for an edge-to-edge result, or <strong>fit with
          background</strong> to keep the whole image with a colour of your choice around it.
          Everything runs in your browser, so your photos stay private — and you can compress the
          result with our Image Compressor if you need a smaller file.
        </p>
      </div>
      <RelatedTools
        heading="Related tools"
        hrefs={["/image-resizer/", "/crop-image/", "/image-compressor/", "/remove-background/"]}
      />
      <RecentTools current="/social-media-image-resizer/" />
      <Faq items={faqs} />
    </>
  );
}
