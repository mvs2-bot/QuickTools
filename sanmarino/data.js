/* Quick-Tools · San Marino – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "sanmarino",
  name: "San Marino",
  flag: "🇸🇲",
  tz: "Europe/San_Marino",
  currency: null, // Euro → kein Rechner, Startseite = Phrasen

  glance: {"plug": "C / F / L", "volt": 230, "adapter": "teils – Eurostecker passt immer", "drive": "R", "water": "Trinkbar", "tip": "Coperto auf der Rechnung, Trinkgeld freiwillig", "dial": "+378"},
  taxi: {"local": "Mi porti a questo indirizzo, per favore.", "phonetic": "mi POR-ti a KWE-sto in-di-RIT-tso, per fa-WO-re"},

  phrases: [
    { title: "🇸🇲 Italienisch", lang: "it-SM", items: [
      {"de": "Guten Tag", "local": "Buongiorno", "phonetic": "bwon-DSCHOR-no"},
      {"de": "Danke schön", "local": "Grazie mille", "phonetic": "GRA-tsje MIL-le"},
      {"de": "Entschuldigung", "local": "Mi scusi", "phonetic": "mi SKU-si"},
      {"de": "Wie viel kostet das?", "local": "Quanto costa?", "phonetic": "KWAN-to KOS-ta"},
      {"de": "Die Rechnung, bitte", "local": "Il conto, per favore", "phonetic": "il KON-to, per fa-WO-re"},
      {"de": "Sprechen Sie Englisch?", "local": "Parla inglese?", "phonetic": "PAR-la in-GLE-se"},
      {"de": "Wo ist das Krankenhaus?", "local": "Dov'è l'ospedale?", "phonetic": "do-WE los-pe-DA-le"},
      {"de": "Ein großes Bier bitte", "local": "Una birra grande, per favore", "phonetic": "U-na BIR-ra GRAN-de, per fa-WO-re"},
      {"de": "Ich bin Vegetarier/in", "local": "Sono vegetariano / vegetariana", "phonetic": "SO-no we-dsche-ta-RJA-no / -na"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "Non mangio né carne né pesce, ma le uova sì", "phonetic": "non MAN-dscho ne KAR-ne ne PE-sche, ma le WO-wa si"},
      {"de": "Das Essen war sehr lecker", "local": "Era buonissimo!", "phonetic": "E-ra bwo-NIS-si-mo"},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "Aiuto! È un'emergenza!", "phonetic": "a-JU-to! e un-e-mer-DSCHEN-tsa"}
    ]}
  ],

  emergency: [
    ["112", "Allgemeiner Notruf"],
    ["113", "Polizei"],
    ["115", "Feuerwehr"],
    ["118", "Rettungsdienst"]
  ],
  embassy: {"title": "Zuständig: Deutsche Botschaft Rom (Italien)", "address": ["Via San Martino della Battaglia 4", "00185 Roma"], "phone": "+39 06 492 131"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/sanmarino-node",

  rules: [
    ["Euro", "San Marino nutzt den Euro, ist aber nicht in der EU. Keine Grenzkontrollen zu Italien – Ausweis trotzdem dabeihaben."],
    ["Altstadt", "Die Altstadt auf dem Monte Titano ist steil und weitgehend autofrei – bequeme Schuhe."],
    ["Passstempel", "Einen Souvenir-Stempel im Pass gibt es gegen Gebühr im Touristenbüro."]
  ],
  car: [
    ["Promille", "0,5 ‰."],
    ["Parken", "Autos auf den ausgeschilderten Parkplätzen unterhalb der Altstadt abstellen; von Borgo Maggiore fährt eine Seilbahn hinauf."]
  ],
  substances: [
    ["Alkohol", "Ab 18 Jahren."],
    ["Drogen", "Auch Cannabis ist verboten; Drogendelikte werden streng bestraft."]
  ],
  sim: [
    ["Roaming", "San Marino ist nicht in der EU. Meist bucht sich das Handy in italienische Netze ein (EU-Roaming) – im Netz von San Marino kann es teuer werden, ggf. Netz manuell wählen."]
  ],
  apps: [
    ["Bus Rimini – San Marino", "Linienbus vom Bahnhof Rimini, Tickets im Bus oder online."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["San Marino (Città)", 43.9356, 12.4473],
    ["Guaita (Erster Turm)", 43.9338, 12.4497],
    ["Borgo Maggiore", 43.9411, 12.4483],
    ["Serravalle", 43.9690, 12.4800]
  ]
};
