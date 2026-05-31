import type { Metadata } from "next";
import Gst from "./Gst";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "GST Calculator — Add or Remove GST Online (Free, India)",
  description:
    "Calculate GST instantly — add GST to a price or remove GST from a total. Shows CGST and SGST split for 3%, 5%, 12%, 18% and 28% slabs. Free online GST calculator.",
  alternates: { canonical: "/gst-calculator/" },
};

const faqs = [
  { q: "How do I add GST to a price?", a: "Choose ‘Add GST’, enter the base amount and the GST rate. The calculator shows the GST amount and the final price including GST, plus the CGST and SGST split." },
  { q: "How do I remove GST from a total?", a: "Choose ‘Remove GST’ and enter the GST-inclusive amount. The calculator works backwards to show the base price and the GST that was included." },
  { q: "What are the GST slabs in India?", a: "The main GST rates are 3%, 5%, 12%, 18% and 28%, depending on the goods or service. For intra-state sales, GST is split equally into CGST and SGST." },
  { q: "Is it free?", a: "Yes — free, no sign-up, and it runs entirely in your browser." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "GST Calculator", applicationCategory: "FinanceApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>GST <span className="grad">Calculator</span></h1>
        <p className="lede">Add GST to a price or remove it from a total in one tap — with the CGST/SGST split for every Indian GST slab.</p>
      </div>

      <Gst />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Calculate GST the easy way</h2>
        <p>
          Goods and Services Tax (GST) applies to most goods and services in India at slabs of 3%,
          5%, 12%, 18% or 28%. Whether you are a shopkeeper pricing a product, a freelancer raising
          an invoice, or a buyer checking a bill, this calculator handles both directions — adding
          GST to a base price, or extracting the GST already included in a total.
        </p>
        <p>
          For sales within the same state, GST is shared equally as CGST (central) and SGST (state),
          which the calculator shows automatically. It runs in your browser, so your figures stay
          private.
        </p>
      </div>

      <Faq items={faqs} />

      <CtaBand
        heading="More free calculators"
        text="Handle your money and numbers with our other tools."
        links={[["/emi-calculator/", "EMI Calculator"], ["/sip-calculator/", "SIP Calculator"], ["/percentage-calculator/", "Percentage"], ["/interest-calculator/", "Interest Calculator"]]}
      />
    </>
  );
}
