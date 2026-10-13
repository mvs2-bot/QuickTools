/* Quick-Tools · Schweden – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: 'schweden',
  name: 'Schweden',
  flag: '🇸🇪',
  tz: 'Europe/Stockholm',
  currency: { code: 'SEK', symbol: 'kr', name: 'Schwedische Krone' },

  phrases: [
    { title: '🇸🇪 Schwedisch', lang: 'sv-SE', items: [
      { de: 'Hallo', local: 'Hej', phonetic: 'hej' },
      { de: 'Danke schön', local: 'Tack så mycket', phonetic: 'tack so MÜ-ke' },
      { de: 'Entschuldigung', local: 'Ursäkta', phonetic: 'UR-schek-ta' },
      { de: 'Wie viel kostet das?', local: 'Vad kostar det?', phonetic: 'wa KOS-tar de' },
      { de: 'Die Rechnung, bitte', local: 'Kan jag få notan?', phonetic: 'kan ja fo NU-tan' },
      { de: 'Sprechen Sie Englisch?', local: 'Pratar du engelska?', phonetic: 'PRA-tar dü ENG-el-ska' },
      { de: 'Wo ist das Krankenhaus?', local: 'Var ligger sjukhuset?', phonetic: 'war LIG-ger SCHÜK-hü-set' },
      { de: 'Ein großes Bier bitte', local: 'En stor öl, tack', phonetic: 'en stur öl, tack' },
      { de: 'Ich bin Vegetarier/in', local: 'Jag är vegetarian', phonetic: 'ja är we-ge-ta-ri-AAN' },
      { de: 'Ich esse kein Fleisch und Fisch, aber Eier schon', local: 'Jag äter inte kött eller fisk, men ägg går bra', phonetic: 'ja Ä-ter IN-te tschött EL-ler fisk, men egg gor bra' },
      { de: 'Das Essen war sehr lecker', local: 'Maten var jättegod!', phonetic: 'MAA-ten war JET-te-gud' },
      { de: 'Hilfe! Es ist ein Notfall!', local: 'Hjälp! Det är en nödsituation!', phonetic: 'jelp! de är en NÖD-si-tu-a-schun' }
    ]}
  ],

  emergency: [
    ['112', 'Notruf (Polizei, Rettung, Feuerwehr)'],
    ['114 14', 'Polizei (nicht dringend)'],
    ['1177', 'Gesundheitsberatung (nicht dringend)']
  ],
  embassy: {
    title: 'Deutsche Botschaft Stockholm',
    address: ['Skarpögatan 9', '115 27 Stockholm'],
    phone: '+46 8 670 15 00'
  },
  aaUrl: 'https://www.auswaertiges-amt.de/de/service/laender/schweden-node',

  rules: [
    ['Bargeldlos', 'Schweden ist fast bargeldlos – Karte oder Handy reicht, viele Geschäfte nehmen gar kein Bargeld.'],
    ['Jedermannsrecht', 'Wandern und Zelten in der Natur ist meist erlaubt – „nicht stören, nichts zerstören“. Kein Feuer bei Brandgefahr.'],
    ['Alkohol', 'Wein und Schnaps gibt es nur im staatlichen „Systembolaget“ (Mindestalter 20, eingeschränkte Öffnungszeiten).'],
    ['Autofahren', 'Licht auch tagsüber Pflicht. Achtung vor Elchen und Rentieren, besonders in der Dämmerung.'],
    ['Anstellen', 'In Apotheken, Banken u. ä. vorher eine Wartenummer ziehen.']
  ],
  sim: [
    ['EU-Roaming', 'Mit deutschem Tarif ohne Aufpreis surfen und telefonieren („Roam like at home“).'],
    ['Alternative', 'eSIM (z. B. Airalo) oder Prepaid-SIM von Telia, Tele2 oder Comviq.']
  ],
  apps: [
    ['SJ', 'Zugtickets in ganz Schweden buchen.'],
    ['SL (Stockholm) & Västtrafik', 'Nahverkehrstickets in Stockholm bzw. Göteborg.'],
    ['Google Maps & Translate', 'Offline-Karten herunterladen und Übersetzer parat haben.']
  ],

  places: [
    ['Stockholm', 59.3293, 18.0686], ['Göteborg', 57.7089, 11.9746], ['Malmö', 55.605, 13.0038],
    ['Kiruna', 67.8558, 20.2253], ['Visby (Gotland)', 57.6348, 18.2948]
  ]
};
