import { BRAND_RED, CTA_LABEL, FONT_FAMILY } from "../../constants";
import { scrollToId } from "../../utils/scroll";

export function Hero() {
  return (
    <section
      id="hero"
      style={{
        fontFamily: FONT_FAMILY,
        background: "#0d0d0d",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "56px",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 w-full py-24 md:py-32">
        <p
          style={{
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: BRAND_RED,
            marginBottom: "28px",
          }}
        >
          Für Vereine & kleine Betriebe · Ostschweiz & remote
        </p>

        <h1
          style={{
            fontSize: "clamp(42px, 8vw, 96px)",
            fontWeight: 900,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            color: "#ffffff",
            maxWidth: "900px",
            marginBottom: "28px",
          }}
        >
          Ihre Website.
          <br />
          <span style={{ color: BRAND_RED }}>Fixpreis.</span>
          <br />
          Keine Überraschungen.
        </h1>

        <p
          style={{
            fontSize: "clamp(17px, 2.5vw, 22px)",
            fontWeight: 300,
            lineHeight: 1.5,
            color: "rgba(255,255,255,0.65)",
            maxWidth: "560px",
            marginBottom: "48px",
          }}
        >
          Klarer Ablauf, Fixpreis, eine Ansprechperson. Sauber umgesetzt — typisch für
          Sportvereine, Turnvereine und lokale Betriebe, die einen Auftritt wollen, auf den sie
          sich verlassen können.
        </p>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
          <button
            type="button"
            onClick={() => scrollToId("contact")}
            style={{
              fontFamily: FONT_FAMILY,
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#fff",
              background: BRAND_RED,
              border: "none",
              padding: "16px 36px",
              cursor: "pointer",
              transition: "opacity 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            {CTA_LABEL} →
          </button>
          <button
            type="button"
            onClick={() => scrollToId("pricing")}
            style={{
              fontFamily: FONT_FAMILY,
              fontWeight: 400,
              fontSize: "14px",
              letterSpacing: "0.04em",
              color: "rgba(255,255,255,0.5)",
              background: "none",
              border: "none",
              padding: "16px 0",
              cursor: "pointer",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
          >
            Preise ansehen
          </button>
        </div>

        <p
          style={{
            marginTop: "48px",
            paddingTop: "32px",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            fontSize: "14px",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
          }}
        >
          100% Fixpreis — keine versteckten Kosten
        </p>
      </div>
    </section>
  );
}
