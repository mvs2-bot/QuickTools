/* Quick-Tools · Togo – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "togo",
  name: "Togo",
  flag: "🇹🇬",
  tz: "Africa/Lome",
  currency: {"code": "XOF", "symbol": "CFA", "name": "CFA-Franc BCEAO", "tableDecimals": 0},

  glance: {"plug": "C", "volt": 220, "adapter": "nein", "drive": "R", "water": "Nicht empfohlen – Flaschenwasser", "tip": "Kein Muss, kleine Trinkgelder (ca. 5–10 %) gern gesehen", "dial": "+228"},
  taxi: {"local": "Emmenez-moi à cette adresse, s'il vous plaît.", "phonetic": "am-NE-mua a sät a-DRÄS, sil wu PLÄ"},

  phrases: [
    { title: "🇹🇬 Französisch", lang: "fr-TG", items: [
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
    ]},
    { title: "🇹🇬 Ewe (Grüße)", lang: "ee-TG", items: [
      {"de": "Willkommen", "local": "Woezɔ", "phonetic": "WO-e-so"},
      {"de": "Guten Morgen", "local": "Ŋdi", "phonetic": "ng-DI"},
      {"de": "Danke", "local": "Akpe", "phonetic": "AK-pe"}
    ]}
  ],

  emergency: [
    ["117", "Polizei"],
    ["172", "Gendarmerie"],
    ["118", "Feuerwehr"]
  ],
  embassy: {"title": "Deutsche Botschaft Lomé", "address": ["Boulevard de la République", "Lomé"], "phone": "+228 22 23 32 32", "emergency": "+228 90 04 22 21", "emergencyNote": "(keine Visaanfragen)"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/togo-node",

  rules: [
    ["Reisewarnung", "Das Auswärtige Amt warnt vor Reisen in die Präfekturen Kpendjal und Kpendjal-Ouest (Region Savanes), rät dringend von Reisen in die übrige Region Savanes ab und rät von Reisen in die Präfekturen Dankpen und Kéran ab (Teilreisewarnung) – vor jeder Reise die aktuelle Lage prüfen."],
    ["Visum", "E-Visum mindestens 5 Tage vorher online (voyage.gouv.tg) beantragen – kein Visum bei Ankunft. Einreiseregistrierung mit QR-Code ausgedruckt mitnehmen."],
    ["Gelbfieber & Malaria", "Gelbfieber-Impfung ist zur Einreise vorgeschrieben – Impfpass mitnehmen. Malaria ganzjährig im ganzen Land: Mückenschutz, Moskitonetz und ärztliche Beratung zur Prophylaxe."],
    ["Baden", "Am Atlantik starke Brandung und gefährliche Unterströmungen – nur an bewachten Stränden baden. Süßwasser wegen Bilharziose meiden."],
    ["Homosexualität", "Gleichgeschlechtliche Handlungen sind strafbar (bis zu 3 Jahre Haft)."],
    ["Fotografieren", "Keine Fotos von öffentlichen Gebäuden, Flughäfen, Sicherheitskräften und Demonstrationen; keine Drohnenaufnahmen."]
  ],
  car: [
    ["Motorradtaxis", "Zemidjans verursachen viele schwere Unfälle und sind oft unversichert – besser Sammeltaxis; falls doch, Helm tragen."],
    ["Führerschein", "Internationaler Führerschein nur zusammen mit dem deutschen Führerschein gültig."]
  ],
  substances: [
    ["Alkohol", "Weit verbreitet, lokales Bier ist günstig."],
    ["Drogen", "Harte Strafen, oft 5–10 Jahre Mindesthaft."]
  ],
  sim: [
    ["Lokale SIM", "Yas (ehem. Togocom) oder Moov Africa – Pass nötig."]
  ],
  apps: [
    ["Gozem", "Fahrdienst (Auto und Moto) in Lomé."],
    ["Sicher Reisen", "App des Auswärtigen Amts mit aktuellen Sicherheitshinweisen – zusätzlich in die Krisenvorsorgeliste ELEFAND eintragen."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Lomé", 6.1256, 1.2254],
    ["Kpalimé", 6.9, 0.6333],
    ["Togoville", 6.2333, 1.4833],
    ["Atakpamé", 7.5333, 1.1333],
    ["Kara", 9.5511, 1.1861]
  ]
};
