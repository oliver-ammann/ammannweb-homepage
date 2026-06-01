import { LegalLayout } from "../components/layout/LegalLayout";
import { LEGAL, formatAddress, operatorLine } from "../legal-config";

export function ImpressumPage() {
  const addressLines = formatAddress();

  return (
    <LegalLayout title="Impressum">
      <p>
        Angaben gemäss Art. 3 lit. s UWG (Schweiz) sowie den Grundsätzen der
        Transparenz gegenüber Website-Besucherinnen und -besuchern.
      </p>

      <h2>Anbieterin / Anbieter</h2>
      <p>
        <strong>{operatorLine()}</strong>
        <br />
        {LEGAL.legalForm}
        <br />
        Inhaber: {LEGAL.ownerName}
      </p>
      <p>
        {addressLines.map((line) => (
          <span key={line}>
            {line}
            <br />
          </span>
        ))}
      </p>

      <h2>Kontakt</h2>
      <p>
        E-Mail:{" "}
        <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>
        {LEGAL.phone ? (
          <>
            <br />
            Telefon: <a href={`tel:${LEGAL.phone.replace(/\s/g, "")}`}>{LEGAL.phone}</a>
          </>
        ) : null}
        <br />
        Website: <a href={LEGAL.website}>{LEGAL.website}</a>
      </p>

      {(LEGAL.uid || LEGAL.mwstNumber || LEGAL.commercialRegister) && (
        <>
          <h2>Handels- und Steuerregister</h2>
          <p>
            {LEGAL.commercialRegister && (
              <>
                {LEGAL.commercialRegister}
                <br />
              </>
            )}
            {LEGAL.uid && (
              <>
                UID: {LEGAL.uid}
                <br />
              </>
            )}
            {LEGAL.mwstNumber && <>MWST-Nummer: {LEGAL.mwstNumber}</>}
          </p>
        </>
      )}

      <h2>Tätigkeit</h2>
      <p>
        Konzeption, Design und Umsetzung von Websites für Sportvereine, Vereine, Verbände
        und kleine Unternehmen in der Schweiz. Leistungen umfassen Webdesign, Prototyping,
        Umsetzung, CMS-Einrichtung, SEO-Grundlagen, Hosting-Koordination sowie optionale
        technische Wartung im Rahmen von Retainer-Verträgen. Inhalte pflegen die Kundinnen
        und Kunden selbst im CMS. Projekte werden aus Frauenfeld (Thurgau) und remote
        erbracht.
      </p>

      <h2>Verantwortlich für den Inhalt dieser Website</h2>
      <p>
        {LEGAL.ownerName}
        <br />
        {LEGAL.email}
      </p>

      <h2>Haftungsausschluss</h2>
      <p>
        Die Inhalte dieser Website werden mit grösster Sorgfalt erstellt. Dennoch kann
        keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der Angaben
        übernommen werden. Haftungsansprüche gegen {LEGAL.brandName} wegen materieller
        oder immaterieller Schäden, die aus dem Zugriff auf oder der Nutzung bzw.
        Nichtnutzung veröffentlichter Informationen entstehen, sind ausgeschlossen,
        soweit gesetzlich zulässig.
      </p>
      <p>
        Angebote und Preisangaben auf dieser Website sind unverbindlich, sofern nicht
        ausdrücklich anders vereinbart. Verbindlich sind ausschliesslich individuelle
        Offerten und schriftliche Verträge.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Diese Website kann Verknüpfungen zu externen Websites Dritter enthalten. Für
        deren Inhalte ist stets der jeweilige Anbieter verantwortlich. Bei Bekanntwerden
        von Rechtsverletzungen werden derartige Links umgehend entfernt.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die auf dieser Website veröffentlichten Inhalte (Texte, Layout, Grafiken, Code)
        unterliegen dem schweizerischen Urheberrecht. Jede Verwertung ausserhalb der
        gesetzlich zulässigen Grenzen bedarf der vorherigen schriftlichen Zustimmung von{" "}
        {LEGAL.brandName}.
      </p>
      <p>
        Portfolio- und Referenzarbeiten werden mit Zustimmung der jeweiligen
        Auftraggeberinnen und Auftraggeber gezeigt. Marken- und Produktnamen Dritter
        gehören den jeweiligen Rechteinhabern.
      </p>

      <h2>Streitbeilegung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
        bereit:{" "}
        <a
          href="https://ec.europa.eu/consumers/odr"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://ec.europa.eu/consumers/odr
        </a>
        . Wir sind weder verpflichtet noch grundsätzlich bereit, an einem
        Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </LegalLayout>
  );
}
