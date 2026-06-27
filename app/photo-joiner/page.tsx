import type { Metadata } from "next";
import PhotoJoiner from "./PhotoJoiner";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Photo Joiner Free Online — Combine Photos",
  description:
    "Free online photo joiner to combine two or more photos into one image — side by side, stacked, or in a grid. No upload, no watermark, 100% in your browser.",
  alternates: { canonical: "/photo-joiner/" },
};

const steps = [
  { icon: "📁", title: "Add photos", text: "Drop or choose two or more images." },
  { icon: "🧩", title: "Pick a layout", text: "Side by side, stacked, or grid — set gap and background." },
  { icon: "⬇️", title: "Download", text: "Combine and save the single joined image." },
];
const features = [
  { icon: "↔️", title: "Side by side", text: "Place photos in a row, aligned to the same height." },
  { icon: "↕️", title: "Stacked", text: "Combine photos vertically into one tall image." },
  { icon: "▦", title: "Grid / collage", text: "Arrange several photos in a neat grid." },
  { icon: "🎨", title: "Gap & background", text: "Add spacing and choose any background colour." },
  { icon: "🔒", title: "Private", text: "Joining runs in your browser; your photos are never uploaded." },
  { icon: "🆓", title: "Free", text: "No sign-up, no watermark, no limits." },
];
const faqs = [
  { q: "How do I join two photos into one?", a: "Add both images, choose ‘Side by side’ or ‘Stacked’, set the gap and background, and click Join. Download the single combined image." },
  { q: "Can I combine more than two photos?", a: "Yes. Add as many as you like — use side-by-side or stacked for a strip, or the grid layout for a simple collage." },
  { q: "Can I add a gap or border between photos?", a: "Yes. Set the gap in pixels and pick a background colour, which shows in the gaps and around the images." },
  { q: "Are my photos uploaded?", a: "No. The images are combined in your browser, so they never leave your device." },
  { q: "Is this photo joiner free?", a: "Yes — it is a completely free photo joiner with no sign-up, no watermark and no limits. Combine as many photos as you like, as often as you like." },
  { q: "Is the photo joiner free online?", a: "Yes. This is a free online photo joiner that runs straight in your browser at no cost — there is nothing to buy and no account to create." },
  { q: "Can I join photos online without installing anything?", a: "Yes. You can join photos online without installing any app or extension. Just open the page in your browser, add your images and combine them." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Photo Joiner", applicationCategory: "MultimediaApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Photo <span className="grad">joiner</span></h1>
        <p className="lede">A free online photo joiner to combine two or more photos into one image — side by side, stacked or in a grid. No upload, no watermark, 100% in your browser.</p>
      </div>
      <PhotoJoiner />
      <Steps heading={<>Join in <span className="g">3 simple steps</span></>} steps={steps} />
      <Features heading={<>Why use this <span className="g">photo joiner</span></>} items={features} />
      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Combine photos into one image</h2>
        <p>
          A free online photo joiner merges several pictures into a single image — perfect for before-and-after
          shots, putting two photos next to each other for sharing, making a simple collage, or
          combining document scans into one file. Choose side by side for a row, stacked for a
          column, or grid for a tidy collage.
        </p>
        <p>
          Add a gap and pick a background colour to frame the images however you like. Everything is
          processed in your browser, so your photos stay private — and if you need the result at a
          specific size, run it through our Image Compressor or Resizer afterwards.
        </p>
      </div>
      <Faq items={faqs} />
      <CtaBand heading="Do more with your images" text="Join, crop, resize, convert and compress — all free and private." links={[["/crop-image/", "Crop Image"], ["/image-resizer/", "Image Resizer"], ["/image-compressor/", "Image Compressor"], ["/photo-signature-combiner/", "Photo + Signature"]]} />
    </>
  );
}
