import { LegalLayout } from "../components/layout/LegalLayout";
import { LEGAL, formatAddress, operatorLine } from "../legal-config";

export function DatenschutzPage() {
  const addressLines = formatAddress();

  return (
    <LegalLayout title="Datenschutzerklärung">
      <p>
        Stand: {new Date().toLocaleDateString("de-CH", { month: "long", year: "numeric" })}
      </p>
      <p>
        Wir bearbeiten Personendaten im Einklang mit dem schweizerischen Bundesgesetz über
        den Datenschutz (nDSG) und — soweit anwendbar — der Datenschutz-Grundverordnung
        (DSGVO) der EU. Diese Erklärung informiert Sie über Art, Umfang und Zweck der
        Bearbeitung beim Besuch von {LEGAL.website} und bei der Kontaktaufnahme.
      </p>

      <h2>1. Verantwortliche Stelle</h2>
      <p>
        <strong>{operatorLine()}</strong>
        <br />
        {LEGAL.ownerName}
        <br />
        {addressLines.join(", ")}
        <br />
        E-Mail: <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>
      </p>

      <h2>2. Geltungsbereich</h2>
      <p>
        Diese Datenschutzerklärung gilt für die Website {LEGAL.website} sowie für die
        Bearbeitung von Personendaten im Rahmen von Anfragen über das Kontaktformular,
        per E-Mail oder im Vorfeld einer möglichen Zusammenarbeit.
      </p>

      <h2>3. Welche Daten wir bearbeiten</h2>
      <p>Je nach Nutzung können folgende Kategorien anfallen:</p>
      <ul>
        <li>
          <strong>Kontaktdaten:</strong> Name, Verein oder Firma (optional), E-Mail-Adresse,
          Inhalt Ihrer Nachricht (Kontaktformular oder E-Mail)
        </li>
        <li>
          <strong>Technische Daten:</strong> IP-Adresse, Datum und Uhrzeit des Zugriffs,
          Browsertyp, Betriebssystem, Referrer-URL, aufgerufene Seiten (Server-Logfiles
          des Hosting-Anbieters)
        </li>
        <li>
          <strong>Vertrags- und Projektbezogene Daten:</strong> nur im Rahmen einer
          bestehenden oder angefragten Geschäftsbeziehung (z.&nbsp;B. Firmenname,
          Rechnungsadresse, Projektbriefings)
        </li>
      </ul>
      <p>
        Wir erheben keine besonders schützenswerten Personendaten (z.&nbsp;B.
        Gesundheitsdaten) über diese Website. Bitte übermitteln Sie solche Informationen
        nicht unaufgefordert.
      </p>

      <h2>4. Zwecke und Rechtsgrundlagen</h2>
      <ul>
        <li>
          <strong>Betrieb und Sicherheit der Website</strong> — berechtigtes Interesse an
          einem stabilen, sicheren Online-Auftritt (nDSG Art. 31 Abs. 1; ggf. DSGVO Art. 6
          Abs. 1 lit. f)
        </li>
        <li>
          <strong>Beantwortung von Anfragen</strong> — Vertragsanbahnung bzw. berechtigtes
          Interesse an der Kommunikation mit Interessentinnen und Interessenten
        </li>
        <li>
          <strong>Vertragserfüllung</strong> — Durchführung von Webdesign- und
          Entwicklungsprojekten sowie Retainer-Leistungen
        </li>
        <li>
          <strong>Gesetzliche Pflichten</strong> — z.&nbsp;B. Aufbewahrung von
          Geschäftsunterlagen gemäss OR/AO
        </li>
      </ul>

      <h2>5. Kontaktformular</h2>
      <p>
        Wenn Sie das Kontaktformular nutzen, werden Ihre Angaben zur Bearbeitung Ihrer
        Anfrage verwendet. Die Übermittlung erfolgt über den Dienst{" "}
        <strong>FormSubmit</strong> (FormSubmit LLC, USA). Dabei können Daten in die USA
        übermittelt werden. Wir wählen diesen Dienst, um Anfragen zuverlässig an{" "}
        {LEGAL.email} zuzustellen. Speichern Sie keine vertraulichen oder besonders
        sensiblen Informationen im Formular.
      </p>
      <p>
        Nach erfolgreicher Zustellung werden Anfragen in unserem E-Mail-Postfach
        bearbeitet und nach Abschluss der Korrespondenz gelöscht oder archiviert, sofern
        keine gesetzliche Aufbewahrungspflicht besteht.
      </p>

      <h2>6. Hosting</h2>
      <p>
        Diese Website wird bei <strong>Vercel Inc.</strong> (USA) gehostet. Beim Aufruf
        der Seiten werden technische Zugriffsdaten auf Servern verarbeitet, die je nach
        Konfiguration in der EU, den USA oder anderen Regionen stehen können. Vercel
        verarbeitet Daten in unserem Auftrag als Auftragsbearbeiter.
      </p>

      <h2>7. Schriftarten</h2>
      <p>
        Die auf dieser Website verwendeten Schriftarten werden zusammen mit der Website
        ausgeliefert (Self-Hosting). Beim Laden der Seite werden dafür keine Verbindungen
        zu externen Font-CDNs aufgebaut.
      </p>

      <h2>8. Cookies und Analyse</h2>
      <p>
        Diese Website setzt keine Marketing- oder Tracking-Cookies ein und verwendet keine
        Analyse-Tools wie Google Analytics. Technisch notwendige Cookies oder
        Speichereinträge des Browsers können für den Betrieb der Seite anfallen. Sollten
        wir künftig weitere Dienste einsetzen, wird diese Erklärung angepasst.
      </p>

      <h2>9. Aufbewahrungsdauer</h2>
      <p>
        Kontaktanfragen ohne Vertragsabschluss werden in der Regel innerhalb von 12
        Monaten gelöscht, sofern keine längere Aufbewahrung erforderlich ist.
        Vertrags- und Rechnungsdaten werden gemäss den gesetzlichen Fristen (in der Regel
        10 Jahre) aufbewahrt. Server-Logfiles beim Hosting-Anbieter werden nach dessen
        Richtlinien rotiert (typischerweise wenige Wochen bis Monate).
      </p>

      <h2>10. Weitergabe an Dritte</h2>
      <p>
        Personendaten werden nur weitergegeben, wenn dies zur Vertragserfüllung
        erforderlich ist (z.&nbsp;B. Hosting, E-Mail, Zahlungsabwicklung), wir gesetzlich
        dazu verpflichtet sind, oder Sie eingewilligt haben. Eine Weitergabe zu
        Werbezwecken findet nicht statt.
      </p>

      <h2>11. Datenübermittlung ins Ausland</h2>
      <p>
        Durch FormSubmit und Vercel können Personendaten in Länder ohne
        angemessenes Datenschutzniveau (insbesondere USA) gelangen. Soweit erforderlich,
        stützen wir uns auf geeignete Garantien (z.&nbsp;B. Standardvertragsklauseln) oder
        Ihre Einwilligung im Rahmen der Kontaktaufnahme.
      </p>

      <h2>12. Ihre Rechte</h2>
      <p>Sie haben insbesondere folgende Rechte:</p>
      <ul>
        <li>Auskunft über die bearbeiteten Personendaten</li>
        <li>Berichtigung unrichtiger Daten</li>
        <li>Löschung oder Einschränkung der Bearbeitung</li>
        <li>Datenherausgabe in einem gängigen elektronischen Format (Datenportabilität)</li>
        <li>Widerspruch gegen Bearbeitungen aufgrund berechtigten Interesses</li>
        <li>Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft</li>
      </ul>
      <p>
        Anfragen richten Sie an{" "}
        <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>. Wir beantworten berechtigte
        Gesuche in der Regel innerhalb von 30 Tagen.
      </p>

      <h2>13. Beschwerderecht</h2>
      <p>
        Sie können eine Beschwerde beim Eidgenössischen Datenschutz- und
        Öffentlichkeitsbeauftragten (EDÖB) einreichen:{" "}
        <a href="https://www.edoeb.admin.ch" target="_blank" rel="noopener noreferrer">
          www.edoeb.admin.ch
        </a>
        . Betroffene in der EU können sich zusätzlich an die zuständige Aufsichtsbehörde
        ihres Wohnsitzes wenden.
      </p>

      <h2>14. Datensicherheit</h2>
      <p>
        Wir treffen angemessene technische und organisatorische Massnahmen (z.&nbsp;B.
        TLS-Verschlüsselung, Zugangsbeschränkungen, sichere Passwörter), um Personendaten
        vor unbefugtem Zugriff, Verlust oder Missbrauch zu schützen.
      </p>

      <h2>15. Änderungen</h2>
      <p>
        Wir können diese Datenschutzerklärung bei Bedarf anpassen. Die jeweils aktuelle
        Fassung ist auf dieser Seite abrufbar.
      </p>
    </LegalLayout>
  );
}
