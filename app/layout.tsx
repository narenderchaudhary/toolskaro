import type { Metadata } from "next";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import SocialLinks, { TELEGRAM, WHATSAPP } from "@/app/components/Social";
import AutoBreadcrumbs from "@/app/components/AutoBreadcrumbs";
import AutoByline from "@/app/components/AutoByline";
import ThemeToggle from "@/app/components/ThemeToggle";
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
      sameAs: [TELEGRAM, WHATSAPP, LINKEDIN],
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
    <html lang="en-IN" className={jakarta.variable} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <header className="site">
          <div className="container">
            <Logo />
            <nav className="nav">
              <Link href="/image-compressor/">Compress</Link>
              <Link href="/image-resizer/">Resize</Link>
              <Link href="/remove-background/" className="hide-sm">Remove BG</Link>
              <Link href="/pdf/merge/">PDF</Link>
              <Link href="/developer-tools/" className="hide-sm">Dev</Link>
              <Link href="/blog/">Blog</Link>
              <Link href="/about/" className="hide-sm">About</Link>
              <ThemeToggle />
            </nav>
          </div>
        </header>

        <main className="container">
          <AutoBreadcrumbs />
          {children}
          <AutoByline />
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
                <li><span aria-hidden="true">🌍</span> Used worldwide for exam forms, job, visa and everyday files.</li>
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
          <div className="container footer-seo">
            <div className="footer-seo-h">Free online tools for photos, signatures, PDFs, documents &amp; developers</div>
            <p>
              ToolsKaro brings together more than {TOTAL_TOOLS} free online tools in one fast,
              privacy-first place. Resize an image to exact pixel dimensions or compress a photo to a
              specific KB with the <Link href="/image-compressor/">image compressor</Link> and{" "}
              <Link href="/image-resizer/">image resizer</Link>, make a white-background{" "}
              <Link href="/passport-photo-maker/">passport size photo</Link>, and prepare your{" "}
              <Link href="/photo-resize-for-ssc-cgl/">photo and signature for exam forms</Link> in the
              exact size every government application form demands. Convert files in a single click —{" "}
              <Link href="/pdf/jpg-to-pdf/">JPG to PDF</Link>,{" "}
              <Link href="/pdf/pdf-to-jpg/">PDF to JPG</Link>,{" "}
              <Link href="/heic-to-jpg/">HEIC to JPG</Link> and{" "}
              <Link href="/png-to-jpg/">PNG to JPG</Link> — or open the full PDF toolkit to{" "}
              <Link href="/pdf/merge/">merge PDF</Link>, split,{" "}
              <Link href="/pdf/compress/">compress PDF</Link> and rotate pages. You can also{" "}
              <Link href="/remove-background/">remove a photo background</Link>, crop to any aspect
              ratio, and convert images between PNG, JPG and WebP.
            </p>
            <p>
              Need an exact file size? Compress an image to{" "}
              <Link href="/compress-image-to-20kb/">20 KB</Link>,{" "}
              <Link href="/compress-image-to-50kb/">50 KB</Link>,{" "}
              <Link href="/compress-image-to-100kb/">100 KB</Link> or 200 KB, or reduce a PDF to{" "}
              <Link href="/compress-pdf-to-100kb/">100 KB</Link>, 200 KB, 500 KB, 1 MB or 2 MB to fit
              any upload limit on an exam, job, visa or bank portal. Build a professional CV with the{" "}
              <Link href="/resume-maker/">resume maker</Link>, create a{" "}
              <Link href="/marriage-biodata-maker/">marriage biodata</Link>,{" "}
              <Link href="/cover-letter-generator/">cover letter</Link> or{" "}
              <Link href="/invoice-generator/">GST invoice</Link>, and use everyday{" "}
              <Link href="/calculators/">calculators</Link> for EMI, SIP, GST, percentage, age and
              TDEE. Developers get a <Link href="/json-formatter/">JSON formatter</Link>,{" "}
              <Link href="/base64-encode-decode/">Base64</Link> and{" "}
              <Link href="/url-encode-decode/">URL encode/decode</Link>, a{" "}
              <Link href="/hash-generator/">hash generator</Link>,{" "}
              <Link href="/uuid-generator/">UUID generator</Link>,{" "}
              <Link href="/timestamp-converter/">timestamp converter</Link> and{" "}
              <Link href="/color-converter/">color converter</Link>. Every tool runs entirely in your
              browser, so your photos, signatures and documents are never uploaded to a server —
              keeping ToolsKaro free, fast, private and available on any device, with no sign-up and no
              watermark.
            </p>
            <p>
              Whether you are filling a government recruitment form, applying for a passport, OCI or
              visa, submitting a job or bank application, or simply organising everyday photos and
              documents, ToolsKaro gives you a complete, reliable online toolkit that loads instantly
              and works on both mobile and desktop — with no software to install and nothing to pay.
            </p>
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
