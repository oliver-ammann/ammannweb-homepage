import { FONT_FAMILY } from "../../constants";

const BENEFITS = [
  {
    title: "Mobil & performant",
    detail:
      "Schnell geladen, klar strukturiert — auf dem Smartphone genauso gut nutzbar wie am Desktop.",
  },
  {
    title: "Hosting & Technik",
    detail:
      "Domain, SSL und Betrieb auf Ihrem Namen — ich richte es ein, datenschutzbewusst (nDSG) und ohne Billig-Hosting.",
  },
  {
    title: "CMS inklusive",
    detail:
      "Übersichtliches CMS für News, Termine und Vorstand — Inhalte pflegen Sie selbst, ohne mich für jeden Text.",
  },
  {
    title: "Eine Person",
    detail:
      "Kein Ticketsystem, kein Weiterleiten: Sie schreiben mir, ich antworte — eine feste Ansprechperson.",
  },
] as const;

export function Benefits() {
  return (
    <section
      style={{
        fontFamily: FONT_FAMILY,
        background: "#0d0d0d",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "48px 24px",
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0",
          }}
          className="benefits-grid"
        >
          {BENEFITS.map((item, i) => (
            <div
              key={item.title}
              style={{
                padding: "0 24px",
                borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.1)" : "none",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#fff",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.2,
                  marginBottom: "6px",
                }}
              >
                {item.title}
              </p>
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", fontWeight: 400, lineHeight: 1.5 }}>
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
