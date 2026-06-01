import { LegalLayout } from "../components/layout/LegalLayout";
import { SITE } from "../constants";

export function DatenschutzPage() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      <p>
        Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Diese Datenschutzerklärung
        informiert Sie darüber, welche Daten wir erheben und wie wir sie verwenden.
      </p>

      <h2>Verantwortliche Stelle</h2>
      <p>
        ammannweb
        <br />
        {SITE.location}
        <br />
        E-Mail: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </p>

      <h2>Erhobene Daten</h2>
      <p>Wir erheben personenbezogene Daten nur, wenn Sie uns diese freiwillig mitteilen:</p>
      <ul>
        <li>Name und E-Mail-Adresse über das Kontaktformular</li>
        <li>Inhalt Ihrer Nachricht</li>
        <li>Technische Zugriffsdaten (IP-Adresse, Browser, Zeitpunkt) durch den Hosting-Anbieter</li>
      </ul>

      <h2>Kontaktformular</h2>
      <p>
        Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben zur
        Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Die
        Übermittlung erfolgt über einen externen Formular-Dienst (FormSubmit). Bitte senden Sie
        keine vertraulichen Gesundheits- oder Finanzdaten über das Formular.
      </p>

      <h2>Cookies & Analyse</h2>
      <p>
        Diese Website verwendet standardmässig keine Tracking-Cookies oder Analyse-Tools. Sollten
        wir künftig Dienste wie Google Analytics einsetzen, werden wir diese Erklärung
        entsprechend aktualisieren.
      </p>

      <h2>Externe Dienste</h2>
      <ul>
        <li>Google Fonts (Schriftarten) — Daten können in die USA übertragen werden</li>
        <li>Unsplash (Portfolio-Bild) — beim Laden der Seite</li>
        <li>FormSubmit (Kontaktformular)</li>
      </ul>

      <h2>Ihre Rechte</h2>
      <p>
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der
        Verarbeitung Ihrer personenbezogenen Daten. Wenden Sie sich dazu an{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>

      <h2>Hosting</h2>
      <p>
        Diese Website wird auf Servern in der Schweiz bzw. der EU gehostet. Der Hosting-Anbieter
        verarbeitet Zugriffsdaten in unserem Auftrag.
      </p>

      <p style={{ fontSize: "13px", color: "#999", marginTop: "32px" }}>
        Stand: {new Date().getFullYear()}. Bitte lassen Sie diese Erklärung von einem
        Rechtsberater prüfen, bevor Sie sie produktiv verwenden.
      </p>
    </LegalLayout>
  );
}
