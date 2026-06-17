import type { Metadata } from "next";
import Link from "next/link";
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
  { q: "What is the difference between UUID v1 and v4?", a: "Version 1 UUIDs are built from a timestamp and the machine's MAC address, so they leak some metadata and ordering. Version 4 UUIDs are fully random, which makes them unpredictable and the safest default for most applications — and that is what this tool generates." },
  { q: "Can I really use these as database primary keys?", a: "Yes. Random v4 UUIDs are widely used as primary keys because they can be generated anywhere without coordination, avoiding the collisions you risk with auto-incrementing IDs across distributed services. Just index them appropriately for performance." },
  { q: "What does the uppercase toggle do?", a: "It switches the hex digits between lowercase (the canonical form) and uppercase. Some legacy systems and databases expect uppercase UUIDs, so the toggle lets you match whatever format your target requires." },
  { q: "How unlikely is a collision, really?", a: "A v4 UUID has 122 random bits. You would need to generate billions of UUIDs before the probability of a single collision became meaningful, which is why they are treated as practically unique without a central authority." },
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
        <h3>How to generate UUIDs</h3>
        <p>
          Set how many identifiers you need (1 to 100), flip the uppercase switch if required, and click
          Generate. The whole list appears at once and copies with a single button, ready to paste into
          a seed script, a test fixture, an API request or a spreadsheet. Generate another batch any time
          you need fresh values — each one is drawn from a secure random source.
        </p>
        <h3>Where v4 UUIDs are used</h3>
        <p>
          Teams use random UUIDs as database keys, request and trace IDs for debugging, idempotency keys,
          file names and message identifiers in queues. If you also need one-way fingerprints or random
          secrets, pair this with the <Link href="/hash-generator/">hash generator</Link> and{" "}
          <Link href="/password-generator/">password generator</Link>. The complete toolkit is on the{" "}
          <Link href="/developer-tools/">developer tools</Link> page.
        </p>
      </div>
      <Faq items={faqs} />
      <CtaBand heading="More free developer tools" text="Fast, private utilities that run entirely in your browser." links={[["/json-formatter/", "JSON Formatter"], ["/hash-generator/", "Hash Generator"], ["/base64-encode-decode/", "Base64 Encode/Decode"], ["/password-generator/", "Password Generator"]]} />
    </>
  );
}
