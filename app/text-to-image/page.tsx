import type { Metadata } from "next";
import Link from "next/link";
import TextToImage from "./TextToImage";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import ToolBadges from "@/app/components/ToolBadges";
import RelatedTools from "@/app/components/RelatedTools";
import RecentTools from "@/app/components/RecentTools";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Text to Image — Convert Text to JPG or PNG (Free)",
  description:
    "Convert text to an image online for free. Turn any text into a JPG or PNG with custom font size, width, background and text color — 100% in your browser, no upload.",
  alternates: { canonical: "/text-to-image/" },
};

const faqs = [
  { q: "How do I convert text to an image?", a: "Type or paste your text, adjust the font size, width and colors, then click Download. The tool renders your text onto a canvas and saves it as a JPG or PNG — all in your browser." },
  { q: "Can I save the text as JPG or PNG?", a: "Both. Choose PNG for crisp text on a transparent-capable background, or JPG for a smaller file. The download button uses whichever format you select." },
  { q: "Does long text wrap automatically?", a: "Yes. Text wraps to fit the width you set, and line breaks you type are preserved, so paragraphs stay readable in the image." },
  { q: "Is there a watermark?", a: "No. The image contains only your text — no watermark, no logo and no sign-up." },
  { q: "Is my text uploaded anywhere?", a: "No. The image is generated locally in your browser, so your text never leaves your device." },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "SoftwareApplication", name: "Text to Image Converter", applicationCategory: "MultimediaApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Text to <span className="grad">image</span></h1>
        <p className="lede">Turn any text into a JPG or PNG — pick the font size, width and colors, then download. Nothing is uploaded.</p>
        <ToolBadges />
      </div>

      <div className="tool-shell"><TextToImage /></div>

      <Steps heading={<>Convert in <span className="grad">3 simple steps</span></>} steps={[
        { icon: "⌨️", title: "Type your text", text: "Paste or type the text you want to turn into an image." },
        { icon: "🎨", title: "Style it", text: "Set the font size, width, background and text color." },
        { icon: "⬇️", title: "Download", text: "Save the result as a JPG or PNG in one click." },
      ]} />
      <Features heading={<>Why use this <span className="grad">text to image tool</span></>} items={[
        { icon: "🖼️", title: "JPG or PNG", text: "Export your text as either format, ready for chats, slides or social posts." },
        { icon: "🎨", title: "Full styling", text: "Custom font size, image width, background and text color." },
        { icon: "↩️", title: "Auto wrap", text: "Long text wraps to your chosen width and keeps your line breaks." },
        { icon: "🚫", title: "No watermark", text: "Just your text — no logo, no branding, no sign-up." },
        { icon: "🔒", title: "Private", text: "The image is made in your browser; your text is never uploaded." },
        { icon: "🆓", title: "Free", text: "No limits — make as many images as you like." },
      ]} />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Turn text into a shareable image</h2>
        <p>
          Sometimes you need words as a <strong>picture</strong> — a quote for Instagram, a caption for
          WhatsApp, a snippet for a slide, or text that can’t be edited or copied. This tool renders your
          text onto an image and lets you download it as a <strong>JPG or PNG</strong>, with control over
          the font size, width, background and text color.
        </p>
        <p>
          Everything happens in your browser, so it’s instant and private. Need the reverse or related
          tools? Try the <Link href="/image-converter/">image converter</Link>,{" "}
          <Link href="/crop-image/">crop image</Link> or the{" "}
          <Link href="/qr-code-generator/">QR code generator</Link>. New to this? See our{" "}<Link href="/blog/how-to-convert-text-to-image/">guide to converting text to an image</Link>.
        </p>
      </div>

      <RelatedTools heading="Related tools" hrefs={["/image-converter/", "/crop-image/", "/qr-code-generator/", "/image-compressor/"]} />
      <RecentTools current="/text-to-image/" />
      <Faq items={faqs} />
    </>
  );
}
