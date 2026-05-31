import type { Metadata } from "next";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap", variable: "--font-sans" });

const SITE = "https://toolskaro.com";
const LINKEDIN = "https://www.linkedin.com/in/naren-chaudhary/";

export const metadata: Metadata = {
  title: {
    default: "ToolsKaro — Free Photo, Signature & PDF Tools for Indian Govt Forms",
    template: "%s | ToolsKaro",
  },
  description:
    "Free online tools for Indian exam & job applicants: resize and compress photo/signature to exact KB, JPG to PDF, merge & compress PDF, and more. 100% in your browser — files never uploaded.",
  metadataBase: new URL(SITE),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "ToolsKaro",
    url: SITE,
    title: "ToolsKaro — Free Photo, Signature & PDF Tools for Indian Govt Forms",
    description:
      "Resize & compress photo and signature to exact KB, convert PDFs, and more — free, no login, 100% in your browser.",
  },
  twitter: { card: "summary_large_image", title: "ToolsKaro", description: "Free in-browser tools for Indian exam & job applicants." },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "ToolsKaro",
      url: SITE,
      description:
        "Free, privacy-first online tools for Indian exam and job applicants — image resize/compress, PDF tools, resume and biodata makers, and more.",
      founder: { "@type": "Person", name: "Narender Chaudhary", sameAs: [LINKEDIN] },
      knowsAbout: ["Image compression", "PDF tools", "Government exam form requirements", "Resume building"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "ToolsKaro",
      publisher: { "@id": `${SITE}/#organization` },
      inLanguage: "en-IN",
    },
  ],
};

const IMAGE_TOOLS = [
  ["/image-compressor/", "Image Compressor"],
  ["/image-resizer/", "Image Resizer"],
  ["/passport-photo-maker/", "Passport Photo Maker"],
  ["/signature-resize/", "Signature Resize"],
  ["/remove-background/", "Remove Background"],
];
const PDF_TOOLS = [
  ["/pdf/jpg-to-pdf/", "JPG to PDF"],
  ["/pdf/pdf-to-jpg/", "PDF to JPG"],
  ["/pdf/merge/", "Merge PDF"],
  ["/pdf/compress/", "Compress PDF"],
];
const COMPANY = [
  ["/about/", "About / Our Team"],
  ["/web-stories/", "Web Stories"],
  ["/privacy-policy/", "Privacy Policy"],
  ["/disclaimer/", "Disclaimer"],
  ["/terms/", "Terms of Use"],
  ["/contact/", "Contact"],
];

function Logo() {
  return (
    <Link href="/" className="logo">
      <span className="logo-mark">T</span>
      <span className="logo-text">
        Tools<b>Karo</b>
      </span>
    </Link>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <header className="site">
          <div className="container">
            <Logo />
            <nav className="nav">
              <Link href="/image-compressor/">Compress</Link>
              <Link href="/image-resizer/">Resize</Link>
              <Link href="/remove-background/" className="hide-sm">Remove BG</Link>
              <Link href="/pdf/merge/">PDF</Link>
              <Link href="/about/" className="hide-sm">About</Link>
            </nav>
          </div>
        </header>

        <main className="container">{children}</main>

        <footer className="site">
          <div className="container footer-cols">
            <div className="footer-col footer-brand">
              <Logo />
              <p>
                Free, privacy-first online tools for Indian exam &amp; job applicants. Every tool
                runs entirely in your browser — your files are never uploaded to any server.
              </p>
              <p className="footer-managed">
                Managed by <strong>AdMatrix Media Agency</strong>
              </p>
            </div>
            <div className="footer-col">
              <div className="footer-h">Image Tools</div>
              {IMAGE_TOOLS.map(([href, label]) => (
                <Link key={href} href={href}>{label}</Link>
              ))}
            </div>
            <div className="footer-col">
              <div className="footer-h">PDF Tools</div>
              {PDF_TOOLS.map(([href, label]) => (
                <Link key={href} href={href}>{label}</Link>
              ))}
            </div>
            <div className="footer-col">
              <div className="footer-h">Company</div>
              {COMPANY.map(([href, label]) => (
                <Link key={href} href={href}>{label}</Link>
              ))}
            </div>
          </div>
          <div className="container footer-bottom">
            <span>© 2026 ToolsKaro. All rights reserved.</span>
            <span>Not affiliated with any government body or examination authority.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
