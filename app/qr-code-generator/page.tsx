import type { Metadata } from "next";
import QrGenerator from "./QrGenerator";

export const metadata: Metadata = {
  title: "QR Code Generator — Free Online QR Maker (Download PNG)",
  description:
    "Generate a QR code from any link, text, UPI ID or Wi-Fi details. Customise size and colour, then download as PNG. Free, no signup, 100% in your browser.",
  alternates: { canonical: "/qr-code-generator/" },
};

const faqs = [
  { q: "Do these QR codes expire?", a: "No. These are static QR codes encoded directly from your text, so they never expire and there is no tracking." },
  { q: "Can I make a UPI payment QR?", a: "Yes — paste your UPI payment string (e.g. upi://pay?pa=yourid@bank&pn=Name) and the QR will encode it." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "QR Code Generator", applicationCategory: "UtilitiesApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1>QR Code Generator</h1>
      <p className="lede">Turn any link, text or UPI ID into a downloadable QR code — free and entirely in your browser.</p>
      <QrGenerator />
      <div className="ad-slot">Ad placement (AdSense)</div>
      <div className="card faq">
        <h2 style={{ marginTop: 0 }}>FAQ</h2>
        <dl>{faqs.map((f) => (<div key={f.q}><dt>{f.q}</dt><dd>{f.a}</dd></div>))}</dl>
      </div>
    </>
  );
}
