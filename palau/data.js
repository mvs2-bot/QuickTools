/* Quick-Tools · Palau – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "palau",
  name: "Palau",
  flag: "🇵🇼",
  tz: "Pacific/Palau",
  currency: {"code": "USD", "symbol": "$", "name": "US-Dollar (offizielle Währung)"},

  glance: {"plug": "A / B", "volt": 120, "voltNote": "120 V – Netzteil muss 100–240 V können", "adapter": "ja", "drive": "R", "water": "Nicht empfohlen – Flaschenwasser", "tip": "ca. 10 %", "dial": "+680"},
  taxi: {"local": "Please take me to this address.", "phonetic": "pliis TEIK mi tu sis ä-DRES"},

  phrases: [
    { title: "🇵🇼 Englisch", lang: "en-PW", items: [
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
    { title: "🇵🇼 Palauisch", lang: "pau", items: [
      {"de": "Hallo", "local": "Alii", "phonetic": "a-LI"},
      {"de": "Guten Morgen", "local": "Ungil tutau", "phonetic": "U-ngil TU-tau"},
      {"de": "Danke", "local": "Sulang", "phonetic": "SU-lang"},
      {"de": "Danke schön", "local": "Mesulang", "phonetic": "me-SU-lang"}
    ]}
  ],

  emergency: [
    ["911", "Notruf (Polizei, Rettung, Feuerwehr)"]
  ],
  embassy: {"title": "Zuständig: Deutsche Botschaft Manila (Philippinen)", "address": ["25/F Tower 2, RCBC Plaza, 6819 Ayala Ave", "1200 Makati City, Metro Manila, Philippinen"], "phone": "+63 2 8702 3000", "emergency": "+63 917 867 3000", "emergencyNote": "(bis 24 Uhr, Wochenende & Feiertage 8–24 Uhr; Honorarkonsul Koror: +680 448 5271)"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/palau-node",

  rules: [
    ["Einreise", "Das Palau-Einreiseformular innerhalb von 72 h vor Ankunft online ausfüllen (kostenlos – Vorsicht vor kostenpflichtigen Fake-Seiten). Bei Ankunft wird der „Palau Pledge“ (Umweltversprechen) in den Pass gestempelt und unterschrieben."],
    ["Sonnencreme", "Korallenschädliche Sonnencreme ist verboten – nur „reef-safe“ verwenden, sonst bis 1.000 $ Strafe."],
    ["Rock Islands", "Für Rock Islands und Jellyfish Lake ist eine Genehmigung (Permit) nötig, meist über den Touranbieter."],
    ["Ausgangssperre", "In Teilen von Koror und Airai gilt eine traditionelle nächtliche Ausgangssperre (Bul, ca. 0–5 Uhr)."],
    ["Wracks & Fundstücke", "Kriegsrelikte und Wrackteile nicht berühren oder mitnehmen."]
  ],
  car: [
    ["Straßen", "Rechtsverkehr, Tempo meist 25 mph (40 km/h). Kein Alkohol am Steuer."]
  ],
  substances: [
    ["E-Zigaretten", "Vapes sind seit 2023 komplett verboten – Einfuhr, Besitz und Benutzung; mitgebrachte Geräte bei der Einreise straffrei abgeben."],
    ["Alkohol", "Ab 21. Trinken in der Öffentlichkeit ist verboten."],
    ["Drogen", "Drogenhandel wird grundsätzlich mit 25 Jahren Haft und 50.000 $ Geldstrafe bestraft; auch Besitz wird streng geahndet."]
  ],
  sim: [
    ["Lokale SIM", "PNCC (Palau National Communications Corp.) am Flughafen oder in Koror."],
    ["eSIM", "eSIM-Angebote vorab prüfen – für kleine Inselstaaten oft teuer oder gar nicht verfügbar."]
  ],
  apps: [
    ["WhatsApp", "Unterkünfte, Bootstransfers und Ausflüge werden meist per WhatsApp organisiert."],
    ["Google Maps", "Offline-Karten herunterladen – außerhalb der Hauptorte ist das Netz oft schwach."]
  ],

  places: [
    ["Ngerulmud", 7.5006, 134.6242],
    ["Koror", 7.3419, 134.4792],
    ["Rock Islands", 7.22, 134.37],
    ["Jellyfish Lake", 7.161, 134.376],
    ["Peleliu", 7.0, 134.24]
  ]
};
