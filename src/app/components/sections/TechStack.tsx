import { FONT_FAMILY } from "../../constants";

const STACK = [
  { name: "Next.js", role: "Frontend" },
  { name: "Tailwind CSS", role: "Styling" },
  { name: "Supabase", role: "Backend · Frankfurt · DSGVO-konform" },
  { name: "CMS nach Wahl", role: "Sanity, Contentful u.a." },
  { name: "Schweizer Hosting", role: "🇨🇭 DSGVO · EU-Datenschutz" },
] as const;

export function TechStack() {
  return (
    <section
      style={{
        fontFamily: FONT_FAMILY,
        background: "#f5f5f5",
        borderTop: "1px solid rgba(0,0,0,0.08)",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
        padding: "40px 24px",
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div style={{ display: "flex", alignItems: "center", gap: "0", flexWrap: "wrap" }}>
          <p
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#aaa",
              marginRight: "32px",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            Tech-Stack
          </p>
          <div style={{ display: "flex", gap: "0", flexWrap: "wrap", flex: 1 }}>
            {STACK.map((item, i) => (
              <div
                key={item.name}
                style={{
                  padding: "0 28px",
                  borderLeft: "1px solid rgba(0,0,0,0.1)",
                  borderRight: i === STACK.length - 1 ? "1px solid rgba(0,0,0,0.1)" : "none",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#0d0d0d",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.2,
                    marginBottom: "3px",
                  }}
                >
                  {item.name}
                </p>
                <p style={{ fontSize: "11px", color: "#999", fontWeight: 400 }}>{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
