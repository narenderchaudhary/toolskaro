import type { Metadata } from "next";
import Breadcrumbs from "@/app/components/Breadcrumbs";

const SITE = "https://toolskaro.com";
const LINKEDIN = "https://www.linkedin.com/in/naren-chaudhary/";
const AGENCY_LINKEDIN = "https://www.linkedin.com/company/admatrix-media";

export const metadata: Metadata = {
  title: "About ToolsKaro & Our Team",
  description:
    "About ToolsKaro — free, privacy-first online tools for Indian exam and job applicants. Our mission, how we keep exam requirements accurate, and the team behind it.",
  alternates: { canonical: "/about/" },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About ToolsKaro",
    url: `${SITE}/about/`,
    description:
      "About ToolsKaro — free, privacy-first browser tools built for Indian exam and job applicants, operated by AdMatrix Media Agency.",
    mainEntity: {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "ToolsKaro",
      url: SITE,
      foundingDate: "2026",
      knowsAbout: ["Government exam form requirements", "Image compression", "PDF tools", "Resume building"],
      sameAs: ["https://t.me/GovSarkariResults", "https://whatsapp.com/channel/0029Vb7eQnZ7YSd39NUElI3J", LINKEDIN],
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
          ToolsKaro is a free collection of in-browser tools built for India&apos;s students, exam
          aspirants and job applicants. Launched in 2026 and operated by{" "}
          <strong>AdMatrix Media Agency</strong>, it brings together more than 35 utilities — image
          resize and compress, passport-photo and signature tools, a full PDF suite, resume and
          biodata makers, and everyday calculators — in one fast, private place.
        </p>

        <h2>Our mission</h2>
        <p>
          We exist to make the everyday paperwork of Indian exam and job applications effortless.
          Every SSC, UPSC, IBPS, SBI, RRB and State PSC form demands a photograph and signature in an
          exact size and file weight, documents in specific formats, and more. We turn those fiddly,
          rejection-prone requirements into one-click tools — completely free, with no account and no
          watermark.
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
          or visit our <a href="/contact/">Contact page</a> — we read every message. You can also join
          our community on <a href="https://t.me/GovSarkariResults" target="_blank" rel="noopener noreferrer">Telegram</a>{" "}
          and <a href="https://whatsapp.com/channel/0029Vb7eQnZ7YSd39NUElI3J" target="_blank" rel="noopener noreferrer">WhatsApp</a>.
        </p>
      </div>
    </>
  );
}
