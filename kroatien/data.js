/* Quick-Tools · Kroatien – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: 'kroatien',
  name: 'Kroatien',
  flag: '🇭🇷',
  tz: 'Europe/Zagreb',
  currency: null, // Euro (seit 2023) → kein Rechner, Startseite = Phrasen

  glance: {"plug": "C / F", "volt": 230, "adapter": "nein", "drive": "R", "water": "Trinkbar", "tip": "ca. 10 %", "dial": "+385"},
  taxi: {"local": "Molim vas, odvezite me na ovu adresu.", "phonetic": "MO-lim was, OD-we-zi-te me na O-wu A-dre-su"},

  phrases: [
    { title: '🇭🇷 Kroatisch', lang: 'hr-HR', items: [
      { de: 'Guten Tag', local: 'Dobar dan', phonetic: 'DO-bar dan' },
      { de: 'Danke schön', local: 'Hvala lijepa', phonetic: 'HWA-la LJE-pa' },
      { de: 'Entschuldigung', local: 'Oprostite', phonetic: 'o-PROS-ti-te' },
      { de: 'Wie viel kostet das?', local: 'Koliko košta?', phonetic: 'KO-li-ko KOSCH-ta' },
      { de: 'Die Rechnung, bitte', local: 'Račun, molim', phonetic: 'RA-tschun, MO-lim' },
      { de: 'Sprechen Sie Englisch?', local: 'Govorite li engleski?', phonetic: 'GO-wo-ri-te li EN-gles-ki' },
      { de: 'Wo ist das Krankenhaus?', local: 'Gdje je bolnica?', phonetic: 'gdje je BOL-ni-tsa' },
      { de: 'Ein großes Bier bitte', local: 'Jedno veliko pivo, molim', phonetic: 'JED-no WE-li-ko PI-wo, MO-lim' },
      { de: 'Ich bin Vegetarier/in', local: 'Ja sam vegetarijanac / vegetarijanka', phonetic: 'ja sam we-ge-ta-ri-JA-nats / -JAN-ka' },
      { de: 'Ich esse kein Fleisch und Fisch, aber Eier schon', local: 'Ne jedem meso ni ribu, ali jedem jaja', phonetic: 'ne JE-dem ME-so ni RI-bu, A-li JE-dem JA-ja' },
      { de: 'Das Essen war sehr lecker', local: 'Hrana je bila jako ukusna', phonetic: 'HRA-na je BI-la JA-ko U-kus-na' },
      { de: 'Hilfe! Es ist ein Notfall!', local: 'Upomoć! Hitno je!', phonetic: 'U-po-motsch! HIT-no je' }
    ]}
  ],

  emergency: [
    ['112', 'Europäischer Notruf (alle Dienste)'],
    ['194', 'Rettungsdienst'],
    ['192', 'Polizei'],
    ['193', 'Feuerwehr']
  ],
  embassy: {
    title: 'Deutsche Botschaft Zagreb',
    address: ['Ulica grada Vukovara 64', '10000 Zagreb'],
    phone: '+385 1 6300 100'
  },
  aaUrl: 'https://www.auswaertiges-amt.de/de/service/laender/kroatien-node',

  rules: [
    ['Altstädte', 'In Dubrovnik, Split, Hvar u. a. ist Badekleidung oder nackter Oberkörper in der Altstadt verboten – Bußgelder möglich.'],
    ['Kirchen', 'Schultern und Knie bedecken.'],
    ['Waldbrandgefahr', 'Im Sommer kein offenes Feuer, keine Zigaretten wegwerfen – sehr hohe Brandgefahr und hohe Strafen.'],
    ['Autofahren', 'Licht ist von Ende Oktober bis Ende März auch tagsüber Pflicht. Maut auf den Autobahnen.'],
    ['Trinkgeld', 'Rund 10 % in Restaurants sind üblich.']
  ],
  sim: [
    ['EU-Roaming', 'Mit deutschem Tarif ohne Aufpreis surfen und telefonieren („Roam like at home“).'],
    ['Achtung auf Fähren/Küste', 'Nahe Bosnien und Montenegro bucht sich das Handy manchmal in Nicht-EU-Netze ein – dann ist Roaming teuer. Netz ggf. manuell wählen.']
  ],
  apps: [
    ['Jadrolinija', 'Fährverbindungen zu den Inseln.'],
    ['Uber & Bolt', 'Fahrdienste in Zagreb, Split und Dubrovnik.'],
    ['Google Maps & Translate', 'Offline-Karten herunterladen und Übersetzer parat haben.']
  ],

  places: [
    ['Zagreb', 45.815, 15.9819], ['Split', 43.5081, 16.4402], ['Dubrovnik', 42.6507, 18.0944],
    ['Zadar', 44.1194, 15.2314], ['Pula', 44.8666, 13.8496]
  ]
};
