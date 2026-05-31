import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "ToolsKaro — Free tools for Indian exam & job applicants";

const chips = ["Image Compressor", "Passport Photo", "Remove Background", "JPG to PDF", "Resume Maker"];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg,#4f46e5,#7c3aed)",
          color: "#fff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 86,
              height: 86,
              borderRadius: 22,
              background: "#fff",
              color: "#4f46e5",
              fontSize: 54,
              fontWeight: 800,
              marginRight: 22,
            }}
          >
            T
          </div>
          <div style={{ fontSize: 48, fontWeight: 800 }}>ToolsKaro</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 66, fontWeight: 800, lineHeight: 1.1, maxWidth: 1000 }}>
            Free tools for Indian exam &amp; job applicants
          </div>
          <div style={{ fontSize: 30, marginTop: 20, opacity: 0.92, maxWidth: 940 }}>
            Resize &amp; compress photo and signature, convert PDFs, build a resume — 100% in your browser.
          </div>
        </div>

        <div style={{ display: "flex" }}>
          {chips.map((c) => (
            <div
              key={c}
              style={{
                display: "flex",
                background: "rgba(255,255,255,0.16)",
                border: "1px solid rgba(255,255,255,0.4)",
                borderRadius: 999,
                padding: "10px 22px",
                fontSize: 24,
                marginRight: 14,
              }}
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
