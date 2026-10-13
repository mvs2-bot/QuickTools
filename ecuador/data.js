/* Quick-Tools · Ecuador – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "ecuador",
  name: "Ecuador",
  flag: "🇪🇨",
  tz: "America/Guayaquil",
  currency: {"code": "USD", "symbol": "$", "name": "US-Dollar (offizielle Währung)"},

  glance: {"plug": "A / B", "volt": 120, "adapter": "ja", "drive": "R", "water": "Nicht trinkbar", "tip": "10 % Service meist enthalten, Extra-Trinkgeld freiwillig", "dial": "+593", "voltNote": "120 V – Netzteil muss 100–240 V können"},
  taxi: {"local": "Por favor, lléveme a esta dirección.", "phonetic": "por fa-WOR, JE-we-me a ES-ta di-rek-SJON"},

  phrases: [
    { title: "🇪🇨 Spanisch", lang: "es-EC", items: [
      {"de": "Hallo / Guten Tag", "local": "Hola / Buenos días", "phonetic": "O-la / BWE-nos DI-as"},
      {"de": "Danke schön", "local": "Muchas gracias", "phonetic": "MU-tschas GRA-sjas"},
      {"de": "Entschuldigung", "local": "Disculpe", "phonetic": "dis-KUL-pe"},
      {"de": "Wie viel kostet das?", "local": "¿Cuánto cuesta?", "phonetic": "KWAN-to KWES-ta"},
      {"de": "Die Rechnung, bitte", "local": "La cuenta, por favor", "phonetic": "la KWEN-ta, por fa-WOR"},
      {"de": "Sprechen Sie Englisch?", "local": "¿Habla inglés?", "phonetic": "A-bla in-GLES"},
      {"de": "Wo ist das Krankenhaus?", "local": "¿Dónde está el hospital?", "phonetic": "DON-de es-TA el os-pi-TAL"},
      {"de": "Ein großes Bier bitte", "local": "Una cerveza grande, por favor", "phonetic": "U-na ser-WE-sa GRAN-de, por fa-WOR"},
      {"de": "Ich habe Höhenkrankheit", "local": "Tengo soroche / mal de altura", "phonetic": "TEN-go so-RO-tsche / mal de al-TU-ra"},
      {"de": "Ich bin Vegetarier/in", "local": "Soy vegetariano / vegetariana", "phonetic": "soi we-che-ta-RJA-no / -na"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "No como carne ni pescado, pero sí huevos", "phonetic": "no KO-mo KAR-ne ni pes-KA-do, PE-ro si WE-wos"},
      {"de": "Das Essen war sehr lecker", "local": "La comida estaba muy rica", "phonetic": ""},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "¡Ayuda! ¡Es una emergencia!", "phonetic": "a-JU-da! es U-na e-mer-CHEN-sja"}
    ]},
    { title: "🏔️ Kichwa (Grüße)", lang: "es-EC", items: [
      {"de": "Hallo / Wie geht’s?", "local": "Imanalla", "phonetic": "i-ma-NA-dscha"},
      {"de": "Danke", "local": "Yupaychani", "phonetic": "ju-pai-TSCHA-ni"}
    ]}
  ],

  emergency: [
    ["911", "ECU 911 – Notruf (Polizei, Rettung, Feuerwehr)"]
  ],
  embassy: {"title": "Deutsche Botschaft Quito", "address": ["Av. Naciones Unidas E10-44 y República de El Salvador", "Edificio Citiplaza, 14. Stock, Quito"], "phone": "+593 2 297 0820", "emergency": "+593 99 949 7967", "emergencyNote": "(nur Notfälle deutscher Staatsangehöriger)"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/ecuador-node",

  rules: [
    ["Höhe", "Quito liegt auf ca. 2.850 m – die ersten Tage langsam angehen, viel trinken."],
    ["Galápagos", "Für die Inseln fallen Nationalparkgebühr und Transitkarte an; strenge Kontrollen von Lebensmitteln und Pflanzen."],
    ["Sicherheit", "Reisehinweise des Auswärtigen Amts prüfen, besonders für Guayaquil und die Küste. Nur App- oder registrierte Taxis."],
    ["Bargeld", "Kleine Dollarscheine bereithalten – große Scheine (50/100 $) werden oft nicht angenommen."]
  ],
  sim: [
    ["Lokale SIM", "Claro (beste Abdeckung) oder Movistar – Pass nötig."],
    ["eSIM", "Alternativ vorab eSIM (z. B. Airalo) buchen – am einfachsten schon vor dem Abflug einrichten."]
  ],
  apps: [
    ["Uber, Cabify & DiDi", "Fahrdienste in Quito, Guayaquil und Cuenca."],
    ["Moovit", "Öffis in Quito."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Quito", -0.1807, -78.4678],
    ["Cuenca", -2.9001, -79.0059],
    ["Baños", -1.3964, -78.4247],
    ["Guayaquil", -2.1709, -79.9224],
    ["Galápagos (Puerto Ayora)", -0.7432, -90.3156, "Pacific/Galapagos"]
  ]
};
