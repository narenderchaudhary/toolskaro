import { ImageResponse } from "next/og";
import { ALL_SLUGS, EXAMS } from "@/app/programmatic-data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "ToolsKaro";

export function generateStaticParams() {
  return ALL_SLUGS.map((slug) => ({ slug }));
}

function info(slug: string): { label: string; title: string } {
  let m = slug.match(/^compress-image-to-(\d+)kb$/);
  if (m) return { label: "IMAGE COMPRESSOR", title: `Compress image to ${m[1]} KB` };
  m = slug.match(/^compress-pdf-to-(\d+)kb$/);
  if (m) return { label: "PDF COMPRESSOR", title: `Compress PDF to ${m[1]} KB` };
  const exam = EXAMS.find((e) => e.slug === slug);
  if (exam) return { label: "PHOTO & SIGNATURE", title: `${exam.name} photo & signature size` };
  return { label: "TOOLSKARO", title: "Free tools for Indian exam & job applicants" };
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { label, title } = info(slug);
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "70px 80px", background: "linear-gradient(150deg,#2c2450,#17161b)", color: "#f3f1f6" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 74, height: 74, borderRadius: 18, background: "linear-gradient(135deg,#4f46e5,#7c3aed)", color: "#fff", fontSize: 46, fontWeight: 800, marginRight: 20 }}>T</div>
          <div style={{ fontSize: 42, fontWeight: 800 }}>ToolsKaro</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: 3, color: "#a99ff7", marginBottom: 18 }}>{label}</div>
          <div style={{ fontSize: 66, fontWeight: 800, lineHeight: 1.1, maxWidth: 1010 }}>{title}</div>
        </div>
        <div style={{ fontSize: 26, color: "#c7c5cd" }}>Free · no upload · 100% in your browser</div>
      </div>
    ),
    { ...size }
  );
}
