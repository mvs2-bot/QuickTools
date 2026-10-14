/* Quick-Tools · Italien – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: 'italien',
  name: 'Italien',
  flag: '🇮🇹',
  tz: 'Europe/Rome',
  currency: null, // Euro → kein Rechner, Startseite = Phrasen

  glance: {"plug": "C / F / L", "volt": 230, "adapter": "teils – Eurostecker passt immer", "drive": "R", "water": "Trinkbar", "tip": "Coperto auf der Rechnung, Trinkgeld freiwillig", "dial": "+39"},
  taxi: {"local": "Mi porti a questo indirizzo, per favore.", "phonetic": "mi POR-ti a KWE-sto in-di-RIT-tso, per fa-WO-re"},

  phrases: [
    { title: '🇮🇹 Italienisch', lang: 'it-IT', items: [
      { de: 'Guten Tag', local: 'Buongiorno', phonetic: 'bwon-DSCHOR-no' },
      { de: 'Danke schön', local: 'Grazie mille', phonetic: 'GRA-tsje MIL-le' },
      { de: 'Entschuldigung', local: 'Mi scusi', phonetic: 'mi SKU-si' },
      { de: 'Wie viel kostet das?', local: 'Quanto costa?', phonetic: 'KWAN-to KOS-ta' },
      { de: 'Die Rechnung, bitte', local: 'Il conto, per favore', phonetic: 'il KON-to, per fa-WO-re' },
      { de: 'Sprechen Sie Englisch?', local: 'Parla inglese?', phonetic: 'PAR-la in-GLE-se' },
      { de: 'Wo ist das Krankenhaus?', local: "Dov'è l'ospedale?", phonetic: 'do-WE los-pe-DA-le' },
      { de: 'Ein großes Bier bitte', local: 'Una birra grande, per favore', phonetic: 'U-na BIR-ra GRAN-de, per fa-WO-re' },
      { de: 'Ich bin Vegetarier/in', local: 'Sono vegetariano / vegetariana', phonetic: 'SO-no we-dsche-ta-RJA-no / -na' },
      { de: 'Ich esse kein Fleisch und Fisch, aber Eier schon', local: 'Non mangio né carne né pesce, ma le uova sì', phonetic: 'non MAN-dscho ne KAR-ne ne PE-sche, ma le WO-wa si' },
      { de: 'Das Essen war sehr lecker', local: 'Era buonissimo!', phonetic: 'E-ra bwo-NIS-si-mo' },
      { de: 'Hilfe! Es ist ein Notfall!', local: "Aiuto! È un'emergenza!", phonetic: 'a-JU-to! e un-e-mer-DSCHEN-tsa' }
    ]}
  ],

  emergency: [
    ['112', 'Europäischer Notruf (alle Dienste)'],
    ['118', 'Rettungsdienst'],
    ['113', 'Polizei'],
    ['115', 'Feuerwehr']
  ],
  embassy: {
    title: 'Deutsche Botschaft Rom',
    address: ['Via San Martino della Battaglia 4', '00185 Roma'],
    phone: '+39 06 492 131'
  },
  aaUrl: 'https://www.auswaertiges-amt.de/de/service/laender/italien-node',

  rules: [
    ["Kirchen & Vatikan", "Schultern und Knie bedecken – sonst kann der Einlass verweigert werden."],
    ["Altstädte", "In Venedig, Rom, Florenz u. a. gibt es Bußgelder z. B. fürs Sitzen auf Treppen, Baden in Brunnen oder Essen an Denkmälern."],
    ["Coperto", "„Coperto“ (Gedeck) und „servizio“ stehen oft auf der Rechnung – das ist normal. Trinkgeld darüber hinaus freiwillig."],
    ["Venedig", "An bestimmten Tagen wird für Tagesbesucher eine Eintrittsgebühr fällig – vorab online prüfen."]
  ],
  car: [
    ["Promille", "0,5 ‰; in den ersten 3 Jahren nach dem Führerschein und unter 21 Jahren 0,0 ‰."],
    ["ZTL", "ZTL-Zonen (Zona a traffico limitato) in Innenstädten nicht befahren – Kameras, hohe Strafen."],
    ["Licht", "Außerorts und auf Autobahnen Abblendlicht auch tagsüber."]
  ],
  bike: [
    ["Radfahren", "Keine Helmpflicht; außerorts nachts Warnweste tragen. Auf E-Scootern gilt Helmpflicht."]
  ],
  substances: [
    ["Rauchen", "In Mailand ist Rauchen im Freien verboten, wenn andere näher als 10 m sind. Innen überall verboten."],
    ["Alkohol", "Ab 18. Viele Städte verbieten Alkohol auf der Straße oder aus Glasflaschen zu bestimmten Zeiten."],
    ["Cannabis", "Verboten (Besitz kleiner Mengen wird als Ordnungswidrigkeit verfolgt)."]
  ],
  sim: [
    ['EU-Roaming', 'Mit deutschem Tarif ohne Aufpreis surfen und telefonieren („Roam like at home“).'],
    ['Alternative', 'eSIM (z. B. Airalo) oder Prepaid-SIM von TIM, Vodafone, WindTre oder Iliad – Ausweis nötig.']
  ],
  apps: [
    ['Trenitalia & Italo', 'Zugtickets (Frecciarossa, Regionalzüge) buchen.'],
    ['FreeNow & itTaxi', 'Taxis in den Großstädten (Uber nur eingeschränkt).'],
    ['Google Maps & Translate', 'Offline-Karten herunterladen und Übersetzer parat haben.']
  ],

  places: [
    ['Rom', 41.9028, 12.4964], ['Mailand', 45.4642, 9.19], ['Florenz', 43.7696, 11.2558],
    ['Venedig', 45.4408, 12.3155], ['Neapel', 40.8518, 14.2681]
  ]
};
