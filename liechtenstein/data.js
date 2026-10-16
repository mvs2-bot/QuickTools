/* Quick-Tools · Liechtenstein – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "liechtenstein",
  name: "Liechtenstein",
  flag: "🇱🇮",
  tz: "Europe/Vaduz",
  currency: {"code": "CHF", "symbol": "Fr.", "name": "Schweizer Franken"},

  glance: {"plug": "C / J", "volt": 230, "adapter": "Schuko: ja · Eurostecker passt", "drive": "R", "water": "Trinkbar", "tip": "Aufrunden (Service inklusive)", "dial": "+423"},
  taxi: {"local": "Bitte bringen Sie mich zu dieser Adresse.", "phonetic": ""},

  phrases: [
    { title: "🇱🇮 Liechtensteiner Deutsch", lang: "de-LI", items: [
      {"de": "Guten Tag", "local": "Grüezi / Hoi", "phonetic": ""},
      {"de": "Tschüss", "local": "Tschau / Ade", "phonetic": ""},
      {"de": "Danke vielmals", "local": "Merci vielmal", "phonetic": ""},
      {"de": "Die Rechnung, bitte", "local": "Zahlen, bitte!", "phonetic": ""},
      {"de": "Krankenhaus", "local": "Spital", "phonetic": ""},
      {"de": "Fahrkarte", "local": "Billett", "phonetic": ""},
      {"de": "Fahrrad", "local": "Velo", "phonetic": ""},
      {"de": "parken", "local": "parkieren", "phonetic": ""},
      {"de": "Bürgersteig", "local": "Trottoir", "phonetic": ""},
      {"de": "Hähnchen", "local": "Poulet", "phonetic": ""},
      {"de": "Croissant", "local": "Gipfeli", "phonetic": ""},
      {"de": "Vormittagsimbiss", "local": "Znüni", "phonetic": ""}
    ]}
  ],

  emergency: [
    ["112", "Europäischer Notruf"],
    ["117", "Polizei"],
    ["144", "Rettungsdienst"],
    ["118", "Feuerwehr"]
  ],
  embassy: {"title": "Zuständig: Deutsche Botschaft Bern (Schweiz)", "address": ["Willadingweg 83", "3006 Bern"], "phone": "+41 31 359 43 43"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/liechtenstein-node",

  rules: [
    ["Bezahlen", "Bezahlt wird in Schweizer Franken; Euro wird oft angenommen, Wechselgeld kommt aber meist in Franken."],
    ["Zoll", "Liechtenstein bildet mit der Schweiz eine Zollunion – an der Grenze zu Österreich gelten die Schweizer Freimengen."],
    ["Berge", "Das Wetter ändert sich schnell – beim Wandern passende Ausrüstung. Bergrettung ist teuer, Versicherung prüfen."]
  ],
  car: [
    ["Promille", "0,8 ‰."],
    ["Vignette", "In Liechtenstein gibt es keine Autobahn – bei Anreise über Schweizer Autobahnen ist die Schweizer Vignette Pflicht."]
  ],
  substances: [
    ["Alkohol", "Bier und Wein ab 16, Spirituosen ab 18."],
    ["Drogen", "Auch Cannabis ist verboten."]
  ],
  sim: [
    ["EWR-Roaming", "Liechtenstein gehört zum EWR – mit deutschem Tarif meist ohne Aufpreis. Achtung: Nahe der Grenze bucht sich das Handy oft ins Schweizer Netz ein, dann wird es teuer."],
    ["Alternative", "eSIM (z. B. Airalo) für die Schweiz und Liechtenstein."]
  ],
  apps: [
    ["LIEmobil", "Fahrpläne und Tickets für die Busse in Liechtenstein."],
    ["SBB Mobile", "Bahnverbindungen über Buchs (SG) und Sargans."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Vaduz", 47.141, 9.5209],
    ["Schaan", 47.1651, 9.5097],
    ["Triesenberg", 47.1182, 9.5428],
    ["Malbun", 47.1017, 9.6097],
    ["Balzers", 47.0667, 9.4994]
  ]
};
