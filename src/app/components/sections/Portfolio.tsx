import { BRAND_RED, FONT_FAMILY } from "../../constants";

export function Portfolio() {
  return (
    <section
      id="portfolio"
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
          Portfolio
        </p>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 900,
            letterSpacing: "-0.025em",
            color: "#0d0d0d",
            marginBottom: "56px",
            lineHeight: 1.1,
          }}
        >
          Sehen Sie, was wir gebaut haben.
        </h2>

        <div
          className="portfolio-feature"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0",
            border: "1px solid rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{
              background: "#f0f0f0",
              aspectRatio: "16/10",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop&auto=format"
              alt="Website-Screenshot von Müller Schreinerei AG"
              loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(13,13,13,0.15)",
              }}
              aria-hidden
            />
          </div>

          <div
            className="portfolio-details"
            style={{
              padding: "48px 40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderLeft: "1px solid rgba(0,0,0,0.1)",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#999",
                  marginBottom: "12px",
                }}
              >
                Schreinerei · Zürich
              </p>
              <h3
                style={{
                  fontSize: "clamp(22px, 3vw, 32px)",
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                  color: "#0d0d0d",
                  marginBottom: "20px",
                  lineHeight: 1.1,
                }}
              >
                Müller Schreinerei AG
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 300,
                  lineHeight: 1.6,
                  color: "#555",
                  marginBottom: "32px",
                }}
              >
                Neue Website mit Online-Anfrage, Referenzgalerie und lokalem SEO. Ergebnis: +64%
                Anfragen im ersten Quartal nach Launch.
              </p>

              <div style={{ display: "flex", gap: "24px", marginBottom: "40px", flexWrap: "wrap" }}>
                {[
                  { label: "Lieferzeit", val: "6 Tage" },
                  { label: "Preis", val: "CHF 2'900" },
                  { label: "Anfragen", val: "+64%" },
                ].map((m) => (
                  <div key={m.label}>
                    <p
                      style={{
                        fontSize: "20px",
                        fontWeight: 900,
                        color: "#0d0d0d",
                        lineHeight: 1,
                        marginBottom: "4px",
                      }}
                    >
                      {m.val}
                    </p>
                    <p style={{ fontSize: "12px", color: "#999", fontWeight: 400 }}>{m.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {["Webdesign", "SEO", "Next.js", "Supabase"].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#0d0d0d",
                    border: "1px solid rgba(0,0,0,0.2)",
                    padding: "4px 10px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
