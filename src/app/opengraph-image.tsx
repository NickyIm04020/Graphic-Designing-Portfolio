import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#050505",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(230,36,41,0.25), transparent 55%), radial-gradient(circle at 85% 85%, rgba(37,99,235,0.22), transparent 55%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 28,
            color: "#a3a3a3",
            textTransform: "uppercase",
            letterSpacing: 6,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#e62429",
            }}
          />
          Portfolio
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 104,
            fontWeight: 700,
            color: "#ffffff",
            marginTop: 24,
            letterSpacing: -2,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 40,
            fontWeight: 600,
            marginTop: 12,
            backgroundImage: "linear-gradient(90deg, #e62429, #2563eb)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Graphic &amp; Creative Designer
        </div>
      </div>
    ),
    { ...size }
  );
}
