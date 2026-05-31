import { ImageResponse } from "next/og";

export const size = { width: 48, height: 48 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg,#4f46e5,#7c3aed)",
          color: "#fff",
          fontSize: 32,
          fontWeight: 800,
          borderRadius: 11,
        }}
      >
        T
      </div>
    ),
    { ...size }
  );
}
