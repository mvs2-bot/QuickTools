/* Quick-Tools · Mikronesien – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "mikronesien",
  name: "Mikronesien",
  flag: "🇫🇲",
  tz: "Pacific/Pohnpei",
  currency: {"code": "USD", "symbol": "$", "name": "US-Dollar (offizielle Währung)"},

  glance: {"plug": "A / B", "volt": 120, "voltNote": "120 V – Netzteil muss 100–240 V können", "adapter": "ja", "drive": "R", "water": "Nicht trinkbar", "tip": "Nicht üblich", "dial": "+691"},
  taxi: {"local": "Please take me to this address.", "phonetic": "pliis TEIK mi tu sis ä-DRES"},

  phrases: [
    { title: "🇫🇲 Englisch", lang: "en-FM", items: [
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
    { title: "🌴 Lokale Grußformeln", lang: "en-FM", items: [
      {"de": "Hallo (Pohnpei)", "local": "Kaselehlie", "phonetic": "ka-se-LE-li-e"},
      {"de": "Danke (Pohnpei)", "local": "Kalahngan", "phonetic": "ka-LAN-gan"},
      {"de": "Danke (Chuuk)", "local": "Kinisou", "phonetic": "KI-ni-sou"},
      {"de": "Danke (Yap)", "local": "Kammagar", "phonetic": "kam-ma-GAR"},
      {"de": "Danke (Kosrae)", "local": "Kulo", "phonetic": "KU-lo"}
    ]}
  ],

  emergency: [
    ["911", "Notruf / Polizei (nicht in Chuuk)"],
    ["+691 330 2224", "Polizei Chuuk"],
    ["+691 320 2223", "Feuerwehr Pohnpei"]
  ],
  embassy: {"title": "Zuständig: Deutsche Botschaft Manila (Philippinen)", "address": ["25/F Tower 2, RCBC Plaza, 6819 Ayala Ave", "1200 Makati City, Metro Manila, Philippinen"], "phone": "+63 2 8702 3000", "emergency": "+63 917 867 3000", "emergencyNote": "(bis 24 Uhr, Wochenende & Feiertage 8–24 Uhr)"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/mikronesien-node",

  rules: [
    ["Vier Staaten", "Pohnpei, Chuuk, Yap und Kosrae haben eigene Sprachen, Bräuche und teils eigene Einreise- und Tauchgebühren."],
    ["Kleidung", "Konservativ: Knie und Schultern bedecken; in Yap sollten Frauen die Oberschenkel bedecken."],
    ["Privatland", "Fast alles Land gehört Familien oder Clans – vor dem Betreten von Stränden, Pfaden oder Ruinen (z. B. Nan Madol) fragen, oft wird eine kleine Gebühr fällig."],
    ["Wracks", "Die Weltkriegswracks in der Chuuk-Lagune sind Kriegsgräber: nichts mitnehmen, nur mit Tauchgenehmigung."]
  ],
  car: [
    ["Straßen", "Rechtsverkehr. Straßen teils schlecht und voller Schlaglöcher; nachts unbeleuchtet."]
  ],
  substances: [
    ["Alkohol", "Ab 21. In Teilen Chuuks gilt ein Alkoholverbot."],
    ["Betelnuss & Sakau", "Betelnuss und Sakau (Kava) sind weit verbreitet – Sakau nicht mit Alkohol kombinieren."],
    ["Drogen", "Verboten und streng bestraft."]
  ],
  sim: [
    ["Lokale SIM", "FSM Telecom (FSMTC) – Netz und Datenvolumen sind begrenzt."],
    ["eSIM", "eSIM-Angebote vorab prüfen – für kleine Inselstaaten oft teuer oder gar nicht verfügbar."]
  ],
  apps: [
    ["United (Island Hopper)", "Flüge zwischen Guam, Chuuk, Pohnpei, Kosrae und weiter nach Majuro/Honolulu."],
    ["WhatsApp", "Unterkünfte, Bootstransfers und Ausflüge werden meist per WhatsApp organisiert."],
    ["Google Maps", "Offline-Karten herunterladen – außerhalb der Hauptorte ist das Netz oft schwach."]
  ],

  places: [
    ["Palikir", 6.9248, 158.161],
    ["Nan Madol (Pohnpei)", 6.8436, 158.335],
    ["Chuuk (Weno)", 7.4467, 151.8494, "Pacific/Chuuk"],
    ["Yap (Colonia)", 9.5145, 138.1291, "Pacific/Chuuk"],
    ["Kosrae", 5.3254, 163.0089, "Pacific/Kosrae"]
  ]
};
