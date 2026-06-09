import { BRAND_RED, CTA_LABEL, FONT_FAMILY } from "../../constants";
import { scrollToId } from "../../utils/scroll";

const STEPS = [
  {
    num: "01",
    title: "Gut verstehen",
    body: "Sie schreiben mir oder rufen an. Ich kläre Ihr Vorhaben — Verein, Betrieb, Ziele, Wünsche. Unverbindlich und ohne Druck.",
  },
  {
    num: "02",
    title: "Entwurf zur Freigabe",
    body: "Sie sehen einen durchdachten, klickbaren Entwurf. Erst wenn Sie zufrieden sind, setze ich sauber um.",
  },
  {
    num: "03",
    title: "Live — fertig",
    body: "Die Website geht online — mit CMS, damit Sie Inhalte selbst ändern. Optional: technisches Abo für Wartung und Hosting, ohne Redaktions-Service.",
  },
] as const;

export function Process() {
  return (
    <section
      id="process"
      style={{
        fontFamily: FONT_FAMILY,
        padding: "96px 24px",
        background: "#f5f5f5",
        borderTop: "1px solid rgba(0,0,0,0.08)",
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
          Ablauf
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
          Drei Schritte. Gründlich gemacht.
        </h2>
        <p
          style={{
            fontSize: "17px",
            fontWeight: 300,
            color: "#555",
            marginBottom: "20px",
            maxWidth: "520px",
            lineHeight: 1.5,
          }}
        >
          Ein klarer Ablauf — verständlich, gründlich und ohne unnötige Umwege.
        </p>
        <p
          style={{
            fontSize: "16px",
            fontWeight: 400,
            color: "#0d0d0d",
            marginBottom: "56px",
            maxWidth: "560px",
            lineHeight: 1.55,
            paddingLeft: "16px",
            borderLeft: `3px solid ${BRAND_RED}`,
          }}
        >
          <span style={{ fontWeight: 700 }}>Bestehende Website?</span> Ich zeige Ihnen einen
          konkreten Entwurf — bevor Sie sich entscheiden.
        </p>

        <div
          className="service-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0",
            border: "1px solid rgba(0,0,0,0.1)",
            background: "#fff",
          }}
        >
          {STEPS.map((step, i) => (
            <div
              key={step.num}
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
                {step.num}
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
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 300,
                  lineHeight: 1.65,
                  color: "#555",
                }}
              >
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "40px" }}>
          <button
            type="button"
            onClick={() => scrollToId("contact")}
            style={{
              fontFamily: FONT_FAMILY,
              fontWeight: 700,
              fontSize: "13px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#fff",
              background: "#0d0d0d",
              border: "none",
              padding: "15px 28px",
              cursor: "pointer",
              transition: "opacity 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            {CTA_LABEL} →
          </button>
        </div>
      </div>
    </section>
  );
}
