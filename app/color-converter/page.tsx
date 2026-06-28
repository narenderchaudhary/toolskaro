import type { Metadata } from "next";
import Link from "next/link";
import ColorConv from "./ColorConv";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import ToolBadges from "@/app/components/ToolBadges";
import RelatedTools from "@/app/components/RelatedTools";
import RecentTools from "@/app/components/RecentTools";
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
  { q: "What is the difference between HEX and RGB?", a: "They describe the same color in different notations. HEX writes the red, green and blue channels as a single hexadecimal string like #7c3aed, while RGB lists them as three decimal numbers from 0 to 255. HEX is compact for CSS; RGB is easier to compute with." },
  { q: "How do I make a color lighter or darker?", a: "Work in HSL. Keep the Hue and Saturation the same and raise the Lightness (L) value to lighten, or lower it to darken. Because only one number changes, you get a consistent tint or shade of the original color." },
  { q: "Can I get an RGBA value with transparency?", a: "RGB and HSL here describe the solid color. To add transparency, append an alpha value to form rgba(r, g, b, a) or hsla(...), where a runs from 0 (transparent) to 1 (opaque). The RGB numbers stay the same; you just add the alpha channel." },
  { q: "Are HEX colors case-sensitive?", a: "No. #7C3AED and #7c3aed are the same color, so you can use whichever case your style guide prefers. The converter reads both and you can copy the format you need." },
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
        <ToolBadges />
      </div>

      <div className="tool-shell"><ColorConv /></div>

      <Steps
        heading={<>Convert a color in <span className="grad">3 simple steps</span></>}
        steps={[
          { icon: "🎨", title: "Enter a color", text: "Type a hex code like #7c3aed, or open the swatch and pick a color visually." },
          { icon: "🔄", title: "See every format", text: "The HEX, RGB and HSL equivalents update together the instant you change the input." },
          { icon: "📋", title: "Copy what you need", text: "Hit Copy next to any format to drop it straight into your CSS, design file or code." },
        ]}
      />

      <Features
        heading={<>Why use this <span className="grad">color converter</span></>}
        items={[
          { icon: "🔁", title: "HEX, RGB & HSL in sync", text: "All three notations update together, so you always have the format each tool expects." },
          { icon: "🖌️", title: "Live color picker", text: "Pick a color visually with the swatch instead of guessing hex codes by hand." },
          { icon: "✨", title: "Shorthand expansion", text: "Three-digit hex like #abc is expanded to #aabbcc automatically — no manual spelling out." },
          { icon: "🎚️", title: "Easy tints & shades", text: "Adjust Lightness in HSL to lighten or darken a color while keeping the same hue." },
          { icon: "🔒", title: "100% in-browser", text: "Conversion runs locally with no sign-up and nothing uploaded." },
          { icon: "🆓", title: "Free & unlimited", text: "No sign-up, no limits — works offline once the page has loaded." },
        ]}
      />

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
        <h3>How to convert a color</h3>
        <p>
          Type a hex code like <code>#7c3aed</code>, or open the swatch and pick a color visually. The{" "}
          <strong>RGB</strong> and <strong>HSL</strong> equivalents update the instant you change the
          input, and a Copy button next to each format drops it straight into your CSS, design file or
          code. Shorthand hex such as <code>#abc</code> is expanded automatically, so you never have to
          spell it out yourself.
        </p>
        <h3>Building and matching palettes</h3>
        <p>
          HSL makes it easy to derive tints and shades for a consistent palette, while HEX and RGB keep
          you compatible with CSS, canvas and image tools. While you design, the{" "}
          <Link href="/lorem-ipsum-generator/">Lorem Ipsum generator</Link> fills your mockups with
          placeholder copy, and the <Link href="/qr-code-generator/">QR code generator</Link> is handy
          for prototypes. Find the rest on the <Link href="/utilities/">utilities</Link> page.
        </p>
      </div>
      <RelatedTools
        heading="More developer tools"
        hrefs={["/json-formatter/", "/lorem-ipsum-generator/", "/uuid-generator/", "/base64-encode-decode/"]}
      />

      <RecentTools current="/color-converter/" />

      <Faq items={faqs} />
    </>
  );
}
