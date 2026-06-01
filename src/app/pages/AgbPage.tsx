import { LegalLayout } from "../components/layout/LegalLayout";
import { LEGAL, operatorLine } from "../legal-config";

export function AgbPage() {
  return (
    <LegalLayout title="Allgemeine Geschäftsbedingungen (AGB)">
      <p>
        Stand: {new Date().toLocaleDateString("de-CH", { month: "long", year: "numeric" })}
      </p>
      <p>
        Diese Allgemeinen Geschäftsbedingungen (AGB) regeln die Geschäftsbeziehung zwischen{" "}
        <strong>{operatorLine()}</strong> ({LEGAL.legalForm}, nachfolgend «{LEGAL.brandName}»
        oder «wir») und unseren Kundinnen und Kunden («Sie»). Abweichende Bedingungen von
        Ihnen gelten nur, wenn wir ihnen ausdrücklich schriftlich zustimmen.
      </p>

      <h2>1. Leistungen</h2>
      <p>
        {LEGAL.brandName} erbringt Leistungen im Bereich Webdesign, Prototyping,
        Webentwicklung, technische Umsetzung, SEO-Grundlagen, CMS-Integration sowie — im
        Rahmen separater Vereinbarungen — laufende Wartung und Support (Retainer). Der
        konkrete Leistungsumfang ergibt sich aus der jeweiligen Offerte, dem
        Projektvertrag oder dem Retainer-Vertrag.
      </p>

      <h2>2. Angebot und Vertragsschluss</h2>
      <p>
        Offerten und Preisangaben auf der Website sind unverbindlich. Verbindlich ist
        ausschliesslich die schriftliche Offerte mit Gültigkeitsdatum oder der
        unterzeichnete Vertrag. Ein Vertrag kommt zustande, wenn Sie eine Offerte
        schriftlich (E-Mail genügt) annehmen oder wir mit der Leistungserbringung auf
        Grundlage Ihrer schriftlichen Beauftragung beginnen.
      </p>

      <h2>3. Preise und Zahlung</h2>
      <p>
        Sofern nicht anders vereinbart, gelten Fixpreise in Schweizer Franken (CHF),
        exklusive Mehrwertsteuer. Bei Projekten ist in der Regel ein Anzahlung von 50 %
        bei Auftragserteilung und 50 % bei Abnahme fällig, sofern in der Offerte nicht
        anders geregelt. Retainer-Leistungen werden monatlich im Voraus verrechnet.
      </p>
      <p>
        Rechnungen sind innert 10 Tagen netto zahlbar, sofern nicht anders vereinbart.
        Bei Zahlungsverzug sind wir berechtigt, Verzugszinsen von 5 % p.a. zu erheben und
        laufende Arbeiten bis zum Ausgleich auszusetzen.
      </p>

      <h2>4. Mitwirkungspflichten</h2>
      <p>
        Sie stellen uns rechtzeitig alle für die Projektdurchführung erforderlichen Inhalte,
        Freigaben und Zugänge zur Verfügung (Texte, Bilder, Logos, Domain, Hosting-Zugang
        etc.). Verzögerungen auf Ihrer Seite können Fristen verschieben. Zusätzlicher
        Aufwand ausserhalb des vereinbarten Umfangs wird nur nach vorheriger schriftlicher
        Offerte und zu einem Fixpreis erbracht — keine Stundenverrechnung.
      </p>

      <h2>5. Prototyp und Abnahme</h2>
      <p>
        Sofern vereinbart, liefern wir einen klickbaren Prototypen zur Freigabe. Nach
        Ihrer schriftlichen Freigabe beginnt die technische Umsetzung. Die Website gilt als
        abgenommen, wenn Sie innerhalb von 10 Werktagen nach Lieferung keine begründeten
        Mängel rügen oder die Website produktiv einsetzen.
      </p>

      <h2>6. Änderungen und Zusatzleistungen</h2>
      <p>
        Leistungen ausserhalb des vereinbarten Umfangs (Change Requests) werden nur nach
        vorheriger schriftlicher Offerte mit Fixpreis und Ihrer Freigabe ausgeführt.
      </p>

      <h2>7. Nutzungsrechte und Urheberrecht</h2>
      <p>
        Bis zur vollständigen Bezahlung verbleiben sämtliche Rechte an Konzepten, Designs,
        Quellcode und sonstigen Arbeitsergebnissen bei {LEGAL.brandName}. Mit vollständiger
        Zahlung erhalten Sie das einfache, zeitlich und räumlich unbeschränkte Nutzungsrecht
        für den vereinbarten Zweck. Der Quellcode und Design-Dateien werden Ihnen in dem
        vereinbarten Umfang übergeben, sofern in der Offerte enthalten.
      </p>
      <p>
        Von Ihnen gelieferte Inhalte (Texte, Bilder, Marken) versichern Sie, dass Sie über
        die erforderlichen Rechte verfügen. {LEGAL.brandName} darf abgeschlossene Projekte
        als Referenz nennen und zeigen, sofern Sie dem nicht ausdrücklich widersprechen.
      </p>

      <h2>8. Hosting, Domains und Drittdienste</h2>
      <p>
        Hosting, Domain-Registrierung, E-Mail, CMS-Lizenzen oder API-Dienste Dritter sind
        — sofern nicht ausdrücklich in der Offerte enthalten — von Ihnen zu bestellen und
        zu bezahlen. Wir unterstützen bei Einrichtung und Konfiguration im Rahmen des
        Projekts oder Retainers.
      </p>

      <h2>9. Retainer</h2>
      <p>
        Retainer-Leistungen werden zum auf der Website publizierten Monatspreis
        abgerechnet, sofern in der Offerte nicht anders vereinbart. Massgeblich ist der
        Preis zum Zeitpunkt des Vertragsschlusses. Verträge haben eine
        Mindestlaufzeit von 3 Monaten und verlängern sich jeweils um einen weiteren Monat,
        sofern nicht mit einer Frist von 30 Tagen zum Monatsende gekündigt wird. Der
        konkrete Leistungsumfang (technische Wartung, Hosting, CMS-Betrieb) ergibt sich aus
        der Offerte. Inhaltliche Pflege durch uns ist nicht Bestandteil des Retainers, sofern
        nicht separat und schriftlich vereinbart. Weitere Leistungen nur nach Fixpreis-Offerte.
      </p>

      <h2>10. Gewährleistung</h2>
      <p>
        Wir gewährleisten die vertragsgemässe Beschaffenheit der gelieferten Leistungen.
        Mängel sind innert 10 Werktagen nach Abnahme schriftlich zu rügen. Wir beheben
        berechtigte Mängel innerhalb angemessener Frist nach unserer Wahl durch Nachbesserung
        oder Ersatzlieferung. Weitere Ansprüche sind ausgeschlossen, soweit gesetzlich
        zulässig.
      </p>

      <h2>11. Haftung</h2>
      <p>
        Wir haften unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie für Personenschäden.
        Bei leichter Fahrlässigkeit haften wir nur bei Verletzung wesentlicher
        Vertragspflichten, beschränkt auf den vorhersehbaren, typischen Schaden, maximal
        jedoch auf den Betrag der letzten 12 Monate bezahlten Honorare des betreffenden
        Vertrags. Die Haftung für indirekte Schäden, entgangenen Gewinn oder
        Datenverlust ist ausgeschlossen, soweit gesetzlich zulässig.
      </p>

      <h2>12. Höhere Gewalt</h2>
      <p>
        Bei Ereignissen ausserhalb unseres Einflussbereichs (z.&nbsp;B. Ausfall von
        Infrastruktur, Naturereignisse, behördliche Massnahmen) verlängern sich Fristen
        angemessen; weitergehende Ansprüche sind ausgeschlossen.
      </p>

      <h2>13. Vertraulichkeit</h2>
      <p>
        Beide Parteien behandeln nicht öffentliche Informationen der jeweils anderen Partei
        vertraulich und verwenden sie nur zur Vertragserfüllung.
      </p>

      <h2>14. Schlussbestimmungen</h2>
      <p>
        Es gilt schweizerisches Recht unter Ausschluss des Kollisionsrechts und des
        Wiener Kaufrechts (CISG). Gerichtsstand ist — soweit zulässig — Frauenfeld, Schweiz.
        Sollte eine Bestimmung unwirksam sein, bleibt der Vertrag im Übrigen wirksam.
      </p>
      <p>
        Fragen zu diesen AGB:{" "}
        <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>
      </p>
    </LegalLayout>
  );
}
