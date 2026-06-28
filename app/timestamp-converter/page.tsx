import type { Metadata } from "next";
import Link from "next/link";
import Timestamp from "./Timestamp";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import ToolBadges from "@/app/components/ToolBadges";
import RelatedTools from "@/app/components/RelatedTools";
import RecentTools from "@/app/components/RecentTools";
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
  { q: "Why are some timestamps 10 digits and others 13?", a: "A 10-digit value counts seconds since the epoch, while a 13-digit value counts milliseconds. JavaScript and many APIs use milliseconds, whereas Unix tools and databases often use seconds. This converter detects the length and handles both." },
  { q: "Does the converter account for time zones?", a: "Yes. A Unix timestamp itself is always in UTC, but the tool also shows the moment in your local time zone alongside the UTC and ISO 8601 forms, so you can see exactly how the same instant appears in each." },
  { q: "What is ISO 8601 and why does it matter?", a: "ISO 8601 is the international standard date format, like 2026-06-17T09:30:00Z. It sorts correctly as text and is unambiguous across regions, which is why it is the preferred format for logs, APIs and data exchange." },
  { q: "What is the year 2038 problem?", a: "Systems that store Unix time as a signed 32-bit integer will overflow on 19 January 2038. Modern platforms use 64-bit timestamps, which push the limit billions of years away, so the issue mainly affects old or embedded software." },
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
        <ToolBadges />
      </div>

      <div className="tool-shell"><Timestamp /></div>

      <Steps
        heading={<>Convert a timestamp in <span className="grad">3 simple steps</span></>}
        steps={[
          { icon: "🔢", title: "Paste an epoch value", text: "Drop in a 10-digit (seconds) or 13-digit (milliseconds) number — the tool detects which." },
          { icon: "🕒", title: "Read the date", text: "See the moment in your local time, UTC and ISO 8601 format at once." },
          { icon: "📅", title: "Or go the other way", text: "Use the Date → Timestamp picker to turn any date into its Unix value in seconds or ms." },
        ]}
      />

      <Features
        heading={<>Why use this <span className="grad">timestamp converter</span></>}
        items={[
          { icon: "⏱️", title: "Seconds & milliseconds", text: "Auto-detects 10-digit and 13-digit values, so both Unix and JavaScript timestamps just work." },
          { icon: "🌍", title: "Local, UTC & ISO", text: "Shows every moment in your local zone, UTC and ISO 8601 so nothing is ambiguous." },
          { icon: "🔴", title: "Live current time", text: "The current timestamp updates every second from your device clock for quick tests." },
          { icon: "↔️", title: "Both directions", text: "Convert epoch → date to read logs, or date → epoch to build expiry and scheduling values." },
          { icon: "🔒", title: "100% in-browser", text: "All conversion is computed locally on your device — nothing is uploaded." },
          { icon: "🆓", title: "Free & unlimited", text: "No sign-up, no limits — works offline once the page has loaded." },
        ]}
      />

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
        <h3>How to convert a timestamp</h3>
        <p>
          To read an epoch value, paste your 10-digit (seconds) or 13-digit (milliseconds) number and
          the local, UTC and ISO 8601 dates appear at once. To go the other way, use the{" "}
          <strong>Date → Timestamp</strong> picker, choose a date and time, and copy the resulting Unix
          value in seconds or milliseconds. The live current timestamp is always one click away when you
          just need &quot;now&quot; for a quick test.
        </p>
        <h3>Common uses for epoch time</h3>
        <p>
          Reading server logs, debugging API responses, setting token expiry (<code>exp</code>) claims,
          scheduling jobs and comparing event times all involve Unix timestamps. If you are working with
          API payloads or encoded values too, the <Link href="/json-formatter/">JSON formatter</Link>{" "}
          and <Link href="/url-encode-decode/">URL encoder</Link> sit alongside this on the{" "}
          <Link href="/developer-tools/">developer tools</Link> page.
        </p>
      </div>
      <RelatedTools
        heading="More developer tools"
        hrefs={["/json-formatter/", "/url-encode-decode/", "/base64-encode-decode/", "/hash-generator/"]}
      />

      <RecentTools current="/timestamp-converter/" />

      <Faq items={faqs} />
    </>
  );
}
