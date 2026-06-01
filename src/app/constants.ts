export const BRAND_RED = "#D4621A";
export const FONT_FAMILY = "'DM Sans', system-ui, sans-serif";

/** Buttons that scroll to / lead to the contact section */
export const CTA_LABEL = "Anfrage senden";

/** Contact form submit button */
export const FORM_SUBMIT_LABEL = "Nachricht senden";

export const SITE = {
  name: "ammannweb",
  email: import.meta.env.VITE_CONTACT_EMAIL ?? "contact@ammannweb.ch",
  url: import.meta.env.VITE_SITE_URL ?? "https://ammannweb.ch",
  location: "Frauenfeld, Thurgau, Schweiz",
} as const;

export const NAV_LINKS = [
  { label: "Preise", id: "pricing" },
  { label: "Ablauf", id: "process" },
  { label: "Leistungen", id: "services" },
] as const;
