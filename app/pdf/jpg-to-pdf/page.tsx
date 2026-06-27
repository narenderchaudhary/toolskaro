import type { Metadata } from "next";
import Link from "next/link";
import JpgToPdf from "./JpgToPdf";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "JPG to PDF — Image & Photo to PDF Converter (Free)",
  description:
    "Convert image to PDF free: turn JPG, JPEG, PNG or photos into one PDF online. Combine multiple JPGs into a single PDF and download — no signup, in your browser.",
  alternates: { canonical: "/pdf/jpg-to-pdf/" },
};

const steps = [
  { icon: "📁", title: "Add images", text: "Drop or choose your JPG/PNG images — as many as you need." },
  { icon: "🗂️", title: "Arrange", text: "Each image becomes a page, in the order you add them." },
  { icon: "⬇️", title: "Download PDF", text: "Convert and save your combined PDF." },
];

const features = [
  { icon: "🗂️", title: "Multiple images", text: "Combine many photos or scans into one tidy PDF, one image per page." },
  { icon: "🔒", title: "Private", text: "The PDF is built in your browser; your images are never uploaded." },
  { icon: "🏆", title: "Original quality", text: "Images are embedded at full quality, ideal for documents and certificates." },
  { icon: "📄", title: "Upload-ready", text: "Meets portals that accept only PDF, not loose image files." },
  { icon: "🆓", title: "Free", text: "No watermark, no sign-up, no limit on the number of images." },
  { icon: "🧩", title: "Works with PDF tools", text: "Merge and compress the result with our other PDF tools." },
];

const faqs = [
  { q: "How do I convert an image to PDF?", a: "Upload your image (JPG, PNG or a photo), and the tool places it into a PDF that you can download. Add several images to combine them into one PDF, one image per page — all in your browser." },
  { q: "How do I put a photo into a PDF?", a: "Add the photo above and click Convert — it becomes a page in a new PDF. You can add more photos to build a multi-page PDF, then download it ready to upload or email." },
  { q: "Can I combine multiple images into one PDF?", a: "Yes. Add as many JPG or PNG images as you like — they are combined into a single PDF in the order shown, one image per page." },
  { q: "Can I convert JPEG or PNG to PDF too?", a: "Yes. This works as a JPEG to PDF and PNG to PDF converter as well — JPG, JPEG and PNG images are all supported, so you can convert any of them to PDF the same way." },
  { q: "How do I combine multiple JPGs into one PDF?", a: "Add all the JPG (or PNG) images at once, arrange them in the order you want, then click Convert. They are merged into one PDF with each photo as a separate page — ready to upload or email." },
  { q: "How do I convert a photo of a document into a PDF?", a: "Take a clear photo of the document, upload it here, and click Convert. You get a PDF ready to upload to portals that only accept PDF files." },
  { q: "Are my images uploaded anywhere?", a: "No. The PDF is created inside your browser, so your images never leave your device — ideal for sensitive documents like certificates and ID proofs." },
  { q: "Does it reduce image quality?", a: "Images are embedded at their original quality. If the resulting PDF is too large for an upload limit, run it through our Compress PDF tool afterwards." },
  { q: "Can I change the order of the pages?", a: "Yes — the images are placed in the order you add them, with each image becoming one page. Add them in the sequence you want, or rearrange before converting so the final PDF reads correctly." },
  { q: "Does it work with PNG and HEIC photos too?", a: "Yes, both JPG and PNG images are supported here. If your photos are iPhone HEIC files, convert them first with our HEIC to PDF tool, then merge or compress the result as needed." },
  { q: "What if my PDF is over the form's size limit?", a: "Image-heavy PDFs can be large. After converting, open our Compress PDF tool and pick a level — or use a target size page like Compress PDF to 200KB — to fit the exact upload limit." },
  { q: "Can I scan multiple pages with my phone and make one PDF?", a: "Yes. Photograph each page clearly in good light, add all the photos here, and they combine into a single multi-page PDF you can upload or email — no scanner app needed." },
  { q: "Is it free?", a: "Yes — completely free, with no watermark, no sign-up, and no limit on the number of images." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "JPG to PDF Converter", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Convert <span className="grad">JPG to PDF</span> online</h1>
        <p className="lede">Convert JPG to PDF in seconds — and any image or photo too. Use it as a JPEG to PDF, PNG to PDF or photo to PDF converter, and combine multiple JPGs into one PDF, free, no signup, entirely in your browser.</p>
      </div>

      <JpgToPdf />

      <Steps heading={<>Convert in <span className="g">3 simple steps</span></>} steps={steps} />
      <Features heading={<>Why use this <span className="g">JPG to PDF</span> tool</>} items={features} />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Turn photos and scans into a single PDF</h2>
        <p>
          Many application forms, colleges and offices only accept documents as a PDF, not as loose
          images. Whether you have a photo of a marksheet, a scanned certificate, or several pages
          captured on your phone, this tool stitches them into one clean PDF you can upload or email.
          It doubles as an image-to-PDF, JPEG-to-PDF and PNG-to-PDF converter, so you can combine
          multiple photos into one PDF whatever format they came in.
        </p>
        <p>
          Everything happens in your browser, so your personal documents are never uploaded to a
          server. Combine it with <Link href="/pdf/merge/">Merge PDF</Link> and{" "}
          <Link href="/pdf/compress/">Compress PDF</Link> to assemble and shrink a complete
          application packet without installing any software.
        </p>

        <h3>How the JPG to PDF converter works</h3>
        <p>
          When you add an image, the tool reads it locally and draws it onto a fresh PDF page sized
          to fit, preserving the original resolution. Each photo or scan becomes its own page, so a
          set of marksheet snaps turns into a clean multi-page document. Because nothing is sent to a
          server, conversion is instant even on slow connections, and your files stay on your device.
          If you later need the pages back as images, our{" "}
          <Link href="/pdf/pdf-to-jpg/">PDF to JPG</Link> tool reverses the process.
        </p>

        <h3>Common uses: forms, certificates and ID proofs</h3>
        <p>
          Exam portals, college admissions and government applications usually accept a single PDF
          rather than loose JPGs, so converting your photographed certificate, signature or ID proof
          is often the last step before upload. Students use it to bundle internship letters and
          projects; freelancers attach scanned invoices. Once converted, you can{" "}
          <Link href="/pdf/merge/">merge several PDFs into one</Link> packet if the form asks for a
          combined file.
        </p>

        <h3>Keeping file size and quality in balance</h3>
        <p>
          Photos from modern phones are high-resolution, so a few pages can easily exceed a 1&nbsp;MB
          upload cap. Crop out empty borders and shoot in even light to keep images sharp at smaller
          sizes. If the finished PDF is still too heavy, run it through our{" "}
          <Link href="/compress-pdf-to-200kb/">Compress PDF to 200KB</Link> tool or the general{" "}
          <Link href="/image-compressor/">Image Compressor</Link> before converting, so the text on
          your documents stays readable while comfortably meeting the limit.
        </p>
      </div>

      <Faq items={faqs} />

      <CtaBand
        heading="Build your document packet for free"
        text="Convert, merge and compress PDFs — privately, in your browser."
        links={[["/pdf/merge/", "Merge PDF"], ["/pdf/compress/", "Compress PDF"], ["/pdf/pdf-to-jpg/", "PDF to JPG"], ["/image-compressor/", "Image Compressor"]]}
      />
    </>
  );
}
