/** @type {import('next').NextConfig} */
const nextConfig = {
  // Deployed natively on Vercel (zero-config Next.js). All tool pages are
  // statically prerendered, so they are served from Vercel's CDN — no server
  // cost — while leaving the door open to future server features (API routes,
  // ISR) without reconfiguring. All tool processing runs client-side.
  trailingSlash: true,
};

export default nextConfig;
