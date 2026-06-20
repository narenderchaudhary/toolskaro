#!/usr/bin/env node
/**
 * IndexNow auto-submit — the static-site equivalent of the WordPress "ping on publish" hook.
 *
 * WordPress can ping IndexNow the moment a post is saved. A static Next.js site has no such hook,
 * so instead we read the LIVE sitemap after a deploy and submit every URL in one batch. Bing,
 * Yandex and other IndexNow engines then know exactly what to (re)crawl.
 *
 * Usage:
 *   node scripts/indexnow.mjs            # submit every URL in the sitemap
 *   node scripts/indexnow.mjs /pins/ /image-compressor/   # submit only these paths
 *
 * Run it AFTER each Vercel deploy has gone live (so the sitemap/pages are the new ones).
 * Requires Node 18+ (built-in fetch). No dependencies.
 */

const HOST = "toolskaro.com";
const SITE = `https://${HOST}`;
// One of the two keys hosted at /<key>.txt in public/. IndexNow verifies ownership against it.
const KEY = "27e26ce1f22547898f12196c5aa809af";
const KEY_LOCATION = `${SITE}/${KEY}.txt`;
const SITEMAP_URL = `${SITE}/sitemap.xml`;

async function urlsFromSitemap() {
  const res = await fetch(SITEMAP_URL, { headers: { "User-Agent": "toolskaro-indexnow" } });
  if (!res.ok) throw new Error(`Could not fetch ${SITEMAP_URL} — HTTP ${res.status}`);
  const xml = await res.text();
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  return [...new Set(locs)];
}

async function submit(urlList) {
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  });
  // IndexNow returns 200 or 202 on success; it does not return a body.
  return res.status;
}

async function main() {
  const args = process.argv.slice(2);
  let urls;
  if (args.length) {
    urls = args.map((a) => (a.startsWith("http") ? a : `${SITE}${a.startsWith("/") ? "" : "/"}${a}`));
    console.log(`Submitting ${urls.length} URL(s) passed on the command line.`);
  } else {
    urls = await urlsFromSitemap();
    console.log(`Read ${urls.length} URLs from ${SITEMAP_URL}.`);
  }
  if (!urls.length) {
    console.error("No URLs to submit.");
    process.exit(1);
  }
  // IndexNow accepts up to 10,000 URLs per request; batch to stay well within limits.
  const BATCH = 5000;
  for (let i = 0; i < urls.length; i += BATCH) {
    const chunk = urls.slice(i, i + BATCH);
    const status = await submit(chunk);
    const ok = status === 200 || status === 202;
    console.log(`Batch ${i / BATCH + 1}: ${chunk.length} URLs → HTTP ${status} ${ok ? "✓" : "✗ (check key file is live)"}`);
    if (!ok) process.exitCode = 1;
  }
  console.log("Done.");
}

main().catch((err) => {
  console.error("IndexNow submit failed:", err.message);
  process.exit(1);
});
