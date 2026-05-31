import type { MetadataRoute } from "next";

const BASE = "https://toolskaro.com";

const ROUTES = [
  "",
  "image-compressor",
  "image-resizer",
  "age-calculator",
  "pdf/jpg-to-pdf",
  "pdf/merge",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: `${BASE}/${path}${path ? "/" : ""}`,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}
