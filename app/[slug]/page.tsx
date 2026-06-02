import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Compressor from "@/app/image-compressor/Compressor";
import Faq from "@/app/components/Faq";
import CtaBand from "@/app/components/CtaBand";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import { ALL_SLUGS, EXAMS, KB_VALUES, kbSlug, type Exam } from "@/app/programmatic-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return ALL_SLUGS.map((slug) => ({ slug }));
}

function kbFromSlug(slug: string): number | null {
  const m = slug.match(/^compress-image-to-(\d+)kb$/);
  if (!m) return null;
  const n = Number(m[1]);
  return KB_VALUES.includes(n) ? n : null;
}
function examFromSlug(slug: string): Exam | null {
  return EXAMS.find((e) => e.slug === slug) ?? null;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const kb = kbFromSlug(slug);
  if (kb !== null) {
    return {
      title: `Compress Image to ${kb} KB — Free Online (No Upload)`,
      description: `Compress your JPG or PNG photo to ${kb} KB online for free. Perfect for exam forms with a ${kb} KB limit — 100% in your browser, no signup.`,
      alternates: { canonical: `/${slug}/` },
    };
  }
  const exam = examFromSlug(slug);
  if (exam) {
    return {
      title: `${exam.name} Photo & Signature — Size & KB (Free)`,
      description: `Resize and compress your photo and signature for the ${exam.name} application form. Free, no signup, 100% in your browser.`,
      alternates: { canonical: `/${slug}/` },
    };
  }
  return {};
}

function jsonLd(name: string, faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name, applicationCategory: "MultimediaApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
}

function KbPage({ kb }: { kb: number }) {
  const faqs = [
    { q: `How do I compress an image to ${kb} KB?`, a: `Upload your photo above, make sure the target is set to ${kb} KB, and click Compress. The tool reduces the quality just enough to bring the file at or under ${kb} KB, then lets you download it.` },
    { q: `Will the image still be clear at ${kb} KB?`, a: `Yes, in most cases. The tool keeps the highest quality possible while meeting the ${kb} KB limit. Smaller targets naturally reduce quality more, but the result stays fine for passport-style photos and document uploads.` },
    { q: "Is my image uploaded to a server?", a: "No. The compression happens entirely in your browser, so your file never leaves your device." },
    { q: "Is it free?", a: "Yes — completely free, no signup, no watermark." },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(`Compress Image to ${kb} KB`, faqs)) }} />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Image Compressor", href: "/image-compressor/" }, { name: `Compress to ${kb} KB`, href: `/compress-image-to-${kb}kb/` }]} />
      <div className="tool-hero">
        <h1>Compress image to <span className="grad">{kb} KB</span></h1>
        <p className="lede">Shrink your JPG or PNG to {kb}&nbsp;KB online — free, no signup, and 100% in your browser. The target is preset to {kb}&nbsp;KB for you.</p>
      </div>
      <Compressor initialTarget={kb} />
      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Why compress to {kb} KB?</h2>
        <p>
          Many online application and exam portals cap the photo or document file size — and a
          {" "}{kb}&nbsp;KB limit is one of the common requirements. A picture straight from your phone
          is far larger than that, so it gets rejected at upload. This page presets the compressor to
          {" "}{kb}&nbsp;KB, so you just upload your image and download a version that fits.
        </p>
        <p>
          The compression runs in your browser using a smart quality search, keeping your photo as
          sharp as possible while landing at or under {kb}&nbsp;KB. Your file is never uploaded.
        </p>
      </div>
      <Faq items={faqs} />
      <CtaBand heading="Need a different size?" text="Compress to any KB target, or resize to exact dimensions." links={[["/image-compressor/", "Image Compressor"], ["/image-resizer/", "Image Resizer"], ["/passport-photo-maker/", "Passport Photo"], ["/signature-resize/", "Signature Resize"]]} />
    </>
  );
}

function ExamPage({ exam }: { exam: Exam }) {
  const faqs = [
    { q: `What photo size is required for ${exam.name}?`, a: `Most ${exam.name} forms ask for a recent passport-style colour photo as a JPG, roughly 20–50 KB in size and about 3.5×4.5 cm (around 200×230 px). Always confirm the exact figures in the official ${exam.authority} notification.` },
    { q: `What is the signature size for ${exam.name}?`, a: `The signature is usually a JPG of about 10–20 KB, around 3.5×1.5 cm (about 140×60 px), signed in black ink on white paper. Check the official notification for the precise limits.` },
    { q: `How do I resize my photo for the ${exam.name} form?`, a: `Upload your photo below and compress it to the required KB. To set exact pixel dimensions first, use our Image Resizer, then compress here.` },
    { q: "Are my files uploaded anywhere?", a: "No. Everything runs in your browser, so your photo and signature never leave your device." },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(`${exam.name} Photo & Signature Resizer`, faqs)) }} />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Image Compressor", href: "/image-compressor/" }, { name: `${exam.name} Photo & Signature`, href: `/${exam.slug}/` }]} />
      <div className="tool-hero">
        <h1>Photo &amp; signature for <span className="grad">{exam.name}</span></h1>
        <p className="lede">Resize and compress your photo and signature for the {exam.name} application form — free, no signup, in your browser.</p>
      </div>

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>{exam.name} photo &amp; signature requirements</h2>
        <p>{exam.blurb} Like most {exam.authority} forms, the online application asks you to upload a photograph and signature within set dimensions and file sizes.</p>
        <ul>
          <li><strong>Photograph:</strong> JPG/JPEG, about 20–50&nbsp;KB, ~3.5×4.5&nbsp;cm (≈200×230&nbsp;px), recent colour photo on a light background.</li>
          <li><strong>Signature:</strong> JPG/JPEG, about 10–20&nbsp;KB, ~3.5×1.5&nbsp;cm (≈140×60&nbsp;px), signed in black ink on white paper.</li>
        </ul>
        <p className="muted-note">⚠️ These are common ranges. Always confirm the exact size and dimensions in the official {exam.authority} notification for {exam.name}, as requirements can change.</p>
      </div>

      <Compressor initialTarget={50} />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Prepare both files in minutes</h2>
        <p>
          Upload your photo above and compress it to the size your form needs. For an exact pixel
          size, run it through the <a href="/image-resizer/">Image Resizer</a> first. For your
          signature, use the <a href="/signature-resize/">Signature Resize</a> tool, and for a clean
          white-background photo, the <a href="/passport-photo-maker/">Passport Photo Maker</a>.
        </p>
      </div>

      <Faq items={faqs} />
      <CtaBand heading="Finish your application" text="Photo, signature and documents — sized and ready." links={[["/image-resizer/", "Image Resizer"], ["/signature-resize/", "Signature Resize"], ["/passport-photo-maker/", "Passport Photo"], ["/photo-signature-combiner/", "Photo + Signature"]]} />
    </>
  );
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const kb = kbFromSlug(slug);
  if (kb !== null) return <KbPage kb={kb} />;
  const exam = examFromSlug(slug);
  if (exam) return <ExamPage exam={exam} />;
  notFound();
}
