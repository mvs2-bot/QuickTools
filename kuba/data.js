/* Quick-Tools · Kuba – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "kuba",
  name: "Kuba",
  flag: "🇨🇺",
  tz: "America/Havana",
  currency: {"code": "CUP", "symbol": "$", "name": "Kubanischer Peso", "tableDecimals": 0},

  glance: {"plug": "A / B / C / L", "volt": 110, "adapter": "ja", "drive": "R", "water": "Nicht trinkbar", "tip": "ca. 10 %", "dial": "+53", "voltNote": "110 V (teils 220 V) – Netzteil muss 100–240 V können"},
  taxi: {"local": "Por favor, lléveme a esta dirección.", "phonetic": "por fa-WOR, JE-we-me a ES-ta di-rek-SJON"},

  phrases: [
    { title: "🇨🇺 Spanisch", lang: "es-CU", items: [
      {"de": "Hallo / Guten Tag", "local": "Hola / Buenos días", "phonetic": "O-la / BWE-nos DI-as"},
      {"de": "Danke schön", "local": "Muchas gracias", "phonetic": "MU-tschas GRA-sjas"},
      {"de": "Entschuldigung", "local": "Disculpe", "phonetic": "dis-KUL-pe"},
      {"de": "Wie viel kostet das?", "local": "¿Cuánto cuesta?", "phonetic": "KWAN-to KWES-ta"},
      {"de": "Die Rechnung, bitte", "local": "La cuenta, por favor", "phonetic": "la KWEN-ta, por fa-WOR"},
      {"de": "Sprechen Sie Englisch?", "local": "¿Habla inglés?", "phonetic": "A-bla in-GLES"},
      {"de": "Wo ist das Krankenhaus?", "local": "¿Dónde está el hospital?", "phonetic": "DON-de es-TA el os-pi-TAL"},
      {"de": "Ein großes Bier bitte", "local": "Una cerveza grande, por favor", "phonetic": "U-na ser-WE-sa GRAN-de, por fa-WOR"},
      {"de": "Ich bin Vegetarier/in", "local": "Soy vegetariano / vegetariana", "phonetic": "soi we-che-ta-RJA-no / -na"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "No como carne ni pescado, pero sí huevos", "phonetic": "no KO-mo KAR-ne ni pes-KA-do, PE-ro si WE-wos"},
      {"de": "Das Essen war sehr lecker", "local": "La comida estaba muy rica", "phonetic": "la ko-MI-da es-TA-ba mui RI-ka"},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "¡Ayuda! ¡Es una emergencia!", "phonetic": "a-JU-da! es U-na e-mer-CHEN-sja"}
    ]}
  ],

  emergency: [
    ["106", "Polizei"],
    ["104", "Rettungsdienst"],
    ["105", "Feuerwehr"]
  ],
  embassy: {"title": "Deutsche Botschaft Havanna", "address": ["Calle 13 No. 652, esq. a B, Vedado", "La Habana"], "phone": "+53 7 833 2539"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/kuba-node",

  rules: [
    ["Einreise", "Touristenkarte nötig (über Reiseveranstalter oder Airline) und vor der Ankunft das Online-Formular „D’Viajeros“ ausfüllen. Auslandskrankenversicherung ist Pflicht."],
    ["Bargeld", "Genug Euro in bar mitnehmen – Karten funktionieren oft nicht, Geldautomaten sind unzuverlässig. Der Straßenkurs liegt weit über dem offiziellen Kurs."],
    ["Versorgung", "Lange Stromausfälle und Engpässe bei Medikamenten, Treibstoff und Lebensmitteln – Reiseapotheke, Taschenlampe und Powerbank mitbringen."],
    ["USA-Reisen", "Wer seit dem 12. Januar 2021 in Kuba war, kann für die USA kein ESTA mehr nutzen und braucht ein Visum."],
    ["Politik & Fotos", "Keine Kritik an der Regierung in der Öffentlichkeit; Polizei, Militär und Behörden nicht fotografieren."]
  ],
  car: [
    ["Straßen", "Schlaglöcher, Pferdekutschen und unbeleuchtete Fahrzeuge – nachts nicht fahren. Benzin ist oft knapp; Mietwagen sind teuer und rar."]
  ],
  substances: [
    ["Alkohol", "Ab 18 Jahren."],
    ["Drogen", "Drogendelikte werden sehr streng bestraft – lange Haftstrafen, auch für kleine Mengen."]
  ],
  sim: [
    ["Lokale SIM", "Nur über ETECSA: Touristen-SIM „Cubacel Tur“ vorab online bestellen oder im Büro kaufen. Mobiles Internet ist langsam."],
    ["WLAN", "In Hotels und an öffentlichen Hotspots mit Prepaid-Karte; manche Dienste sind aus Kuba gesperrt – Apps vor der Reise installieren."]
  ],
  apps: [
    ["Offline-Karten", "Organic Maps oder Maps.me mit heruntergeladenen Karten – Internet ist oft nicht verfügbar."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Havanna", 23.1136, -82.3666],
    ["Viñales", 22.6167, -83.7064],
    ["Trinidad", 21.8022, -79.9842],
    ["Varadero", 23.1544, -81.2516],
    ["Santiago de Cuba", 20.0247, -75.8219]
  ]
};
