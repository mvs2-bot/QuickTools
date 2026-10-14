/* Quick-Tools · Spanien – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: 'spanien',
  name: 'Spanien',
  flag: '🇪🇸',
  tz: 'Europe/Madrid',
  currency: null, // Euro → kein Rechner, Startseite = Phrasen

  glance: {"plug": "C / F", "volt": 230, "adapter": "nein", "drive": "R", "water": "Trinkbar (teils gechlort; Kanaren besser Flaschenwasser)", "tip": "5–10 %", "dial": "+34"},
  taxi: {"local": "Por favor, lléveme a esta dirección.", "phonetic": "por fa-WOR, JE-we-me a ES-ta di-rek-THJON"},

  phrases: [
    { title: '🇪🇸 Spanisch', lang: 'es-ES', items: [
      { de: 'Hallo / Guten Tag', local: 'Hola / Buenos días', phonetic: 'O-la / BWE-nos DI-as' },
      { de: 'Danke schön', local: 'Muchas gracias', phonetic: 'MU-tschas GRA-thjas' },
      { de: 'Entschuldigung', local: 'Perdone', phonetic: 'per-DO-ne' },
      { de: 'Wie viel kostet das?', local: '¿Cuánto cuesta?', phonetic: 'KWAN-to KWES-ta' },
      { de: 'Die Rechnung, bitte', local: 'La cuenta, por favor', phonetic: 'la KWEN-ta, por fa-WOR' },
      { de: 'Sprechen Sie Englisch?', local: '¿Habla inglés?', phonetic: 'A-bla in-GLES' },
      { de: 'Wo ist das Krankenhaus?', local: '¿Dónde está el hospital?', phonetic: 'DON-de es-TA el os-pi-TAL' },
      { de: 'Ein großes Bier bitte', local: 'Una cerveza grande, por favor', phonetic: 'U-na ther-WE-tha GRAN-de, por fa-WOR' },
      { de: 'Ich bin Vegetarier/in', local: 'Soy vegetariano / vegetariana', phonetic: 'soi we-che-ta-RJA-no / -na' },
      { de: 'Ich esse kein Fleisch und Fisch, aber Eier schon', local: 'No como carne ni pescado, pero sí huevos', phonetic: 'no KO-mo KAR-ne ni pes-KA-do, PE-ro si WE-wos' },
      { de: 'Das Essen war sehr lecker', local: 'La comida estaba buenísima', phonetic: 'la ko-MI-da es-TA-ba bwe-NI-si-ma' },
      { de: 'Hilfe! Es ist ein Notfall!', local: '¡Ayuda! ¡Es una emergencia!', phonetic: 'a-JU-da! es U-na e-mer-CHEN-thja' }
    ]}
  ],

  emergency: [
    ['112', 'Europäischer Notruf (alle Dienste)'],
    ['061', 'Rettungsdienst'],
    ['091', 'Policía Nacional'],
    ['062', 'Guardia Civil']
  ],
  embassy: {
    title: 'Deutsche Botschaft Madrid',
    address: ['Calle de Fortuny 8', '28010 Madrid'],
    phone: '+34 91 557 90 00'
  },
  aaUrl: 'https://www.auswaertiges-amt.de/de/service/laender/spanien-node',

  rules: [
    ["Essenszeiten", "Mittagessen meist 14–16 Uhr, Abendessen ab ca. 21 Uhr. Viele Restaurants sind dazwischen geschlossen."],
    ["Strand & Stadt", "Badebekleidung nur am Strand – in vielen Städten (z. B. Barcelona, Palma) sind Bußgelder für Badekleidung oder nackten Oberkörper möglich."],
    ["Trinkgeld", "Nicht verpflichtet; kleines Aufrunden oder 5–10 % bei gutem Service ist üblich."],
    ["Ausweis", "Ausweispflicht – Personalausweis oder Reisepass immer dabeihaben."]
  ],
  car: [
    ["Promille", "0,5 ‰; Fahranfänger 0,3 ‰."],
    ["Tempo", "In Städten auf einspurigen Straßen meist nur 30 km/h. Kopfhörer am Steuer verboten."]
  ],
  bike: [
    ["Helm", "Außerorts Helmpflicht für Radfahrer."]
  ],
  substances: [
    ["Alkohol", "Ab 18. Trinken auf der Straße ist vielerorts verboten (z. B. Mallorca, Barcelona) und wird mit Bußgeld bestraft."],
    ["Cannabis", "Privat geduldet, in der Öffentlichkeit verboten – hohe Bußgelder."],
    ["Rauchen", "In Innenräumen verboten; viele Strände sind rauchfrei („playa sin humo“)."]
  ],
  sim: [
    ['EU-Roaming', 'Mit deutschem Tarif ohne Aufpreis surfen und telefonieren („Roam like at home“).'],
    ['Alternative', 'eSIM (z. B. Airalo) oder Prepaid-SIM von Movistar, Vodafone, Orange im Shop – Ausweis nötig.']
  ],
  apps: [
    ['Cabify, Uber & FreeNow', 'Taxis und Fahrdienste in den Großstädten.'],
    ['Renfe', 'Zugtickets (AVE-Schnellzüge) direkt buchen.'],
    ['Google Maps & Translate', 'Offline-Karten herunterladen und Übersetzer parat haben.']
  ],

  places: [
    ['Madrid', 40.4168, -3.7038], ['Barcelona', 41.3874, 2.1686], ['Sevilla', 37.3891, -5.9845],
    ['Valencia', 39.4699, -0.3763], ['Palma (Mallorca)', 39.5696, 2.6502]
  ]
};
