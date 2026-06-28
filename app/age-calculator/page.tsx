import type { Metadata } from "next";
import AgeCalc from "./AgeCalc";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import ToolBadges from "@/app/components/ToolBadges";
import RelatedTools from "@/app/components/RelatedTools";
import RecentTools from "@/app/components/RecentTools";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Age Calculator — Exact Age in Years, Months, Days",
  description:
    "Free online age calculator. Enter your date of birth to find your exact age in years, months, days, weeks and total days — plus days to your next birthday. Useful for exam eligibility.",
  alternates: { canonical: "/age-calculator/" },
};

const steps = [
  { icon: "🎂", title: "Enter date of birth", text: "Select your date of birth." },
  { icon: "📅", title: "Set the ‘as on’ date", text: "Use today or an exam's cut-off date." },
  { icon: "✅", title: "See your age", text: "Get exact years, months, days, weeks and total days." },
];

const features = [
  { icon: "🎯", title: "Exact breakdown", text: "Years, months and days — accounting for leap years and real month lengths." },
  { icon: "📅", title: "Cut-off date support", text: "Check your age on any reference date to confirm exam eligibility." },
  { icon: "🧮", title: "More units", text: "Also shows total months, weeks and days, plus your next birthday countdown." },
  { icon: "⚡", title: "Instant", text: "Results update the moment you enter the dates." },
  { icon: "🔒", title: "Private", text: "Calculated in your browser; no dates are stored or sent anywhere." },
  { icon: "🆓", title: "Free", text: "No sign-up, no limits — use it as often as you like." },
];

const faqs = [
  { q: "How do I calculate my age as on a specific date?", a: "Enter your date of birth and set the “age as on” date to the cut-off date you need to check against. The result shows your exact age in years, months and days on that date." },
  { q: "Is this age calculator accurate?", a: "Yes. It accounts for leap years and the actual number of days in each month, so the years/months/days breakdown is exact." },
  { q: "What is an age cut-off date?", a: "Recruitment notifications fix a reference date (the cut-off) on which your age must fall within the eligible range. Set that date in the ‘age as on’ field to check your eligibility." },
  { q: "Can it tell me days until my next birthday?", a: "Yes — along with your age, it shows exactly how many days remain until your next birthday." },
  { q: "Is my data saved anywhere?", a: "No. The calculation happens in your browser; no dates are stored or sent to any server." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Age Calculator", applicationCategory: "UtilitiesApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Find your <span className="grad">exact age</span></h1>
        <p className="lede">Find your exact age in years, months and days — and check your age as on any exam cut-off date.</p>
        <ToolBadges />
      </div>

      <div className="tool-shell"><AgeCalc /></div>

      <Steps heading={<>Calculate in <span className="g">3 simple steps</span></>} steps={steps} />
      <Features heading={<>Why use this <span className="g">age calculator</span></>} items={features} />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Check exam eligibility in seconds</h2>
        <p>
          Almost every government recruitment has minimum and maximum age limits measured on a
          specific cut-off date. Working that out by hand is error-prone, and a mistake can mean
          applying for a post you aren’t eligible for. This calculator gives you your exact age on
          any chosen date, so you can confirm eligibility against the notification with confidence.
        </p>
        <p>
          Beyond exams, it’s handy for forms, interviews, and everyday curiosity — finding your age
          in days or weeks, or counting down to a birthday. It runs entirely in your browser and
          stores nothing.
        </p>
      </div>

      <RelatedTools
        heading="Related tools"
        hrefs={["/date-difference-calculator/", "/typing-test/", "/word-counter/", "/qr-code-generator/"]}
      />

      <RecentTools current="/age-calculator/" />

      <Faq items={faqs} />
    </>
  );
}
