import type { Metadata } from "next";
import Link from "next/link";
import Base64 from "./Base64";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Base64 Encode & Decode — Free Online Base64 Converter",
  description:
    "Encode text to Base64 or decode Base64 back to text instantly. Free online Base64 converter with full Unicode (UTF-8) support — 100% in your browser, no upload.",
  alternates: { canonical: "/base64-encode-decode/" },
};

const faqs = [
  { q: "How do I encode text to Base64?", a: "Type or paste your text and click Encode → Base64. The tool converts it instantly, with full Unicode support so emoji and accented characters work correctly." },
  { q: "How do I decode Base64?", a: "Paste the Base64 string and click Decode ← Base64. If the string is valid Base64 you get the original text back; if not, you get a clear error." },
  { q: "Does it support Unicode and emoji?", a: "Yes. The encoder uses UTF-8 under the hood, so non-Latin scripts, accented letters and emoji round-trip correctly — something many simple Base64 tools get wrong." },
  { q: "Is my data private?", a: "Yes. Encoding and decoding happen entirely in your browser, so nothing you paste is ever uploaded or stored." },
  { q: "Is Base64 a form of encryption?", a: "No. Base64 is encoding, not encryption — anyone can decode it back to the original. It only makes binary data safe to transport as text. If you need real protection, hash or encrypt the data first, then Base64-encode the result." },
  { q: "Why is Base64 about a third larger than the original?", a: "Base64 represents every 3 bytes of input as 4 ASCII characters, so the output is roughly 33% bigger. That overhead is the trade-off for being able to embed binary safely inside text formats like JSON, XML and data URIs." },
  { q: "What is a data URI and how does Base64 fit in?", a: "A data URI embeds a file directly in a string, e.g. data:image/png;base64,XXXX. The XXXX part is the file Base64-encoded, which lets you inline small images or fonts into HTML and CSS without a separate request." },
  { q: "How do I decode a JWT with this?", a: "A JWT has three dot-separated Base64url sections. Paste the header or payload section and decode it to read the JSON claims. Note that the signature is not meant to be human-readable, only the header and payload." },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "SoftwareApplication", name: "Base64 Encode & Decode", applicationCategory: "DeveloperApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Base64 <span className="grad">encode &amp; decode</span></h1>
        <p className="lede">Convert text to Base64 and back instantly, with full Unicode support — private to your browser.</p>
      </div>
      <Base64 />
      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Encode and decode Base64 the easy way</h2>
        <p>
          Base64 turns any text or binary data into a safe set of ASCII characters, which is why it
          shows up everywhere — data URIs, JSON Web Tokens, email attachments, API keys and HTML
          embeds. Paste your text to <strong>encode</strong> it, or paste a Base64 string to{" "}
          <strong>decode</strong> it back to the original.
        </p>
        <p>
          Unlike many converters, this one is fully Unicode-safe: it encodes through UTF-8, so emoji,
          Hindi, Arabic and accented characters survive the round trip. It all runs in your browser, so
          nothing you paste is uploaded.
        </p>
        <h3>How to encode and decode</h3>
        <p>
          To encode, paste your text on the left and click <strong>Encode → Base64</strong>; to go the
          other way, drop a Base64 string in and click <strong>Decode ← Base64</strong>. Invalid input
          is flagged rather than silently mangled, so you always know whether a string is genuine
          Base64. Copy the result with one click and paste it into your config, header or data URI.
        </p>
        <h3>Encoding vs encryption</h3>
        <p>
          It is worth remembering that Base64 hides nothing — it is reversible by anyone, so never treat
          it as security. When you need a one-way fingerprint or an integrity check, use the{" "}
          <Link href="/hash-generator/">hash generator</Link> instead, and for escaping values in links
          reach for the <Link href="/url-encode-decode/">URL encoder</Link>. More utilities live on the{" "}
          <Link href="/developer-tools/">developer tools</Link> page.
        </p>
      </div>
      <Faq items={faqs} />
      <CtaBand heading="More free developer tools" text="Fast, private utilities that run entirely in your browser." links={[["/json-formatter/", "JSON Formatter"], ["/url-encode-decode/", "URL Encode/Decode"], ["/hash-generator/", "Hash Generator"], ["/uuid-generator/", "UUID Generator"]]} />
    </>
  );
}
