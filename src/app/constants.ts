export const BRAND_RED = "#D4621A";
export const FONT_FAMILY = "'Source Sans 3', sans-serif";

export const SITE = {
  name: "ammannweb",
  email: import.meta.env.VITE_CONTACT_EMAIL ?? "hallo@ammannweb.ch",
  url: import.meta.env.VITE_SITE_URL ?? "https://ammannweb.ch",
  location: "Zürich, Schweiz",
} as const;

export const NAV_LINKS = [
  { label: "Leistungen", id: "services" },
  { label: "Preise", id: "pricing" },
  { label: "Portfolio", id: "portfolio" },
] as const;
