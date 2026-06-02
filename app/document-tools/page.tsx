import type { Metadata } from "next";
import Link from "next/link";
import Hub from "@/app/components/Hub";

export const metadata: Metadata = {
  title: "Free Document Makers — Resume, Biodata, Cover Letter & Invoice",
  description:
    "Create professional documents free: build a resume/CV, a Hindi or English marriage biodata, a cover letter and a GST invoice — then export to PDF. No sign-up, runs in your browser.",
  alternates: { canonical: "/document-tools/" },
};

const faqs = [
  { q: "Can I download my document as a PDF?", a: "Yes. Each maker lets you export a clean, print-ready PDF of your finished document directly from the browser — ideal for emailing or uploading with an application." },
  { q: "Are the document makers free?", a: "Yes, completely free with no sign-up and no watermark. You can create and download as many documents as you like." },
  { q: "Is my personal information safe?", a: "Yes. The makers run entirely in your browser, so the details you type stay on your own device and are never uploaded to any server." },
  { q: "Can I make a marriage biodata in Hindi?", a: "Yes. The Marriage Biodata Maker supports both Hindi and English templates so you can prepare a traditional biodata in the language you need." },
];

export default function Page() {
  return (
    <Hub
      catKey="doc"
      heading="Free Document Makers"
      headingNode={<>Free <span className="grad">Document Makers</span></>}
      lede="Build a resume, marriage biodata, cover letter or GST invoice and export it to a polished PDF — free, no sign-up, and private to your browser."
      faqs={faqs}
    >
      <h2 style={{ marginTop: 0 }}>Create job and personal documents in minutes</h2>
      <p>
        From job applications to family occasions, these makers turn a blank page into a finished,
        print-ready document. The <Link href="/resume-maker/">Resume / CV Maker</Link> helps you build
        a clean, recruiter-friendly resume and export it to PDF, and the{" "}
        <Link href="/cover-letter-generator/">Cover Letter Generator</Link> pairs with it for a
        professional application.
      </p>
      <p>
        For personal needs, the <Link href="/marriage-biodata-maker/">Marriage Biodata Maker</Link>{" "}
        offers Hindi and English templates for a traditional biodata, while the{" "}
        <Link href="/invoice-generator/">Invoice Generator</Link> creates GST-ready invoices for
        freelancers and small businesses. Every document is built in your browser and exported to PDF —
        your details are never uploaded, so your information stays completely private.
      </p>
    </Hub>
  );
}
