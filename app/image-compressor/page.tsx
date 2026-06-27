import type { Metadata } from "next";
import Link from "next/link";
import Compressor from "./Compressor";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Compress Image to 20KB, 50KB, 100KB — Free Online",
  description:
    "Free image compressor to compress JPG, JPEG or PNG to an exact KB size. Compress a photo or image online — no signup, 100% in your browser, never uploaded.",
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
  { icon: "🖼️", title: "JPG & PNG support", text: "Upload JPG or PNG; download an optimised JPEG accepted by virtually every online portal." },
  { icon: "📐", title: "Pairs with resizing", text: "Resize to the right dimensions first, then compress to the exact KB limit." },
];

const faqs = [
  { q: "How do I compress a photo to 50 KB for an online form?", a: "Upload your photo, enter 50 in the target size box (or tap the 50 KB preset), and click Compress. The tool reduces the image quality just enough to land at or just under 50 KB, then lets you download the result." },
  { q: "Can I compress an image to 20 KB without losing too much quality?", a: "Yes. Our tool uses a smart quality search that keeps the highest possible quality while still hitting your target size. For very small targets like 20 KB, some quality loss is unavoidable, but the result stays clear enough for passport-style photos and signatures." },
  { q: "Are my images uploaded to a server?", a: "No. All compression happens inside your browser using the HTML5 Canvas API. Your file never leaves your device, so the process is completely private and secure." },
  { q: "What image formats are supported?", a: "JPG and PNG inputs are both supported. The output is a JPEG, which gives the smallest file size for photos and is accepted by virtually all online application portals." },
  { q: "Why does my form reject my photo even though it looks fine?", a: "Most online application portals enforce a strict file-size range (for example, 20–50 KB for a photo and 10–20 KB for a signature) and exact dimensions. If your file is even slightly larger than allowed, it is rejected. Use this compressor to bring it inside the required range." },
  { q: "Is there any limit on how many images I can compress?", a: "No. The tool is completely free with no daily limit, no watermark, and no sign-up. Compress as many images as you need." },
  { q: "How do I compress an image to exactly 100 KB or 200 KB?", a: "Enter your target in the size box or tap the 100 KB or 200 KB preset, then click Compress. The tool searches for the highest JPEG quality that still fits under your limit. Larger targets like 100 KB and 200 KB keep almost all the original sharpness, so the result usually looks identical to the source." },
  { q: "Should I resize my photo before compressing it?", a: "Yes, for the best quality. Reducing the pixel dimensions first means the compressor has less data to throw away, so it can hit a small KB target while staying sharp. Set the correct dimensions in the Image Resizer, then bring that result back here to compress to the exact KB limit." },
  { q: "Does compressing a JPG reduce its resolution or pixel size?", a: "No. Compression only lowers the JPEG quality level — the width and height in pixels stay the same. If you also need smaller pixel dimensions, use the Image Resizer first; otherwise your image keeps its original resolution at a smaller file size." },
  { q: "Why is my compressed file still slightly above the target KB?", a: "JPEG compression works in steps, so the tool stops at the closest quality that stays at or just under your target. If you need to go lower, try a smaller pixel size first or pick a slightly tighter KB value, which gives the search more room to work." },
  { q: "How do I compress a JPG photo online?", a: "Open the tool, drag in your JPG or JPEG photo, set a target KB size (or tap a preset), and click Compress. To compress a JPG you don't need to install anything — the image compressor runs in your browser and gives you a download link to the smaller file in seconds." },
  { q: "Is the image compressor free?", a: "Yes. This is a completely free image compressor with no sign-up, no watermark and no daily limit. You can compress an image, a JPG, a JPEG or a PNG as many times as you need at no cost." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Image Compressor", applicationCategory: "MultimediaApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="tool-hero">
        <h1>Compress image to an <span className="grad">exact KB size</span></h1>
        <p className="lede">
          A free image compressor that lets you compress a photo or image to 20&nbsp;KB, 50&nbsp;KB,
          100&nbsp;KB or any size your form requires. Compress JPG, JPEG or PNG — no signup, and 100%
          in your browser.
        </p>
      </div>

      <Compressor />


      <Steps heading={<>Compress in <span className="g">3 simple steps</span></>} steps={steps} />

      <Features heading={<>Why use this <span className="g">image compressor</span></>} items={features} />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Compress photos for forms, applications and everyday files</h2>
        <p>
          Many online application portals ask you to upload your photograph and signature within a
          fixed file-size range and exact dimensions. A photo straight from your phone is usually
          several megabytes, far above the 20–100&nbsp;KB most forms allow, so it gets rejected at
          upload.
        </p>
        <p>
          This tool solves that in one click. Instead of guessing quality settings, it runs an
          automatic search to compress your image to the precise KB target you set, while keeping it
          as sharp as possible. Whether you need to compress a photo for a profile picture or
          compress JPG and JPEG files for an upload portal, the image compress process is the same:
          pick a target and download. Because everything runs locally in your browser, your documents
          are never uploaded — making it faster and far more private than tools that send your files
          to a server.
        </p>
        <h3>Common KB limits on online forms</h3>
        <p>
          Knowing the target before you start saves a lot of trial and error. Photographs are
          usually wanted in the 20–100&nbsp;KB band, while signatures are far smaller, often
          10–20&nbsp;KB. Many portals publish one exact ceiling, so we built dedicated presets for
          the most-requested sizes: <Link href="/compress-image-to-20kb/">compress image to 20&nbsp;KB</Link>,
          {" "}<Link href="/compress-image-to-50kb/">50&nbsp;KB</Link>,
          {" "}<Link href="/compress-image-to-100kb/">100&nbsp;KB</Link> and
          {" "}<Link href="/compress-image-to-200kb/">200&nbsp;KB</Link>. Open the one that matches
          your form and the work is done in a single tap.
        </p>
        <h3>Get sharper results at small file sizes</h3>
        <p>
          The biggest quality win comes from sizing your image correctly before you compress. A
          4000&nbsp;px phone photo squeezed straight to 20&nbsp;KB looks muddy, but the same shot
          resized to passport dimensions first compresses cleanly. Use the
          {" "}<Link href="/image-resizer/">Image Resizer</Link> to set the exact pixels your form
          needs, or jump to a ready-made format such as
          {" "}<Link href="/photo-resize-for-ssc-cgl/">SSC CGL photo resize</Link> or
          {" "}<Link href="/resize-for-pan-card/">PAN card photo resize</Link>, then return here.
        </p>
        <h3>Mistakes that get a photo rejected</h3>
        <p>
          A file that is too large is the most common reason for rejection, but it is not the only
          one. Avoid heavy filters or screenshots, which add noise and inflate the size; never blow
          up a tiny image to reach the dimensions, as that destroys clarity; and check that the
          output stays a JPG, since some portals refuse PNG. If your source is a PNG, convert it
          with our <Link href="/png-to-jpg/">PNG to JPG</Link> tool first, then compress the JPEG to
          your exact limit here.
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
