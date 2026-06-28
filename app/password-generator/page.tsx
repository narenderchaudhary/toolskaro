import type { Metadata } from "next";
import PasswordGen from "./PasswordGen";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import ToolBadges from "@/app/components/ToolBadges";
import RelatedTools from "@/app/components/RelatedTools";
import RecentTools from "@/app/components/RecentTools";
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
    { "@type": "SoftwareApplication", name: "Password Generator", applicationCategory: "SecurityApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Strong <span className="grad">password generator</span></h1>
        <p className="lede">Create strong, random and secure passwords in one click — generated privately in your browser.</p>
        <ToolBadges />
      </div>
      <div className="tool-shell"><PasswordGen /></div>

      <Steps
        heading={<>Generate a password in <span className="grad">3 simple steps</span></>}
        steps={[
          { icon: "📏", title: "Set the length", text: "Pick how long the password should be — 16 characters or more is ideal." },
          { icon: "🔣", title: "Choose characters", text: "Toggle uppercase, lowercase, numbers and symbols to match the site's rules." },
          { icon: "📋", title: "Copy & use", text: "Copy your new password in one tap, or regenerate for another." },
        ]}
      />

      <Features
        heading={<>Why use this <span className="grad">password generator</span></>}
        items={[
          { icon: "🔐", title: "Cryptographically secure", text: "Built from your device's secure random generator, not a predictable formula." },
          { icon: "🔒", title: "100% private", text: "Passwords are created in your browser and never sent to or stored on a server." },
          { icon: "🎚️", title: "Fully customisable", text: "Control length and which character types to include for any site's rules." },
          { icon: "💪", title: "Live strength meter", text: "See a strength rating update as you adjust the options." },
          { icon: "🔁", title: "Instant regenerate", text: "Click once for a fresh password whenever you need one." },
          { icon: "🆓", title: "Free & unlimited", text: "No sign-up and no limits — generate as many as you like." },
        ]}
      />

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
      <RelatedTools
        heading="Related tools"
        hrefs={["/text-case-converter/", "/qr-code-generator/", "/word-counter/", "/date-difference-calculator/"]}
      />

      <RecentTools current="/password-generator/" />

      <Faq items={faqs} />
    </>
  );
}
