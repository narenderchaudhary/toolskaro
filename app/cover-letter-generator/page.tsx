import type { Metadata } from "next";
import CoverLetter from "./CoverLetter";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import ToolBadges from "@/app/components/ToolBadges";
import RelatedTools from "@/app/components/RelatedTools";
import RecentTools from "@/app/components/RecentTools";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Cover Letter Generator — Free Online (Download PDF)",
  description:
    "Write a professional cover letter for your job application and download it as a PDF. Free, no signup, and 100% in your browser.",
  alternates: { canonical: "/cover-letter-generator/" },
};

const steps = [
  { icon: "📝", title: "Fill the details", text: "Your name, the company, the role and your message." },
  { icon: "👀", title: "Live preview", text: "See your formatted letter update as you type." },
  { icon: "⬇️", title: "Save as PDF", text: "Click Download / Print and choose ‘Save as PDF’." },
];
const faqs = [
  { q: "How do I write a cover letter?", a: "Address the hiring manager, state the role you're applying for, give two or three short paragraphs on why you're a good fit, and close politely. This tool formats all of that for you — just fill in the fields." },
  { q: "How do I download it as PDF?", a: "Click Download / Print PDF and choose “Save as PDF” in your browser's print dialog." },
  { q: "Are my details uploaded?", a: "No. The letter is built entirely in your browser; nothing is uploaded or stored." },
  { q: "Is it free?", a: "Yes — free, no sign-up and no watermark." },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "SoftwareApplication", name: "Cover Letter Generator", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Free <span className="grad">cover letter generator</span></h1>
        <p className="lede">Write a clean, professional cover letter and download it as a PDF — free, no signup, in your browser.</p>
        <ToolBadges />
      </div>
      <div className="tool-shell"><CoverLetter /></div>
      <Steps heading={<>Write it in <span className="g">3 simple steps</span></>} steps={steps} />
      <Features
        heading={<>Why use this <span className="grad">cover letter generator</span></>}
        items={[
          { icon: "👀", title: "Live preview", text: "Watch your formatted letter update on the right as you fill in the fields." },
          { icon: "🧹", title: "Correct formatting", text: "Proper date, address block, greeting and sign-off — laid out the way recruiters expect." },
          { icon: "🆓", title: "No watermark", text: "Download a clean PDF free — no sign-up, no paywall, no logo stamped on it." },
          { icon: "🔒", title: "Private", text: "Your name, company and message stay in your browser and are never uploaded." },
          { icon: "🎯", title: "Tailored fast", text: "Swap the company and role in seconds to send a fresh letter for every application." },
          { icon: "🤝", title: "Pairs with your resume", text: "Match it to a resume from our Resume Maker for one consistent application." },
        ]}
      />
      <div className="card content no-print">
        <h2 style={{ marginTop: 0 }}>Make a strong first impression</h2>
        <p>
          A good cover letter introduces you, shows why you fit the role, and makes a recruiter want
          to read your resume. This generator gives you a clean, correctly formatted letter — just
          fill in your details and message, and a live preview shows exactly how the PDF will look.
        </p>
        <p>Keep it concise (three short paragraphs), tailor it to the company, and pair it with our Resume Maker. Everything runs privately in your browser.</p>
      </div>
      <RelatedTools
        heading="Related tools"
        hrefs={["/resume-maker/", "/marriage-biodata-maker/", "/invoice-generator/", "/email-signature-maker/"]}
      />
      <RecentTools current="/cover-letter-generator/" />
      <Faq items={faqs} />
    </>
  );
}
