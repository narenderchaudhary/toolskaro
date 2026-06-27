import type { Metadata } from "next";
import Link from "next/link";
import PassportPhoto from "./PassportPhoto";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Passport Size Photo — Size, Dimensions & Maker (Free)",
  description:
    "Passport photo size & dimensions: US 2×2 inch (600×600 px), India/UK/Schengen 3.5×4.5 cm. Free passport size photo maker with a white background in your browser.",
  alternates: { canonical: "/passport-photo-maker/" },
};

const steps = [
  { icon: "📁", title: "Upload your photo", text: "Choose a clear, front-facing photo of yourself." },
  { icon: "🪪", title: "Pick size & background", text: "Select 3.5×4.5 cm, 2×2 inch or another form size, with a white background." },
  { icon: "⬇️", title: "Download", text: "Crop to fill and save your ready-to-use passport photo." },
];

const features = [
  { icon: "🪪", title: "Standard photo sizes", text: "Passport 3.5×4.5 cm, 2×2 inch, and other common form sizes built in." },
  { icon: "⬜", title: "Clean background", text: "White, light blue or grey backgrounds — white is the standard for forms." },
  { icon: "🏠", title: "Skip the studio", text: "Turn any decent photo into a passport photo at home in seconds." },
  { icon: "🔒", title: "Fully private", text: "Your photo is processed in your browser and never uploaded." },
  { icon: "🆓", title: "Free, no watermark", text: "Unlimited passport photos with no sign-up and no watermark." },
  { icon: "🎯", title: "Pairs with compressor", text: "Hit a KB limit by compressing the downloaded photo afterwards." },
];

