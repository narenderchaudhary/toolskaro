import type { MetadataRoute } from "next";

const BASE = "https://toolskaro.com";

const ROUTES = [
  "",
  "image-compressor",
  "image-resizer",
  "passport-photo-maker",
  "signature-resize",
  "remove-background",
  "age-calculator",
  "qr-code-generator",
  "word-counter",
  "typing-test",
  "resume-maker",
  "marriage-biodata-maker",
  "pdf/jpg-to-pdf",
  "pdf/pdf-to-jpg",
  "pdf/merge",
  "pdf/compress",
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
