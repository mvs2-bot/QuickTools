/* Quick-Tools · Marokko – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "marokko",
  name: "Marokko",
  flag: "🇲🇦",
  tz: "Africa/Casablanca",
  currency: {"code": "MAD", "symbol": "DH", "name": "Marokkanischer Dirham"},

  glance: {"plug": "C / E", "volt": 220, "adapter": "nein", "drive": "R", "water": "Nicht empfohlen – Flaschenwasser", "tip": "ca. 10 %, kleine Trinkgelder für Dienste üblich", "dial": "+212"},
  taxi: {"local": "عافاك، ديني لهاد العنوان", "phonetic": "Afak, ddini l-had l-unwan."},

  phrases: [
    { title: "🇲🇦 Marokkanisches Arabisch (Darija)", lang: "ar-MA", items: [
      {"de": "Hallo", "local": "السلام عليكم", "phonetic": "Salam alaykum"},
      {"de": "Danke", "local": "شكرا", "phonetic": "Shukran"},
      {"de": "Bitte", "local": "عافاك", "phonetic": "Afak"},
      {"de": "Wie viel kostet das?", "local": "بشحال هادي؟", "phonetic": "Bshhal hadi?"},
      {"de": "Nein danke (bei Händlern)", "local": "لا، شكرا", "phonetic": "La, shukran"},
      {"de": "Okay / Einverstanden", "local": "واخا", "phonetic": "Wakha"},
      {"de": "Wo ist das Krankenhaus?", "local": "فين كاين السبيطار؟", "phonetic": "Fin kayn sbitar?"},
      {"de": "Ich bin Vegetarier/in", "local": "أنا نباتي", "phonetic": "Ana nabati"},
      {"de": "Das Essen war sehr lecker", "local": "الماكلة بنينة بزاف", "phonetic": "L-makla bnina bzzaf"},
      {"de": "Tschüss", "local": "بسلامة", "phonetic": "Bslama"},
      {"de": "Hilfe!", "local": "عتقوني!", "phonetic": "Atqouni!"}
    ]},
    { title: "🇫🇷 Französisch", lang: "fr-FR", items: [
      {"de": "Guten Tag", "local": "Bonjour", "phonetic": "bon-SCHUR"},
      {"de": "Wie viel kostet das?", "local": "C'est combien ?", "phonetic": "sä kom-BJÄ"},
      {"de": "Die Rechnung, bitte", "local": "L'addition, s'il vous plaît", "phonetic": "la-di-SJO, sil wu PLÄ"},
      {"de": "Wo ist das Krankenhaus?", "local": "Où est l'hôpital ?", "phonetic": "u ä lo-pi-TAL"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "Je ne mange ni viande ni poisson, mais je mange des œufs", "phonetic": "sche ne mansch ni WJAND ni pua-SO, mä sche mansch de SÖ"}
    ]}
  ],

  emergency: [
    ["19", "Polizei (Städte)"],
    ["177", "Gendarmerie (ländliche Gebiete)"],
    ["15", "Feuerwehr & Rettungsdienst"]
  ],
  embassy: {"title": "Deutsche Botschaft Rabat", "address": ["7, Zankat Madnine", "Rabat"], "phone": "+212 537 63 54 00"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/marokko-node",

  rules: [
    ["Kleidung", "Schultern und Knie bedecken, besonders außerhalb von Strand und Hotel. Moscheen dürfen Nicht-Muslime meist nicht betreten (Ausnahme: Hassan-II-Moschee)."],
    ["Handeln", "In den Souks ist Handeln Pflicht – freundlich bleiben, am Ende muss es für beide passen."],
    ["„Führer“", "Ungefragte Wegweiser in der Medina erwarten Geld – höflich, aber bestimmt ablehnen."],
    ["Fotografieren", "Menschen nur mit Erlaubnis fotografieren; für Fotos mit Gauklern/Schlangenbeschwörern wird Geld verlangt."],
    ["Ramadan", "Im Ramadan tagsüber nicht demonstrativ in der Öffentlichkeit essen, trinken oder rauchen."],
    ["Dirham", "Dirham dürfen offiziell nicht ein- oder ausgeführt werden – vor Ort abheben und vor der Abreise zurücktauschen."]
  ],
  sim: [
    ["Lokale SIM", "Maroc Telecom, Orange oder inwi – oft gratis am Flughafen, Pass nötig."],
    ["eSIM", "Alternativ vorab eSIM (z. B. Airalo) buchen – am einfachsten schon vor dem Abflug einrichten."]
  ],
  apps: [
    ["Careem & inDrive", "Fahrdienste in den großen Städten."],
    ["ONCF", "Zugtickets (inkl. Schnellzug Al Boraq Tanger–Casablanca)."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Marrakesch", 31.6295, -7.9811],
    ["Fès", 34.0181, -5.0078],
    ["Chefchaouen", 35.1688, -5.2636],
    ["Essaouira", 31.5085, -9.7595],
    ["Merzouga (Sahara)", 31.0802, -4.0133]
  ]
};
