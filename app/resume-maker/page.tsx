import type { Metadata } from "next";
import Faq from "@/app/components/Faq";
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
  { q: "Are my personal details uploaded?", a: "No. The resume is built entirely in your browser, so your name, contact details and experience never leave your device." },
  { q: "Can I add multiple jobs and qualifications?", a: "Yes. Use the Add button under Experience and Education to include as many entries as you need, and remove any you don’t." },
  { q: "Will it work for a fresher with no experience?", a: "Yes. Focus on your education, skills and a strong summary; you can leave the experience section minimal or list internships and projects there." },
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

      <div className="card content no-print">
        <h2 style={{ marginTop: 0 }}>How to make a resume</h2>
        <ol className="steps">
          <li>Fill in your name, title and contact line.</li>
          <li>Write a short summary, then add your experience and education entries.</li>
          <li>List your key skills, separated by commas.</li>
          <li>Click <strong>Download / Print PDF</strong> and choose “Save as PDF”.</li>
        </ol>
      </div>

      <div className="card content no-print">
        <h2 style={{ marginTop: 0 }}>A free, no-watermark resume builder</h2>
        <p>
          A clear, well-structured resume makes a strong first impression with employers. This maker
          gives you a clean, recruiter-friendly layout with sections for your summary, experience,
          education and skills — no design skills needed. As you type, a live preview shows exactly
          how your PDF will look.
        </p>
        <p>
          Unlike many builders, there’s no watermark, no sign-up, and no paywall to download. Your
          information stays in your browser and is never uploaded. When you’re done, save it as a
          PDF and attach it to job applications or print it.
        </p>
        <h3>Tips for a strong resume</h3>
        <ul>
          <li>Keep it to one page where possible, with a focused summary at the top.</li>
          <li>Lead each experience point with what you achieved, not just duties.</li>
          <li>Match your skills to the job you’re applying for.</li>
          <li>Proofread carefully — small errors stand out to recruiters.</li>
        </ul>
      </div>

      <Faq items={faqs} />
    </>
  );
}
