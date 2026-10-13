/* Quick-Tools · Kanada – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "kanada",
  name: "Kanada",
  flag: "🇨🇦",
  tz: "America/Toronto",
  currency: {"code": "CAD", "symbol": "$", "name": "Kanadischer Dollar"},

  glance: {"plug": "A / B", "volt": 120, "adapter": "ja", "drive": "R", "water": "Trinkbar", "tip": "15–20 % im Restaurant", "dial": "+1", "voltNote": "120 V – Netzteil muss 100–240 V können", "driveNote": "Rechtsabbiegen bei Rot meist erlaubt (nicht in Montréal)"},
  taxi: {"local": "Please take me to this address.", "phonetic": ""},

  phrases: [
    { title: "🇨🇦 Englisch", lang: "en-CA", items: [
      {"de": "Hallo / Guten Morgen", "local": "Hello / Good morning", "phonetic": ""},
      {"de": "Danke schön", "local": "Thank you very much", "phonetic": ""},
      {"de": "Entschuldigung", "local": "Excuse me / Sorry", "phonetic": ""},
      {"de": "Wie viel kostet das?", "local": "How much is this?", "phonetic": ""},
      {"de": "Die Rechnung, bitte", "local": "Could I get the bill, please?", "phonetic": ""},
      {"de": "Wo ist das Krankenhaus?", "local": "Where is the hospital?", "phonetic": ""},
      {"de": "Ein großes Bier, bitte", "local": "Can I get a large beer?", "phonetic": ""},
      {"de": "Wo ist die Toilette?", "local": "Where's the washroom?", "phonetic": ""},
      {"de": "Ich bin Vegetarier/in", "local": "I'm vegetarian", "phonetic": ""},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "I don't eat meat or fish, but I do eat eggs", "phonetic": ""},
      {"de": "Das Essen war sehr lecker", "local": "That was delicious!", "phonetic": ""},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "Help! It's an emergency!", "phonetic": ""}
    ]},
    { title: "⚜️ Französisch (Québec)", lang: "fr-CA", items: [
      {"de": "Guten Tag", "local": "Bonjour", "phonetic": "bon-SCHUR"},
      {"de": "Danke schön", "local": "Merci beaucoup", "phonetic": "mär-SI bo-KU"},
      {"de": "Die Rechnung, bitte", "local": "L'addition, s'il vous plaît", "phonetic": "la-di-SJO, sil wu PLÄ"},
      {"de": "Sprechen Sie Englisch?", "local": "Parlez-vous anglais ?", "phonetic": "par-le-WU ang-GLÄ"},
      {"de": "Wo ist das Krankenhaus?", "local": "Où est l'hôpital ?", "phonetic": "u ä lo-pi-TAL"},
      {"de": "Hilfe!", "local": "Au secours !", "phonetic": "o se-KUR"}
    ]}
  ],

  emergency: [
    ["911", "Notruf (Polizei, Rettung, Feuerwehr)"],
    ["811", "Gesundheitstelefon (nicht dringend, in vielen Provinzen)"]
  ],
  embassy: {"title": "Deutsche Botschaft Ottawa", "address": ["1 Waverley Street", "Ottawa, Ontario K2P 0T8"], "phone": "+1 613 232 1101"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/kanada-node",

  rules: [
    ["Einreise", "Vorab eTA online beantragen (nur auf der offiziellen Seite canada.ca)."],
    ["Trinkgeld & Steuern", "15–20 % Trinkgeld sind üblich; Preise sind ohne Steuern angegeben (je nach Provinz 5–15 %)."],
    ["Wildtiere", "In Nationalparks Abstand zu Bären und Elchen halten, kein Essen offen lassen, Bärenspray für Wanderungen."],
    ["Québec", "In Québec ist Französisch Amtssprache – ein „Bonjour“ kommt immer gut an."],
    ["Alkohol", "Alkohol meist nur in speziellen Läden; Mindestalter 18 oder 19 je nach Provinz."]
  ],
  sim: [
    ["Roaming", "Viele deutsche Tarife sind in Kanada teuer – vorher prüfen."],
    ["eSIM", "Einfachste Lösung: vorab eSIM – oder Prepaid von Rogers, Bell, Telus, Fido."]
  ],
  apps: [
    ["Uber & Lyft", "Fahrdienste in den Städten."],
    ["Parks Canada", "Infos und Reservierungen für die Nationalparks."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Toronto", 43.6532, -79.3832],
    ["Vancouver", 49.2827, -123.1207, "America/Vancouver"],
    ["Montréal", 45.5017, -73.5673],
    ["Banff", 51.1784, -115.5708, "America/Edmonton"],
    ["Halifax", 44.6488, -63.5752, "America/Halifax"]
  ]
};
