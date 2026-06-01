import { BRAND_RED, FONT_FAMILY } from "../../constants";

const POINTS = [
  {
    num: "01",
    title: "Wir bauen schnell.",
    body: "Kein monatelanger Prozess. Nach dem Briefing sehen Sie einen klickbaren Prototypen — innerhalb von 24 Stunden. Die fertige Website folgt in Tagen, nicht Wochen.",
  },
  {
    num: "02",
    title: "Wir kosten weniger.",
    body: "Fixpreise, kein Stundensatz. Wir arbeiten lean und mit modernen Werkzeugen — kein grosses Team, kein Overhead. Was bei klassischen Agenturen Wochen dauert, dauert bei uns Tage.",
  },
  {
    num: "03",
    title: "Wir sind ehrlich.",
    body: "Wenn etwas nicht nötig ist, sagen wir es. Wenn etwas nicht funktioniert, sagen wir es. Sie bekommen unsere Meinung — kein Ja-Sagen, kein Upsell-Theater.",
  },
] as const;

export function Services() {
  return (
    <section
      id="services"
      style={{
        fontFamily: FONT_FAMILY,
        padding: "96px 24px",
        background: "#0d0d0d",
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
          Was wir tun
        </p>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 900,
            letterSpacing: "-0.025em",
            color: "#ffffff",
            marginBottom: "64px",
            lineHeight: 1.1,
          }}
        >
          Drei Sätze, keine Füllwörter.
        </h2>

        <div
          className="service-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {POINTS.map((p, i) => (
            <div
              key={p.num}
              style={{
                padding: "40px 32px",
                borderRight: i < 2 ? "1px solid rgba(255,255,255,0.1)" : "none",
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
                  color: "#ffffff",
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
                  color: "rgba(255,255,255,0.55)",
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
