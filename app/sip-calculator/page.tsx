import type { Metadata } from "next";
import Sip from "./Sip";
import Faq from "@/app/components/Faq";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import ToolBadges from "@/app/components/ToolBadges";
import RelatedTools from "@/app/components/RelatedTools";
import RecentTools from "@/app/components/RecentTools";

export const metadata: Metadata = {
  title: "SIP Calculator — Mutual Fund SIP Returns Calculator (Free)",
  description:
    "Calculate the future value and returns of your monthly SIP investment. Free online SIP calculator for mutual funds — instant, accurate, no signup.",
  alternates: { canonical: "/sip-calculator/" },
};

const faqs = [
  { q: "How does a SIP calculator work?", a: "It uses the future-value formula for a series of monthly investments: FV = M × ((1+i)^n − 1) / i × (1+i), where M is the monthly amount, i is the monthly return rate, and n is the number of months." },
  { q: "Are the returns guaranteed?", a: "No. SIP returns depend on market performance. The calculator uses an expected annual return you choose; actual mutual-fund returns will vary." },
  { q: "What return rate should I assume?", a: "Equity mutual funds have historically returned roughly 10–14% per year over the long term, but this is not guaranteed. Use a conservative figure to plan." },
  { q: "Is it free?", a: "Yes — free, no sign-up, and it runs entirely in your browser." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "SIP Calculator", applicationCategory: "FinanceApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>SIP <span className="grad">Calculator</span></h1>
        <p className="lede">See how much your monthly SIP could grow to. Estimate the future value and returns of your mutual-fund investment — free and instant.</p>
        <ToolBadges />
      </div>

      <div className="tool-shell"><Sip /></div>

      <Steps
        heading={<>Project your SIP in <span className="grad">3 simple steps</span></>}
        steps={[
          { icon: "💰", title: "Enter monthly amount", text: "Type how much you plan to invest every month into your SIP, in ₹." },
          { icon: "📈", title: "Add return & period", text: "Set the expected annual return rate and how many years you will keep investing." },
          { icon: "🎯", title: "See the future value", text: "Instantly view your estimated maturity value, total invested and estimated gains." },
        ]}
      />

      <Features
        heading={<>Why use this <span className="grad">SIP calculator</span></>}
        items={[
          { icon: "📈", title: "See compounding work", text: "Watch how small monthly amounts grow into a large corpus over the years." },
          { icon: "🧮", title: "Invested vs returns", text: "Splits your maturity value into what you put in and what the market added." },
          { icon: "🎯", title: "Plan for goals", text: "Reverse-engineer how much to invest monthly for a car, home or retirement." },
          { icon: "⚡", title: "Instant estimates", text: "Uses the standard SIP future-value formula — results update as you type." },
          { icon: "🔒", title: "100% private", text: "Your figures never leave your device; it all runs in your browser." },
          { icon: "🆓", title: "Free & unlimited", text: "No sign-up, no limits — model as many SIP plans as you like." },
        ]}
      />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Visualise the power of monthly investing</h2>
        <p>
          A Systematic Investment Plan (SIP) lets you invest a fixed amount in a mutual fund every
          month. Thanks to compounding and rupee-cost averaging, small monthly amounts can grow
          significantly over time. This calculator shows your estimated future value, the total you
          invested, and the estimated returns for any monthly amount, expected return rate and time
          period.
        </p>
        <p>
          Adjust the inputs to plan towards a goal — a car, a home down payment, or retirement. The
          figures are estimates based on the return you assume; actual market returns vary. Nothing
          is stored; it all runs in your browser.
        </p>
      </div>

      <RelatedTools
        heading="Related calculators"
        hrefs={["/emi-calculator/", "/interest-calculator/", "/gst-calculator/", "/percentage-calculator/"]}
      />

      <RecentTools current="/sip-calculator/" />

      <Faq items={faqs} />
    </>
  );
}
