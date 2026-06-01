import { Link } from "react-router";
import type { ReactNode } from "react";
import { BRAND_RED, FONT_FAMILY } from "../../constants";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

type LegalLayoutProps = {
  title: string;
  children: ReactNode;
};

export function LegalLayout({ title, children }: LegalLayoutProps) {
  return (
    <div style={{ fontFamily: FONT_FAMILY, background: "#fff", minHeight: "100vh" }}>
      <Nav />
      <main style={{ paddingTop: "56px" }}>
        <div className="max-w-[720px] mx-auto px-6 py-16 md:py-24">
          <Link
            to="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "14px",
              color: "#555",
              textDecoration: "none",
              marginBottom: "32px",
            }}
          >
            ← Zurück zur Startseite
          </Link>
          <h1
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 900,
              letterSpacing: "-0.025em",
              color: "#0d0d0d",
              marginBottom: "32px",
              lineHeight: 1.1,
            }}
          >
            {title}
          </h1>
          <div
            style={{
              fontSize: "15px",
              fontWeight: 400,
              lineHeight: 1.7,
              color: "#444",
            }}
            className="legal-content"
          >
            {children}
          </div>
        </div>
      </main>
      <Footer />
      <style>{`
        .legal-content h2 {
          font-size: 18px;
          font-weight: 700;
          color: #0d0d0d;
          margin: 32px 0 12px;
        }
        .legal-content p { margin: 0 0 16px; }
        .legal-content a { color: ${BRAND_RED}; }
        .legal-content ul { margin: 0 0 16px; padding-left: 20px; }
        .legal-content li { margin-bottom: 8px; }
      `}</style>
    </div>
  );
}
