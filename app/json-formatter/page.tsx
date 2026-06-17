import type { Metadata } from "next";
import Link from "next/link";
import JsonFormatter from "./JsonFormatter";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "JSON Formatter & Validator — Beautify, Minify, Validate JSON Online",
  description:
    "Free online JSON formatter and validator. Beautify, minify and validate JSON instantly with clear error messages — 100% in your browser, nothing uploaded.",
  alternates: { canonical: "/json-formatter/" },
};

const faqs = [
  { q: "How do I format (beautify) JSON?", a: "Paste your JSON and click Beautify. The tool re-indents it with 2 or 4 spaces so it is easy to read. If the JSON is invalid, you get a clear error message pointing to the problem." },
  { q: "What does minify do?", a: "Minify removes all whitespace and line breaks to give you the smallest valid JSON on a single line — useful for config values, API payloads and saving bytes." },
  { q: "Is my JSON sent to a server?", a: "No. The formatter runs entirely in your browser using the native JSON parser, so your data never leaves your device. That makes it safe for sensitive payloads." },
  { q: "Why does it say my JSON is invalid?", a: "Common causes are trailing commas, single quotes instead of double quotes, missing brackets or unquoted keys. The error message tells you where parsing failed so you can fix it." },
  { q: "Can it pretty-print large API responses?", a: "Yes. Paste a multi-megabyte API response and Beautify re-indents the whole structure so you can scan nested objects and arrays. Because parsing is native, even large payloads format in a fraction of a second." },
  { q: "Does it sort or change my keys?", a: "No. Beautify and Minify preserve your key order and values exactly — they only change whitespace and indentation. The output is the same JSON, just reformatted for readability or size." },
  { q: "Can I choose the indentation size?", a: "Yes. You can switch between 2-space and 4-space indentation when beautifying, matching whatever style your codebase or linter expects before you paste the result back." },
  { q: "Does it work offline?", a: "Once the page has loaded, the formatter keeps working without a connection because all parsing happens locally in the browser. There is no API call behind the Beautify, Minify or Validate buttons." },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "SoftwareApplication", name: "JSON Formatter & Validator", applicationCategory: "DeveloperApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>JSON <span className="grad">formatter &amp; validator</span></h1>
        <p className="lede">Beautify, minify and validate JSON instantly — with clear error messages, 100% in your browser.</p>
      </div>
      <JsonFormatter />
      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Format and validate JSON in one place</h2>
        <p>
          Whether you are debugging an API response, cleaning up a config file or just trying to read a
          wall of minified text, this JSON formatter makes it instant. Paste your JSON and choose
          <strong> Beautify</strong> to indent it neatly, <strong>Minify</strong> to collapse it to a
          single compact line, or <strong>Validate</strong> to confirm it parses — with a precise error
          message when it does not.
        </p>
        <p>
          Everything runs locally with your browser&apos;s native JSON engine, so even sensitive
          payloads, tokens and customer data stay on your own device. No upload, no sign-up, no limits.
        </p>
        <h3>How to use the JSON formatter</h3>
        <p>
          Paste your JSON into the input box, then click <strong>Beautify</strong> to indent it,{" "}
          <strong>Minify</strong> to compress it, or <strong>Validate</strong> to check it. If the
          parser hits a problem, the error points you at the exact spot — a trailing comma, a single
          quote or a missing bracket — so fixing malformed JSON takes seconds instead of squinting at a
          wall of text. Copy the cleaned-up result and paste it straight back into your code or config.
        </p>
        <h3>Common real-world uses</h3>
        <p>
          Developers reach for a JSON beautifier to read API responses, tidy{" "}
          <code>package.json</code> and other config files, prepare request bodies for testing, and
          shrink payloads before shipping them. If you are also handling encoded data, the{" "}
          <Link href="/base64-encode-decode/">Base64 encoder/decoder</Link> and{" "}
          <Link href="/url-encode-decode/">URL encoder</Link> pair naturally with this formatter, and
          you can browse the full set on the <Link href="/developer-tools/">developer tools</Link> page.
        </p>
      </div>
      <Faq items={faqs} />
      <CtaBand heading="More free developer tools" text="Fast, private utilities that run entirely in your browser." links={[["/base64-encode-decode/", "Base64 Encode/Decode"], ["/url-encode-decode/", "URL Encode/Decode"], ["/hash-generator/", "Hash Generator"], ["/uuid-generator/", "UUID Generator"]]} />
    </>
  );
}
