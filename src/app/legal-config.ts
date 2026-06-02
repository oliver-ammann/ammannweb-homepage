import { SITE } from "./constants";

/**
 * Legal entity details — update before go-live.
 * Send missing values to complete: owner name, street address, UID/MWST (if applicable).
 */
export const LEGAL = {
  brandName: "ammannweb",
  tagline: "Websites für Vereine & kleine Betriebe",
  /** z.B. Einzelunternehmen, GmbH */
  legalForm: "Einzelunternehmen",
  /** Vollständiger Name des Inhabers oder der vertretungsberechtigten Person */
  ownerName: "Oliver Ammann",
  street: "Schlössliweg 6",
  zip: "8500",
  city: "Frauenfeld",
  canton: "Thurgau",
  country: "Schweiz",
  email: SITE.email,
  website: SITE.url,
  /** Telefon optional, z.B. "+41 44 000 00 00" */
  phone: "" as string,
  /** UID-Nummer, z.B. "CHE-123.456.789" — leer lassen wenn nicht vorhanden */
  uid: "" as string,
  /** MWST-Nummer — leer lassen wenn nicht MWST-pflichtig */
  mwstNumber: "" as string,
  /** Handelsregister, z.B. "Handelsregister des Kantons Thurgau" — leer wenn nicht eingetragen */
  commercialRegister: "" as string,
} as const;

export function formatAddress(): string[] {
  return [LEGAL.street, `${LEGAL.zip} ${LEGAL.city}`, LEGAL.canton, LEGAL.country];
}

export function operatorLine(): string {
  return `${LEGAL.brandName} — ${LEGAL.tagline}`;
}
