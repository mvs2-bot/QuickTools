/* Quick-Tools · Großbritannien – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "grossbritannien",
  name: "Großbritannien",
  flag: "🇬🇧",
  tz: "Europe/London",
  currency: {"code": "GBP", "symbol": "£", "name": "Britisches Pfund"},

  glance: {"plug": "G", "volt": 230, "adapter": "ja", "drive": "L", "water": "Trinkbar", "tip": "10–12,5 % (oft schon als Service Charge auf der Rechnung)", "dial": "+44"},
  taxi: {"local": "Please take me to this address.", "phonetic": ""},

  phrases: [
    { title: "🇬🇧 Englisch (UK)", lang: "en-GB", items: [
      {"de": "Hallo / Guten Morgen", "local": "Hello / Good morning", "phonetic": ""},
      {"de": "Danke schön", "local": "Thank you very much", "phonetic": ""},
      {"de": "Entschuldigung", "local": "Excuse me / Sorry", "phonetic": ""},
      {"de": "Wie viel kostet das?", "local": "How much is this?", "phonetic": ""},
      {"de": "Die Rechnung, bitte", "local": "Could I have the bill, please?", "phonetic": ""},
      {"de": "Wo ist das Krankenhaus?", "local": "Where is the hospital?", "phonetic": ""},
      {"de": "Ein großes Bier, bitte", "local": "A pint, please", "phonetic": ""},
      {"de": "Wo ist die Toilette?", "local": "Where's the loo, please?", "phonetic": ""},
      {"de": "Ich bin Vegetarier/in", "local": "I'm vegetarian", "phonetic": ""},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "I don't eat meat or fish, but I do eat eggs", "phonetic": ""},
      {"de": "Das Essen war sehr lecker", "local": "That was delicious!", "phonetic": ""},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "Help! It's an emergency!", "phonetic": ""}
    ]},
    { title: "☕ Britisch für Anfänger", lang: "en-GB", items: [
      {"de": "Danke / Tschüss (locker)", "local": "Cheers!", "phonetic": ""},
      {"de": "Alles klar? (Begrüßung)", "local": "You alright?", "phonetic": ""},
      {"de": "Toilette", "local": "Loo", "phonetic": ""},
      {"de": "Ein halbes Bier", "local": "A half (pint)", "phonetic": ""},
      {"de": "Pommes", "local": "Chips", "phonetic": ""},
      {"de": "Chips", "local": "Crisps", "phonetic": ""},
      {"de": "Schlange stehen", "local": "Queue", "phonetic": ""}
    ]}
  ],

  emergency: [
    ["999", "Notruf (Polizei, Rettung, Feuerwehr) – 112 geht auch"],
    ["111", "NHS – medizinische Hilfe (nicht lebensbedrohlich)"],
    ["101", "Polizei (nicht dringend)"]
  ],
  embassy: {"title": "Deutsche Botschaft London", "address": ["23 Belgrave Square", "London SW1X 8PZ"], "phone": "+44 20 7824 1300", "emergency": "+44 7956 626107"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/grossbritannien-node",

  rules: [
    ["Einreise", "Für die Einreise brauchen Deutsche eine elektronische Einreisegenehmigung (ETA) – vorab online beantragen. Personalausweis reicht nicht, Reisepass nötig."],
    ["Linksverkehr", "Beim Überqueren der Straße zuerst nach RECHTS schauen („Look right“ steht oft auf dem Boden)."],
    ["Anstellen", "Schlange stehen ist heilig – nie vordrängeln, auch nicht an der Bushaltestelle."],
    ["Pub", "Im Pub bestellt und bezahlt man an der Theke, kein Trinkgeld an der Bar üblich."],
    ["Kontaktlos", "In London Bus, U-Bahn & Co. einfach mit der Kreditkarte oder dem Handy bezahlen (Tageshöchstbetrag)."]
  ],
  sim: [
    ["Kein EU-Roaming", "Seit dem Brexit berechnen viele deutsche Tarife Roaming extra – Tarif vorher prüfen!"],
    ["Alternative", "Prepaid-SIM von EE, Vodafone, O2 oder Three im Supermarkt, oder vorab eSIM."]
  ],
  apps: [
    ["TfL Go & Citymapper", "Öffis in London in Echtzeit."],
    ["Trainline", "Zugtickets für ganz Großbritannien."],
    ["Uber & FreeNow", "Taxis und Black Cabs per App."]
  ],

  places: [
    ["London", 51.5074, -0.1278],
    ["Edinburgh", 55.9533, -3.1883],
    ["Manchester", 53.4808, -2.2426],
    ["Isle of Skye (Portree)", 57.4125, -6.1964],
    ["Cornwall (St Ives)", 50.2083, -5.4908]
  ]
};
