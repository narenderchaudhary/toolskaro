import type { Metadata } from "next";
import Marks from "./Marks";
import Faq from "@/app/components/Faq";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import ToolBadges from "@/app/components/ToolBadges";
import RelatedTools from "@/app/components/RelatedTools";
import RecentTools from "@/app/components/RecentTools";

export const metadata: Metadata = {
  title: "Marks Percentage & CGPA Calculator — Free",
  description:
    "Calculate your marks percentage, convert CGPA to percentage, and percentage to CGPA. Free online calculator for students and professionals.",
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
      { "@type": "SoftwareApplication", name: "Marks Percentage & CGPA Calculator", applicationCategory: "EducationalApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Marks % &amp; <span className="grad">CGPA Calculator</span></h1>
        <p className="lede">Find your percentage from marks, convert CGPA to percentage, and percentage to CGPA — all in one place.</p>
        <ToolBadges />
      </div>

      <div className="tool-shell"><Marks /></div>

      <Steps
        heading={<>Find your result in <span className="grad">3 simple steps</span></>}
        steps={[
          { icon: "🎓", title: "Choose what to convert", text: "Marks to percentage, CGPA to percentage, or percentage back to CGPA." },
          { icon: "📝", title: "Enter your numbers", text: "Type your marks and total, or your CGPA — and set the multiplier if your board differs from CBSE's 9.5." },
          { icon: "✅", title: "Get your answer", text: "Your percentage or CGPA appears instantly, ready for forms and applications." },
        ]}
      />

      <Features
        heading={<>Why use this <span className="grad">marks &amp; CGPA calculator</span></>}
        items={[
          { icon: "🎓", title: "Built for students", text: "Marks %, CGPA to %, and % to CGPA — the three conversions you need for forms and admissions." },
          { icon: "⚙️", title: "Adjustable multiplier", text: "Defaults to the CBSE 9.5 factor but lets you set your own board or university factor." },
          { icon: "⚡", title: "Instant results", text: "Answers update as you type — no submit button, no waiting." },
          { icon: "🎯", title: "Accurate conversions", text: "Clean math you can trust for eligibility checks and application forms." },
          { icon: "🔒", title: "100% private", text: "Everything runs in your browser; your marks are never uploaded or stored." },
          { icon: "🆓", title: "Free & unlimited", text: "No sign-up, no limits — convert as many times as you like." },
        ]}
      />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Marks, percentage and CGPA — sorted</h2>
        <p>
          Students and professionals constantly need to convert between marks, percentage and
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

      <RelatedTools
        heading="Related calculators"
        hrefs={["/percentage-calculator/", "/emi-calculator/", "/sip-calculator/", "/interest-calculator/"]}
      />

      <RecentTools current="/marks-percentage-calculator/" />

      <Faq items={faqs} />
    </>
  );
}
