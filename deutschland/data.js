/* Quick-Tools · Deutschland – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: 'deutschland',
  name: 'Deutschland',
  flag: '🇩🇪',
  tz: 'Europe/Berlin',
  currency: null, // Euro → kein Rechner, Startseite = Phrasen

  glance: {"plug": "C / F", "volt": 230, "adapter": "nein", "drive": "R", "water": "Trinkbar", "tip": "5–10 %", "dial": "+49"},
  taxi: {"local": "Bitte bringen Sie mich zu dieser Adresse.", "phonetic": ""},

  phrases: [
    { title: '🥨 Bairisch', lang: 'de-DE', items: [
      { de: 'Guten Tag', local: 'Grüß Gott / Servus', phonetic: '' },
      { de: 'Tschüss', local: 'Pfiat di / Pfiat eich', phonetic: 'PFI-at di / PFI-at eich' },
      { de: 'Ein Liter Bier, bitte', local: 'A Mass, bittschön', phonetic: '' },
      { de: 'Ein halber Liter Bier, bitte', local: 'A Hoibe, bittschön', phonetic: 'a HOI-be' },
      { de: 'Brötchen', local: 'Semmel', phonetic: '' },
      { de: 'Kleine Mahlzeit / Vesper', local: 'Brotzeit', phonetic: '' },
      { de: 'Prost!', local: 'Oans, zwoa, gsuffa!', phonetic: 'oans, zwoa, GSUF-fa' },
      { de: 'Eichhörnchenschwanz (Zungenbrecher)', local: 'Oachkatzlschwoaf', phonetic: 'OACH-katzl-schwoaf' }
    ]},
    { title: '⚓ Norddeutsch', lang: 'de-DE', items: [
      { de: 'Hallo (zu jeder Tageszeit)', local: 'Moin / Moin moin', phonetic: '' },
      { de: 'Tschüss', local: 'Tschüssing / Tschüs ok', phonetic: '' },
      { de: 'Sich unterhalten', local: 'Schnacken', phonetic: '' },
      { de: 'Brötchen (Hamburg)', local: 'Rundstück', phonetic: '' }
    ]},
    { title: '🐻 Berlinerisch', lang: 'de-DE', items: [
      { de: 'Brötchen', local: 'Schrippe', phonetic: '' },
      { de: 'Berliner (Krapfen)', local: 'Pfannkuchen', phonetic: '' },
      { de: 'Was ist los?', local: "Wat is'n los?", phonetic: '' }
    ]}
  ],

  emergency: [
    ['112', 'Notruf: Rettungsdienst & Feuerwehr'],
    ['110', 'Polizei'],
    ['116 117', 'Ärztlicher Bereitschaftsdienst (nicht lebensbedrohlich)'],
    ['089 19240', 'Giftnotruf (München, 24 h)']
  ],
  embassy: null,
  aaUrl: 'https://www.116117.de',
  aaLabel: '116117.de – Arzt & Bereitschaftspraxis finden',
  rulesTitle: '💡 Gut zu wissen',
  rulesNote: 'Praktische Hinweise – z. B. für Besuch aus dem Ausland.',

  rules: [
    ["Sonntag", "Geschäfte haben sonntags und an Feiertagen fast überall zu – Ausnahmen sind Bahnhöfe, Flughäfen und Tankstellen."],
    ["Pfand", "Auf die meisten Flaschen und Dosen gibt es 8–25 Cent Pfand – im Supermarkt am Automaten zurückgeben."],
    ["Bargeld", "Karte geht fast überall, in kleinen Bäckereien, Kneipen und auf Märkten aber manchmal nur Bargeld."],
    ["Feiertage", "Viele Feiertage sind je Bundesland unterschiedlich – vorher kurz prüfen."],
    ["Biergarten", "In klassischen bayerischen Biergärten darf man seine eigene Brotzeit mitbringen – Getränke aber dort kaufen."]
  ],
  car: [
    ["Promille", "0,5 ‰; in der Probezeit und unter 21 Jahren 0,0 ‰."],
    ["Autobahn", "Teils ohne Tempolimit, Richtgeschwindigkeit 130 km/h. Rettungsgasse bilden, rechts überholen ist verboten."],
    ["Umweltzonen", "In vielen Städten nur mit grüner Umweltplakette."]
  ],
  bike: [
    ["Radwege", "Ist der Radweg mit blauem Schild markiert, muss er benutzt werden. Keine Helmpflicht, Handy am Lenker verboten."],
    ["Alkohol", "Auch auf dem Rad gibt es Promillegrenzen – ab 1,6 ‰ (bei Auffälligkeit schon früher) drohen Strafen und MPU."]
  ],
  substances: [
    ["Alkohol", "Bier und Wein ab 16, Spirituosen ab 18. Trinken in der Öffentlichkeit ist meist erlaubt."],
    ["Cannabis", "Ab 18 legal: bis 25 g dabei haben. Kein Konsum in Sichtweite von Schulen/Spielplätzen und tagsüber nicht in Fußgängerzonen. Am Steuer gilt ein THC-Grenzwert."],
    ["Rauchen", "In Restaurants und Kneipen meist verboten (je nach Bundesland Raucherräume)."]
  ],
  sim: [
    ['Eigene SIM', 'Mit dem eigenen deutschen Tarif ist alles wie gewohnt.'],
    ['Besuch aus dem Ausland', 'EU-Gäste surfen per Roaming ohne Aufpreis, sonst Prepaid-SIM im Supermarkt oder Drogeriemarkt (Ausweis-Prüfung nötig).']
  ],
  apps: [
    ['DB Navigator', 'Zugverbindungen, Tickets und das Deutschlandticket.'],
    ['NINA', 'Offizielle Warn-App für Unwetter und Gefahrenlagen.'],
    ['Too Good To Go', 'Übriggebliebenes Essen von Bäckereien und Restaurants günstig retten.']
  ],

  places: [
    ['Berlin', 52.52, 13.405], ['München', 48.1351, 11.582], ['Hamburg', 53.5511, 9.9937],
    ['Köln', 50.9375, 6.9603], ['Dresden', 51.0504, 13.7373]
  ]
};