const faqs = [
  { q: "What is the size of a passport size photo?", a: "The standard passport size photo in India is 3.5×4.5 cm (about 413×531 px at 300 DPI). For US visa, OCI and Green Card applications it is 2×2 inch (5.1×5.1 cm, 600×600 px). Schengen and UK visas also use 3.5×4.5 cm. Always confirm the exact size in the official instructions." },
  { q: "What is the standard passport photo size?", a: "There is no single global passport photo size. The US standard is 2×2 inch (600×600 px), while India, the UK and Schengen countries use 3.5×4.5 cm (≈413×531 px at 300 DPI). Pick the preset for your country above and the maker outputs the correct passport photo dimensions automatically." },
  { q: "What is the US passport photo size?", a: "The US passport photo size is 2×2 inch (5.1×5.1 cm), which is 600×600 pixels at 300 DPI — a square 1:1 photo on a plain white background. The same 2×2 inch size is used for US visas, OCI cards and Green Card applications. Choose the 2×2 inch preset above to get these exact dimensions." },
  { q: "What is the passport size photo measurement in pixels?", a: "At 300 DPI, a 3.5×4.5 cm passport photo is about 413×531 pixels, and a 2×2 inch photo is 600×600 pixels. The maker above outputs these pixel dimensions automatically when you pick the matching preset." },
  { q: "What is the passport size photo size in cm?", a: "In India it is 3.5 cm wide by 4.5 cm tall (3.5×4.5 cm). The US 2-inch photo is 5.1×5.1 cm. Choose the matching preset and the tool sizes your photo exactly." },
  { q: "What is the ratio of a passport size photo?", a: "A 3.5×4.5 cm passport photo has an aspect ratio of about 7:9 (0.78) — slightly taller than wide. A 2×2 inch US photo is a 1:1 square ratio." },
  { q: "What is the photo size for an Indian passport?", a: "For an Indian passport the photo is 3.5×4.5 cm (about 1.38×1.77 inches, ≈413×531 px at 300 DPI) on a plain white background, with the face clearly visible. The maker above has this preset built in." },
  { q: "Can I get a white background?", a: "Yes — choose the white background option (light blue and grey are also available). For photos shot against a busy background, remove the background first using our Remove Background tool, then make the passport photo." },
  { q: "How do I make a passport photo from a normal selfie?", a: "Upload your photo, pick the size preset your application needs, choose a background colour, and select ‘Crop to fill’ so your face fills the frame. Click Make passport photo and download it." },
  { q: "Will this meet the file size limit for my form?", a: "This tool sets the correct dimensions and background. If your form also has a KB limit (e.g. 20–50 KB), pass the downloaded photo through our Image Compressor to hit that exact size." },
  { q: "Is it free and private?", a: "Completely free, with no watermark or sign-up. Your photo is processed entirely in your browser and never uploaded to a server." },
  { q: "What background colour should a passport photo have?", a: "Plain white is the safe, standard choice for passports, visas and almost all application forms. Light blue or light grey are accepted by a few authorities, but always check the official instructions. If your photo was shot against a coloured or busy wall, remove the background first, then apply a clean white one here." },
  { q: "How many pixels is a passport photo at 600 DPI?", a: "DPI changes the pixel count for the same physical size. A 3.5×4.5 cm photo is about 413×531 px at 300 DPI but roughly 827×1063 px at 600 DPI. Most online forms expect 300 DPI, so use that unless your instructions say otherwise; for print you can raise the DPI for a sharper result." },
  { q: "What are common mistakes that make a passport photo rejected?", a: "Frequent reasons are a tilted or turned head, shadows on the face or behind it, glasses glare, a non-white or busy background, and the face being too small or too large in the frame. Use even, front-on lighting, keep a neutral expression, and crop so the head fills most of the height." },
  { q: "How do I crop my photo so the face fits correctly?", a: "Pick the size preset your application needs and choose ‘Crop to fill’, which centres your face and fills the frame to the right ratio automatically. Position yourself so the head and the top of the shoulders are visible, with a little space above the hair, before you upload." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Passport Photo Maker", applicationCategory: "MultimediaApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Passport size photo maker <span className="grad">online</span></h1>
        <p className="lede">Create a passport size photo at the right dimensions — US 2×2 inch (600×600 px) or 3.5×4.5 cm for India, UK and Schengen — with a white background, free and entirely in your browser.</p>
      </div>

      <PassportPhoto />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Passport size photo dimensions &amp; measurements</h2>
        <p>
          The <strong>passport photo size</strong> you need depends on the country and purpose. The
          <strong> US passport photo size</strong> is 2×2 inch (600×600 px), while the photo size for a
          passport in India, the UK and Schengen countries is 3.5×4.5 cm. Here are the most common
          passport photo dimensions and measurements — the maker above has presets for each:
        </p>
        <div className="size-table-wrap">
          <table className="size-table">
            <thead>
              <tr><th>Used for</th><th>Centimetres</th><th>Inches</th><th>Pixels (300 DPI)</th></tr>
            </thead>
            <tbody>
              <tr><td>India / UK / Schengen</td><td>3.5 × 4.5 cm</td><td>1.38 × 1.77 in</td><td>≈ 413 × 531 px</td></tr>
              <tr><td>US visa, OCI, Green Card</td><td>5.1 × 5.1 cm</td><td>2 × 2 in</td><td>600 × 600 px</td></tr>
              <tr><td>Stamp size (some forms)</td><td>2 × 2.5 cm</td><td>0.8 × 1 in</td><td>≈ 236 × 295 px</td></tr>
            </tbody>
          </table>
        </div>
        <h3>Passport size photo in cm, inches &amp; ratio</h3>
        <p>
          In India, the UK and Schengen countries, a passport size photo is <strong>3.5 cm wide × 4.5 cm tall</strong> — the same as
          <strong> 1.38 × 1.77 inches</strong>. That works out to an aspect <strong>ratio of about 7:9</strong>
          (0.78), so the photo is slightly taller than it is wide. In those countries 3.5 × 4.5 cm is the standard;
          US visa, OCI and Green Card photos instead use
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
          photo into a correctly sized passport photo in seconds, ready to upload to an online portal
          or print at home.
        </p>
        <p>
          The maker outputs the exact dimensions required for passport, visa and ID photos, on a
          clean background, with the face centred. For the sharpest result, start from a well-lit
          photo taken against a plain wall. If the background is messy, run it through our Remove
          Background tool first, then come back here to set the size and white background.
        </p>
        <h3>How to take a good photo at home</h3>
        <p>
          The maker handles size and background, but a clean source photo does the rest. Stand a step
          away from a plain light-coloured wall and face a window so soft daylight falls evenly on
          your face with no harsh shadows. Hold the camera at eye level, keep a neutral expression
          with your eyes open, and avoid hats or tinted glasses. Once you have a sharp, well-lit
          frame, upload it here and select the size your application needs. If the wall behind you is
          patterned, run the shot through our
          {" "}<Link href="/remove-background/">Remove Background</Link> tool first, then set a clean
          white background.
        </p>
        <h3>Meeting the file size and print rules</h3>
        <p>
          Setting the right dimensions is only half the job — many online forms also enforce a KB
          ceiling, often 20–50&nbsp;KB. After you download your photo, send it to the
          {" "}<Link href="/image-compressor/">Image Compressor</Link> to land on the exact size your
          portal demands, or use a one-tap preset such as
          {" "}<Link href="/compress-image-to-50kb/">compress to 50&nbsp;KB</Link>. If you instead
          need prints, our <Link href="/change-image-dpi/">change image DPI</Link> tool lets you set
          300 or 600 DPI so the photo comes out the correct physical size on paper.
        </p>
        <h3>Sizes for forms vs visas</h3>
        <p>
          The size you choose depends on the application. India, the UK and Schengen countries use
          3.5×4.5&nbsp;cm (≈413×531&nbsp;px), while US visa, OCI and Green Card photos are a square
          2×2&nbsp;inch (600×600&nbsp;px). Pick the matching preset above. If your form needs a specific pixel size for the upload box,
          set it precisely with our <Link href="/image-resizer/">Image Resizer</Link> after making
          the photo here.
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
