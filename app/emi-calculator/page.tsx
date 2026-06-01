import type { Metadata } from "next";
import Emi from "./Emi";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

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
      { "@type": "SoftwareApplication", name: "EMI Calculator", applicationCategory: "FinanceApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>EMI <span className="grad">Calculator</span></h1>
        <p className="lede">Work out your monthly EMI, total interest and total payment for any home, car or personal loan — instantly and free.</p>
      </div>

      <Emi />

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

      <Faq items={faqs} />

      <CtaBand
        heading="More free calculators"
        text="Plan your money with our other instant calculators."
        links={[["/sip-calculator/", "SIP Calculator"], ["/interest-calculator/", "Interest Calculator"], ["/gst-calculator/", "GST Calculator"], ["/percentage-calculator/", "Percentage"]]}
      />
    </>
  );
}
