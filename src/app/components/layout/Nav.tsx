import { useState } from "react";
import { Link, useLocation } from "react-router";
import { BRAND_RED, CTA_LABEL, FONT_FAMILY, NAV_LINKS } from "../../constants";
import { scrollToId, scrollToTop } from "../../utils/scroll";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const goToSection = (id: string) => {
    setMenuOpen(false);
    if (isHome) {
      scrollToId(id);
    } else {
      window.location.href = `/#${id}`;
    }
  };

  const goHome = () => {
    setMenuOpen(false);
    if (isHome) {
      scrollToTop();
    }
  };

  return (
    <nav
      style={{ fontFamily: FONT_FAMILY }}
      className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border"
    >
      <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" onClick={goHome} className="flex items-center gap-2 group no-underline">
          <span
            style={{
              fontFamily: FONT_FAMILY,
              fontWeight: 900,
              fontSize: "18px",
              letterSpacing: "-0.02em",
              color: "#0d0d0d",
            }}
          >
            AW
          </span>
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: BRAND_RED,
              display: "inline-block",
              marginBottom: "1px",
            }}
          />
          <span
            style={{
              fontFamily: FONT_FAMILY,
              fontWeight: 400,
              fontSize: "13px",
              letterSpacing: "0.08em",
              color: "#555",
              textTransform: "uppercase",
            }}
          >
            ammannweb
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => goToSection(link.id)}
              style={{
                fontFamily: FONT_FAMILY,
                fontWeight: 400,
                fontSize: "14px",
                letterSpacing: "0.02em",
                color: "#555",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0d0d0d")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => goToSection("contact")}
            style={{
              fontFamily: FONT_FAMILY,
              fontWeight: 700,
              fontSize: "13px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#fff",
              background: BRAND_RED,
              border: "none",
              padding: "8px 20px",
              cursor: "pointer",
              transition: "opacity 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            {CTA_LABEL}
          </button>
        </div>

        <button
          type="button"
          className="md:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Menü schliessen" : "Menü öffnen"}
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "4px" }}
        >
          <div style={{ width: "22px", display: "flex", flexDirection: "column", gap: "5px" }}>
            <span
              style={{
                display: "block",
                height: "2px",
                background: "#0d0d0d",
                transition: "transform 0.2s",
                transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                height: "2px",
                background: "#0d0d0d",
                opacity: menuOpen ? 0 : 1,
                transition: "opacity 0.2s",
              }}
            />
            <span
              style={{
                display: "block",
                height: "2px",
                background: "#0d0d0d",
                transition: "transform 0.2s",
                transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
              }}
            />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden border-t border-border bg-background"
          style={{ padding: "16px 24px 24px" }}
        >
          {[...NAV_LINKS, { label: "Kontakt", id: "contact" }].map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => goToSection(link.id)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                fontFamily: FONT_FAMILY,
                fontWeight: 400,
                fontSize: "16px",
                color: "#0d0d0d",
                background: "none",
                border: "none",
                padding: "12px 0",
                cursor: "pointer",
                borderBottom: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
