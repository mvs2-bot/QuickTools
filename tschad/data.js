/* Quick-Tools · Tschad – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "tschad",
  name: "Tschad",
  flag: "🇹🇩",
  tz: "Africa/Ndjamena",
  currency: {"code": "XAF", "symbol": "CFA", "name": "CFA-Franc BEAC", "tableDecimals": 0},

  glance: {"plug": "C / D / E / F", "volt": 220, "adapter": "teils – Eurostecker passt meist", "drive": "R", "water": "Nicht empfohlen – Flaschenwasser", "tip": "Kein Muss, kleine Trinkgelder (ca. 5–10 %) gern gesehen", "dial": "+235"},
  taxi: {"local": "Emmenez-moi à cette adresse, s'il vous plaît.", "phonetic": "am-NE-mua a sät a-DRÄS, sil wu PLÄ"},

  phrases: [
    { title: "🇹🇩 Französisch", lang: "fr-TD", items: [
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
    { title: "🇹🇩 Arabisch (Grüße)", lang: "ar-TD", items: [
      {"de": "Hallo", "local": "السلام عليكم", "phonetic": "as-sa-LAAM a-LAI-kum"},
      {"de": "Danke", "local": "شكرا", "phonetic": "SCHUK-ran"},
      {"de": "Wie geht es Ihnen?", "local": "كيف حالك؟", "phonetic": "KEE-fa HAA-lak"},
      {"de": "Auf Wiedersehen", "local": "مع السلامة", "phonetic": "ma-a s-sa-LAA-ma"}
    ]}
  ],

  emergency: [
    ["17", "Polizei"],
    ["18", "Feuerwehr"]
  ],
  embassy: {"title": "Deutsche Botschaft N'Djamena", "address": ["Avenue Félix Éboué", "N'Djamena"], "phone": "+235 22 51 56 47", "emergency": "+237 677 700 705", "emergencyNote": "(Bereitschaftsdienst der Botschaft Jaunde, Kamerun – sie ist für Konsularisches zuständig)"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/tschad-node",

  rules: [
    ["Reisewarnung", "Das Auswärtige Amt warnt vor Reisen in die Tschadsee-Region, die Grenzgebiete zu Nigeria, Kamerun, Niger, Zentralafrika, Libyen und Sudan sowie in den Norden und Osten. Von allen anderen nicht nötigen Reisen, auch nach N'Djamena, wird abgeraten – vor jeder Reise die aktuelle Lage prüfen."],
    ["Fotografieren", "Nur mit Genehmigung des Tourismusministeriums – sonst drohen Festnahme und Beschlagnahme der Kamera."],
    ["Visum", "E-Visum mindestens 7 Tage vorher über evisa.td beantragen. Drohnen und Satellitentelefone sind genehmigungspflichtig."],
    ["Gelbfieber & Malaria", "Gelbfieber-Impfung ist zur Einreise vorgeschrieben – Impfpass mitnehmen. Malaria im Süden (auch N'Djamena) ganzjährig: Mückenschutz und ärztliche Beratung zur Prophylaxe."],
    ["Homosexualität", "Gleichgeschlechtliche Handlungen sind strafbar (bis zu 2 Jahre Haft)."],
    ["Bargeld", "Karten (v. a. Visa) nur an Automaten in N'Djamena – Euro oder US-Dollar in bar mitnehmen."]
  ],
  car: [
    ["Führerschein", "Internationaler Führerschein nur zusammen mit dem deutschen Führerschein gültig."],
    ["Straßen", "Kaum Asphalt, in der Regenzeit (Mai–Oktober) große Gebiete unerreichbar. Nachts nicht fahren; im Norden und Osten Minenfelder."]
  ],
  substances: [
    ["Alkohol", "In Bars, Hotels und manchen Supermärkten erhältlich – in der Öffentlichkeit zurückhaltend sein (überwiegend muslimisch)."],
    ["Drogen", "Besitz, Konsum und Handel – auch von Cannabis – werden mit hohen Haftstrafen bestraft."]
  ],
  sim: [
    ["Lokale SIM", "Airtel oder Moov Africa – Pass nötig."]
  ],
  apps: [
    ["Sicher Reisen", "App des Auswärtigen Amts mit aktuellen Sicherheitshinweisen – zusätzlich in die Krisenvorsorgeliste ELEFAND eintragen."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["N'Djamena", 12.1348, 15.0557],
    ["Moundou", 8.5667, 16.0833],
    ["Sarh", 9.1429, 18.3923],
    ["Zakouma-Nationalpark", 10.85, 19.65]
  ]
};
