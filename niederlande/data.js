/* Quick-Tools · Niederlande – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: 'niederlande',
  name: 'Niederlande',
  flag: '🇳🇱',
  tz: 'Europe/Amsterdam',
  currency: null, // Euro → kein Rechner, Startseite = Phrasen

  glance: {"plug": "C / F", "volt": 230, "adapter": "nein", "drive": "R", "water": "Trinkbar", "tip": "Aufrunden", "dial": "+31"},
  taxi: {"local": "Wilt u mij naar dit adres brengen, alstublieft?", "phonetic": "wilt ü mei naar dit a-DRES BREN-gen"},

  phrases: [
    { title: '🇳🇱 Niederländisch', lang: 'nl-NL', items: [
      { de: 'Hallo / Guten Tag', local: 'Hallo / Goedendag', phonetic: 'HA-lo / CHU-de-dach' },
      { de: 'Danke schön', local: 'Dank u wel', phonetic: 'dank ü WEL' },
      { de: 'Entschuldigung', local: 'Pardon', phonetic: 'par-DON' },
      { de: 'Wie viel kostet das?', local: 'Hoeveel kost dit?', phonetic: 'hu-WEEL kost dit' },
      { de: 'Die Rechnung, bitte', local: 'Mag ik de rekening, alstublieft?', phonetic: 'mach ik de RE-ke-ning, als-tü-BLIEFT' },
      { de: 'Sprechen Sie Englisch?', local: 'Spreekt u Engels?', phonetic: 'spreekt ü ENG-els' },
      { de: 'Wo ist das Krankenhaus?', local: 'Waar is het ziekenhuis?', phonetic: 'waar is et SIE-ken-höis' },
      { de: 'Ein großes Bier bitte', local: 'Een groot bier, alstublieft', phonetic: 'en chroot bier, als-tü-BLIEFT' },
      { de: 'Ich bin Vegetarier/in', local: 'Ik ben vegetariër', phonetic: 'ik ben we-che-TA-ri-er' },
      { de: 'Ich esse kein Fleisch und Fisch, aber Eier schon', local: 'Ik eet geen vlees en vis, maar wel eieren', phonetic: 'ik eet cheen flees en fis, maar wel EI-e-ren' },
      { de: 'Das Essen war sehr lecker', local: 'Het eten was heerlijk!', phonetic: 'et E-ten was HEER-lek' },
      { de: 'Hilfe! Es ist ein Notfall!', local: 'Help! Het is een noodgeval!', phonetic: 'help! et is en NOOT-che-fal' }
    ]}
  ],

  emergency: [
    ['112', 'Notruf (Polizei, Rettung, Feuerwehr)'],
    ['0900 8844', 'Polizei (nicht dringend)']
  ],
  embassy: {
    title: 'Deutsche Botschaft Den Haag',
    address: ['Groot Hertoginnelaan 18-20', '2517 EG Den Haag'],
    phone: '+31 70 342 06 00',
    emergency: '+31 6 22 45 98 41', emergencyNote: '(Pässe & Visa: Generalkonsulat Amsterdam)'
  },
  aaUrl: 'https://www.auswaertiges-amt.de/de/service/laender/niederlande-node',

  rules: [
    ['Radwege', 'Radwege (rot markiert) sind kein Gehweg – Radfahrer haben oft Vorfahrt und klingeln nicht lange.'],
    ['Bezahlen', 'Viele Läden und Cafés nehmen nur Karte (PIN), manche gar kein Bargeld.'],
    ['Coffeeshops', 'Cannabis ist nur geduldet, nicht legal: kein Konsum auf der Straße, nichts über die Grenze mitnehmen. In einigen Städten nur für Einwohner.'],
    ['Amsterdam', 'Im Rotlichtviertel keine Fotos von Personen, Trinken auf der Straße ist in der Innenstadt verboten.'],
    ['Strand', 'Strömungen an der Nordsee beachten, nur an bewachten Stellen baden.']
  ],
  sim: [
    ['EU-Roaming', 'Mit deutschem Tarif ohne Aufpreis surfen und telefonieren („Roam like at home“).'],
    ['Alternative', 'eSIM (z. B. Airalo) oder Prepaid-SIM von KPN, Vodafone oder Odido.']
  ],
  apps: [
    ['NS', 'Zugfahrpläne und Tickets; in Bahn, Bus und Tram einfach mit Kreditkarte ein- und auschecken (OVpay).'],
    ['9292', 'Fahrplanauskunft für alle Öffis.'],
    ['Google Maps & Translate', 'Offline-Karten herunterladen und Übersetzer parat haben.']
  ],

  places: [
    ['Amsterdam', 52.3676, 4.9041], ['Rotterdam', 51.9244, 4.4777], ['Den Haag', 52.0705, 4.3007],
    ['Utrecht', 52.0907, 5.1214], ['Texel', 53.0549, 4.7977]
  ]
};
