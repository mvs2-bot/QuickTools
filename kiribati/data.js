/* Quick-Tools · Kiribati – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "kiribati",
  name: "Kiribati",
  flag: "🇰🇮",
  tz: "Pacific/Tarawa",
  currency: {"code": "AUD", "symbol": "A$", "name": "Australischer Dollar (offizielle Währung)"},

  glance: {"plug": "I", "volt": 240, "adapter": "ja", "drive": "L", "water": "Nicht trinkbar", "tip": "Nicht üblich", "dial": "+686"},
  taxi: {"local": "Please take me to this address.", "phonetic": "pliis TEIK mi tu sis ä-DRES"},

  phrases: [
    { title: "🇰🇮 Englisch", lang: "en-KI", items: [
      {"de": "Hallo / Guten Tag", "local": "Hello / Good day", "phonetic": "hä-LOU / gud DÄI"},
      {"de": "Danke schön", "local": "Thank you very much", "phonetic": "SÄNK ju WE-ri matsch"},
      {"de": "Entschuldigung", "local": "Excuse me / Sorry", "phonetic": "iks-KJUUS mi / SO-ri"},
      {"de": "Wie viel kostet das?", "local": "How much is this?", "phonetic": "hau MATSCH is SIS"},
      {"de": "Die Rechnung, bitte", "local": "The bill, please", "phonetic": "se BILL, pliis"},
      {"de": "Wo ist die Toilette?", "local": "Where is the toilet?", "phonetic": "wär is se TEU-let"},
      {"de": "Wo ist das Krankenhaus?", "local": "Where is the hospital?", "phonetic": "wär is se HOS-pi-tl"},
      {"de": "Ein großes Bier bitte", "local": "A large beer, please", "phonetic": "ä LAADSCH biir, pliis"},
      {"de": "Ich bin Vegetarier/in", "local": "I'm vegetarian", "phonetic": "aim we-dsche-TÄ-ri-en"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "I don't eat meat or fish, but I do eat eggs", "phonetic": "ai dount iit MIIT or FISCH, bat ai DU iit EGS"},
      {"de": "Das Essen war sehr lecker", "local": "That was delicious!", "phonetic": "sät wos di-LI-schös"},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "Help! It's an emergency!", "phonetic": "HÄLP! its än i-MÖR-dschen-si"}
    ]},
    { title: "🇰🇮 Kiribatisch (Gilbertesisch)", lang: "gil", items: [
      {"de": "Hallo", "local": "Mauri", "phonetic": "MAU-ri"},
      {"de": "Danke", "local": "Ko rabwa", "phonetic": "ko RA-ba"},
      {"de": "Auf Wiedersehen", "local": "Ti a bo", "phonetic": "ti a BOO"}
    ]}
  ],

  emergency: [
    ["192", "Polizei"],
    ["194", "Rettungsdienst (Süd-Tarawa)"],
    ["193", "Feuerwehr"]
  ],
  embassy: {"title": "Zuständig: Deutsche Botschaft Wellington (Neuseeland)", "address": ["90-92 Hobson Street, Thorndon", "6011 Wellington, Neuseeland"], "phone": "+64 4 473 6063", "emergency": "+64 21 651 987", "emergencyNote": "(auch per SMS; die Botschaft Suva leistet vor Ort nur Nothilfe)"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/kiribati-node",

  rules: [
    ["Datumsgrenze", "Kiribati erstreckt sich über drei Zeitzonen; auf Kiritimati (Line Islands) gilt UTC+14 – Flugdaten genau prüfen."],
    ["Bargeld", "Kaum Kartenzahlung und wenige Geldautomaten – genug australische Dollar in bar mitnehmen."],
    ["Dörfer", "Im Maneaba (Versammlungshaus) nur nach Einladung Platz nehmen; zurückhaltend kleiden."],
    ["Gesundheit", "Dengue und Durchfallerkrankungen sind verbreitet – Mückenschutz und nur abgekochtes oder Flaschenwasser."]
  ],
  car: [
    ["Linksverkehr", "Eine Hauptstraße auf Süd-Tarawa; viele Fußgänger, Tiere und Minibusse – langsam fahren."]
  ],
  substances: [
    ["Alkohol", "Selbstgebrautes Kokos-Toddy (Kaokioki) meiden; öffentliche Trunkenheit wird nicht gern gesehen."],
    ["Drogen", "Verboten und streng bestraft."]
  ],
  sim: [
    ["Lokale SIM", "Vodafone Kiribati in Süd-Tarawa – mobiles Internet langsam, auf Außeninseln oft kein Netz."],
    ["eSIM", "eSIM-Angebote vorab prüfen – für kleine Inselstaaten oft teuer oder gar nicht verfügbar."]
  ],
  apps: [
    ["WhatsApp", "Unterkünfte, Bootstransfers und Ausflüge werden meist per WhatsApp organisiert."],
    ["Google Maps", "Offline-Karten herunterladen – außerhalb der Hauptorte ist das Netz oft schwach."]
  ],

  places: [
    ["Tarawa", 1.329, 172.979],
    ["Betio", 1.3573, 172.9206],
    ["Abaiang", 1.85, 172.98],
    ["Kiritimati", 1.87, -157.43, "Pacific/Kiritimati"]
  ]
};
