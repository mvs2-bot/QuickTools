/* Quick-Tools · Guatemala – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: 'guatemala',
  name: 'Guatemala',
  flag: '🇬🇹',
  tz: 'America/Guatemala',
  currency: { code: 'GTQ', symbol: 'Q', name: 'Guatemaltekischer Quetzal' },

  glance: {"plug": "A / B", "volt": 120, "adapter": "ja", "drive": "R", "water": "Nicht trinkbar", "tip": "ca. 10 %", "dial": "+502", "voltNote": "120 V – Netzteil muss 100–240 V können"},
  taxi: {"local": "Por favor, lléveme a esta dirección.", "phonetic": "por fa-WOR, JE-we-me a ES-ta di-rek-SJON"},

  phrases: [
    { title: '🇬🇹 Spanisch', lang: 'es-GT', items: [
      { de: 'Hallo / Guten Tag', local: 'Hola / Buenos días', phonetic: 'O-la / BWE-nos DI-as' },
      { de: 'Danke schön', local: 'Muchas gracias', phonetic: 'MU-tschas GRA-sjas' },
      { de: 'Entschuldigung', local: 'Disculpe', phonetic: 'dis-KUL-pe' },
      { de: 'Wie viel kostet das?', local: '¿Cuánto cuesta?', phonetic: 'KWAN-to KWES-ta' },
      { de: 'Die Rechnung, bitte', local: 'La cuenta, por favor', phonetic: 'la KWEN-ta, por fa-WOR' },
      { de: 'Sprechen Sie Englisch?', local: '¿Habla inglés?', phonetic: 'A-bla in-GLES' },
      { de: 'Wo ist das Krankenhaus?', local: '¿Dónde está el hospital?', phonetic: 'DON-de es-TA el os-pi-TAL' },
      { de: 'Ein großes Bier bitte', local: 'Una cerveza grande, por favor', phonetic: 'U-na ser-WE-sa GRAN-de, por fa-WOR' },
      { de: 'Ich bin Vegetarier/in', local: 'Soy vegetariano / vegetariana', phonetic: 'soi we-che-ta-RJA-no / -na' },
      { de: 'Ich esse kein Fleisch und Fisch, aber Eier schon', local: 'No como carne ni pescado, pero sí huevos', phonetic: 'no KO-mo KAR-ne ni pes-KA-do, PE-ro si WE-wos' },
      { de: 'Das Essen war sehr lecker', local: 'La comida estaba muy rica', phonetic: 'la ko-MI-da es-TA-ba mui RI-ka' },
      { de: 'Hilfe! Es ist ein Notfall!', local: '¡Ayuda! ¡Es una emergencia!', phonetic: 'a-JU-da! es U-na e-mer-CHEN-sja' }
    ]}
  ],

  emergency: [
    ['110', 'Polizei (PNC)'],
    ['122', 'Feuerwehr & Rettung (Bomberos Voluntarios)'],
    ['123', 'Feuerwehr & Rettung (Bomberos Municipales)'],
    ['1500', 'PROATUR – Touristenhilfe (24 h)']
  ],
  embassy: {
    title: 'Deutsche Botschaft Guatemala-Stadt',
    address: ['Avenida La Reforma 9-55, Zona 10', 'Edificio Reforma 10, Nivel 10', 'Ciudad de Guatemala'],
    phone: '+502 2364 6700',
    emergency: '+502 5709 5004', emergencyNote: '(auch per SMS)'
  },
  aaUrl: 'https://www.auswaertiges-amt.de/de/service/laender/guatemala-node',

  rules: [
    ['Sicherheit', 'Reisehinweise des Auswärtigen Amts beachten. Nachts keine Überlandfahrten, nur Shuttles oder Touren statt „Chicken Buses“ für lange Strecken.'],
    ['Fotografieren', 'Menschen – besonders Kinder und indigene Frauen – nur nach Erlaubnis fotografieren. In Chichicastenango in Kirchen nicht fotografieren.'],
    ['Vulkane', 'Wanderungen (z. B. Acatenango, Pacaya) nur mit Guide; warme Kleidung, nachts wird es eiskalt.'],
    ['Trinkwasser', 'Kein Leitungswasser trinken – auch nicht zum Zähneputzen; Eiswürfel nur in guten Restaurants.'],
    ['Bargeld', 'Kleine Quetzal-Scheine bereithalten; außerhalb der Städte kaum Kartenzahlung.']
  ],
  sim: [
    ['Lokale SIM', 'Prepaid-SIM von Tigo (beste Abdeckung) oder Claro – Reisepass nötig.'],
    ['eSIM', 'Alternativ vorab eSIM (z. B. Airalo).']
  ],
  apps: [
    ['Uber', 'Fahrdienst in Guatemala-Stadt und Antigua.'],
    ['Shuttles', 'Touristen-Shuttles zwischen Antigua, Atitlán und Flores am besten über die Unterkunft oder Agenturen vor Ort buchen.'],
    ['Google Maps & Translate', 'Offline-Karten herunterladen und Übersetzer parat haben.']
  ],

  places: [
    ['Guatemala-Stadt', 14.6349, -90.5069], ['Antigua', 14.5586, -90.7295], ['Panajachel (Atitlán)', 14.7409, -91.1556],
    ['Flores', 16.9283, -89.8917], ['Tikal', 17.2221, -89.6237]
  ]
};
