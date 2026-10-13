/* Quick-Tools · Bolivien – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: 'bolivien',
  name: 'Bolivien',
  flag: '🇧🇴',
  tz: 'America/La_Paz',
  currency: { code: 'BOB', symbol: 'Bs', name: 'Boliviano' },

  glance: {"plug": "A / C", "volt": 230, "adapter": "teils – Typ A braucht Adapter", "drive": "R", "water": "Nicht trinkbar", "tip": "ca. 10 %", "dial": "+591", "voltNote": "In La Paz teils 115 V – Netzteil prüfen"},
  taxi: {"local": "Por favor, lléveme a esta dirección.", "phonetic": "por fa-WOR, JE-we-me a ES-ta di-rek-SJON"},

  phrases: [
    { title: '🇧🇴 Spanisch', lang: 'es-BO', items: [
      { de: 'Hallo / Guten Tag', local: 'Hola / Buenos días', phonetic: 'O-la / BWE-nos DI-as' },
      { de: 'Danke schön', local: 'Muchas gracias', phonetic: 'MU-tschas GRA-sjas' },
      { de: 'Entschuldigung', local: 'Disculpe', phonetic: 'dis-KUL-pe' },
      { de: 'Wie viel kostet das?', local: '¿Cuánto cuesta?', phonetic: 'KWAN-to KWES-ta' },
      { de: 'Die Rechnung, bitte', local: 'La cuenta, por favor', phonetic: 'la KWEN-ta, por fa-WOR' },
      { de: 'Sprechen Sie Englisch?', local: '¿Habla inglés?', phonetic: 'A-bla in-GLES' },
      { de: 'Wo ist das Krankenhaus?', local: '¿Dónde está el hospital?', phonetic: 'DON-de es-TA el os-pi-TAL' },
      { de: 'Ich habe Höhenkrankheit', local: 'Tengo soroche / mal de altura', phonetic: 'TEN-go so-RO-tsche / mal de al-TU-ra' },
      { de: 'Ein großes Bier bitte', local: 'Una cerveza grande, por favor', phonetic: 'U-na ser-WE-sa GRAN-de, por fa-WOR' },
      { de: 'Ich bin Vegetarier/in', local: 'Soy vegetariano / vegetariana', phonetic: 'soi we-che-ta-RJA-no / -na' },
      { de: 'Ich esse kein Fleisch und Fisch, aber Eier schon', local: 'No como carne ni pescado, pero sí huevos', phonetic: 'no KO-mo KAR-ne ni pes-KA-do, PE-ro si WE-wos' },
      { de: 'Das Essen war sehr lecker', local: 'La comida estaba muy rica', phonetic: 'la ko-MI-da es-TA-ba mui RI-ka' },
      { de: 'Hilfe! Es ist ein Notfall!', local: '¡Ayuda! ¡Es una emergencia!', phonetic: 'a-JU-da! es U-na e-mer-CHEN-sja' }
    ]},
    { title: '🏔️ Aymara & Quechua (Grüße)', lang: 'es-BO', items: [
      { de: 'Hallo / Guten Tag (Aymara)', local: 'Kamisaki', phonetic: 'ka-mi-SA-ki' },
      { de: 'Danke (Aymara)', local: 'Yuspajarpa', phonetic: 'jus-pa-CHAR-pa' },
      { de: 'Danke (Quechua)', local: 'Sulpayki', phonetic: 'sul-PAI-ki' }
    ]}
  ],

  emergency: [
    ['110', 'Polizei'],
    ['118', 'Rettungsdienst'],
    ['119', 'Feuerwehr']
  ],
  embassy: {
    title: 'Deutsche Botschaft La Paz',
    address: ['Avenida Arce 2395, Ecke Calle Belisario Salinas', 'La Paz'],
    phone: '+591 2 244 0066'
  },
  aaUrl: 'https://www.auswaertiges-amt.de/de/service/laender/bolivien-node',

  rules: [
    ['Höhe', 'La Paz liegt auf ca. 3.600 m, El Alto über 4.000 m: langsam akklimatisieren, viel trinken, Coca-Tee hilft vielen. Bei starken Beschwerden absteigen und Arzt aufsuchen.'],
    ['Coca', 'Coca-Blätter sind in Bolivien legal, dürfen aber nicht nach Deutschland/EU mitgenommen werden.'],
    ['Fotografieren', 'Menschen, besonders Indigene, nur nach vorheriger Frage fotografieren.'],
    ['Sicherheit', 'Nur offizielle Funk- oder App-Taxis nutzen, Wertsachen nicht offen zeigen. Bei Straßenblockaden (bloqueos) nicht durchfahren.'],
    ['Bargeld', 'Kleine Scheine bereithalten – Wechselgeld ist oft knapp. Außerhalb der Städte kaum Kartenzahlung.']
  ],
  sim: [
    ['Lokale SIM', 'Prepaid-SIM von Entel (beste Abdeckung), Tigo oder Viva im Shop – Reisepass nötig.'],
    ['eSIM', 'Alternativ vorab eSIM (z. B. Airalo) – in ländlichen Gebieten aber oft kein Netz.']
  ],
  apps: [
    ['Uber & inDrive', 'Fahrdienste in La Paz, Santa Cruz und Cochabamba.'],
    ['Mi Teleférico', 'Infos zu den Seilbahnlinien in La Paz / El Alto.'],
    ['Google Maps & Translate', 'Offline-Karten herunterladen und Übersetzer parat haben.']
  ],

  places: [
    ['La Paz', -16.4897, -68.1193], ['Sucre', -19.0196, -65.2619], ['Uyuni', -20.4603, -66.8261],
    ['Santa Cruz', -17.8146, -63.1561], ['Copacabana (Titicacasee)', -16.1659, -69.0864]
  ]
};
