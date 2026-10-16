/* Quick-Tools · Singapur – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "singapur",
  name: "Singapur",
  flag: "🇸🇬",
  tz: "Asia/Singapore",
  currency: {"code": "SGD", "symbol": "S$", "name": "Singapur-Dollar"},

  glance: {"plug": "G", "volt": 230, "adapter": "ja", "drive": "L", "water": "Trinkbar", "tip": "Nicht üblich (meist 10 % Service-Charge auf der Rechnung)", "dial": "+65"},
  taxi: {"local": "Please take me to this address.", "phonetic": "PLIES teik mi tu DIS a-DRESS"},

  phrases: [
    { title: "🇸🇬 Englisch", lang: "en-SG", items: [
      {"de": "Hallo / Guten Tag", "local": "Hello / Good afternoon", "phonetic": "he-LOU / gud AAF-ter-nuun"},
      {"de": "Danke schön", "local": "Thank you very much", "phonetic": "SÄNK ju WE-ri matsch"},
      {"de": "Entschuldigung", "local": "Excuse me / Sorry", "phonetic": "iks-KJUUS mi / SO-ri"},
      {"de": "Wie viel kostet das?", "local": "How much is this?", "phonetic": "hau MATSCH is DIS"},
      {"de": "Die Rechnung, bitte", "local": "The bill, please", "phonetic": "se BILL, pliis"},
      {"de": "Wo ist das Krankenhaus?", "local": "Where is the hospital?", "phonetic": "WÄR is se HOS-pi-tel"},
      {"de": "Ein großes Bier bitte", "local": "A large beer, please", "phonetic": "e LAARDSCH bier, pliis"},
      {"de": "Ich bin Vegetarier/in", "local": "I'm vegetarian", "phonetic": "aim we-dsche-TÄ-ri-en"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "I don't eat meat or fish, but I do eat eggs", "phonetic": "ai DOUNT iit MIIT or FISCH, bat ai DU iit EGGS"},
      {"de": "Bitte nicht scharf", "local": "Not spicy, please", "phonetic": "NOT SPEI-si, pliis"},
      {"de": "Das Essen war sehr lecker", "local": "The food was delicious", "phonetic": "se FUUD wos di-LI-schös"},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "Help! It's an emergency!", "phonetic": "HELP! its en i-MÖR-dschen-si"}
    ]},
    { title: "🇨🇳 Chinesisch (Mandarin)", lang: "zh-SG", items: [
      {"de": "Hallo", "local": "你好", "phonetic": "ni HAU"},
      {"de": "Danke", "local": "谢谢", "phonetic": "SSIE-ssie"},
      {"de": "Wie viel kostet das?", "local": "多少钱？", "phonetic": "duo-schau TSCHIEN"},
      {"de": "Die Rechnung, bitte", "local": "买单", "phonetic": "mai-DAN"}
    ]},
    { title: "🇸🇬 Malaiisch", lang: "ms-SG", items: [
      {"de": "Guten Morgen", "local": "Selamat pagi", "phonetic": "se-LA-mat PA-gi"},
      {"de": "Danke schön", "local": "Terima kasih", "phonetic": "te-RI-ma KA-sih"}
    ]}
  ],

  emergency: [
    ["999", "Polizei"],
    ["995", "Rettungsdienst & Feuerwehr"],
    ["1777", "Krankentransport (kein Notfall)"]
  ],
  embassy: {"title": "Deutsche Botschaft Singapur", "address": ["50 Raffles Place, #28-00 Singapore Land Tower", "Singapore 048623"], "phone": "+65 6533 6002", "emergency": "+65 9817 0414", "emergencyNote": "(werktags bis 24 Uhr, Wochenende & Feiertage 8–24 Uhr)"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/singapur-node",

  rules: [
    ["Einreise", "Innerhalb von drei Tagen vor der Ankunft die kostenlose SG Arrival Card online (oder per App MyICA) ausfüllen."],
    ["Bußgelder", "Hohe Strafen für Müll wegwerfen, Spucken, Rauchen außerhalb markierter Zonen und Essen oder Trinken in der MRT. Kaugummi darf nicht eingeführt oder verkauft werden."],
    ["Straße überqueren", "Nur an Ampeln oder Zebrastreifen – „Jaywalking“ kostet Bußgeld."],
    ["Durian", "Die stark riechende Durian-Frucht ist in MRT, Bussen und vielen Hotels verboten."],
    ["Gesetze", "Homosexuelle Handlungen sind seit 2022 nicht mehr strafbar. Demonstrationen sind ohne Genehmigung verboten."]
  ],
  car: [
    ["Promille", "0,8 ‰ – aber sehr harte Strafen bei Verstößen. Linksverkehr."],
    ["Mietwagen", "Kaum nötig: MRT, Busse und Taxis sind günstig und gut. Innenstadt-Maut (ERP) wird automatisch abgebucht."]
  ],
  substances: [
    ["E-Zigaretten", "Vapes sind komplett verboten – auch Besitz und Gebrauch. Es drohen hohe Strafen, Kontrollen am Flughafen."],
    ["Alkohol", "Ab 18. Verkauf in Läden nur 7–22:30 Uhr, Trinken im öffentlichen Raum nachts verboten."],
    ["Drogen", "Drogendelikte werden extrem hart bestraft, bis hin zur Todesstrafe. Auch Konsum im Ausland kann bei Einreise per Test geahndet werden."]
  ],
  sim: [
    ["Lokale SIM", "Touristen-SIM von Singtel, StarHub oder M1 am Flughafen Changi oder in 7-Eleven – Pass nötig."],
    ["eSIM", "Alternativ vorab eSIM (z. B. Airalo) buchen – am einfachsten schon vor dem Abflug einrichten."]
  ],
  apps: [
    ["Grab & Gojek", "Taxis und Essenslieferung."],
    ["MyICA", "SG Arrival Card vor der Einreise ausfüllen."],
    ["Kontaktlos zahlen", "In MRT und Bussen einfach mit Kreditkarte oder Handy ein- und auschecken."]
  ],

  places: [
    ["Singapur (Innenstadt)", 1.2903, 103.8519],
    ["Marina Bay", 1.2834, 103.8607],
    ["Sentosa", 1.2494, 103.8303],
    ["Chinatown", 1.2836, 103.8443],
    ["Flughafen Changi", 1.3644, 103.9915]
  ]
};
