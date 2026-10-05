import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const alt = "AsadDevLabs — Awwwards-level websites, technical SEO & automation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  let logoSrc = "";
  try {
    const logoBuffer = fs.readFileSync(
      path.join(process.cwd(), "public", "logo-white.png")
    );
    logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;
  } catch {
    logoSrc = "";
  }

  const items = ["Websites", "E-commerce", "Technical SEO", "Automation", "Apps"];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0E0E0C",
          color: "#F2EEE6",
          padding: "64px 72px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#9A958B",
          }}
        >
          <span>Independent Web Studio</span>
          <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span
              style={{
                width: 14,
                height: 14,
                borderRadius: 14,
                background: "#FF4D1A",
              }}
            />
            Available worldwide
          </span>
        </div>
        {logoSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={logoSrc} width={1056} height={152} alt="AsadDevLabs" />
        ) : (
          <div style={{ fontSize: 72, fontWeight: 700 }}>AsadDevLabs</div>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 40,
              lineHeight: 1.2,
              maxWidth: 760,
            }}
          >
            Awwwards-level websites, engineered to be found.
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              fontSize: 20,
              color: "#9A958B",
              gap: 6,
            }}
          >
            {items.map((i) => (
              <span key={i}>{i}</span>
            ))}
          </div>
        </div>
      </div>
    ),
    size
  );
}
