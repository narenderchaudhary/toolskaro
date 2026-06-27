import type { Metadata } from "next";
import RotatePdf from "./RotatePdf";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Rotate PDF — Rotate PDF Pages 90°, 180°, 270° Online (Free)",
  description:
    "Rotate the pages of a PDF online and save the change permanently. Free, no upload, 100% in your browser.",
  alternates: { canonical: "/pdf/rotate/" },
};

const steps = [
  { icon: "🔄", title: "Choose angle", text: "90°, 180° or 270° clockwise." },
  { icon: "📁", title: "Upload PDF", text: "Drop or choose your PDF." },
  { icon: "⬇️", title: "Download", text: "Save the rotated PDF." },
];
const features = [
  { icon: "🔄", title: "Any angle", text: "Rotate all pages 90°, 180° or 270° clockwise." },
  { icon: "💾", title: "Saved permanently", text: "The rotation is written into the file, not just on screen." },
  { icon: "🔒", title: "Private", text: "Runs in your browser; your PDF is never uploaded." },
  { icon: "⚡", title: "Instant", text: "Rotates as soon as you drop the file." },
  { icon: "🆓", title: "Free", text: "No sign-up, no watermark, no limits." },
  { icon: "🧩", title: "Works with tools", text: "Combine with split, merge and compress." },
];
const faqs = [
  { q: "How do I rotate a PDF and keep it rotated?", a: "Pick the angle, upload your PDF, and download. The rotation is saved into the file itself, so it stays rotated everywhere you open it." },
  { q: "Can I rotate sideways scans to upright?", a: "Yes. Choose 90° or 270° to turn a sideways scan upright, or 180° to flip an upside-down page." },
  { q: "Are my files uploaded?", a: "No. Rotation happens in your browser, so your PDF never leaves your device." },
  { q: "Is it free?", a: "Yes — free, no sign-up and no watermark." },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "SoftwareApplication", name: "Rotate PDF", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Rotate <span className="grad">PDF</span></h1>
        <p className="lede">Rotate every page of your PDF and save it permanently — free, no upload, in your browser.</p>
      </div>
      <RotatePdf />
      <Steps heading={<>Rotate in <span className="g">3 simple steps</span></>} steps={steps} />
      <Features heading={<>Why use this <span className="g">PDF rotator</span></>} items={features} />
      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Fix sideways and upside-down pages</h2>
        <p>
          Scanned documents often come out rotated the wrong way. This tool turns every page of your
          PDF by 90°, 180° or 270° and writes the change into the file, so it opens correctly on any
          device — unlike just rotating the view, which isn&apos;t saved.
        </p>
        <p>It works entirely in your browser, keeping your documents private.</p>
      </div>
      <Faq items={faqs} />
      <CtaBand heading="All your PDF tools in one place" text="Rotate, split, merge and compress — free and private." links={[["/pdf/split/", "Split PDF"], ["/pdf/merge/", "Merge PDF"], ["/pdf/delete-pages/", "Delete Pages"], ["/pdf/page-numbers/", "Page Numbers"]]} />
    </>
  );
}
