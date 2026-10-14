/* Quick-Tools · Schweiz – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: 'schweiz',
  name: 'Schweiz',
  flag: '🇨🇭',
  tz: 'Europe/Zurich',
  currency: { code: 'CHF', symbol: 'Fr.', name: 'Schweizer Franken' },

  glance: {"plug": "C / J", "volt": 230, "adapter": "Schuko: ja · Eurostecker passt", "drive": "R", "water": "Trinkbar", "tip": "Aufrunden (Service inklusive)", "dial": "+41"},
  taxi: {"local": "Bitte bringen Sie mich zu dieser Adresse.", "phonetic": ""},

  phrases: [
    { title: '🇨🇭 Schweizerdeutsch', lang: 'de-CH', items: [
      { de: 'Guten Tag', local: 'Grüezi / Grüessech (Bern)', phonetic: 'GRÜE-tsi / GRÜE-sech' },
      { de: 'Danke vielmals', local: 'Merci vielmal', phonetic: 'MER-si FIL-mal' },
      { de: 'Auf Wiedersehen', local: 'Uf Widerluege', phonetic: 'uf WI-der-lue-ge' },
      { de: 'Guten Appetit', local: 'En Guete!', phonetic: 'en GUE-te' }
    ]},
    { title: '🇫🇷 Französisch (Westschweiz)', lang: 'fr-CH', items: [
      { de: 'Guten Tag', local: 'Bonjour', phonetic: 'bon-SCHUR' },
      { de: 'Danke schön', local: 'Merci beaucoup', phonetic: 'mär-SI bo-KU' },
      { de: 'Wie viel kostet das?', local: "C'est combien ?", phonetic: 'sä kom-BJÄ' },
      { de: 'Die Rechnung, bitte', local: "L'addition, s'il vous plaît", phonetic: 'la-di-SJO, sil wu PLÄ' },
      { de: 'Wo ist das Krankenhaus?', local: "Où est l'hôpital ?", phonetic: 'u ä lo-pi-TAL' },
      { de: 'Hilfe!', local: 'Au secours !', phonetic: 'o se-KUR' }
    ]},
    { title: '🇮🇹 Italienisch (Tessin)', lang: 'it-CH', items: [
      { de: 'Guten Tag', local: 'Buongiorno', phonetic: 'bwon-DSCHOR-no' },
      { de: 'Danke schön', local: 'Grazie mille', phonetic: 'GRA-tsje MIL-le' },
      { de: 'Wie viel kostet das?', local: 'Quanto costa?', phonetic: 'KWAN-to KOS-ta' },
      { de: 'Die Rechnung, bitte', local: 'Il conto, per favore', phonetic: 'il KON-to, per fa-WO-re' },
      { de: 'Wo ist das Krankenhaus?', local: "Dov'è l'ospedale?", phonetic: 'do-WE los-pe-DA-le' },
      { de: 'Hilfe!', local: 'Aiuto!', phonetic: 'a-JU-to' }
    ]}
  ],

  emergency: [
    ['112', 'Europäischer Notruf'],
    ['144', 'Rettungsdienst'],
    ['117', 'Polizei'],
    ['118', 'Feuerwehr'],
    ['1414', 'Rega – Rettungshelikopter (Berge)']
  ],
  embassy: {
    title: 'Deutsche Botschaft Bern',
    address: ['Willadingweg 83', '3006 Bern'],
    phone: '+41 31 359 43 43'
  },
  aaUrl: 'https://www.auswaertiges-amt.de/de/service/laender/schweiz-node',

  rules: [
    ["Ruhezeiten", "Mittags- und Nachtruhe sowie Sonntagsruhe werden ernst genommen – z. B. kein lauter Lärm, keine Waschmaschine nachts."],
    ["Müll", "Mülltrennung ist streng, in vielen Orten nur mit gebührenpflichtigen Säcken."],
    ["Berge", "Wetter ändert sich schnell: Wetterbericht prüfen, Bergwanderungen nie ohne passende Ausrüstung. Bergrettung ist teuer – Versicherung prüfen."],
    ["Trinkgeld", "Service ist im Preis enthalten, Aufrunden ist üblich."]
  ],
  car: [
    ["Promille", "0,5 ‰; Neulenker 0,1 ‰."],
    ["Autobahn", "Autobahnvignette ist Pflicht (auch als E-Vignette online). Radarkontrollen sind häufig, Bußgelder sehr hoch."],
    ["Radarwarner", "Blitzer-Warnungen in Navi/Apps sind verboten – Funktion ausschalten."]
  ],
  substances: [
    ["Alkohol", "Bier und Wein ab 16, Spirituosen ab 18."],
    ["Cannabis", "Verboten; Kiffen wird mit 100 CHF gebüßt. CBD-Produkte (unter 1 % THC) sind legal."]
  ],
  sim: [
    ['Kein EU-Roaming', 'Die Schweiz gehört nicht zur EU – viele deutsche Tarife berechnen Roaming extra. Tarif vorher prüfen!'],
    ['Alternative', 'eSIM (z. B. Airalo) oder Prepaid-SIM von Swisscom, Sunrise oder Salt.']
  ],
  apps: [
    ['SBB Mobile', 'Fahrplan und Tickets für Zug, Bus, Schiff – oft günstigere Sparbillette.'],
    ['MeteoSwiss', 'Offizielle Wetter- und Unwetterwarnungen.'],
    ['Rega-App', 'Alarmiert die Rettungsflugwacht mit automatischer Standortübermittlung – ideal beim Wandern.']
  ],

  places: [
    ['Zürich', 47.3769, 8.5417], ['Bern', 46.948, 7.4474], ['Genf', 46.2044, 6.1432],
    ['Luzern', 47.0502, 8.3093], ['Zermatt', 46.0207, 7.7491]
  ]
};
