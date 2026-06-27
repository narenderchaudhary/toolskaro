import type { Metadata } from "next";
import Compressor from "@/app/image-compressor/Compressor";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Resize Photo for PAN Card — Photo & Signature Size (Free)",
  description:
    "Resize photo and signature for a PAN card free. Hit the PAN card photo size and signature size the NSDL / UTIITSL form needs — 100% in your browser.",
  alternates: { canonical: "/resize-for-pan-card/" },
};

const faqs = [
  { q: "What photo size is needed for a PAN card?", a: "PAN card applications use a passport-style colour photo, commonly around 3.5×2.5 cm. For online PAN (Form 49A on the NSDL/Protean or UTIITSL portal), the photo is uploaded as a small JPG within a set KB limit. Always confirm the exact size on the official portal before submitting." },
  { q: "What is the signature size for a PAN card?", a: "The signature is a small JPG signed in black ink on white paper, kept under the portal's KB limit. Use the Signature Resize tool to set the size, then compress to the required KB." },
  { q: "How do I resize my photo for a PAN card online?", a: "Upload your photo below and compress it to the KB the form requires. To set exact centimetre dimensions first, use the Resize in CM tool (3.5×2.5 cm), then compress here." },
  { q: "How do I resize a signature for a PAN card application?", a: "Sign in black ink on white paper and scan or photograph it, then open the Signature Resize tool to set the dimensions and compress the JPG to the KB limit your PAN portal allows before uploading it with Form 49A." },
  { q: "What size should a PAN card photo and signature be?", a: "The PAN card photo is a passport-style colour photo, commonly around 3.5×2.5 cm, and the signature is a small JPG signed in black ink on white paper. Both are uploaded as JPGs within the portal's KB limit, so confirm the exact photo size and signature size on the official NSDL/Protean or UTIITSL portal before submitting." },
  { q: "Is it free and are my files uploaded?", a: "It is completely free with no sign-up, and your photo and signature are processed entirely in your browser — they are never uploaded to any server." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "PAN Card Photo Resizer", url: "https://toolskaro.com/resize-for-pan-card/", applicationCategory: "MultimediaApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Resize photo for <span className="grad">PAN card</span></h1>
        <p className="lede">Resize and compress your photo and signature for a PAN card application (Form 49A) to the right size and KB — free, no signup, in your browser.</p>
      </div>

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>PAN card photo &amp; signature requirements</h2>
        <p>A PAN card application (Form 49A on the NSDL/Protean or UTIITSL portal) asks for a recent colour photograph and a signature, each within set dimensions and a file-size limit:</p>
        <ul>
          <li><strong>Photograph:</strong> recent colour photo, JPG, around 3.5×2.5&nbsp;cm, on a plain light background, face clearly visible.</li>
          <li><strong>Signature:</strong> JPG, signed in black ink on white paper, kept under the portal&apos;s KB limit.</li>
        </ul>
        <p className="muted-note">⚠️ Exact photo size and KB limits differ between the NSDL/Protean and UTIITSL portals and can change — always confirm the current requirement on the official PAN portal before you upload.</p>
      </div>

      <Compressor initialTarget={50} />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Prepare both files in minutes</h2>
        <p>
          A PAN card application needs both files in order, so resize the photo and signature for your PAN
          card before you upload. Upload your photo above and compress it to the KB your PAN form needs. To
          set exact centimetre dimensions first, use <a href="/resize-image-in-cm/">resize in cm</a>
          (3.5×2.5&nbsp;cm), resize your signature for the PAN card with
          {" "}<a href="/signature-resize/">Signature Resize</a>, and get a clean white-background photo
          from the <a href="/passport-photo-maker/">Passport Photo Maker</a>. Everything runs in your
          browser, so your documents stay private.
        </p>
      </div>

      <Faq items={faqs} />

      <CtaBand heading="Get your PAN application ready" text="Photo, signature and documents — sized and private." links={[["/resize-image-in-cm/", "Resize in CM"], ["/signature-resize/", "Signature Resize"], ["/image-compressor/", "Image Compressor"], ["/passport-photo-maker/", "Passport Photo"]]} />
    </>
  );
}
