import { PROFILE } from "./profile-config";

function fromEnv(key: keyof ImportMetaEnv): string {
  const value = import.meta.env[key];
  return typeof value === "string" ? value : "";
}

/** Env vars override profile-config (useful on Vercel). */
function whatsappRaw(): string {
  return fromEnv("VITE_WHATSAPP_NUMBER") || PROFILE.whatsappNumber;
}

function threemaRaw(): string {
  return fromEnv("VITE_THREEMA_ID") || PROFILE.threemaId;
}

export const CONTACT_CHANNELS = {
  get whatsappNumber() {
    return whatsappRaw().replace(/\D/g, "");
  },
  get threemaId() {
    return threemaRaw().trim().toUpperCase().replace(/[^A-Z0-9]/g, "");
  },
};

export function whatsappHref(): string | null {
  const n = CONTACT_CHANNELS.whatsappNumber;
  if (n.length < 10) return null;
  return `https://wa.me/${n}`;
}

export function threemaHref(): string | null {
  const id = CONTACT_CHANNELS.threemaId;
  if (id.length < 8) return null;
  return `https://threema.id/${id}`;
}

/** Display format for Swiss numbers, e.g. +41 79 123 45 67 */
export function whatsappLabel(): string | null {
  const n = CONTACT_CHANNELS.whatsappNumber;
  if (!whatsappHref()) return null;
  if (n.startsWith("41") && n.length >= 11) {
    const rest = n.slice(2);
    return `+41 ${rest.slice(0, 2)} ${rest.slice(2, 5)} ${rest.slice(5, 7)} ${rest.slice(7)}`.trim();
  }
  return `+${n}`;
}

export function isWhatsappConfigured(): boolean {
  return Boolean(whatsappHref());
}

export function isThreemaConfigured(): boolean {
  return Boolean(threemaHref());
}
