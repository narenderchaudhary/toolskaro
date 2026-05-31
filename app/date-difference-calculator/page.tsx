import type { Metadata } from "next";
import DateDiff from "./DateDiff";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Date Difference Calculator — Days Between Two Dates (Free)",
  description:
    "Calculate the difference between two dates in years, months, days, weeks and total days. Free online date duration calculator — instant and private.",
  alternates: { canonical: "/date-difference-calculator/" },
};

const faqs = [
  { q: "How do I calculate the number of days between two dates?", a: "Select the start date and the end date. The tool instantly shows the difference in years, months and days, along with the total number of days and weeks." },
  { q: "Does it count leap years correctly?", a: "Yes. The calculation uses the actual calendar, so leap years and varying month lengths are handled accurately." },
  { q: "Can I use it for future dates?", a: "Yes — pick any two dates, past or future, to find the duration between them." },
  { q: "Is it free?", a: "Yes — free, no sign-up, and it runs entirely in your browser." },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "SoftwareApplication", name: "Date Difference Calculator", applicationCategory: "UtilitiesApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Date <span className="grad">difference calculator</span></h1>
        <p className="lede">Find the duration between two dates — in years, months, days, weeks and total days.</p>
      </div>
      <DateDiff />
      <div className="card content">
        <h2 style={{ marginTop: 0 }}>How long between two dates?</h2>
        <p>
          Whether you&apos;re counting days to an exam, the gap between two events, the length of a
          project, or your notice period, this calculator gives you the exact duration between any
          two dates — broken down into years, months and days, plus totals in months, weeks and days.
        </p>
        <p>It uses the real calendar, so leap years and month lengths are handled correctly, and everything runs privately in your browser.</p>
      </div>
      <Faq items={faqs} />
      <CtaBand heading="More free calculators &amp; tools" text="Quick answers, every time — all in your browser." links={[["/age-calculator/", "Age Calculator"], ["/percentage-calculator/", "Percentage"], ["/emi-calculator/", "EMI Calculator"], ["/word-counter/", "Word Counter"]]} />
    </>
  );
}
