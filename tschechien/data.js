/* Quick-Tools · Tschechien – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: 'tschechien',
  name: 'Tschechien',
  flag: '🇨🇿',
  tz: 'Europe/Prague',
  currency: { code: 'CZK', symbol: 'Kč', name: 'Tschechische Krone', tableDecimals: 0 },

  glance: {"plug": "C / E", "volt": 230, "adapter": "nein", "drive": "R", "water": "Trinkbar", "tip": "ca. 10 %", "dial": "+420"},
  taxi: {"local": "Odvezte mě prosím na tuto adresu.", "phonetic": "OD-wes-te mnje PRO-siim na TU-to A-dre-su"},

  phrases: [
    { title: '🇨🇿 Tschechisch', lang: 'cs-CZ', items: [
      { de: 'Guten Tag', local: 'Dobrý den', phonetic: 'DOB-rii den' },
      { de: 'Danke schön', local: 'Děkuji mockrát', phonetic: 'DJE-ku-ji MOZ-kraat' },
      { de: 'Entschuldigung', local: 'Promiňte', phonetic: 'PRO-min-te' },
      { de: 'Wie viel kostet das?', local: 'Kolik to stojí?', phonetic: 'KO-lik to STO-jii' },
      { de: 'Die Rechnung, bitte', local: 'Zaplatím, prosím', phonetic: 'ZA-pla-tiim, PRO-siim' },
      { de: 'Sprechen Sie Englisch?', local: 'Mluvíte anglicky?', phonetic: 'MLU-wii-te ANG-litz-ki' },
      { de: 'Wo ist das Krankenhaus?', local: 'Kde je nemocnice?', phonetic: 'gde je NE-mots-ni-tse' },
      { de: 'Ein großes Bier bitte', local: 'Jedno velké pivo, prosím', phonetic: 'JED-no WEL-kee PI-wo, PRO-siim' },
      { de: 'Ich bin Vegetarier/in', local: 'Jsem vegetarián / vegetariánka', phonetic: 'sem we-ge-ta-ri-AAN / -AAN-ka' },
      { de: 'Ich esse kein Fleisch und Fisch, aber Eier schon', local: 'Nejím maso ani ryby, ale vejce ano', phonetic: 'NE-jiim MA-so A-ni RI-bi, A-le WEJ-tse A-no' },
      { de: 'Das Essen war sehr lecker', local: 'Jídlo bylo moc dobré', phonetic: 'JIID-lo BI-lo mots DOB-ree' },
      { de: 'Hilfe! Es ist ein Notfall!', local: 'Pomoc! Je to naléhavé!', phonetic: 'PO-mots! je to NA-lee-ha-wee' }
    ]}
  ],

  emergency: [
    ['112', 'Europäischer Notruf (alle Dienste)'],
    ['155', 'Rettungsdienst'],
    ['158', 'Polizei'],
    ['150', 'Feuerwehr']
  ],
  embassy: {
    title: 'Deutsche Botschaft Prag',
    address: ['Vlašská 19', '118 00 Praha 1'],
    phone: '+420 257 113 111',
    emergency: '+420 257 113 111', emergencyNote: '(auch außerhalb der Öffnungszeiten)'
  },
  aaUrl: 'https://www.auswaertiges-amt.de/de/service/laender/tschechischerepublik-node',

  rules: [
    ["Geld wechseln", "Wechselstuben in Touristengegenden meiden (versteckte Gebühren). Am besten mit Karte zahlen oder am Bankautomaten Kronen abheben – dabei „ohne Umrechnung“ wählen."],
    ["Karte & Euro", "Kartenzahlung ist fast überall möglich. Euro werden manchmal angenommen, aber zu schlechtem Kurs."],
    ["Restaurant", "In Kneipen wird oft automatisch nachgeschenkt – Bierdeckel auf das Glas legen heißt „genug“."],
    ["Trinkgeld", "Rund 10 % sind üblich – beim Bezahlen den Betrag nennen, nicht auf dem Tisch liegen lassen."]
  ],
  car: [
    ["Promille", "0,0 ‰ – absolutes Alkoholverbot am Steuer."],
    ["Vignette & Licht", "Für Autobahnen ist eine elektronische Vignette (edalnice.cz) Pflicht. Licht auch tagsüber."]
  ],
  bike: [
    ["Radfahren", "Helmpflicht bis 18 Jahre. Auch auf dem Rad gilt 0,0 ‰."]
  ],
  substances: [
    ["Alkohol", "Ab 18. In Prag ist Trinken auf vielen öffentlichen Plätzen verboten."],
    ["Cannabis", "Seit 2026 ab 21 erlaubt: bis 25 g dabei, bis 100 g zu Hause. Verkauf bleibt verboten."]
  ],
  sim: [
    ['EU-Roaming', 'Mit deutschem Tarif ohne Aufpreis surfen und telefonieren („Roam like at home“).'],
    ['Alternative', 'eSIM (z. B. Airalo) oder Prepaid-SIM von O2, T-Mobile oder Vodafone.']
  ],
  apps: [
    ['PID Lítačka', 'Tickets für Bus, Tram und Metro in Prag.'],
    ['IDOS', 'Fahrplanauskunft für Bahn und Bus im ganzen Land.'],
    ['Bolt & Uber', 'Günstige Fahrdienste in Prag und Brünn.']
  ],

  places: [
    ['Prag', 50.0755, 14.4378], ['Brünn', 49.1951, 16.6068], ['Český Krumlov', 48.8127, 14.3175],
    ['Karlsbad', 50.231, 12.872], ['Olmütz', 49.5938, 17.2509]
  ]
};
