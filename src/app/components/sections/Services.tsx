import { BRAND_RED, FONT_FAMILY } from "../../constants";

const POINTS = [
  {
    num: "01",
    title: "Qualität mit Sorgfalt.",
    body: "Kein Template von der Stange. Design und Umsetzung werden durchdacht — mit Entwurf zur Freigabe, bevor etwas live geht.",
  },
  {
    num: "02",
    title: "Faire Fixpreise.",
    body: "CHF 900 für die komplette Website. Der Preis steht von Anfang an fest — transparent, ohne Stundensatz und ohne Überraschungen.",
  },
  {
    num: "03",
    title: "Persönlich erreichbar.",
    body: "Sie haben von Anfang an mit mir zu tun. Ehrliche Beratung, direkter Draht — und wenn etwas hakt, bin ich da.",
  },
] as const;

export function Services() {
  return (
    <section
      id="services"
      style={{
        fontFamily: FONT_FAMILY,
        padding: "96px 24px",
        background: "#fff",
      }}
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
          Warum ammannweb
        </p>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 900,
            letterSpacing: "-0.025em",
            color: "#0d0d0d",
            marginBottom: "64px",
            lineHeight: 1.1,
          }}
        >
          Websites, die zu Vereinen und Betrieben passen.
        </h2>

        <div
          className="service-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0",
            borderTop: "1px solid rgba(0,0,0,0.1)",
          }}
        >
          {POINTS.map((p, i) => (
            <div
              key={p.num}
              style={{
                padding: "40px 32px",
                borderRight: i < 2 ? "1px solid rgba(0,0,0,0.1)" : "none",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  color: BRAND_RED,
                  marginBottom: "20px",
                }}
              >
                {p.num}
              </p>
              <h3
                style={{
                  fontSize: "clamp(18px, 2vw, 24px)",
                  fontWeight: 900,
                  color: "#0d0d0d",
                  letterSpacing: "-0.015em",
                  lineHeight: 1.2,
                  marginBottom: "16px",
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 300,
                  lineHeight: 1.65,
                  color: "#555",
                }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
