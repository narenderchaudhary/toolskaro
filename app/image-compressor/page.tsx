import type { Metadata } from "next";
import Compressor from "./Compressor";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Compress Image to 20KB, 50KB, 100KB — Free Online",
  description:
    "Compress JPG or PNG to an exact KB size for SSC, UPSC, Bank & Railway exam forms. Free, no signup, and 100% in your browser — your photo is never uploaded.",
  alternates: { canonical: "/image-compressor/" },
};

const steps = [
  { icon: "📁", title: "Upload your image", text: "Drag & drop or choose a JPG/PNG from your device." },
  { icon: "🎯", title: "Set the target KB", text: "Type a size or tap a preset — 20, 50, 100 or 200 KB." },
  { icon: "⬇️", title: "Download", text: "The tool fits your limit at the best quality. Save the result." },
];

const features = [
  { icon: "🎯", title: "Exact KB target", text: "A smart quality search lands your image at or just under the size your form requires." },
  { icon: "🔒", title: "Private — no upload", text: "Compression runs in your browser. Your photo never leaves your device." },
  { icon: "⚡", title: "Instant & lightweight", text: "No waiting in a queue or installing software — it works in seconds, on any device." },
  { icon: "🆓", title: "Free, no watermark", text: "Unlimited use with no sign-up, no watermark and no hidden limits." },
  { icon: "🖼️", title: "JPG & PNG support", text: "Upload JPG or PNG; download an optimised JPEG accepted by every exam portal." },
  { icon: "📐", title: "Pairs with resizing", text: "Resize to the right dimensions first, then compress to the exact KB limit." },
];

const faqs = [
  { q: "How do I compress a photo to 50 KB for an exam form?", a: "Upload your photo, enter 50 in the target size box (or tap the 50 KB preset), and click Compress. The tool reduces the image quality just enough to land at or just under 50 KB, then lets you download the result." },
  { q: "Can I compress an image to 20 KB without losing too much quality?", a: "Yes. Our tool uses a smart quality search that keeps the highest possible quality while still hitting your target size. For very small targets like 20 KB, some quality loss is unavoidable, but the result stays clear enough for passport-style photos and signatures." },
  { q: "Are my images uploaded to a server?", a: "No. All compression happens inside your browser using the HTML5 Canvas API. Your file never leaves your device, so the process is completely private and secure." },
  { q: "What image formats are supported?", a: "JPG and PNG inputs are both supported. The output is a JPEG, which gives the smallest file size for photos and is accepted by virtually all government exam portals." },
  { q: "Why does my exam form reject my photo even though it looks fine?", a: "Most online application portals enforce a strict file-size range (for example, 20–50 KB for a photo and 10–20 KB for a signature) and exact dimensions. If your file is even slightly larger than allowed, it is rejected. Use this compressor to bring it inside the required range." },
  { q: "Is there any limit on how many images I can compress?", a: "No. The tool is completely free with no daily limit, no watermark, and no sign-up. Compress as many images as you need." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Image Compressor", applicationCategory: "MultimediaApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="tool-hero">
        <h1>Compress image to an <span className="grad">exact KB size</span></h1>
        <p className="lede">
          Shrink your JPG or PNG to 20&nbsp;KB, 50&nbsp;KB, 100&nbsp;KB or any size your exam form
          requires — free, no signup, and 100% in your browser.
        </p>
      </div>

      <Compressor />


      <Steps heading={<>Compress in <span className="g">3 simple steps</span></>} steps={steps} />

      <Features heading={<>Why use this <span className="g">image compressor</span></>} items={features} />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Compress photos for any government exam form</h2>
        <p>
          Almost every Indian government recruitment portal — SSC, UPSC, IBPS, SBI, RRB, state PSCs
          and more — asks you to upload your photograph and signature within a fixed file-size range
          and exact dimensions. A photo straight from your phone is usually several megabytes, far
          above the 20–100&nbsp;KB most forms allow, so it gets rejected at upload.
        </p>
        <p>
          This tool solves that in one click. Instead of guessing quality settings, it runs an
          automatic search to compress your image to the precise KB target you set, while keeping it
          as sharp as possible. Because everything runs locally in your browser, your documents are
          never uploaded — making it faster and far more private than tools that send your files to
          a server.
        </p>
      </div>

      <Faq items={faqs} />

      <CtaBand
        heading="Get your application photo ready in minutes"
        text="Resize, compress and convert every document you need — free and private."
        links={[
          ["/image-resizer/", "Image Resizer"],
          ["/passport-photo-maker/", "Passport Photo"],
          ["/signature-resize/", "Signature Resize"],
          ["/pdf/jpg-to-pdf/", "JPG to PDF"],
        ]}
      />
    </>
  );
}
