/* Quick-Tools · Monaco – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "monaco",
  name: "Monaco",
  flag: "🇲🇨",
  tz: "Europe/Monaco",
  currency: null, // Euro → kein Rechner, Startseite = Phrasen

  glance: {"plug": "C / E / F", "volt": 230, "adapter": "nein", "drive": "R", "water": "Trinkbar", "tip": "Aufrunden (Service inklusive)", "dial": "+377"},
  taxi: {"local": "Pouvez-vous m'emmener à cette adresse, s'il vous plaît ?", "phonetic": "pu-we-WU mam-NE a set a-DRES, sil wu PLÄ"},

  phrases: [
    { title: "🇲🇨 Französisch", lang: "fr-MC", items: [
      {"de": "Guten Tag", "local": "Bonjour", "phonetic": "bon-SCHUR"},
      {"de": "Danke schön", "local": "Merci beaucoup", "phonetic": "mär-SI bo-KU"},
      {"de": "Entschuldigung", "local": "Excusez-moi", "phonetic": "ex-kü-se-MUA"},
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
    ["112", "Europäischer Notruf (alle Dienste)"],
    ["17", "Polizei"],
    ["18", "Feuerwehr & Rettungsdienst"]
  ],
  embassy: {"title": "Zuständig: Deutsche Botschaft Paris (Frankreich)", "address": ["13/15 Avenue Franklin D. Roosevelt", "75008 Paris"], "phone": "+33 1 53 83 45 00", "emergency": "+33 6 11 76 22 55", "emergencyNote": "(Bereitschaftsdienst, nur Notfälle; Honorarkonsul in Monaco: +377 97 97 49 65)"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/monaco-node",

  rules: [
    ["Euro", "Monaco nutzt den Euro, ist aber nicht in der EU. Grenzkontrollen zu Frankreich gibt es nicht."],
    ["Kleidung", "Mit Badekleidung, nacktem Oberkörper oder barfuß durch die Stadt zu laufen ist verboten – Bußgeld möglich."],
    ["Casino", "Eintritt ab 18 mit Ausweis, gepflegte Kleidung (keine Shorts, Sportschuhe sind oft unerwünscht)."],
    ["Sicherheit", "Sehr viel Polizei und Videoüberwachung – Regeln (Rauchen, Müll, Lärm) werden konsequent durchgesetzt."]
  ],
  car: [
    ["Promille", "0,5 ‰."],
    ["Parken", "Am besten in den öffentlichen Parkhäusern. Rund um den Grand Prix (Mai) viele Sperrungen."]
  ],
  substances: [
    ["Alkohol", "Ab 18 Jahren."],
    ["Drogen", "Auch Cannabis ist verboten; Drogendelikte werden streng bestraft."]
  ],
  sim: [
    ["Kein EU-Roaming", "Monaco ist nicht in der EU – im Netz von Monaco Telecom kann Roaming teuer sein. Ggf. manuell ein französisches Netz wählen."],
    ["Lokale SIM / eSIM", "Französische Prepaid-SIM oder eSIM (z. B. Airalo) – funktioniert auch in Monaco."]
  ],
  apps: [
    ["SNCF Connect", "Züge entlang der Côte d’Azur (Nizza – Monaco – Menton)."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Monaco", 43.7314, 7.4199],
    ["Monte-Carlo (Casino)", 43.7396, 7.4276],
    ["Port Hercule", 43.7347, 7.4225],
    ["Ozeanographisches Museum", 43.7307, 7.4253],
    ["Jardin Exotique", 43.7312, 7.4130]
  ]
};
