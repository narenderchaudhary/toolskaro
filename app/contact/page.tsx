import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the ToolsKaro team for questions, feedback, tool requests or partnership enquiries.",
  alternates: { canonical: "/contact/" },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact ToolsKaro",
    url: "https://toolskaro.com/contact/",
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1>Contact Us</h1>
      <div className="prose">
        <p>
          We&apos;d love to hear from you — whether it&apos;s feedback, a bug report, a request for
          a new tool, or a partnership enquiry.
        </p>

        <h2>Email</h2>
        <p>
          <a href="mailto:contact@toolskaro.com">contact@toolskaro.com</a>
          <br />
          We aim to reply within 2–3 working days.
        </p>

        <h2>Editorial</h2>
        <p>
          ToolsKaro is operated and managed by <strong>AdMatrix Media Agency</strong>. Learn more
          about the platform and the team on our <a href="/about/">About page</a>.
        </p>

        <h2>Tool requests</h2>
        <p>
          Need a tool we don&apos;t have yet? Tell us what you need and the exact requirement (for
          example, a specific exam&apos;s photo size) and we&apos;ll consider adding it.
        </p>
      </div>
    </>
  );
}
