import { useState, type CSSProperties, type FormEvent } from "react";
import { BRAND_RED, FONT_FAMILY, SITE } from "../../constants";
import { submitContactForm } from "../../utils/contact";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      await submitContactForm(form);
      setSent(true);
    } catch {
      setError(
        "Die Anfrage konnte nicht gesendet werden. Bitte schreiben Sie uns direkt an " +
          SITE.email,
      );
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle: CSSProperties = {
    fontFamily: FONT_FAMILY,
    fontSize: "15px",
    fontWeight: 400,
    color: "#0d0d0d",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(0,0,0,0.2)",
    padding: "12px 0",
    width: "100%",
    outline: "none",
    transition: "border-color 0.15s",
  };

  return (
    <section
      id="contact"
      style={{
        fontFamily: FONT_FAMILY,
        padding: "96px 24px 80px",
        background: "#f5f5f5",
        borderTop: "1px solid rgba(0,0,0,0.1)",
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
        >
          <div>
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
              Kontakt
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 900,
                letterSpacing: "-0.025em",
                color: "#0d0d0d",
                marginBottom: "24px",
                lineHeight: 1.1,
              }}
            >
              Reden wir.
            </h2>
            <p
              style={{
                fontSize: "17px",
                fontWeight: 300,
                lineHeight: 1.6,
                color: "#555",
                marginBottom: "48px",
                maxWidth: "380px",
              }}
            >
              Kein Erstgespräch-Abo. Keine Verkaufspräsentation. Schreiben Sie uns — wir
              antworten gleichen Tag.
            </p>

            <a
              href={`mailto:${SITE.email}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "18px",
                fontWeight: 700,
                color: "#0d0d0d",
                textDecoration: "none",
                letterSpacing: "-0.01em",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = BRAND_RED)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#0d0d0d")}
            >
              {SITE.email}
              <span style={{ fontSize: "20px" }}>→</span>
            </a>

            <div
              style={{
                marginTop: "48px",
                paddingTop: "40px",
                borderTop: "1px solid rgba(0,0,0,0.1)",
              }}
            >
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#999",
                  marginBottom: "12px",
                }}
              >
                Standort
              </p>
              <p style={{ fontSize: "15px", fontWeight: 400, color: "#555", lineHeight: 1.6 }}>
                {SITE.location}
                <br />
                Projekte weltweit & remote
              </p>
            </div>
          </div>

          <div>
            {sent ? (
              <div
                style={{
                  padding: "48px 40px",
                  background: "#0d0d0d",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "16px",
                }}
              >
                <span style={{ fontSize: "32px", color: BRAND_RED }} aria-hidden>
                  ✓
                </span>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: 900,
                    color: "#fff",
                    letterSpacing: "-0.015em",
                    margin: 0,
                  }}
                >
                  Danke — wir melden uns.
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.5)",
                    margin: 0,
                  }}
                >
                  Normalerweise innerhalb weniger Stunden.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: "32px" }}
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    style={{
                      display: "block",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#999",
                      marginBottom: "8px",
                    }}
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Max Müller"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderBottomColor = "#0d0d0d")}
                    onBlur={(e) =>
                      (e.currentTarget.style.borderBottomColor = "rgba(0,0,0,0.2)")
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    style={{
                      display: "block",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#999",
                      marginBottom: "8px",
                    }}
                  >
                    E-Mail
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="max@beispiel.ch"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderBottomColor = "#0d0d0d")}
                    onBlur={(e) =>
                      (e.currentTarget.style.borderBottomColor = "rgba(0,0,0,0.2)")
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    style={{
                      display: "block",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#999",
                      marginBottom: "8px",
                    }}
                  >
                    Ihr Projekt
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Kurze Beschreibung — was brauchen Sie?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{
                      ...inputStyle,
                      resize: "none",
                      borderBottom: "none",
                      border: "1px solid rgba(0,0,0,0.15)",
                      padding: "14px 16px",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#0d0d0d")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.15)")}
                  />
                </div>
                {error && (
                  <p role="alert" style={{ fontSize: "14px", color: BRAND_RED, margin: 0 }}>
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    fontFamily: FONT_FAMILY,
                    fontWeight: 700,
                    fontSize: "13px",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#fff",
                    background: BRAND_RED,
                    border: "none",
                    padding: "16px 32px",
                    cursor: submitting ? "wait" : "pointer",
                    opacity: submitting ? 0.7 : 1,
                    transition: "opacity 0.15s",
                    alignSelf: "flex-start",
                  }}
                  onMouseEnter={(e) => {
                    if (!submitting) e.currentTarget.style.opacity = "0.88";
                  }}
                  onMouseLeave={(e) => {
                    if (!submitting) e.currentTarget.style.opacity = "1";
                  }}
                >
                  {submitting ? "Wird gesendet…" : "Anfrage senden →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
