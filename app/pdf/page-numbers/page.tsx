import type { Metadata } from "next";
import PageNumbers from "./PageNumbers";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Add Page Numbers to PDF — Free Online (No Upload)",
  description:
    "Add page numbers to your PDF online. Choose the position and starting number, then download. Free, no upload, 100% in your browser.",
  alternates: { canonical: "/pdf/page-numbers/" },
};

const steps = [
  { icon: "📍", title: "Pick position", text: "Bottom centre, bottom right or top right." },
  { icon: "📁", title: "Upload PDF", text: "Drop or choose your PDF." },
  { icon: "⬇️", title: "Download", text: "Save the numbered PDF." },
];
const features = [
  { icon: "🔢", title: "Auto numbering", text: "Adds sequential page numbers to every page." },
  { icon: "📍", title: "Choose position", text: "Place numbers bottom-centre, bottom-right or top-right." },
  { icon: "▶️", title: "Custom start", text: "Begin numbering from any number you like." },
  { icon: "🔒", title: "Private", text: "Runs in your browser; your PDF is never uploaded." },
  { icon: "🆓", title: "Free", text: "No sign-up, no watermark, no limits." },
  { icon: "🧩", title: "Works with tools", text: "Merge or split first, then number the final PDF." },
];
const faqs = [
  { q: "How do I add page numbers to a PDF?", a: "Choose a position and starting number, then upload your PDF. The tool prints sequential numbers on every page and gives you the file to download." },
  { q: "Can I start from a number other than 1?", a: "Yes — set any starting number, useful when your document continues from another file." },
  { q: "Are my files uploaded?", a: "No. Page numbers are added in your browser, so your PDF stays on your device." },
  { q: "Is it free?", a: "Yes — free, no sign-up and no watermark." },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "SoftwareApplication", name: "Add Page Numbers to PDF", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Add page numbers to <span className="grad">PDF</span></h1>
        <p className="lede">Number the pages of your PDF, choose the position and starting number — free, no upload, in your browser.</p>
      </div>
      <PageNumbers />
      <Steps heading={<>Number in <span className="g">3 simple steps</span></>} steps={steps} />
      <Features heading={<>Why use this <span className="g">page numbering</span> tool</>} items={features} />
      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Professional, numbered documents</h2>
        <p>
          Page numbers make reports, assignments, projects and legal documents easier to navigate
          and look more professional. This tool prints clean sequential numbers on every page in the
          position you choose, starting from any number.
        </p>
        <p>It runs entirely in your browser, so your document is never uploaded.</p>
      </div>
      <Faq items={faqs} />
      <CtaBand heading="All your PDF tools in one place" text="Number, merge, split and compress — free and private." links={[["/pdf/merge/", "Merge PDF"], ["/pdf/split/", "Split PDF"], ["/pdf/rotate/", "Rotate PDF"], ["/pdf/compress/", "Compress PDF"]]} />
    </>
  );
}
