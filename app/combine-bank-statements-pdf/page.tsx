import type { Metadata } from "next";
import MergePdf from "@/app/pdf/merge/MergePdf";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Combine Bank Statements into One PDF — Free, No Upload",
  description:
    "Combine bank statements into one PDF free. Merge monthly bank statements into a single PDF file for visa, loan or rental applications — no sign-up, 100% in your browser.",
  alternates: { canonical: "/combine-bank-statements-pdf/" },
};

const faqs = [
  { q: "How do I combine bank statements into one PDF?", a: "Add each statement PDF above, drag them into the right order (oldest to newest is usual), and merge. You get a single PDF to download — all in your browser." },
  { q: "Why combine statements into one file?", a: "Visa, loan, mortgage and rental applications often ask for several months of statements as a single document. Merging them into one clean PDF is easier to upload and review than separate files." },
  { q: "Are my bank statements uploaded anywhere?", a: "No. The merge happens entirely on your device, so your financial documents are never uploaded to a server — which is important for sensitive bank data." },
  { q: "Can I merge several monthly statements into a single PDF?", a: "Yes — that is exactly what this tool is for. Add each monthly bank statement PDF, set the order, and merge them into one PDF file ready for your application." },
  { q: "How do I combine bank statements that are password-protected?", a: "This tool merges normal PDFs only. If a statement is secured or password-protected, unlock it first (open it with the password and re-save an unlocked copy), then add that unlocked file here to merge." },
  { q: "Can I reorder the statements before merging?", a: "Yes. Arrange the files in the order you want before merging; each PDF is added in that order, so you can keep them chronological." },
  { q: "Is the resulting PDF too large to upload?", a: "If the combined file is large, run it through our Compress PDF tool afterwards to bring it under the portal's size limit while keeping the pages readable." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Combine Bank Statements into PDF", url: "https://toolskaro.com/combine-bank-statements-pdf/", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Combine bank statements into <span className="grad">one PDF</span></h1>
        <p className="lede">Merge your monthly bank statements into one PDF file for visa, loan or rental applications — free, no sign-up, and 100% in your browser so your bank data stays private.</p>
      </div>

      <MergePdf />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>One clean PDF for your application</h2>
        <p>
          Applications for visas, loans, mortgages and rentals usually ask for several months of bank
          statements as <strong>one document</strong>. Uploading five separate files is awkward and
          sometimes not allowed — so combining them into a single, chronological PDF makes the whole thing
          simpler to submit and review.
        </p>
        <p>
          If you need to combine monthly bank statements into one PDF file for an application, this is the
          quickest way: add your statement PDFs, put them in order, and merge. Because <strong>nothing is uploaded</strong>,
          your financial details stay on your device. If the combined file is large, shrink it with{" "}
          <a href="/pdf/compress/">Compress PDF</a> or to a target like{" "}
          <a href="/compress-pdf-to-2mb/">2&nbsp;MB</a>.
        </p>
      </div>

      <Faq items={faqs} />

      <CtaBand heading="Assemble your document pack" text="Merge, compress and convert — private and free." links={[["/pdf/merge/", "Merge PDF"], ["/pdf/compress/", "Compress PDF"], ["/pdf/jpg-to-pdf/", "Image to PDF"], ["/pdf-tools/", "All PDF Tools"]]} />
    </>
  );
}
