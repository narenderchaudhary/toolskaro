import type { Metadata } from "next";
import Interest from "./Interest";
import Faq from "@/app/components/Faq";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import ToolBadges from "@/app/components/ToolBadges";
import RelatedTools from "@/app/components/RelatedTools";
import RecentTools from "@/app/components/RecentTools";

export const metadata: Metadata = {
  title: "Interest Calculator — Simple & Compound, Free",
  description:
    "Calculate simple and compound interest instantly. Enter principal, rate and time to see your interest and total amount. Free online interest calculator.",
  alternates: { canonical: "/interest-calculator/" },
};

const faqs = [
  { q: "What is the simple interest formula?", a: "Simple Interest = (Principal × Rate × Time) ÷ 100. It is calculated only on the original principal." },
  { q: "What is the compound interest formula?", a: "Compound Interest amount = P × (1 + r/n)^(n×t), where P is principal, r is the annual rate (as a decimal), n is the compounding frequency per year, and t is the number of years. Interest earns interest over time." },
  { q: "What is the difference between simple and compound interest?", a: "Simple interest is charged only on the principal, while compound interest is charged on the principal plus accumulated interest — so compound interest grows faster over long periods." },
  { q: "Is it free?", a: "Yes — free, no sign-up, and it runs entirely in your browser." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Interest Calculator", applicationCategory: "FinanceApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Interest <span className="grad">Calculator</span></h1>
        <p className="lede">Calculate simple or compound interest in seconds — enter the principal, rate and time to see the interest and total amount.</p>
        <ToolBadges />
      </div>

      <div className="tool-shell"><Interest /></div>

      <Steps
        heading={<>Calculate interest in <span className="grad">3 simple steps</span></>}
        steps={[
          { icon: "🔘", title: "Choose the mode", text: "Pick simple interest or compound interest, depending on what you need." },
          { icon: "💵", title: "Enter your numbers", text: "Type the principal, the annual rate and the time period in years." },
          { icon: "📈", title: "See interest & total", text: "Instantly view the interest earned (or owed) and the final maturity amount." },
        ]}
      />

      <Features
        heading={<>Why use this <span className="grad">interest calculator</span></>}
        items={[
          { icon: "🔁", title: "Simple & compound", text: "Switch between both methods to see how much faster compounding grows money." },
          { icon: "📅", title: "Any compounding", text: "Choose yearly, half-yearly, quarterly or monthly compounding for accuracy." },
          { icon: "🏦", title: "FDs, savings & loans", text: "Plan fixed deposits, savings growth, recurring loans or solve exam maths." },
          { icon: "⚡", title: "Instant & accurate", text: "Uses the standard interest formulas — results update the moment you type." },
          { icon: "🔒", title: "100% private", text: "Your figures stay on your device; nothing is uploaded or stored." },
          { icon: "🆓", title: "Free & unlimited", text: "No sign-up, no limits — run as many calculations as you like." },
        ]}
      />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Simple and compound interest, instantly</h2>
        <p>
          Interest is the cost of borrowing — or the reward for saving. <strong>Simple interest</strong> is
          calculated only on the original principal, while <strong>compound interest</strong> is calculated on
          the principal plus the interest already earned, so it grows faster over time. This tool
          handles both: switch the mode, enter your numbers, and choose how often interest compounds.
        </p>
        <p>
          It is handy for fixed deposits, savings, recurring loans and exam maths problems alike.
          Everything is calculated locally in your browser.
        </p>
      </div>

      <RelatedTools
        heading="Related calculators"
        hrefs={["/emi-calculator/", "/sip-calculator/", "/gst-calculator/", "/percentage-calculator/"]}
      />

      <RecentTools current="/interest-calculator/" />

      <Faq items={faqs} />
    </>
  );
}
