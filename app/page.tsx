import Link from "next/link";
import Faq from "@/app/components/Faq";
import SocialLinks from "@/app/components/Social";
import { CATEGORIES, type Tool } from "@/app/tools-catalog";

function ToolCard({ tool, tint, color }: { tool: Tool; tint: string; color: string }) {
  const inner = (
    <>
      <div className="tool-icon" style={{ background: tint, color }}>{tool.icon}</div>
      <div>
        <div className="t">{tool.t}{!tool.ready && <span className="vol soon" style={{ marginLeft: 8 }}>Soon</span>}</div>
        <div className="d">{tool.d}</div>
      </div>
    </>
  );
  const accent = { ["--cat" as string]: color } as React.CSSProperties;
  return tool.ready ? (
    <Link href={tool.href} className="tool-card" style={accent}>{inner}</Link>
  ) : (
    <div className="tool-card soon" style={accent}>{inner}</div>
  );
}

const FEATURED: { href: string; tag?: "HOT" | "NEW" }[] = [
  { href: "/image-compressor/", tag: "HOT" },
  { href: "/resize-image-in-kb/", tag: "NEW" },
  { href: "/passport-photo-maker/", tag: "HOT" },
  { href: "/remove-background/", tag: "HOT" },
  { href: "/jpeg-to-jpg/", tag: "NEW" },
  { href: "/pdf/jpg-to-pdf/", tag: "HOT" },
  { href: "/resume-maker/" },
  { href: "/email-signature-maker/", tag: "NEW" },
];
const ALL_TOOLS = CATEGORIES.flatMap((c) => c.tools.map((t) => ({ ...t, color: c.color, tint: c.tint })));

