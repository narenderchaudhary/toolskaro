import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: 60, background: "linear-gradient(150deg,#2c2450,#17161b)", color: "#f3f1f6" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 110, height: 110, borderRadius: 28, background: "linear-gradient(135deg,#4f46e5,#7c3aed)", color: "#fff", fontSize: 70, fontWeight: 800, marginBottom: 28 }}>T</div>
        <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.1 }}>ToolsKaro</div>
        <div style={{ fontSize: 30, marginTop: 18, color: "#c7c5cd" }}>Free tools for Indian exam &amp; job applicants</div>
      </div>
    ),
    { width: 640, height: 853 }
  );
}
