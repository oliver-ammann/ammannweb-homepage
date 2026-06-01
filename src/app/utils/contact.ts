import { SITE } from "../constants";

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export async function submitContactForm(data: ContactFormData): Promise<void> {
  const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(SITE.email)}`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      message: data.message,
      _subject: `Neue Anfrage von ${SITE.name}`,
      _template: "table",
    }),
  });

  if (!response.ok) {
    throw new Error("Formular konnte nicht gesendet werden.");
  }

  const result = (await response.json()) as { success?: string };
  if (result.success !== "true") {
    throw new Error("Formular konnte nicht gesendet werden.");
  }
}
