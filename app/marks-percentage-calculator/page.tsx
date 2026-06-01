import type { Metadata } from "next";
import Marks from "./Marks";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Marks Percentage & CGPA Calculator — Free",
  description:
    "Calculate your marks percentage, convert CGPA to percentage, and percentage to CGPA. Free online calculator for students and exam applicants.",
  alternates: { canonical: "/marks-percentage-calculator/" },
};

const faqs = [
  { q: "How do I calculate percentage from marks?", a: "Divide the marks obtained by the total marks and multiply by 100. For example, 425 out of 500 = 425 ÷ 500 × 100 = 85%." },
  { q: "How do I convert CGPA to percentage?", a: "Multiply your CGPA by a factor. CBSE uses 9.5 (Percentage = CGPA × 9.5). Some universities use a different factor — check yours and change the multiplier above." },
  { q: "How do I convert percentage to CGPA?", a: "Divide your percentage by the same factor. With the CBSE factor, CGPA = Percentage ÷ 9.5." },
  { q: "Is it free?", a: "Yes — free, no sign-up, and it runs entirely in your browser." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Marks Percentage & CGPA Calculator", applicationCategory: "EducationalApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Marks % &amp; <span className="grad">CGPA Calculator</span></h1>
        <p className="lede">Find your percentage from marks, convert CGPA to percentage, and percentage to CGPA — all in one place.</p>
      </div>

      <Marks />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Marks, percentage and CGPA — sorted</h2>
        <p>
          Students and exam applicants constantly need to convert between marks, percentage and
          CGPA — for application forms, eligibility checks and admissions. This tool does all three:
          calculate your percentage from marks obtained, convert a CGPA to a percentage, and convert
          a percentage back to CGPA.
        </p>
        <p>
          The CBSE conversion uses a factor of 9.5 (Percentage = CGPA × 9.5), but you can change the
          multiplier if your board or university uses a different one. Everything runs in your
          browser, with nothing stored.
        </p>
      </div>

      <Faq items={faqs} />

      <CtaBand
        heading="More free tools for students"
        text="Calculate, write and prepare — all free and private."
        links={[["/percentage-calculator/", "Percentage Calculator"], ["/age-calculator/", "Age Calculator"], ["/resume-maker/", "Resume Maker"], ["/typing-test/", "Typing Test"]]}
      />
    </>
  );
}
