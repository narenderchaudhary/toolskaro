import type { Metadata } from "next";
import ChangeDpi from "./ChangeDpi";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Change Image DPI Online — Set Photo to 300 DPI (Free)",
  description:
    "Change the DPI of an image online for free — set a photo to 300 DPI for exam forms and printing. Adjust the JPEG DPI in your browser, no upload, no signup.",
  alternates: { canonical: "/change-image-dpi/" },
};

const faqs = [
  { q: "How do I change an image to 300 DPI?", a: "Set the target DPI to 300, then upload your photo. The tool writes 300 DPI into the file and lets you download it. The pixel dimensions stay the same — only the DPI value stored in the image changes." },
  { q: "What is DPI in an image?", a: "DPI (dots per inch) is the print resolution stored in the file. It tells a printer or form how large the image should be when printed. 300 DPI is the standard for exam photos and good-quality printing." },
  { q: "Does changing DPI change the pixel size?", a: "No. Changing the DPI tag does not resample the pixels — the image stays the same width and height in pixels. It only changes the print size and the DPI value that forms and printers read." },
  { q: "Why do exam forms ask for 300 DPI?", a: "300 DPI ensures the printed photo is sharp at passport size. Some upload checks also read the DPI tag, so setting it to 300 keeps your photo compliant. Always confirm the exact requirement in the official notification." },
  { q: "Is it free and private?", a: "Yes — completely free with no sign-up, and the image is processed entirely in your browser and never uploaded." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Change Image DPI", url: "https://toolskaro.com/change-image-dpi/", applicationCategory: "MultimediaApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Change image <span className="grad">DPI</span></h1>
        <p className="lede">Set your photo to 300 DPI (or any DPI) for exam forms and printing — instantly, free and 100% in your browser.</p>
      </div>

      <ChangeDpi />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Set your photo to 300 DPI for forms</h2>
        <p>
          <strong>DPI</strong> (dots per inch) is the print resolution stored inside an image file — it
          decides how large the photo prints and is sometimes checked by exam upload portals.{" "}
          <strong>300 DPI</strong> is the standard for passport-style and exam photos. This tool writes
          your chosen DPI into the file without resampling the pixels, so the image stays the same size in
          pixels and just reports the correct DPI.
        </p>
        <p>
          If you also need exact physical dimensions, set the size first with{" "}
          <a href="/resize-image-in-cm/">resize in cm</a> (at 300 DPI) or the{" "}
          <a href="/image-resizer/">Image Resizer</a>, then hit a file-size limit with the{" "}
          <a href="/image-compressor/">Image Compressor</a>. Everything runs in your browser.
        </p>
      </div>

      <Faq items={faqs} />

      <CtaBand heading="Prepare a fully compliant photo" text="Set the DPI, size and KB your form needs — free and private." links={[["/resize-image-in-cm/", "Resize in CM"], ["/image-resizer/", "Resize by Pixels"], ["/image-compressor/", "Image Compressor"], ["/passport-photo-maker/", "Passport Photo"]]} />
    </>
  );
}
