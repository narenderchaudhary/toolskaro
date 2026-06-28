import type { Metadata } from "next";
import Invoice from "./Invoice";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import ToolBadges from "@/app/components/ToolBadges";
import RelatedTools from "@/app/components/RelatedTools";
import RecentTools from "@/app/components/RecentTools";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Invoice Generator — Free GST Invoice Maker (PDF)",
  description:
    "Create professional GST invoices online and download as PDF. Add items, tax and notes — free, no signup, and 100% in your browser.",
  alternates: { canonical: "/invoice-generator/" },
};

const steps = [
  { icon: "🧾", title: "Enter details", text: "Your business, the client, and the invoice number." },
  { icon: "➕", title: "Add items", text: "List products/services with quantity, rate and tax." },
  { icon: "⬇️", title: "Save as PDF", text: "Click Download / Print and choose ‘Save as PDF’." },
];
const faqs = [
  { q: "How do I create an invoice?", a: "Fill in your business and client details, add your line items with quantity and rate, set the tax/GST percentage, and the totals calculate automatically. Then download it as a PDF." },
  { q: "Does it calculate GST?", a: "Yes. Enter a tax/GST percentage and the tool adds it to the subtotal and shows the grand total." },
  { q: "Are my details uploaded?", a: "No. The invoice is generated entirely in your browser; nothing is uploaded or stored." },
  { q: "Is it free?", a: "Yes — free, no sign-up and no watermark." },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "SoftwareApplication", name: "Invoice Generator", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Free <span className="grad">invoice generator</span></h1>
        <p className="lede">Create a professional GST invoice and download it as a PDF — free, no signup, in your browser.</p>
        <ToolBadges />
      </div>
      <div className="tool-shell"><Invoice /></div>
      <Steps heading={<>Create it in <span className="g">3 simple steps</span></>} steps={steps} />
      <Features
        heading={<>Why use this <span className="grad">invoice generator</span></>}
        items={[
          { icon: "🧮", title: "Auto totals", text: "Subtotal, tax and grand total recalculate the moment you change a quantity or rate." },
          { icon: "🧾", title: "GST ready", text: "Set a tax/GST percentage and it's applied to the bill for clean, compliant invoices." },
          { icon: "➕", title: "Unlimited line items", text: "Add as many products or services as your invoice needs, then remove any you don't." },
          { icon: "🆓", title: "No watermark", text: "Download a professional PDF free — no sign-up, no logo, no paywall." },
          { icon: "🔒", title: "Private", text: "Your business and client data stay in your browser and are never uploaded." },
          { icon: "⬇️", title: "Email or print", text: "Save the finished invoice as a PDF to send to clients or print on the spot." },
        ]}
      />
      <div className="card content no-print">
        <h2 style={{ marginTop: 0 }}>Professional invoices in minutes</h2>
        <p>
          Whether you&apos;re a freelancer, a small business or a shop, this invoice maker lets you
          bill clients with a clean, professional document. Add as many line items as you need, set
          your tax or GST percentage, and the subtotal, tax and grand total are calculated for you.
        </p>
        <p>It works entirely in your browser, so your business and client data stay private. Save the finished invoice as a PDF to email or print.</p>
      </div>
      <RelatedTools
        heading="Related tools"
        hrefs={["/resume-maker/", "/marriage-biodata-maker/", "/cover-letter-generator/", "/email-signature-maker/"]}
      />
      <RecentTools current="/invoice-generator/" />
      <Faq items={faqs} />
    </>
  );
}
