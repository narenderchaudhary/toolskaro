import type { Metadata } from "next";
import PassportPhoto from "./PassportPhoto";

export const metadata: Metadata = {
  title: "Passport Size Photo Maker — Free Online (3.5×4.5 cm, White Background)",
  description:
    "Make a passport-size photo online for exam forms, visa and ID. Choose 3.5×4.5 cm, 2×2 inch or form sizes with a white background. Free, no signup, 100% in your browser.",
  alternates: { canonical: "/passport-photo-maker/" },
};

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
      <h1>Passport Size Photo Maker</h1>
      <p className="lede">Create a passport-size photo with a white background for exam forms, visa and ID — free and entirely in your browser.</p>
      <PassportPhoto />
      <div className="ad-slot">Ad placement (AdSense)</div>

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>How to make a passport size photo</h2>
        <ol className="steps">
          <li>Upload a clear, front-facing photo of yourself.</li>
          <li>Choose the output size your application needs (3.5×4.5 cm, 2×2 inch, or a form size).</li>
          <li>Pick a background colour — white is standard for most Indian forms.</li>
          <li>Select <strong>Crop to fill</strong> for a tight passport crop, then click <strong>Make passport photo</strong> and download.</li>
        </ol>
      </div>

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
        <h3>Tips for an accepted photo</h3>
        <ul>
          <li>Face the camera straight on with a neutral expression.</li>
          <li>Use even, front lighting to avoid shadows behind you.</li>
          <li>Keep the background plain — white works for almost every form.</li>
          <li>After downloading, compress to your form’s KB limit if needed.</li>
        </ul>
      </div>

      <div className="card faq">
        <h2 style={{ marginTop: 0 }}>Frequently asked questions</h2>
        <dl>{faqs.map((f) => (<div key={f.q}><dt>{f.q}</dt><dd>{f.a}</dd></div>))}</dl>
      </div>
    </>
  );
}
