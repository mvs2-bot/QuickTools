/* Quick-Tools · Polen – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "polen",
  name: "Polen",
  flag: "🇵🇱",
  tz: "Europe/Warsaw",
  currency: {"code": "PLN", "symbol": "zł", "name": "Polnischer Złoty"},

  glance: {"plug": "C / E", "volt": 230, "adapter": "nein", "drive": "R", "water": "Trinkbar", "tip": "ca. 10 %", "dial": "+48"},
  taxi: {"local": "Proszę zawieźć mnie pod ten adres.", "phonetic": "PRO-sche SA-wjeschtsch mnje pod ten A-dres"},

  phrases: [
    { title: "🇵🇱 Polnisch", lang: "pl-PL", items: [
      {"de": "Guten Tag", "local": "Dzień dobry", "phonetic": "dschen DOB-ri"},
      {"de": "Danke schön", "local": "Dziękuję bardzo", "phonetic": "dschen-KU-je BAR-dso"},
      {"de": "Entschuldigung", "local": "Przepraszam", "phonetic": "pschep-RA-scham"},
      {"de": "Wie viel kostet das?", "local": "Ile to kosztuje?", "phonetic": "I-le to kosch-TU-je"},
      {"de": "Die Rechnung, bitte", "local": "Poproszę rachunek", "phonetic": "po-PRO-sche ra-CHU-nek"},
      {"de": "Sprechen Sie Englisch?", "local": "Czy mówi pan / pani po angielsku?", "phonetic": "tschi MU-wi pan / PA-ni po an-GJEL-sku"},
      {"de": "Wo ist das Krankenhaus?", "local": "Gdzie jest szpital?", "phonetic": "gdsche jest SCHPI-tal"},
      {"de": "Ein großes Bier bitte", "local": "Duże piwo, poproszę", "phonetic": "DU-sche PI-wo, po-PRO-sche"},
      {"de": "Ich bin Vegetarier/in", "local": "Jestem wegetarianinem / wegetarianką", "phonetic": "JES-tem we-ge-ta-rja-NI-nem / we-ge-ta-RJAN-kõ"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "Nie jem mięsa ani ryb, ale jem jajka", "phonetic": "nje jem MJEN-sa A-ni rip, A-le jem JAJ-ka"},
      {"de": "Das Essen war sehr lecker", "local": "Jedzenie było pyszne!", "phonetic": "je-DSE-nje BI-wo PISCH-ne"},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "Pomocy! To nagły wypadek!", "phonetic": "po-MO-tsi! to NAG-wi wi-PA-dek"}
    ]}
  ],

  emergency: [
    ["112", "Europäischer Notruf"],
    ["999", "Rettungsdienst"],
    ["997", "Polizei"],
    ["998", "Feuerwehr"]
  ],
  embassy: {"title": "Deutsche Botschaft Warschau", "address": ["ul. Jazdów 12", "00-467 Warszawa"], "phone": "+48 22 584 17 00", "emergency": "+48 605 682 347", "emergencyNote": "(Deutsch; Mo–Do ab 16:30, Fr ab 13:30 bis 24 Uhr; Wochenende 8–24 Uhr)"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/polen-node",

  rules: [
    ["Kirchen", "Polen ist sehr katholisch – in Kirchen angemessen kleiden und während Messen nicht besichtigen."],
    ["Bezahlen", "Karte fast überall; Euro werden selten angenommen. Am Automaten „ohne Umrechnung“ wählen."],
    ["Trinkgeld", "Wer beim Bezahlen „dziękuję“ sagt, signalisiert oft „Rest ist für Sie“ – Vorsicht beim Wechselgeld."]
  ],
  car: [
    ["Promille & Licht", "Sehr strenge Promillegrenze (0,2 ‰, auch für Radfahrer; Fahranfänger in der Probezeit 0,0 ‰). Licht auch tagsüber Pflicht."]
  ],
  substances: [
    ["Alkohol", "Ab 18. Trinken in der Öffentlichkeit (Straße, Parks) ist verboten und wird mit Bußgeld bestraft."],
    ["Drogen", "Schon der Besitz kleinster Mengen (auch Cannabis) ist strafbar."]
  ],
  sim: [
    ["EU-Roaming", "Mit deutschem Tarif ohne Aufpreis surfen und telefonieren („Roam like at home“)."],
    ["Alternative", "eSIM (z. B. Airalo) oder Prepaid-SIM im Shop vor Ort – Ausweis nötig."]
  ],
  apps: [
    ["Bolt, Uber & FreeNow", "Günstige Fahrdienste in allen großen Städten."],
    ["PKP Intercity & Jakdojade", "Zugtickets bzw. Nahverkehr in den Städten."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Warschau", 52.2297, 21.0122],
    ["Krakau", 50.0647, 19.945],
    ["Danzig", 54.352, 18.6466],
    ["Breslau", 51.1079, 17.0385],
    ["Zakopane", 49.2992, 19.9496]
  ]
};
