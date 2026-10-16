/* Quick-Tools · Gabun – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "gabun",
  name: "Gabun",
  flag: "🇬🇦",
  tz: "Africa/Libreville",
  currency: {"code": "XAF", "symbol": "CFA", "name": "CFA-Franc BEAC", "tableDecimals": 0},

  glance: {"plug": "C", "volt": 220, "adapter": "nein", "drive": "R", "water": "Nicht empfohlen – Flaschenwasser", "tip": "Kein Muss, kleine Trinkgelder (ca. 5–10 %) gern gesehen", "dial": "+241"},
  taxi: {"local": "Emmenez-moi à cette adresse, s'il vous plaît.", "phonetic": "am-NE-mua a sät a-DRÄS, sil wu PLÄ"},

  phrases: [
    { title: "🇬🇦 Französisch", lang: "fr-GA", items: [
      {"de": "Hallo / Guten Tag", "local": "Bonjour", "phonetic": "bon-SCHUR"},
      {"de": "Danke schön", "local": "Merci beaucoup", "phonetic": "mär-SI bo-KU"},
      {"de": "Entschuldigung", "local": "Excusez-moi", "phonetic": "äks-kü-SE MUA"},
      {"de": "Wie viel kostet das?", "local": "C'est combien ?", "phonetic": "sä kom-BJÄ"},
      {"de": "Die Rechnung, bitte", "local": "L'addition, s'il vous plaît", "phonetic": "la-di-SJO, sil wu PLÄ"},
      {"de": "Sprechen Sie Englisch?", "local": "Vous parlez anglais ?", "phonetic": "wu par-LE ang-GLÄ"},
      {"de": "Wo ist das Krankenhaus?", "local": "Où est l'hôpital ?", "phonetic": "u ä lo-pi-TAL"},
      {"de": "Ein großes Bier bitte", "local": "Une grande bière, s'il vous plaît", "phonetic": "ün grand BJÄR, sil wu PLÄ"},
      {"de": "Ich bin Vegetarier/in", "local": "Je suis végétarien / végétarienne", "phonetic": "sche süi we-sche-ta-RJÄ / -RJÄN"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "Je ne mange ni viande ni poisson, mais je mange des œufs", "phonetic": "sche ne mansch ni WJAND ni pua-SO, mä sche mansch de SÖ"},
      {"de": "Das Essen war sehr lecker", "local": "C'était délicieux !", "phonetic": "se-TÄ de-li-SJÖ"},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "Au secours ! C'est une urgence !", "phonetic": "o se-KUR! sä-tün ür-SCHANS"}
    ]}
  ],

  emergency: [
    ["1730", "Polizei"],
    ["18", "Feuerwehr"]
  ],
  embassy: {"title": "Deutsche Botschaft Libreville", "address": ["329, Boulevard de la Nation (Immeuble les Frangipaniers)", "Libreville"], "phone": "+241 11 17 60 188", "emergency": "+237 677 700 705", "emergencyNote": "(Bereitschaftsdienst der Botschaft Jaunde, Kamerun – keine Visaanfragen)"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/gabun-node",

  rules: [
    ["Gelbfieber & Malaria", "Gelbfieber-Impfung ist Pflicht und wird bei der Einreise kontrolliert – Impfpass mitnehmen. Malaria ganzjährig im ganzen Land: Mückenschutz und ärztliche Beratung zur Prophylaxe."],
    ["Visum", "Touristen bekommen ein E-Visum – vorab online beantragen, Bearbeitung kann dauern. Reisepass 3 Monate über das Visum hinaus gültig."],
    ["Fähren", "Von alten Fähren (Libreville–Port-Gentil, Lambaréné–Port-Gentil) wird wegen Unfällen abgeraten – besser fliegen."],
    ["Bargeld", "Karten und Automaten nur vereinzelt (große Hotels) – genug Euro in bar mitnehmen."],
    ["Fotografieren", "Keine Fotos von Militär, Polizei, Flughäfen und Regierungsgebäuden – die Kamera kann beschlagnahmt werden. Menschen nur mit Erlaubnis fotografieren."],
    ["Süßwasser", "Nicht in Flüssen und Seen baden – Bilharziose-Gefahr."]
  ],
  car: [
    ["Führerschein", "Deutscher Führerschein mit französischer Übersetzung."],
    ["Straßen", "Oft schlecht, in der Regenzeit nur mit Geländewagen; nachts nicht fahren. Nur leere Taxis anhalten, Preis vorher vereinbaren."]
  ],
  substances: [
    ["Alkohol", "Weit verbreitet, lokales Bier ist günstig."],
    ["Drogen", "Handel und Konsum sind strafbar."]
  ],
  sim: [
    ["Lokale SIM", "Airtel oder Moov Africa – Pass nötig."],
    ["eSIM", "Alternativ vorab eSIM (z. B. Airalo) buchen – am einfachsten schon vor dem Abflug einrichten."]
  ],
  apps: [
    ["Gozem", "Fahrdienst in Libreville."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Libreville", 0.4162, 9.4673],
    ["Pointe-Denis", 0.35, 9.3333],
    ["Lambaréné", -0.7001, 10.2406],
    ["Lopé-Nationalpark", -0.2, 11.6],
    ["Loango-Nationalpark", -2.25, 9.6]
  ]
};
