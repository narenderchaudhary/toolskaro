import type { Metadata } from "next";
import BiodataMaker from "./BiodataMaker";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Marriage Biodata Maker — Hindi & English, Free",
  description:
    "Create a marriage biodata in Hindi or English with a traditional header and download it as a PDF. Free, no signup, and 100% in your browser.",
  alternates: { canonical: "/marriage-biodata-maker/" },
};

const steps = [
  { icon: "🌐", title: "Choose language", text: "Switch labels between English and हिंदी." },
  { icon: "📝", title: "Fill the details", text: "Add personal, family and contact information." },
  { icon: "⬇️", title: "Save as PDF", text: "Click Download / Print and choose ‘Save as PDF’." },
];

const features = [
  { icon: "🕉️", title: "Traditional header", text: "Includes an editable header line such as ॥ श्री गणेशाय नमः ॥." },
  { icon: "🌐", title: "Hindi & English", text: "Switch field labels and type your details in either language." },
  { icon: "🧾", title: "Clean layout", text: "A neat, respectful one-page format that prints beautifully." },
  { icon: "🙊", title: "Share only what you want", text: "Only the fields you fill in appear on the biodata." },
  { icon: "🔒", title: "Private", text: "Generated in your browser — your details are never uploaded." },
  { icon: "🆓", title: "Free", text: "No watermark and no sign-up." },
];

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
      <div className="tool-hero">
        <h1>Free <span className="grad">marriage biodata maker</span></h1>
        <p className="lede">Create a clean marriage biodata in Hindi or English and download it as a PDF — free and entirely in your browser.</p>
      </div>

      <BiodataMaker />

      <Steps heading={<>Create it in <span className="g">3 simple steps</span></>} steps={steps} />
      <Features heading={<>Why use this <span className="g">biodata maker</span></>} items={features} />

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
      </div>

      <Faq items={faqs} />

      <CtaBand
        heading="More free tools you’ll find handy"
        text="From documents to photos — everything runs privately in your browser."
        links={[["/passport-photo-maker/", "Passport Photo"], ["/image-compressor/", "Image Compressor"], ["/resume-maker/", "Resume Maker"], ["/pdf/jpg-to-pdf/", "JPG to PDF"]]}
      />
    </>
  );
}
