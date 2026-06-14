import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Compressor from "@/app/image-compressor/Compressor";
import CompressPdfToKb from "@/app/pdf/compress/CompressPdfToKb";
import Faq from "@/app/components/Faq";
import CtaBand from "@/app/components/CtaBand";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import Byline from "@/app/components/Byline";
import { ALL_SLUGS, EXAMS, KB_VALUES, KB_INFO, PDF_KB_VALUES, PDF_KB_INFO, PDF_MB_VALUES, PDF_MB_INFO, kbSlug, type Exam } from "@/app/programmatic-data";

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
function pdfKbFromSlug(slug: string): number | null {
  const m = slug.match(/^compress-pdf-to-(\d+)kb$/);
  if (!m) return null;
  const n = Number(m[1]);
  return PDF_KB_VALUES.includes(n) ? n : null;
}
function pdfMbFromSlug(slug: string): number | null {
  const m = slug.match(/^compress-pdf-to-(\d+)mb$/);
  if (!m) return null;
  const n = Number(m[1]);
  return PDF_MB_VALUES.includes(n) ? n : null;
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
  const pkb = pdfKbFromSlug(slug);
  if (pkb !== null) {
    return {
      title: `Compress PDF to ${pkb} KB Online — Free, No Upload`,
      description: `Compress a PDF to ${pkb} KB online free in your browser. Get your PDF under the ${pkb} KB limit for exam, bank and job portals — no signup, no watermark, files never uploaded.`,
      alternates: { canonical: `/${slug}/` },
    };
  }
  const pmb = pdfMbFromSlug(slug);
  if (pmb !== null) {
    return {
      title: `Compress PDF to ${pmb} MB Online — Free, No Upload`,
      description: `Compress a PDF to ${pmb} MB online free in your browser. Get your PDF under the ${pmb} MB limit for portals that accept larger documents — no signup, files never uploaded.`,
      alternates: { canonical: `/${slug}/` },
    };
  }
  const exam = examFromSlug(slug);
  if (exam) {
    return {
      title: `${exam.name} Photo & Signature Size (KB & Dimensions)`,
      description: `Exact photo and signature size for the ${exam.name} form (${exam.authority}): dimensions, KB limits${exam.uploads.length > 2 ? " and the extra uploads it needs" : ""}. Resize & compress free in your browser.`,
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
        <div className="quickfacts">
          <span className="qf"><b>{kb} KB</b> target</span>
          <span className="qf"><b>JPG / PNG</b> supported</span>
          <span className="qf">Best for <b>{info.bestFor}</b></span>
          <span className="qf">🔒 <b>No upload</b></span>
        </div>
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
      <Byline />
      <CtaBand heading="Need a different size?" text="Compress to any KB target, or resize to exact dimensions." links={[["/image-compressor/", "Image Compressor"], ["/image-resizer/", "Image Resizer"], ["/passport-photo-maker/", "Passport Photo"], ["/signature-resize/", "Signature Resize"]]} />
    </>
  );
}

function PdfKbPage({ kb }: { kb: number }) {
  const info = PDF_KB_INFO[kb];
  const faqs = [
    info.faq,
    { q: `How do I compress a PDF to ${kb} KB?`, a: `Upload your PDF above — the target is preset to ${kb} KB. The tool rasterises the pages and lowers the quality just enough to bring the file at or under ${kb} KB, then lets you download it. Everything runs in your browser; nothing is uploaded.` },
    { q: "Will the text still be readable after compression?", a: `Yes — the tool keeps the highest quality that fits under ${kb} KB, so the pages stay legible. Very small targets on a heavy scan will look softer; scanning in greyscale first helps a lot.` },
    { q: "Is it free and private?", a: "Completely free with no sign-up or watermark, and the PDF is processed entirely on your device — it is never uploaded to a server." },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(`Compress PDF to ${kb} KB`, faqs)) }} />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "PDF Tools", href: "/pdf-tools/" }, { name: "Compress PDF", href: "/pdf/compress/" }, { name: `to ${kb} KB`, href: `/compress-pdf-to-${kb}kb/` }]} />
      <div className="tool-hero">
        <h1>Compress PDF to <span className="grad">{kb} KB</span></h1>
        <p className="lede">Reduce your PDF below {kb}&nbsp;KB online — free, no signup, 100% in your browser. The target is preset to {kb}&nbsp;KB, so just drop your file and download.</p>
      </div>
      <CompressPdfToKb targetKb={kb} />
      <div className="card content">
        <h2 style={{ marginTop: 0 }}>When you need a PDF under {kb} KB</h2>
        <p>A <strong>{kb} KB</strong> PDF limit is typically used for <strong>{info.usedFor}</strong>. {info.intro}</p>
        <h3>Tip for getting under {kb} KB</h3>
        <p>{info.tip}</p>
        <p>
          Need a different limit or a general compressor? Use <a href="/pdf/compress/">Compress PDF</a>, and
          for the rest of your application try our <a href="/pdf-tools/">full PDF toolkit</a> — merge, split
          and convert. Your file never leaves your device.
        </p>
        <p className="muted-note">⚠️ Upload limits vary between portals — always confirm the exact maximum size in the official instructions.</p>
      </div>
      <Faq items={faqs} />
      <Byline />
      <CtaBand heading="More free PDF tools" text="Merge, split, convert and compress — all in your browser." links={[["/pdf/compress/", "Compress PDF"], ["/pdf/merge/", "Merge PDF"], ["/pdf/jpg-to-pdf/", "JPG to PDF"], ["/pdf-tools/", "All PDF Tools"]]} />
    </>
  );
}

