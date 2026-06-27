import type { Metadata } from "next";
import Breadcrumbs from "@/app/components/Breadcrumbs";

const SITE = "https://toolskaro.com";
const LINKEDIN = "https://www.linkedin.com/in/naren-chaudhary/";
const AGENCY_LINKEDIN = "https://www.linkedin.com/company/admatrix-media";

export const metadata: Metadata = {
  title: "About ToolsKaro & Our Team",
  description:
    "About ToolsKaro — free, privacy-first online tools for photos, signatures, PDFs and documents. Our mission, how we keep form requirements accurate, and the team behind it.",
  alternates: { canonical: "/about/" },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About ToolsKaro",
    url: `${SITE}/about/`,
    description:
      "About ToolsKaro — free, privacy-first browser tools for photos, signatures, PDFs and documents, built and maintained by AdMatrix Media.",
    mainEntity: {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "ToolsKaro",
      url: SITE,
      foundingDate: "2026",
      knowsAbout: ["Image editing and compression", "PDF tools", "Document and resume building", "Developer tools", "Online calculators"],
      sameAs: [LINKEDIN],
      founder: {
        "@type": "Person",
        "@id": `${SITE}/#founder`,
        name: "Narender Chaudhary",
        jobTitle: "Editorial & Product Lead",
        worksFor: { "@id": `${SITE}/#organization` },
        sameAs: [LINKEDIN],
      },
      parentOrganization: {
        "@type": "Organization",
        name: "AdMatrix Media",
        description: "Digital media agency that builds and maintains ToolsKaro.",
        url: AGENCY_LINKEDIN,
        sameAs: [AGENCY_LINKEDIN],
      },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About / Our Team", href: "/about/" }]} />
      <h1>About ToolsKaro</h1>
      <div className="prose">
        <p>
          ToolsKaro is a free collection of in-browser tools for anyone who works with images, PDFs,
          documents and code — students, job seekers, professionals and developers around the world.
          Launched in 2026 and built by <strong>AdMatrix Media</strong>, it brings together more than
          60 utilities — image resize and compress, a full PDF suite, resume and document makers,
          everyday calculators and developer tools — in one fast, private place.
        </p>

        <h2>Our mission</h2>
        <p>
          We exist to make everyday file and document tasks effortless, wherever you are in the world.
          Whether you are resizing a photo to an exact size, shrinking a PDF under an upload limit,
          building a resume, or formatting JSON, the fiddly and time-consuming jobs become one-click
          tools — completely free, with no account and no watermark.
        </p>

        <h2>Privacy comes first</h2>
        <p>
          Unlike most online tools, ToolsKaro processes your files <strong>entirely inside your own
          browser</strong>. Your photos, signatures and documents are never uploaded to a server —
          they never leave your device. That makes our tools fast, free to run, and genuinely
          private, which matters when you are handling personal documents and ID proofs.
        </p>

        <h2>How we keep exam information accurate</h2>
        <p>
          The photo and signature specifications we reference (typical ranges such as 20–50&nbsp;KB
          photos and 10–20&nbsp;KB signatures) are drawn from official examination notifications and
          public recruitment portals, and are reviewed by our editorial team. Because these
          requirements can change from one exam cycle to the next, we present them as general
          guidance and always advise applicants to confirm the exact figures in the official
          notification for their specific exam before submitting. ToolsKaro is an independent
          platform and is not affiliated with any government body.
        </p>

        <h2>Our team</h2>
        <p>
          ToolsKaro is crafted and maintained by{" "}
          <a href={AGENCY_LINKEDIN} target="_blank" rel="noopener noreferrer">AdMatrix Media</a>, a digital
          media agency responsible for the platform&apos;s development, maintenance and growth. Editorial
          and product direction is led by Narender Chaudhary.
        </p>
        <div className="team-card">
          <div className="team-avatar">NC</div>
          <div>
            <strong>Narender Chaudhary</strong>
            <div style={{ color: "#5b6473", fontSize: 14 }}>Editorial &amp; Product Lead</div>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">View LinkedIn profile ↗</a>
          </div>
        </div>

        <h2>Why you can trust us</h2>
        <ul>
          <li><strong>No uploads:</strong> your files are processed locally and never stored.</li>
          <li><strong>No sign-up, no watermark:</strong> every tool is free to use in full.</li>
          <li><strong>Transparency:</strong> the tools and the people behind them are clearly listed, with a real contact address and privacy policy.</li>
          <li><strong>Independent:</strong> ToolsKaro is a private platform and is not affiliated with, endorsed by, or connected to any government department or examination authority.</li>
        </ul>

        <h2>Get in touch</h2>
        <p>
          Questions, feedback or a tool request? Email <a href="mailto:contact@toolskaro.com">contact@toolskaro.com</a>{" "}
          or visit our <a href="/contact/">Contact page</a> — we read every message.
        </p>
      </div>
    </>
  );
}
