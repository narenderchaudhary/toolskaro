import type { Metadata } from "next";
import Link from "next/link";
import Hub from "@/app/components/Hub";

export const metadata: Metadata = {
  title: "Free PDF Tools — Merge, Split, Compress & Convert PDF Online",
  description:
    "A complete free PDF toolkit: merge, split, compress, rotate, convert JPG↔PDF, add page numbers, watermark and organize pages. No upload, no sign-up — runs in your browser.",
  alternates: { canonical: "/pdf-tools/" },
};

const faqs = [
  { q: "Are these PDF tools free with no limits?", a: "Yes. Every PDF tool is completely free with no sign-up, no watermark and no file-count limits. Use them as often as you need on any device." },
  { q: "Do my PDFs get uploaded to a server?", a: "No. All PDF processing happens entirely in your browser using local code, so your documents are never uploaded or stored anywhere — which keeps sensitive files private." },
  { q: "How do I reduce a PDF below an upload limit?", a: "Open the Compress PDF tool and upload your file; it shrinks the size so it fits common portal limits. If you only need a few pages, use Split PDF or Delete Pages first to make it smaller." },
  { q: "Can I convert images to PDF and back?", a: "Yes. Use JPG to PDF to combine photos or scans into a single PDF, and PDF to JPG to turn PDF pages back into images." },
];

export default function Page() {
  return (
    <Hub
      catKey="pdf"
      heading="Free PDF Tools Online"
      headingNode={<>Free <span className="grad">PDF Tools</span> Online</>}
      lede="Merge, split, compress, convert, rotate and organize PDFs — a full PDF toolkit that is free, needs no sign-up and never uploads your files."
      faqs={faqs}
    >
      <h2 style={{ marginTop: 0 }}>A complete PDF toolkit in your browser</h2>
      <p>
        Whether you are putting together documents for an application or cleaning up a scan, this
        toolkit handles the whole job. <Link href="/pdf/merge/">Merge PDF</Link> joins several files
        into one, <Link href="/pdf/split/">Split PDF</Link> and{" "}
        <Link href="/pdf/delete-pages/">Delete Pages</Link> trim what you do not need,{" "}
        <Link href="/pdf/compress/">Compress PDF</Link> shrinks the file to fit upload limits, and{" "}
        <Link href="/pdf/organize/">Organize PDF</Link> lets you reorder, rotate and remove pages with
        thumbnails.
      </p>
      <p>
        Need to convert? <Link href="/pdf/jpg-to-pdf/">JPG to PDF</Link> turns photos and scans into a
        single document, while <Link href="/pdf/pdf-to-jpg/">PDF to JPG</Link> does the reverse. You
        can also <Link href="/pdf/rotate/">rotate pages</Link>,{" "}
        <Link href="/pdf/page-numbers/">add page numbers</Link>, and{" "}
        <Link href="/pdf/watermark/">add a text watermark</Link>. Because every tool runs locally, your
        documents stay private on your own device — nothing is uploaded.
      </p>
    </Hub>
  );
}
