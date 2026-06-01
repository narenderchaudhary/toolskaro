import type { Metadata } from "next";
import SignatureResize from "./SignatureResize";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Signature Resize — Exact Size & KB for Exams",
  description:
    "Resize your signature to the exact pixel size and KB limit required by SSC, UPSC, Bank and Railway exam forms (e.g. 10–20 KB). Free, no signup, 100% in your browser.",
  alternates: { canonical: "/signature-resize/" },
};

const steps = [
  { icon: "✍️", title: "Scan your signature", text: "Sign on white paper with a dark pen and photograph or scan it." },
  { icon: "📐", title: "Set size & KB limit", text: "Choose a preset or enter dimensions, and set the max KB (e.g. 20)." },
  { icon: "⬇️", title: "Download", text: "Save your signature, sized and within the limit, on a white background." },
];

const features = [
  { icon: "📏", title: "Exact dimensions", text: "Resize to the precise width and height your application expects." },
  { icon: "🎯", title: "KB ceiling", text: "Automatically keeps the file under your form's size limit (often 10–20 KB)." },
  { icon: "⬜", title: "White background", text: "Outputs a clean white-background JPG that exam portals accept." },
  { icon: "🔒", title: "Private", text: "Processed in your browser — your signature is never uploaded." },
  { icon: "🆓", title: "Free & unlimited", text: "No sign-up, no watermark, no limits." },
  { icon: "🧩", title: "Part of the kit", text: "Use alongside the photo and PDF tools to finish your whole application." },
];

const faqs = [
  { q: "What size should a signature be for exam forms?", a: "Most forms ask for a signature around 3×1 cm with a file size of 10–20 KB. Set the width, height and max KB to match your form's instructions, which are listed in the official notification." },
  { q: "How do I reduce my signature to 20 KB?", a: "Upload a scan or photo of your signature, choose a size preset or enter custom dimensions, set the maximum KB (for example 20), and click Resize. The tool fits your signature within that size on a white background." },
  { q: "Will the white background be kept?", a: "Yes — the signature is placed on a clean white background and saved as JPG, the format exam portals accept. For best results, sign with a dark pen on white paper before scanning or photographing it." },
  { q: "My signature scan has a grey or yellow tint — can I fix it?", a: "Use a well-lit photo or a proper scan on white paper. The tool keeps a white background, but a clean source image gives the clearest result." },
  { q: "Is it free and private?", a: "Yes — free, no sign-up, no watermark, and your signature is processed entirely in your browser and never uploaded." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Signature Resizer", applicationCategory: "MultimediaApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Resize your signature to <span className="grad">size & KB</span></h1>
        <p className="lede">Resize your signature to the exact dimensions and KB limit your exam form needs — free and entirely in your browser.</p>
      </div>

      <SignatureResize />

      <Steps heading={<>Resize in <span className="g">3 simple steps</span></>} steps={steps} />
      <Features heading={<>Why use this <span className="g">signature resizer</span></>} items={features} />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Get your signature accepted on the first try</h2>
        <p>
          Online exam applications check your signature against strict rules: a small pixel size, a
          tight file-size range (often 10–20 KB), and a plain background. A photo of your signature
          is almost always too big and the wrong shape, so the upload fails. This tool fixes both at
          once — it scales your signature to the dimensions you choose and squeezes it under your KB
          limit, on a clean white background.
        </p>
        <p>
          Like all ToolsKaro utilities, it works entirely inside your browser. Your signature is
          never sent to a server, so it stays completely private. Pair it with our Image Compressor
          and Passport Photo Maker to prepare every part of your application in minutes.
        </p>
      </div>

      <Faq items={faqs} />

      <CtaBand
        heading="Finish your application paperwork in minutes"
        text="Photo, signature and documents — sized, compressed and converted, all free."
        links={[["/image-compressor/", "Image Compressor"], ["/passport-photo-maker/", "Passport Photo"], ["/image-resizer/", "Image Resizer"], ["/pdf/jpg-to-pdf/", "JPG to PDF"]]}
      />
    </>
  );
}
