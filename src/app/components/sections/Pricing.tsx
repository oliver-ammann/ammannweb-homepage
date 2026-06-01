import { BRAND_RED, FONT_FAMILY } from "../../constants";
import { scrollToId } from "../../utils/scroll";

const PLANS = [
  {
    name: "Einmaliges Projekt",
    price: "ab CHF 1'900",
    period: "einmalig",
    desc: "Für Unternehmen, die eine neue Website benötigen. Fertig geliefert, kein Abo.",
    features: [
      "Bis zu 8 Seiten",
      "Responsives Design",
      "Kontaktformular & Datenbankanbindung",
      "Basis-SEO",
      "3 Monate Gratis-Support",
      "CMS auf Wunsch (nicht WordPress)",
    ],
    cta: "Projekt anfragen",
    featured: false,
  },
  {
    name: "Monatliches Retainer",
    price: "CHF 390",
    period: "pro Monat",
    desc: "Für Unternehmen, die laufend professionelle Web-Unterstützung wollen.",
    features: [
      "Website-Wartung & Updates",
      "Bis zu 5h Änderungen/Monat",
      "Hosting & Sicherheit",
      "Performance-Monitoring",
      "Monatlicher Report",
      "Prioritäts-Support",
    ],
    cta: "Retainer starten",
    featured: true,
  },
] as const;

export function Pricing() {
  return (
    <section
      id="pricing"
      style={{ fontFamily: FONT_FAMILY, padding: "96px 24px", background: "#fff" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <p
          style={{
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: BRAND_RED,
            marginBottom: "16px",
          }}
        >
          Preise
        </p>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 900,
            letterSpacing: "-0.025em",
            color: "#0d0d0d",
            marginBottom: "16px",
            lineHeight: 1.1,
          }}
        >
          Kein Stundensatz. Kein Bullshit.
        </h2>
        <p
          style={{
            fontSize: "17px",
            fontWeight: 300,
            color: "#555",
            marginBottom: "56px",
            maxWidth: "480px",
            lineHeight: 1.5,
          }}
        >
          Sie wissen von Anfang an, was Sie bezahlen. Kein Scope-Creep, keine Nachrechnung.
        </p>

        <div
          className="pricing-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0",
            border: "1px solid rgba(0,0,0,0.12)",
          }}
        >
          {PLANS.map((plan, i) => (
            <div
              key={plan.name}
              style={{
                padding: "48px 40px",
                background: plan.featured ? "#0d0d0d" : "#fff",
                borderRight: i === 0 ? "1px solid rgba(0,0,0,0.12)" : "none",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              {plan.featured && (
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                    background: BRAND_RED,
                    color: "#fff",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "5px 12px",
                  }}
                >
                  Empfohlen
                </div>
              )}

              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: plan.featured ? "rgba(255,255,255,0.45)" : "#999",
                  marginBottom: "12px",
                }}
              >
                {plan.name}
              </p>

              <div style={{ marginBottom: "8px" }}>
                <span
                  style={{
                    fontSize: "clamp(32px, 4vw, 48px)",
                    fontWeight: 900,
                    color: plan.featured ? "#fff" : "#0d0d0d",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                  }}
                >
                  {plan.price}
                </span>
              </div>
              <p
                style={{
                  fontSize: "13px",
                  color: plan.featured ? "rgba(255,255,255,0.35)" : "#aaa",
                  marginBottom: "20px",
                }}
              >
                {plan.period}
              </p>

              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 300,
                  lineHeight: 1.55,
                  color: plan.featured ? "rgba(255,255,255,0.6)" : "#666",
                  marginBottom: "32px",
                }}
              >
                {plan.desc}
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 40px", flex: 1 }}>
                {plan.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "9px 0",
                      borderBottom: `1px solid ${plan.featured ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)"}`,
                      fontSize: "14px",
                      fontWeight: 400,
                      color: plan.featured ? "rgba(255,255,255,0.75)" : "#333",
                    }}
                  >
                    <span style={{ color: BRAND_RED, fontSize: "16px", lineHeight: 1 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => scrollToId("contact")}
                style={{
                  fontFamily: FONT_FAMILY,
                  fontWeight: 700,
                  fontSize: "13px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: plan.featured ? "#0d0d0d" : "#fff",
                  background: plan.featured ? "#fff" : "#0d0d0d",
                  border: "none",
                  padding: "15px 24px",
                  cursor: "pointer",
                  transition: "opacity 0.15s",
                  width: "100%",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                {plan.cta} →
              </button>
            </div>
          ))}
        </div>

        <p style={{ fontSize: "13px", color: "#999", marginTop: "20px", fontWeight: 400 }}>
          Alle Preise exkl. MwSt. Massgeschneiderte Lösungen auf Anfrage.
        </p>
      </div>
    </section>
  );
}
