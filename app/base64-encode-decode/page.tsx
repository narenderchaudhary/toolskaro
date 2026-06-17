import type { Metadata } from "next";
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
      </div>
      <Faq items={faqs} />
      <CtaBand heading="More free developer tools" text="Fast, private utilities that run entirely in your browser." links={[["/json-formatter/", "JSON Formatter"], ["/url-encode-decode/", "URL Encode/Decode"], ["/hash-generator/", "Hash Generator"], ["/uuid-generator/", "UUID Generator"]]} />
    </>
  );
}
