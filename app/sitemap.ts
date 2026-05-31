import type { MetadataRoute } from "next";

const BASE = "https://toolskaro.com";

const ROUTES = [
  "",
  "image-compressor",
  "image-resizer",
  "passport-photo-maker",
  "signature-resize",
  "remove-background",
  "crop-image",
  "image-converter",
  "photo-signature-combiner",
  "age-calculator",
  "qr-code-generator",
  "word-counter",
  "typing-test",
  "emi-calculator",
  "sip-calculator",
  "gst-calculator",
  "interest-calculator",
  "percentage-calculator",
  "marks-percentage-calculator",
  "password-generator",
  "text-case-converter",
  "date-difference-calculator",
  "resume-maker",
  "marriage-biodata-maker",
  "cover-letter-generator",
  "invoice-generator",
  "pdf/jpg-to-pdf",
  "pdf/pdf-to-jpg",
  "pdf/merge",
  "pdf/compress",
  "pdf/split",
  "pdf/rotate",
  "pdf/delete-pages",
  "pdf/page-numbers",
  "about",
  "contact",
  "privacy-policy",
  "disclaimer",
  "terms",
];

const LOW_PRIORITY = new Set(["about", "contact", "privacy-policy", "disclaimer", "terms"]);

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: `${BASE}/${path}${path ? "/" : ""}`,
    changeFrequency: LOW_PRIORITY.has(path) ? "monthly" : "weekly",
    priority: path === "" ? 1 : LOW_PRIORITY.has(path) ? 0.3 : 0.8,
  }));
}
