/* Quick-Tools · Vatikanstadt – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "vatikan",
  name: "Vatikanstadt",
  flag: "🇻🇦",
  tz: "Europe/Vatican",
  currency: null, // Euro → kein Rechner, Startseite = Phrasen

  glance: {"plug": "C / F / L", "volt": 230, "adapter": "teils – Eurostecker passt immer", "drive": "R", "water": "Trinkbar", "tip": "Coperto auf der Rechnung, Trinkgeld freiwillig", "dial": "+39"},
  taxi: {"local": "Mi porti a questo indirizzo, per favore.", "phonetic": "mi POR-ti a KWE-sto in-di-RIT-tso, per fa-WO-re"},

  phrases: [
    { title: "🇻🇦 Italienisch", lang: "it-VA", items: [
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

  status: [
    ["Kein UN-Mitglied", "Die Vatikanstadt ist kein Mitglied der Vereinten Nationen; der Heilige Stuhl hat dort Beobachterstatus. Völkerrechtlich handelt der Heilige Stuhl, nicht der Staat Vatikanstadt."]
  ],
  emergency: [
    ["112", "Europäischer Notruf (alle Dienste)"],
    ["118", "Rettungsdienst"],
    ["113", "Polizei"],
    ["115", "Feuerwehr"]
  ],
  embassy: {"title": "Zuständig: Deutsche Botschaft Rom (Italien)", "address": ["Via San Martino della Battaglia 4", "00185 Roma"], "phone": "+39 06 492 131", "emergency": "+39 06 492 131", "emergencyNote": "(Notfälle rund um die Uhr, auf Deutsch)"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/heiligerstuhlvatikan-node",

  rules: [
    ["Kleidung", "Im Petersdom und in den Vatikanischen Museen Schultern und Knie bedecken – sonst wird der Einlass verweigert."],
    ["Museen", "Tickets für die Vatikanischen Museen online vorab buchen. Sonntags meist geschlossen (außer letzter Sonntag im Monat, dann Eintritt frei)."],
    ["Papst", "Generalaudienz meist mittwochs, Angelus sonntags um 12 Uhr – Audienz-Tickets sind kostenlos."],
    ["Sicherheit", "Sicherheitskontrolle am Petersdom; große Taschen sind nicht erlaubt. Auf Taschendiebe achten."]
  ],
  car: [
    ["Anreise", "Mit dem Auto kaum sinnvoll – in Rom gelten Zonen mit Zufahrtsbeschränkung (ZTL). Besser Metro (Linie A, Ottaviano) oder Bus."]
  ],
  substances: [
    ["Alkohol", "Ab 18 Jahren."],
    ["Drogen", "Auch Cannabis ist verboten; Drogendelikte werden streng bestraft."]
  ],
  sim: [
    ["EU-Roaming", "Im Vatikan funktionieren die italienischen Netze – mit deutschem Tarif ohne Aufpreis („Roam like at home“)."]
  ],
  apps: [
    ["Musei Vaticani", "Offizielle Website für Museumstickets – keine Zwischenhändler."],
    ["Moovit", "Bus und Metro in Rom."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Vatikanstadt (Petersplatz)", 41.9022, 12.4568],
    ["Petersdom", 41.9022, 12.4539],
    ["Vatikanische Museen", 41.9065, 12.4536],
    ["Sixtinische Kapelle", 41.9029, 12.4545],
    ["Vatikanische Gärten", 41.9035, 12.4508]
  ]
};
