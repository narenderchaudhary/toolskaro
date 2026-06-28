import type { Metadata } from "next";
import Percent from "./Percent";
import Faq from "@/app/components/Faq";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import ToolBadges from "@/app/components/ToolBadges";
import RelatedTools from "@/app/components/RelatedTools";
import RecentTools from "@/app/components/RecentTools";

export const metadata: Metadata = {
  title: "Percentage Calculator — Calculate Percentages Online (Free)",
  description:
    "Free percentage calculator. Find X% of Y, what percent one number is of another, and percentage increase or decrease — all instantly in your browser.",
  alternates: { canonical: "/percentage-calculator/" },
};

const faqs = [
  { q: "How do I calculate a percentage of a number?", a: "Multiply the number by the percentage and divide by 100. For example, 15% of 2500 = 2500 × 15 ÷ 100 = 375. Use the first box above to do it instantly." },
  { q: "How do I find what percent one number is of another?", a: "Divide the first number by the second and multiply by 100. For example, 45 out of 60 = 45 ÷ 60 × 100 = 75%. Use the second box above." },
  { q: "How is percentage increase or decrease calculated?", a: "Subtract the old value from the new value, divide by the old value, and multiply by 100. A positive result is an increase; a negative result is a decrease." },
  { q: "Is it free?", a: "Yes — free, no sign-up, and it runs entirely in your browser." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Percentage Calculator", applicationCategory: "UtilitiesApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Percentage <span className="grad">Calculator</span></h1>
        <p className="lede">Find X% of a number, what percent one value is of another, and percentage increase or decrease — all in one place.</p>
        <ToolBadges />
      </div>

      <div className="tool-shell"><Percent /></div>

      <Steps
        heading={<>Calculate a percentage in <span className="grad">3 simple steps</span></>}
        steps={[
          { icon: "🧮", title: "Pick a calculation", text: "Choose X% of a number, what percent one value is of another, or the percentage change." },
          { icon: "⌨️", title: "Type your numbers", text: "Enter your values in the boxes — there's no button to press." },
          { icon: "✅", title: "Read the answer", text: "The result updates instantly as you type, ready to copy or use." },
        ]}
      />

      <Features
        heading={<>Why use this <span className="grad">percentage calculator</span></>}
        items={[
          { icon: "🧮", title: "Three tools in one", text: "Percentage of a number, percent of a total, and increase/decrease — no switching pages." },
          { icon: "⚡", title: "Instant results", text: "Answers appear the moment you type — no submit, no waiting." },
          { icon: "🎯", title: "Accurate every time", text: "Clean math with no rounding surprises, ideal for marks, discounts and interest." },
          { icon: "🔒", title: "100% private", text: "Everything runs in your browser; nothing you type is uploaded or stored." },
          { icon: "📱", title: "Works anywhere", text: "Phone, tablet or desktop, in any modern browser." },
          { icon: "🆓", title: "Free & unlimited", text: "No sign-up, no limits — use it as often as you like." },
        ]}
      />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Three percentage calculations in one tool</h2>
        <p>
          Percentages come up everywhere — discounts, exam marks, interest, tips and statistics.
          This tool covers the three most common questions at once: what is a percentage of a
          number, what percentage one number is of another, and the percentage change between two
          values. Just type your numbers and the answers appear instantly.
        </p>
        <p>
          For converting exam marks or CGPA to a percentage specifically, use our dedicated Marks
          Percentage &amp; CGPA calculator. Everything runs in your browser with nothing stored.
        </p>
      </div>

      <RelatedTools
        heading="Related calculators"
        hrefs={["/marks-percentage-calculator/", "/emi-calculator/", "/gst-calculator/", "/interest-calculator/"]}
      />

      <RecentTools current="/percentage-calculator/" />

      <Faq items={faqs} />
    </>
  );
}
