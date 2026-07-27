import type { Metadata } from "next";
import Link from "next/link";
import UnitConverter from "./UnitConverter";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import ToolBadges from "@/app/components/ToolBadges";
import RelatedTools from "@/app/components/RelatedTools";
import RecentTools from "@/app/components/RecentTools";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Unit Converter — Meters to Feet, kg, °C & More",
  description:
    "Free online unit converter. Convert meters to feet, cm, inches, miles — plus weight (kg, lb), temperature (°C, °F), area, volume and speed. Instant and 100% in your browser.",
  alternates: { canonical: "/unit-converter/" },
};

const steps = [
  { icon: "📂", title: "Pick a category", text: "Choose length, weight, temperature, area, volume or speed." },
  { icon: "🔢", title: "Enter a value & units", text: "Type the number, then set the “from” and “to” units — e.g. meters to feet." },
  { icon: "✅", title: "Read the result", text: "The converted value updates instantly. Use ⇅ Swap to reverse the direction." },
];

const features = [
  { icon: "📏", title: "Meters to feet & back", text: "The headline conversion is ready by default — plus cm, mm, inches, yards, miles and nautical miles." },
  { icon: "🧭", title: "Six categories", text: "Length, weight, temperature, area, volume and speed — one tool for everyday conversions." },
  { icon: "🌡️", title: "Accurate temperature", text: "Celsius, Fahrenheit and Kelvin use the correct formulas, not a simple ratio." },
  { icon: "⇅", title: "One-tap swap", text: "Flip the direction of any conversion instantly without retyping." },
  { icon: "🔒", title: "Private & offline", text: "Everything is calculated in your browser — nothing is uploaded and it works offline." },
  { icon: "🆓", title: "Free & unlimited", text: "No sign-up and no limits — convert as often as you like." },
];

const faqs = [
  { q: "How many feet are in a meter?", a: "One meter equals about 3.28084 feet. To convert meters to feet, multiply the number of meters by 3.28084 — so 5 meters is roughly 16.4 feet. To go the other way, multiply feet by 0.3048 to get meters." },
  { q: "How do I convert feet to meters?", a: "Multiply the number of feet by 0.3048. For example, 10 feet × 0.3048 = 3.048 meters. In this tool, pick Length, set “from” to Foot and “to” to Meter, and the result appears instantly." },
  { q: "What units does the length converter support?", a: "Meter, foot, centimeter, millimeter, kilometer, inch, yard, mile and nautical mile. You can convert between any two of them in either direction." },
  { q: "Why isn't temperature just a ratio?", a: "Temperature scales have different zero points, so you can't simply multiply by a factor. This tool uses the proper formulas — for example °F = °C × 9/5 + 32, and Kelvin = °C + 273.15 — so the results are correct." },
  { q: "Is US or UK gallon used for volume?", a: "Both. The volume category lists “Gallon — US” and “Gallon — UK” separately, because a US gallon (about 3.785 L) is smaller than a UK/imperial gallon (about 4.546 L)." },
  { q: "Are the conversions accurate?", a: "Yes. The tool uses exact internationally-defined conversion factors (for example 1 inch = 0.0254 m exactly) and shows up to 8 significant figures, so results are precise for everyday and technical use." },
  { q: "Is my data sent anywhere?", a: "No. All conversions run in your browser with JavaScript. Nothing you type is uploaded, and the tool works even offline once the page has loaded." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Unit Converter", applicationCategory: "UtilitiesApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Unit <span className="grad">converter</span></h1>
        <p className="lede">Convert meters to feet — and kg, °C, area, volume and speed — instantly. All in your browser, nothing uploaded.</p>
        <ToolBadges />
      </div>

      <div className="tool-shell"><UnitConverter /></div>

      <Steps heading={<>Convert in <span className="grad">3 simple steps</span></>} steps={steps} />
      <Features heading={<>Why use this <span className="grad">unit converter</span></>} items={features} />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Meters to feet and every other measurement</h2>
        <p>
          The most common everyday conversion is <strong>meters to feet</strong>: one meter is about{" "}
          <strong>3.28084 feet</strong>, and one foot is exactly <strong>0.3048 meters</strong>. This
          converter has that ready by default, and covers the full set of length units too — centimeters,
          millimeters, kilometers, inches, yards, miles and nautical miles — so you can move between the
          metric and imperial systems in either direction.
        </p>
        <p>
          Beyond length, it handles the measurements you reach for most: <strong>weight</strong> (kg, g,
          pounds, ounces, stone, tons), <strong>temperature</strong> (Celsius, Fahrenheit, Kelvin with the
          correct formulas), <strong>area</strong> (m², ft², acres, hectares), <strong>volume</strong>{" "}
          (liters, US and UK gallons, cups, cubic meters) and <strong>speed</strong> (km/h, mph, m/s,
          knots). Pick a category, enter a value, choose your units, and the answer appears instantly —
          use the ⇅ Swap button to reverse the direction.
        </p>
        <h3>Quick length reference</h3>
        <p>
          1 meter = 3.28084 feet = 100 cm = 39.3701 inches. 1 foot = 0.3048 m = 30.48 cm = 12 inches.
          1 mile = 1.60934 km. 1 inch = 2.54 cm. For photo and document sizes in centimeters, see the{" "}
          <Link href="/resize-image-in-cm/">resize image in cm</Link> tool, and for everyday math try the{" "}
          <Link href="/percentage-calculator/">percentage calculator</Link>. See also our{" "}<Link href="/blog/meters-to-feet-conversion-guide/">meters to feet conversion guide</Link>.
        </p>
      </div>

      <RelatedTools
        heading="Related tools"
        hrefs={["/percentage-calculator/", "/resize-image-in-cm/", "/age-calculator/", "/date-difference-calculator/"]}
      />

      <RecentTools current="/unit-converter/" />

      <Faq items={faqs} />
    </>
  );
}
