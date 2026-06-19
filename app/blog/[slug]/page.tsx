import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Faq from "@/app/components/Faq";
import CtaBand from "@/app/components/CtaBand";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import { POSTS, POST_SLUGS } from "../blog-data";

export const dynamicParams = false;
export function generateStaticParams() {
  return POST_SLUGS.map((slug) => ({ slug }));
}

const SITE = "https://toolskaro.com";
const AUTHOR = "Narender Chaudhary";
const fmtDate = (iso: string) => new Date(`${iso}T00:00:00`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug) ?? null;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: { type: "article", title: post.title, description: post.description },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        url: `${SITE}/blog/${post.slug}/`,
        datePublished: post.date,
        dateModified: post.date,
        author: { "@type": "Person", name: AUTHOR, url: `${SITE}/about/` },
        publisher: { "@id": `${SITE}/#organization` },
        mainEntityOfPage: `${SITE}/blog/${post.slug}/`,
        articleSection: post.category,
      },
      { "@type": "FAQPage", mainEntity: post.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog/" }, { name: post.title, href: `/blog/${post.slug}/` }]} />

      <article className="article">
        <span className="blog-cat">{post.category}</span>
        <h1 className="article-h1">{post.title}</h1>
        <p className="byline" style={{ borderTop: "none", paddingTop: 0, marginTop: 8 }}>
          By <a href="/about/">{AUTHOR}</a>, Editorial &amp; Product Lead · {fmtDate(post.date)} · {post.readMins} min read
        </p>

        <div className="prose article-body">
          <div dangerouslySetInnerHTML={{ __html: post.intro }} />
          {post.sections.map((s) => (
            <section key={s.h2}>
              <h2>{s.h2}</h2>
              <div dangerouslySetInnerHTML={{ __html: s.html }} />
            </section>
          ))}
        </div>
      </article>

      <Faq items={post.faqs} />

      <CtaBand
        heading="Try the free tools from this guide"
        text="No watermark, no sign-up — everything runs in your browser."
        links={post.related}
      />
    </>
  );
}
