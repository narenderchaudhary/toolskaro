import type { Metadata } from "next";
import AgeCalc from "./AgeCalc";

export const metadata: Metadata = {
  title: "Age Calculator — Find Your Exact Age in Years, Months & Days",
  description:
    "Free online age calculator. Enter your date of birth to find your exact age in years, months, days, weeks and total days — plus days to your next birthday. Useful for exam eligibility.",
  alternates: { canonical: "/age-calculator/" },
};

const faqs = [
  {
    q: "How do I calculate my age for a government exam?",
    a: "Enter your date of birth and set the “age as on” date to the cut-off date mentioned in the official notification. The result shows your exact age in years, months and days on that date.",
  },
  {
    q: "Is this age calculator accurate?",
    a: "Yes. It accounts for leap years and the actual number of days in each month, so the years/months/days breakdown is exact.",
  },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Age Calculator",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Web",
        offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1>Age Calculator</h1>
      <p className="lede">
        Find your exact age in years, months and days — and check your age as on any exam cut-off
        date.
      </p>

      <AgeCalc />

      <div className="ad-slot">Ad placement (AdSense)</div>

      <div className="card faq">
        <h2 style={{ marginTop: 0 }}>FAQ</h2>
        <dl>
          {faqs.map((f) => (
            <div key={f.q}>
              <dt>{f.q}</dt>
              <dd>{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
}
