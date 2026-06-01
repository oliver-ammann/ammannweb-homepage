import { LegalLayout } from "../components/layout/LegalLayout";
import { SITE } from "../constants";

export function ImpressumPage() {
  return (
    <LegalLayout title="Impressum">
      <h2>Verantwortlich für den Inhalt</h2>
      <p>
        ammannweb
        <br />
        {SITE.location}
        <br />
        E-Mail: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </p>

      <h2>Haftungsausschluss</h2>
      <p>
        Der Autor übernimmt keine Gewähr für die Richtigkeit, Genauigkeit, Aktualität,
        Zuverlässigkeit und Vollständigkeit der Informationen. Haftungsansprüche gegen den
        Autor wegen Schäden materieller oder immaterieller Art, die aus dem Zugriff oder der
        Nutzung bzw. Nichtnutzung der veröffentlichten Informationen entstanden sind, werden
        ausgeschlossen.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres
        Verantwortungsbereichs. Jegliche Haftung für solche Webseiten wird abgelehnt.
      </p>

      <h2>Urheberrechte</h2>
      <p>
        Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien
        auf dieser Website gehören ausschliesslich ammannweb oder den speziell genannten
        Rechteinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche
        Zustimmung des Urheberrechtsträgers im Voraus einzuholen.
      </p>

      <p style={{ fontSize: "13px", color: "#999", marginTop: "32px" }}>
        Bitte passen Sie diese Angaben mit Ihren vollständigen Firmendaten (UID, Handelsregister,
        Vertretungsberechtigte) an, bevor Sie die Website produktiv schalten.
      </p>
    </LegalLayout>
  );
}
