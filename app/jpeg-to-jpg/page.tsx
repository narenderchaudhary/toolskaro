import type { Metadata } from "next";
import Converter from "@/app/image-converter/Converter";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "JPEG to JPG Converter — Free Online, No Upload",
  description:
    "Convert JPEG to JPG online for free. Change .jpeg to .jpg (or any image to JPG) instantly in your browser — no signup, no watermark, files never uploaded.",
  alternates: { canonical: "/jpeg-to-jpg/" },
};

const faqs = [
  { q: "Is JPEG the same as JPG?", a: "Yes — JPEG and JPG are the exact same image format. The only difference is the file extension. Older Windows software limited extensions to three letters, so '.jpeg' was shortened to '.jpg'. Both open in every app, so a JPEG file is already a JPG file with a longer extension." },
  { q: "How do I convert JPEG to JPG?", a: "Upload your .jpeg image above, make sure the output is set to JPG, and click Convert. The tool re-saves it as a .jpg file you can download instantly. It runs entirely in your browser." },
  { q: "Will converting JPEG to JPG reduce quality?", a: "Because they are the same format, you can keep the quality at 100% for an essentially identical file. If you lower the quality slider, the file gets smaller with a slight quality trade-off — useful when a form has a size limit." },
  { q: "Can I convert PNG or WebP to JPG here too?", a: "Yes. Upload any PNG, WebP or JPEG image and choose JPG as the output. The tool flattens transparency onto a white background and saves a standard JPG." },
  { q: "Is it free and private?", a: "Completely free, with no sign-up or watermark, and the conversion happens on your device — your image is never uploaded to a server." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "JPEG to JPG Converter", url: "https://toolskaro.com/jpeg-to-jpg/", applicationCategory: "MultimediaApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Convert <span className="grad">JPEG to JPG</span></h1>
        <p className="lede">Change your .jpeg image to a .jpg file (or convert any PNG/WebP to JPG) — free, instant and 100% in your browser. No signup, no upload.</p>
      </div>

      <Converter />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>JPEG and JPG — what&apos;s the difference?</h2>
        <p>
          There is no real difference: <strong>JPEG and JPG are the same image format</strong>. JPEG
          stands for &quot;Joint Photographic Experts Group&quot;, the team that created it. Decades ago,
          Windows only allowed three-letter file extensions, so &quot;.jpeg&quot; was shortened to
          &quot;.jpg&quot;. The data inside the file is identical — only the extension changes.
        </p>
        <p>
          So when you need to &quot;convert JPEG to JPG&quot;, you usually just need the file to <em>end in
          .jpg</em> — for an exam portal, a job application, or software that only accepts .jpg. This tool
          re-saves your image as a clean .jpg file in one click. You can keep the quality at 100% for an
          identical copy, or lower it to shrink the file for an upload limit. It also converts{" "}
          <a href="/image-converter/">PNG and WebP to JPG</a>, and pairs with our{" "}
          <a href="/image-compressor/">Image Compressor</a> if you need an exact KB size.
        </p>
      </div>

      <Faq items={faqs} />

      <CtaBand heading="More free image tools" text="Convert, compress and resize — all in your browser." links={[["/image-converter/", "Image Converter"], ["/image-compressor/", "Image Compressor"], ["/image-resizer/", "Image Resizer"], ["/passport-photo-maker/", "Passport Photo"]]} />
    </>
  );
}
