/* Quick-Tools · Salomonen – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "salomonen",
  name: "Salomonen",
  flag: "🇸🇧",
  tz: "Pacific/Guadalcanal",
  currency: {"code": "SBD", "symbol": "SI$", "name": "Salomonen-Dollar"},

  glance: {"plug": "I / G", "volt": 230, "adapter": "ja", "drive": "L", "water": "Nicht trinkbar", "tip": "Nicht üblich", "dial": "+677"},
  taxi: {"local": "Plis, tekem mi go long disfala adres.", "phonetic": "pliis, TE-kem mi go long DIS-fa-la a-DRES"},

  phrases: [
    { title: "🇸🇧 Englisch", lang: "en-SB", items: [
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
    { title: "🇸🇧 Pijin", lang: "pis", items: [
      {"de": "Hallo", "local": "Halo", "phonetic": "HA-lo"},
      {"de": "Danke schön", "local": "Tanggio tumas", "phonetic": "TANG-gi-o TU-mas"},
      {"de": "Wie viel kostet das?", "local": "Hamas nao diswan?", "phonetic": "HA-mas nau DIS-wan"},
      {"de": "Bis bald", "local": "Lukim iu", "phonetic": "LU-kim ju"}
    ]}
  ],

  emergency: [
    ["999", "Polizei"],
    ["111", "Rettungsdienst"],
    ["988", "Feuerwehr"],
    ["977", "Seenotrettung"]
  ],
  embassy: {"title": "Zuständig: Deutsche Botschaft Canberra (Australien)", "address": ["119 Empire Circuit, Yarralumla", "ACT 2600 Canberra, Australien"], "phone": "+61 2 6270 1911", "emergency": "+61 412 359 826", "emergencyNote": "(nur dringende Notfälle; Honorarkonsulin Honiara: +677 768 7257)"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/salomonen-node",

  rules: [
    ["Custom Land", "Fast alles Land ist Stammesland: Vor dem Betreten von Stränden, Riffen oder Wasserfällen fragen; oft wird eine kleine „Custom Fee“ verlangt."],
    ["Kleidung", "Konservativ: Knie und Schultern bedecken, außerhalb der Resorts keine Badebekleidung. Zärtlichkeiten in der Öffentlichkeit vermeiden."],
    ["Weltkriegsrelikte", "Blindgänger liegen noch im Boden – nichts anfassen; Relikte dürfen nicht ausgeführt werden."],
    ["Malaria", "Hohes Malariarisiko – Prophylaxe mit dem Arzt besprechen, Mückenschutz."],
    ["Gesetze", "Homosexuelle Handlungen sind strafbar."]
  ],
  car: [
    ["Fahren", "Linksverkehr. Straßen außerhalb Honiaras schlecht, Verkehrsregeln werden oft ignoriert; nachts nicht fahren."]
  ],
  substances: [
    ["Alkohol", "Ab 21. Nur verschlossene Markengetränke trinken (Methanol-Gefahr)."],
    ["Drogen", "Verboten und streng bestraft."]
  ],
  sim: [
    ["Lokale SIM", "Our Telekom oder bmobile in Honiara – kein 5G, auf vielen Inseln kaum Netz."],
    ["eSIM", "Ausländische eSIMs funktionieren im 4G-Netz; lokale Anbieter verkaufen keine eSIM."]
  ],
  apps: [
    ["Solomon Airlines", "Inlandsflüge zu den Inselgruppen (z. B. Gizo, Munda)."],
    ["WhatsApp", "Unterkünfte, Bootstransfers und Ausflüge werden meist per WhatsApp organisiert."],
    ["Google Maps", "Offline-Karten herunterladen – außerhalb der Hauptorte ist das Netz oft schwach."]
  ],

  places: [
    ["Honiara", -9.4456, 159.9729],
    ["Gizo", -8.103, 156.8419],
    ["Munda", -8.327, 157.263],
    ["Marovo-Lagune", -8.5, 158.1],
    ["Auki (Malaita)", -8.7676, 160.7034]
  ]
};
