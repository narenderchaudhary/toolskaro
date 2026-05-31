import type { Metadata } from "next";
import QrGenerator from "./QrGenerator";

export const metadata: Metadata = {
  title: "QR Code Generator — Free Online QR Maker (Download PNG)",
  description:
    "Generate a QR code from any link, text, UPI ID or Wi-Fi details. Customise size and colour, then download as PNG. Free, no signup, 100% in your browser.",
  alternates: { canonical: "/qr-code-generator/" },
};

const faqs = [
  { q: "Do these QR codes expire?", a: "No. These are static QR codes encoded directly from your text, so they never expire and there is no tracking or redirect involved." },
  { q: "Can I make a UPI payment QR?", a: "Yes — paste your UPI string (for example upi://pay?pa=yourid@bank&pn=Name) and the QR will encode it for payments." },
  { q: "Can I change the colour and size?", a: "Yes. Set any size in pixels and pick a custom foreground colour before downloading the PNG." },
  { q: "Where can I use the downloaded QR code?", a: "Anywhere — posters, visiting cards, product packaging, shop counters, presentations, or websites. It’s a standard PNG image." },
  { q: "Is it free and private?", a: "Completely free with no sign-up. The QR is generated in your browser, so your data isn’t sent anywhere." },
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

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>How to generate a QR code</h2>
        <ol className="steps">
          <li>Type or paste your link, text, UPI ID or Wi-Fi details.</li>
          <li>Adjust the size in pixels and choose a colour if you like.</li>
          <li>The QR preview updates instantly as you type.</li>
          <li>Click <strong>Download PNG</strong> to save it.</li>
        </ol>
      </div>

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Free static QR codes for any purpose</h2>
        <p>
          A QR code is the quickest way to send someone to a link or share information without
          typing. This generator creates <strong>static</strong> QR codes — the data is baked
          straight into the image, so there’s no expiry, no account, and no third party tracking
          scans.
        </p>
        <p>
          Use it to share your website or social profile, accept UPI payments at a shop counter,
          let guests connect to your Wi-Fi, or add a scannable link to a poster, resume or visiting
          card. Everything is generated locally in your browser and free to download.
        </p>
      </div>

      <div className="card faq">
        <h2 style={{ marginTop: 0 }}>Frequently asked questions</h2>
        <dl>{faqs.map((f) => (<div key={f.q}><dt>{f.q}</dt><dd>{f.a}</dd></div>))}</dl>
      </div>
    </>
  );
}
