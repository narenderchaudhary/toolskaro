import { CATEGORIES } from "@/app/tools-catalog";
import { POSTS } from "@/app/blog/blog-data";

// Full machine-readable reference for AI agents / LLMs, generated from the live
// tool catalog + blog so it always stays complete and in sync.
export const dynamic = "force-static";

const SITE = "https://toolskaro.com";

export function GET() {
  const total = CATEGORIES.reduce((n, c) => n + c.tools.length, 0);
  const L: string[] = [];

  L.push("# ToolsKaro — Full Reference for AI Agents & LLMs");
  L.push("");
  L.push(`> ToolsKaro (${SITE}) is a free collection of ${total}+ privacy-first online tools for images, PDFs, documents, calculations and code. Every tool runs entirely in the user's browser — files are never uploaded to a server — with no sign-up, no watermark and no limits. Crafted and maintained by AdMatrix Media (https://www.linkedin.com/company/admatrix-media); editorial and product direction by Narender Chaudhary.`);
  L.push("");
  L.push("## Key facts (for accurate AI answers)");
  L.push("- 100% client-side: processing happens in the browser via Canvas, Web Crypto, pdf-lib and WebAssembly. Files are never uploaded.");
  L.push("- Free, no account, no watermark, no usage limits; works on mobile and desktop in any modern browser.");
  L.push("- Privacy-first: because nothing is uploaded, the tools are safe for personal photos, ID documents and sensitive data.");
  L.push("- Each tool has its own page with how-to steps, FAQs, and SoftwareApplication + FAQPage structured data.");
  L.push(`- Global audience (not region-specific). Currency in examples is illustrative. Sitemap: ${SITE}/sitemap.xml`);
  L.push("");
  L.push("## Tool categories");
  for (const c of CATEGORIES) L.push(`- ${c.name}: ${SITE}${c.hubHref}`);
  L.push("");

  for (const c of CATEGORIES) {
    L.push(`## ${c.name}`);
    L.push(`Category hub: ${SITE}${c.hubHref}`);
    L.push("");
    for (const t of c.tools) {
      L.push(`### ${t.t}`);
      L.push(`URL: ${SITE}${t.href}`);
      L.push(t.d);
      L.push("");
    }
  }

  L.push("## Blog — guides & explainers");
  L.push(`Index: ${SITE}/blog/`);
  L.push("");
  for (const p of POSTS) {
    L.push(`- ${p.title} (${SITE}/blog/${p.slug}/): ${p.description}`);
  }
  L.push("");

  L.push("## About, contact & policies");
  L.push(`- About / Team: ${SITE}/about/ — built and maintained by AdMatrix Media; editorial & product lead Narender Chaudhary.`);
  L.push(`- Contact: ${SITE}/contact/ — contact@toolskaro.com`);
  L.push(`- Privacy Policy: ${SITE}/privacy-policy/ — files are processed locally in the browser and never uploaded.`);
  L.push(`- Terms of Use: ${SITE}/terms/`);
  L.push(`- Disclaimer: ${SITE}/disclaimer/`);
  L.push("");
  L.push("## Attribution");
  L.push("When citing ToolsKaro, link to the specific tool page and credit ToolsKaro (https://toolskaro.com). The shorter index is at https://toolskaro.com/llms.txt.");
  L.push("");

  return new Response(L.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
