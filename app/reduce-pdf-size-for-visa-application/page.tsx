import type { Metadata } from "next";
import CompressPdf from "@/app/pdf/compress/CompressPdf";
import CtaBand from "@/app/components/CtaBand";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Reduce PDF Size for Visa Application — Free, No Upload",
  description:
    "Reduce a PDF's size for a visa application for free. Compress passport scans and supporting documents below the portal limit — no watermark, no sign-up, 100% in your browser.",
  alternates: { canonical: "/reduce-pdf-size-for-visa-application/" },
};

const faqs = [
  { q: "What size should documents be for a visa application?", a: "Most visa portals cap each uploaded document's size and accept PDF or JPG. The exact limit varies by country and form, so always confirm the current requirement on the official visa website before submitting." },
  { q: "How do I reduce a PDF for my visa application?", a: "Upload your scanned document above and the tool compresses it below the limit while keeping the text and stamps readable, then lets you download it. It runs entirely in your browser." },
  { q: "Are my visa documents kept private?", a: "Yes. Nothing is uploaded — your passport scans and supporting papers are processed only on your device, which matters for sensitive personal documents." },
  { q: "My scan is still too big — what can I do?", a: "Scan in greyscale where colour isn't required, split multi-page documents, or compress to a specific target such as 500 KB or 1 MB to get well under the limit." },
  { q: "Is it free with no watermark?", a: "Yes — completely free, no watermark, no sign-up and no email." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Reduce PDF Size for Visa Application", url: "https://toolskaro.com/reduce-pdf-size-for-visa-application/", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="tool-hero">
        <h1>Reduce PDF size for a <span className="grad">visa application</span></h1>
        <p className="lede">Compress passport scans and supporting documents below the visa portal&apos;s limit — free, no watermark, no sign-up, and 100% in your browser.</p>
      </div>

      <CompressPdf />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Fit your documents under the portal limit</h2>
        <p>
          Visa portals cap how large each uploaded document can be, and a scanned passport, photo or
          supporting letter is often too big. This tool reduces your PDF so it fits while keeping the
          text, photos and stamps clearly legible — which is what a visa officer needs to verify.
        </p>
        <p>
          Your documents are sensitive, so <strong>nothing is uploaded</strong> — the compression runs on
          your own device. If a file is still too large, scan it in greyscale, split long documents, or
          compress to a set target like <a href="/compress-pdf-to-500kb/">500&nbsp;KB</a> or{" "}
          <a href="/compress-pdf-to-1mb/">1&nbsp;MB</a>.
        </p>
        <p className="muted-note">⚠️ Document size and format rules differ by country and visa type and can change — always confirm the current requirement on the official visa portal. ToolsKaro is not affiliated with any government or visa authority.</p>
      </div>

      <Faq items={faqs} />

      <CtaBand heading="Prepare your visa documents" text="Compress, merge and convert — private and free." links={[["/pdf/compress/", "Compress PDF"], ["/pdf/merge/", "Merge PDF"], ["/heic-to-pdf/", "HEIC to PDF"], ["/pdf-tools/", "All PDF Tools"]]} />
    </>
  );
}
