import type { Metadata } from "next";
import Link from "next/link";
import Hub from "@/app/components/Hub";

export const metadata: Metadata = {
  title: "Free Image Tools — Resize, Compress & Edit Photos for Exam Forms",
  description:
    "All ToolsKaro image tools in one place: compress to an exact KB, resize by pixels, make a passport photo, resize a signature, remove background and convert formats. Free, no upload.",
  alternates: { canonical: "/image-tools/" },
};

const faqs = [
  { q: "Which image tool do I need for an exam form?", a: "Most government forms need a passport-style photo and a signature at exact pixel sizes and KB limits. Use the Image Resizer to set the dimensions, the Image Compressor to hit the KB target (often 20–50 KB), the Passport Photo Maker for a white background, and Signature Resize for the signature." },
  { q: "How do I compress a photo to an exact KB?", a: "Open the Image Compressor, upload your photo, and enter the target size (for example 50 KB). It reduces the file to that limit while keeping the best possible quality — all in your browser." },
  { q: "Are these image tools really free and private?", a: "Yes. Every image tool is completely free with no sign-up or watermark, and all editing happens inside your browser, so your photos and signatures are never uploaded to any server." },
  { q: "What image formats are supported?", a: "The tools work with common formats like JPG, PNG and WebP. The Image Converter lets you switch between PNG, JPG and WebP, and most tools export a JPG or PNG suitable for exam portals." },
];

export default function Page() {
  return (
    <Hub
      catKey="image"
      heading="Free Image Tools for Exam Forms"
      headingNode={<>Free <span className="grad">Image Tools</span> for Exam Forms</>}
      lede="Resize, compress, crop and convert your photo and signature to the exact size every Indian government form needs — free, no sign-up, 100% in your browser."
      faqs={faqs}
    >
      <h2 style={{ marginTop: 0 }}>Everything you need to prepare a photo & signature</h2>
      <p>
        Exam and job application portals are strict about images: your photograph and signature must be a
        precise size in pixels and a specific file weight in KB, or the form is rejected. This image
        toolkit covers the whole job — set exact dimensions with the{" "}
        <Link href="/image-resizer/">Image Resizer</Link>, hit a KB limit with the{" "}
        <Link href="/image-compressor/">Image Compressor</Link> (you can even compress to a{" "}
        <Link href="/compress-image-to-50kb/">specific 50&nbsp;KB</Link>), create a clean
        white-background photo with the <Link href="/passport-photo-maker/">Passport Photo Maker</Link>,
        and prepare your signature with <Link href="/signature-resize/">Signature Resize</Link>.
      </p>
      <p>
        Beyond exam prep you can <Link href="/remove-background/">remove a photo background</Link>,{" "}
        <Link href="/crop-image/">crop to any ratio</Link>,{" "}
        <Link href="/image-converter/">convert between PNG, JPG and WebP</Link>,{" "}
        <Link href="/photo-signature-combiner/">combine a photo and signature</Link>,{" "}
        <Link href="/photo-joiner/">join several photos</Link>, and{" "}
        <Link href="/social-media-image-resizer/">resize for social media</Link>. Need a head start for
        a specific exam? Try the ready-made{" "}
        <Link href="/photo-resize-for-ssc-cgl/">SSC CGL</Link> and{" "}
        <Link href="/photo-resize-for-upsc/">UPSC</Link> photo guides. Every tool runs locally, so your
        files never leave your device.
      </p>
    </Hub>
  );
}
