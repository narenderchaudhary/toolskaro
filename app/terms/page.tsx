import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms and conditions for using ToolsKaro's free online tools, including acceptable use, intellectual property, and limitation of liability.",
  alternates: { canonical: "/terms/" },
};

export default function Page() {
  return (
    <>
      <h1>Terms of Use</h1>
      <div className="prose">
        <p className="updated">Last updated: 31 May 2026</p>

        <p>
          These Terms of Use govern your access to and use of <strong>toolskaro.com</strong>. By
          using the site, you agree to these terms. If you do not agree, please do not use the
          site.
        </p>

        <h2>1. Use of the service</h2>
        <p>
          ToolsKaro provides free online utilities that run in your browser. You may use them for
          lawful personal and professional purposes. We may add, change or remove tools at any
          time without notice.
        </p>

        <h2>2. Acceptable use</h2>
        <ul>
          <li>Do not use the site for any unlawful purpose or to process content you have no right to use.</li>
          <li>Do not attempt to disrupt, overload, reverse-engineer or misuse the service or its infrastructure.</li>
          <li>You are solely responsible for the files and content you process and for the results you submit elsewhere.</li>
        </ul>

        <h2>3. Intellectual property</h2>
        <p>
          The ToolsKaro name, design and original code are the property of its operator. The files
          you process remain yours — we claim no ownership over your content.
        </p>

        <h2>4. No warranty</h2>
        <p>
          The service is provided &ldquo;as is&rdquo; without warranties of any kind, express or
          implied. We do not warrant that the tools will be uninterrupted, error-free, or that
          outputs will meet any specific external requirement. See our{" "}
          <a href="/disclaimer/">Disclaimer</a>.
        </p>

        <h2>5. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, ToolsKaro and its operator (AdMatrix Media Agency) shall not
          be liable for any indirect, incidental or consequential damages, or for any loss arising
          from your use of, or inability to use, the site.
        </p>

        <h2>6. Advertising</h2>
        <p>
          The site may display third-party advertisements. Your interactions with advertisers are
          solely between you and the advertiser. See our <a href="/privacy-policy/">Privacy Policy</a>.
        </p>

        <h2>7. Governing law</h2>
        <p>
          These terms are governed by applicable law in the operator&apos;s jurisdiction.
        </p>

        <h2>8. Contact</h2>
        <p>
          Questions about these terms? Email{" "}
          <a href="mailto:contact@toolskaro.com">contact@toolskaro.com</a>.
        </p>
      </div>
    </>
  );
}
