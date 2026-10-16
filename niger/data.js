/* Quick-Tools · Niger – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "niger",
  name: "Niger",
  flag: "🇳🇪",
  tz: "Africa/Niamey",
  currency: {"code": "XOF", "symbol": "CFA", "name": "CFA-Franc BCEAO", "tableDecimals": 0},

  glance: {"plug": "A / B / C / D / E / F", "volt": 220, "adapter": "teils – Eurostecker passt meist", "drive": "R", "water": "Nicht empfohlen – Flaschenwasser", "tip": "Kein Muss, kleine Trinkgelder (ca. 5–10 %) gern gesehen", "dial": "+227"},
  taxi: {"local": "Emmenez-moi à cette adresse, s'il vous plaît.", "phonetic": "am-NE-mua a sät a-DRÄS, sil wu PLÄ"},

  phrases: [
    { title: "🇳🇪 Französisch", lang: "fr-NE", items: [
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
    { title: "🇳🇪 Hausa (Grüße)", lang: "ha-NE", items: [
      {"de": "Hallo", "local": "Sannu", "phonetic": "SAN-nu"},
      {"de": "Guten Morgen", "local": "Ina kwana?", "phonetic": "i-NA KWA-na"},
      {"de": "Danke", "local": "Na gode", "phonetic": "na GOO-de"},
      {"de": "Wie viel kostet das?", "local": "Nawa ne?", "phonetic": "NA-wa ne"},
      {"de": "Auf Wiedersehen", "local": "Sai an jima", "phonetic": "sai an DSCHI-ma"}
    ]}
  ],

  emergency: [
    ["17", "Polizei"],
    ["18", "Feuerwehr"],
    ["15", "Rettungsdienst (SAMU)"]
  ],
  embassy: {"title": "Zuständig: Deutsche Botschaft Ouagadougou (Burkina Faso)", "address": ["Rue 4-52, Parcelle N, Lot 14, Arrondissement 1, La Rotonde", "Ouagadougou"], "phone": "+226 25 30 67 31", "emergency": "+226 70 21 16 42", "emergencyNote": "(Botschaft Niamey vorübergehend ohne Personal – keine konsularische Hilfe vor Ort)"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/niger-node",

  rules: [
    ["Reisewarnung", "Das Auswärtige Amt warnt vor Reisen nach Niger und fordert Deutsche auf, das Land zu verlassen – vor jeder Reise die aktuelle Lage prüfen."],
    ["Überland", "Niamey nur mit bewaffneter Begleitung verlassen. Im Norden (Aïr, Djado) gibt es Landminen."],
    ["Gelbfieber & Malaria", "Gelbfieber-Impfung ist zur Einreise vorgeschrieben – Impfpass mitnehmen. Malaria ganzjährig im ganzen Land: Mückenschutz, Moskitonetz und ärztliche Beratung zur Prophylaxe."],
    ["Fotografieren", "Keine Fotos von Militär, Polizei, Flughäfen und Regierungsgebäuden – die Kamera kann beschlagnahmt werden. Menschen nur mit Erlaubnis fotografieren."],
    ["Kleidung & Ramadan", "Überwiegend muslimisch: Schultern und Knie bedecken. Im Ramadan tagsüber nicht öffentlich essen, trinken oder rauchen."]
  ],
  car: [
    ["Führerschein", "Internationaler Führerschein nur zusammen mit dem deutschen Führerschein gültig."],
    ["Nachtfahrten", "Überland nicht bei Dunkelheit fahren – Straßen und Fahrzeuge sind oft in schlechtem Zustand, Überfälle kommen vor."]
  ],
  substances: [
    ["Alkohol", "In Bars, Hotels und manchen Supermärkten erhältlich – in der Öffentlichkeit zurückhaltend sein (überwiegend muslimisch)."],
    ["Drogen", "Besitz, Konsum und Handel – auch von Cannabis – werden mit hohen Haftstrafen bestraft."]
  ],
  sim: [
    ["Lokale SIM", "Airtel, Moov Africa oder Zamani Telecom – Pass nötig."]
  ],
  apps: [
    ["Sicher Reisen", "App des Auswärtigen Amts mit aktuellen Sicherheitshinweisen – zusätzlich in die Krisenvorsorgeliste ELEFAND eintragen."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Niamey", 13.5116, 2.1254],
    ["Agadez", 16.9733, 7.9911],
    ["Zinder", 13.8072, 8.9881],
    ["Maradi", 13.5, 7.1017]
  ]
};
