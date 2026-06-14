import type { Metadata } from "next";
import CompressPdf from "@/app/pdf/compress/CompressPdf";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Compress Resume PDF — Free, No Watermark, No Upload",
  description:
    "Compress your resume PDF for free so it fits a job-portal or email size limit. Shrink a CV under 1 MB — no watermark, no sign-up, 100% in your browser, files never uploaded.",
  alternates: { canonical: "/compress-resume-pdf/" },
};

const faqs = [
  { q: "Why is my resume PDF too large?", a: "Usually because it contains a high-resolution photo, a graphic header, or was exported at full quality. Many job portals and email systems cap attachments (often around 1–2 MB), so a heavy CV gets rejected." },
  { q: "How do I compress my resume PDF?", a: "Upload your resume above and the tool reduces its file size while keeping the text crisp, then lets you download it. It runs in your browser, so your CV is never uploaded." },
  { q: "Will the text stay sharp and selectable?", a: "Text-based resumes stay clearly readable after compression. If your resume is a scan or image, it remains legible but the text may not be selectable — keep an editable copy too." },
  { q: "What size should a resume PDF be?", a: "Aim for under 1–2 MB for most job portals and ATS systems; smaller is safer for email. This tool gets a typical resume comfortably under those limits." },
  { q: "Is it free with no watermark?", a: "Yes — completely free, no watermark, no sign-up and no email." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Compress Resume PDF", url: "https://toolskaro.com/compress-resume-pdf/", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Compress your <span className="grad">resume PDF</span></h1>
        <p className="lede">Shrink a CV that&apos;s too big for a job portal or email — free, no watermark, no sign-up, and 100% in your browser.</p>
      </div>

      <CompressPdf />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Make your resume fit any upload limit</h2>
        <p>
          A resume with a photo or a designed header can easily exceed a job portal&apos;s attachment
          limit, and an oversized file is a frustrating reason to be rejected before anyone reads your CV.
          This tool compresses your resume PDF so it slips under the limit while staying clean and
          readable.
        </p>
        <p>
          Everything runs in your browser, so your personal details never leave your device. Building a
          resume from scratch? Use our free <a href="/resume-maker/">Resume Maker</a>, add a{" "}
          <a href="/cover-letter-generator/">cover letter</a>, or{" "}
          <a href="/pdf/merge/">merge your resume and cover letter</a> into one PDF.
        </p>
      </div>

      <Faq items={faqs} />

      <CtaBand heading="Build your whole application" text="Resume, cover letter and compressed PDFs — free and private." links={[["/resume-maker/", "Resume Maker"], ["/cover-letter-generator/", "Cover Letter"], ["/pdf/merge/", "Merge PDF"], ["/pdf/compress/", "Compress PDF"]]} />
    </>
  );
}
