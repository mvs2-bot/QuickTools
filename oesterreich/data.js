/* Quick-Tools · Österreich – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: 'oesterreich',
  name: 'Österreich',
  flag: '🇦🇹',
  tz: 'Europe/Vienna',
  currency: null, // Euro → kein Rechner, Startseite = Phrasen

  glance: {"plug": "C / F", "volt": 230, "adapter": "nein", "drive": "R", "water": "Trinkbar – Quellwasser-Qualität", "tip": "5–10 %", "dial": "+43"},
  taxi: {"local": "Bitte bringen Sie mich zu dieser Adresse.", "phonetic": ""},

  phrases: [
    { title: '🇦🇹 Österreichisch', lang: 'de-AT', items: [
      { de: 'Guten Tag', local: 'Grüß Gott / Servus', phonetic: '' },
      { de: 'Tschüss', local: 'Baba / Servus', phonetic: '' },
      { de: 'Ein halber Liter Bier, bitte', local: 'A Krügerl, bitte', phonetic: '' },
      { de: 'Ein kleines Bier (0,3 l), bitte', local: 'A Seidl, bitte', phonetic: '' },
      { de: 'Die Rechnung, bitte', local: 'Zahlen, bitte!', phonetic: '' },
      { de: 'Tomate', local: 'Paradeiser', phonetic: '' },
      { de: 'Kartoffel', local: 'Erdapfel', phonetic: '' },
      { de: 'Aprikose', local: 'Marille', phonetic: '' },
      { de: 'Sahne', local: 'Schlagobers / Obers', phonetic: '' },
      { de: 'Quark', local: 'Topfen', phonetic: '' },
      { de: 'Brötchen', local: 'Semmel', phonetic: '' },
      { de: 'Januar', local: 'Jänner', phonetic: '' }
    ]}
  ],

  emergency: [
    ['112', 'Europäischer Notruf'],
    ['144', 'Rettung'],
    ['133', 'Polizei'],
    ['122', 'Feuerwehr'],
    ['140', 'Bergrettung'],
    ['141', 'Ärztenotdienst (nachts & Wochenende)']
  ],
  embassy: {
    title: 'Deutsche Botschaft Wien',
    address: ['Metternichgasse 3', '1030 Wien'],
    phone: '+43 1 711 54-0',
    emergency: '+43 1 711 54-0', emergencyNote: '(auch außerhalb der Öffnungszeiten)'
  },
  aaUrl: 'https://www.auswaertiges-amt.de/de/service/laender/oesterreich-node',

  rules: [
    ["Kaffeehaus", "Im Wiener Kaffeehaus wird man am Platz bedient; zum Kaffee gibt es ein Glas Wasser. Lange sitzen bleiben ist ausdrücklich erwünscht."],
    ["Trinkgeld", "Rund 5–10 % sind üblich – beim Bezahlen den aufgerundeten Betrag nennen."],
    ["Berge", "Wetter kann schnell umschlagen. Gut ausgerüstet wandern, Bergrettung (140) ist ohne Versicherung teuer."],
    ["Sonntag", "Geschäfte haben sonntags meist geschlossen."]
  ],
  car: [
    ["Promille", "0,5 ‰; Probeführerschein 0,1 ‰."],
    ["Vignette", "Für Autobahnen und Schnellstraßen ist eine Vignette Pflicht – digital online oder als Klebevignette. Einige Tunnel/Strecken kosten extra Maut."],
    ["Rettungsgasse & Winter", "Bei Stau sofort Rettungsgasse bilden. Von November bis April bei Schnee/Eis Winterreifen Pflicht."]
  ],
  bike: [
    ["Helm", "Helmpflicht für Kinder unter 12."]
  ],
  substances: [
    ["Alkohol", "Bier und Wein ab 16, Spirituosen ab 18."],
    ["Rauchen & Cannabis", "In der Gastronomie herrscht Rauchverbot. Cannabis ist verboten."]
  ],
  sim: [
    ['EU-Roaming', 'Mit deutschem Tarif ohne Aufpreis surfen und telefonieren („Roam like at home“).'],
    ['Grenzregionen', 'Nahe der Schweiz und Liechtenstein bucht sich das Handy manchmal in Nicht-EU-Netze ein – dann wird Roaming teuer.']
  ],
  apps: [
    ['ÖBB Tickets', 'Zugtickets und Sparschiene-Angebote.'],
    ['ASFINAG Unterwegs', 'Digitale Vignette, Verkehrslage und Webcams.'],
    ['Wien Mobil / WienerLinien', 'Öffis und Tickets in Wien.']
  ],

  places: [
    ['Wien', 48.2082, 16.3738], ['Salzburg', 47.8095, 13.055], ['Innsbruck', 47.2692, 11.4041],
    ['Graz', 47.0707, 15.4395], ['Hallstatt', 47.5622, 13.6493]
  ]
};
