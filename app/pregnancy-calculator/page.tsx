import type { Metadata } from "next";
import Pregnancy from "./Pregnancy";
import Faq from "@/app/components/Faq";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import ToolBadges from "@/app/components/ToolBadges";
import RelatedTools from "@/app/components/RelatedTools";
import RecentTools from "@/app/components/RecentTools";

export const metadata: Metadata = {
  title: "Pregnancy Due Date Calculator — Week by Week Tracker",
  description:
    "Calculate your pregnancy due date from your last period (LMP), conception or IVF transfer date. See how many weeks pregnant you are, your trimester and days to go. Free.",
  alternates: { canonical: "/pregnancy-calculator/" },
};

const faqs = [
  { q: "How is the due date calculated?", a: "The most common method (Naegele's rule) adds 280 days — 40 weeks — to the first day of your last menstrual period (LMP). If you know your conception date, the due date is about 266 days later. For IVF, it is counted from the embryo transfer date and the embryo's age. This calculator supports all of these methods." },
  { q: "How accurate is a due date calculator?", a: "A due date is an estimate, not a fixed appointment — only around 5% of babies are born on their exact due date, and a normal birth can happen any time from 37 to 42 weeks. An early ultrasound (dating scan) is usually the most accurate way to confirm your due date." },
  { q: "How many weeks pregnant am I?", a: "Pregnancy is measured in 'gestational age' from the first day of your last period, not from conception — so you are counted as about two weeks pregnant at the moment of conception. Enter your LMP above and the calculator shows your current weeks and days." },
  { q: "What are the three trimesters?", a: "The first trimester is weeks 1–12, the second is weeks 13–26, and the third is weeks 27 until birth. The calculator highlights which trimester you are currently in." },
  { q: "Is this tool free and private?", a: "Yes. It is completely free with no sign-up, and the calculation runs entirely in your browser — none of your dates or details are uploaded or stored anywhere." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Pregnancy Due Date Calculator", url: "https://toolskaro.com/pregnancy-calculator/", description: "Free pregnancy due date and week-by-week calculator using LMP, conception or IVF transfer date.", applicationCategory: "HealthApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="preg-theme">
      <div className="tool-hero preg-hero">
        <span className="preg-badge">🌸 Made with care for expecting mums</span>
        <h1>Pregnancy <span className="grad">Due&nbsp;Date Calculator</span></h1>
        <p className="lede">Find your estimated due date and see exactly how many weeks pregnant you are, your trimester and how many days to go — free, instant and private.</p>
        <ToolBadges />
      </div>

      <div className="tool-shell"><Pregnancy /></div>

      <Steps
        heading={<>Find your due date in <span className="grad">3 simple steps</span></>}
        steps={[
          { icon: "📅", title: "Choose your method", text: "Calculate from your last period (LMP), conception or ovulation date, or IVF transfer date." },
          { icon: "🌸", title: "Enter your date", text: "Pick the relevant date and we'll do the gestational-age maths for you." },
          { icon: "👶", title: "See your timeline", text: "Get your estimated due date, current weeks and days, trimester and days to go." },
        ]}
      />

      <Features
        heading={<>Why use this <span className="grad">pregnancy calculator</span></>}
        items={[
          { icon: "📅", title: "Three start methods", text: "Works from your LMP, conception/ovulation date, or IVF embryo-transfer date." },
          { icon: "🤰", title: "Week-by-week tracking", text: "See exactly how many weeks and days pregnant you are right now." },
          { icon: "🌷", title: "Trimester at a glance", text: "Highlights your current trimester and the days remaining until your due date." },
          { icon: "⚡", title: "Instant & gentle", text: "Your timeline appears the moment you enter a date — calm, clear and reassuring." },
          { icon: "🔒", title: "Completely private", text: "Everything is calculated in your browser; your dates are never uploaded or stored." },
          { icon: "🆓", title: "Free & unlimited", text: "No sign-up, no limits — check back any time as your pregnancy progresses." },
        ]}
      />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Know your due date and how far along you are</h2>
        <p>
          A pregnancy due date is the estimated date your baby is likely to arrive, counted as 40
          weeks from the first day of your last menstrual period (LMP). This calculator works from your
          LMP, your conception or ovulation date, or your IVF embryo-transfer date, and instantly shows
          your <strong>estimated due date</strong>, how many <strong>weeks and days pregnant</strong>{" "}
          you are right now, your current <strong>trimester</strong>, and the days remaining.
        </p>
        <p>
          Remember that a due date is only an estimate — a healthy, full-term birth can happen any time
          between 37 and 42 weeks, and an early dating ultrasound is the most reliable way to confirm
          it. Use this tool to plan and follow your pregnancy week by week, but always rely on your
          doctor or midwife for medical guidance. Everything is calculated in your browser, so your
          information stays completely private.
        </p>
      </div>

      <RelatedTools
        heading="Related calculators"
        hrefs={["/tdee-calculator/", "/percentage-calculator/", "/marks-percentage-calculator/", "/emi-calculator/"]}
      />

      <RecentTools current="/pregnancy-calculator/" />

      <Faq items={faqs} />
      </div>
    </>
  );
}
