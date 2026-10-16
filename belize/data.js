/* Quick-Tools · Belize – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "belize",
  name: "Belize",
  flag: "🇧🇿",
  tz: "America/Belize",
  currency: {"code": "BZD", "symbol": "BZ$", "name": "Belize-Dollar"},

  glance: {"plug": "A / B / G", "volt": 110, "adapter": "ja", "drive": "R", "water": "Nicht empfohlen – Flaschenwasser", "tip": "ca. 10 %", "dial": "+501", "voltNote": "110 V – Netzteil muss 100–240 V können"},
  taxi: {"local": "Please take me to this address.", "phonetic": "plies TEIK mi tu DIS ä-DRESS"},

  phrases: [
    { title: "🇧🇿 Englisch", lang: "en-BZ", items: [
      {"de": "Hallo / Guten Morgen", "local": "Hello / Good morning", "phonetic": "hä-LOU / gud MOR-ning"},
      {"de": "Danke schön", "local": "Thank you very much", "phonetic": "THÄNK ju WE-ri matsch"},
      {"de": "Entschuldigung", "local": "Excuse me / Sorry", "phonetic": "iks-KJUS mi / SO-ri"},
      {"de": "Wie viel kostet das?", "local": "How much is this?", "phonetic": "hau MATSCH is DIS"},
      {"de": "Die Rechnung, bitte", "local": "The bill, please", "phonetic": "dhe BILL, plies"},
      {"de": "Wo ist das Krankenhaus?", "local": "Where is the hospital?", "phonetic": "wär is dhe HOS-pi-tl"},
      {"de": "Ein großes Bier, bitte", "local": "A large beer, please", "phonetic": "e LAADSCH bier, plies"},
      {"de": "Wo ist die Toilette?", "local": "Where is the toilet?", "phonetic": "wär is dhe TEU-let"},
      {"de": "Ich bin Vegetarier/in", "local": "I'm vegetarian", "phonetic": "aim we-dsche-TÄ-ri-en"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "I don't eat meat or fish, but I do eat eggs", "phonetic": "ai dount IET miet or FISCH, bat ai du iet ÄGS"},
      {"de": "Das Essen war sehr lecker", "local": "That was delicious!", "phonetic": "dhät wos di-LI-schess"},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "Help! It's an emergency!", "phonetic": "HELP! its en i-MÖR-dschen-si"}
    ]},
    { title: "🇧🇿 Spanisch", lang: "es-BZ", items: [
      {"de": "Hallo / Guten Tag", "local": "Hola / Buenos días", "phonetic": "O-la / BWE-nos DI-as"},
      {"de": "Danke schön", "local": "Muchas gracias", "phonetic": "MU-tschas GRA-sjas"},
      {"de": "Wie viel kostet das?", "local": "¿Cuánto cuesta?", "phonetic": "KWAN-to KWES-ta"},
      {"de": "Die Rechnung, bitte", "local": "La cuenta, por favor", "phonetic": "la KWEN-ta, por fa-WOR"}
    ]}
  ],

  emergency: [
    ["911", "Notruf (Polizei, Rettung, Feuerwehr)"]
  ],
  embassy: {"title": "Zuständig: Deutsche Botschaft Guatemala-Stadt (Guatemala)", "address": ["Avenida La Reforma 9-55, Zona 10", "Edificio Reforma 10, Nivel 10", "Ciudad de Guatemala"], "phone": "+502 2364 6700", "emergency": "+502 5709 5004", "emergencyNote": "(auch per SMS; Honorarkonsulin Belize City: +501 223 0896)"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/belize-node",

  rules: [
    ["US-Dollar", "US-Dollar werden überall angenommen (fester Kurs 1 US$ = 2 BZ$), Wechselgeld kommt meist in Belize-Dollar. Bei Preisen nachfragen, welche Währung gemeint ist."],
    ["Riff", "Am Barrier Reef Korallen nicht berühren, riffverträgliche Sonnencreme nutzen; Schnorcheltouren nur mit lizenzierten Guides."],
    ["Sicherheit", "In Belize City nachts nicht zu Fuß unterwegs sein; auf den Cayes und im Cayo District ist es entspannter."],
    ["Ausreise", "Ausreisegebühr: über Land 19 US$ (bar bereithalten), per Flugzeug 37,50 US$."],
    ["Geldwechsel", "Nur bei Banken oder zugelassenen Wechselstuben tauschen – Geldwechsel auf der Straße ist strafbar."]
  ],
  car: [
    ["Straßen", "Viele Bodenschwellen („sleeping policemen“) ohne Warnung; abseits der Highways Schotterpisten. Nachts nicht fahren."]
  ],
  substances: [
    ["Alkohol", "Ab 18 Jahren."],
    ["Drogen", "Besitz kleiner Mengen Cannabis ist entkriminalisiert, Kauf und Verkauf bleiben illegal. Andere Drogen werden streng bestraft."]
  ],
  sim: [
    ["Lokale SIM", "Prepaid-SIM von Digi oder Smart – in Läden und am Flughafen erhältlich."],
    ["eSIM", "Alternativ vorab eSIM (z. B. Airalo)."]
  ],
  apps: [
    ["Wassertaxis", "Fähren zwischen Belize City, Caye Caulker und San Pedro – Tickets am Anleger oder online."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Belmopan", 17.251, -88.759],
    ["Caye Caulker", 17.7425, -88.0247],
    ["San Pedro (Ambergris Caye)", 17.9214, -87.9611],
    ["San Ignacio", 17.1561, -89.0714],
    ["Placencia", 16.5144, -88.3667]
  ]
};