export default function Home() {
  const total = CATEGORIES.reduce((n, c) => n + c.tools.length, 0);
  const featured = FEATURED.map((f) => {
    const t = ALL_TOOLS.find((x) => x.href === f.href);
    return t ? { ...t, tag: f.tag } : null;
  }).filter(Boolean) as (Tool & { color: string; tint: string; tag?: "HOT" | "NEW" })[];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: homeFaqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          }),
        }}
      />
      <section className="hero">
        <h1>
          Free online tools for <span className="grad">photos, signatures &amp; PDFs</span>
        </h1>
        <p className="hero-sub">
          Resize &amp; compress your photo and signature to the exact size any form needs, convert and
          compress PDFs, build a resume and more — free, no login, and 100% in your browser.
        </p>
        <div className="hero-badges">
          <span className="badge">🔒 Files never uploaded</span>
          <span className="badge">⚡ No sign-up</span>
          <span className="badge">🆓 {total} free tools</span>
        </div>
        <div className="hero-social"><SocialLinks /></div>
      </section>

      <section className="featured">
        <div className="section-head">
          <span className="dot" style={{ background: "#f59e0b", color: "#f59e0b" }} />
          <h2>Most popular tools</h2>
        </div>
        <div className="featured-grid">
          {featured.map((t) => (
            <Link key={t.href} href={t.href} className="featured-card" style={{ ["--cat" as string]: t.color } as React.CSSProperties}>
              {t.tag && <span className={`tool-tag ${t.tag.toLowerCase()}`}>{t.tag}</span>}
              <div className="featured-icon" style={{ background: t.tint, color: t.color }}>{t.icon}</div>
              <div className="featured-t">{t.t}</div>
              <div className="featured-d">{t.d}</div>
            </Link>
          ))}
        </div>
      </section>

      {CATEGORIES.map((cat) => (
        <section key={cat.name} className="tools-section">
          <div className="section-head">
            <span className="dot" style={{ background: cat.color, color: cat.color }} />
            <h2><Link href={cat.hubHref}>{cat.name}</Link></h2>
            <Link href={cat.hubHref} className="count count-link">View all {cat.tools.length} →</Link>
          </div>
          <div className="tool-grid">
            {cat.tools.map((tool) => (
              <ToolCard key={tool.href} tool={tool} tint={cat.tint} color={cat.color} />
            ))}
          </div>
        </section>
      ))}

      <section className="trust-band">
        <div className="trust-item"><span className="trust-ic">🔒</span><div><b>Files never uploaded</b><p>Every tool runs in your browser — your photos and documents stay on your device.</p></div></div>
        <div className="trust-item"><span className="trust-ic">🆓</span><div><b>Free, no watermark</b><p>No sign-up, no watermark and no hidden limits — use every tool as much as you like.</p></div></div>
        <div className="trust-item"><span className="trust-ic">⚡</span><div><b>Fast &amp; works anywhere</b><p>Instant results on phone, tablet or desktop in any modern browser.</p></div></div>
        <div className="trust-item"><span className="trust-ic">📄</span><div><b>For any form or document</b><p>Built for exam forms, job applications, visa documents and everyday files.</p></div></div>
      </section>

      <section className="card content" style={{ marginTop: 8 }}>
        <h2 style={{ marginTop: 0 }}>Free online tools for photos, signatures, PDFs &amp; documents</h2>
        <p>
          ToolsKaro is a free collection of {total}+ online tools for students, job seekers and anyone
          handling forms and documents. From resizing and compressing your photo and signature for
          application forms to converting and merging PDFs, building a resume, and everyday calculators —
          every tool works instantly in your web browser, with no sign-up and nothing to install.
        </p>

        <h3>Made for government exam forms</h3>
        <p>
          Every <strong>SSC, UPSC, IBPS, SBI, RRB and State PSC</strong> application demands your
          photograph and signature in an exact size and file weight — typically a photo of
          20–50&nbsp;KB at 3.5×4.5&nbsp;cm and a signature of 10–20&nbsp;KB. Our{" "}
          <Link href="/image-compressor/">image compressor</Link>,{" "}
          <Link href="/image-resizer/">image resizer</Link>,{" "}
          <Link href="/passport-photo-maker/">passport photo maker</Link> and{" "}
          <Link href="/signature-resize/">signature resizer</Link> hit those specifications in one
          click, so your form is never rejected for the wrong size again. You can even compress to a{" "}
          <Link href="/compress-image-to-50kb/">specific KB like 50&nbsp;KB</Link> or prepare your{" "}
          <Link href="/photo-resize-for-ssc-cgl/">photo for SSC CGL</Link> and other exams directly.
        </p>

        <h3>Your files never leave your device</h3>
        <p>
          Unlike most online tools, ToolsKaro processes everything <strong>inside your browser</strong>.
          Your photos, signatures and documents are never uploaded to a server — which makes the
          tools fast, completely private and secure. That matters when you are handling personal
          documents, ID proofs and certificates.
        </p>

        <h3>An all-in-one toolkit</h3>
        <p>
          Beyond images you get a full <Link href="/pdf/merge/">PDF toolkit</Link> — merge, split,
          compress, convert (JPG to PDF and back), rotate and add page numbers — plus document makers
          for <Link href="/resume-maker/">resumes</Link>,{" "}
          <Link href="/cover-letter-generator/">cover letters</Link>,{" "}
          <Link href="/marriage-biodata-maker/">marriage biodata</Link> and{" "}
          <Link href="/invoice-generator/">invoices</Link>. There are everyday{" "}
          <Link href="/emi-calculator/">calculators</Link> for EMI, SIP, GST, interest, percentage
          and CGPA, and handy utilities like a <Link href="/typing-test/">typing test</Link>,{" "}
          <Link href="/qr-code-generator/">QR code generator</Link>,{" "}
          <Link href="/age-calculator/">age calculator</Link> and{" "}
          <Link href="/password-generator/">password generator</Link>.
        </p>

        <h3>Resize or compress a photo to any KB size</h3>
        <p>
          Different forms ask for different file sizes, so we have a one-click page for each common
          target — compress to <Link href="/compress-image-to-20kb/">20&nbsp;KB</Link>,{" "}
          <Link href="/compress-image-to-50kb/">50&nbsp;KB</Link>,{" "}
          <Link href="/compress-image-to-100kb/">100&nbsp;KB</Link> or{" "}
          <Link href="/compress-image-to-200kb/">200&nbsp;KB</Link> — or simply{" "}
          <Link href="/resize-image-in-kb/">resize an image in KB</Link> to any number you type. Need
          exact pixels instead? The <Link href="/image-resizer/">image resizer</Link> sets the width and
          height your form specifies, down to the pixel.
        </p>

        <h3>Convert between image formats</h3>
        <p>
          Switch formats in a click: <Link href="/jpeg-to-jpg/">JPEG to JPG</Link>,{" "}
          <Link href="/png-to-jpg/">PNG to JPG</Link>, or use the full{" "}
          <Link href="/image-converter/">image converter</Link> for PNG, JPG and WebP. On an iPhone?
          Convert with <Link href="/heic-to-jpg/">HEIC to JPG</Link> or{" "}
          <Link href="/webp-to-jpg/">WebP to JPG</Link>. You can also{" "}
          <Link href="/remove-background/">remove a photo background</Link>,{" "}
          <Link href="/crop-image/">crop to any ratio</Link> and{" "}
          <Link href="/photo-signature-combiner/">combine your photo and signature</Link> into one image.
        </p>

        <h3>Photo &amp; signature size for your exam</h3>
        <p>
          Not sure of the exact requirements? We list the photo and signature size for each major exam —{" "}
          <Link href="/photo-resize-for-ssc-cgl/">SSC CGL</Link>,{" "}
          <Link href="/photo-resize-for-ibps-po/">IBPS PO</Link>,{" "}
          <Link href="/photo-resize-for-sbi-po/">SBI PO</Link>,{" "}
          <Link href="/photo-resize-for-upsc/">UPSC</Link>,{" "}
          <Link href="/photo-resize-for-rrb-ntpc/">RRB NTPC</Link> and more — including the extra uploads
          that bank exams require, such as a left thumb impression and a handwritten declaration.
        </p>

        <h3>Compress a PDF below an upload limit</h3>
        <p>
          Scanned documents are often too large for portals. Shrink a PDF under a set size with our
          compress-PDF pages — <Link href="/compress-pdf-to-100kb/">100&nbsp;KB</Link>,{" "}
          <Link href="/compress-pdf-to-200kb/">200&nbsp;KB</Link>,{" "}
          <Link href="/compress-pdf-to-300kb/">300&nbsp;KB</Link> or{" "}
          <Link href="/compress-pdf-to-500kb/">500&nbsp;KB</Link> — or use the full{" "}
          <Link href="/pdf-tools/">PDF toolkit</Link> to merge, split and convert your pages first. For
          specific needs, try <Link href="/compress-pdf-for-uscis/">compress PDF for USCIS</Link>,{" "}
          <Link href="/compress-resume-pdf/">compress your resume PDF</Link>, or{" "}
          <Link href="/combine-bank-statements-pdf/">combine bank statements into one PDF</Link>.
        </p>

        <h3>100% free, no watermark</h3>
        <p>
          Every tool is completely free with no sign-up, no watermark and no hidden limits. Use them
          as often as you need on any device — desktop, tablet or phone. ToolsKaro is an independent
          platform and is not affiliated with any government body; always confirm exact photo, signature
          and file-size rules in the official exam notification.
        </p>
      </section>

      <Faq items={homeFaqs} />
    </>
  );
}

