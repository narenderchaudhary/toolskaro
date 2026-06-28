import type { Metadata } from "next";
import Gst from "./Gst";
import Faq from "@/app/components/Faq";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import ToolBadges from "@/app/components/ToolBadges";
import RelatedTools from "@/app/components/RelatedTools";
import RecentTools from "@/app/components/RecentTools";

export const metadata: Metadata = {
  title: "GST Calculator — Add or Remove GST Online (Free)",
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
      { "@type": "SoftwareApplication", name: "GST Calculator", applicationCategory: "FinanceApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>GST <span className="grad">Calculator</span></h1>
        <p className="lede">Add GST to a price or remove it from a total in one tap — with the CGST/SGST split for every GST slab.</p>
        <ToolBadges />
      </div>

      <div className="tool-shell"><Gst /></div>

      <Steps
        heading={<>Calculate GST in <span className="grad">3 simple steps</span></>}
        steps={[
          { icon: "🔀", title: "Pick a direction", text: "Choose Add GST to a base price, or Remove GST from a tax-inclusive total." },
          { icon: "💵", title: "Enter the amount", text: "Type the price or total in ₹ and select the GST slab — 3%, 5%, 12%, 18% or 28%." },
          { icon: "🧾", title: "See the breakdown", text: "Instantly get the GST amount, final price and the equal CGST/SGST split." },
        ]}
      />

      <Features
        heading={<>Why use this <span className="grad">GST calculator</span></>}
        items={[
          { icon: "↔️", title: "Add or remove GST", text: "Works both ways — build a price up from a base, or strip GST out of a total." },
          { icon: "🏛️", title: "CGST/SGST split", text: "Automatically shows the equal central and state split for intra-state sales." },
          { icon: "📋", title: "All Indian slabs", text: "Supports 3%, 5%, 12%, 18% and 28% — or type any custom GST rate." },
          { icon: "⚡", title: "Instant results", text: "Perfect for invoices, billing and quick price checks — no manual maths." },
          { icon: "🔒", title: "100% private", text: "Your amounts stay on your device; nothing is uploaded or stored." },
          { icon: "🆓", title: "Free & unlimited", text: "No sign-up, no limits — calculate GST as often as you need." },
        ]}
      />

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

      <RelatedTools
        heading="Related calculators"
        hrefs={["/emi-calculator/", "/sip-calculator/", "/percentage-calculator/", "/interest-calculator/"]}
      />

      <RecentTools current="/gst-calculator/" />

      <Faq items={faqs} />
    </>
  );
}
