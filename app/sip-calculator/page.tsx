import type { Metadata } from "next";
import Sip from "./Sip";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

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
      </div>

      <Sip />

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

      <Faq items={faqs} />

      <CtaBand
        heading="More free calculators"
        text="Plan your money with our other instant calculators."
        links={[["/emi-calculator/", "EMI Calculator"], ["/interest-calculator/", "Interest Calculator"], ["/gst-calculator/", "GST Calculator"], ["/percentage-calculator/", "Percentage"]]}
      />
    </>
  );
}
