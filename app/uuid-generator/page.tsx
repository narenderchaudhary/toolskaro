import type { Metadata } from "next";
import Uuid from "./Uuid";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "UUID Generator — Free Online UUID v4 Generator (Bulk)",
  description:
    "Generate random UUID v4 identifiers, one or in bulk, with optional uppercase. Free online UUID generator using the browser's secure crypto API — nothing uploaded.",
  alternates: { canonical: "/uuid-generator/" },
};

const faqs = [
  { q: "What kind of UUID does this generate?", a: "Version 4 (random) UUIDs, created with the browser's cryptographically secure crypto.randomUUID(). Each one is a 128-bit identifier in the standard 8-4-4-4-12 format." },
  { q: "Can I generate many UUIDs at once?", a: "Yes. Set any count from 1 to 100 and generate them all instantly, then copy the whole list with one click." },
  { q: "Are the UUIDs unique?", a: "Version 4 UUIDs are random with 122 bits of entropy, so the chance of a collision is astronomically small — they are safe to use as database keys, request IDs and file names." },
  { q: "Is this private?", a: "Yes. UUIDs are generated locally in your browser using a secure random source; nothing is sent to a server." },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "SoftwareApplication", name: "UUID Generator", applicationCategory: "DeveloperApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>UUID <span className="grad">generator</span></h1>
        <p className="lede">Generate secure random UUID v4 identifiers, one or in bulk — instantly and privately.</p>
      </div>
      <Uuid />
      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Random UUIDs whenever you need them</h2>
        <p>
          A UUID (universally unique identifier) is a 128-bit value used as a collision-free key for
          database rows, API requests, files and distributed systems. This generator creates{" "}
          <strong>version 4</strong> UUIDs using your browser&apos;s secure random source, so they are
          suitable for production use — and you can produce up to 100 at once.
        </p>
        <p>
          Toggle uppercase if your system expects it, then copy the whole batch with a single click.
          Everything is generated locally; nothing is uploaded.
        </p>
      </div>
      <Faq items={faqs} />
      <CtaBand heading="More free developer tools" text="Fast, private utilities that run entirely in your browser." links={[["/json-formatter/", "JSON Formatter"], ["/hash-generator/", "Hash Generator"], ["/base64-encode-decode/", "Base64 Encode/Decode"], ["/password-generator/", "Password Generator"]]} />
    </>
  );
}
