/* Quick-Tools · Mexiko – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "mexiko",
  name: "Mexiko",
  flag: "🇲🇽",
  tz: "America/Mexico_City",
  currency: {"code": "MXN", "symbol": "$", "name": "Mexikanischer Peso"},

  glance: {"plug": "A / B", "volt": 127, "adapter": "ja", "drive": "R", "water": "Nicht trinkbar", "tip": "10–15 %", "dial": "+52", "voltNote": "127 V – Netzteil muss 100–240 V können"},
  taxi: {"local": "Por favor, lléveme a esta dirección.", "phonetic": "por fa-WOR, JE-we-me a ES-ta di-rek-SJON"},

  phrases: [
    { title: "🇲🇽 Spanisch (Mexiko)", lang: "es-MX", items: [
      {"de": "Hallo / Guten Tag", "local": "Hola / Buenos días", "phonetic": "O-la / BWE-nos DI-as"},
      {"de": "Danke schön", "local": "Muchas gracias", "phonetic": "MU-tschas GRA-sjas"},
      {"de": "Entschuldigung", "local": "Disculpe", "phonetic": "dis-KUL-pe"},
      {"de": "Wie viel kostet das?", "local": "¿Cuánto cuesta?", "phonetic": "KWAN-to KWES-ta"},
      {"de": "Die Rechnung, bitte", "local": "La cuenta, por favor", "phonetic": "la KWEN-ta, por fa-WOR"},
      {"de": "Sprechen Sie Englisch?", "local": "¿Habla inglés?", "phonetic": "A-bla in-GLES"},
      {"de": "Wo ist das Krankenhaus?", "local": "¿Dónde está el hospital?", "phonetic": "DON-de es-TA el os-pi-TAL"},
      {"de": "Ein großes Bier bitte", "local": "Una cerveza grande, por favor", "phonetic": "U-na ser-WE-sa GRAN-de, por fa-WOR"},
      {"de": "Bitte nicht scharf", "local": "Sin picante, por favor", "phonetic": "sin pi-KAN-te, por fa-WOR"},
      {"de": "Ich bin Vegetarier/in", "local": "Soy vegetariano / vegetariana", "phonetic": "soi we-che-ta-RJA-no / -na"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "No como carne ni pescado, pero sí huevos", "phonetic": "no KO-mo KAR-ne ni pes-KA-do, PE-ro si WE-wos"},
      {"de": "Das Essen war sehr lecker", "local": "¡Estuvo delicioso!", "phonetic": ""},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "¡Ayuda! ¡Es una emergencia!", "phonetic": "a-JU-da! es U-na e-mer-CHEN-sja"}
    ]}
  ],

  emergency: [
    ["911", "Notruf (Polizei, Rettung, Feuerwehr)"],
    ["078", "Ángeles Verdes – Pannen- & Touristenhilfe"]
  ],
  embassy: {"title": "Deutsche Botschaft Mexiko-Stadt", "address": ["Horacio 1506, Col. Los Morales Sección Alameda", "11530 Mexiko-Stadt"], "phone": "+52 55 5283 2200", "emergency": "+52 55 5431 2177", "emergencyNote": "(keine Visa- oder Passfragen)"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/mexiko-node",

  rules: [
    ["Sicherheit", "Reisehinweise des Auswärtigen Amts je Bundesstaat prüfen. Nachts keine Überlandfahrten, nur App- oder Hoteltaxis."],
    ["Gefährliche Regionen", "Das Auswärtige Amt rät dringend ab von Reisen nach Colima, Guerrero (außer Acapulco und Ixtapa-Zihuatanejo per Flug), Michoacán (außer Morelia per Flug), Sinaloa, Tamaulipas nördlich von Ciudad Victoria, Zacatecas (außer der Stadt) und in die Grenzregion zu den USA."],
    ["Wasser", "Auch zum Zähneputzen Flaschenwasser nutzen; Eis in Restaurants ist meist aus gereinigtem Wasser."],
    ["Einreise", "Die Einreise wird heute meist digital erfasst – die genehmigte Aufenthaltsdauer beim Grenzbeamten prüfen."],
    ["Bargeld", "Pesos an Bankautomaten in Banken abheben; Kartenzahlung „in Pesos“ wählen."],
    ["Sargassum", "An der Karibikküste kann im Sommer viel Seetang anlanden – vorher Lage prüfen."]
  ],
  car: [
    ["Promille", "Je nach Bundesstaat; in Mexiko-Stadt enden Alkoholkontrollen („Alcoholímetro“) bei Überschreitung mit Arrest."],
    ["Straßen", "Viele Bodenschwellen („topes“). Nachts nicht über Land fahren, gebührenpflichtige Autobahnen („cuota“) sind sicherer."]
  ],
  substances: [
    ["E-Zigaretten", "Vapes sind seit 2025 verboten – nicht mitbringen, es drohen hohe Strafen."],
    ["Alkohol", "Ab 18. Trinken in der Öffentlichkeit ist verboten."],
    ["Rauchen", "An Stränden, in Parks und an vielen öffentlichen Orten verboten."],
    ["Drogen", "Finger weg – es drohen Haft, Erpressung und Gefahr durch Kartelle."]
  ],
  sim: [
    ["Lokale SIM", "Telcel (beste Abdeckung) oder AT&T – in Oxxo-Läden erhältlich."],
    ["eSIM", "Alternativ vorab eSIM (z. B. Airalo) buchen – am einfachsten schon vor dem Abflug einrichten."]
  ],
  apps: [
    ["Uber, DiDi & Cabify", "Fahrdienste in fast allen Städten."],
    ["ADO", "Fernbustickets (sehr gutes Busnetz)."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Mexiko-Stadt", 19.4326, -99.1332],
    ["Cancún", 21.1619, -86.8515, "America/Cancun"],
    ["Oaxaca", 17.0732, -96.7266],
    ["Tulum", 20.2114, -87.4654, "America/Cancun"],
    ["Guadalajara", 20.6597, -103.3496]
  ]
};
