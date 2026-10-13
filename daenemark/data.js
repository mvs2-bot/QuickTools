/* Quick-Tools · Dänemark – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: 'daenemark',
  name: 'Dänemark',
  flag: '🇩🇰',
  tz: 'Europe/Copenhagen',
  currency: { code: 'DKK', symbol: 'kr', name: 'Dänische Krone' },

  glance: {"plug": "C / F / K", "volt": 230, "adapter": "nein", "drive": "R", "water": "Trinkbar", "tip": "Nicht üblich", "dial": "+45"},
  taxi: {"local": "Vil du køre mig til denne adresse?", "phonetic": "wil du KÖ-re mai til DEN-ne a-DRES-se"},

  phrases: [
    { title: '🇩🇰 Dänisch', lang: 'da-DK', items: [
      { de: 'Hallo', local: 'Hej', phonetic: 'hai' },
      { de: 'Danke schön', local: 'Mange tak', phonetic: 'MANG-e tak' },
      { de: 'Entschuldigung', local: 'Undskyld', phonetic: 'ON-skül' },
      { de: 'Wie viel kostet das?', local: 'Hvad koster det?', phonetic: 'wa KOS-ter de' },
      { de: 'Die Rechnung, bitte', local: 'Må jeg bede om regningen?', phonetic: 'mo jai BE om RAI-ning-en' },
      { de: 'Sprechen Sie Englisch?', local: 'Taler du engelsk?', phonetic: 'TA-ler du ENG-elsk' },
      { de: 'Wo ist das Krankenhaus?', local: 'Hvor er hospitalet?', phonetic: 'wor är hos-pi-TA-let' },
      { de: 'Ein großes Bier bitte', local: 'En stor øl, tak', phonetic: 'en stor öl, tak' },
      { de: 'Ich bin Vegetarier/in', local: 'Jeg er vegetar', phonetic: 'jai är we-ge-TAR' },
      { de: 'Ich esse kein Fleisch und Fisch, aber Eier schon', local: 'Jeg spiser ikke kød eller fisk, men gerne æg', phonetic: 'jai SPI-ser IK-ke köd EL-ler fisk, men GER-ne äg' },
      { de: 'Das Essen war sehr lecker', local: 'Maden var virkelig lækker!', phonetic: 'MA-den war WIR-ke-li LÄK-ker' },
      { de: 'Hilfe! Es ist ein Notfall!', local: 'Hjælp! Det er en nødsituation!', phonetic: 'jelp! de är en NÖD-si-tu-a-schon' }
    ]}
  ],

  emergency: [
    ['112', 'Notruf (Polizei, Rettung, Feuerwehr)'],
    ['114', 'Polizei (nicht dringend)'],
    ['1813', 'Akuttelefon Kopenhagen-Region (nicht lebensbedrohlich)']
  ],
  embassy: {
    title: 'Deutsche Botschaft Kopenhagen',
    address: ['Portland Towers, Göteborg Plads 1', '2150 Nordhavn (Kopenhagen)'],
    phone: '+45 35 45 99 00',
    emergency: '+45 40 17 24 90', emergencyNote: '(Bereitschaftsdienst)'
  },
  aaUrl: 'https://www.auswaertiges-amt.de/de/service/laender/daenemark-node',

  rules: [
    ['Bezahlen', 'Fast alles geht mit Karte oder MobilePay – Bargeld braucht man kaum. Euro wird selten angenommen.'],
    ['Radwege', 'Radwege sind tabu für Fußgänger. In Kopenhagen beim Aussteigen aus Bus/Taxi auf Radfahrer achten.'],
    ['Strand & Dünen', 'Nicht über geschützte Dünen laufen. Mit dem Auto nur auf freigegebenen Strandabschnitten fahren.'],
    ['Autofahren', 'Abblendlicht auch tagsüber Pflicht. Brücken (Storebælt, Øresund) sind mautpflichtig.'],
    ['Trinkgeld', 'Service ist im Preis enthalten – Trinkgeld ist nicht üblich, Aufrunden bei gutem Service ist aber gern gesehen.']
  ],
  sim: [
    ['EU-Roaming', 'Mit deutschem Tarif ohne Aufpreis surfen und telefonieren („Roam like at home“).'],
    ['Achtung Fähren', 'Auf Fähren bucht sich das Handy manchmal ins teure Schiffsnetz ein – dann Mobilfunk/Roaming kurz ausschalten.']
  ],
  apps: [
    ['DOT Tickets / Rejseplanen', 'Nahverkehr und Fahrpläne im ganzen Land.'],
    ['DSB', 'Zugtickets buchen.'],
    ['Google Maps & Translate', 'Offline-Karten herunterladen und Übersetzer parat haben.']
  ],

  places: [
    ['Kopenhagen', 55.6761, 12.5683], ['Aarhus', 56.1629, 10.2039], ['Odense', 55.4038, 10.4024],
    ['Skagen', 57.7209, 10.5839], ['Bornholm (Rønne)', 55.1007, 14.7065]
  ]
};