function PdfMbPage({ mb }: { mb: number }) {
  const info = PDF_MB_INFO[mb];
  const faqs = [
    info.faq,
    { q: `How do I compress a PDF to ${mb} MB?`, a: `Upload your PDF above — the target is preset to ${mb} MB (${mb * 1024} KB). The tool rasterises the pages and lowers the quality just enough to bring the file at or under ${mb} MB, then lets you download it. Everything runs in your browser; nothing is uploaded.` },
    { q: "Will the pages stay readable?", a: `Yes — at a ${mb} MB target the tool keeps high quality, so the pages stay sharp. ${mb} MB is generous, so most documents compress with little visible change.` },
    { q: "Is it free and private?", a: "Completely free with no sign-up or watermark, and the PDF is processed entirely on your device — it is never uploaded to a server." },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(`Compress PDF to ${mb} MB`, faqs)) }} />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "PDF Tools", href: "/pdf-tools/" }, { name: "Compress PDF", href: "/pdf/compress/" }, { name: `to ${mb} MB`, href: `/compress-pdf-to-${mb}mb/` }]} />
      <div className="tool-hero">
        <h1>Compress PDF to <span className="grad">{mb} MB</span></h1>
        <p className="lede">Reduce your PDF below {mb}&nbsp;MB online — free, no signup, 100% in your browser. The target is preset to {mb}&nbsp;MB, so just drop your file and download.</p>
      </div>
      <CompressPdfToKb targetKb={mb * 1024} />
      <div className="card content">
        <h2 style={{ marginTop: 0 }}>When you need a PDF under {mb} MB</h2>
        <p>A <strong>{mb} MB</strong> PDF limit is typically used for <strong>{info.usedFor}</strong>. {info.intro}</p>
        <h3>Tip for getting under {mb} MB</h3>
        <p>{info.tip}</p>
        <p>
          Need a smaller target instead? Try <a href="/compress-pdf-to-500kb/">500&nbsp;KB</a> or{" "}
          <a href="/compress-pdf-to-200kb/">200&nbsp;KB</a>, or use the full{" "}
          <a href="/pdf-tools/">PDF toolkit</a> to merge and split first. Your file never leaves your device.
        </p>
        <p className="muted-note">⚠️ Upload limits vary between portals — always confirm the exact maximum size in the official instructions.</p>
      </div>
      <Faq items={faqs} />
      <Byline />
      <CtaBand heading="More free PDF tools" text="Merge, split, convert and compress — all in your browser." links={[["/pdf/compress/", "Compress PDF"], ["/resize-pdf/", "Resize PDF"], ["/pdf/merge/", "Merge PDF"], ["/pdf-tools/", "All PDF Tools"]]} />
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
        <div className="quickfacts">
          <span className="qf"><b>{exam.uploads.length}</b> files to upload</span>
          <span className="qf">Photo <b>{exam.uploads[0].kb}</b></span>
          <span className="qf">Portal <b>{exam.portal}</b></span>
          <span className="qf">🔒 <b>No upload</b></span>
        </div>
      </div>

      {/* Elegant spec-sheet: one card per required upload */}
      <h2 className="section-center" style={{ marginTop: 30 }}>What you need to <span className="g">upload</span></h2>
      <div className="spec-grid">
        {exam.uploads.map((u) => (
          <div key={u.label} className="spec-card">
            <div className="spec-top">
              <span className="spec-ic">{u.icon}</span>
              <span className="spec-kb">{u.kb}</span>
            </div>
            <div className="spec-label">{u.label}</div>
            <dl className="spec-meta">
              {u.dims !== "—" && <div><dt>Dimensions</dt><dd>{u.dims}</dd></div>}
              <div><dt>Format</dt><dd>{u.format}</dd></div>
            </dl>
            <p className="spec-note">{u.note}</p>
          </div>
        ))}
      </div>

      {/* Do / Don't checklist */}
      <div className="checklist">
        <div className="check check-do">
          <h3>✓ Do</h3>
          <ul>
            <li>{exam.do}</li>
            <li>Use a plain, light, evenly-lit background</li>
            <li>Face the camera squarely with a neutral expression</li>
            <li>Save as JPG before compressing to the target size</li>
          </ul>
        </div>
        <div className="check check-dont">
          <h3>✗ Avoid</h3>
          <ul>
            <li>{exam.dont}</li>
            <li>Selfies, filters or beautify modes</li>
            <li>Caps, sunglasses or shadows on the face</li>
            <li>Busy, dark or coloured backgrounds</li>
          </ul>
        </div>
      </div>

      <h2 className="section-center" style={{ marginTop: 34 }}>Compress your photo to <span className="g">{exam.target} KB</span></h2>
      <Compressor initialTarget={exam.target} />

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>About the {exam.name} application</h2>
        <p>{exam.blurb} It recruits for {exam.posts}, and the online form on <strong>{exam.portal}</strong> requires the images listed above.</p>
        <p>{exam.unique}</p>
        <p className="muted-note">⚠️ These figures are common, well-cited values — but exam requirements change between cycles. Always confirm the exact size and dimensions in the official {exam.authority} notification on {exam.portal} before uploading.</p>
        <p>
          Need the rest of your application ready? Set exact pixel sizes with the{" "}
          <a href="/image-resizer/">Image Resizer</a>, size your signature with{" "}
          <a href="/signature-resize/">Signature Resize</a>, get a clean white background from the{" "}
          <a href="/passport-photo-maker/">Passport Photo Maker</a>, and merge photo and signature
          into one image with the <a href="/photo-signature-combiner/">Photo + Signature Combiner</a>.
        </p>
      </div>

      <Faq items={faqs} />
      <Byline />
      <CtaBand heading="Finish your application" text="Photo, signature and documents — sized and ready." links={[["/image-resizer/", "Image Resizer"], ["/signature-resize/", "Signature Resize"], ["/passport-photo-maker/", "Passport Photo"], ["/photo-signature-combiner/", "Photo + Signature"]]} />
    </>
  );
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const kb = kbFromSlug(slug);
  if (kb !== null) return <KbPage kb={kb} />;
  const pkb = pdfKbFromSlug(slug);
  if (pkb !== null) return <PdfKbPage kb={pkb} />;
  const pmb = pdfMbFromSlug(slug);
  if (pmb !== null) return <PdfMbPage mb={pmb} />;
  const exam = examFromSlug(slug);
  if (exam) return <ExamPage exam={exam} />;
  notFound();
}
