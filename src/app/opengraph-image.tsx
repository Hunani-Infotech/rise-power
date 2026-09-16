import { ImageResponse } from "next/og";

export const alt =
  "Rise Mission Power — portable hydrogen fuel cell systems for defense and critical missions";
export const size = { width: 1200, height: 630 };
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
          justifyContent: "space-between",
          background: "#101820",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            color: "#6e7f42",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: 8,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 18,
              height: 18,
              transform: "rotate(45deg)",
              border: "2px solid #6e7f42",
            }}
          />
          Rise Power
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div
            style={{
              color: "#f3f0e8",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 0.92,
              letterSpacing: -2,
              textTransform: "uppercase",
            }}
          >
            Mission-ready
          </div>
          <div
            style={{
              color: "#6e7f42",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 0.92,
              letterSpacing: -2,
              textTransform: "uppercase",
            }}
          >
            Hydrogen power.
          </div>
        </div>

        <div
          style={{
            color: "rgba(243,240,232,0.72)",
            fontSize: 28,
            lineHeight: 1.35,
            maxWidth: 920,
          }}
        >
          Portable fuel cell systems for defense, disaster response, and
          critical infrastructure.
        </div>
      </div>
    ),
    size,
  );
}
