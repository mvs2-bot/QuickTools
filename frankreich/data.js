/* Quick-Tools · Frankreich – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: 'frankreich',
  name: 'Frankreich',
  flag: '🇫🇷',
  tz: 'Europe/Paris',
  currency: null, // Euro → kein Rechner, Startseite = Phrasen

  glance: {"plug": "C / E", "volt": 230, "adapter": "nein", "drive": "R", "water": "Trinkbar", "tip": "Aufrunden (Service inklusive)", "dial": "+33"},
  taxi: {"local": "Pouvez-vous m'emmener à cette adresse, s'il vous plaît ?", "phonetic": "pu-we-WU mam-NE a set a-DRES, sil wu PLÄ"},

  phrases: [
    { title: '🇫🇷 Französisch', lang: 'fr-FR', items: [
      { de: 'Guten Tag', local: 'Bonjour', phonetic: 'bon-SCHUR' },
      { de: 'Danke schön', local: 'Merci beaucoup', phonetic: 'mär-SI bo-KU' },
      { de: 'Entschuldigung', local: 'Excusez-moi', phonetic: 'ex-kü-se-MUA' },
      { de: 'Wie viel kostet das?', local: "C'est combien ?", phonetic: 'sä kom-BJÄ' },
      { de: 'Die Rechnung, bitte', local: "L'addition, s'il vous plaît", phonetic: 'la-di-SJO, sil wu PLÄ' },
      { de: 'Sprechen Sie Englisch?', local: 'Vous parlez anglais ?', phonetic: 'wu par-LE ang-GLÄ' },
      { de: 'Wo ist das Krankenhaus?', local: "Où est l'hôpital ?", phonetic: 'u ä lo-pi-TAL' },
      { de: 'Ein großes Bier bitte', local: "Une grande bière, s'il vous plaît", phonetic: 'ün grand BJÄR, sil wu PLÄ' },
      { de: 'Ich bin Vegetarier/in', local: 'Je suis végétarien / végétarienne', phonetic: 'sche süi we-sche-ta-RJÄ / -RJÄN' },
      { de: 'Ich esse kein Fleisch und Fisch, aber Eier schon', local: 'Je ne mange ni viande ni poisson, mais je mange des œufs', phonetic: 'sche ne mansch ni WJAND ni pua-SO, mä sche mansch de SÖ' },
      { de: 'Das Essen war sehr lecker', local: "C'était délicieux !", phonetic: 'se-TÄ de-li-SJÖ' },
      { de: 'Hilfe! Es ist ein Notfall!', local: "Au secours ! C'est une urgence !", phonetic: 'o se-KUR! sä-tün ür-SCHANS' }
    ]}
  ],

  emergency: [
    ['112', 'Europäischer Notruf (alle Dienste)'],
    ['15', 'Rettungsdienst (SAMU)'],
    ['17', 'Polizei'],
    ['18', 'Feuerwehr']
  ],
  embassy: {
    title: 'Deutsche Botschaft Paris',
    address: ['13/15 Avenue Franklin D. Roosevelt', '75008 Paris'],
    phone: '+33 1 53 83 45 00',
    emergency: '+33 6 11 76 22 55', emergencyNote: '(Bereitschaftsdienst, nur Notfälle)'
  },
  aaUrl: 'https://www.auswaertiges-amt.de/de/service/laender/frankreich-node',

  rules: [
    ["Begrüßung", "Beim Betreten von Geschäften, Bäckereien oder Restaurants immer „Bonjour“ sagen – das gilt als selbstverständlich."],
    ["Restaurant", "Auf den Platz warten statt sich selbst zu setzen. Leitungswasser („une carafe d’eau“) ist kostenlos."],
    ["Trinkgeld", "Service ist im Preis enthalten; Aufrunden oder ein paar Euro bei gutem Service sind üblich."],
    ["Ausweis", "Personalausweis oder Reisepass immer dabeihaben."]
  ],
  car: [
    ["Promille", "0,5 ‰; Fahranfänger (Probezeit) 0,2 ‰."],
    ["Crit’Air & Maut", "In vielen Städten (Paris, Lyon, Straßburg …) ist die Umweltplakette „Crit’Air“ Pflicht. Maut auf den meisten Autobahnen."],
    ["Tempo", "Landstraßen oft nur 80 km/h. Kopfhörer und Headsets am Steuer sind verboten."]
  ],
  bike: [
    ["Helm & Weste", "Helmpflicht für Kinder unter 12. Außerorts nachts Warnweste tragen, keine Kopfhörer."]
  ],
  substances: [
    ["Rauchen", "Seit Juli 2025 verboten an Stränden, in Parks, an Bushaltestellen und vor Schulen – bis 135 € Strafe."],
    ["Alkohol", "Ab 18 Jahren."],
    ["Cannabis", "Verboten – Besitz wird mit 200 € Pauschalstrafe oder mehr geahndet."]
  ],
  sim: [
    ['EU-Roaming', 'Mit deutschem Tarif ohne Aufpreis surfen und telefonieren („Roam like at home“).'],
    ['Alternative', 'eSIM (z. B. Airalo) oder Prepaid-SIM von Orange, SFR, Bouygues oder Free.']
  ],
  apps: [
    ['SNCF Connect', 'Zugtickets (TGV, TER) buchen.'],
    ['Uber, Bolt & G7', 'Taxis und Fahrdienste in den Städten.'],
    ['Google Maps & Translate', 'Offline-Karten herunterladen und Übersetzer parat haben.']
  ],

  places: [
    ['Paris', 48.8566, 2.3522], ['Lyon', 45.764, 4.8357], ['Marseille', 43.2965, 5.3698],
    ['Nizza', 43.7102, 7.262], ['Bordeaux', 44.8378, -0.5792]
  ]
};
