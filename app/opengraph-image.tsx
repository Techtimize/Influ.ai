import { ImageResponse } from "next/og";

export const alt = "Fluenca.ai — Coming Soon";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#000000",
          color: "#ffffff",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 20% 20%, rgba(85,66,255,0.35), transparent 45%), radial-gradient(circle at 80% 70%, rgba(148,255,250,0.18), transparent 40%)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "#5856DE",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: 700,
            }}
          >
            F
          </div>
          <div
            style={{
              fontSize: 52,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#5856DE",
            }}
          >
            Fluenca.ai
          </div>
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
          }}
        >
          Coming Soon
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 28,
            color: "rgba(255,255,255,0.75)",
            maxWidth: 760,
            textAlign: "center",
            lineHeight: 1.35,
          }}
        >
          Join the waitlist and be first to know when we launch.
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
