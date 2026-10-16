/* Quick-Tools · Albanien – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: 'albanien',
  name: 'Albanien',
  flag: '🇦🇱',
  tz: 'Europe/Tirane',
  currency: { code: 'ALL', symbol: 'L', name: 'Albanischer Lek', tableDecimals: 0 },

  glance: {"plug": "C / F", "volt": 230, "adapter": "nein", "drive": "R", "water": "Nicht empfohlen – Flaschenwasser", "tip": "ca. 10 %", "dial": "+355"},
  taxi: {"local": "Ju lutem, më çoni në këtë adresë.", "phonetic": "ju LU-tem, me TSCHO-ni ne KE-te a-DRE-se"},

  phrases: [
    { title: '🇦🇱 Albanisch', lang: 'sq-AL', items: [
      { de: 'Hallo / Guten Tag', local: 'Përshëndetje / Mirëdita', phonetic: 'per-schen-DET-je / mi-re-DI-ta' },
      { de: 'Danke schön', local: 'Faleminderit', phonetic: 'fa-le-min-DE-rit' },
      { de: 'Entschuldigung', local: 'Më falni', phonetic: 'me FAL-ni' },
      { de: 'Wie viel kostet das?', local: 'Sa kushton?', phonetic: 'sa KUSCH-ton' },
      { de: 'Die Rechnung, bitte', local: 'Llogarinë, ju lutem', phonetic: 'llo-ga-RI-ne, ju LU-tem' },
      { de: 'Sprechen Sie Englisch?', local: 'Flisni anglisht?', phonetic: 'FLIS-ni ang-LISCHT' },
      { de: 'Wo ist das Krankenhaus?', local: 'Ku është spitali?', phonetic: 'ku ESCH-te spi-TA-li' },
      { de: 'Ein großes Bier bitte', local: 'Një birrë të madhe, ju lutem', phonetic: 'nje BIR-re te MA-the, ju LU-tem' },
      { de: 'Ich bin Vegetarier/in', local: 'Jam vegjetarian / vegjetariane', phonetic: 'jam we-dje-ta-ri-AN / -A-ne' },
      { de: 'Ich esse kein Fleisch und Fisch, aber Eier schon', local: 'Nuk ha mish as peshk, por ha vezë', phonetic: 'nuk ha misch as peschk, por ha WE-se' },
      { de: 'Das Essen war sehr lecker', local: 'Ushqimi ishte shumë i shijshëm', phonetic: 'usch-TSCHI-mi ISCH-te SCHU-me i SCHIJ-schem' },
      { de: 'Hilfe! Es ist ein Notfall!', local: 'Ndihmë! Është urgjencë!', phonetic: 'NDIH-me! ESCH-te ur-DJEN-tse' }
    ]}
  ],

  emergency: [
    ['112', 'Allgemeiner Notruf'],
    ['127', 'Rettungsdienst'],
    ['129', 'Polizei'],
    ['128', 'Feuerwehr']
  ],
  embassy: {
    title: 'Deutsche Botschaft Tirana',
    address: ['Rruga Skënderbej 8', 'Tirana'],
    phone: '+355 4 2274 505',
    emergency: '+355 68 202 9109', emergencyNote: '(Deutsch/Englisch)'
  },
  aaUrl: 'https://www.auswaertiges-amt.de/de/service/laender/albanien-node',

  rules: [
    ["Kopfnicken", "Achtung: Kopfnicken kann „nein“ bedeuten und Kopfschütteln „ja“ – im Zweifel nachfragen."],
    ["Moscheen & Kirchen", "Schultern und Knie bedecken, in Moscheen Schuhe ausziehen; Frauen ggf. Kopftuch."],
    ["Bargeld", "Viele kleine Läden, Busse und Restaurants akzeptieren nur Bargeld. Euro wird oft angenommen, Lek ist aber meist günstiger."],
    ["Trinkgeld", "Rund 10 % in Restaurants sind üblich."],
    ["Demonstrationen", "In Tirana und anderen Städten gibt es häufig Demonstrationen, teils gewaltsam – weiträumig meiden."]
  ],
  car: [
    ["Promille", "Praktisch 0,0 ‰ – die Grenze liegt bei 0,1 ‰."],
    ["Fahrweise", "Defensiv fahren – Schlaglöcher, Tiere und unvorhersehbares Fahrverhalten. Nachts wenn möglich nicht über Land fahren."],
    ["Papiere", "Der deutsche Führerschein (Scheckkartenformat) wird anerkannt. Die Grüne Versicherungskarte ist Pflicht und wird kontrolliert."]
  ],
  substances: [
    ["Alkohol", "Ab 18 Jahren."],
    ["Drogen", "Auch Cannabis ist verboten; Drogendelikte werden streng bestraft."]
  ],
  sim: [
    ['Kein EU-Roaming', 'Albanien gehört nicht zur EU – Roaming mit deutschem Tarif kann teuer sein. Tarif vorher prüfen!'],
    ['Lokale SIM / eSIM', 'Prepaid-SIM von Vodafone Albania oder One im Shop (Pass nötig) oder vorab eSIM (z. B. Airalo).']
  ],
  apps: [
    ['Taxi', 'Kein Uber – im Taxi auf Taximeter bestehen oder den Preis vor der Fahrt vereinbaren.'],
    ['Busse', 'Fernbusse (Furgon) fahren oft ohne festen Online-Fahrplan – vor Ort am Busbahnhof oder in der Unterkunft fragen.'],
    ['Google Maps & Translate', 'Offline-Karten herunterladen und Übersetzer parat haben.']
  ],

  places: [
    ['Tirana', 41.3275, 19.8187], ['Durrës', 41.3246, 19.4565], ['Shkodra', 42.0683, 19.5126],
    ['Saranda', 39.8756, 20.0053], ['Berat', 40.7058, 19.952]
  ]
};
