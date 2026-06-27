import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import { POSTS } from "./blog-data";

export const metadata: Metadata = {
  title: "Blog — Guides for Photos, PDFs & Files",
  description:
    "Free guides on resizing photos and signatures, compressing images and PDFs to an exact size, converting formats and more — from ToolsKaro.",
  alternates: { canonical: "/blog/" },
};

const fmtDate = (iso: string) => new Date(`${iso}T00:00:00`).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

export default function Page() {
  const posts = [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "ToolsKaro Blog",
    url: "https://toolskaro.com/blog/",
    description: "Guides on photos & signatures, compressing images and PDFs, and converting formats.",
    blogPost: posts.map((p) => ({ "@type": "BlogPosting", headline: p.title, url: `https://toolskaro.com/blog/${p.slug}/`, datePublished: p.date })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog/" }]} />
      <div className="tool-hero">
        <h1>ToolsKaro <span className="grad">Blog</span></h1>
        <p className="lede">Practical guides on preparing photos &amp; signatures for online forms, compressing images and PDFs to an exact size, converting formats and more.</p>
      </div>

      <div className="blog-grid">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}/`} className="blog-card">
            <span className="blog-cat">{p.category}</span>
            <h2 className="blog-card-title">{p.title}</h2>
            <p className="blog-card-ex">{p.excerpt}</p>
            <div className="blog-meta">{fmtDate(p.date)} · {p.readMins} min read</div>
          </Link>
        ))}
      </div>
    </>
  );
}
