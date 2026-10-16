/* Quick-Tools · Elfenbeinküste – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "elfenbeinkueste",
  name: "Elfenbeinküste",
  flag: "🇨🇮",
  tz: "Africa/Abidjan",
  currency: {"code": "XOF", "symbol": "CFA", "name": "CFA-Franc BCEAO", "tableDecimals": 0},

  glance: {"plug": "C / E", "volt": 230, "adapter": "nein", "drive": "R", "water": "Nicht empfohlen – Flaschenwasser", "tip": "Kein Muss, kleine Trinkgelder (ca. 5–10 %) gern gesehen", "dial": "+225"},
  taxi: {"local": "Emmenez-moi à cette adresse, s'il vous plaît.", "phonetic": "am-NE-mua a sät a-DRÄS, sil wu PLÄ"},

  phrases: [
    { title: "🇨🇮 Französisch", lang: "fr-CI", items: [
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
    { title: "🇨🇮 Dioula (Grüße)", lang: "dyu-CI", items: [
      {"de": "Hallo / Danke", "local": "I ni ce", "phonetic": "i ni TSCHE"},
      {"de": "Guten Morgen", "local": "I ni sɔgɔma", "phonetic": "i ni SO-go-ma"},
      {"de": "Wie geht es Ihnen?", "local": "I ka kɛnɛ wa?", "phonetic": "i ka KÄ-nä wa"}
    ]}
  ],

  emergency: [
    ["170", "Polizei"],
    ["180", "Feuerwehr"],
    ["185", "Rettungsdienst (SAMU)"]
  ],
  embassy: {"title": "Deutsche Botschaft Abidjan", "address": ["39, Boulevard Hassan II (Boulevard de la Corniche)", "Abidjan-Cocody"], "phone": "+225 27 22 44 20 30", "emergency": "+225 07 07 08 23 43", "emergencyNote": "(abends und am Wochenende bis 24 Uhr – keine Visaanfragen)"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/cotedivoire-node",

  rules: [
    ["Reisewarnung", "Das Auswärtige Amt warnt vor Reisen in das Grenzgebiet im Nordosten (einschließlich Comoé-Nationalpark und Bouna) und rät von Reisen in die Grenzgebiete zu Mali und Burkina Faso ab (Teilreisewarnung) – vor jeder Reise die aktuelle Lage prüfen."],
    ["Visum", "Visum nötig – als E-Visum spätestens 3 Tage vor Abreise beantragen, nur über den offiziellen Dienstleister Snedai (Betrugsseiten!)."],
    ["Gelbfieber & Malaria", "Gelbfieber-Impfung ist zur Einreise vorgeschrieben – Impfpass mitnehmen. Malaria ganzjährig im ganzen Land: Mückenschutz, Moskitonetz und ärztliche Beratung zur Prophylaxe."],
    ["Baden", "Am Atlantik starke Brandung und gefährliche Unterströmungen – nur an bewachten Stränden baden. Süßwasser wegen Bilharziose meiden."],
    ["Bargeld", "Außerhalb Abidjans Karten nur in großen Hotels; Automaten oft leer – solche in Banken oder Einkaufszentren nutzen, Euro in bar mitnehmen."]
  ],
  car: [
    ["Führerschein", "Internationaler Führerschein nur zusammen mit dem deutschen Führerschein gültig."],
    ["Straßen", "Nachts nicht über Land fahren, Türen verriegeln; bei vorgetäuschten Pannen nicht anhalten. In Abidjan lieber App-Taxis nutzen."]
  ],
  substances: [
    ["Alkohol", "Weit verbreitet, lokales Bier ist günstig."],
    ["Drogen", "Sehr strenge Strafen: Besitz bis 5 Jahre, Handel bis 20 Jahre Haft."]
  ],
  sim: [
    ["Lokale SIM", "Orange, MTN oder Moov Africa – Pass nötig."],
    ["eSIM", "Alternativ vorab eSIM (z. B. Airalo) buchen – am einfachsten schon vor dem Abflug einrichten."]
  ],
  apps: [
    ["Yango & Heetch", "Fahrdienste in Abidjan – sicherer als Straßentaxis."],
    ["Wave & Orange Money", "Mobile Money – damit zahlt man fast überall (lokale SIM nötig)."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Yamoussoukro", 6.8276, -5.2893],
    ["Abidjan", 5.36, -4.0083],
    ["Grand-Bassam", 5.2118, -3.7388],
    ["Assinie", 5.1333, -3.2833],
    ["San-Pédro", 4.7485, -6.6363]
  ]
};
