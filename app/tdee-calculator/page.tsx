import type { Metadata } from "next";
import Tdee from "./Tdee";
import Faq from "@/app/components/Faq";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import ToolBadges from "@/app/components/ToolBadges";
import RelatedTools from "@/app/components/RelatedTools";
import RecentTools from "@/app/components/RecentTools";

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
      { "@type": "SoftwareApplication", name: "TDEE Calculator", url: "https://toolskaro.com/tdee-calculator/", description: "Free TDEE and BMR calculator with daily calorie targets to lose, maintain or gain weight.", applicationCategory: "HealthApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>TDEE <span className="grad">Calculator</span></h1>
        <p className="lede">Find your Total Daily Energy Expenditure and BMR, plus the exact daily calories to lose, maintain or gain weight — instant, free and private.</p>
        <ToolBadges />
      </div>

      <div className="tool-shell"><Tdee /></div>

      <Steps
        heading={<>Find your calories in <span className="grad">3 simple steps</span></>}
        steps={[
          { icon: "📋", title: "Enter your details", text: "Add your age, gender, height and weight so we can estimate your BMR." },
          { icon: "🏃", title: "Pick your activity level", text: "Choose how active you are, from sedentary to extra active, to set your activity factor." },
          { icon: "🔥", title: "See your targets", text: "Get your TDEE plus ready-made calorie goals to lose, maintain or gain weight." },
        ]}
      />

      <Features
        heading={<>Why use this <span className="grad">TDEE calculator</span></>}
        items={[
          { icon: "🧪", title: "Trusted formula", text: "Uses the Mifflin–St Jeor equation, the most recommended BMR formula for healthy adults." },
          { icon: "🎯", title: "Goal-based targets", text: "See exact daily calories for losing fat, maintaining, or building mass — not just one number." },
          { icon: "🏃", title: "Activity-aware", text: "Adjusts your burn for real life, from desk-bound to highly active." },
          { icon: "⚡", title: "Instant results", text: "Your BMR and TDEE appear the moment you fill in your details." },
          { icon: "🔒", title: "100% private", text: "Calculated in your browser; your body details are never uploaded or stored." },
          { icon: "🆓", title: "Free & unlimited", text: "No sign-up, no limits — recalculate any time your weight or activity changes." },
        ]}
      />

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

      <RelatedTools
        heading="Related calculators"
        hrefs={["/pregnancy-calculator/", "/percentage-calculator/", "/marks-percentage-calculator/", "/emi-calculator/"]}
      />

      <RecentTools current="/tdee-calculator/" />

      <Faq items={faqs} />
    </>
  );
}
