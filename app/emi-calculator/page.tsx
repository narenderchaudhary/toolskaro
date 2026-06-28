import type { Metadata } from "next";
import Emi from "./Emi";
import Faq from "@/app/components/Faq";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import ToolBadges from "@/app/components/ToolBadges";
import RelatedTools from "@/app/components/RelatedTools";
import RecentTools from "@/app/components/RecentTools";

export const metadata: Metadata = {
  title: "EMI Calculator — Home, Car & Personal Loan EMI",
  description:
    "Calculate your monthly loan EMI, total interest and total payment for home, car, personal or any loan. Free online EMI calculator — instant and accurate.",
  alternates: { canonical: "/emi-calculator/" },
};

const faqs = [
  { q: "How is EMI calculated?", a: "EMI is calculated using the formula EMI = P × r × (1+r)^n / ((1+r)^n − 1), where P is the loan amount, r is the monthly interest rate (annual rate ÷ 12 ÷ 100), and n is the number of monthly instalments." },
  { q: "What is the EMI for a ₹10 lakh loan?", a: "It depends on the rate and tenure. For example, ₹10,00,000 at 9% for 20 years is about ₹8,997 per month. Enter your own figures above to see the exact EMI." },
  { q: "Does a longer tenure reduce my EMI?", a: "Yes — a longer tenure lowers the monthly EMI but increases the total interest you pay over the life of the loan." },
  { q: "Is this calculator free?", a: "Yes. It is completely free, needs no sign-up, and runs entirely in your browser." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "EMI Calculator", applicationCategory: "FinanceApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>EMI <span className="grad">Calculator</span></h1>
        <p className="lede">Work out your monthly EMI, total interest and total payment for any home, car or personal loan — instantly and free.</p>
        <ToolBadges />
      </div>

      <div className="tool-shell"><Emi /></div>

      <Steps
        heading={<>Find your EMI in <span className="grad">3 simple steps</span></>}
        steps={[
          { icon: "💵", title: "Enter the loan amount", text: "Type how much you want to borrow — your home, car or personal loan principal in ₹." },
          { icon: "📊", title: "Set rate & tenure", text: "Add the annual interest rate and the repayment period in months or years." },
          { icon: "✅", title: "See your EMI", text: "Instantly get your monthly EMI plus the total interest and total amount payable." },
        ]}
      />

      <Features
        heading={<>Why use this <span className="grad">EMI calculator</span></>}
        items={[
          { icon: "🏦", title: "Any loan type", text: "Works for home, car, personal, education or business loans — just enter your figures." },
          { icon: "📉", title: "See total interest", text: "Know exactly how much interest you pay over the full tenure, not just the EMI." },
          { icon: "🔁", title: "Compare scenarios", text: "Tweak the rate or tenure to instantly see how your EMI and interest change." },
          { icon: "⚡", title: "Instant & accurate", text: "Uses the standard reducing-balance EMI formula — results update as you type." },
          { icon: "🔒", title: "100% private", text: "Your numbers never leave your device; everything runs in your browser." },
          { icon: "🆓", title: "Free & unlimited", text: "No sign-up, no limits — calculate as many loans as you like." },
        ]}
      />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Plan your loan with confidence</h2>
        <p>
          Your EMI (Equated Monthly Instalment) is the fixed amount you pay the lender every month
          until the loan is repaid. It depends on three things: the loan amount, the interest rate,
          and the tenure. This calculator instantly shows your monthly EMI along with the total
          interest and total amount payable, so you can compare options before you borrow.
        </p>
        <p>
          Try different tenures and rates to see the trade-off: a longer tenure means a smaller EMI
          but more interest overall. Everything is calculated in your browser — nothing is stored or
          sent anywhere.
        </p>
      </div>

      <RelatedTools
        heading="Related calculators"
        hrefs={["/sip-calculator/", "/interest-calculator/", "/gst-calculator/", "/percentage-calculator/"]}
      />

      <RecentTools current="/emi-calculator/" />

      <Faq items={faqs} />
    </>
  );
}
