/* Quick-Tools · Bulgarien – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "bulgarien",
  name: "Bulgarien",
  flag: "🇧🇬",
  tz: "Europe/Sofia",
  currency: null, // Euro (seit 2026) → kein Rechner, Startseite = Phrasen

  glance: {"plug": "C / F", "volt": 230, "adapter": "nein", "drive": "R", "water": "In Städten meist trinkbar, sonst lieber Flaschenwasser", "tip": "ca. 10 %", "dial": "+359"},
  taxi: {"local": "Моля, закарайте ме на този адрес.", "phonetic": "MO-lja, sa-KA-raj-te me na TO-si ad-RES"},

  phrases: [
    { title: "🇧🇬 Bulgarisch", lang: "bg-BG", items: [
      {"de": "Guten Tag", "local": "Добър ден", "phonetic": "DO-bar den"},
      {"de": "Danke schön", "local": "Много благодаря", "phonetic": "MNO-go bla-go-dar-JA"},
      {"de": "Entschuldigung", "local": "Извинете", "phonetic": "is-wi-NE-te"},
      {"de": "Wie viel kostet das?", "local": "Колко струва това?", "phonetic": "KOL-ko STRU-wa to-WA"},
      {"de": "Die Rechnung, bitte", "local": "Сметката, моля", "phonetic": "SMET-ka-ta, MO-lja"},
      {"de": "Sprechen Sie Englisch?", "local": "Говорите ли английски?", "phonetic": "go-WO-ri-te li ang-LIJ-ski"},
      {"de": "Wo ist das Krankenhaus?", "local": "Къде е болницата?", "phonetic": "ka-DE e BOL-ni-tsa-ta"},
      {"de": "Ein großes Bier bitte", "local": "Една голяма бира, моля", "phonetic": "ed-NA go-LJA-ma BI-ra, MO-lja"},
      {"de": "Ich bin Vegetarier/in", "local": "Аз съм вегетарианец / вегетарианка", "phonetic": "as sam we-ge-ta-ri-A-nets / -AN-ka"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "Не ям месо и риба, но ям яйца", "phonetic": "ne jam me-SO i RI-ba, no jam jaj-TSA"},
      {"de": "Das Essen war sehr lecker", "local": "Храната беше много вкусна!", "phonetic": "hra-NA-ta BE-sche MNO-go FKUS-na"},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "Помощ! Спешно е!", "phonetic": "PO-moscht! SPESCH-no e"}
    ]}
  ],

  emergency: [
    ["112", "Allgemeiner Notruf"],
    ["166", "Polizei"],
    ["150", "Rettungsdienst"],
    ["160", "Feuerwehr"]
  ],
  embassy: {"title": "Deutsche Botschaft Sofia", "address": ["ul. Frederic Joliot-Curie 25", "1113 Sofia"], "phone": "+359 2 91 83 80", "emergency": "+359 887 217 511"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/bulgarien-node",

  rules: [
    ["Kopfnicken", "Nicken heißt „Nein“, Kopfschütteln „Ja“ – im Zweifel lieber nachfragen."],
    ["Euro", "Seit 1. Januar 2026 zahlt man in Euro – alte Preise in Lewa tauchen noch gelegentlich auf."],
    ["Kirchen & Klöster", "Schultern und Knie bedecken, z. B. im Rila-Kloster."],
    ["Schrift", "Viele Schilder sind nur kyrillisch – Ortsnamen notfalls mit dem Übersetzer abgleichen."]
  ],
  car: [
    ["Promille & Licht", "0,5 ‰. Licht ganzjährig auch tagsüber Pflicht; Winterreifen vom 15. November bis 1. März."],
    ["Vignette", "Für Autobahnen und Nationalstraßen ist eine elektronische Vignette (bgtoll.bg) Pflicht. Bußgelder nie bar an Polizisten zahlen, nur per Bankeinzahlung."]
  ],
  substances: [
    ["Alkohol", "Ab 18 Jahren."],
    ["Drogen", "Auch Cannabis ist verboten; Drogendelikte werden streng bestraft."]
  ],
  sim: [
    ["EU-Roaming", "Mit deutschem Tarif ohne Aufpreis surfen und telefonieren („Roam like at home“)."],
    ["Alternative", "eSIM (z. B. Airalo) oder Prepaid-SIM von A1, Yettel oder Vivacom."]
  ],
  apps: [
    ["TaxiMe", "Taxi per App in Sofia und anderen Städten – schützt vor Touristenpreisen."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Sofia", 42.6977, 23.3219],
    ["Plowdiw", 42.1354, 24.7453],
    ["Warna", 43.2141, 27.9147],
    ["Burgas", 42.5048, 27.4626],
    ["Rila-Kloster", 42.1333, 23.3403]
  ]
};
