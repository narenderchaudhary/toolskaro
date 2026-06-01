import Link from "next/link";
import Faq from "@/app/components/Faq";
import SocialLinks from "@/app/components/Social";

type Tool = { href: string; icon: string; t: string; d: string; vol: string; ready?: boolean };
type Category = { name: string; color: string; tint: string; tools: Tool[] };

const CATEGORIES: Category[] = [
  {
    name: "Image Tools",
    color: "#4f46e5",
    tint: "#eef2ff",
    tools: [
      { href: "/image-compressor/", icon: "🗜️", t: "Image Compressor", d: "Compress JPG/PNG to an exact KB size for exam forms.", vol: "1M+/mo", ready: true },
      { href: "/image-resizer/", icon: "📐", t: "Image Resizer", d: "Resize photo by pixels or exam preset.", vol: "1.5M/mo", ready: true },
      { href: "/passport-photo-maker/", icon: "🪪", t: "Passport Photo Maker", d: "White-background passport / exam photo.", vol: "550K/mo", ready: true },
      { href: "/signature-resize/", icon: "✍️", t: "Signature Resize", d: "Resize signature to the KB & size you need.", vol: "74K/mo", ready: true },
      { href: "/remove-background/", icon: "🪄", t: "Remove Background", d: "Erase photo background in your browser.", vol: "6M/mo", ready: true },
      { href: "/crop-image/", icon: "✂️", t: "Crop Image", d: "Drag to crop, or use ratio presets.", vol: "", ready: true },
      { href: "/image-converter/", icon: "🔁", t: "Image Converter", d: "PNG ↔ JPG ↔ WebP with quality.", vol: "", ready: true },
      { href: "/photo-signature-combiner/", icon: "🧩", t: "Photo + Signature", d: "Combine photo & signature in one image.", vol: "", ready: true },
      { href: "/photo-joiner/", icon: "🖼️", t: "Photo Joiner", d: "Combine photos side by side, stacked or grid.", vol: "", ready: true },
      { href: "/social-media-image-resizer/", icon: "📱", t: "Social Media Resizer", d: "Exact sizes for Instagram, FB, WhatsApp, LinkedIn.", vol: "", ready: true },
    ],
  },
  {
    name: "PDF Tools",
    color: "#e11d48",
    tint: "#ffe4e6",
    tools: [
      { href: "/pdf/editor/", icon: "✍️", t: "PDF Editor", d: "Add text & signature to a PDF.", vol: "", ready: true },
      { href: "/pdf/jpg-to-pdf/", icon: "📄", t: "JPG to PDF", d: "Combine images into one PDF.", vol: "7.5M/mo", ready: true },
      { href: "/pdf/pdf-to-jpg/", icon: "🖼️", t: "PDF to JPG", d: "Convert PDF pages to images.", vol: "4.1M/mo", ready: true },
      { href: "/pdf/merge/", icon: "🗂️", t: "Merge PDF", d: "Join multiple PDFs into one.", vol: "3.4M/mo", ready: true },
      { href: "/pdf/compress/", icon: "📉", t: "Compress PDF", d: "Shrink PDF file size for uploads.", vol: "2.7M/mo", ready: true },
      { href: "/pdf/split/", icon: "✂️", t: "Split PDF", d: "Extract pages or split into files.", vol: "", ready: true },
      { href: "/pdf/rotate/", icon: "🔄", t: "Rotate PDF", d: "Rotate pages 90/180/270°.", vol: "", ready: true },
      { href: "/pdf/delete-pages/", icon: "🗑️", t: "Delete PDF Pages", d: "Remove unwanted pages.", vol: "", ready: true },
      { href: "/pdf/page-numbers/", icon: "🔢", t: "Add Page Numbers", d: "Number pages in any position.", vol: "", ready: true },
    ],
  },
  {
    name: "Documents",
    color: "#0891b2",
    tint: "#cffafe",
    tools: [
      { href: "/resume-maker/", icon: "📝", t: "Resume / CV Maker", d: "Build a resume and export to PDF.", vol: "450K/mo", ready: true },
      { href: "/marriage-biodata-maker/", icon: "💍", t: "Marriage Biodata Maker", d: "Hindi & English biodata templates.", vol: "110K/mo", ready: true },
      { href: "/cover-letter-generator/", icon: "✉️", t: "Cover Letter Generator", d: "Professional cover letter to PDF.", vol: "", ready: true },
      { href: "/invoice-generator/", icon: "🧾", t: "Invoice Generator", d: "GST invoice maker, export to PDF.", vol: "", ready: true },
    ],
  },
  {
    name: "Calculators",
    color: "#d97706",
    tint: "#fef3c7",
    tools: [
      { href: "/emi-calculator/", icon: "🏦", t: "EMI Calculator", d: "Home, car & personal loan EMI.", vol: "", ready: true },
      { href: "/sip-calculator/", icon: "📈", t: "SIP Calculator", d: "Mutual fund SIP returns.", vol: "", ready: true },
      { href: "/gst-calculator/", icon: "🧾", t: "GST Calculator", d: "Add or remove GST (CGST/SGST).", vol: "", ready: true },
      { href: "/interest-calculator/", icon: "💰", t: "Interest Calculator", d: "Simple & compound interest.", vol: "", ready: true },
      { href: "/percentage-calculator/", icon: "％", t: "Percentage Calculator", d: "Find %, of, increase/decrease.", vol: "", ready: true },
      { href: "/marks-percentage-calculator/", icon: "🎓", t: "Marks % & CGPA", d: "Marks %, CGPA ↔ percentage.", vol: "", ready: true },
    ],
  },
  {
    name: "Utilities",
    color: "#059669",
    tint: "#d1fae5",
    tools: [
      { href: "/age-calculator/", icon: "🎂", t: "Age Calculator", d: "Exact age in years, months, days.", vol: "9.1M/mo", ready: true },
      { href: "/qr-code-generator/", icon: "🔳", t: "QR Code Generator", d: "Make a QR from any link or text.", vol: "1.2M/mo", ready: true },
      { href: "/word-counter/", icon: "🔠", t: "Word Counter", d: "Count words, characters, reading time.", vol: "301K/mo", ready: true },
      { href: "/typing-test/", icon: "⌨️", t: "Typing Test", d: "Hindi & English typing practice (WPM).", vol: "2.2M/mo", ready: true },
      { href: "/password-generator/", icon: "🔑", t: "Password Generator", d: "Strong, secure random passwords.", vol: "", ready: true },
      { href: "/text-case-converter/", icon: "🔡", t: "Text Case Converter", d: "UPPERCASE, lowercase, Title Case.", vol: "", ready: true },
      { href: "/date-difference-calculator/", icon: "📆", t: "Date Difference", d: "Days between two dates.", vol: "", ready: true },
    ],
  },
];

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
            <h2>{cat.name}</h2>
            <span className="count">{cat.tools.length} tools</span>
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
