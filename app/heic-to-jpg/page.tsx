import type { Metadata } from "next";
import HeicConvert from "@/app/components/HeicConvert";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "HEIC to JPG Converter — Free, No Watermark, No Upload",
  description:
    "Convert HEIC to JPG online for free. Turn iPhone HEIC/HEIF photos into standard JPG images — no watermark, no sign-up, no email. 100% in your browser, files never uploaded.",
  alternates: { canonical: "/heic-to-jpg/" },
};

const faqs = [
  { q: "What is a HEIC file?", a: "HEIC (High Efficiency Image Container) is the format iPhones and iPads use to save photos. It is smaller than JPG but many websites, Windows PCs and forms cannot open it — so you often need to convert HEIC to JPG." },
  { q: "How do I convert HEIC to JPG?", a: "Drop your .heic photos above and the tool converts each one to a standard .jpg you can download. You can convert several at once, and it all happens in your browser." },
  { q: "Is the HEIC to JPG converter free, with no watermark?", a: "Yes — completely free, with no watermark, no sign-up and no email required. There is no limit on how many photos you convert." },
  { q: "Are my photos uploaded to a server?", a: "No. The conversion runs entirely on your device, so your iPhone photos are never uploaded anywhere — which matters for personal pictures." },
  { q: "Will the JPG lose quality?", a: "The tool converts at high quality, so the JPG looks the same as the original. JPG files are a little larger than HEIC because the format is less compressed." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "HEIC to JPG Converter", url: "https://toolskaro.com/heic-to-jpg/", applicationCategory: "MultimediaApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Convert <span className="grad">HEIC to JPG</span></h1>
        <p className="lede">Turn iPhone HEIC photos into standard JPG images — free, no watermark, no sign-up, and 100% in your browser. Convert as many as you like.</p>
      </div>

      <HeicConvert to="jpg" />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Open your iPhone photos anywhere</h2>
        <p>
          By default, iPhones save photos as <strong>HEIC</strong> — a modern, space-saving format. The
          catch is that many websites, Windows computers, older apps and upload forms can&apos;t open
          HEIC, so you end up needing a plain <strong>JPG</strong>. This converter turns your HEIC (and
          HEIF) photos into standard JPGs in a couple of clicks.
        </p>
        <p>
          Unlike many converters, there is <strong>no watermark, no account and no email</strong> — and
          nothing is uploaded, so your personal photos stay on your device. Need a PDF instead of
          separate images? Use <a href="/heic-to-pdf/">HEIC to PDF</a>, and to change other formats try
          the <a href="/image-converter/">image converter</a> or <a href="/png-to-jpg/">PNG to JPG</a>.
        </p>
      </div>

      <Faq items={faqs} />

      <CtaBand heading="More free image tools" text="Convert, compress and resize — no watermark, no upload." links={[["/heic-to-pdf/", "HEIC to PDF"], ["/image-converter/", "Image Converter"], ["/image-compressor/", "Image Compressor"], ["/png-to-jpg/", "PNG to JPG"]]} />
    </>
  );
}
