import { LEGAL } from "./legal-config";

/**
 * Personal profile — shown on the contact section.
 * Add your photo as public/profile.jpg (square, min. 400×400 px works well).
 */
export const PROFILE = {
  /** Shown under your name */
  role: "Gründer · ammannweb",
  /** First-person intro (2–4 sentences) */
  bio: "Ich baue Websites für Vereine und kleine Betriebe — aus Frauenfeld, auch remote. Kein Agentur-Team, kein Junior, der Sie vergisst, kein Account Manager, der nur weiterleitet. Sie schreiben mir, ich antworte. Wenn ich grad nicht auf einem Berg bin, noch am gleichen Tag.",
  /**
   * Path to photo in /public, e.g. "/profile.jpg".
   * Leave empty until you have a photo — then initials are shown instead.
   */
  photoSrc: "" as string,
  /**
   * WhatsApp: country code + number, no + or spaces (e.g. "41791234567").
   * Also overridable via VITE_WHATSAPP_NUMBER in .env
   */
  whatsappNumber: "" as string,
  /** Threema ID, 8 characters (e.g. "ABCD1234"). Also overridable via VITE_THREEMA_ID in .env */
  threemaId: "" as string,
} as const;

export function displayName(): string {
  return LEGAL.ownerName;
}

export function profileInitials(): string {
  const name = LEGAL.ownerName.trim();
  if (!name || name.startsWith("[")) return "AW";

  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
