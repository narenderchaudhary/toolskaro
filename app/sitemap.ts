import type { MetadataRoute } from "next";

const BASE = "https://toolskaro.com";

const ROUTES = [
  "",
  "image-compressor",
  "image-resizer",
  "passport-photo-maker",
  "remove-background",
  "age-calculator",
  "qr-code-generator",
  "word-counter",
  "pdf/jpg-to-pdf",
  "pdf/pdf-to-jpg",
  "pdf/merge",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: `${BASE}/${path}${path ? "/" : ""}`,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}
