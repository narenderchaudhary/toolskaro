import Link from "next/link";

const TOOLS = [
  { href: "/image-compressor/", t: "Image Compressor", d: "Compress JPG/PNG to an exact KB size for exam forms.", vol: "1M+/mo · LIVE" },
  { href: "/image-resizer/", t: "Image Resizer", d: "Resize photo by pixels, percent or exam preset.", vol: "1.5M/mo" },
  { href: "/passport-photo-maker/", t: "Passport Photo Maker", d: "White-background passport / exam photo.", vol: "550K/mo" },
  { href: "/signature-resize/", t: "Signature Resize", d: "Resize signature to the KB & size your form needs.", vol: "74K/mo" },
  { href: "/remove-background/", t: "Remove Background", d: "Erase photo background in your browser.", vol: "6M/mo" },
  { href: "/pdf/jpg-to-pdf/", t: "JPG to PDF", d: "Combine images into one PDF.", vol: "7.5M/mo" },
  { href: "/pdf/merge/", t: "Merge PDF", d: "Join multiple PDFs into one.", vol: "3.4M/mo" },
  { href: "/pdf/compress/", t: "Compress PDF", d: "Shrink PDF file size.", vol: "2.7M/mo" },
  { href: "/resume-maker/", t: "Resume / CV Maker", d: "Build a resume and export to PDF.", vol: "450K/mo" },
  { href: "/marriage-biodata-maker/", t: "Marriage Biodata Maker", d: "Hindi & English biodata templates.", vol: "110K/mo" },
  { href: "/age-calculator/", t: "Age Calculator", d: "Exact age in years, months, days.", vol: "9.1M/mo" },
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
        {TOOLS.map((tool) => (
          <Link key={tool.href} href={tool.href} className="tool-card">
            <div className="t">{tool.t}</div>
            <div className="d">{tool.d}</div>
            <div className="vol">{tool.vol}</div>
          </Link>
        ))}
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
