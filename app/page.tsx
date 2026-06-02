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
  return tool.ready ? (
    <Link href={tool.href} className="tool-card">{inner}</Link>
  ) : (
    <div className="tool-card soon">{inner}</div>
  );
}

export default function Home() {
  const total = CATEGORIES.reduce((n, c) => n + c.tools.length, 0);
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
          Free tools for Indian <span className="grad">exam &amp; job applicants</span>
        </h1>
        <p className="hero-sub">
          Resize &amp; compress your photo and signature to the exact size every government form
          needs — plus PDF, resume and biodata tools. Free, no login, and 100% in your browser.
        </p>
        <div className="hero-badges">
          <span className="badge">🔒 Files never uploaded</span>
          <span className="badge">⚡ No sign-up</span>
          <span className="badge">🆓 {total} free tools</span>
        </div>
        <div className="hero-social"><SocialLinks /></div>
      </section>

      {CATEGORIES.map((cat) => (
        <section key={cat.name} className="tools-section">
          <div className="section-head">
            <span className="dot" style={{ background: cat.color }} />
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


      <section className="card content" style={{ marginTop: 8 }}>
        <h2 style={{ marginTop: 0 }}>Free online tools for Indian exam &amp; job applicants</h2>
        <p>
          ToolsKaro is a free collection of {total}+ online tools built for India&apos;s students,
          job seekers and exam applicants. From resizing and compressing your photo and signature
          for government forms to converting and merging PDFs, building a resume, and everyday
          calculators — every tool works instantly in your web browser, with no sign-up and nothing
          to install.
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

        <h3>100% free, no watermark</h3>
        <p>
          Every tool is completely free with no sign-up, no watermark and no hidden limits. Use them
          as often as you need on any device — desktop, tablet or phone.
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
];
