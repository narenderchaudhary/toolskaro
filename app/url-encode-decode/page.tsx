import type { Metadata } from "next";
import Link from "next/link";
import UrlCodec from "./UrlCodec";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import ToolBadges from "@/app/components/ToolBadges";
import RelatedTools from "@/app/components/RelatedTools";
import RecentTools from "@/app/components/RecentTools";
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
  { q: "Why does a space become %20 sometimes and + other times?", a: "In a path or with encodeURIComponent a space becomes %20, but in older form submissions (application/x-www-form-urlencoded) a space becomes a plus sign. Both decode back to a space; the context decides which encoding a system expects." },
  { q: "Should I encode the whole URL or just one parameter?", a: "Encode only the individual value you are inserting into a query string. Encoding a whole URL with component encoding would escape the :// and ? characters and break it, which is why this tool keeps the two modes separate." },
  { q: "What characters are safe and never get encoded?", a: "Unreserved characters — letters A–Z and a–z, digits 0–9, and the symbols - _ . ~ — are always left as-is. Everything else may be percent-encoded depending on the mode you choose." },
  { q: "Can I fix a double-encoded URL?", a: "Yes. If you see sequences like %2520 (where %25 is an encoded percent sign), the URL was encoded twice. Decode it once to get %20, then decode again to recover the original space." },
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
        <ToolBadges />
      </div>

      <div className="tool-shell"><UrlCodec /></div>

      <Steps
        heading={<>Encode a URL in <span className="grad">3 simple steps</span></>}
        steps={[
          { icon: "🧭", title: "Pick encode or decode", text: "Choose Encode to escape text, or Decode to turn %-escapes back into readable characters." },
          { icon: "🔀", title: "Choose component or full-URL", text: "Use component mode for a single ?key=value, or full-URL mode for a complete link." },
          { icon: "📋", title: "Paste and copy", text: "Drop in your text, then copy the safely encoded or decoded result with one click." },
        ]}
      />

      <Features
        heading={<>Why use this <span className="grad">URL encoder</span></>}
        items={[
          { icon: "🔀", title: "Two encoding modes", text: "Component (encodeURIComponent) for single values, full-URL (encodeURI) for complete addresses." },
          { icon: "🔒", title: "100% private", text: "Encoding and decoding run entirely in your browser, so your URLs and data stay on your device." },
          { icon: "↩️", title: "Fix double-encoding", text: "Decode messy %2520-style links twice to recover the original spaces and characters." },
          { icon: "🔗", title: "Built for query strings", text: "Safely escape spaces, &, ?, # and non-English characters before dropping them into a link." },
          { icon: "📊", title: "Inspect tracking links", text: "Decode UTM, OAuth redirect and analytics URLs to see exactly what they contain." },
          { icon: "🆓", title: "Free & unlimited", text: "No sign-up, no limits — works offline once the page has loaded." },
        ]}
      />

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
        <h3>How to use it</h3>
        <p>
          Pick <strong>Encode</strong> or <strong>Decode</strong>, choose component or full-URL mode,
          paste your text, and copy the result. Use component mode when you are building a single{" "}
          <code>?key=value</code> pair from user input, and full-URL mode when you just want to clean up
          a complete link for sharing. Decoding turns %-escapes back into readable characters so you can
          inspect exactly what a tracking link or redirect actually contains.
        </p>
        <h3>Where URL encoding matters</h3>
        <p>
          Search queries, UTM tracking parameters, OAuth redirect URIs, API endpoints and analytics
          links all rely on correct percent-encoding to survive intact. If you are also assembling
          payloads or tokens, the <Link href="/base64-encode-decode/">Base64 encoder/decoder</Link> and{" "}
          <Link href="/json-formatter/">JSON formatter</Link> are handy companions, and the full set
          lives on the <Link href="/developer-tools/">developer tools</Link> page.
        </p>
      </div>
      <RelatedTools
        heading="More developer tools"
        hrefs={["/json-formatter/", "/base64-encode-decode/", "/hash-generator/", "/timestamp-converter/"]}
      />

      <RecentTools current="/url-encode-decode/" />

      <Faq items={faqs} />
    </>
  );
}
