import type { Metadata } from "next";
import Link from "next/link";
import RotateImage from "./RotateImage";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import ToolBadges from "@/app/components/ToolBadges";
import RelatedTools from "@/app/components/RelatedTools";
import RecentTools from "@/app/components/RecentTools";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Rotate Image Online — Any Angle, Flip & Straighten (Free)",
  description:
    "Rotate an image online for free — 90°, any custom angle, or flip horizontally and vertically. Straighten photos and download as PNG or JPG, 100% in your browser.",
  alternates: { canonical: "/rotate-image/" },
};

const faqs = [
  { q: "How do I rotate an image?", a: "Drop your image above, then use the 90° buttons for a quick turn or the angle slider to rotate to any custom angle. You can also flip it horizontally or vertically, then download the result as PNG or JPG." },
  { q: "Can I rotate to any angle, not just 90 degrees?", a: "Yes. The angle slider lets you rotate to any degree from -180° to 180° — useful for straightening a tilted photo or a scanned document. The canvas expands automatically so no part of the image is cut off." },
  { q: "How do I flip or mirror an image?", a: "Use the Flip Horizontal button to mirror left-to-right, or Flip Vertical to mirror top-to-bottom. You can combine flips with any rotation." },
  { q: "What happens to the corners when I rotate at an angle?", a: "Rotating by a non-90° angle leaves triangular corners around the image. Keep “Transparent (PNG)” on to leave them see-through, or pick a background color to fill them — JPG always fills them because it has no transparency." },
  { q: "Will rotating reduce the quality?", a: "No visible loss. The rotation is applied once at full resolution. Choose PNG for a lossless result, or JPG for a smaller file." },
  { q: "Are my images uploaded?", a: "No. Rotation runs entirely in your browser, so your photo is never uploaded to a server." },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "SoftwareApplication", name: "Rotate Image", applicationCategory: "MultimediaApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Rotate an <span className="grad">image</span></h1>
        <p className="lede">Turn any image 90°, to a custom angle, or flip it — straighten photos and download as PNG or JPG. Nothing is uploaded.</p>
        <ToolBadges />
      </div>

      <div className="tool-shell"><RotateImage /></div>

      <Steps heading={<>Rotate in <span className="grad">3 simple steps</span></>} steps={[
        { icon: "🖼️", title: "Add your image", text: "Click or drop any JPG, PNG or WebP image." },
        { icon: "🔄", title: "Rotate or flip", text: "Use the 90° buttons, the angle slider, or flip horizontally / vertically." },
        { icon: "⬇️", title: "Download", text: "Save the result as a PNG or JPG." },
      ]} />
      <Features heading={<>Why use this <span className="grad">image rotator</span></>} items={[
        { icon: "🎯", title: "Any angle", text: "Not just 90° — rotate to any degree to straighten a tilted photo or scan." },
        { icon: "↔️", title: "Flip & mirror", text: "Mirror horizontally or vertically, on their own or with a rotation." },
        { icon: "🧊", title: "No cropping", text: "The canvas expands so the whole image is kept — nothing gets cut off." },
        { icon: "🎨", title: "PNG or JPG", text: "Keep transparent corners with PNG, or fill them with a color for JPG." },
        { icon: "🔒", title: "Private", text: "Rotation runs in your browser; your image is never uploaded." },
        { icon: "🆓", title: "Free", text: "No sign-up, no watermark, no limits." },
      ]} />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Rotate, straighten or flip any image</h2>
        <p>
          Sometimes a photo comes out sideways, a scan is slightly tilted, or you just need a mirrored
          version. This tool handles all of it: tap a <strong>90° button</strong> for a quick quarter
          turn, drag the <strong>angle slider</strong> to straighten by any number of degrees, or{" "}
          <strong>flip</strong> the image horizontally or vertically. The canvas grows to fit the rotated
          image, so nothing is ever cropped.
        </p>
        <p>
          Everything runs in your browser, so it&apos;s instant and private. Next you might want to{" "}
          <Link href="/crop-image/">crop the image</Link>, <Link href="/image-resizer/">resize it</Link>,
          or <Link href="/image-compressor/">compress it</Link> to a smaller file. To rotate PDF pages
          instead, use <Link href="/pdf/rotate/">Rotate PDF</Link>.
        </p>
      </div>

      <RelatedTools heading="More image tools" hrefs={["/crop-image/", "/image-resizer/", "/image-converter/", "/image-compressor/"]} />
      <RecentTools current="/rotate-image/" />
      <Faq items={faqs} />
    </>
  );
}
