import type { Metadata } from "next";
import Crop from "./Crop";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Crop Image Online — Free Photo Cropper (No Upload)",
  description:
    "Crop your photo online for free. Drag to select any area or use aspect-ratio presets like 1:1 and passport size. 100% in your browser — no upload, no signup.",
  alternates: { canonical: "/crop-image/" },
};

const steps = [
  { icon: "📁", title: "Upload image", text: "Drop or choose a photo." },
  { icon: "✂️", title: "Select area", text: "Drag on the image, or tap an aspect-ratio preset." },
  { icon: "⬇️", title: "Download", text: "Crop and save your image." },
];
const features = [
  { icon: "🖱️", title: "Drag to crop", text: "Select exactly the area you want to keep, freehand." },
  { icon: "📐", title: "Aspect presets", text: "One-tap 1:1, passport 3.5:4.5, 4:3 and 16:9 crops." },
  { icon: "🔒", title: "Private", text: "Cropping runs in your browser; your photo is never uploaded." },
  { icon: "🏆", title: "Full resolution", text: "Crops from the original image, so quality is preserved." },
  { icon: "📱", title: "Works on mobile", text: "Touch-friendly selection on phones and tablets." },
  { icon: "🆓", title: "Free", text: "No sign-up, no watermark, no limits." },
];
const faqs = [
  { q: "How do I crop a photo?", a: "Upload your image, then drag across it to select the area you want to keep. You can also tap an aspect-ratio preset. Click Crop image and download the result." },
  { q: "Can I crop to a square or passport ratio?", a: "Yes — use the preset buttons for square (1:1), passport (3.5:4.5), 4:3 or 16:9, then fine-tune by dragging." },
  { q: "Is the quality reduced?", a: "No. The crop is taken from your original full-resolution image, so the kept area stays sharp." },
  { q: "Are my images uploaded?", a: "No. Everything happens in your browser — your photo never leaves your device." },
  { q: "Is it free?", a: "Yes — free, no sign-up and no watermark." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Crop Image", applicationCategory: "MultimediaApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Crop image <span className="grad">online</span></h1>
        <p className="lede">Drag to crop any part of your photo, or use a ratio preset — free, no upload, 100% in your browser.</p>
      </div>
      <Crop />
      <Steps heading={<>Crop in <span className="g">3 simple steps</span></>} steps={steps} />
      <Features heading={<>Why use this <span className="g">image cropper</span></>} items={features} />
      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Keep just the part that matters</h2>
        <p>
          Cropping removes the parts of a photo you don&apos;t need — to focus on a subject,
          straighten a composition, or fit an exact shape like a square profile picture or a
          passport ratio. Just drag across the image to select the area to keep, or start from a
          preset and adjust.
        </p>
        <p>
          The crop is taken from your original image at full resolution, so quality is preserved,
          and the whole process runs privately in your browser.
        </p>
      </div>
      <Faq items={faqs} />
      <CtaBand heading="Finish editing your photo" text="Crop, convert, resize and compress — all free and private." links={[["/image-converter/", "Image Converter"], ["/image-resizer/", "Image Resizer"], ["/passport-photo-maker/", "Passport Photo"], ["/image-compressor/", "Image Compressor"]]} />
    </>
  );
}
