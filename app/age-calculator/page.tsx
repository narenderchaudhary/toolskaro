import type { Metadata } from "next";
import AgeCalc from "./AgeCalc";

export const metadata: Metadata = {
  title: "Age Calculator — Find Your Exact Age in Years, Months & Days",
  description:
    "Free online age calculator. Enter your date of birth to find your exact age in years, months, days, weeks and total days — plus days to your next birthday. Useful for exam eligibility.",
  alternates: { canonical: "/age-calculator/" },
};

const faqs = [
  { q: "How do I calculate my age for a government exam?", a: "Enter your date of birth and set the “age as on” date to the cut-off date mentioned in the official notification. The result shows your exact age in years, months and days on that date." },
  { q: "Is this age calculator accurate?", a: "Yes. It accounts for leap years and the actual number of days in each month, so the years/months/days breakdown is exact." },
  { q: "What is an age cut-off date?", a: "Recruitment notifications fix a reference date (the cut-off) on which your age must fall within the eligible range. Set that date in the ‘age as on’ field to check your eligibility." },
  { q: "Can it tell me days until my next birthday?", a: "Yes — along with your age, it shows exactly how many days remain until your next birthday." },
  { q: "Is my data saved anywhere?", a: "No. The calculation happens in your browser; no dates are stored or sent to any server." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Age Calculator", applicationCategory: "UtilitiesApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1>Age Calculator</h1>
      <p className="lede">Find your exact age in years, months and days — and check your age as on any exam cut-off date.</p>
      <AgeCalc />
      <div className="ad-slot">Ad placement (AdSense)</div>

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>How to use the age calculator</h2>
        <ol className="steps">
          <li>Select your date of birth.</li>
          <li>Set the “age as on” date — today’s date by default, or an exam’s cut-off date.</li>
          <li>Instantly see your age in years, months, days, weeks and total days.</li>
          <li>Note the countdown to your next birthday.</li>
        </ol>
      </div>

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

      <div className="card faq">
        <h2 style={{ marginTop: 0 }}>Frequently asked questions</h2>
        <dl>{faqs.map((f) => (<div key={f.q}><dt>{f.q}</dt><dd>{f.a}</dd></div>))}</dl>
      </div>
    </>
  );
}
