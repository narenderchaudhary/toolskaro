import type { Metadata } from "next";

const LINKEDIN = "https://www.linkedin.com/in/naren-chaudharyeditorial";

export const metadata: Metadata = {
  title: "About Us & Our Team",
  description:
    "ToolsKaro provides free, privacy-first online tools for Indian exam and job applicants. Learn about our mission and the team behind it.",
  alternates: { canonical: "/about/" },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About ToolsKaro",
    url: "https://toolskaro.com/about/",
    mainEntity: {
      "@type": "Organization",
      name: "ToolsKaro",
      url: "https://toolskaro.com",
      founder: {
        "@type": "Person",
        name: "Naren Chaudhary",
        jobTitle: "Editorial & Product Lead",
        sameAs: [LINKEDIN],
      },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1>About ToolsKaro</h1>
      <div className="prose">
        <h2>Our mission</h2>
        <p>
          ToolsKaro exists to make the everyday paperwork of Indian exam and job applicants
          effortless. Every SSC, UPSC, Bank, Railway and State PSC form demands a photo and
          signature in an exact size and file weight, documents in specific formats, and more.
          We turn those fiddly requirements into one-click tools — completely free and without
          forcing you to create an account.
        </p>

        <h2>Privacy comes first</h2>
        <p>
          Unlike most online tools, ToolsKaro processes your files <strong>entirely inside your
          own browser</strong>. Your photos, signatures and documents are never uploaded to a
          server — they never leave your device. That makes our tools fast, free to run, and
          genuinely private.
        </p>

        <h2>Our team</h2>
        <p>
          ToolsKaro is operated and managed by <strong>AdMatrix</strong>, a digital media agency
          responsible for the platform&apos;s development, maintenance and growth. Editorial and
          product direction is led by Naren Chaudhary.
        </p>
        <div className="team-card">
          <div className="team-avatar">NC</div>
          <div>
            <strong>Naren Chaudhary</strong>
            <div style={{ color: "#5b6473", fontSize: 14 }}>Editorial &amp; Product Lead</div>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">View LinkedIn profile ↗</a>
          </div>
        </div>

        <h2>Why you can trust us</h2>
        <ul>
          <li><strong>No uploads:</strong> your files are processed locally and never stored.</li>
          <li><strong>No sign-up, no watermark:</strong> every tool is free to use in full.</li>
          <li><strong>Transparency:</strong> the tools and the people behind them are clearly listed.</li>
          <li><strong>Independent:</strong> ToolsKaro is a private platform and is not affiliated with, endorsed by, or connected to any government department or examination authority.</li>
        </ul>

        <h2>Get in touch</h2>
        <p>
          Questions, feedback or a tool request? Visit our <a href="/contact/">Contact page</a> —
          we read every message.
        </p>
      </div>
    </>
  );
}
