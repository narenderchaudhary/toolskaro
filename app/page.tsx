import Link from "next/link";

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
    ],
  },
  {
    name: "PDF Tools",
    color: "#e11d48",
    tint: "#ffe4e6",
    tools: [
      { href: "/pdf/jpg-to-pdf/", icon: "📄", t: "JPG to PDF", d: "Combine images into one PDF.", vol: "7.5M/mo", ready: true },
      { href: "/pdf/pdf-to-jpg/", icon: "🖼️", t: "PDF to JPG", d: "Convert PDF pages to images.", vol: "4.1M/mo", ready: true },
      { href: "/pdf/merge/", icon: "🗂️", t: "Merge PDF", d: "Join multiple PDFs into one.", vol: "3.4M/mo", ready: true },
      { href: "/pdf/compress/", icon: "📉", t: "Compress PDF", d: "Shrink PDF file size for uploads.", vol: "2.7M/mo", ready: true },
    ],
  },
  {
    name: "Documents",
    color: "#0891b2",
    tint: "#cffafe",
    tools: [
      { href: "/resume-maker/", icon: "📝", t: "Resume / CV Maker", d: "Build a resume and export to PDF.", vol: "450K/mo", ready: true },
      { href: "/marriage-biodata-maker/", icon: "💍", t: "Marriage Biodata Maker", d: "Hindi & English biodata templates.", vol: "110K/mo", ready: true },
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


      <div className="card">
        <h2 style={{ marginTop: 0 }}>Why ToolsKaro?</h2>
        <p className="muted-note">
          Every SSC, UPSC, Bank, Railway and State PSC form demands your photo and signature in an
          exact size and file weight (e.g. <em>photo 20–50&nbsp;KB, 3.5×4.5&nbsp;cm; signature
          10–20&nbsp;KB</em>). These tools hit those specs in one click — and because everything
          runs in your browser, your documents never leave your device.
        </p>
      </div>
    </>
  );
}
