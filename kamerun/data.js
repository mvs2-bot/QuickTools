/* Quick-Tools · Kamerun – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "kamerun",
  name: "Kamerun",
  flag: "🇨🇲",
  tz: "Africa/Douala",
  currency: {"code": "XAF", "symbol": "CFA", "name": "CFA-Franc BEAC", "tableDecimals": 0},

  glance: {"plug": "C / E", "volt": 220, "adapter": "nein", "drive": "R", "water": "Nicht empfohlen – Flaschenwasser", "tip": "Kein Muss, kleine Trinkgelder (ca. 5–10 %) gern gesehen", "dial": "+237"},
  taxi: {"local": "Emmenez-moi à cette adresse, s'il vous plaît.", "phonetic": "am-NE-mua a sät a-DRÄS, sil wu PLÄ"},

  phrases: [
    { title: "🇨🇲 Französisch", lang: "fr-CM", items: [
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
    ["117", "Polizei"],
    ["113", "Gendarmerie"],
    ["118", "Feuerwehr"],
    ["119", "Rettungsdienst (SAMU)"]
  ],
  embassy: {"title": "Deutsche Botschaft Jaunde", "address": ["Nouvelle Route Bastos, Bastos-Usine", "Yaoundé"], "phone": "+237 222 21 00 56", "emergency": "+237 677 700 705", "emergencyNote": "(auch SMS – keine Visa- oder Terminanfragen)"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/kamerun-node",

  rules: [
    ["Reisewarnung", "Das Auswärtige Amt warnt vor Reisen in die Region Extrême-Nord, die Grenzgebiete zu Nigeria, Tschad und Zentralafrika, die Regionen North-West und South-West sowie die Halbinsel Bakassi; von Adamaoua und Nord wird abgeraten (Teilreisewarnung) – vor jeder Reise die aktuelle Lage prüfen."],
    ["Visum", "E-Visum vorab online beantragen, QR-Code ausgedruckt mitnehmen. Zollerklärung per App „CMR Customs Declaration“."],
    ["Gelbfieber & Malaria", "Gelbfieber-Impfung ist bei Ein- und Ausreise vorgeschrieben – Impfpass mitnehmen. Malaria ganzjährig im ganzen Land: Mückenschutz und ärztliche Beratung zur Prophylaxe."],
    ["Fotografieren", "Keine Fotos von Regierungsgebäuden, Flughäfen, Militär, Polizei und Präsidenten-Kolonnen – wird streng durchgesetzt."],
    ["Homosexualität", "Gleichgeschlechtliche Handlungen sind strafbar (bis zu 5 Jahre Haft), Gewalt gegen LGBTIQ-Personen ist häufig."],
    ["Kleidung", "Tarnkleidung und uniformähnliche Kleidung sind verboten."]
  ],
  car: [
    ["Führerschein", "Internationaler Führerschein nur zusammen mit dem deutschen Führerschein gültig."],
    ["Straßen", "Hohes Unfallrisiko, nachts nicht über Land fahren, mit Polizeikontrollen rechnen. Von Überlandbussen wird dringend abgeraten."]
  ],
  substances: [
    ["Alkohol", "Weit verbreitet, lokales Bier ist günstig."],
    ["Drogen", "Besitz, Konsum und Handel – auch von Cannabis – werden mit hohen Haftstrafen bestraft."]
  ],
  sim: [
    ["Lokale SIM", "MTN oder Orange – Pass nötig, Registrierung im Shop."]
  ],
  apps: [
    ["Yango", "Fahrdienst in Douala und Yaoundé."],
    ["Sicher Reisen", "App des Auswärtigen Amts mit aktuellen Sicherheitshinweisen – zusätzlich in die Krisenvorsorgeliste ELEFAND eintragen."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Yaoundé", 3.848, 11.5021],
    ["Douala", 4.0511, 9.7679],
    ["Kribi", 2.9406, 9.91],
    ["Foumban", 5.7266, 10.9005],
    ["Bafoussam", 5.4778, 10.4176]
  ]
};
