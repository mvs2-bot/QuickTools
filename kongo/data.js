/* Quick-Tools · Republik Kongo – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "kongo",
  name: "Republik Kongo",
  flag: "🇨🇬",
  tz: "Africa/Brazzaville",
  currency: {"code": "XAF", "symbol": "FCFA", "name": "CFA-Franc BEAC", "tableDecimals": 0},

  glance: {"plug": "C / E", "volt": 230, "adapter": "nein", "drive": "R", "water": "Nicht trinkbar", "tip": "Nicht üblich, Aufrunden wird geschätzt", "dial": "+242"},
  taxi: {"local": "Emmenez-moi à cette adresse, s'il vous plaît.", "phonetic": "am-NE MUA a set a-DRES, sil wu PLÄ"},

  phrases: [
    { title: "🇨🇬 Französisch", lang: "fr-CG", items: [
      {"de": "Hallo / Guten Tag", "local": "Bonjour", "phonetic": "bon-SCHUR"},
      {"de": "Danke schön", "local": "Merci beaucoup", "phonetic": "mär-SI bo-KU"},
      {"de": "Entschuldigung", "local": "Excusez-moi", "phonetic": "eks-kü-SE MUA"},
      {"de": "Wie viel kostet das?", "local": "C'est combien ?", "phonetic": "sä kom-BJÄ"},
      {"de": "Die Rechnung, bitte", "local": "L'addition, s'il vous plaît", "phonetic": "la-di-SJO, sil wu PLÄ"},
      {"de": "Sprechen Sie Englisch?", "local": "Vous parlez anglais ?", "phonetic": "wu par-LE ong-GLÄ"},
      {"de": "Wo ist das Krankenhaus?", "local": "Où est l'hôpital ?", "phonetic": "u ä lo-pi-TAL"},
      {"de": "Ein großes Bier bitte", "local": "Une grande bière, s'il vous plaît", "phonetic": "ün grand BJÄR, sil wu PLÄ"},
      {"de": "Ich bin Vegetarier/in", "local": "Je suis végétarien / végétarienne", "phonetic": "sche süi we-sche-ta-RJÄ / -RJÄN"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "Je ne mange ni viande ni poisson, mais je mange des œufs", "phonetic": "sche ne mansch ni WJAND ni pua-SO, mä sche mansch de SÖ"},
      {"de": "Das Essen war sehr lecker", "local": "C'était délicieux !", "phonetic": "se-TÄ de-li-SJÖ"},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "Au secours ! C'est une urgence !", "phonetic": "o se-KUR! sä-tün ür-SCHANS"}
    ]},
    { title: "🇨🇬 Lingala (Grüße)", lang: "ln", items: [
      {"de": "Hallo", "local": "Mbote", "phonetic": "M-BO-te"},
      {"de": "Wie geht’s?", "local": "Ndenge nini?", "phonetic": "n-DEN-ge NI-ni"},
      {"de": "Gut", "local": "Malamu", "phonetic": "ma-LA-mu"},
      {"de": "Danke", "local": "Matondo", "phonetic": "ma-TON-do"}
    ]}
  ],

  emergency: [
    ["117", "Polizei"],
    ["118", "Feuerwehr"]
  ],
  embassy: {"title": "Deutsche Botschaft Brazzaville", "address": ["Avenue Alfassa (auf dem Gelände der französischen Botschaft)", "Brazzaville"], "phone": "+242 06 510 01 48", "emergency": "+243 825 173 064", "emergencyNote": "(Bereitschaft der Botschaft Kinshasa; Konsularisches und Visa über Kinshasa)"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/kongorepublik-node",

  rules: [
    ["Einreise", "Visum vorab bei der Botschaft in Berlin (kein Visum bei Einreise), Reisepass mindestens 6 Monate gültig. Gelbfieberimpfung Pflicht."],
    ["Sicherheit", "Département Pool nur bei Tageslicht und auf dem Landweg bereisen; auf der N1 bei Mindouli sind Straßensperren möglich. In Brazzaville und Pointe-Noire nachts vorsichtig sein."],
    ["Fotografieren", "Streng verboten: Militär, Flughafen, Häfen, Kasernen, Krankenhäuser, Brücken – es drohen Geldstrafen und Haft. Keine Drohnen mitbringen."],
    ["Fluggesellschaften", "Die im Land zugelassenen Airlines stehen auf der EU-Liste unsicherer Fluggesellschaften."]
  ],
  car: [
    ["Straßen", "Fernfahrten mit Taxis und Bussen vermeiden, besonders in der Regenzeit; außerhalb von Orten nie nach Einbruch der Dunkelheit fahren."],
    ["Promille", "Am besten gar nicht trinken – Polizeikontrollen sind häufig."]
  ],
  substances: [
    ["Alkohol", "Bier (z. B. Primus, Ngok) ist überall erhältlich."],
    ["Drogen", "Drogenhandel wird streng bestraft."]
  ],
  sim: [
    ["Lokale SIM", "MTN oder Airtel – im Shop, Pass nötig."],
    ["eSIM", "Alternativ vorab eSIM (z. B. Airalo) buchen – am einfachsten schon vor dem Abflug einrichten."]
  ],
  apps: [
    ["WhatsApp", "Wichtigster Kontaktweg zu Unterkünften, Fahrern und Guides."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Brazzaville", -4.2634, 15.2429],
    ["Pointe-Noire", -4.7692, 11.8664],
    ["Odzala-Kokoua-Nationalpark", 0.6, 14.9],
    ["Conkouati-Douli-Nationalpark", -3.95, 11.4],
    ["Ouesso", 1.6136, 16.0517]
  ]
};
