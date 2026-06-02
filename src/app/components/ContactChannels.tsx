import type { CSSProperties } from "react";
import { BRAND_RED, FONT_FAMILY, SITE } from "../constants";

const linkStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
  fontSize: "16px",
  fontWeight: 600,
  color: "#0d0d0d",
  textDecoration: "none",
  letterSpacing: "-0.01em",
  transition: "color 0.15s",
};

export function ContactChannels() {
  return (
    <div style={{ fontFamily: FONT_FAMILY }}>
      <a
        href={`mailto:${SITE.email}`}
        style={{ ...linkStyle, fontSize: "18px", fontWeight: 700 }}
        onMouseEnter={(e) => (e.currentTarget.style.color = BRAND_RED)}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#0d0d0d")}
      >
        {SITE.email}
        <span style={{ fontSize: "20px" }}>→</span>
      </a>
    </div>
  );
}
