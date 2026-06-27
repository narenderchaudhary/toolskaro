import type { Metadata } from "next";
import Invoice from "./Invoice";
import Steps from "@/app/components/Steps";
import CtaBand from "@/app/components/CtaBand";
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
      </div>
      <Invoice />
      <Steps heading={<>Create it in <span className="g">3 simple steps</span></>} steps={steps} />
      <div className="card content no-print">
        <h2 style={{ marginTop: 0 }}>Professional invoices in minutes</h2>
        <p>
          Whether you&apos;re a freelancer, a small business or a shop, this invoice maker lets you
          bill clients with a clean, professional document. Add as many line items as you need, set
          your tax or GST percentage, and the subtotal, tax and grand total are calculated for you.
        </p>
        <p>It works entirely in your browser, so your business and client data stay private. Save the finished invoice as a PDF to email or print.</p>
      </div>
      <Faq items={faqs} />
      <CtaBand heading="More free business tools" text="Invoices, documents and calculators — all in your browser." links={[["/gst-calculator/", "GST Calculator"], ["/cover-letter-generator/", "Cover Letter"], ["/pdf/merge/", "Merge PDF"], ["/qr-code-generator/", "QR Generator"]]} />
    </>
  );
}
