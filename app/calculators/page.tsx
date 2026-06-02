import type { Metadata } from "next";
import Link from "next/link";
import Hub from "@/app/components/Hub";

export const metadata: Metadata = {
  title: "Free Online Calculators — EMI, SIP, GST, Age, TDEE & More",
  description:
    "Free, instant online calculators: EMI, SIP, GST, simple & compound interest, percentage, marks % and CGPA, age and TDEE. Accurate results in your browser — no sign-up.",
  alternates: { canonical: "/calculators/" },
};

const faqs = [
  { q: "Are these calculators accurate?", a: "Yes. Each calculator uses the standard formula for its purpose — for example Mifflin–St Jeor for TDEE and the reducing-balance formula for EMI — and recalculates instantly as you change the inputs." },
  { q: "Do the calculators work offline / privately?", a: "All calculations run in your browser, so nothing you enter is sent to a server. Once the page has loaded, the maths happens entirely on your device." },
  { q: "Which calculator should I use for a loan?", a: "Use the EMI Calculator to find your monthly instalment, total interest and total payment for a home, car or personal loan. Pair it with the Interest Calculator to compare simple and compound interest." },
  { q: "Are the calculators free?", a: "Yes, every calculator is completely free with no sign-up and no limits on how often you use it." },
];

export default function Page() {
  return (
    <Hub
      catKey="calc"
      heading="Free Online Calculators"
      headingNode={<>Free <span className="grad">Online Calculators</span></>}
      lede="Instant, accurate calculators for money, studies and health — EMI, SIP, GST, interest, percentage, CGPA, age and TDEE. Free and private to your browser."
      faqs={faqs}
    >
      <h2 style={{ marginTop: 0 }}>Quick answers for money, studies and health</h2>
      <p>
        These calculators give you an instant, accurate answer without spreadsheets or formulas. For
        money, plan a loan with the <Link href="/emi-calculator/">EMI Calculator</Link>, project mutual
        fund returns with the <Link href="/sip-calculator/">SIP Calculator</Link>, work out tax with the{" "}
        <Link href="/gst-calculator/">GST Calculator</Link>, and compare{" "}
        <Link href="/interest-calculator/">simple and compound interest</Link>.
      </p>
      <p>
        For studies and everyday maths, the{" "}
        <Link href="/percentage-calculator/">Percentage Calculator</Link> and{" "}
        <Link href="/marks-percentage-calculator/">Marks % &amp; CGPA Calculator</Link> handle exam
        scores, while the <Link href="/age-calculator/">Age Calculator</Link> finds your exact age as on
        any cut-off date — useful for checking exam eligibility. For health, the{" "}
        <Link href="/tdee-calculator/">TDEE Calculator</Link> estimates your daily calorie needs. Each
        one recalculates instantly in your browser, with nothing uploaded.
      </p>
    </Hub>
  );
}
