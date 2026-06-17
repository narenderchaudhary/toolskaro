import type { Metadata } from "next";
import Link from "next/link";
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
  { q: "What pixel size should a signature be for online forms?", a: "Many Indian exam portals expect a signature around 140×60 px, though some ask for up to about 300×80 px. The exact figure is in your official notification — enter those numbers as the width and height, or start from a preset and adjust. Keeping the strip wide and short matches how a real signature looks." },
  { q: "How do I scan my signature for an exam application?", a: "Sign clearly with a dark blue or black pen on plain white paper, leaving a margin around the writing. Scan at around 200–300 DPI, or photograph it straight on in bright, even light with no shadows. Then upload the result here to set the exact size and KB limit your form needs." },
  { q: "Can I make the signature file smaller than 20 KB?", a: "Yes. Set a lower maximum KB and the tool compresses the white-background JPG to fit. Signatures are mostly white space, so they shrink easily — if you need an even tighter target, reduce the pixel dimensions slightly first and the file size drops further." },
  { q: "Should the signature and photo be uploaded as separate files?", a: "Almost always, yes. Portals have one upload box for the photograph and another for the signature, each with its own size and KB rules. Prepare the signature here, make the photo with the Passport Photo Maker, and keep them as two separate JPG files." },
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
        <h3>Typical signature size and KB limits</h3>
        <p>
          Signature boxes are smaller and stricter than photo boxes. A common requirement is a strip
          around 140×60&nbsp;px kept inside 10–20&nbsp;KB, but some recruiters allow a wider
          300&nbsp;px image. Check your notification and enter those exact numbers above. If you only
          need to hit a weight rather than a shape, the
          {" "}<Link href="/resize-image-in-kb/">resize image in KB</Link> tool and presets like
          {" "}<Link href="/compress-image-to-20kb/">compress to 20&nbsp;KB</Link> get you there in
          one tap.
        </p>
        <h3>Capturing a clean signature</h3>
        <p>
          The clearer your source, the cleaner the result. Sign with a dark pen on white paper, leave
          a margin, and either scan it or take a straight-on photo in bright, even light. Crop tightly
          around the strokes before uploading so the tool does not waste pixels on blank paper. If a
          scan comes out as a PNG, convert it with our
          {" "}<Link href="/png-to-jpg/">PNG to JPG</Link> tool first, since most portals accept only
          JPG signatures.
        </p>
        <h3>Mistakes that get a signature rejected</h3>
        <p>
          Watch for a few common problems: a light pencil or thin gel pen that scans too faintly, a
          grey or yellow tint from poor lighting, a file that is the wrong shape or above the KB
          limit, and accidentally uploading the signature in the photo box. Fix the size and weight
          here, then prepare the matching photograph with the
          {" "}<Link href="/passport-photo-maker/">Passport Photo Maker</Link> so both files meet
          their own rules.
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
