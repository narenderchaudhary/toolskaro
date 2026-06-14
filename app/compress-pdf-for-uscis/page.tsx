import type { Metadata } from "next";
import CompressPdf from "@/app/pdf/compress/CompressPdf";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Compress PDF for USCIS — Free, No Watermark, No Upload",
  description:
    "Compress a PDF for a USCIS online filing for free. Reduce documents below the upload size limit on your myUSCIS account — no watermark, no sign-up, 100% in your browser.",
  alternates: { canonical: "/compress-pdf-for-uscis/" },
};

const faqs = [
  { q: "What is the file size limit for USCIS uploads?", a: "When filing online through your myUSCIS account, each uploaded file must be under a set size and in an accepted format (usually PDF or JPG). The exact limit can change, so always confirm the current requirement on uscis.gov before submitting." },
  { q: "How do I compress a document for USCIS?", a: "Upload your scanned PDF above and the tool reduces its size while keeping the text readable, then lets you download it. Scanned and photo-based documents compress the most. Everything runs in your browser." },
  { q: "Will my immigration documents stay private?", a: "Yes. Nothing is uploaded — the compression happens entirely on your own device, which matters when handling sensitive immigration paperwork." },
  { q: "My scan is too large for USCIS — what should I do?", a: "Scan in black-and-white or greyscale where possible and run the file through this compressor. If it is still too large, split it into separate documents or compress to a specific target like 1 MB." },
  { q: "Is it free with no watermark?", a: "Yes — completely free, no watermark, no sign-up and no email." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Compress PDF for USCIS", url: "https://toolskaro.com/compress-pdf-for-uscis/", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Compress a PDF for <span className="grad">USCIS</span></h1>
        <p className="lede">Reduce immigration documents below the myUSCIS upload limit — free, no watermark, no sign-up, and 100% in your browser so your paperwork stays private.</p>
      </div>

      <CompressPdf />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Get your documents under the USCIS upload limit</h2>
        <p>
          Filing online through <strong>myUSCIS</strong> caps the size of each document you upload, and a
          scanned passport, birth certificate or supporting letter is often too large. This tool shrinks
          your PDF enough to fit while keeping the pages clearly readable — exactly what a reviewer needs.
        </p>
        <p>
          Because immigration documents are sensitive, it matters that <strong>nothing is uploaded</strong>:
          the compression runs on your own device. If a file is still too big, scan in greyscale, split
          long documents, or compress to a specific target such as{" "}
          <a href="/compress-pdf-to-1mb/">1&nbsp;MB</a> or <a href="/compress-pdf-to-500kb/">500&nbsp;KB</a>.
        </p>
        <p className="muted-note">⚠️ USCIS file-size and format rules can change and vary by form — always confirm the current requirements on uscis.gov before you upload. ToolsKaro is not affiliated with USCIS or any government agency.</p>
      </div>

      <Faq items={faqs} />

      <CtaBand heading="Prepare your whole application" text="Compress, merge and convert documents — private and free." links={[["/pdf/compress/", "Compress PDF"], ["/pdf/merge/", "Merge PDF"], ["/heic-to-pdf/", "HEIC to PDF"], ["/pdf-tools/", "All PDF Tools"]]} />
    </>
  );
}
