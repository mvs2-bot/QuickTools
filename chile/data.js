/* Quick-Tools · Chile – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: 'chile',
  name: 'Chile',
  flag: '🇨🇱',
  tz: 'America/Santiago',
  currency: { code: 'CLP', symbol: '$', name: 'Chilenischer Peso', tableDecimals: 0 },

  glance: {"plug": "C / L", "volt": 220, "adapter": "nein – Eurostecker passt", "drive": "R", "water": "In Städten trinkbar (sehr mineralhaltig)", "tip": "ca. 10 % (propina)", "dial": "+56"},
  taxi: {"local": "Por favor, lléveme a esta dirección.", "phonetic": "por fa-WOR, JE-we-me a ES-ta di-rek-SJON"},

  phrases: [
    { title: '🇨🇱 Spanisch', lang: 'es-CL', items: [
      { de: 'Hallo / Guten Tag', local: 'Hola / Buenos días', phonetic: 'O-la / BWE-nos DI-as' },
      { de: 'Danke schön', local: 'Muchas gracias', phonetic: 'MU-tschas GRA-sjas' },
      { de: 'Entschuldigung', local: 'Disculpe', phonetic: 'dis-KUL-pe' },
      { de: 'Wie viel kostet das?', local: '¿Cuánto cuesta?', phonetic: 'KWAN-to KWES-ta' },
      { de: 'Die Rechnung, bitte', local: 'La cuenta, por favor', phonetic: 'la KWEN-ta, por fa-WOR' },
      { de: 'Sprechen Sie Englisch?', local: '¿Habla inglés?', phonetic: 'A-bla in-GLES' },
      { de: 'Wo ist das Krankenhaus?', local: '¿Dónde está el hospital?', phonetic: 'DON-de es-TA el os-pi-TAL' },
      { de: 'Ein großes Bier vom Fass, bitte', local: 'Un schop grande, por favor', phonetic: 'un schop GRAN-de, por fa-WOR' },
      { de: 'Ich bin Vegetarier/in', local: 'Soy vegetariano / vegetariana', phonetic: 'soi we-che-ta-RJA-no / -na' },
      { de: 'Ich esse kein Fleisch und Fisch, aber Eier schon', local: 'No como carne ni pescado, pero sí huevos', phonetic: 'no KO-mo KAR-ne ni pes-KA-do, PE-ro si WE-wos' },
      { de: 'Das Essen war sehr lecker', local: 'La comida estaba muy rica', phonetic: 'la ko-MI-da es-TA-ba mui RI-ka' },
      { de: 'Hilfe! Es ist ein Notfall!', local: '¡Ayuda! ¡Es una emergencia!', phonetic: 'a-JU-da! es U-na e-mer-CHEN-sja' }
    ]}
  ],

  emergency: [
    ['131', 'Rettungsdienst (SAMU)'],
    ['133', 'Polizei (Carabineros)'],
    ['132', 'Feuerwehr (Bomberos)']
  ],
  embassy: {
    title: 'Deutsche Botschaft Santiago de Chile',
    address: ['Las Hualtatas 5677, Vitacura', 'Santiago de Chile'],
    phone: '+56 2 2463 2500'
  },
  aaUrl: 'https://www.auswaertiges-amt.de/de/service/laender/chile-node',

  rules: [
    ['Erdbeben', 'Chile ist sehr erdbebenaktiv: Fluchtwege im Hotel ansehen, an der Küste Tsunami-Schilder („Vía de evacuación“) beachten.'],
    ['Sonne', 'In Patagonien und in der Atacama ist die UV-Strahlung extrem – Sonnenschutz auch bei Wolken.'],
    ['Patagonien', 'Wetter wechselt sehr schnell, starker Wind. Feuer machen in Nationalparks ist streng verboten (große Brände in der Vergangenheit).'],
    ['Einfuhr', 'Strenge Kontrolle bei der Einreise: Obst, Wurst, Käse, Honig nicht mitbringen bzw. unbedingt deklarieren – hohe Strafen.'],
    ['Trinkgeld', '10 % „propina“ werden in Restaurants meist auf der Rechnung vorgeschlagen – freiwillig, aber üblich.']
  ],
  sim: [
    ['Lokale SIM', 'Prepaid-SIM von Entel, Movistar, Claro oder WOM – Reisepass nötig.'],
    ['eSIM', 'Alternativ vorab eSIM (z. B. Airalo) – in Patagonien und der Atacama oft kein Netz.']
  ],
  apps: [
    ['Uber, Cabify & DiDi', 'Fahrdienste in Santiago und Valparaíso.'],
    ['Turbus / Recorrido', 'Fernbustickets – das wichtigste Verkehrsmittel im Land.'],
    ['Google Maps & Translate', 'Offline-Karten herunterladen und Übersetzer parat haben.']
  ],

  places: [
    ['Santiago', -33.4489, -70.6693], ['Valparaíso', -33.0472, -71.6127], ['San Pedro de Atacama', -22.9087, -68.1997],
    ['Puerto Varas', -41.3195, -72.9854], ['Puerto Natales', -51.7236, -72.4875, 'America/Punta_Arenas']
  ]
};
