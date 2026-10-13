/* Quick-Tools · Neuseeland – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "neuseeland",
  name: "Neuseeland",
  flag: "🇳🇿",
  tz: "Pacific/Auckland",
  currency: {"code": "NZD", "symbol": "$", "name": "Neuseeland-Dollar"},

  glance: {"plug": "I", "volt": 230, "adapter": "ja", "drive": "L", "water": "Trinkbar", "tip": "Nicht üblich", "dial": "+64"},
  taxi: {"local": "Please take me to this address.", "phonetic": ""},

  phrases: [
    { title: "🇳🇿 Englisch", lang: "en-NZ", items: [
      {"de": "Hallo / Guten Morgen", "local": "Hello / Good morning", "phonetic": ""},
      {"de": "Danke schön", "local": "Thank you very much", "phonetic": ""},
      {"de": "Entschuldigung", "local": "Excuse me / Sorry", "phonetic": ""},
      {"de": "Wie viel kostet das?", "local": "How much is this?", "phonetic": ""},
      {"de": "Die Rechnung, bitte", "local": "Could I get the bill, please?", "phonetic": ""},
      {"de": "Wo ist das Krankenhaus?", "local": "Where is the hospital?", "phonetic": ""},
      {"de": "Ein großes Bier, bitte", "local": "A large beer, please", "phonetic": ""},
      {"de": "Wo ist die Toilette?", "local": "Where's the toilet?", "phonetic": ""},
      {"de": "Ich bin Vegetarier/in", "local": "I'm vegetarian", "phonetic": ""},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "I don't eat meat or fish, but I do eat eggs", "phonetic": ""},
      {"de": "Das Essen war sehr lecker", "local": "That was delicious!", "phonetic": ""},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "Help! It's an emergency!", "phonetic": ""}
    ]},
    { title: "🌿 Te Reo Māori", lang: "en-NZ", items: [
      {"de": "Hallo / Danke", "local": "Kia ora", "phonetic": "ki-a O-ra"},
      {"de": "Guten Tag (förmlich)", "local": "Tēnā koe", "phonetic": "TÄ-na koi"},
      {"de": "Willkommen", "local": "Haere mai", "phonetic": "HAI-re mai"},
      {"de": "Bis bald", "local": "Ka kite anō", "phonetic": "ka KI-te a-NO"},
      {"de": "Herzliche Grüße / Danke", "local": "Ngā mihi", "phonetic": "nga MI-hi"}
    ]}
  ],

  emergency: [
    ["111", "Notruf (Polizei, Rettung, Feuerwehr)"],
    ["0800 611 116", "Healthline – Gesundheitstelefon"]
  ],
  embassy: {"title": "Deutsche Botschaft Wellington", "address": ["90-92 Hobson Street, Thorndon", "6011 Wellington"], "phone": "+64 4 473 6063", "emergency": "+64 21 651 987", "emergencyNote": "(auch per SMS; werktags nach Dienstschluss bis 24 Uhr, Wochenende 8–24 Uhr)"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/neuseeland-node",

  rules: [
    ["Einreise", "Vorab NZeTA beantragen (per App oder Website) – inklusive Tourismusabgabe (IVL)."],
    ["Biosecurity", "Lebensmittel, Pflanzen, Wanderschuhe und Zeltausrüstung bei der Einreise deklarieren – sonst hohe Strafen."],
    ["Freedom Camping", "Wildcampen nur mit „self-contained“-Camper und nur an erlaubten Plätzen – sonst Bußgeld."],
    ["Wandern", "Wetter in den Bergen kann sich rasch ändern. Für längere Touren Plan hinterlegen (adventuresmart.nz)."],
    ["Sonne", "Sehr hohe UV-Strahlung – Sonnenschutz auch bei kühlem Wetter."]
  ],
  sim: [
    ["Lokale SIM", "One NZ, Spark oder 2degrees am Flughafen."],
    ["eSIM", "Alternativ vorab eSIM (z. B. Airalo) buchen – am einfachsten schon vor dem Abflug einrichten."]
  ],
  apps: [
    ["CamperMate", "Campingplätze, Toiletten und Tankstellen unterwegs."],
    ["DOC / Great Walks", "Hütten und Great Walks buchen."],
    ["MetService", "Offizielle Wetterwarnungen."]
  ],

  places: [
    ["Auckland", -36.8485, 174.7633],
    ["Wellington", -41.2865, 174.7762],
    ["Queenstown", -45.0312, 168.6626],
    ["Rotorua", -38.1368, 176.2497],
    ["Milford Sound", -44.6414, 167.8974]
  ]
};
