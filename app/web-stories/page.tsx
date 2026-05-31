import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Stories — Quick Visual Guides",
  description: "Short, swipeable visual guides from ToolsKaro: compress a photo to 50 KB, resize photo and signature for exam forms, and make a passport size photo.",
  alternates: { canonical: "/web-stories/" },
};

const STORIES = [
  { href: "/web-stories/compress-photo-to-50kb.html", title: "How to compress a photo to 50 KB", desc: "A 30-second guide for exam form uploads.", g: "linear-gradient(135deg,#4f46e5,#7c3aed)" },
  { href: "/web-stories/resize-photo-and-signature-for-exam.html", title: "Resize photo & signature for exam forms", desc: "Get the size and KB exactly right.", g: "linear-gradient(135deg,#2563eb,#4f46e5)" },
  { href: "/web-stories/make-passport-size-photo.html", title: "Make a passport size photo at home", desc: "No studio needed — free in your browser.", g: "linear-gradient(135deg,#7c3aed,#db2777)" },
];

export default function Page() {
  return (
    <>
      <div className="tool-hero">
        <h1>Web <span className="grad">Stories</span></h1>
        <p className="lede">Short, swipeable visual guides to get your exam documents ready in minutes.</p>
      </div>
      <div className="tool-grid">
        {STORIES.map((s) => (
          <a key={s.href} href={s.href} className="tool-card" style={{ alignItems: "stretch" }}>
            <div style={{ width: 64, height: 84, borderRadius: 10, flex: "none", background: s.g }} />
            <div>
              <div className="t">{s.title}</div>
              <div className="d">{s.desc}</div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
