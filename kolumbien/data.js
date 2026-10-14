/* Quick-Tools · Kolumbien – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: 'kolumbien',
  name: 'Kolumbien',
  flag: '🇨🇴',
  tz: 'America/Bogota',
  currency: { code: 'COP', symbol: '$', name: 'Kolumbianischer Peso', tableDecimals: 0 },

  glance: {"plug": "A / B", "volt": 110, "adapter": "ja", "drive": "R", "water": "Bogotá & Medellín trinkbar, sonst Flaschenwasser", "tip": "ca. 10 % (servicio wird gefragt)", "dial": "+57", "voltNote": "110 V – Netzteil muss 100–240 V können"},
  taxi: {"local": "Por favor, lléveme a esta dirección.", "phonetic": "por fa-WOR, JE-we-me a ES-ta di-rek-SJON"},

  phrases: [
    { title: '🇨🇴 Spanisch', lang: 'es-CO', items: [
      { de: 'Hallo / Guten Tag', local: 'Hola / Buenos días', phonetic: 'O-la / BWE-nos DI-as' },
      { de: 'Danke schön', local: 'Muchas gracias', phonetic: 'MU-tschas GRA-sjas' },
      { de: 'Entschuldigung', local: 'Disculpe', phonetic: 'dis-KUL-pe' },
      { de: 'Wie viel kostet das?', local: '¿Cuánto cuesta?', phonetic: 'KWAN-to KWES-ta' },
      { de: 'Die Rechnung, bitte', local: '¿Me regala la cuenta, por favor?', phonetic: 'me re-GA-la la KWEN-ta, por fa-WOR' },
      { de: 'Sprechen Sie Englisch?', local: '¿Habla inglés?', phonetic: 'A-bla in-GLES' },
      { de: 'Wo ist das Krankenhaus?', local: '¿Dónde está el hospital?', phonetic: 'DON-de es-TA el os-pi-TAL' },
      { de: 'Ein großes Bier bitte', local: 'Una cerveza grande, por favor', phonetic: 'U-na ser-WE-sa GRAN-de, por fa-WOR' },
      { de: 'Ich bin Vegetarier/in', local: 'Soy vegetariano / vegetariana', phonetic: 'soi we-che-ta-RJA-no / -na' },
      { de: 'Ich esse kein Fleisch und Fisch, aber Eier schon', local: 'No como carne ni pescado, pero sí huevos', phonetic: 'no KO-mo KAR-ne ni pes-KA-do, PE-ro si WE-wos' },
      { de: 'Das Essen war sehr lecker', local: 'La comida estaba deliciosa', phonetic: 'la ko-MI-da es-TA-ba de-li-SJO-sa' },
      { de: 'Hilfe! Es ist ein Notfall!', local: '¡Ayuda! ¡Es una emergencia!', phonetic: 'a-JU-da! es U-na e-mer-CHEN-sja' }
    ]}
  ],

  emergency: [
    ['123', 'Nationaler Notruf (Polizei, Rettung, Feuerwehr)'],
    ['112', 'Polizei (vom Handy)'],
    ['119', 'Feuerwehr']
  ],
  embassy: {
    title: 'Deutsche Botschaft Bogotá',
    address: ['Calle 110 No. 9-25, piso 11', 'Torre Empresarial Pacífic', 'Bogotá D.C.'],
    phone: '+57 601 423 2600',
    emergency: '+57 320 865 3717', emergencyNote: '(nur akute Notlagen, keine Visafragen)'
  },
  aaUrl: 'https://www.auswaertiges-amt.de/de/service/laender/kolumbien-node',

  rules: [
    ["„No dar papaya“", "Keine Gelegenheit für Diebe bieten: Handy nicht offen zeigen, Wertsachen im Hotel lassen, nur App-Taxis nutzen."],
    ["K.-o.-Tropfen", "Getränke nie unbeaufsichtigt lassen und nichts von Fremden annehmen (Scopolamin-Fälle)."],
    ["Reisehinweise", "Einige Regionen gelten als gefährlich – aktuelle Hinweise des Auswärtigen Amts vor jeder Etappe prüfen."],
    ["Höhe", "Bogotá liegt auf ca. 2.600 m – die ersten Tage langsam angehen."],
    ["Trinkgeld", "In Restaurants werden 10 % „servicio“ oft vorgeschlagen – freiwillig, man wird gefragt."]
  ],
  car: [
    ["Promille", "Praktisch 0,0 ‰ – schon ab 0,2 ‰ drohen hohe Strafen."],
    ["Pico y Placa", "In Bogotá, Medellín und anderen Städten gilt je nach Kennzeichen-Endziffer ein Fahrverbot."]
  ],
  substances: [
    ["Alkohol", "Ab 18 Jahren. Rund um Wahlen gilt oft ein Alkoholverbot („Ley seca“)."],
    ["Drogen", "Kauf und Handel sind verboten – auch wenn Drogen offen angeboten werden. Oft gezielte Kontrollen von Touristen."]
  ],
  sim: [
    ['Lokale SIM', 'Prepaid-SIM von Claro (beste Abdeckung), Movistar oder Tigo – Reisepass nötig.'],
    ['eSIM', 'Alternativ vorab eSIM (z. B. Airalo).']
  ],
  apps: [
    ['Uber, Cabify, DiDi & inDrive', 'Fahrdienste in allen großen Städten – sicherer als Taxi von der Straße.'],
    ['Rappi', 'Essen und Einkäufe liefern lassen.'],
    ['Google Maps & Translate', 'Offline-Karten herunterladen und Übersetzer parat haben.']
  ],

  places: [
    ['Bogotá', 4.711, -74.0721], ['Medellín', 6.2442, -75.5812], ['Cartagena', 10.391, -75.4794],
    ['Santa Marta', 11.2408, -74.199], ['Salento', 4.6378, -75.5702]
  ]
};
