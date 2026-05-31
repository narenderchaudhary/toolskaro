import type { Metadata } from "next";
import PasswordGen from "./PasswordGen";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Password Generator — Create Strong Random Passwords (Free)",
  description:
    "Generate strong, random and secure passwords online. Choose length and characters, then copy. 100% in your browser — nothing is sent or stored.",
  alternates: { canonical: "/password-generator/" },
};

const faqs = [
  { q: "Are these passwords safe to use?", a: "Yes. Passwords are generated locally in your browser using your device's cryptographically secure random generator. Nothing is sent to or stored on any server." },
  { q: "What makes a strong password?", a: "Length matters most — aim for at least 12–16 characters — combined with a mix of uppercase, lowercase, numbers and symbols. This tool shows a strength rating as you adjust the options." },
  { q: "Can I generate multiple passwords?", a: "Yes — click Regenerate as many times as you like to get a fresh password instantly." },
  { q: "Is it free?", a: "Yes — completely free, no sign-up, no limits." },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "SoftwareApplication", name: "Password Generator", applicationCategory: "SecurityApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Strong <span className="grad">password generator</span></h1>
        <p className="lede">Create strong, random and secure passwords in one click — generated privately in your browser.</p>
      </div>
      <PasswordGen />
      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Generate secure passwords instantly</h2>
        <p>
          Reusing simple passwords is one of the biggest security risks online. This generator
          creates strong, unpredictable passwords using your browser&apos;s secure random number
          generator — choose the length and whether to include uppercase letters, numbers and
          symbols, then copy your new password in one tap.
        </p>
        <p>Because it runs entirely on your device, your password is never transmitted or saved anywhere. Use a unique password for every important account, ideally with a password manager.</p>
      </div>
      <Faq items={faqs} />
      <CtaBand heading="More free, private tools" text="Everything runs in your browser — fast and secure." links={[["/text-case-converter/", "Text Case Converter"], ["/qr-code-generator/", "QR Generator"], ["/word-counter/", "Word Counter"], ["/date-difference-calculator/", "Date Difference"]]} />
    </>
  );
}
