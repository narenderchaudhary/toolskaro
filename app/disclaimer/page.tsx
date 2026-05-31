import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "ToolsKaro is an independent platform and is not affiliated with any government body. Tool outputs and exam specifications are guidance only — always verify official requirements.",
  alternates: { canonical: "/disclaimer/" },
};

export default function Page() {
  return (
    <>
      <h1>Disclaimer</h1>
      <div className="prose">
        <p className="updated">Last updated: 31 May 2026</p>

        <h2>Not a government website</h2>
        <p>
          ToolsKaro (toolskaro.com) is a <strong>private, independent platform</strong>. We are
          <strong> not affiliated with, endorsed by, or connected to</strong> any government
          department, ministry, examination board, recruitment authority, or any official body.
          References to exams or forms are for descriptive purposes only.
        </p>

        <h2>Tool outputs are provided &ldquo;as is&rdquo;</h2>
        <p>
          Our tools are provided for general convenience on an &ldquo;as is&rdquo; and &ldquo;as
          available&rdquo; basis, without warranties of any kind. While we strive for accuracy, we
          do not guarantee that any output (resized image, compressed file, generated PDF, resume,
          biodata, calculation, etc.) will be error-free or accepted by any particular portal or
          authority.
        </p>

        <h2>Always verify official requirements</h2>
        <p>
          Photo and signature dimensions, file-size limits, and document formats vary by exam and
          can change. Any specifications, presets or sizes suggested on ToolsKaro are{" "}
          <strong>general guidance only</strong>. Before submitting any application, you must check
          and follow the exact requirements stated in the <strong>official notification</strong> of
          the relevant examination or authority.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          ToolsKaro and its operator (AdMatrix Media Agency) are not responsible for any loss, rejected
          application, missed deadline, or damage of any kind arising from the use of this website
          or its tools. You use the site at your own risk.
        </p>

        <h2>External links</h2>
        <p>
          This site may link to third-party websites. We are not responsible for the content,
          accuracy or practices of those external sites.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this disclaimer? Email{" "}
          <a href="mailto:contact@toolskaro.com">contact@toolskaro.com</a>.
        </p>
      </div>
    </>
  );
}
