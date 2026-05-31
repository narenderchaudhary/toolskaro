# India Exam Tools

Free, in-browser utility tools for Indian exam/job applicants. Static Next.js (App Router) site — **all processing runs client-side**, zero server cost, deployable to any CDN.

See **[STRATEGY.md](STRATEGY.md)** for keyword research (real India volumes), site architecture, the programmatic-SEO plan, monetisation, roadmap, and domain ideas.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out  (deploy this folder)
```

## Status

| Tool | Route | State |
|---|---|---|
| Image Compressor (compress to exact KB) | `/image-compressor` | ✅ **Working POC** |
| Image Resizer, Passport Photo, Signature, PDF suite, Resume, Biodata, Age, Typing, Remove BG | (listed on home) | 🔲 To build (Phase 1–3) |

The compressor uses a pure-Canvas binary-search on JPEG quality (with auto-downscale fallback) to hit a target KB — no upload, no dependencies. Use it as the pattern for the rest.

## Deploy

`output: 'export'` is set in `next.config.mjs`. Push `./out` to Cloudflare Pages / Netlify / Vercel. Set the real domain in `app/layout.tsx` (`metadataBase`) before launch.
