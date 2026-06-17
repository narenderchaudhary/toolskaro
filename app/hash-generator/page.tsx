import type { Metadata } from "next";
import Link from "next/link";
import HashGen from "./HashGen";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Hash Generator — SHA-256, SHA-1, SHA-384 & SHA-512 Online",
  description:
    "Generate SHA-256, SHA-1, SHA-384 and SHA-512 hashes from any text instantly. Free online hash generator using the browser's Web Crypto API — nothing uploaded.",
  alternates: { canonical: "/hash-generator/" },
};

const faqs = [
  { q: "Which hash algorithms are supported?", a: "SHA-1, SHA-256, SHA-384 and SHA-512 — all computed with the browser's built-in Web Crypto API, which is the same cryptographic engine the browser uses for HTTPS." },
  { q: "Do you support MD5?", a: "No. MD5 is cryptographically broken and the Web Crypto API deliberately does not provide it. For integrity or security use SHA-256 or stronger, which are all available here." },
  { q: "Is my text uploaded to generate the hash?", a: "No. Hashing happens entirely in your browser, so the text you enter is never sent anywhere. That makes it safe for passwords, tokens and private strings." },
  { q: "What can I use a hash for?", a: "Verifying file or message integrity, comparing values without storing the original, generating checksums, and de-duplicating data. A hash is one-way: you cannot reverse it back to the input." },
  { q: "Why does the same text always give the same hash?", a: "Hash functions are deterministic by design — identical input always produces identical output. That property is what lets you compare two values for equality or verify that a download matches a published checksum." },
  { q: "What is the difference between SHA-256 and SHA-512?", a: "Both are from the SHA-2 family and are considered secure. SHA-256 produces a 64-character (256-bit) digest, while SHA-512 produces a 128-character (512-bit) digest and can be faster on 64-bit hardware. SHA-256 is the most common default." },
  { q: "Can someone reverse a hash to get my password back?", a: "Not directly — hashing is one-way. However, weak or unsalted hashes can be attacked with precomputed tables, so for real password storage you should add a unique salt and use a slow algorithm like bcrypt or Argon2 rather than a raw SHA hash." },
  { q: "Is a SHA hash the same as a checksum?", a: "A SHA hash can serve as a checksum, but it is cryptographically strong, meaning it also resists deliberate tampering. Simple checksums like CRC32 only catch accidental errors and are easy to forge, so SHA-256 is preferred for security-sensitive verification." },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "SoftwareApplication", name: "Hash Generator (SHA-256/512)", applicationCategory: "DeveloperApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Hash <span className="grad">generator</span></h1>
        <p className="lede">Create SHA-256, SHA-1, SHA-384 and SHA-512 hashes from any text — instantly and privately in your browser.</p>
      </div>
      <HashGen />
      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Generate secure hashes in your browser</h2>
        <p>
          A cryptographic hash turns any input into a fixed-length fingerprint. The same input always
          produces the same hash, but you can never work backwards to the original — which is why hashes
          are used for integrity checks, checksums and storing comparisons safely. Enter your text and
          get <strong>SHA-1, SHA-256, SHA-384 and SHA-512</strong> at once.
        </p>
        <p>
          This tool uses the browser&apos;s native Web Crypto API, the same engine that secures HTTPS, so
          the results are correct and computed entirely on your device. Nothing you type is ever
          uploaded.
        </p>
        <h3>How to generate a hash</h3>
        <p>
          Type or paste your text into the box and the SHA-1, SHA-256, SHA-384 and SHA-512 digests
          appear instantly, each ready to copy with one click. To verify a download, paste the same
          input the publisher used and compare the SHA-256 value against the one they list — if a single
          character differs, the hashes will be completely different, which is exactly the point.
        </p>
        <h3>Choosing the right algorithm</h3>
        <p>
          For general integrity checks and checksums, <strong>SHA-256</strong> is the standard choice;
          step up to <strong>SHA-512</strong> when you want a longer digest. Avoid SHA-1 for anything
          security-critical, as it is now considered weak. If you need unguessable random strings rather
          than a fingerprint, the <Link href="/password-generator/">password generator</Link> and{" "}
          <Link href="/uuid-generator/">UUID generator</Link> are better fits, and you can find every
          option on the <Link href="/developer-tools/">developer tools</Link> page.
        </p>
      </div>
      <Faq items={faqs} />
      <CtaBand heading="More free developer tools" text="Fast, private utilities that run entirely in your browser." links={[["/json-formatter/", "JSON Formatter"], ["/base64-encode-decode/", "Base64 Encode/Decode"], ["/uuid-generator/", "UUID Generator"], ["/password-generator/", "Password Generator"]]} />
    </>
  );
}
