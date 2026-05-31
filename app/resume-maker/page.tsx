import type { Metadata } from "next";
import ResumeMaker from "./ResumeMaker";

export const metadata: Metadata = {
  title: "Resume / CV Maker — Free Online Resume Builder (Download PDF)",
  description:
    "Build a clean, professional resume in minutes and download it as a PDF. Free, no signup, and 100% in your browser — your details are never uploaded.",
  alternates: { canonical: "/resume-maker/" },
};

const faqs = [
  { q: "How do I download my resume as PDF?", a: "Fill in your details, click Download / Print PDF, and choose “Save as PDF” in your browser's print dialog." },
  { q: "Is it really free?", a: "Yes — completely free with no watermark and no signup. Everything runs in your browser." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Resume Maker", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1>Resume / CV Maker</h1>
      <p className="lede">Build a clean, professional resume and download it as a PDF — free, no signup, and entirely in your browser.</p>
      <ResumeMaker />
      <div className="ad-slot no-print">Ad placement (AdSense)</div>
      <div className="card faq">
        <h2 style={{ marginTop: 0 }}>FAQ</h2>
        <dl>{faqs.map((f) => (<div key={f.q}><dt>{f.q}</dt><dd>{f.a}</dd></div>))}</dl>
      </div>
    </>
  );
}
