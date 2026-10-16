/* Quick-Tools · Litauen – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "litauen",
  name: "Litauen",
  flag: "🇱🇹",
  tz: "Europe/Vilnius",
  currency: null, // Euro → kein Rechner, Startseite = Phrasen

  glance: {"plug": "C / F", "volt": 230, "adapter": "nein", "drive": "R", "water": "Trinkbar", "tip": "ca. 10 %", "dial": "+370"},
  taxi: {"local": "Prašau nuvežti mane šiuo adresu.", "phonetic": "pra-SCHAU nu-WESCH-ti ma-NE schuo ad-re-SU"},

  phrases: [
    { title: "🇱🇹 Litauisch", lang: "lt-LT", items: [
      {"de": "Hallo / Guten Tag", "local": "Sveiki / Laba diena", "phonetic": "swei-KI / la-BA die-NA"},
      {"de": "Danke schön", "local": "Labai ačiū", "phonetic": "la-BAI A-tschu"},
      {"de": "Entschuldigung", "local": "Atsiprašau", "phonetic": "a-tsi-pra-SCHAU"},
      {"de": "Wie viel kostet das?", "local": "Kiek tai kainuoja?", "phonetic": "kiek tai kai-NUO-ja"},
      {"de": "Die Rechnung, bitte", "local": "Sąskaitą, prašau", "phonetic": "SAS-kai-ta, pra-SCHAU"},
      {"de": "Sprechen Sie Englisch?", "local": "Ar kalbate angliškai?", "phonetic": "ar KAL-ba-te ANG-lisch-kai"},
      {"de": "Wo ist das Krankenhaus?", "local": "Kur yra ligoninė?", "phonetic": "kur i-RA li-GO-ni-ne"},
      {"de": "Ein großes Bier bitte", "local": "Didelį alų, prašau", "phonetic": "DI-de-li A-lu, pra-SCHAU"},
      {"de": "Ich bin Vegetarier/in", "local": "Aš vegetaras / vegetarė", "phonetic": "asch we-ge-TA-ras / we-ge-TA-re"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "Nevalgau mėsos ir žuvies, bet kiaušinius valgau", "phonetic": "ne-WAL-gau MEE-sos ir schu-WIES, bet kjau-SCHI-njus WAL-gau"},
      {"de": "Das Essen war sehr lecker", "local": "Maistas buvo labai skanus!", "phonetic": "MAIS-tas BU-wo la-BAI ska-NUS"},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "Padėkite! Skubus atvejis!", "phonetic": "pa-DEE-ki-te! sku-BUS AT-we-jis"}
    ]}
  ],

  emergency: [
    ["112", "Notruf (Polizei, Rettung, Feuerwehr)"]
  ],
  embassy: {"title": "Deutsche Botschaft Wilna", "address": ["Z. Sierakausko g. 24", "LT-03105 Vilnius"], "phone": "+370 5 210 64 00"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/litauen-node",

  rules: [
    ["Reflektor", "Fußgänger müssen im Dunkeln auf unbeleuchteten Straßen einen Reflektor tragen – Bußgeld möglich."],
    ["Blumen", "Blumen verschenkt man in ungerader Zahl – gerade Zahlen sind für Beerdigungen."],
    ["Kurische Nehrung", "Nationalpark: Für die Zufahrt mit dem Auto wird eine Gebühr fällig; Dünen nur auf markierten Wegen betreten."]
  ],
  car: [
    ["Promille", "0,4 ‰; Fahranfänger 0,0 ‰."],
    ["Licht & Winter", "Licht auch tagsüber Pflicht. Von Mitte November bis Ende März Winterreifen Pflicht."]
  ],
  substances: [
    ["Alkohol", "Ab 20 Jahren. Im Laden Mo–Sa 10–20 Uhr, So 10–15 Uhr."],
    ["Drogen", "Auch Cannabis ist verboten – schon der Konsum ist strafbar."]
  ],
  sim: [
    ["EU-Roaming", "Mit deutschem Tarif ohne Aufpreis surfen und telefonieren („Roam like at home“)."],
    ["Alternative", "eSIM (z. B. Airalo) oder Prepaid-SIM von Telia, Tele2 oder Bitė."]
  ],
  apps: [
    ["Bolt", "Fahrdienst – in Vilnius und anderen Städten verbreitet."],
    ["LTG Link", "Zugtickets im Land und nach Riga."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Vilnius", 54.6872, 25.2797],
    ["Kaunas", 54.8985, 23.9036],
    ["Trakai", 54.6379, 24.9346],
    ["Klaipėda", 55.7033, 21.1443],
    ["Nida (Kurische Nehrung)", 55.3037, 21.0058]
  ]
};
