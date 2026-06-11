import type { MetadataRoute } from "next";
import { ALL_SLUGS } from "./programmatic-data";

const BASE = "https://toolskaro.com";

const ROUTES = [
  "",
  "image-tools",
  "pdf-tools",
  "document-tools",
  "calculators",
  "utilities",
  "image-compressor",
  "image-resizer",
  "passport-photo-maker",
  "signature-resize",
  "remove-background",
  "crop-image",
  "image-converter",
  "photo-signature-combiner",
  "photo-joiner",
  "social-media-image-resizer",
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
  "tdee-calculator",
  "pregnancy-calculator",
  "password-generator",
  "text-case-converter",
  "date-difference-calculator",
  "resume-maker",
  "marriage-biodata-maker",
  "cover-letter-generator",
  "invoice-generator",
  "email-signature-maker",
  "pdf/jpg-to-pdf",
  "pdf/pdf-to-jpg",
  "pdf/merge",
  "pdf/compress",
  "pdf/split",
  "pdf/rotate",
  "pdf/delete-pages",
  "pdf/page-numbers",
  "pdf/watermark",
  "pdf/organize",
  "about",
  "contact",
  "privacy-policy",
  "disclaimer",
  "terms",
];

const LOW_PRIORITY = new Set(["about", "contact", "privacy-policy", "disclaimer", "terms"]);

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(); // build time — refreshes on every deploy
  const main = ROUTES.map((path) => ({
    url: `${BASE}/${path}${path ? "/" : ""}`,
    lastModified,
    changeFrequency: (LOW_PRIORITY.has(path) ? "monthly" : "weekly") as "monthly" | "weekly",
    priority: path === "" ? 1 : LOW_PRIORITY.has(path) ? 0.3 : 0.8,
  }));
  const programmatic = ALL_SLUGS.map((slug) => ({
    url: `${BASE}/${slug}/`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));
  const stories = [
    `${BASE}/web-stories/`,
    `${BASE}/web-stories/compress-photo-to-50kb.html`,
    `${BASE}/web-stories/resize-photo-and-signature-for-exam.html`,
    `${BASE}/web-stories/make-passport-size-photo.html`,
  ].map((url) => ({ url, lastModified, changeFrequency: "monthly" as const, priority: 0.5 }));
  return [...main, ...programmatic, ...stories];
}
