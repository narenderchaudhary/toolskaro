import type { Metadata } from "next";
import Link from "next/link";
import CompressPdf from "./CompressPdf";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import ToolBadges from "@/app/components/ToolBadges";
import RelatedTools from "@/app/components/RelatedTools";
import RecentTools from "@/app/components/RecentTools";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Compress PDF — Reduce PDF File Size Online Free (No Upload)",
  description:
    "Compress a PDF to a smaller file size for exam form uploads and email. Choose a compression level and download — free, no signup, and 100% in your browser.",
  alternates: { canonical: "/pdf/compress/" },
};

const steps = [
  { icon: "🎚️", title: "Pick a level", text: "Light, Recommended or Strong compression." },
  { icon: "📁", title: "Upload your PDF", text: "Choose the PDF you want to shrink." },
  { icon: "⬇️", title: "Download", text: "See the before/after size and save the smaller PDF." },
];

const features = [
  { icon: "📉", title: "Big savings", text: "Scanned and image-heavy PDFs often shrink by 40–80%." },
  { icon: "🎚️", title: "Adjustable", text: "Choose how hard to compress to balance size and clarity." },
  { icon: "🔒", title: "Private", text: "Compression runs in your browser; your file is never uploaded." },
  { icon: "📤", title: "Beat upload limits", text: "Get under the maximum size a form or email allows." },
  { icon: "🆓", title: "Free", text: "No watermark and no sign-up." },
  { icon: "🧩", title: "Works with tools", text: "Merge or convert first, then compress the final PDF." },
];

const faqs = [
  { q: "How much can it reduce my PDF?", a: "For scanned or image-heavy PDFs, savings of 40–80% are common. PDFs that are already small or pure text may compress less." },
  { q: "How do I compress a PDF to upload it on a form?", a: "Pick a compression level (Recommended works for most files), upload your PDF, and download the smaller version. If you need it even smaller, choose ‘Strong’." },
  { q: "Are my files uploaded?", a: "No. Compression runs in your browser, so your document never leaves your device." },
  { q: "Why did my text PDF not shrink much?", a: "This tool is optimised for scanned and image-based PDFs, which are usually the ones that exceed size limits. A small, text-only PDF is already efficient and has little to compress." },
  { q: "Can I compress a PDF to an exact size like 100KB or 1MB?", a: "Yes. Use our dedicated target pages — Compress PDF to 100KB, 200KB, 500KB or 1MB — which aim for a specific size, ideal when a form states an exact maximum upload limit." },
  { q: "Will compression make my document blurry?", a: "Recommended keeps text crisp and is right for most uploads. Strong trades some image sharpness for a smaller file; preview the result and step back a level if scanned text becomes hard to read." },
  { q: "How do I shrink a PDF for a USCIS or visa application?", a: "These portals enforce tight limits. Compress at Recommended first, and if it is still too large use our Compress PDF for USCIS or reduce PDF size for a visa application tools, which target their specific caps." },
  { q: "Should I merge before or after compressing?", a: "Merge your documents into one PDF first, then compress the combined file. Compressing the final packet gives the smallest result and ensures the whole upload fits under the limit." },
  { q: "Is it free?", a: "Yes — free to use with no watermark and no sign-up." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Compress PDF", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Compress <span className="grad">PDF file size</span> online</h1>
        <p className="lede">Shrink your PDF to a smaller file size for exam uploads and email — free and entirely in your browser.</p>
        <ToolBadges />
      </div>

      <div className="tool-shell"><CompressPdf /></div>

      <Steps heading={<>Compress in <span className="g">3 simple steps</span></>} steps={steps} />
      <Features heading={<>Why use this <span className="g">PDF compressor</span></>} items={features} />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Get your PDF under the upload limit</h2>
        <p>
          Exam portals, job applications and email attachments all enforce a maximum file size, and
          scanned documents easily blow past it. This tool compresses your PDF by re-encoding its
          pages, often cutting the size dramatically while keeping it readable — so a 5&nbsp;MB scan
          can drop to a few hundred KB.
        </p>
        <p>
          Choose <strong>Recommended</strong> for a balance of size and clarity, or
          <strong> Strong</strong> when you must hit a tight limit. The whole process runs in your
          browser, so your document is never uploaded. It works best on scanned and image-heavy
          PDFs, which are usually the ones that exceed size limits.
        </p>

        <h3>How PDF compression works</h3>
        <p>
          Most oversized PDFs are heavy because of high-resolution scanned images. The compressor
          re-encodes those images at a sensible resolution and quality, removing data your eyes
          won&apos;t miss on screen, while leaving real text layers intact. That is why a 5&nbsp;MB
          phone scan can fall to a few hundred KB. Everything runs locally, so sensitive marksheets,
          ID proofs and bank records never leave your device. If a page is rotated or out of order,
          fix it with <Link href="/pdf/rotate/">Rotate PDF</Link> or{" "}
          <Link href="/pdf/organize/">Organize PDF</Link> before compressing.
        </p>

        <h3>Hitting an exact upload limit</h3>
        <p>
          Many portals state a precise cap rather than a range. For those, our target-size tools aim
          for a specific number — try <Link href="/compress-pdf-to-100kb/">Compress PDF to 100KB</Link>,{" "}
          <Link href="/compress-pdf-to-500kb/">500KB</Link> or{" "}
          <Link href="/compress-pdf-to-1mb/">1MB</Link>. Specialised flows like{" "}
          <Link href="/compress-pdf-for-uscis/">Compress PDF for USCIS</Link> and{" "}
          <Link href="/compress-resume-pdf/">Compress Resume PDF</Link> are tuned for those exact
          requirements, so you avoid the rejection that comes from a file even slightly over limit.
        </p>

        <h3>Tips to keep quality while shrinking</h3>
        <p>
          Scan or photograph documents in even light and crop empty borders before you start, so the
          compressor has less wasted area to encode. Begin at Recommended and only switch to Strong
          if you must, checking that scanned text stays legible. If you are bundling several files,{" "}
          <Link href="/pdf/merge/">merge them first</Link> and compress the final packet once, which
          almost always beats compressing each piece separately.
        </p>
      </div>

      <RelatedTools
        heading="Related PDF tools"
        hrefs={["/pdf/merge/", "/resize-pdf/", "/pdf/jpg-to-pdf/", "/pdf/pdf-to-jpg/"]}
      />

      <RecentTools current="/pdf/compress/" />

      <Faq items={faqs} />
    </>
  );
}
