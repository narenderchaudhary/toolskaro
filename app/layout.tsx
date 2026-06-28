import type { Metadata } from "next";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import AutoBreadcrumbs from "@/app/components/AutoBreadcrumbs";
import AutoByline from "@/app/components/AutoByline";
import ThemeToggle from "@/app/components/ThemeToggle";
import MegaMenu from "@/app/components/MegaMenu";
import HeaderScroll from "@/app/components/HeaderScroll";
import HeaderSearch from "@/app/components/HeaderSearch";
import NavLink from "@/app/components/NavLink";
import { CATEGORIES } from "@/app/tools-catalog";
import "./globals.css";

const TOTAL_TOOLS = CATEGORIES.reduce((n, c) => n + c.tools.length, 0);

// Set the theme before first paint (no flash). Honours a saved choice, else system preference.
const THEME_INIT = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap", variable: "--font-sans" });

const SITE = "https://toolskaro.com";
const LINKEDIN = "https://www.linkedin.com/in/naren-chaudhary/";
const AGENCY_LINKEDIN = "https://www.linkedin.com/company/admatrix-media";

export const metadata: Metadata = {
  title: {
    default: "ToolsKaro — Free Online Photo, Signature & PDF Tools",
    template: "%s",
  },
  description:
    "Free online tools to resize & compress photos and signatures to an exact KB, convert and compress PDFs, build a resume and more — 100% in your browser, no upload, no sign-up.",
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
        "Free, privacy-first online tools to resize and compress photos and signatures, convert and compress PDFs, build resumes and more — all in your browser.",
      sameAs: [LINKEDIN],
      founder: {
        "@type": "Person",
        "@id": `${SITE}/#founder`,
        name: "Narender Chaudhary",
        jobTitle: "Editorial & Product Lead",
        sameAs: [LINKEDIN],
      },
      parentOrganization: {
        "@type": "Organization",
        "@id": "https://www.admatrixmedia.com/#agency",
        name: "AdMatrix Media",
        description: "Digital media agency that builds and maintains ToolsKaro.",
        url: AGENCY_LINKEDIN,
        sameAs: [AGENCY_LINKEDIN],
      },
      knowsAbout: ["Image editing and compression", "PDF tools", "Document and resume building", "Developer tools", "Online calculators"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "ToolsKaro",
      publisher: { "@id": `${SITE}/#organization` },
      inLanguage: "en",
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
const DEV_TOOLS = [
  ["/json-formatter/", "JSON Formatter"],
  ["/base64-encode-decode/", "Base64 Encode/Decode"],
  ["/hash-generator/", "Hash Generator"],
  ["/uuid-generator/", "UUID Generator"],
  ["/color-converter/", "Color Converter"],
];
const COMPANY = [
  ["/blog/", "Blog"],
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
    <html lang="en" className={jakarta.variable} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <header className="site">
          <HeaderScroll />
          <div className="container">
            <div className="hdr-left">
              <Logo />
              <MegaMenu />
            </div>
            <HeaderSearch />
            <nav className="nav">
              <NavLink href="/blog/">Blog</NavLink>
              <ThemeToggle />
            </nav>
          </div>
        </header>

        <main className="container">
          <AutoBreadcrumbs />
          {children}
          <AutoByline />
        </main>

        <footer className="site">
          <div className="container footer-cols">
            <div className="footer-col footer-brand">
              <div className="footer-brand-main">
                <Logo />
                <p>
                  <strong>ToolsKaro</strong> is a free, privacy-first collection of {TOTAL_TOOLS}+ online
                  tools for photos, signatures, PDFs, documents and developers. Resize and compress
                  images to an exact size, convert and compress PDFs, build a resume, run everyday
                  calculators and format code — all in one fast place.
                </p>
                <p>
                  Every tool runs entirely in your browser, so your photos and documents are never
                  uploaded to a server. No sign-up, no watermark and no limits, on any device.
                </p>
                <p className="footer-managed">
                  Crafted &amp; maintained by{" "}
                  <a href={AGENCY_LINKEDIN} target="_blank" rel="noopener noreferrer"><strong>AdMatrix Media</strong></a>
                </p>
              </div>
              <ul className="footer-highlights">
                <li><span aria-hidden="true">🔒</span> 100% in your browser — your files never leave your device.</li>
                <li><span aria-hidden="true">🆓</span> {TOTAL_TOOLS}+ tools, completely free with no sign-up or watermark.</li>
                <li><span aria-hidden="true">⚡</span> Fast and responsive on phone, tablet and desktop.</li>
                <li><span aria-hidden="true">🌍</span> Used worldwide for forms, applications and everyday files.</li>
                <li><span aria-hidden="true">✉️</span> Questions? <a href="mailto:contact@toolskaro.com">contact@toolskaro.com</a></li>
              </ul>
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
              <Link href="/developer-tools/" className="footer-h">Developer Tools</Link>
              {DEV_TOOLS.map(([href, label]) => (
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
            <span className="footer-made">Made with <span className="heart" aria-hidden="true">♥</span> in India <span className="flag" aria-hidden="true">🇮🇳</span></span>
          </div>
        </footer>
        <Script id="ga-src" strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-98K21RL284" />
        <Script id="ga-init" strategy="lazyOnload">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-98K21RL284');`}</Script>
      </body>
    </html>
  );
}
