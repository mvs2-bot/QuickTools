/* Quick-Tools · Fidschi – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "fidschi",
  name: "Fidschi",
  flag: "🇫🇯",
  tz: "Pacific/Fiji",
  currency: {"code": "FJD", "symbol": "FJ$", "name": "Fidschi-Dollar"},

  glance: {"plug": "I", "volt": 240, "adapter": "ja", "drive": "L", "water": "Lieber Flaschenwasser – in vielen Resorts aufbereitet", "tip": "Nicht üblich – Resorts haben oft eine Sammelkasse fürs Personal", "dial": "+679"},
  taxi: {"local": "Please take me to this address.", "phonetic": "pliis TEIK mi tu sis ä-DRES"},

  phrases: [
    { title: "🇫🇯 Englisch", lang: "en-FJ", items: [
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
    { title: "🌺 Fidschianisch (iTaukei)", lang: "fj-FJ", items: [
      {"de": "Hallo", "local": "Bula!", "phonetic": "MBU-la"},
      {"de": "Danke", "local": "Vinaka", "phonetic": "wi-NA-ka"},
      {"de": "Danke schön", "local": "Vinaka vakalevu", "phonetic": "wi-NA-ka wa-ka-LE-wu"},
      {"de": "Auf Wiedersehen", "local": "Moce", "phonetic": "MO-the (engl. th)"},
      {"de": "Ja / Nein", "local": "Io / Sega", "phonetic": "I-o / SE-nga"}
    ]}
  ],

  emergency: [
    ["911", "Notruf / Rettungsdienst"],
    ["917", "Polizei"],
    ["910", "Feuerwehr"]
  ],
  embassy: {"title": "Deutsche Botschaft Suva", "address": ["14 Banuve Street, Nasese", "Suva"], "phone": "+679 331 6100", "emergency": "+64 21 651 987", "emergencyNote": "(Bereitschaft der Botschaft Wellington, die für Konsularfragen zuständig ist; Honorarkonsulat Nadi: +679 672 6710)"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/fidschi-node",

  rules: [
    ["Dörfer", "Bei Dorfbesuchen Schultern und Knie bedecken (Sulu/Sarong), Hut und Sonnenbrille abnehmen und als Gastgeschenk Kava-Wurzel (Yaqona) für die Sevusevu-Zeremonie mitbringen."],
    ["Kopf", "Den Kopf eines anderen nicht berühren – gilt als respektlos."],
    ["Sonntag", "Sonntag ist Kirchtag: In Dörfern Ruhe halten, viele Läden haben zu."],
    ["Kava", "Kava (Yaqona) nicht mit Alkohol oder Medikamenten kombinieren."],
    ["Zyklone", "Zyklonsaison ca. November–April – Wetterwarnungen beachten."]
  ],
  car: [
    ["Linksverkehr", "Nachts möglichst nicht fahren: Fußgänger, Tiere und kaum Beleuchtung. Den deutschen Führerschein plus internationalen Führerschein mitnehmen."]
  ],
  substances: [
    ["Alkohol", "Ab 18. Betrunkenes Verhalten in der Öffentlichkeit kann zur Festnahme führen."],
    ["Drogen", "Schon der Besitz kleiner Mengen kann mit Gefängnis bestraft werden."]
  ],
  sim: [
    ["Lokale SIM", "Vodafone Fiji oder Digicel am Flughafen Nadi – Pass nötig."]
  ],
  apps: [
    ["WhatsApp", "Unterkünfte, Bootstransfers und Ausflüge werden meist per WhatsApp organisiert."],
    ["Fiji Airways", "Flüge, auch Inlandsflüge mit Fiji Link."],
    ["Windy", "Wetter und Zyklone im Blick behalten (Zyklonsaison ca. November–April)."]
  ],

  places: [
    ["Suva", -18.1416, 178.4419],
    ["Nadi", -17.7765, 177.4356],
    ["Mamanuca-Inseln", -17.68, 177.17],
    ["Coral Coast (Sigatoka)", -18.1416, 177.5069],
    ["Savusavu", -16.7781, 179.3316]
  ]
};
