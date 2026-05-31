import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How ToolsKaro handles your data. All file processing happens in your browser — your files are never uploaded. Details on cookies, advertising and analytics.",
  alternates: { canonical: "/privacy-policy/" },
};

export default function Page() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <div className="prose">
        <p className="updated">Last updated: 31 May 2026</p>

        <p>
          ToolsKaro (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates the website
          <strong> toolskaro.com</strong>. This Privacy Policy explains what information we handle
          and how. By using the site, you agree to this policy.
        </p>

        <h2>1. Your files are never uploaded</h2>
        <p>
          All of our tools — image compressor, resizer, background remover, PDF tools, resume and
          biodata makers, and others — run <strong>entirely inside your web browser</strong>. The
          photos, signatures, PDFs and text you process are <strong>never sent to or stored on our
          servers</strong>. They stay on your device.
        </p>

        <h2>2. Information we collect</h2>
        <p>
          We do not require you to create an account or provide personal details to use ToolsKaro.
          We may collect limited, non-identifying technical information automatically — such as
          your browser type, device type, approximate region and pages visited — to understand
          usage and improve the site. This is collected in aggregate and is not used to identify
          you personally.
        </p>

        <h2>3. Cookies and advertising</h2>
        <p>
          ToolsKaro may display advertisements, including through <strong>Google AdSense</strong>.
          Third-party vendors, including Google, use cookies to serve ads based on your prior
          visits to this and other websites.
        </p>
        <ul>
          <li>Google&apos;s use of advertising cookies enables it and its partners to serve ads to you based on your visits to this site and/or other sites on the Internet.</li>
          <li>You may opt out of personalised advertising by visiting{" "}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.</li>
          <li>You can also opt out of third-party vendor cookies at{" "}
            <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">aboutads.info/choices</a>.</li>
        </ul>

        <h2>4. Analytics</h2>
        <p>
          We may use privacy-respecting analytics tools to measure traffic and performance. These
          tools collect aggregated, non-identifying data only.
        </p>

        <h2>5. Data security</h2>
        <p>
          Because your files are processed locally and not uploaded, the most sensitive data never
          reaches us. The site is served over HTTPS.
        </p>

        <h2>6. Children&apos;s privacy</h2>
        <p>
          ToolsKaro is intended for a general audience and does not knowingly collect personal
          information from children.
        </p>

        <h2>7. Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this page
          with an updated date.
        </p>

        <h2>8. Contact</h2>
        <p>
          For any privacy questions, email{" "}
          <a href="mailto:contact@toolskaro.com">contact@toolskaro.com</a> or use our{" "}
          <a href="/contact/">Contact page</a>.
        </p>
      </div>
    </>
  );
}
