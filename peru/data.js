/* Quick-Tools · Peru – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: 'peru',
  name: 'Peru',
  flag: '🇵🇪',
  tz: 'America/Lima',
  currency: { code: 'PEN', symbol: 'S/', name: 'Peruanischer Sol' },

  phrases: [
    { title: '🇵🇪 Spanisch', lang: 'es-PE', items: [
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
    { title: '🏔️ Quechua (Grüße)', lang: 'es-PE', items: [
      { de: 'Hallo / Wie geht’s?', local: 'Allillanchu?', phonetic: 'a-li-JAN-tschu' },
      { de: 'Danke', local: 'Sulpayki', phonetic: 'sul-PAI-ki' },
      { de: 'Bis bald', local: 'Tupananchiskama', phonetic: 'tu-pa-nan-tschis-KA-ma' }
    ]}
  ],

  emergency: [
    ['105', 'Polizei'],
    ['106', 'Rettungsdienst (SAMU)'],
    ['116', 'Feuerwehr']
  ],
  embassy: {
    title: 'Deutsche Botschaft Lima',
    address: ['Av. Dionisio Derteano 144, Edificio Alto Caral, 7./8. Stock', 'San Isidro, Lima'],
    phone: '+51 1 203 5940'
  },
  aaUrl: 'https://www.auswaertiges-amt.de/de/service/laender/peru-node',

  rules: [
    ['Höhe', 'Cusco liegt auf ca. 3.400 m, Puno auf ca. 3.800 m: langsam akklimatisieren, viel trinken, Coca-Tee hilft vielen. Bei starken Beschwerden absteigen und Arzt aufsuchen.'],
    ['Machu Picchu', 'Tickets sind auf festgelegte Zeitfenster und Rundwege begrenzt – lange vorher buchen und Reisepass mitnehmen.'],
    ['Coca', 'Coca-Blätter und -Tee sind in Peru legal, dürfen aber nicht nach Deutschland/EU mitgenommen werden.'],
    ['Fotografieren', 'Menschen nur nach vorheriger Frage fotografieren – für Fotos mit Lamas oder Trachten wird oft ein kleiner Betrag erwartet.'],
    ['Sicherheit', 'Nur offizielle oder App-Taxis nutzen, Wertsachen nicht offen zeigen, besonders in Lima.']
  ],
  sim: [
    ['Lokale SIM', 'Prepaid-SIM von Claro, Movistar, Entel oder Bitel – Reisepass nötig.'],
    ['eSIM', 'Alternativ vorab eSIM (z. B. Airalo) – in den Anden und im Regenwald oft kein Netz.']
  ],
  apps: [
    ['Uber, Cabify & inDrive', 'Fahrdienste in Lima, Cusco und Arequipa.'],
    ['PeruRail & Inca Rail', 'Zugtickets nach Machu Picchu (Aguas Calientes).'],
    ['Google Maps & Translate', 'Offline-Karten herunterladen und Übersetzer parat haben.']
  ],

  places: [
    ['Lima', -12.0464, -77.0428], ['Cusco', -13.5319, -71.9675], ['Machu Picchu', -13.1631, -72.545],
    ['Arequipa', -16.409, -71.5375], ['Puno (Titicacasee)', -15.8402, -70.0219]
  ]
};
