/* Quick-Tools · Portugal – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: 'portugal',
  name: 'Portugal',
  flag: '🇵🇹',
  tz: 'Europe/Lisbon',
  currency: null, // Euro → kein Rechner, Startseite = Phrasen

  glance: {"plug": "C / F", "volt": 230, "adapter": "nein", "drive": "R", "water": "Trinkbar", "tip": "5–10 %", "dial": "+351"},
  taxi: {"local": "Leve-me a esta morada, por favor.", "phonetic": "LE-we-me a ESCH-ta mu-RA-da, pur fa-WOR"},

  phrases: [
    { title: '🇵🇹 Portugiesisch', lang: 'pt-PT', items: [
      { de: 'Hallo / Guten Tag', local: 'Olá / Bom dia', phonetic: 'o-LA / bõ DI-a' },
      { de: 'Danke schön', local: 'Muito obrigado / obrigada', phonetic: 'MUIN-tu o-bri-GA-du / -da' },
      { de: 'Entschuldigung', local: 'Desculpe', phonetic: 'desch-KUL-pe' },
      { de: 'Wie viel kostet das?', local: 'Quanto custa?', phonetic: 'KWAN-tu KUSCH-ta' },
      { de: 'Die Rechnung, bitte', local: 'A conta, por favor', phonetic: 'a KON-ta, pur fa-WOR' },
      { de: 'Sprechen Sie Englisch?', local: 'Fala inglês?', phonetic: 'FA-la in-GLESCH' },
      { de: 'Wo ist das Krankenhaus?', local: 'Onde fica o hospital?', phonetic: 'ON-de FI-ka u osch-pi-TAL' },
      { de: 'Ein großes Bier bitte', local: 'Uma cerveja grande, por favor', phonetic: 'U-ma ser-WE-scha GRAN-de, pur fa-WOR' },
      { de: 'Ich bin Vegetarier/in', local: 'Sou vegetariano / vegetariana', phonetic: 'so we-sche-ta-RJA-nu / -na' },
      { de: 'Ich esse kein Fleisch und Fisch, aber Eier schon', local: 'Não como carne nem peixe, mas como ovos', phonetic: 'naũ KO-mu KAR-ne näĩ PÄI-sche, masch KO-mu O-wusch' },
      { de: 'Das Essen war sehr lecker', local: 'A comida estava deliciosa!', phonetic: 'a ku-MI-da esch-TA-wa de-li-SJO-sa' },
      { de: 'Hilfe! Es ist ein Notfall!', local: 'Socorro! É uma emergência!', phonetic: 'su-KO-rru! ä U-ma i-mer-SCHEN-sja' }
    ]}
  ],

  emergency: [
    ['112', 'Europäischer Notruf (alle Dienste)'],
    ['808 24 24 24', 'SNS 24 – Gesundheitstelefon (nicht dringend)']
  ],
  embassy: {
    title: 'Deutsche Botschaft Lissabon',
    address: ['Campo dos Mártires da Pátria 38', '1169-043 Lissabon'],
    phone: '+351 21 881 02 10',
    emergency: '+351 96 580 80 92', emergencyNote: '(Bereitschaftsdienst, keine Einreiseanfragen)'
  },
  aaUrl: 'https://www.auswaertiges-amt.de/de/service/laender/portugal-node',

  rules: [
    ["Sprache", "Portugiesen nicht auf Spanisch ansprechen – lieber Englisch oder ein paar Worte Portugiesisch."],
    ["Couvert", "Brot, Oliven & Co. vorab auf dem Tisch kosten extra. Wer nichts möchte, lässt sie einfach zurückgehen."],
    ["Strand & Meer", "Atlantik mit starker Strömung: Flaggen der Rettungsschwimmer beachten (rot = Badeverbot)."],
    ["Azoren", "Auf den Azoren gilt eine Stunde weniger als auf dem Festland."]
  ],
  car: [
    ["Promille", "0,5 ‰; Fahranfänger 0,2 ‰."],
    ["Maut", "Viele Autobahnen mit elektronischer Maut ohne Kassenhäuschen – beim Mietwagen nach einem Transponder (Via Verde) fragen."]
  ],
  bike: [
    ["Abstand", "Autos müssen beim Überholen von Radfahrern 1,5 m Abstand halten."]
  ],
  substances: [
    ["Alkohol", "Ab 18 Jahren."],
    ["Drogen", "Besitz kleiner Mengen ist entkriminalisiert, aber weiterhin verboten (Bußgeld, Beschlagnahme). Straßenhändler in Lissabon verkaufen oft Fälschungen."]
  ],
  sim: [
    ['EU-Roaming', 'Mit deutschem Tarif ohne Aufpreis surfen und telefonieren („Roam like at home“).'],
    ['Alternative', 'eSIM (z. B. Airalo) oder Prepaid-SIM von MEO, Vodafone oder NOS.']
  ],
  apps: [
    ['CP – Comboios de Portugal', 'Zugtickets buchen (z. B. Lissabon–Porto).'],
    ['Uber & Bolt', 'Günstige Fahrdienste in Lissabon, Porto und an der Algarve.'],
    ['Google Maps & Translate', 'Offline-Karten herunterladen und Übersetzer parat haben.']
  ],

  places: [
    ['Lissabon', 38.7223, -9.1393], ['Porto', 41.1579, -8.6291], ['Faro (Algarve)', 37.0194, -7.9304],
    ['Funchal (Madeira)', 32.6669, -16.9241], ['Ponta Delgada (Azoren)', 37.7412, -25.6756, 'Atlantic/Azores']
  ]
};
