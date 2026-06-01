import type { Metadata } from "next";
import RemoveBg from "./RemoveBg";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Remove Background from Image — Free, No Upload",
  description:
    "Erase the background from any photo automatically, right in your browser. Download a transparent PNG — free, no signup, and your image is never uploaded to a server.",
  alternates: { canonical: "/remove-background/" },
};

const steps = [
  { icon: "📁", title: "Upload your photo", text: "Choose a JPG or PNG with a clear subject." },
  { icon: "🪄", title: "Auto cut-out", text: "On-device AI removes the background in a few seconds." },
  { icon: "⬇️", title: "Download PNG", text: "Save a transparent PNG ready to use anywhere." },
];

const features = [
  { icon: "🔒", title: "Never uploaded", text: "The AI runs in your browser — your photo stays on your device." },
  { icon: "🪄", title: "Automatic", text: "No manual masking; the subject is detected and cut out for you." },
  { icon: "🖼️", title: "Transparent PNG", text: "Place your subject on any colour, white background or design." },
  { icon: "🆓", title: "Free, full quality", text: "No watermark, no paywall, no sign-up — download full resolution." },
  { icon: "🛍️", title: "People & products", text: "Great for profile pictures, product photos, logos and graphics." },
  { icon: "🪪", title: "Passport ready", text: "Combine with the Passport Photo Maker for a white-background photo." },
];

const faqs = [
  { q: "Is my photo uploaded to a server?", a: "No. Unlike most background removers, this runs an AI model entirely inside your browser — your image never leaves your device, making it fully private." },
  { q: "Why does the first use take a moment?", a: "The first time, your browser downloads the AI model (a few MB). After that it is cached, so the next images process much faster." },
  { q: "What do I get as output?", a: "A PNG with a transparent background, so you can place your subject on any colour or design. For a white-background passport photo, send the result to our Passport Photo Maker." },
  { q: "Does it work for product photos and logos too?", a: "Yes. It works well for people, products and objects with a reasonably clear edge. Very fine details like loose hair or transparent glass can be harder for any automatic tool." },
  { q: "Is there a limit or watermark?", a: "No limits and no watermark. The tool is completely free and requires no sign-up." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Background Remover", applicationCategory: "MultimediaApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Remove image background <span className="grad">automatically</span></h1>
        <p className="lede">Erase the background and get a transparent PNG — free, and 100% private because it runs in your browser.</p>
      </div>

      <RemoveBg />

      <Steps heading={<>Remove it in <span className="g">3 simple steps</span></>} steps={steps} />
      <Features heading={<>Why use this <span className="g">background remover</span></>} items={features} />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>A private background remover that never uploads your photo</h2>
        <p>
          Most “free” background removers upload your photo to their servers, add a watermark, or
          lock the full-resolution download behind a paywall. ToolsKaro is different: the entire AI
          cut-out runs inside your browser using on-device machine learning. Your image is never
          transmitted anywhere, and the transparent PNG you download is full quality and free.
        </p>
        <p>
          It is perfect for preparing a clean profile picture, putting a product on a white backdrop
          for a listing, or — combined with our Passport Photo Maker — turning a casual photo into a
          white-background passport photo for exam and visa forms.
        </p>
      </div>

      <Faq items={faqs} />

      <CtaBand
        heading="Turn any photo into a clean, form-ready image"
        text="Cut out, resize and compress — all free and in your browser."
        links={[["/passport-photo-maker/", "Passport Photo"], ["/image-resizer/", "Image Resizer"], ["/image-compressor/", "Image Compressor"], ["/qr-code-generator/", "QR Generator"]]}
      />
    </>
  );
}
