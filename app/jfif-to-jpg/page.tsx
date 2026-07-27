import type { Metadata } from "next";
import Link from "next/link";
import ImageFormatConverter from "@/app/components/ImageFormatConverter";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import ToolBadges from "@/app/components/ToolBadges";
import RelatedTools from "@/app/components/RelatedTools";
import RecentTools from "@/app/components/RecentTools";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "JFIF to JPG Converter — Free Online, No Upload",
  description:
    "Convert JFIF to JPG online for free. Change .jfif images to standard .jpg files instantly in your browser — no signup, no watermark, files never uploaded.",
  alternates: { canonical: "/jfif-to-jpg/" },
};

const faqs = [
  { q: "What is a JFIF file?", a: "JFIF (JPEG File Interchange Format) is essentially a JPEG image saved with a .jfif extension. It contains the same JPEG data, but some apps and websites won't accept the .jfif name — so converting it to .jpg fixes that without any quality loss beyond normal JPEG re-encoding." },
  { q: "How do I convert JFIF to JPG?", a: "Click or drop your .jfif file above, and the tool re-saves it as a standard .jpg you can download immediately. It all happens in your browser." },
  { q: "Will the quality change?", a: "The image is re-encoded as JPG at a quality you can set with the slider. At 90%+ the difference is visually indistinguishable from the original." },
  { q: "Why does Windows save photos as JFIF?", a: "Some Windows and browser setups save downloaded JPEGs with a .jfif extension. The pixels are identical to a JPEG — only the file name differs — which is why a quick conversion to .jpg is all you need." },
  { q: "Are my files uploaded?", a: "No. The conversion runs entirely in your browser, so your image never leaves your device." },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "SoftwareApplication", name: "JFIF to JPG Converter", applicationCategory: "MultimediaApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>JFIF to <span className="grad">JPG</span></h1>
        <p className="lede">Convert .jfif images to standard .jpg files instantly — free, no watermark, and nothing is uploaded.</p>
        <ToolBadges />
      </div>

      <div className="tool-shell"><ImageFormatConverter to="jpeg" toLabel="JPG" downloadExt="jpg" /></div>

      <Steps heading={<>Convert in <span className="grad">3 simple steps</span></>} steps={[
        { icon: "📤", title: "Choose your JFIF", text: "Click or drop a .jfif image into the box." },
        { icon: "⚙️", title: "Pick quality", text: "Adjust the JPG quality if you want a smaller file." },
        { icon: "⬇️", title: "Download JPG", text: "Save the converted .jpg to your device." },
      ]} />
      <Features heading={<>Why use this <span className="grad">JFIF to JPG converter</span></>} items={[
        { icon: "⚡", title: "Instant", text: "Conversion happens the moment you choose a file." },
        { icon: "🎚️", title: "Quality control", text: "Set the JPG quality to balance size and sharpness." },
        { icon: "🚫", title: "No watermark", text: "Your JPG comes out clean, with no added branding." },
        { icon: "📱", title: "Any device", text: "Works on phone, tablet and desktop in any modern browser." },
        { icon: "🔒", title: "Private", text: "Files are processed locally and never uploaded." },
        { icon: "🆓", title: "Free", text: "No sign-up and no limits." },
      ]} />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Fix the .jfif extension in seconds</h2>
        <p>
          A <strong>JFIF</strong> file is just a JPEG with a different extension — but many upload forms,
          editors and messaging apps only accept <strong>.jpg</strong>. This converter re-saves your JFIF
          as a standard JPG so it works everywhere, without you having to reinstall software or change
          Windows settings.
        </p>
        <p>
          Need other conversions? Use the <Link href="/png-to-jpg/">PNG to JPG</Link>,{" "}
          <Link href="/webp-to-jpg/">WebP to JPG</Link> or <Link href="/heic-to-jpg/">HEIC to JPG</Link>{" "}
          tools, or the all-in-one <Link href="/image-converter/">image converter</Link>. Curious what a JFIF really is? Read{" "}<Link href="/blog/what-is-a-jfif-file/">what is a JFIF file</Link>.
        </p>
      </div>

      <RelatedTools heading="More image tools" hrefs={["/jfif-to-png/", "/png-to-jpg/", "/webp-to-jpg/", "/image-converter/"]} />
      <RecentTools current="/jfif-to-jpg/" />
      <Faq items={faqs} />
    </>
  );
}
