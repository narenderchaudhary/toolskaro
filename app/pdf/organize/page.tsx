import type { Metadata } from "next";
import Organize from "./Organize";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import Faq from "@/app/components/Faq";
import ToolBadges from "@/app/components/ToolBadges";
import RelatedTools from "@/app/components/RelatedTools";
import RecentTools from "@/app/components/RecentTools";

export const metadata: Metadata = {
  title: "Organize PDF — Reorder, Rotate & Delete Pages Online Free",
  description:
    "Reorder, rotate and delete PDF pages with thumbnails, then download. Free organize-PDF tool, no upload, 100% in your browser.",
  alternates: { canonical: "/pdf/organize/" },
};

const steps = [
  { icon: "📁", title: "Upload PDF", text: "See a thumbnail of every page." },
  { icon: "🔀", title: "Reorder & edit", text: "Move, rotate or delete pages however you like." },
  { icon: "⬇️", title: "Save", text: "Download the reorganised PDF." },
];
const features = [
  { icon: "🔀", title: "Reorder pages", text: "Move any page left or right to change the sequence." },
  { icon: "⟳", title: "Rotate pages", text: "Turn individual pages upright, 90° at a time." },
  { icon: "🗑️", title: "Delete pages", text: "Remove pages you don’t need." },
  { icon: "🖼️", title: "Visual thumbnails", text: "See every page so you know exactly what you’re arranging." },
  { icon: "🔒", title: "Private", text: "Runs in your browser; your PDF is never uploaded." },
  { icon: "🆓", title: "Free", text: "No sign-up, no watermark, no limits." },
];
const faqs = [
  { q: "How do I reorder pages in a PDF?", a: "Upload your PDF to see thumbnails of every page, then use the ← and → buttons on each page to move it. When the order is right, click Save PDF." },
  { q: "Can I rotate or delete individual pages?", a: "Yes. Each page thumbnail has a rotate (⟳) and delete (✕) button, so you can fix orientation and remove pages before saving." },
  { q: "Are my files uploaded?", a: "No. Everything happens in your browser, so your PDF never leaves your device." },
  { q: "Is it free?", a: "Yes — free, no sign-up and no watermark." },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "SoftwareApplication", name: "Organize PDF", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Organize <span className="grad">PDF</span></h1>
        <p className="lede">Reorder, rotate and delete pages with visual thumbnails, then download — free, no upload, in your browser.</p>
        <ToolBadges />
      </div>
      <div className="tool-shell"><Organize /></div>
      <Steps heading={<>Organize in <span className="g">3 simple steps</span></>} steps={steps} />
      <Features heading={<>Why use this <span className="g">organize tool</span></>} items={features} />
      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Rearrange your PDF exactly how you want</h2>
        <p>
          Scanned pages out of order? A page upside down, or one you want to drop? This tool shows a
          thumbnail of every page so you can reorder, rotate and delete pages visually, then save a
          clean, correctly arranged PDF.
        </p>
        <p>It runs entirely in your browser, keeping your document private.</p>
      </div>
      <RelatedTools heading="Related PDF tools" hrefs={["/pdf/merge/", "/pdf/split/", "/pdf/compress/", "/pdf/watermark/"]} />
      <RecentTools current="/pdf/organize/" />
      <Faq items={faqs} />
    </>
  );
}
