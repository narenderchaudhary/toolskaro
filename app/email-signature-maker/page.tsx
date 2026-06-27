import type { Metadata } from "next";
import Signature from "./Signature";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Free Email Signature Generator — Make a Pro Signature",
  description:
    "Create a beautiful, professional email signature free. Add your name, designation, company, website, email, photo and social links (LinkedIn, X, Facebook, Instagram, YouTube), then copy it into Gmail or Outlook.",
  alternates: { canonical: "/email-signature-maker/" },
};

const faqs = [
  { q: "How do I add the signature to Gmail?", a: "Click 'Copy signature', then in Gmail open Settings (gear icon) → See all settings → General → Signature → Create new, and paste (Ctrl/Cmd+V). Save changes at the bottom. Your formatted signature, including the photo and social icons, will appear on new emails." },
  { q: "How do I use it in Outlook?", a: "Use the 'Copy HTML code' button. In Outlook on the web go to Settings → Mail → Compose and reply → Signature and paste the signature. In new Outlook/desktop you can paste the copied signature directly into the signature editor." },
  { q: "Is the email signature generator free?", a: "Yes, completely free with no sign-up and no watermark. You can create and copy as many signatures as you like." },
  { q: "Will my photo show up in everyone's inbox?", a: "Uploaded photos are embedded in the signature, which works in most clients. For the most reliable result across every email app, host your photo at a public URL — then it always loads. The social icons are already hosted, so they show everywhere." },
  { q: "Is my information kept private?", a: "Yes. The generator runs entirely in your browser — your details, photo and links are never uploaded to any server." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Email Signature Generator", url: "https://toolskaro.com/email-signature-maker/", description: "Free email signature generator with templates, photo, brand colour and social icons. Copy to Gmail or Outlook.", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Email <span className="grad">Signature Generator</span></h1>
        <p className="lede">Build a beautiful, professional email signature with your photo, designation, company and social links — then copy it straight into Gmail or Outlook. Free, no sign-up.</p>
      </div>

      <Signature />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>A polished signature in under a minute</h2>
        <p>
          A professional email signature makes every message look credible and makes it easy for people
          to reach you. With this free generator you just fill in your <strong>name, designation,
          company, website and email</strong>, add a profile photo and your <strong>LinkedIn, X
          (Twitter), Facebook, Instagram and YouTube</strong> links, pick a template and brand colour,
          and watch the signature build live. When it looks right, one click copies it — formatting,
          photo and clickable social icons included.
        </p>
        <p>
          The signature is generated as clean, table-based HTML with inline styles, which is exactly
          what email clients like <strong>Gmail and Outlook</strong> need to display it correctly.
          Everything runs in your browser, so your details stay private on your own device. Choose from
          three layouts — Classic, Modern and Minimal — to match your style.
        </p>
      </div>

      <Faq items={faqs} />

      <CtaBand
        heading="Build your whole professional kit"
        text="Make a matching resume, cover letter and more — all free and private."
        links={[["/resume-maker/", "Resume Maker"], ["/cover-letter-generator/", "Cover Letter"], ["/qr-code-generator/", "QR Code Generator"], ["/document-tools/", "All Document Tools"]]}
      />
    </>
  );
}
