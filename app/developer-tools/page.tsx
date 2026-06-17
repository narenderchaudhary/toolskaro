import type { Metadata } from "next";
import Link from "next/link";
import Hub from "@/app/components/Hub";

export const metadata: Metadata = {
  title: "Free Developer Tools — JSON, Base64, Hash, UUID & Color Converter",
  description:
    "Fast, private developer utilities: JSON formatter, Base64 and URL encode/decode, SHA hash generator, UUID generator, Unix timestamp and color converter. Free, no upload.",
  alternates: { canonical: "/developer-tools/" },
};

const faqs = [
  { q: "What developer tools does ToolsKaro offer?", a: "A JSON formatter and validator, Base64 encode/decode, URL encode/decode, a SHA hash generator (SHA-1/256/384/512), a UUID v4 generator, a Unix timestamp converter and a HEX/RGB/HSL color converter — all free and in your browser." },
  { q: "Are these developer tools private?", a: "Yes. Every tool runs entirely in your browser using native APIs like JSON, Web Crypto and crypto.randomUUID(), so the data you paste — payloads, tokens, secrets — is never uploaded to a server." },
  { q: "Do I need to sign up or install anything?", a: "No. There is nothing to install and no account to create. Open a tool and use it instantly on any device." },
  { q: "Why use these instead of a desktop app?", a: "They load instantly, work on any device including your phone, keep your data on your machine, and are completely free with no limits or watermarks." },
];

export default function Page() {
  return (
    <Hub
      catKey="dev"
      heading="Free Developer Tools"
      headingNode={<>Free <span className="grad">Developer Tools</span></>}
      lede="Everyday utilities for developers — format JSON, encode Base64 and URLs, generate hashes and UUIDs, convert timestamps and colors. Fast, free and private to your browser."
      faqs={faqs}
    >
      <h2 style={{ marginTop: 0 }}>The small dev utilities you reach for daily</h2>
      <p>
        Clean up an API response with the <Link href="/json-formatter/">JSON Formatter</Link>, convert
        data with <Link href="/base64-encode-decode/">Base64 Encode/Decode</Link> and{" "}
        <Link href="/url-encode-decode/">URL Encode/Decode</Link>, and create secure fingerprints with
        the <Link href="/hash-generator/">Hash Generator</Link> (SHA-1, SHA-256, SHA-384, SHA-512).
      </p>
      <p>
        Need a unique key? The <Link href="/uuid-generator/">UUID Generator</Link> makes random v4
        identifiers in bulk. Decode log times with the{" "}
        <Link href="/timestamp-converter/">Unix Timestamp Converter</Link>, translate a color across{" "}
        <Link href="/color-converter/">HEX, RGB and HSL</Link>, or drop in placeholder copy from the{" "}
        <Link href="/lorem-ipsum-generator/">Lorem Ipsum Generator</Link>. Each tool runs locally with
        native browser APIs, so your data never leaves your device.
      </p>
    </Hub>
  );
}
