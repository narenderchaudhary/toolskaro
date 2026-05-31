import Link from "next/link";

type Tool = { href: string; t: string; d: string; vol: string; ready?: boolean };

const TOOLS: Tool[] = [
  { href: "/image-compressor/", t: "Image Compressor", d: "Compress JPG/PNG to an exact KB size for exam forms.", vol: "1M+/mo", ready: true },
  { href: "/image-resizer/", t: "Image Resizer", d: "Resize photo by pixels or exam preset.", vol: "1.5M/mo", ready: true },
  { href: "/passport-photo-maker/", t: "Passport Photo Maker", d: "White-background passport / exam photo.", vol: "550K/mo", ready: true },
  { href: "/remove-background/", t: "Remove Background", d: "Erase photo background in your browser.", vol: "6M/mo", ready: true },
  { href: "/pdf/jpg-to-pdf/", t: "JPG to PDF", d: "Combine images into one PDF.", vol: "7.5M/mo", ready: true },
  { href: "/pdf/pdf-to-jpg/", t: "PDF to JPG", d: "Convert PDF pages to images.", vol: "4.1M/mo", ready: true },
  { href: "/pdf/merge/", t: "Merge PDF", d: "Join multiple PDFs into one.", vol: "3.4M/mo", ready: true },
  { href: "/age-calculator/", t: "Age Calculator", d: "Exact age in years, months, days.", vol: "9.1M/mo", ready: true },
  { href: "/qr-code-generator/", t: "QR Code Generator", d: "Make a QR from any link or text.", vol: "1.2M/mo", ready: true },
  { href: "/word-counter/", t: "Word Counter", d: "Count words, characters, reading time.", vol: "301K/mo", ready: true },
  { href: "/signature-resize/", t: "Signature Resize", d: "Resize signature to the KB & size you need.", vol: "74K/mo" },
  { href: "/pdf/compress/", t: "Compress PDF", d: "Shrink PDF file size.", vol: "2.7M/mo" },
  { href: "/resume-maker/", t: "Resume / CV Maker", d: "Build a resume and export to PDF.", vol: "450K/mo" },
  { href: "/marriage-biodata-maker/", t: "Marriage Biodata Maker", d: "Hindi & English biodata templates.", vol: "110K/mo" },
  { href: "/typing-test/", t: "Typing Test", d: "Hindi & English typing practice (WPM).", vol: "2.2M/mo" },
];

export default function Home() {
  return (
    <>
      <h1>Free tools for Indian exam &amp; job applicants</h1>
      <p className="lede">
        Resize and compress your photo &amp; signature to the exact size every government form
        needs, convert documents, and more — free, no login, and 100% in your browser.
      </p>

      <div className="tool-grid">
        {TOOLS.map((tool) =>
          tool.ready ? (
            <Link key={tool.href} href={tool.href} className="tool-card">
              <div className="t">{tool.t}</div>
              <div className="d">{tool.d}</div>
              <div className="vol">{tool.vol}</div>
            </Link>
          ) : (
            <div key={tool.href} className="tool-card" style={{ opacity: 0.55, cursor: "default" }}>
              <div className="t">{tool.t}</div>
              <div className="d">{tool.d}</div>
              <div className="vol" style={{ color: "var(--muted)" }}>{tool.vol} · Soon</div>
            </div>
          )
        )}
      </div>

      <div className="ad-slot">Ad placement (AdSense) — keep below the fold for CWV</div>

      <div className="card">
        <h2 style={{ marginTop: 0 }}>Why these tools?</h2>
        <p className="muted-note">
          Every SSC, UPSC, Bank, Railway and State PSC form demands your photo and signature in
          an exact size and file weight (e.g. <em>photo 20–50&nbsp;KB, 3.5×4.5&nbsp;cm; signature
          10–20&nbsp;KB</em>). These tools hit those specs in one click — and because everything
          runs in your browser, your documents never leave your device.
        </p>
      </div>
    </>
  );
}
