import type { Metadata } from "next";
import Faq from "@/app/components/Faq";
import BiodataMaker from "./BiodataMaker";

export const metadata: Metadata = {
  title: "Marriage Biodata Maker — Free Online (Hindi & English) Download PDF",
  description:
    "Create a marriage biodata in Hindi or English with a traditional header and download it as a PDF. Free, no signup, and 100% in your browser.",
  alternates: { canonical: "/marriage-biodata-maker/" },
};

const faqs = [
  { q: "Can I make the biodata in Hindi?", a: "Yes — switch the labels to हिंदी, and you can type your details in Hindi or English. A traditional header line is included by default." },
  { q: "How do I save it?", a: "Click Download / Print PDF and choose “Save as PDF” in your browser's print dialog." },
  { q: "What details should a marriage biodata include?", a: "Commonly: name, date and place of birth, height, religion and caste, gotra, education, occupation, income, parents’ names, siblings, and contact details. Fill only the fields you wish to share." },
  { q: "Can I add a religious header like ‘Om’ or ‘Shri Ganeshay Namah’?", a: "Yes. The header line is editable — keep the default, change it, or clear it as you prefer." },
  { q: "Is it free and private?", a: "Completely free with no watermark, and your details are processed entirely in your browser — nothing is uploaded." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Marriage Biodata Maker", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1>Marriage Biodata Maker</h1>
      <p className="lede">Create a clean marriage biodata in Hindi or English and download it as a PDF — free and entirely in your browser.</p>
      <BiodataMaker />
      <div className="ad-slot no-print">Ad placement (AdSense)</div>

      <div className="card content no-print">
        <h2 style={{ marginTop: 0 }}>How to make a marriage biodata</h2>
        <ol className="steps">
          <li>Choose English or हिंदी labels.</li>
          <li>Keep or edit the header line (for example, ॥ श्री गणेशाय नमः ॥).</li>
          <li>Fill in your personal, education, career and family details.</li>
          <li>Click <strong>Download / Print PDF</strong> and choose “Save as PDF”.</li>
        </ol>
      </div>

      <div className="card content no-print">
        <h2 style={{ marginTop: 0 }}>A simple, elegant biodata for marriage</h2>
        <p>
          A marriage biodata is the one-page profile families share when looking for a match. This
          maker helps you create a neat, respectful biodata in minutes — with a traditional header,
          your personal and family details, and a clean layout that prints beautifully to PDF.
        </p>
        <p>
          You can switch the field labels between Hindi and English and type your information in
          either language. Only the details you enter appear, so you stay in control of what to
          share. Everything is generated in your browser, keeping your personal information private.
        </p>
        <h3>What to include</h3>
        <ul>
          <li>Personal: name, date/time/place of birth, height, complexion.</li>
          <li>Background: religion, caste, gotra.</li>
          <li>Career: education, occupation, annual income.</li>
          <li>Family: parents’ names, siblings, and contact details.</li>
        </ul>
      </div>

      <Faq items={faqs} />
    </>
  );
}
