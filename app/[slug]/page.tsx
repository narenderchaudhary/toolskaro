import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Compressor from "@/app/image-compressor/Compressor";
import Faq from "@/app/components/Faq";
import CtaBand from "@/app/components/CtaBand";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import { ALL_SLUGS, EXAMS, KB_VALUES, KB_INFO, kbSlug, type Exam } from "@/app/programmatic-data";

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
    const info = KB_INFO[kb];
    return {
      title: `Compress Image to ${kb} KB Online — Free, No Upload`,
      description: `Compress a JPG or PNG to ${kb} KB free in your browser — ideal for ${info.usedFor}. No signup, no watermark, files never uploaded.`,
      alternates: { canonical: `/${slug}/` },
    };
  }
  const exam = examFromSlug(slug);
  if (exam) {
    return {
      title: `${exam.name} Photo & Signature Size (KB & Dimensions)`,
      description: `Exact photo and signature size for the ${exam.name} form (${exam.authority}): dimensions, KB limits${exam.extras.length ? " and the extra uploads it needs" : ""}. Resize & compress free in your browser.`,
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
  const info = KB_INFO[kb];
  const faqs = [
    info.faq,
    { q: `How do I compress an image to ${kb} KB?`, a: `Upload your photo above — the target is already set to ${kb} KB. Click Compress and the tool lowers the quality just enough to bring the file at or under ${kb} KB, then lets you download it. Nothing is uploaded to a server.` },
    { q: `Will the image still be clear at ${kb} KB?`, a: `The tool keeps the highest quality possible while meeting the ${kb} KB limit. For ${info.usedFor}, ${kb} KB is enough to stay clear; very small targets naturally soften the image more.` },
    { q: "Is it free and private?", a: "Yes — completely free, no signup, no watermark, and the compression runs entirely in your browser so your file never leaves your device." },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(`Compress Image to ${kb} KB`, faqs)) }} />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Image Compressor", href: "/image-compressor/" }, { name: `Compress to ${kb} KB`, href: `/compress-image-to-${kb}kb/` }]} />
      <div className="tool-hero">
        <h1>Compress image to <span className="grad">{kb} KB</span></h1>
        <p className="lede">Shrink your JPG or PNG to {kb}&nbsp;KB online — free, no signup, 100% in your browser. The target is preset to {kb}&nbsp;KB, so just upload and download.</p>
      </div>
      <Compressor initialTarget={kb} />
      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Where a {kb} KB limit is used</h2>
        <p>A <strong>{kb} KB</strong> limit is most often used for <strong>{info.usedFor}</strong>. {info.intro}</p>
        <h3>Tip for hitting {kb} KB cleanly</h3>
        <p>{info.tip}</p>
        <p className="muted-note">⚠️ File-size rules vary between forms and change between exam cycles — always confirm the exact limit in the official notification before you upload.</p>
      </div>
      <Faq items={faqs} />
      <CtaBand heading="Need a different size?" text="Compress to any KB target, or resize to exact dimensions." links={[["/image-compressor/", "Image Compressor"], ["/image-resizer/", "Image Resizer"], ["/passport-photo-maker/", "Passport Photo"], ["/signature-resize/", "Signature Resize"]]} />
    </>
  );
}

function ExamPage({ exam }: { exam: Exam }) {
  const faqs = [
    ...exam.uniqueFaqs,
    { q: `How do I resize my photo for the ${exam.name} form?`, a: `Upload your photo below — it is preset to ${exam.target} KB for ${exam.name}. To set exact pixel dimensions first, use our Image Resizer, then compress here. Your signature can be sized with the Signature Resize tool.` },
    { q: "Are my files uploaded anywhere?", a: "No. Everything runs in your browser, so your photo, signature and documents never leave your device." },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(`${exam.name} Photo & Signature Resizer`, faqs)) }} />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Image Compressor", href: "/image-compressor/" }, { name: `${exam.name} Photo & Signature`, href: `/${exam.slug}/` }]} />
      <div className="tool-hero">
        <h1>Photo &amp; signature for <span className="grad">{exam.name}</span></h1>
        <p className="lede">Exact photo and signature sizes for the {exam.name} application form ({exam.authority}) — resize and compress free, in your browser.</p>
      </div>

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>{exam.name} photo &amp; signature requirements</h2>
        <p>{exam.blurb} It recruits for {exam.posts}, and the online application on <strong>{exam.portal}</strong> asks you to upload images within set dimensions and file sizes.</p>
        <ul>
          <li><strong>Photograph:</strong> {exam.photo}</li>
          <li><strong>Signature:</strong> {exam.signature}</li>
          {exam.extras.map((x, i) => (
            <li key={i}>{x}</li>
          ))}
        </ul>
        <p>{exam.unique}</p>
        <p className="muted-note">⚠️ These figures are common, well-cited values — but exam requirements change between cycles. Always confirm the exact size and dimensions in the official {exam.authority} notification on {exam.portal} before uploading.</p>
      </div>

      <Compressor initialTarget={exam.target} />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>Prepare every file in minutes</h2>
        <p>
          Upload your photo above and compress it to the size {exam.name} needs. For an exact pixel
          size, run it through the <a href="/image-resizer/">Image Resizer</a> first. Size your
          signature with <a href="/signature-resize/">Signature Resize</a>, get a clean
          white-background photo from the <a href="/passport-photo-maker/">Passport Photo Maker</a>,
          and combine both into one image with the{" "}
          <a href="/photo-signature-combiner/">Photo + Signature Combiner</a>.
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
