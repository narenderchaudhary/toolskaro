import type { Metadata } from "next";
import Link from "next/link";
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
  { q: "Is this resume ATS-friendly?", a: "Yes. The layout uses a clean single-column structure with standard section headings and real text — not images — so applicant tracking systems can read it. Avoid tables and graphics, and use plain job titles and dates so parsers map your details correctly." },
  { q: "How long should my resume be?", a: "For freshers and most professionals, one page is ideal; two pages are fine with several years of experience. Keep bullet points short, lead with action verbs, and quantify results where you can." },
  { q: "My resume PDF is too large to upload — what do I do?", a: "Browser-printed resumes are usually small, but if a portal sets a tight cap, run the file through our Compress Resume PDF tool to fit the limit without losing the crisp text." },
  { q: "Should I add a cover letter too?", a: "Many roles expect one. After building your resume, use our Cover Letter Generator to create a matching letter, then combine both into a single file with Merge PDF if the application asks for one document." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Resume Maker", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
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
          Unlike many builders, there&apos;s no watermark, no sign-up, and no paywall to download. Your
          information stays in your browser and is never uploaded. When you&apos;re done, save it as a PDF
          and attach it to job applications or print it.
        </p>

        <h3>Writing an ATS-friendly resume</h3>
        <p>
          Most employers screen applications through an applicant tracking system before a human
          reads them. This builder helps you pass that filter: it produces a single-column layout
          with standard headings and selectable text rather than images, so parsers extract your
          name, roles and dates reliably. Mirror keywords from the job posting in your summary and
          skills, spell out job titles plainly, and avoid graphics or columns that confuse machines.
          When the file is ready and you need it under a portal&apos;s size cap, shrink it with our{" "}
          <Link href="/compress-resume-pdf/">Compress Resume PDF</Link> tool.
        </p>

        <h3>Structuring sections that recruiters scan</h3>
        <p>
          Recruiters skim a resume in seconds, so lead with a tight summary, then experience in
          reverse-chronological order, followed by education and skills. Start each bullet with an
          action verb and quantify the result — &quot;cut load time by 30%&quot; beats &quot;worked
          on performance.&quot; Freshers can move education up and lean on projects and internships.
          Keep it to one page where possible, then pair it with a tailored letter from our{" "}
          <Link href="/cover-letter-generator/">Cover Letter Generator</Link>.
        </p>

        <h3>Privacy and finishing your application</h3>
        <p>
          Your resume holds personal contact details, so it matters that everything here is built
          locally and never uploaded. Once you have your PDF, you can{" "}
          <Link href="/pdf/merge/">merge it</Link> with a cover letter or certificates into one file
          if the application asks for a single document, and resize photos for the form with our{" "}
          <Link href="/image-compressor/">Image Compressor</Link>. That way your whole application
          stays private from draft to submission.
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
