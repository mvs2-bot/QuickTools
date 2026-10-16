/* Quick-Tools · Russland – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "russland",
  name: "Russland",
  flag: "🇷🇺",
  tz: "Europe/Moscow",
  currency: {"code": "RUB", "symbol": "₽", "name": "Russischer Rubel"},

  glance: {"plug": "C / F", "volt": 220, "adapter": "nein", "drive": "R", "water": "Nicht empfohlen – Flaschenwasser", "tip": "ca. 10 %", "dial": "+7"},
  taxi: {"local": "Отвезите меня, пожалуйста, по этому адресу.", "phonetic": "at-wje-SI-tje mje-NJA, pa-SCHA-lu-sta, pa E-ta-mu AD-rje-su"},

  phrases: [
    { title: "🇷🇺 Russisch", lang: "ru-RU", items: [
      {"de": "Hallo / Guten Tag", "local": "Здравствуйте", "phonetic": "SDRAST-wuj-tje"},
      {"de": "Danke schön", "local": "Большое спасибо", "phonetic": "bal-SCHO-je spa-SSI-ba"},
      {"de": "Entschuldigung", "local": "Извините", "phonetic": "is-wi-NI-tje"},
      {"de": "Wie viel kostet das?", "local": "Сколько это стоит?", "phonetic": "SKOL-ka E-ta STO-it"},
      {"de": "Die Rechnung, bitte", "local": "Счёт, пожалуйста", "phonetic": "schtschot, pa-SCHA-lu-sta"},
      {"de": "Sprechen Sie Englisch?", "local": "Вы говорите по-английски?", "phonetic": "wy ga-wa-RI-tje pa-an-GLIJ-ski"},
      {"de": "Wo ist das Krankenhaus?", "local": "Где больница?", "phonetic": "gdje bal-NI-tsa"},
      {"de": "Ein großes Bier bitte", "local": "Большое пиво, пожалуйста", "phonetic": "bal-SCHO-je PI-wa, pa-SCHA-lu-sta"},
      {"de": "Ich bin Vegetarier/in", "local": "Я вегетарианец / вегетарианка", "phonetic": "ja we-gje-ta-ri-A-njets / -AN-ka"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "Я не ем мясо и рыбу, но ем яйца", "phonetic": "ja nje jem MJA-sa i RY-bu, no jem JAJ-tsa"},
      {"de": "Das Essen war sehr lecker", "local": "Было очень вкусно!", "phonetic": "BY-la O-tschen FKUS-na"},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "Помогите! Это срочно!", "phonetic": "pa-ma-GI-tje! E-ta SROTSCH-na"}
    ]}
  ],

  status: [
    ["Besetzte Gebiete der Ukraine", "Die Krim und die russisch besetzten Gebiete der Ukraine gelten völkerrechtlich als ukrainisch. Wer über Russland dorthin reist, verstößt gegen ukrainisches Recht; konsularische Hilfe ist dort nicht möglich."]
  ],
  emergency: [
    ["112", "Allgemeiner Notruf"],
    ["102", "Polizei"],
    ["103", "Rettungsdienst"],
    ["101", "Feuerwehr"]
  ],
  embassy: {"title": "Deutsche Botschaft Moskau", "address": ["Mosfilmowskaja uliza 56", "119285 Moskau"], "phone": "+7 495 937 95 00"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/russischefoederation-node",

  rules: [
    ["Reisewarnung", "Das Auswärtige Amt warnt vor Reisen nach Russland – vor jeder Reise die aktuelle Lage prüfen."],
    ["Festnahmen", "Deutsche (besonders mit doppelter Staatsangehörigkeit) riskieren willkürliche Festnahmen. Kritik am Krieg, auch in Social Media, kann strafbar sein."],
    ["Bezahlen", "Deutsche Kredit- und Bankkarten funktionieren nicht – ausreichend Bargeld in Euro mitbringen und vor Ort tauschen."],
    ["Fotografieren", "Keine Fotos oder Drohnenaufnahmen von Militär, Behörden, Brücken, Bahnhöfen oder Flughäfen."],
    ["Gesetze", "Öffentliches Eintreten für LGBTQ-Rechte wird als „Extremismus“ verfolgt."]
  ],
  car: [
    ["Promille", "Praktisch 0,0 ‰ (Messtoleranz ca. 0,3 ‰)."],
    ["Licht", "Licht auch tagsüber Pflicht. Viele Radarkontrollen."]
  ],
  substances: [
    ["Alkohol", "Ab 18 Jahren. Verkauf in Läden nachts meist verboten (oft 23–8 Uhr)."],
    ["Drogen", "Auch Cannabis und CBD sind verboten, ebenso manche bei uns rezeptfreie Medikamente (z. B. mit Codein) – sehr harte Strafen."]
  ],
  sim: [
    ["Roaming", "Deutsche Tarife funktionieren meist nicht oder sind extrem teuer. Mobiles Internet wird regional oft abgeschaltet; viele Apps und Messenger-Anrufe sind blockiert."],
    ["Lokale SIM", "SIM von MTS, MegaFon oder Beeline nur mit Pass; Ausländer müssen sie zusätzlich behördlich registrieren – aufwendig."]
  ],
  apps: [
    ["Yandex Go", "Taxi bestellen."],
    ["Yandex Maps / 2GIS", "Karten und Nahverkehr – Google Maps ist oft ungenau."],
    ["Google Translate", "Offline-Paket Russisch vorher herunterladen."]
  ],

  places: [
    ["Moskau", 55.7558, 37.6173],
    ["Sankt Petersburg", 59.9311, 30.3609],
    ["Kasan", 55.7963, 49.1088],
    ["Sotschi", 43.5855, 39.7231],
    ["Wladiwostok", 43.1155, 131.8855, "Asia/Vladivostok"]
  ]
};
