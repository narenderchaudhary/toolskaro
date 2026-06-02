import type { Metadata } from "next";
import Tdee from "./Tdee";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "TDEE Calculator — Daily Calorie & Maintenance Needs",
  description:
    "Calculate your TDEE (Total Daily Energy Expenditure) and BMR from your age, height, weight, gender and activity level. See daily calories to lose, maintain or gain weight. Free.",
  alternates: { canonical: "/tdee-calculator/" },
};

const faqs = [
  { q: "What is TDEE?", a: "TDEE stands for Total Daily Energy Expenditure — the total number of calories your body burns in a day, including rest (BMR) plus everything you do: digestion, daily movement and exercise. It is the number of calories you need to maintain your current weight." },
  { q: "How is TDEE calculated?", a: "We first estimate your BMR (Basal Metabolic Rate) using the Mifflin–St Jeor equation from your weight, height, age and gender, then multiply it by an activity factor (1.2 for sedentary up to 1.9 for extra active). BMR × activity factor = TDEE." },
  { q: "How many calories should I eat to lose weight?", a: "To lose weight at a steady, sustainable pace, eat roughly 500 calories below your TDEE per day — about 0.45 kg (1 lb) of weight loss per week. The calculator shows this target automatically under 'Lose weight'." },
  { q: "Is the Mifflin–St Jeor formula accurate?", a: "Mifflin–St Jeor is the most widely recommended BMR formula and is accurate for most healthy adults. It is still an estimate — your real needs vary with muscle mass, genetics and health, so use the result as a starting point and adjust based on real-world results." },
  { q: "Is this TDEE calculator free and private?", a: "Yes. It is completely free with no sign-up, and the calculation runs entirely in your browser — none of your details are uploaded or stored anywhere." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "TDEE Calculator", url: "https://toolskaro.com/tdee-calculator/", description: "Free TDEE and BMR calculator with daily calorie targets to lose, maintain or gain weight.", applicationCategory: "HealthApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>TDEE <span className="grad">Calculator</span></h1>
        <p className="lede">Find your Total Daily Energy Expenditure and BMR, plus the exact daily calories to lose, maintain or gain weight — instant, free and private.</p>
      </div>

      <Tdee />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Know exactly how many calories you burn</h2>
        <p>
          Your <strong>TDEE (Total Daily Energy Expenditure)</strong> is the total number of calories
          your body uses in a day — your resting metabolism plus the energy spent on digestion, daily
          activity and workouts. It is the single most useful number for planning your diet: eat at
          your TDEE to maintain weight, below it to lose fat, or above it to build mass.
        </p>
        <p>
          This calculator estimates your <strong>BMR</strong> with the trusted Mifflin–St Jeor
          equation, then multiplies it by an activity factor based on how often you exercise. It then
          shows ready-made calorie targets for each goal, so you can start tracking straight away.
          Everything is calculated in your browser — your details are never uploaded or stored.
        </p>
      </div>

      <Faq items={faqs} />

      <CtaBand
        heading="More free calculators"
        text="Plan your health, studies and money with our other instant calculators."
        links={[["/age-calculator/", "Age Calculator"], ["/marks-percentage-calculator/", "Marks % & CGPA"], ["/percentage-calculator/", "Percentage"], ["/emi-calculator/", "EMI Calculator"]]}
      />
    </>
  );
}
