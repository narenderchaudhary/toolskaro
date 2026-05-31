import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg,#4f46e5,#7c3aed)", color: "#fff", fontSize: 130, fontWeight: 800 }}>
        T
      </div>
    ),
    { width: 192, height: 192 }
  );
}
