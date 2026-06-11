import type { Metadata } from "next";
import PassportPhoto from "./PassportPhoto";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Passport Size Photo — Size, Dimensions & Maker (Free)",
  description:
    "Passport size photo dimensions & free maker: India 3.5×4.5 cm (≈413×531 px), US visa 2×2 inch (600×600 px). Make a passport-size photo with a white background in your browser.",
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
  { q: "What is the size of a passport size photo?", a: "The standard passport size photo in India is 3.5×4.5 cm (about 413×531 px at 300 DPI). For US visa, OCI and Green Card applications it is 2×2 inch (5.1×5.1 cm, 600×600 px). Schengen and UK visas also use 3.5×4.5 cm. Always confirm the exact size in the official instructions." },
  { q: "What is the passport size photo measurement in pixels?", a: "At 300 DPI, a 3.5×4.5 cm passport photo is about 413×531 pixels, and a 2×2 inch photo is 600×600 pixels. The maker above outputs these pixel dimensions automatically when you pick the matching preset." },
  { q: "What is the passport size photo size in cm?", a: "In India it is 3.5 cm wide by 4.5 cm tall (3.5×4.5 cm). The US 2-inch photo is 5.1×5.1 cm. Choose the matching preset and the tool sizes your photo exactly." },
  { q: "What is the ratio of a passport size photo?", a: "A 3.5×4.5 cm passport photo has an aspect ratio of about 7:9 (0.78) — slightly taller than wide. A 2×2 inch US photo is a 1:1 square ratio." },
  { q: "What is the photo size for an Indian passport?", a: "For an Indian passport the photo is 3.5×4.5 cm (about 1.38×1.77 inches, ≈413×531 px at 300 DPI) on a plain white background, with the face clearly visible. The maker above has this preset built in." },
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

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Passport size photo dimensions &amp; measurements</h2>
        <p>
          A <strong>passport size photo</strong> has a standard size, but it varies by country and
          purpose. Here are the most common passport photo dimensions and measurements — the maker above
          has presets for each:
        </p>
        <div className="size-table-wrap">
          <table className="size-table">
            <thead>
              <tr><th>Used for</th><th>Centimetres</th><th>Inches</th><th>Pixels (300 DPI)</th></tr>
            </thead>
            <tbody>
              <tr><td>India passport &amp; most exam forms</td><td>3.5 × 4.5 cm</td><td>1.38 × 1.77 in</td><td>≈ 413 × 531 px</td></tr>
              <tr><td>US visa, OCI, Green Card</td><td>5.1 × 5.1 cm</td><td>2 × 2 in</td><td>600 × 600 px</td></tr>
              <tr><td>Stamp size (some forms)</td><td>2 × 2.5 cm</td><td>0.8 × 1 in</td><td>≈ 236 × 295 px</td></tr>
              <tr><td>Schengen / UK visa</td><td>3.5 × 4.5 cm</td><td>1.38 × 1.77 in</td><td>≈ 413 × 531 px</td></tr>
            </tbody>
          </table>
        </div>
        <h3>Passport size photo in cm, inches &amp; ratio</h3>
        <p>
          In India, a passport size photo is <strong>3.5 cm wide × 4.5 cm tall</strong> — the same as
          <strong> 1.38 × 1.77 inches</strong>. That works out to an aspect <strong>ratio of about 7:9</strong>
          (0.78), so the photo is slightly taller than it is wide. For an <strong>Indian passport</strong> and
          most Indian exam forms, 3.5 × 4.5 cm is the standard; US visa, OCI and Green Card photos instead use
          the square <strong>2 × 2 inch (5.1 × 5.1 cm, 1:1 ratio)</strong> size. Pick the matching preset above and
          the maker outputs the exact dimensions for you.
        </p>
        <p className="muted-note">⚠️ Sizes and file limits vary between forms — always confirm the exact measurement in the official instructions before you upload or print.</p>
      </div>

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
