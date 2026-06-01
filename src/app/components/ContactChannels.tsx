import type { CSSProperties } from "react";
import {
  CONTACT_CHANNELS,
  isThreemaConfigured,
  isWhatsappConfigured,
  threemaHref,
  whatsappHref,
  whatsappLabel,
} from "../contact-channels";
import { BRAND_RED, FONT_FAMILY, SITE } from "../constants";

const linkStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
  fontSize: "16px",
  fontWeight: 600,
  color: "#0d0d0d",
  textDecoration: "none",
  letterSpacing: "-0.01em",
  transition: "color 0.15s",
};

const pendingStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
  fontSize: "16px",
  fontWeight: 600,
  color: "#bbb",
};

function ChannelLink({
  href,
  label,
  hint,
}: {
  href: string;
  label: string;
  hint?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={linkStyle}
      onMouseEnter={(e) => (e.currentTarget.style.color = BRAND_RED)}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#0d0d0d")}
    >
      <span>{label}</span>
      {hint ? (
        <span style={{ fontSize: "14px", fontWeight: 400, color: "#999" }}>{hint}</span>
      ) : null}
      <span style={{ fontSize: "18px" }}>→</span>
    </a>
  );
}

/** Dev-only hint when number/ID missing in profile-config.ts */
function ChannelPending({ label }: { label: string }) {
  if (!import.meta.env.DEV) return null;

  return (
    <span style={pendingStyle}>
      <span>{label}</span>
      <span style={{ fontSize: "13px", fontWeight: 400 }}>— in profile-config.ts</span>
    </span>
  );
}

export function ContactChannels() {
  const wa = whatsappHref();
  const threema = threemaHref();
  const waLabel = whatsappLabel();

  return (
    <div style={{ fontFamily: FONT_FAMILY }}>
      <a
        href={`mailto:${SITE.email}`}
        style={{ ...linkStyle, fontSize: "18px", fontWeight: 700, marginBottom: "4px" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = BRAND_RED)}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#0d0d0d")}
      >
        {SITE.email}
        <span style={{ fontSize: "20px" }}>→</span>
      </a>

      <div style={{ marginTop: "28px" }}>
        <p
          style={{
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#999",
            marginBottom: "14px",
          }}
        >
          Alternativ
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            alignItems: "flex-start",
          }}
        >
          {isWhatsappConfigured() && wa && waLabel ? (
            <ChannelLink href={wa} label="WhatsApp" hint={waLabel} />
          ) : (
            <ChannelPending label="WhatsApp" />
          )}
          {isThreemaConfigured() && threema ? (
            <ChannelLink href={threema} label="Threema" hint={CONTACT_CHANNELS.threemaId} />
          ) : (
            <ChannelPending label="Threema" />
          )}
        </div>
        <p
          style={{
            fontSize: "13px",
            fontWeight: 400,
            color: "#999",
            marginTop: "14px",
            lineHeight: 1.5,
            maxWidth: "360px",
          }}
        >
          Auch per Messenger. Für Offerten und Verträge bitte zusätzlich per E-Mail.
        </p>
      </div>
    </div>
  );
}
