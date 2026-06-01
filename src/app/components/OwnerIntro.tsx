import { useState } from "react";
import { BRAND_RED, FONT_FAMILY } from "../constants";
import { PROFILE, displayName, profileInitials } from "../profile-config";

export function OwnerIntro() {
  const [photoFailed, setPhotoFailed] = useState(false);
  const showPhoto = Boolean(PROFILE.photoSrc) && !photoFailed;
  const name = displayName();
  const showPlaceholderName = name.startsWith("[");

  return (
    <div
      style={{
        display: "flex",
        gap: "24px",
        alignItems: "flex-start",
        marginBottom: "40px",
        paddingBottom: "40px",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          width: "96px",
          height: "96px",
          flexShrink: 0,
          borderRadius: "50%",
          overflow: "hidden",
          background: "#0d0d0d",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {showPhoto ? (
          <img
            src={PROFILE.photoSrc}
            alt={showPlaceholderName ? "Profilfoto" : `Profilfoto von ${name}`}
            width={96}
            height={96}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            onError={() => setPhotoFailed(true)}
          />
        ) : (
          <span
            style={{
              fontFamily: FONT_FAMILY,
              fontSize: "28px",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "-0.02em",
            }}
          >
            {profileInitials()}
          </span>
        )}
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <p
          style={{
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: BRAND_RED,
            marginBottom: "8px",
          }}
        >
          Ihr Ansprechpartner
        </p>
        <p
          style={{
            fontFamily: FONT_FAMILY,
            fontSize: "22px",
            fontWeight: 800,
            color: "#0d0d0d",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
            margin: "0 0 4px",
          }}
        >
          {showPlaceholderName ? "Ihr Name hier" : name}
        </p>
        <p
          style={{
            fontSize: "14px",
            fontWeight: 500,
            color: "#777",
            margin: "0 0 14px",
          }}
        >
          {PROFILE.role}
        </p>
        <p
          style={{
            fontSize: "15px",
            fontWeight: 400,
            lineHeight: 1.65,
            color: "#555",
            margin: 0,
            maxWidth: "400px",
          }}
        >
          {PROFILE.bio}
        </p>
      </div>
    </div>
  );
}
