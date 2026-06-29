import type { Metadata } from "next";
import Link from "next/link";
import ImageJoiner from "./ImageJoiner";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import ToolBadges from "@/app/components/ToolBadges";
import RelatedTools from "@/app/components/RelatedTools";
import RecentTools from "@/app/components/RecentTools";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Image Joiner — Join Images Horizontally or Vertically (Free)",
  description:
    "Free online image joiner — merge two or more images into one, side by side (horizontal) or stacked (vertical), with gap and background options. 100% in your browser, no upload.",
  alternates: { canonical: "/image-joiner/" },
};

const faqs = [
  { q: "How do I join two images into one?", a: "Add your images, choose Horizontal (side by side) or Vertical (stacked), adjust the gap and background if you want, and download the combined image as a PNG. It all happens in your browser." },
  { q: "Can I join images horizontally and vertically?", a: "Yes. Toggle the direction: Horizontal places the images in a row aligned to the same height, and Vertical stacks them in a column aligned to the same width." },
  { q: "How many images can I combine?", a: "As many as you like — add two or more and they are joined in the order shown. You can reorder them with the arrows or remove any before downloading." },
  { q: "Will the images lose quality?", a: "No. Images are drawn at full resolution onto a canvas and exported as a lossless PNG, so the joined image stays sharp." },
  { q: "Can I add a gap or change the background?", a: "Yes. Set a pixel gap between images and pick any background colour, or choose a transparent background (the PNG keeps the transparency)." },
  { q: "Is the image joiner free and private?", a: "Completely free with no sign-up, and every image is processed locally in your browser — nothing is ever uploaded to a server." },
  { q: "What is the difference between this and the Photo Joiner?", a: "This Image Joiner focuses on a clean horizontal or vertical merge. For collage-style layouts (grid, side-by-side and stacked presets) use the Photo Joiner instead." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Image Joiner", url: "https://toolskaro.com/image-joiner/", applicationCategory: "MultimediaApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Image <span className="grad">joiner</span></h1>
        <p className="lede">Join two or more images into one — side by side (horizontal) or stacked (vertical), with a gap and background of your choice. Free, instant and 100% in your browser.</p>
        <ToolBadges />
      </div>

      <div className="tool-shell"><ImageJoiner /></div>

      <Steps
        heading={<>Join images in <span className="grad">3 simple steps</span></>}
        steps={[
          { icon: "🖼️", title: "Add your images", text: "Drop two or more images, or click to choose — they stay on your device and are never uploaded." },
          { icon: "↔️", title: "Pick a direction", text: "Choose Horizontal to place them in a row, or Vertical to stack them in a column. Set a gap and background if you like." },
          { icon: "⬇️", title: "Download", text: "Preview the result live and download the combined image as a high-quality PNG." },
        ]}
      />

      <Features
        heading={<>Why use this <span className="grad">image joiner</span></>}
        items={[
          { icon: "↔️", title: "Horizontal & vertical", text: "Merge images in a clean row (matched height) or column (matched width) with one toggle." },
          { icon: "🎚️", title: "Gap & background", text: "Add spacing between images and pick any background colour — or keep it transparent." },
          { icon: "🔀", title: "Reorder & remove", text: "Arrange images in any order and drop the ones you don't want before joining." },
          { icon: "✨", title: "No quality loss", text: "Images are combined at full resolution and exported as a lossless PNG." },
          { icon: "🔒", title: "100% private", text: "Everything runs in your browser; your images are never uploaded to a server." },
          { icon: "🆓", title: "Free & unlimited", text: "No sign-up, no watermark — join as many images as you like." },
        ]}
      />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Merge images into one, your way</h2>
        <p>
          An image joiner combines several pictures into a single image — perfect for a
          before‑and‑after, a step‑by‑step screenshot strip, a product line‑up, a chat or receipt that
          spans two screenshots, or simply putting two photos together to share as one file. This tool
          does it in seconds, entirely in your browser, with no upload and no watermark.
        </p>
        <h3>Horizontal vs vertical</h3>
        <p>
          Choose <strong>horizontal</strong> to place images <strong>side by side</strong> in a row —
          the tool matches them to the same height so the seam is clean. Choose
          <strong> vertical</strong> to <strong>stack</strong> them in a column, matched to the same
          width — ideal for joining long screenshots top to bottom. Add a gap for breathing room and set
          a background colour (or transparent) to fill it.
        </p>
        <h3>Tips for a clean result</h3>
        <ul>
          <li>For a tidy row, use images of similar height; for a tidy column, similar width.</li>
          <li>Use a small gap (8–20&nbsp;px) and a white or transparent background to separate images neatly.</li>
          <li>Reorder with the arrows so the images read in the right sequence before you download.</li>
          <li>Need a grid or collage instead of a straight line? Use the{" "}
            <Link href="/photo-joiner/">Photo Joiner</Link>.</li>
        </ul>
        <h3>After you join</h3>
        <p>
          Once you have your combined image you can{" "}
          <Link href="/image-compressor/">compress it to an exact KB</Link>,{" "}
          <Link href="/image-resizer/">resize it to set dimensions</Link>,{" "}
          <Link href="/crop-image/">crop it</Link>, or turn images into a document with{" "}
          <Link href="/pdf/jpg-to-pdf/">JPG to PDF</Link>. Everything runs locally and free.
        </p>
      </div>

      <RelatedTools
        heading="Related image tools"
        hrefs={["/photo-joiner/", "/crop-image/", "/image-resizer/", "/image-compressor/"]}
      />

      <RecentTools current="/image-joiner/" />

      <Faq items={faqs} />
    </>
  );
}
