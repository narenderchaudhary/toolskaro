import type { Metadata } from "next";
import Link from "next/link";
import DogAgeCalc from "./DogAgeCalc";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import ToolBadges from "@/app/components/ToolBadges";
import RelatedTools from "@/app/components/RelatedTools";
import RecentTools from "@/app/components/RecentTools";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Dog Age Calculator — Dog Years to Human Years",
  description:
    "Free dog age calculator. Convert your dog's age to human years using a size-adjusted veterinary method — small, medium, large or giant breeds. 100% in your browser.",
  alternates: { canonical: "/dog-age-calculator/" },
};

const steps = [
  { icon: "🐕", title: "Enter your dog's age", text: "Type the age in years (and extra months if you know them)." },
  { icon: "⚖️", title: "Pick the breed size", text: "Small, medium, large or giant — bigger dogs age faster later in life." },
  { icon: "✅", title: "See human years", text: "Get the human-age equivalent plus your dog's life stage instantly." },
];

const features = [
  { icon: "🎯", title: "Size-adjusted method", text: "Uses the modern veterinary chart, not the outdated “multiply by 7” myth, so large and giant breeds are handled correctly." },
  { icon: "🐾", title: "Life stage", text: "Tells you whether your dog is a puppy, adult, mature or senior, so you can plan care and vet visits." },
  { icon: "📏", title: "Years and months", text: "Enter partial ages for young dogs — the first two years matter most for accuracy." },
  { icon: "⚡", title: "Instant", text: "The result updates the moment you change the age or size." },
  { icon: "🔒", title: "Private", text: "Everything is calculated in your browser; nothing is stored or uploaded." },
  { icon: "🆓", title: "Free", text: "No sign-up and no limits — use it as often as you like." },
];

const faqs = [
  { q: "How do you convert dog years to human years?", a: "This calculator uses a size-adjusted veterinary chart. A dog's first year is roughly 15 human years and the second adds about 9 more (so 2 dog years ≈ 24 human years). After that, each dog year adds between about 4 human years for small breeds and 7 for giant breeds, because larger dogs age faster later in life." },
  { q: "Is the “multiply by 7” rule accurate?", a: "No. Multiplying a dog's age by 7 is a rough myth. It badly underestimates the first two years — a one-year-old dog is closer to a 15-year-old human than a 7-year-old — and it ignores breed size. This tool shows the classic figure for comparison but uses the more accurate size-based method for the main result." },
  { q: "Why does breed size change the result?", a: "Small dogs live longer and age more slowly in later life, while large and giant breeds age faster and reach “senior” sooner. That's why a 10-year-old small dog and a 10-year-old giant dog are not the same in human years." },
  { q: "What size is my dog?", a: "As a guide: small is up to about 9 kg (20 lb), medium is 9–23 kg (21–50 lb), large is 23–41 kg (51–90 lb), and giant is over 41 kg (90 lb). If you're between two, pick the heavier one." },
  { q: "When is a dog considered senior?", a: "It depends on size, but broadly a dog is “mature” from about 7 years and “senior” from about 10. Giant breeds reach these stages earlier. The calculator shows the life stage alongside the human-age result." },
  { q: "Is my data saved?", a: "No. The calculation runs entirely in your browser and no information is stored or sent to any server." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Dog Age Calculator", applicationCategory: "UtilitiesApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Dog age in <span className="grad">human years</span></h1>
        <p className="lede">Convert your dog&apos;s age to human years with a size-adjusted veterinary method — not the old “multiply by 7” myth.</p>
        <ToolBadges />
      </div>

      <div className="tool-shell"><DogAgeCalc /></div>

      <Steps heading={<>Work it out in <span className="grad">3 simple steps</span></>} steps={steps} />
      <Features heading={<>Why use this <span className="grad">dog age calculator</span></>} items={features} />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>How dog years really work</h2>
        <p>
          The idea that one dog year equals seven human years is one of the most stubborn pet myths.
          In reality a dog matures very quickly at first — a one-year-old dog is roughly equivalent to
          a 15-year-old human — and then ages more gradually. Breed size matters too: small dogs live
          longer and age slowly in later life, while <strong>large and giant breeds</strong> age faster
          and reach their senior years sooner.
        </p>
        <p>
          This calculator uses a <strong>size-adjusted chart</strong> based on veterinary guidance. Enter
          your dog&apos;s age and pick the breed size, and you&apos;ll get a realistic human-age
          equivalent along with the life stage — puppy, adult, mature or senior — so you can plan diet,
          exercise and vet check-ups appropriately.
        </p>
        <h3>Small, medium, large or giant?</h3>
        <p>
          As a rough guide, small is up to about 9 kg, medium is 9–23 kg, large is 23–41 kg and giant is
          over 41 kg. If your dog sits between two sizes, choose the heavier category. For a human age
          gap between two dates instead, try the{" "}
          <Link href="/age-calculator/">age calculator</Link> or the{" "}
          <Link href="/date-difference-calculator/">date difference calculator</Link>. Want the full explanation? Read{" "}<Link href="/blog/dog-years-to-human-years/">dog years to human years</Link>.
        </p>
      </div>

      <RelatedTools
        heading="Related calculators"
        hrefs={["/age-calculator/", "/date-difference-calculator/", "/pregnancy-calculator/", "/tdee-calculator/"]}
      />

      <RecentTools current="/dog-age-calculator/" />

      <Faq items={faqs} />
    </>
  );
}
