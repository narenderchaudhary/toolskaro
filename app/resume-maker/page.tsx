import type { Metadata } from "next";
import ResumeMaker from "./ResumeMaker";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Resume / CV Maker — Free Online (PDF)",
  description:
    "Build a clean, professional resume in minutes and download it as a PDF. Free, no signup, and 100% in your browser — your details are never uploaded.",
  alternates: { canonical: "/resume-maker/" },
};

const steps = [
  { icon: "📝", title: "Fill your details", text: "Add your name, summary, experience, education and skills." },
  { icon: "👀", title: "Live preview", text: "See exactly how your resume looks as you type." },
  { icon: "⬇️", title: "Save as PDF", text: "Click Download / Print and choose ‘Save as PDF’." },
];

const features = [
  { icon: "🧹", title: "Clean layout", text: "A recruiter-friendly design with no clutter — no design skills needed." },
  { icon: "👀", title: "Live preview", text: "Edit on the left, see the finished resume update instantly." },
  { icon: "🆓", title: "No watermark", text: "Download a clean PDF free — no sign-up, no paywall, no watermark." },
  { icon: "➕", title: "Flexible sections", text: "Add as many experience and education entries as you need." },
  { icon: "🔒", title: "Private", text: "Your details stay in your browser and are never uploaded." },
  { icon: "🎓", title: "Freshers welcome", text: "Works great even with no experience — lead with education and skills." },
];

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
      <div className="tool-hero">
        <h1>Free <span className="grad">resume / CV maker</span></h1>
        <p className="lede">Build a clean, professional resume and download it as a PDF — free, no signup, and entirely in your browser.</p>
      </div>

      <ResumeMaker />

      <Steps heading={<>Build it in <span className="g">3 simple steps</span></>} steps={steps} />
      <Features heading={<>Why use this <span className="g">resume builder</span></>} items={features} />

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
          information stays in your browser and is never uploaded. When you’re done, save it as a PDF
          and attach it to job applications or print it.
        </p>
      </div>

      <Faq items={faqs} />

      <CtaBand
        heading="Land the job — get fully prepared"
        text="Resume, typing practice and application photos, all free and private."
        links={[["/typing-test/", "Typing Test"], ["/passport-photo-maker/", "Passport Photo"], ["/image-compressor/", "Image Compressor"], ["/pdf/merge/", "Merge PDF"]]}
      />
    </>
  );
}
