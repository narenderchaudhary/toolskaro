import type { Metadata } from "next";
import ResizeCm from "./ResizeCm";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Resize Image in CM with DPI 300 — Free Photo Resizer",
  description:
    "Resize image in cm with DPI online free — set width and height in cm at 300 DPI for passport and print sizes. A photo resizer in cm, 100% in your browser.",
  alternates: { canonical: "/resize-image-in-cm/" },
};

const faqs = [
  { q: "How do I resize an image in cm?", a: "Enter the width and height you need in centimetres and choose the DPI (300 is standard for forms and printing). Upload your photo and the tool resizes it to those exact centimetre dimensions, which you can download as a JPG." },
  { q: "How are centimetres converted to pixels?", a: "Pixels = (cm ÷ 2.54) × DPI. For example, 3.5×4.5 cm at 300 DPI is about 413×531 pixels. The tool shows the pixel size for you and resizes the image accordingly." },
  { q: "What size is a passport photo in cm?", a: "A common passport photo size is 3.5×4.5 cm, used by India, the UK, Schengen countries and many others (the US uses 2×2 inch / 5.08×5.08 cm). Use the passport preset above to set it instantly, or type any custom cm size your form requires." },
  { q: "Which DPI should I choose?", a: "Use 300 DPI for online forms and printing — it gives the crisp, standard pixel dimensions most portals expect. Lower DPI (96) is only for on-screen use." },
  { q: "How do I resize an image in cm at 300 DPI?", a: "Type the width and height in centimetres, set the DPI to 300, then upload your photo. The tool resizes the image in cm with that DPI and shows the exact pixel dimensions, which you can download as a JPG." },
  { q: "What DPI should I use to resize a photo in cm?", a: "Use 300 DPI for printing and online or passport forms — it is the standard most portals expect. Choose 96 DPI only when the image will be viewed on screen and never printed." },
  { q: "Is it free and private?", a: "Yes — completely free with no sign-up, and the image is resized in your browser, never uploaded to a server." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Resize Image in CM", url: "https://toolskaro.com/resize-image-in-cm/", applicationCategory: "MultimediaApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Resize image in <span className="grad">centimetres</span></h1>
        <p className="lede">Resize a photo in cm with DPI — set the exact width and height in centimetres at 300 DPI for passport, form and print sizes. Free, instant and 100% in your browser.</p>
      </div>

      <ResizeCm />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Resize a photo to exact centimetres</h2>
        <p>
          Forms and print shops often specify a photo size in <strong>centimetres</strong> — a
          3.5×4.5&nbsp;cm passport photo, a 2×2.5&nbsp;cm stamp size, a 4×6&nbsp;inch print, and so on.
          This tool lets you type the size in cm and the DPI, works out the exact pixel dimensions for
          you, and resizes your image to match.
        </p>
        <p>
          To resize an image in cm with DPI, just enter your centimetre size and a DPI value. For most
          form and passport photos, keep the DPI at <strong>300</strong> — resizing a photo in cm with
          300 DPI produces the standard pixel sizes portals expect. If your form gives the size in
          pixels instead, use the{" "}
          <a href="/image-resizer/">Image Resizer</a>, and to hit a file-size limit afterwards run it
          through the <a href="/image-compressor/">Image Compressor</a> or{" "}
          <a href="/resize-image-in-kb/">resize in KB</a>.
        </p>
      </div>

      <Faq items={faqs} />

      <CtaBand heading="Size your photo any way you need" text="By centimetres, pixels or KB — all free and private." links={[["/image-resizer/", "Resize by Pixels"], ["/resize-image-in-kb/", "Resize in KB"], ["/passport-photo-maker/", "Passport Photo"], ["/image-compressor/", "Image Compressor"]]} />
    </>
  );
}
