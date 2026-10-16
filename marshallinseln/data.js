/* Quick-Tools · Marshallinseln – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "marshallinseln",
  name: "Marshallinseln",
  flag: "🇲🇭",
  tz: "Pacific/Majuro",
  currency: {"code": "USD", "symbol": "$", "name": "US-Dollar (offizielle Währung)"},

  glance: {"plug": "A / B", "volt": 120, "voltNote": "120 V – Netzteil muss 100–240 V können", "adapter": "ja", "drive": "R", "water": "Nicht trinkbar", "tip": "Nicht üblich", "dial": "+692"},
  taxi: {"local": "Please take me to this address.", "phonetic": "pliis TEIK mi tu sis ä-DRES"},

  phrases: [
    { title: "🇲🇭 Englisch", lang: "en-MH", items: [
      {"de": "Hallo / Guten Tag", "local": "Hello / Good day", "phonetic": "hä-LOU / gud DÄI"},
      {"de": "Danke schön", "local": "Thank you very much", "phonetic": "SÄNK ju WE-ri matsch"},
      {"de": "Entschuldigung", "local": "Excuse me / Sorry", "phonetic": "iks-KJUUS mi / SO-ri"},
      {"de": "Wie viel kostet das?", "local": "How much is this?", "phonetic": "hau MATSCH is SIS"},
      {"de": "Die Rechnung, bitte", "local": "Check, please", "phonetic": "TSCHÄK, pliis"},
      {"de": "Wo ist die Toilette?", "local": "Where is the toilet?", "phonetic": "wär is se TEU-let"},
      {"de": "Wo ist das Krankenhaus?", "local": "Where is the hospital?", "phonetic": "wär is se HOS-pi-tl"},
      {"de": "Ein großes Bier bitte", "local": "A large beer, please", "phonetic": "ä LAADSCH biir, pliis"},
      {"de": "Ich bin Vegetarier/in", "local": "I'm vegetarian", "phonetic": "aim we-dsche-TÄ-ri-en"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "I don't eat meat or fish, but I do eat eggs", "phonetic": "ai dount iit MIIT or FISCH, bat ai DU iit EGS"},
      {"de": "Das Essen war sehr lecker", "local": "That was delicious!", "phonetic": "sät wos di-LI-schös"},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "Help! It's an emergency!", "phonetic": "HÄLP! its än i-MÖR-dschen-si"}
    ]},
    { title: "🇲🇭 Marshallesisch", lang: "mh", items: [
      {"de": "Hallo", "local": "Iakwe", "phonetic": "JAK-we"},
      {"de": "Danke", "local": "Kommol", "phonetic": "KOM-mol"},
      {"de": "Danke schön", "local": "Kommol tata", "phonetic": "KOM-mol TA-ta"}
    ]}
  ],

  emergency: [
    ["+692 625 8666", "Polizei (Majuro)"],
    ["+692 625 4144", "Rettungsdienst (Majuro)"],
    ["+692 625 3233", "Feuerwehr (Majuro)"]
  ],
  embassy: {"title": "Zuständig: Deutsche Botschaft Manila (Philippinen)", "address": ["25/F Tower 2, RCBC Plaza, 6819 Ayala Ave", "1200 Makati City, Metro Manila, Philippinen"], "phone": "+63 2 8702 3000", "emergency": "+63 917 867 3000", "emergencyNote": "(bis 24 Uhr, Wochenende & Feiertage 8–24 Uhr; Honorarkonsulin Majuro: +692 455 1514)"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/marshallinseln-node",

  rules: [
    ["Einreise", "Rück- oder Weiterflugticket bereithalten – ohne kann die Einreise verweigert werden."],
    ["Kleidung", "Frauen sollten Knie und Schultern bedecken; Badebekleidung nur am Strand bzw. Resort."],
    ["Bargeld", "Wenige Geldautomaten, Karten nicht überall akzeptiert – US-Dollar in bar mitnehmen. Ausreisegebühr am Flughafen in bar."],
    ["Atolle", "Viele Inseln sind Privatland – vor dem Betreten fragen, für Außenatolle oft Genehmigung des Bürgermeisters nötig."]
  ],
  car: [
    ["Straße", "Rechtsverkehr. In Majuro gibt es praktisch nur eine Straße; Sammeltaxis halten auf Zuruf."]
  ],
  substances: [
    ["Alkohol", "Ab 21. Alkohol spielt bei vielen Gewalttaten eine Rolle – abends Vorsicht."],
    ["Drogen", "Auch Cannabis ist verboten; hohe Haft- oder Geldstrafen."]
  ],
  sim: [
    ["Lokale SIM", "NTA (National Telecommunications Authority) in Majuro – Netz außerhalb von Majuro und Ebeye sehr eingeschränkt."],
    ["eSIM", "eSIM-Angebote vorab prüfen – für kleine Inselstaaten oft teuer oder gar nicht verfügbar."]
  ],
  apps: [
    ["United (Island Hopper)", "Flugverbindung Guam – Majuro – Honolulu."],
    ["WhatsApp", "Unterkünfte, Bootstransfers und Ausflüge werden meist per WhatsApp organisiert."],
    ["Google Maps", "Offline-Karten herunterladen – außerhalb der Hauptorte ist das Netz oft schwach."]
  ],

  places: [
    ["Majuro", 7.0897, 171.3803],
    ["Laura (Majuro)", 7.165, 171.04],
    ["Arno", 7.08, 171.7],
    ["Ebeye (Kwajalein)", 8.78, 167.74]
  ]
};
