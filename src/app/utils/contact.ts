import { SITE } from "../constants";

export type ContactFormData = {
  name: string;
  organization: string;
  email: string;
  message: string;
};

type FormSubmitResponse = {
  success?: string | boolean;
  message?: string;
};

function isFormSubmitSuccess(value: FormSubmitResponse["success"]): boolean {
  return value === true || value === "true";
}

function userFacingError(data: FormSubmitResponse): string {
  const apiMessage = data.message ?? "";

  if (/activation/i.test(apiMessage)) {
    return (
      "Das Kontaktformular wird gerade eingerichtet. " +
      `Bitte schreiben Sie mir vorerst direkt an ${SITE.email}.`
    );
  }

  return (
    "Die Anfrage konnte nicht gesendet werden. " +
    `Bitte schreiben Sie mir direkt an ${SITE.email}.`
  );
}

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
      organization: data.organization || "—",
      email: data.email,
      message: data.message,
      _replyto: data.email,
      _subject: `Neue Anfrage von ${SITE.name}`,
      _template: "table",
      _captcha: "false",
    }),
  });

  let result: FormSubmitResponse;
  try {
    result = (await response.json()) as FormSubmitResponse;
  } catch {
    throw new Error(userFacingError({}));
  }

  if (!response.ok || !isFormSubmitSuccess(result.success)) {
    throw new Error(userFacingError(result));
  }
}
