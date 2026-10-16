/* Quick-Tools · Tunesien – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "tunesien",
  name: "Tunesien",
  flag: "🇹🇳",
  tz: "Africa/Tunis",
  currency: {"code": "TND", "symbol": "DT", "name": "Tunesischer Dinar"},

  glance: {"plug": "C / E", "volt": 230, "adapter": "nein", "drive": "R", "water": "Nicht empfohlen – Flaschenwasser", "tip": "ca. 10 %", "dial": "+216"},
  taxi: {"local": "يعيشك، هزّني لهالعنوان", "phonetic": "ja-AI-schek, HEZ-ni l-hal-un-WEN"},

  phrases: [
    { title: "🇹🇳 Tunesisches Arabisch (Derja)", lang: "ar-TN", items: [
      {"de": "Hallo / Guten Tag", "local": "عسلامة", "phonetic": "AS-la-ma"},
      {"de": "Danke schön", "local": "يعيشك برشا", "phonetic": "ja-AI-schek BAR-scha"},
      {"de": "Entschuldigung", "local": "سامحني", "phonetic": "SAM-ha-ni"},
      {"de": "Wie viel kostet das?", "local": "قدّاش هذا؟", "phonetic": "gad-DESCH HE-da"},
      {"de": "Die Rechnung, bitte", "local": "الحساب، يعيشك", "phonetic": "el-hi-SEB, ja-AI-schek"},
      {"de": "Sprechen Sie Englisch?", "local": "تحكي بالإنقليزي؟", "phonetic": "TAH-ki bel-in-GLI-zi"},
      {"de": "Wo ist das Krankenhaus?", "local": "وين السبيطار؟", "phonetic": "win es-sbi-TAR"},
      {"de": "Ein großes Bier bitte", "local": "بيرّة كبيرة، يعيشك", "phonetic": "BIR-ra ke-BI-ra, ja-AI-schek"},
      {"de": "Ich bin Vegetarier/in", "local": "أنا نباتي / نباتية", "phonetic": "A-na ne-BE-ti / ne-be-TI-ja"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "ما ناكلش اللحم والحوت، أما ناكل العظم", "phonetic": "ma NEK-lesch el-LHAM wel-HUT, A-ma NE-kel el-ADHM"},
      {"de": "Das Essen war sehr lecker", "local": "الماكلة كانت بنينة برشا", "phonetic": "el-MEK-la KE-net bni-NA BAR-scha"},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "النجدة! حالة طوارئ!", "phonetic": "en-NEDSCH-da! HA-lat ta-WA-ri"}
    ]},
    { title: "🇫🇷 Französisch", lang: "fr-TN", items: [
      {"de": "Guten Tag", "local": "Bonjour", "phonetic": "bon-SCHUR"},
      {"de": "Wie viel kostet das?", "local": "C'est combien ?", "phonetic": "sä kom-BJÄ"},
      {"de": "Die Rechnung, bitte", "local": "L'addition, s'il vous plaît", "phonetic": "la-di-SJO, sil wu PLÄ"},
      {"de": "Wo ist das Krankenhaus?", "local": "Où est l'hôpital ?", "phonetic": "u ä lo-pi-TAL"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "Je ne mange ni viande ni poisson, mais je mange des œufs", "phonetic": "sche ne mansch ni WJAND ni pua-SO, mä sche mansch de SÖ"}
    ]}
  ],

  emergency: [
    ["197", "Polizei"],
    ["193", "Garde Nationale (außerhalb der Städte)"],
    ["190", "Rettungsdienst (SAMU)"],
    ["198", "Feuerwehr"]
  ],
  embassy: {"title": "Deutsche Botschaft Tunis", "address": ["1, Rue El Hamra, Mutuelleville", "1002 Tunis"], "phone": "+216 71 143 200"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/tunesien-node",

  rules: [
    ["Teilreisewarnung", "Das Auswärtige Amt warnt vor Reisen in die Grenzgebiete zu Algerien und Libyen sowie in die militärischen Sperrgebiete im Süden – vor jeder Reise die aktuelle Lage prüfen."],
    ["Dinar", "Dinar dürfen nicht ein- oder ausgeführt werden – vor Ort tauschen/abheben, Quittungen für den Rücktausch aufheben."],
    ["Kleidung", "Außerhalb von Strand und Hotel Schultern und Knie bedecken. Moscheen sind für Nicht-Muslime meist nur im Hof zugänglich."],
    ["Handeln", "In den Souks ist Handeln üblich – freundlich, aber bestimmt bleiben; aufdringliche „Führer“ höflich ablehnen."],
    ["Fotografieren", "Keine Fotos von Polizei, Militär und Regierungsgebäuden."],
    ["Ramadan", "Im Ramadan tagsüber nicht demonstrativ in der Öffentlichkeit essen, trinken oder rauchen."]
  ],
  car: [
    ["Promille", "0,5 ‰. Viele Polizeikontrollen und Radarfallen."]
  ],
  substances: [
    ["Alkohol", "In Hotels, lizenzierten Bars und manchen Supermärkten erhältlich. Trinken in der Öffentlichkeit ist verboten."],
    ["Drogen", "Auch kleine Mengen Cannabis werden mit Haft bestraft."]
  ],
  sim: [
    ["Lokale SIM", "Ooredoo, Orange oder Tunisie Telecom – am Flughafen oder im Shop, Pass nötig."],
    ["eSIM", "Alternativ vorab eSIM (z. B. Airalo) buchen – am einfachsten schon vor dem Abflug einrichten."]
  ],
  apps: [
    ["Bolt", "Fahrdienst in Tunis und den Badeorten – Preis steht vorher fest."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Tunis", 36.8065, 10.1815],
    ["Djerba (Houmt Souk)", 33.8752, 10.8574],
    ["Sousse", 35.8256, 10.6084],
    ["Hammamet", 36.4, 10.6167],
    ["Tozeur", 33.9197, 8.1335]
  ]
};
