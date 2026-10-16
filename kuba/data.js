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
  embassy: {"title": "Deutsche Botschaft Havanna", "address": ["Calle 13 No. 652, esq. a B, Vedado", "La Habana"], "phone": "+53 7 833 2569", "emergency": "+53 5280 5942", "emergencyNote": "(Bereitschaft, auch SMS/WhatsApp; keine Visafragen)"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/kuba-node",

  rules: [
    ["Reisehinweis", "Das Auswärtige Amt rät derzeit dringend von Reisen nach Kuba ab: Stromabschaltungen bis zu 20 Stunden täglich, Mangel an Treibstoff, Wasser, Lebensmitteln und Medikamenten, stark eingeschränkte medizinische Versorgung."],
    ["Einreise", "Visum nötig – nur online über eVisaCuba beantragen. Innerhalb von 48 Stunden vor dem Check-in das Online-Formular „D’Viajeros“ ausfüllen. Eine für Kuba gültige Auslandskrankenversicherung ist Pflicht (gesetzliche deutsche Kassen zählen nicht)."],
    ["Bargeld", "Genug Euro oder US-Dollar in bar mitnehmen – seit Juni 2026 funktionieren VISA und Mastercard nicht mehr, Geldautomaten sind praktisch nicht nutzbar. Der Straßenkurs liegt weit über dem offiziellen Kurs."],
    ["Versorgung", "Lange Stromausfälle und Engpässe bei Medikamenten, Treibstoff und Lebensmitteln – Reiseapotheke, Taschenlampe und Powerbank mitbringen."],
    ["USA-Reisen", "Wer seit dem 12. Januar 2021 in Kuba war, kann für die USA kein ESTA mehr nutzen und braucht ein Visum."],
    ["Politik & Fotos", "Politische Betätigung ist Ausländern verboten; keine Menschenansammlungen, Polizei, Uniformierte oder militärische Anlagen fotografieren."]
  ],
  car: [
    ["Straßen", "Wegen Treibstoffmangels (max. 20 Liter pro Tankvorgang) sind Überlandfahrten mit Mietwagen derzeit kaum möglich. Schlaglöcher, Pferdekutschen und unbeleuchtete Fahrzeuge – nachts nicht fahren."]
  ],
  substances: [
    ["Alkohol", "Ab 18 Jahren."],
    ["E-Zigaretten", "Die Einfuhr von E-Zigaretten ist verboten."],
    ["Drogen", "Schon kleine Mengen werden drastisch bestraft – 4 bis 30 Jahre Haft, in schweren Fällen droht die Todesstrafe."]
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
