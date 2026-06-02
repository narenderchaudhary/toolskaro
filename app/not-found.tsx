import Link from "next/link";

export const metadata = { title: "Page Not Found (404)" };

const POPULAR: [string, string, string][] = [
  ["/image-compressor/", "🗜️", "Image Compressor"],
  ["/image-resizer/", "📐", "Image Resizer"],
  ["/passport-photo-maker/", "🪪", "Passport Photo Maker"],
  ["/remove-background/", "🪄", "Remove Background"],
  ["/pdf/merge/", "🗂️", "Merge PDF"],
  ["/pdf/editor/", "✍️", "PDF Editor"],
  ["/resume-maker/", "📝", "Resume Maker"],
  ["/age-calculator/", "🎂", "Age Calculator"],
];

export default function NotFound() {
  return (
    <>
      <div className="tool-hero" style={{ paddingTop: 56 }}>
        <h1>404 — <span className="grad">Page not found</span></h1>
        <p className="lede">
          Sorry, the page you’re looking for doesn’t exist or may have moved. Let’s get you back on
          track — head home or pick a popular tool below.
        </p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginTop: 6 }}>
          <Link className="btn" href="/">← Back to home</Link>
        </div>
      </div>

      <h2 className="section-center" style={{ marginTop: 24 }}>Popular <span className="g">free tools</span></h2>
      <div className="tool-grid">
        {POPULAR.map(([href, icon, label]) => (
          <Link key={href} href={href} className="tool-card">
            <div className="tool-icon" style={{ background: "#eef2ff", color: "#4f46e5" }}>{icon}</div>
            <div>
              <div className="t">{label}</div>
              <div className="d">Free · no signup · in your browser</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
