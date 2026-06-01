/** @type {import('next').NextConfig} */
const nextConfig = {
  // Deployed natively on Vercel (zero-config Next.js). All tool pages are
  // statically prerendered, so they are served from Vercel's CDN — no server
  // cost — while leaving the door open to future server features (API routes,
  // ISR) without reconfiguring. All tool processing runs client-side.
  trailingSlash: true,

  // Inline critical CSS and defer the rest (removes render-blocking stylesheet).
  experimental: { optimizeCss: true },

  // Security hardening headers (Lighthouse "Trust and Safety").
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
