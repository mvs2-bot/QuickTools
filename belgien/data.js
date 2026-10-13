/* Quick-Tools · Belgien – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: 'belgien',
  name: 'Belgien',
  flag: '🇧🇪',
  tz: 'Europe/Brussels',
  currency: null, // Euro → kein Rechner, Startseite = Phrasen

  glance: {"plug": "C / E", "volt": 230, "adapter": "nein", "drive": "R", "water": "Trinkbar", "tip": "Aufrunden (Service inklusive)", "dial": "+32"},
  taxi: {"local": "Wilt u mij naar dit adres brengen, alstublieft?", "phonetic": "wilt ü mei naar dit a-DRES BREN-gen"},

  phrases: [
    { title: '🇧🇪 Niederländisch (Flandern)', lang: 'nl-BE', items: [
      { de: 'Guten Tag', local: 'Goedendag', phonetic: 'CHU-de-dach' },
      { de: 'Danke schön', local: 'Dank u wel', phonetic: 'dank ü WEL' },
      { de: 'Wie viel kostet das?', local: 'Hoeveel kost dit?', phonetic: 'hu-WEEL kost dit' },
      { de: 'Die Rechnung, bitte', local: 'De rekening, alstublieft', phonetic: 'de RE-ke-ning, als-tü-BLIEFT' },
      { de: 'Wo ist das Krankenhaus?', local: 'Waar is het ziekenhuis?', phonetic: 'waar is et SIE-ken-höis' },
      { de: 'Ein Bier vom Fass, bitte', local: 'Een pintje, alstublieft', phonetic: 'en PIN-tje, als-tü-BLIEFT' },
      { de: 'Ich bin Vegetarier/in', local: 'Ik ben vegetariër', phonetic: 'ik ben we-che-TA-ri-er' },
      { de: 'Das Essen war sehr lecker', local: 'Het eten was heerlijk!', phonetic: 'et E-ten was HEER-lek' },
      { de: 'Hilfe!', local: 'Help!', phonetic: 'help' }
    ]},
    { title: '🇧🇪 Französisch (Brüssel & Wallonie)', lang: 'fr-BE', items: [
      { de: 'Guten Tag', local: 'Bonjour', phonetic: 'bon-SCHUR' },
      { de: 'Danke schön', local: 'Merci beaucoup', phonetic: 'mär-SI bo-KU' },
      { de: 'Wie viel kostet das?', local: "C'est combien ?", phonetic: 'sä kom-BJÄ' },
      { de: 'Die Rechnung, bitte', local: "L'addition, s'il vous plaît", phonetic: 'la-di-SJO, sil wu PLÄ' },
      { de: 'Wo ist das Krankenhaus?', local: "Où est l'hôpital ?", phonetic: 'u ä lo-pi-TAL' },
      { de: 'Ich bin Vegetarier/in', local: 'Je suis végétarien / végétarienne', phonetic: 'sche süi we-sche-ta-RJÄ / -RJÄN' },
      { de: 'Das Essen war sehr lecker', local: "C'était délicieux !", phonetic: 'se-TÄ de-li-SJÖ' },
      { de: 'Hilfe!', local: 'Au secours !', phonetic: 'o se-KUR' }
    ]}
  ],

  emergency: [
    ['112', 'Notruf: Rettung & Feuerwehr'],
    ['101', 'Polizei'],
    ['1733', 'Ärztlicher Bereitschaftsdienst (nachts & Wochenende)']
  ],
  embassy: {
    title: 'Deutsche Botschaft Brüssel',
    address: ['Rue Jacques de Lalaing 8-14', '1040 Brüssel'],
    phone: '+32 2 787 18 00',
    emergency: '+32 475 57 77 62', emergencyNote: '(werktags nach Dienstschluss bis 24 Uhr, Wochenende 8–24 Uhr)'
  },
  aaUrl: 'https://www.auswaertiges-amt.de/de/service/laender/belgien-node',

  rules: [
    ['Sprache', 'In Flandern Niederländisch, in der Wallonie Französisch – im Zweifel lieber Englisch als die „falsche“ Landessprache. Im Osten wird auch Deutsch gesprochen.'],
    ['Bier', 'Viele belgische Biere sind deutlich stärker (8–12 %) und kommen im eigenen Glas – langsam genießen.'],
    ['Trinkgeld', 'Service ist im Preis enthalten, Aufrunden ist üblich.'],
    ['Umweltzonen', 'Brüssel, Antwerpen und Gent haben Umweltzonen (LEZ) – ausländische Autos müssen sich vorab online registrieren.'],
    ['Ausweis', 'Personalausweis oder Reisepass immer dabeihaben.']
  ],
  sim: [
    ['EU-Roaming', 'Mit deutschem Tarif ohne Aufpreis surfen und telefonieren („Roam like at home“).'],
    ['Alternative', 'eSIM (z. B. Airalo) oder Prepaid-SIM von Proximus, Orange oder Base.']
  ],
  apps: [
    ['SNCB / NMBS', 'Zugtickets – Belgien ist klein, fast alles ist gut per Zug erreichbar.'],
    ['De Lijn & STIB-MIVB', 'Busse und Trams in Flandern bzw. Brüssel.'],
    ['Google Maps & Translate', 'Offline-Karten herunterladen und Übersetzer parat haben.']
  ],

  places: [
    ['Brüssel', 50.8503, 4.3517], ['Brügge', 51.2093, 3.2247], ['Gent', 51.0543, 3.7174],
    ['Antwerpen', 51.2194, 4.4025], ['Lüttich', 50.6326, 5.5797]
  ]
};
