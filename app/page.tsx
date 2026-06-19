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
          ToolsKaro is a free collection of {total}+ online tools for students, job seekers,
          professionals and developers. Resize and compress photos and signatures to an exact size,
          convert and compress PDFs, build a resume, run everyday calculators and format code — every
          tool works instantly in your browser, with no sign-up, no watermark and nothing uploaded to a
          server.
        </p>
        <p>
          Browse a category to find the right tool: <Link href="/image-tools/">image tools</Link>,{" "}
          <Link href="/pdf-tools/">PDF tools</Link>, <Link href="/document-tools/">document makers</Link>,{" "}
          <Link href="/calculators/">calculators</Link>, <Link href="/utilities/">utilities</Link> and{" "}
          <Link href="/developer-tools/">developer tools</Link>.
        </p>
      </section>

      <Faq items={homeFaqs} />
    </>
  );
}

const homeFaqs = [
  { q: "Are the tools on ToolsKaro really free?", a: "Yes. Every tool is completely free to use with no sign-up, no watermark and no hidden limits. You can use them as many times as you like." },
  { q: "Do I need to upload my photos or documents?", a: "No. ToolsKaro runs entirely in your web browser, so your photos, signatures and documents are processed on your own device and never uploaded to any server." },
  { q: "Can I resize and compress a photo and signature for an application form?", a: "Yes. Use the Image Resizer to set the exact pixel dimensions, the Image Compressor to hit a KB limit (often 20–100 KB), the Passport Photo Maker for a white background, and Signature Resize for your signature — handy for job, visa, exam and ID applications anywhere in the world. Always check the exact requirements on the official form." },
  { q: "What kinds of tools does ToolsKaro have?", a: "Image tools (compress, resize, crop, convert, remove background, passport photo), a full PDF suite (merge, split, compress, convert, rotate, page numbers), document makers (resume, cover letter, biodata, invoice), calculators (EMI, SIP, GST, percentage, age, TDEE), developer tools (JSON formatter, Base64, hash and UUID generators, color and timestamp converters) and everyday utilities (typing test, QR generator, word counter, password generator)." },
  { q: "Does ToolsKaro work on mobile?", a: "Yes. The site is fully responsive and every tool works on phones, tablets and desktops in any modern browser." },
  { q: "How do I convert JPEG to JPG?", a: "JPEG and JPG are the same image format with different extensions. Open the JPEG to JPG converter, upload your image, keep JPG as the output, and download — it re-saves your file as a .jpg entirely in your browser." },
  { q: "How do I compress a PDF to 200 KB?", a: "Open the Compress PDF to 200 KB page and drop in your file. The tool reduces the quality just enough to bring the PDF at or under 200 KB while keeping the pages readable, then lets you download it. Pages for 100 KB, 300 KB and 500 KB are also available." },
  { q: "What is a standard passport size photo dimension?", a: "It varies by country: a US visa or OCI photo is 2×2 inch (600×600 px), while India, the UK and the Schengen area use 3.5×4.5 cm (about 413×531 px at 300 DPI), both on a plain white background. The Passport Photo Maker has one-tap presets for each." },
  { q: "Are there tools for developers too?", a: "Yes. The developer tools include a JSON formatter and validator, Base64 and URL encode/decode, a SHA hash generator, a UUID generator, a Unix timestamp converter and a HEX/RGB/HSL color converter — all running locally in your browser." },
];
