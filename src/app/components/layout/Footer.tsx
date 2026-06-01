import { Link } from "react-router";
import { FONT_FAMILY } from "../../constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        fontFamily: FONT_FAMILY,
        background: "#0d0d0d",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "28px 24px",
      }}
    >
      <div
        className="max-w-[1200px] mx-auto"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)", fontWeight: 400, margin: 0 }}>
          © {year} ammannweb. Frauenfeld, Thurgau.
        </p>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <Link
            to="/impressum"
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.3)",
              fontWeight: 400,
              textDecoration: "none",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
          >
            Impressum
          </Link>
          <Link
            to="/datenschutz"
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.3)",
              fontWeight: 400,
              textDecoration: "none",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
          >
            Datenschutz
          </Link>
          <Link
            to="/agb"
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.3)",
              fontWeight: 400,
              textDecoration: "none",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
          >
            AGB
          </Link>
        </div>
      </div>
    </footer>
  );
}
