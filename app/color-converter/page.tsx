import type { Metadata } from "next";
import ColorConv from "./ColorConv";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Color Converter — HEX to RGB to HSL (with Color Picker)",
  description:
    "Convert colors between HEX, RGB and HSL with a live color picker and one-click copy. Free online color converter — 100% in your browser, no sign-up.",
  alternates: { canonical: "/color-converter/" },
};

const faqs = [
  { q: "How do I convert HEX to RGB?", a: "Type a hex code like #7c3aed (or pick a color with the swatch) and the RGB and HSL values update instantly. Click Copy next to any format to grab it." },
  { q: "Does it support short hex like #abc?", a: "Yes. Three-digit shorthand hex is expanded automatically, so #abc is treated the same as #aabbcc." },
  { q: "What is HSL and why use it?", a: "HSL describes a color by Hue, Saturation and Lightness, which is intuitive for adjusting tones — for example lightening a color by raising the L value while keeping the same hue." },
  { q: "Is it free and private?", a: "Yes. The converter runs entirely in your browser with no sign-up, and no data is uploaded." },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "SoftwareApplication", name: "Color Converter (HEX/RGB/HSL)", applicationCategory: "DeveloperApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Color <span className="grad">converter</span></h1>
        <p className="lede">Convert colors between HEX, RGB and HSL with a live picker — copy any format in one click.</p>
      </div>
      <ColorConv />
      <div className="card content">
        <h2 style={{ marginTop: 0 }}>HEX, RGB and HSL in sync</h2>
        <p>
          Designers and developers juggle the same color across three notations: <strong>HEX</strong>{" "}
          for CSS and design tools, <strong>RGB</strong> for canvas and image work, and{" "}
          <strong>HSL</strong> for intuitive tweaks to hue, saturation and lightness. Pick a color or
          type a hex code and all three update together, ready to copy.
        </p>
        <p>
          It is perfect for matching a brand color, building a palette or translating a value from one
          tool to another. Everything runs in your browser — no sign-up, nothing uploaded.
        </p>
      </div>
      <Faq items={faqs} />
      <CtaBand heading="More free tools" text="Fast, private utilities that run entirely in your browser." links={[["/json-formatter/", "JSON Formatter"], ["/lorem-ipsum-generator/", "Lorem Ipsum Generator"], ["/uuid-generator/", "UUID Generator"], ["/qr-code-generator/", "QR Code Generator"]]} />
    </>
  );
}
