import type { Metadata } from "next";
import PassportPhoto from "./PassportPhoto";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Passport Size Photo Maker — Free Online (3.5×4.5 cm, White Background)",
  description:
    "Make a passport-size photo online for exam forms, visa and ID. Choose 3.5×4.5 cm, 2×2 inch or form sizes with a white background. Free, no signup, 100% in your browser.",
  alternates: { canonical: "/passport-photo-maker/" },
};

const steps = [
  { icon: "📁", title: "Upload your photo", text: "Choose a clear, front-facing photo of yourself." },
  { icon: "🪪", title: "Pick size & background", text: "Select 3.5×4.5 cm, 2×2 inch or a form size, with a white background." },
  { icon: "⬇️", title: "Download", text: "Crop to fill and save your ready-to-use passport photo." },
];

const features = [
  { icon: "🪪", title: "Standard photo sizes", text: "Passport 3.5×4.5 cm, 2×2 inch, and common exam-form sizes built in." },
  { icon: "⬜", title: "Clean background", text: "White, light blue or grey backgrounds — white is standard for forms." },
  { icon: "🏠", title: "Skip the studio", text: "Turn any decent photo into a passport photo at home in seconds." },
  { icon: "🔒", title: "Fully private", text: "Your photo is processed in your browser and never uploaded." },
  { icon: "🆓", title: "Free, no watermark", text: "Unlimited passport photos with no sign-up and no watermark." },
  { icon: "🎯", title: "Pairs with compressor", text: "Hit a KB limit by compressing the downloaded photo afterwards." },
];

const faqs = [
  { q: "What is the correct passport photo size in India?", a: "The standard passport photo is 3.5×4.5 cm (about 413×531 px at 300 DPI). Many exam forms also accept it. For US visa and some applications, a 2×2 inch (51×51 mm) photo is required. Always confirm the exact size in the official instructions." },
  { q: "Can I get a white background?", a: "Yes — choose the white background option (light blue and grey are also available). For photos shot against a busy background, remove the background first using our Remove Background tool, then make the passport photo." },
  { q: "How do I make a passport photo from a normal selfie?", a: "Upload your photo, pick the size preset your application needs, choose a background colour, and select ‘Crop to fill’ so your face fills the frame. Click Make passport photo and download it." },
  { q: "Will this meet the file size limit for my exam form?", a: "This tool sets the correct dimensions and background. If your form also has a KB limit (e.g. 20–50 KB), pass the downloaded photo through our Image Compressor to hit that exact size." },
  { q: "Is it free and private?", a: "Completely free, with no watermark or sign-up. Your photo is processed entirely in your browser and never uploaded to a server." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Passport Photo Maker", applicationCategory: "MultimediaApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Passport size photo maker <span className="grad">online</span></h1>
        <p className="lede">Create a passport-size photo with a white background for exam forms, visa and ID — free and entirely in your browser.</p>
      </div>

      <PassportPhoto />

      <Steps heading={<>Make it in <span className="g">3 simple steps</span></>} steps={steps} />
      <Features heading={<>Why use this <span className="g">passport photo maker</span></>} items={features} />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Skip the studio — make passport photos at home</h2>
        <p>
          A trip to the photo studio for a few passport prints costs time and money, and you still
          have to scan them for online forms. With this tool you can turn any decent front-facing
          photo into a correctly sized passport photo in seconds, ready to upload to an exam portal
          or print at home.
        </p>
        <p>
          The maker outputs the exact dimensions required for Indian passport and exam photos, on a
          clean background, with the face centred. For the sharpest result, start from a well-lit
          photo taken against a plain wall. If the background is messy, run it through our Remove
          Background tool first, then come back here to set the size and white background.
        </p>
      </div>

      <Faq items={faqs} />

      <CtaBand
        heading="Get a form-ready photo in seconds"
        text="Make, clean up and compress your application photo — all free and private."
        links={[["/remove-background/", "Remove Background"], ["/image-compressor/", "Image Compressor"], ["/image-resizer/", "Image Resizer"], ["/signature-resize/", "Signature Resize"]]}
      />
    </>
  );
}
