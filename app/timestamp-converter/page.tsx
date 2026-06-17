import type { Metadata } from "next";
import Timestamp from "./Timestamp";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Unix Timestamp Converter — Epoch to Date & Date to Epoch",
  description:
    "Convert a Unix timestamp (epoch) to a human date and back, with the current timestamp live. Free online epoch converter supporting seconds and milliseconds.",
  alternates: { canonical: "/timestamp-converter/" },
};

const faqs = [
  { q: "What is a Unix timestamp?", a: "A Unix timestamp (or epoch time) is the number of seconds that have passed since 1 January 1970, 00:00 UTC. It is a simple, time-zone-free way for computers to store a moment in time." },
  { q: "Does it handle milliseconds too?", a: "Yes. Paste a value in seconds (10 digits) or milliseconds (13 digits) and the converter detects which it is, then shows the local, UTC and ISO 8601 date." },
  { q: "How do I convert a date to a timestamp?", a: "Use the Date → Timestamp picker, choose a date and time, and the tool shows the matching Unix value in both seconds and milliseconds." },
  { q: "Is the current timestamp accurate?", a: "It reads your device clock and updates every second, so it is as accurate as your computer's time. Everything runs in your browser." },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "SoftwareApplication", name: "Unix Timestamp Converter", applicationCategory: "DeveloperApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Unix <span className="grad">timestamp converter</span></h1>
        <p className="lede">Convert epoch time to a readable date and back — seconds or milliseconds, with the live current timestamp.</p>
      </div>
      <Timestamp />
      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Epoch time, made readable</h2>
        <p>
          Logs, databases and APIs store time as a Unix timestamp — the number of seconds since
          1 January 1970 UTC. This converter turns that number into a human date in your local time,
          UTC and ISO 8601 format, and goes the other way too: pick any date and get its epoch value in
          both seconds and milliseconds.
        </p>
        <p>
          The current timestamp at the top updates live from your device clock. Everything is computed
          in your browser, so nothing is uploaded.
        </p>
      </div>
      <Faq items={faqs} />
      <CtaBand heading="More free tools" text="Fast, private utilities that run entirely in your browser." links={[["/json-formatter/", "JSON Formatter"], ["/url-encode-decode/", "URL Encode/Decode"], ["/date-difference-calculator/", "Date Difference"], ["/age-calculator/", "Age Calculator"]]} />
    </>
  );
}
