import type { Metadata } from "next";
import QrGenerator from "./QrGenerator";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "QR Code Generator — Free Online QR Maker (Download PNG)",
  description:
    "Generate a QR code from any link, text, UPI ID or Wi-Fi details. Customise size and colour, then download as PNG. Free, no signup, 100% in your browser.",
  alternates: { canonical: "/qr-code-generator/" },
};

const steps = [
  { icon: "⌨️", title: "Enter content", text: "Type a link, text, UPI ID or Wi-Fi details." },
  { icon: "🎨", title: "Customise", text: "Set the size in pixels and pick a colour." },
  { icon: "⬇️", title: "Download PNG", text: "Save your QR code as a PNG image." },
];

const features = [
  { icon: "♾️", title: "Never expires", text: "Static QR codes encode your data directly — no expiry, ever." },
  { icon: "💸", title: "UPI payments", text: "Encode a UPI string to accept payments at your shop or stall." },
  { icon: "🎨", title: "Custom look", text: "Choose any size and foreground colour for the code." },
  { icon: "🔒", title: "No tracking", text: "Generated in your browser with no redirect and no scan tracking." },
  { icon: "🆓", title: "Free", text: "Unlimited QR codes, no sign-up and no watermark." },
  { icon: "🖨️", title: "Use anywhere", text: "Posters, visiting cards, packaging, websites and presentations." },
];

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
      { "@type": "SoftwareApplication", name: "QR Code Generator", applicationCategory: "UtilitiesApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Free <span className="grad">QR code generator</span></h1>
        <p className="lede">Turn any link, text or UPI ID into a downloadable QR code — free and entirely in your browser.</p>
      </div>

      <QrGenerator />

      <Steps heading={<>Generate in <span className="g">3 simple steps</span></>} steps={steps} />
      <Features heading={<>Why use this <span className="g">QR generator</span></>} items={features} />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Free static QR codes for any purpose</h2>
        <p>
          A QR code is the quickest way to send someone to a link or share information without
          typing. This generator creates <strong>static</strong> QR codes — the data is baked
          straight into the image, so there’s no expiry, no account, and no third party tracking
          scans.
        </p>
        <p>
          Use it to share your website or social profile, accept UPI payments at a shop counter, let
          guests connect to your Wi-Fi, or add a scannable link to a poster, resume or visiting card.
          Everything is generated locally in your browser and free to download.
        </p>
      </div>

      <Faq items={faqs} />

      <CtaBand
        heading="More handy free tools"
        text="Everything runs in your browser — fast, private and free."
        links={[["/word-counter/", "Word Counter"], ["/age-calculator/", "Age Calculator"], ["/image-compressor/", "Image Compressor"], ["/pdf/merge/", "Merge PDF"]]}
      />
    </>
  );
}
