import type { Metadata } from "next";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import SocialLinks, { TELEGRAM, WHATSAPP } from "@/app/components/Social";
import AutoBreadcrumbs from "@/app/components/AutoBreadcrumbs";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap", variable: "--font-sans" });

const SITE = "https://toolskaro.com";
const LINKEDIN = "https://www.linkedin.com/in/naren-chaudhary/";

export const metadata: Metadata = {
  title: {
    default: "ToolsKaro — Free Photo, Signature & PDF Tools for Exams",
    template: "%s",
  },
  description:
    "Free tools for Indian exam & job applicants: resize & compress photo/signature to an exact KB, convert PDFs, build a resume — 100% in your browser, no upload.",
  metadataBase: new URL(SITE),
  alternates: { canonical: "/" },
  // Only type + siteName here, so each page auto-fills its own og:title/description from its metadata.
  openGraph: { type: "website", siteName: "ToolsKaro" },
  twitter: { card: "summary_large_image" },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "ToolsKaro",
      url: SITE,
      logo: { "@type": "ImageObject", url: `${SITE}/apple-icon`, width: 180, height: 180 },
      description:
        "Free, privacy-first online tools for Indian exam and job applicants — image resize/compress, PDF tools, resume and biodata makers, and more.",
      sameAs: [TELEGRAM, WHATSAPP, LINKEDIN],
      founder: {
        "@type": "Person",
        "@id": `${SITE}/#founder`,
        name: "Narender Chaudhary",
        jobTitle: "Editorial & Product Lead",
        sameAs: [LINKEDIN],
      },
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
  ["/pdf/split/", "Split PDF"],
];
const DOC_TOOLS = [
  ["/resume-maker/", "Resume Maker"],
  ["/marriage-biodata-maker/", "Marriage Biodata"],
  ["/cover-letter-generator/", "Cover Letter"],
  ["/invoice-generator/", "Invoice Generator"],
];
const CALC_TOOLS = [
  ["/emi-calculator/", "EMI Calculator"],
  ["/sip-calculator/", "SIP Calculator"],
  ["/gst-calculator/", "GST Calculator"],
  ["/percentage-calculator/", "Percentage Calculator"],
  ["/age-calculator/", "Age Calculator"],
];
const UTIL_TOOLS = [
  ["/qr-code-generator/", "QR Code Generator"],
  ["/word-counter/", "Word Counter"],
  ["/typing-test/", "Typing Test"],
  ["/password-generator/", "Password Generator"],
  ["/text-case-converter/", "Text Case Converter"],
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
    <html lang="en-IN" className={jakarta.variable}>
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

        <main className="container">
          <AutoBreadcrumbs />
          {children}
        </main>

        <section className="join-band">
          <div className="container">
            <span className="join-label">Join us on Telegram &amp; WhatsApp for the latest updates</span>
            <div className="join-social"><SocialLinks /></div>
          </div>
        </section>

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
              <Link href="/image-tools/" className="footer-h">Image Tools</Link>
              {IMAGE_TOOLS.map(([href, label]) => (
                <Link key={href} href={href}>{label}</Link>
              ))}
            </div>
            <div className="footer-col">
              <Link href="/pdf-tools/" className="footer-h">PDF Tools</Link>
              {PDF_TOOLS.map(([href, label]) => (
                <Link key={href} href={href}>{label}</Link>
              ))}
            </div>
            <div className="footer-col">
              <Link href="/document-tools/" className="footer-h">Documents</Link>
              {DOC_TOOLS.map(([href, label]) => (
                <Link key={href} href={href}>{label}</Link>
              ))}
            </div>
            <div className="footer-col">
              <Link href="/calculators/" className="footer-h">Calculators</Link>
              {CALC_TOOLS.map(([href, label]) => (
                <Link key={href} href={href}>{label}</Link>
              ))}
            </div>
            <div className="footer-col">
              <Link href="/utilities/" className="footer-h">Utilities</Link>
              {UTIL_TOOLS.map(([href, label]) => (
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
        <Script id="ga-src" strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-98K21RL284" />
        <Script id="ga-init" strategy="lazyOnload">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-98K21RL284');`}</Script>
      </body>
    </html>
  );
}
