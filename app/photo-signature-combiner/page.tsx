import type { Metadata } from "next";
import PhotoSign from "./PhotoSign";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Photo & Signature Combiner — Join in One Image",
  description:
    "Combine your photo and signature into a single image for online forms. Stacked or side-by-side on a white background. Free, no upload, 100% in your browser.",
  alternates: { canonical: "/photo-signature-combiner/" },
};

const steps = [
  { icon: "🪪", title: "Upload both", text: "Add your passport photo and your signature." },
  { icon: "🧩", title: "Pick layout", text: "Photo over signature, or side by side, on white." },
  { icon: "⬇️", title: "Download", text: "Save the combined image, ready to upload." },
];
const features = [
  { icon: "🧩", title: "One image", text: "Some forms ask for photo and signature joined in a single file — done in one click." },
  { icon: "⬜", title: "White background", text: "Both are placed neatly on a clean white background." },
  { icon: "🔀", title: "Two layouts", text: "Stack vertically or place side by side, whichever your form needs." },
  { icon: "🔒", title: "Private", text: "Combining runs in your browser; nothing is uploaded." },
  { icon: "🎯", title: "Compress after", text: "Send the result to the Image Compressor for an exact KB size." },
  { icon: "🆓", title: "Free", text: "No sign-up, no watermark, no limits." },
];
const faqs = [
  { q: "Why do some forms need photo and signature in one image?", a: "Certain online application portals ask you to upload a single combined image containing both your photograph and signature. This tool creates exactly that." },
  { q: "How do I combine my photo and signature?", a: "Upload your photo and signature, choose a layout (photo over signature, or side by side), and click Combine. Download the single image that results." },
  { q: "Can I get it to a specific KB size?", a: "Yes — after combining, run the downloaded image through our Image Compressor to hit your form's exact file-size limit." },
  { q: "Are my files uploaded?", a: "No. The image is created in your browser, so your photo and signature stay on your device." },
  { q: "Is it free?", a: "Yes — free, no sign-up and no watermark." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Photo & Signature Combiner", applicationCategory: "MultimediaApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Combine <span className="grad">photo &amp; signature</span></h1>
        <p className="lede">Join your photo and signature into one image for online forms — free, no upload, 100% in your browser.</p>
      </div>
      <PhotoSign />
      <Steps heading={<>Combine in <span className="g">3 simple steps</span></>} steps={steps} />
      <Features heading={<>Why use this <span className="g">combiner</span></>} items={features} />
      <div className="card content">
        <h2 style={{ marginTop: 0 }}>One image with your photo and signature</h2>
        <p>
          Some online application portals ask candidates to upload a single image
          that contains both their photograph and signature. Doing this by hand in an editor is
          fiddly. This tool places both onto a clean white background — stacked or side by side — and
          gives you one ready-to-upload image.
        </p>
        <p>
          It works entirely in your browser, so your photo and signature are never uploaded. If your
          form also enforces a file-size limit, compress the result with our Image Compressor.
        </p>
      </div>
      <Faq items={faqs} />
      <CtaBand heading="Prepare every part of your application" text="Photo, signature and documents — sized, combined and compressed, free." links={[["/passport-photo-maker/", "Passport Photo"], ["/signature-resize/", "Signature Resize"], ["/image-compressor/", "Image Compressor"], ["/pdf/jpg-to-pdf/", "JPG to PDF"]]} />
    </>
  );
}
