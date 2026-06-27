import type { Metadata } from "next";
import Link from "next/link";
import MergePdf from "./MergePdf";
import Steps from "@/app/components/Steps";
import Features from "@/app/components/Features";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Merge PDF — Combine PDF Files Online Free (No Upload)",
  description:
    "Combine multiple PDF files into one, reorder them as you like, and download — free, no signup, and 100% in your browser. Your files are never uploaded.",
  alternates: { canonical: "/pdf/merge/" },
};

const steps = [
  { icon: "📁", title: "Add PDF files", text: "Drop or choose two or more PDFs." },
  { icon: "↕️", title: "Reorder", text: "Use the arrows to set the page sequence you want." },
  { icon: "⬇️", title: "Merge & download", text: "Combine them into a single PDF and save it." },
];

const features = [
  { icon: "🗂️", title: "Unlimited files", text: "Combine as many PDFs as you need into one document." },
  { icon: "↕️", title: "Custom order", text: "Arrange files with up/down controls before merging." },
  { icon: "🏆", title: "No quality loss", text: "Pages are copied as-is, keeping original text and images." },
  { icon: "🔒", title: "Private", text: "Merging runs in your browser; files are never uploaded." },
  { icon: "🆓", title: "Free", text: "No watermark, no sign-up, no page limit." },
  { icon: "🧩", title: "Pairs with tools", text: "Combine with JPG to PDF and Compress PDF for a complete packet." },
];

const faqs = [
  { q: "How many PDFs can I merge?", a: "As many as you like. Add two or more files, drag them into the right order, and merge them into a single document." },
  { q: "Can I change the order of the files?", a: "Yes — use the up and down arrows next to each file to arrange them before merging." },
  { q: "Is it safe to merge confidential documents here?", a: "Yes. Merging happens inside your browser, so your PDFs never leave your device or get uploaded to any server." },
  { q: "Will merging change the quality of my PDFs?", a: "No. Pages are copied as-is, so text and images keep their original quality. If the merged file is too large, use our Compress PDF tool afterwards." },
  { q: "Can I merge images and PDFs together?", a: "This tool combines PDF files. If you have JPG or PNG images, convert them to PDF first with our JPG to PDF tool, then add those PDFs here to merge everything into one document." },
  { q: "Does it keep bookmarks, links and form fields?", a: "Page content, text and images are preserved exactly. Interactive elements like bookmarks may not always carry over, so for plain document packets — marksheets, certificates, statements — merging works seamlessly." },
  { q: "How do I combine bank statements into one PDF?", a: "Add each monthly statement PDF, arrange them in date order with the arrows, and merge. For a guided flow built for this, try our Combine Bank Statements PDF tool, then compress if a bank or visa portal sets a size limit." },
  { q: "Is there a page or file-size limit?", a: "No fixed page limit — you can merge large packets. Very big documents take longer to process in the browser, and if the result exceeds an upload cap, shrink it with our Compress PDF tool." },
  { q: "Is it free?", a: "Completely free — no watermark, no sign-up, and no page limit." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Merge PDF", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Merge <span className="grad">PDF files</span> into one</h1>
        <p className="lede">Combine multiple PDFs into a single file, in any order — free and entirely in your browser.</p>
      </div>

      <MergePdf />

      <Steps heading={<>Merge in <span className="g">3 simple steps</span></>} steps={steps} />
      <Features heading={<>Why use this <span className="g">PDF merger</span></>} items={features} />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Combine documents into one file for upload</h2>
        <p>
          Applications often ask you to upload a single PDF that contains several documents — your
          marksheets, certificates, ID proof and photo, for example. Instead of sending them
          separately, merge them here into one neatly ordered PDF that meets the “upload one file”
          requirement.
        </p>
        <p>
          Because the merge runs entirely in your browser, your documents are never uploaded to a
          server. Use it together with <Link href="/pdf/jpg-to-pdf/">JPG to PDF</Link> (to convert
          images first) and <Link href="/pdf/compress/">Compress PDF</Link> (to shrink the final
          file) for a complete, upload-ready packet.
        </p>

        <h3>How merging PDFs in the browser works</h3>
        <p>
          The tool reads each PDF you add, copies every page in sequence, and writes them into a
          single new file — all in local memory. Nothing is transmitted, so even confidential
          statements or contracts stay private. You control the running order with the up and down
          arrows, and the merged document keeps each source page at its original size and quality.
          If you only need part of a file, split it first with our{" "}
          <Link href="/pdf/split/">Split PDF</Link> tool, then merge the pieces you want.
        </p>

        <h3>When merging saves you time</h3>
        <p>
          Job and exam applications frequently demand one combined PDF of your photo, signature,
          marksheets and ID proof. Accountants merge monthly invoices; travellers bundle tickets and
          hotel bookings for visa files. Pairing this with{" "}
          <Link href="/combine-bank-statements-pdf/">Combine Bank Statements PDF</Link> makes
          assembling financial records for loans or visas straightforward.
        </p>

        <h3>Fixing the order and final size</h3>
        <p>
          Always preview the sequence before downloading so cover pages and annexures land where
          reviewers expect them. If a page is upside down after merging, fix it with our{" "}
          <Link href="/pdf/rotate/">Rotate PDF</Link> tool. Should the combined file exceed a portal
          limit, run it through <Link href="/pdf/compress/">Compress PDF</Link> or a target size such
          as <Link href="/reduce-pdf-size-for-visa-application/">reduce PDF size for a visa
          application</Link>, keeping the document readable while meeting strict caps.
        </p>
      </div>

      <Faq items={faqs} />

      <CtaBand
        heading="Assemble your documents for free"
        text="Convert, merge and compress everything privately in your browser."
        links={[["/pdf/jpg-to-pdf/", "JPG to PDF"], ["/pdf/compress/", "Compress PDF"], ["/pdf/pdf-to-jpg/", "PDF to JPG"], ["/image-compressor/", "Image Compressor"]]}
      />
    </>
  );
}
