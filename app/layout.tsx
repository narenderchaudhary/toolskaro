import type { Metadata } from "next";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap", variable: "--font-sans" });

const SITE = "https://toolskaro.com";
const LINKEDIN = "https://www.linkedin.com/in/naren-chaudhary/";
const TELEGRAM = "https://t.me/GovSarkariResults";
const WHATSAPP = "https://whatsapp.com/channel/0029Vb7eQnZ7YSd39NUElI3J";

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" /></svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48c0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM12.04 21.5a9.45 9.45 0 01-4.82-1.32l-.35-.2-3.58.94.96-3.49-.23-.36a9.43 9.43 0 01-1.45-5.04c0-5.21 4.25-9.46 9.48-9.46 2.53 0 4.91.99 6.7 2.78a9.4 9.4 0 012.77 6.69c0 5.21-4.25 9.46-9.48 9.46zm8.06-17.52A11.36 11.36 0 0012.04.5C5.78.5.7 5.58.7 11.84c0 2 .52 3.95 1.52 5.67L.6 23.5l6.13-1.61a11.34 11.34 0 005.42 1.38h.01c6.26 0 11.34-5.08 11.34-11.34 0-3.03-1.18-5.88-3.32-8.02z" /></svg>
  );
}
function HeaderSocial() {
  return (
    <div className="header-social">
      <a href={TELEGRAM} className="hsocial tg" target="_blank" rel="noopener noreferrer" aria-label="Join us on Telegram"><TelegramIcon /></a>
      <a href={WHATSAPP} className="hsocial wa" target="_blank" rel="noopener noreferrer" aria-label="Join our WhatsApp channel"><WhatsAppIcon /></a>
    </div>
  );
}

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
            <div className="header-right">
              <nav className="nav">
                <Link href="/image-compressor/">Compress</Link>
                <Link href="/image-resizer/">Resize</Link>
                <Link href="/remove-background/" className="hide-sm">Remove BG</Link>
                <Link href="/pdf/merge/">PDF</Link>
                <Link href="/about/" className="hide-sm">About</Link>
              </nav>
              <HeaderSocial />
            </div>
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
              <div className="footer-social">
                <a href={TELEGRAM} className="fsocial tg" target="_blank" rel="noopener noreferrer"><TelegramIcon /> Telegram</a>
                <a href={WHATSAPP} className="fsocial wa" target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> WhatsApp</a>
              </div>
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
