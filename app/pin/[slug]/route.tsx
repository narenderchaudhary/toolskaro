import { ImageResponse } from "next/og";

export const dynamic = "force-static";

type Pin = { title: string; sub: string; emoji: string; path: string; grad: [string, string] };

const PINS: Record<string, Pin> = {
  "compress-50kb": { title: "Compress Photo to 50 KB", sub: "For SSC, UPSC, Bank & Railway forms", emoji: "🗜️", path: "/compress-image-to-50kb/", grad: ["#4f46e5", "#7c3aed"] },
  "passport-photo": { title: "Passport Size Photo Maker", sub: "White background · 3.5×4.5 cm", emoji: "🪪", path: "/passport-photo-maker/", grad: ["#2563eb", "#4f46e5"] },
  "resize-photo": { title: "Resize Photo for Exam Forms", sub: "Exact pixels & KB in one click", emoji: "📐", path: "/image-resizer/", grad: ["#0891b2", "#2563eb"] },
  "remove-bg": { title: "Remove Image Background", sub: "Free · right in your browser", emoji: "🪄", path: "/remove-background/", grad: ["#7c3aed", "#db2777"] },
  "biodata": { title: "Marriage Biodata Maker", sub: "Hindi & English · free PDF", emoji: "💍", path: "/marriage-biodata-maker/", grad: ["#db2777", "#e11d48"] },
  "resume": { title: "Free Resume / CV Maker", sub: "Download PDF · no watermark", emoji: "📝", path: "/resume-maker/", grad: ["#4f46e5", "#0891b2"] },
  "typing": { title: "Typing Test — Hindi & English", sub: "Check your WPM, free", emoji: "⌨️", path: "/typing-test/", grad: ["#059669", "#0891b2"] },
  "jpg-to-pdf": { title: "JPG to PDF Converter", sub: "Combine images into one PDF", emoji: "📄", path: "/pdf/jpg-to-pdf/", grad: ["#e11d48", "#7c3aed"] },
  "age-calculator": { title: "Age Calculator", sub: "Exact age & exam eligibility", emoji: "🎂", path: "/age-calculator/", grad: ["#d97706", "#e11d48"] },
  "social-resizer": { title: "Social Media Image Resizer", sub: "Instagram, FB, WhatsApp sizes", emoji: "📱", path: "/social-media-image-resizer/", grad: ["#4f46e5", "#059669"] },
};

export function generateStaticParams() {
  return Object.keys(PINS).map((slug) => ({ slug }));
}

export async function GET(_req: Request, ctx: { params: Promise<{ slug: string }> }) {
  const { slug } = await ctx.params;
  const p = PINS[slug];
  if (!p) return new Response("Not found", { status: 404 });
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "70px 64px", background: `linear-gradient(160deg, ${p.grad[0]}, ${p.grad[1]})`, color: "#fff" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 70, height: 70, borderRadius: 18, background: "#fff", color: p.grad[0], fontSize: 44, fontWeight: 800, marginRight: 18 }}>T</div>
          <div style={{ fontSize: 42, fontWeight: 800 }}>ToolsKaro</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 150 }}>{p.emoji}</div>
          <div style={{ fontSize: 86, fontWeight: 800, lineHeight: 1.05, marginTop: 24 }}>{p.title}</div>
          <div style={{ fontSize: 40, marginTop: 26, opacity: 0.92 }}>{p.sub}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", marginBottom: 22 }}>
            {["100% Free", "No sign-up", "In your browser"].map((b) => (
              <div key={b} style={{ display: "flex", background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.4)", borderRadius: 999, padding: "10px 22px", fontSize: 28, marginRight: 14 }}>{b}</div>
            ))}
          </div>
          <div style={{ display: "flex", fontSize: 38, fontWeight: 700, background: "#fff", color: p.grad[0], borderRadius: 16, padding: "16px 30px", alignSelf: "flex-start" }}>toolskaro.com{p.path}</div>
        </div>
      </div>
    ),
    { width: 1000, height: 1500 }
  );
}