const homeFaqs = [
  { q: "Are the tools on ToolsKaro really free?", a: "Yes. Every tool is completely free to use with no sign-up, no watermark and no hidden limits. You can use them as many times as you like." },
  { q: "Do I need to upload my photos or documents?", a: "No. ToolsKaro runs entirely in your web browser, so your photos, signatures and documents are processed on your own device and never uploaded to any server." },
  { q: "Can I resize and compress my photo and signature for exam forms?", a: "Yes. Use the Image Resizer to set the exact dimensions, the Image Compressor to hit a KB limit (like 20–50 KB), the Passport Photo Maker for a white background, and the Signature Resize tool for your signature. Always confirm the exact requirements in the official exam notification." },
  { q: "What kinds of tools does ToolsKaro have?", a: "Image tools (compress, resize, crop, convert, remove background, passport photo), a full PDF suite (merge, split, compress, convert, rotate, page numbers), document makers (resume, cover letter, biodata, invoice), calculators (EMI, SIP, GST, percentage, CGPA, age) and utilities (typing test, QR generator, word counter, password generator)." },
  { q: "Does ToolsKaro work on mobile?", a: "Yes. The site is fully responsive and every tool works on phones, tablets and desktops in any modern browser." },
  { q: "How do I convert JPEG to JPG?", a: "JPEG and JPG are the same image format with different extensions. Open the JPEG to JPG converter, upload your image, keep JPG as the output, and download — it re-saves your file as a .jpg entirely in your browser." },
  { q: "How do I compress a PDF to 200 KB?", a: "Open the Compress PDF to 200 KB page and drop in your file. The tool reduces the quality just enough to bring the PDF at or under 200 KB while keeping the pages readable, then lets you download it. Pages for 100 KB, 300 KB and 500 KB are also available." },
  { q: "What is the passport size photo dimension in India?", a: "A standard Indian passport size photo is 3.5×4.5 cm (about 413×531 pixels at 300 DPI) on a plain white background. US visa and OCI photos are 2×2 inch (600×600 px). The Passport Photo Maker has one-tap presets for both." },
  { q: "Is ToolsKaro affiliated with the government?", a: "No. ToolsKaro is an independent platform and is not affiliated with, endorsed by, or connected to any government department or examination authority. Always confirm official requirements in the exam notification." },
];
