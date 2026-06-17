import type { Metadata } from "next";
import UrlCodec from "./UrlCodec";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "URL Encode & Decode — Free Online URL Encoder / Decoder",
  description:
    "Encode or decode URLs and query parameters instantly. Free online URL encoder/decoder supporting both component and full-URL encoding — 100% in your browser.",
  alternates: { canonical: "/url-encode-decode/" },
};

const faqs = [
  { q: "What is the difference between component and full-URL encoding?", a: "Component encoding (encodeURIComponent) escapes everything that is not safe in a single query value, including / ? & = and #. Full-URL encoding (encodeURI) leaves those structural characters intact so a complete address stays usable. Use component encoding for a single parameter value, full-URL for a whole link." },
  { q: "When do I need to URL-encode text?", a: "Whenever you put spaces, &, ?, #, +, or non-English characters into a query string or link. Encoding turns them into safe %-escapes so the URL is not broken or misread." },
  { q: "Can it decode %20 and + back to spaces?", a: "Yes. Decoding converts %-escapes such as %20 back to their original characters. Paste an encoded URL and click Decode." },
  { q: "Is anything uploaded?", a: "No. Encoding and decoding run entirely in your browser, so your URLs and data stay private." },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "SoftwareApplication", name: "URL Encode & Decode", applicationCategory: "DeveloperApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>URL <span className="grad">encode &amp; decode</span></h1>
        <p className="lede">Escape or unescape URLs and query parameters instantly — component or full-URL, all in your browser.</p>
      </div>
      <UrlCodec />
      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Encode and decode URLs correctly</h2>
        <p>
          Links break when they contain spaces, ampersands, question marks or non-English characters.
          URL encoding replaces those with safe %-escapes so the address survives being shared, stored
          or passed as a parameter. This tool offers both modes: <strong>component</strong> encoding for
          a single query value, and <strong>full-URL</strong> encoding for a complete address.
        </p>
        <p>
          Paste a messy, half-encoded link and decode it to read it, or encode a value before dropping
          it into a query string. Everything happens locally in your browser — nothing is uploaded.
        </p>
      </div>
      <Faq items={faqs} />
      <CtaBand heading="More free developer tools" text="Fast, private utilities that run entirely in your browser." links={[["/json-formatter/", "JSON Formatter"], ["/base64-encode-decode/", "Base64 Encode/Decode"], ["/hash-generator/", "Hash Generator"], ["/timestamp-converter/", "Timestamp Converter"]]} />
    </>
  );
}
