/* Quick-Tools · Luxemburg – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "luxemburg",
  name: "Luxemburg",
  flag: "🇱🇺",
  tz: "Europe/Luxembourg",
  currency: null, // Euro → kein Rechner, Startseite = Phrasen

  glance: {"plug": "C / F", "volt": 230, "adapter": "nein", "drive": "R", "water": "Trinkbar", "tip": "Aufrunden (Service inklusive)", "dial": "+352"},
  taxi: {"local": "Pouvez-vous m’emmener à cette adresse, s’il vous plaît ?", "phonetic": "pu-we-WU mom-NE a set a-DRES, sil wu PLÄ"},

  phrases: [
    { title: "🇫🇷 Französisch", lang: "fr-LU", items: [
      {"de": "Hallo / Guten Tag", "local": "Bonjour", "phonetic": "bon-SCHUR"},
      {"de": "Danke schön", "local": "Merci beaucoup", "phonetic": "mär-SI bo-KU"},
      {"de": "Entschuldigung", "local": "Excusez-moi", "phonetic": "eks-kü-se-MUA"},
      {"de": "Wie viel kostet das?", "local": "C’est combien ?", "phonetic": "sä kom-BJÄ"},
      {"de": "Die Rechnung, bitte", "local": "L’addition, s’il vous plaît", "phonetic": "la-di-SJO, sil wu PLÄ"},
      {"de": "Sprechen Sie Englisch?", "local": "Vous parlez anglais ?", "phonetic": "wu par-LE ong-GLÄ"},
      {"de": "Wo ist das Krankenhaus?", "local": "Où est l’hôpital ?", "phonetic": "u ä lo-pi-TAL"},
      {"de": "Ein großes Bier bitte", "local": "Une grande bière, s’il vous plaît", "phonetic": "ün grond BJÄR, sil wu PLÄ"},
      {"de": "Ich bin Vegetarier/in", "local": "Je suis végétarien / végétarienne", "phonetic": "sche süi we-sche-ta-RJÄ / -RJÄN"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "Je ne mange ni viande ni poisson, mais je mange des œufs", "phonetic": "sche ne MONSCH ni WJOND ni pua-SO, mä sche MONSCH de-SÖ"},
      {"de": "Das Essen war sehr lecker", "local": "C’était délicieux !", "phonetic": "se-TÄ de-li-SJÖ"},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "Au secours ! C’est une urgence !", "phonetic": "o se-KUR! sä-tün ür-SCHONS"}
    ]},
    { title: "🇱🇺 Luxemburgisch", lang: "lb-LU", items: [
      {"de": "Hallo", "local": "Moien", "phonetic": "MOI-en"},
      {"de": "Danke schön", "local": "Merci villmools", "phonetic": "MER-si FILL-mols"},
      {"de": "Bitte", "local": "Wann ech gelift", "phonetic": "wan esch ge-LIFT"},
      {"de": "Tschüss", "local": "Äddi", "phonetic": "Ä-di"}
    ]}
  ],

  emergency: [
    ["112", "Notruf: Rettung & Feuerwehr"],
    ["113", "Polizei"]
  ],
  embassy: {"title": "Deutsche Botschaft Luxemburg", "address": ["20–22 Avenue Émile Reuter", "L-2420 Luxemburg"], "phone": "+352 45 34 45 1", "emergency": "+352 621 248 272", "emergencyNote": "(außerhalb der Dienstzeiten)"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/luxemburg-node",

  rules: [
    ["Gratis ÖPNV", "Busse, Trams und Züge (2. Klasse) sind im ganzen Land kostenlos."],
    ["Sprache", "Luxemburgisch, Französisch und Deutsch sind Amtssprachen – mit Deutsch kommt man fast überall weiter, in Restaurants wird oft Französisch gesprochen."],
    ["Tanken", "Sprit und Tabak sind günstiger als in Deutschland – an Grenztankstellen oft lange Schlangen."]
  ],
  car: [
    ["Promille", "0,5 ‰; Fahranfänger 0,2 ‰."],
    ["Winter", "Bei Winterwetter Winterreifen Pflicht."]
  ],
  substances: [
    ["Alkohol", "Ab 16 Jahren."],
    ["Cannabis", "Seit 2023 sind Anbau (bis 4 Pflanzen) und Konsum zu Hause für Einwohner erlaubt; Konsum in der Öffentlichkeit und Mitnahme über die Grenze sind verboten."]
  ],
  sim: [
    ["EU-Roaming", "Mit deutschem Tarif ohne Aufpreis surfen und telefonieren („Roam like at home“)."],
    ["Alternative", "eSIM (z. B. Airalo) oder Prepaid-SIM von POST, Tango oder Orange."]
  ],
  apps: [
    ["mobiliteit.lu", "Fahrpläne für alle Busse, Trams und Züge im Land."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Luxemburg (Stadt)", 49.6116, 6.1319],
    ["Vianden", 49.935, 6.2081],
    ["Echternach", 49.8121, 6.4216],
    ["Clervaux", 50.0547, 6.0313],
    ["Schengen", 49.4708, 6.3667]
  ]
};
