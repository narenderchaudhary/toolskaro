import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pinterest Pins — ToolsKaro",
  description: "Download ready-to-pin images for ToolsKaro tools.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/pins/" },
};

const PINS: { slug: string; label: string; link: string }[] = [
  { slug: "compress-50kb", label: "Compress Photo to 50 KB", link: "/compress-image-to-50kb/" },
  { slug: "passport-photo", label: "Passport Size Photo Maker", link: "/passport-photo-maker/" },
  { slug: "resize-photo", label: "Resize Photo for Exam Forms", link: "/image-resizer/" },
  { slug: "remove-bg", label: "Remove Image Background", link: "/remove-background/" },
  { slug: "biodata", label: "Marriage Biodata Maker", link: "/marriage-biodata-maker/" },
  { slug: "resume", label: "Free Resume / CV Maker", link: "/resume-maker/" },
  { slug: "typing", label: "Typing Test (Hindi & English)", link: "/typing-test/" },
  { slug: "jpg-to-pdf", label: "JPG to PDF Converter", link: "/pdf/jpg-to-pdf/" },
  { slug: "age-calculator", label: "Age Calculator", link: "/age-calculator/" },
  { slug: "social-resizer", label: "Social Media Image Resizer", link: "/social-media-image-resizer/" },
];

export default function Page() {
  return (
    <>
      <div className="tool-hero">
        <h1>Pinterest <span className="grad">Pins</span></h1>
        <p className="lede">Ready-to-pin 1000×1500 images for your tools. Download each, then pin it on Pinterest with the matching tool link as the destination URL.</p>
      </div>

      <div className="card content">
        <h2 style={{ marginTop: 0 }}>How to use these</h2>
        <ol className="steps">
          <li>Click <strong>Download pin</strong> below to save the image (1000×1500, perfect 2:3 ratio).</li>
          <li>On Pinterest, create a Pin → upload the image.</li>
          <li>Set the <strong>destination link</strong> to the tool URL shown (e.g. <code>toolskaro.com/...</code>).</li>
          <li>Add a keyword-rich title &amp; description, pick the right board, and publish.</li>
        </ol>
      </div>

      <div className="tool-grid">
        {PINS.map((p) => (
          <div key={p.slug} className="card" style={{ padding: 14 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/pin/${p.slug}/`} alt={p.label} style={{ width: "100%", borderRadius: 10, border: "1px solid var(--border)", display: "block" }} />
            <div className="t" style={{ fontWeight: 700, marginTop: 10 }}>{p.label}</div>
            <div className="muted-note" style={{ margin: "4px 0 10px" }}>Link to: <code>toolskaro.com{p.link}</code></div>
            <a className="btn" href={`/pin/${p.slug}/`} download={`toolskaro-${p.slug}.png`}>⬇ Download pin</a>
          </div>
        ))}
      </div>
    </>
  );
}
