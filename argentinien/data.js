/* Quick-Tools · Argentinien – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: 'argentinien',
  name: 'Argentinien',
  flag: '🇦🇷',
  tz: 'America/Argentina/Buenos_Aires',
  currency: { code: 'ARS', symbol: '$', name: 'Argentinischer Peso', tableDecimals: 0 },

  glance: {"plug": "C / I", "volt": 220, "adapter": "ja", "drive": "R", "water": "In Städten meist trinkbar", "tip": "ca. 10 % (Restaurant)", "dial": "+54"},
  taxi: {"local": "Por favor, llevame a esta dirección.", "phonetic": "por fa-WOR, sche-WA-me a ES-ta di-rek-SJON"},

  phrases: [
    { title: '🇦🇷 Spanisch (Argentinien)', lang: 'es-AR', items: [
      { de: 'Hallo / Guten Tag', local: 'Hola / Buen día', phonetic: 'O-la / bwen DI-a' },
      { de: 'Danke schön', local: 'Muchas gracias', phonetic: 'MU-tschas GRA-sjas' },
      { de: 'Entschuldigung', local: 'Disculpá', phonetic: 'dis-kul-PA' },
      { de: 'Wie viel kostet das?', local: '¿Cuánto sale?', phonetic: 'KWAN-to SA-le' },
      { de: 'Die Rechnung, bitte', local: 'La cuenta, por favor', phonetic: 'la KWEN-ta, por fa-WOR' },
      { de: 'Sprichst du Englisch?', local: '¿Hablás inglés?', phonetic: 'a-BLAS in-GLES' },
      { de: 'Wo ist das Krankenhaus?', local: '¿Dónde está el hospital?', phonetic: 'DON-de es-TA el os-pi-TAL' },
      { de: 'Ein großes Bier bitte', local: 'Una cerveza grande, por favor', phonetic: 'U-na ser-WE-sa GRAN-de, por fa-WOR' },
      { de: 'Ich bin Vegetarier/in', local: 'Soy vegetariano / vegetariana', phonetic: 'soi we-che-ta-RJA-no / -na' },
      { de: 'Ich esse kein Fleisch und Fisch, aber Eier schon', local: 'No como carne ni pescado, pero sí huevos', phonetic: 'no KO-mo KAR-ne ni pes-KA-do, PE-ro si WE-wos' },
      { de: 'Das Essen war sehr lecker', local: 'La comida estaba riquísima', phonetic: 'la ko-MI-da es-TA-ba ri-KI-si-ma' },
      { de: 'Hilfe! Es ist ein Notfall!', local: '¡Ayuda! ¡Es una emergencia!', phonetic: 'a-SCHU-da! es U-na e-mer-CHEN-sja' }
    ]}
  ],

  emergency: [
    ['911', 'Polizei (Buenos Aires & viele Provinzen)'],
    ['107', 'Rettungsdienst (SAME)'],
    ['100', 'Feuerwehr'],
    ['101', 'Polizei (wo 911 nicht gilt)']
  ],
  embassy: {
    title: 'Deutsche Botschaft Buenos Aires',
    address: ['Villanueva 1055', 'C1426BMC Buenos Aires'],
    phone: '+54 11 4778 2500',
    emergency: '+54 9 11 4410-7268', emergencyNote: '(Bereitschaftsdienst, keine Termin-/Visafragen)'
  },
  aaUrl: 'https://www.auswaertiges-amt.de/de/service/laender/argentinien-node',

  rules: [
    ['Wechselkurs', 'Mit ausländischer Kreditkarte bekommt man meist einen günstigen Kurs (Dólar MEP). Bargeld nur bei seriösen Stellen tauschen, nie auf der Straße.'],
    ['Preise', 'Die Inflation ist hoch – Preise ändern sich schnell. Der Rechner nutzt den offiziellen Kurs.'],
    ['Essenszeiten', 'Abendessen selten vor 21 Uhr, viele Restaurants öffnen erst dann.'],
    ['Mate', 'Wer zum Mate eingeladen wird: Nicht am Strohhalm rühren und erst „gracias“ sagen, wenn man nichts mehr möchte.'],
    ['Sicherheit', 'In Buenos Aires Handy nicht offen am Straßenrand nutzen, nur App-Taxis nehmen.']
  ],
  sim: [
    ['Lokale SIM', 'Prepaid-SIM von Personal, Claro oder Movistar – Reisepass nötig.'],
    ['eSIM', 'Alternativ vorab eSIM (z. B. Airalo) – in Patagonien oft kein Netz.']
  ],
  apps: [
    ['Uber, Cabify & DiDi', 'Fahrdienste in Buenos Aires und anderen Städten.'],
    ['Plataforma 10', 'Fernbustickets im ganzen Land.'],
    ['Google Maps & Translate', 'Offline-Karten herunterladen und Übersetzer parat haben.']
  ],

  places: [
    ['Buenos Aires', -34.6037, -58.3816], ['Mendoza', -32.8895, -68.8458], ['Bariloche', -41.1335, -71.3103],
    ['El Calafate', -50.3379, -72.2648], ['Iguazú', -25.5972, -54.5786]
  ]
};
