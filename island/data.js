/* Quick-Tools · Island – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: 'island',
  name: 'Island',
  flag: '🇮🇸',
  tz: 'Atlantic/Reykjavik',
  currency: { code: 'ISK', symbol: 'kr', name: 'Isländische Krone', tableDecimals: 0 },

  glance: {"plug": "C / F", "volt": 230, "adapter": "nein", "drive": "R", "water": "Trinkbar – sehr gut (warmes Wasser riecht nach Schwefel)", "tip": "Nicht üblich", "dial": "+354"},
  taxi: {"local": "Geturðu keyrt mig á þetta heimilisfang?", "phonetic": "GE-tür-thu keirt mich au THET-ta HEI-mi-lis-faung"},

  phrases: [
    { title: '🇮🇸 Isländisch', lang: 'is-IS', items: [
      { de: 'Hallo / Guten Tag', local: 'Halló / Góðan daginn', phonetic: 'HAL-lou / GOU-than DAI-in' },
      { de: 'Danke schön', local: 'Takk fyrir', phonetic: 'takk FI-rir' },
      { de: 'Entschuldigung', local: 'Afsakið', phonetic: 'AF-sa-kith' },
      { de: 'Wie viel kostet das?', local: 'Hvað kostar þetta?', phonetic: 'kwath KOS-tar THET-ta' },
      { de: 'Die Rechnung, bitte', local: 'Get ég fengið reikninginn?', phonetic: 'get jeh FEN-gith RAIK-nin-gin' },
      { de: 'Sprechen Sie Englisch?', local: 'Talar þú ensku?', phonetic: 'TA-lar thu EN-sku' },
      { de: 'Wo ist das Krankenhaus?', local: 'Hvar er sjúkrahúsið?', phonetic: 'kwar er SJUK-ra-hu-sith' },
      { de: 'Ein großes Bier bitte', local: 'Einn stóran bjór, takk', phonetic: 'ait STOU-ran bjour, takk' },
      { de: 'Ich bin Vegetarier/in', local: 'Ég er grænmetisæta', phonetic: 'jeh er GRAIN-me-tis-ai-ta' },
      { de: 'Ich esse kein Fleisch und Fisch, aber Eier schon', local: 'Ég borða ekki kjöt eða fisk, en ég borða egg', phonetic: 'jeh BOR-tha EH-ki kjöt E-tha fisk, en jeh BOR-tha egg' },
      { de: 'Das Essen war sehr lecker', local: 'Maturinn var mjög góður', phonetic: 'MA-tü-rin war mjöch GOU-thür' },
      { de: 'Hilfe! Es ist ein Notfall!', local: 'Hjálp! Þetta er neyðartilvik!', phonetic: 'hjaulp! THET-ta er NEI-thar-til-wik' }
    ]}
  ],

  emergency: [
    ['112', 'Notruf (alle Dienste, auch Bergrettung)'],
    ['1700', 'Medizinische Beratung (nicht dringend)']
  ],
  embassy: {
    title: 'Deutsche Botschaft Reykjavík',
    address: ['Laufásvegur 31', '101 Reykjavík'],
    phone: '+354 530 11 00',
    emergency: '+354 663 78 00', emergencyNote: '(täglich 8–24 Uhr außerhalb der Dienstzeiten, auch per SMS)'
  },
  aaUrl: 'https://www.auswaertiges-amt.de/de/service/laender/island-node',

  rules: [
    ['Natur', 'Nicht abseits der Wege laufen – Moos braucht Jahrzehnte zum Nachwachsen. Offroad-Fahren ist streng verboten und teuer.'],
    ['Straßen', 'F-Straßen (Hochland) nur mit Allrad und nur, wenn sie offen sind. Furten nie unüberlegt durchfahren.'],
    ['Wetter', 'Wetter und Straßenzustand täglich prüfen (vedur.is, umferdin.is). Sturmböen können Autotüren abreißen – Tür gut festhalten.'],
    ['Strände', 'An Black Beaches (z. B. Reynisfjara) nie mit dem Rücken zum Meer stehen – gefährliche „Sneaker Waves“.'],
    ['Wildcampen', 'Mit Camper/Zelt nur auf Campingplätzen übernachten, nicht an der Straße oder auf Parkplätzen.']
  ],
  sim: [
    ['EWR-Roaming', 'Island gehört zum EWR – die meisten deutschen Tarife gelten dort ohne Aufpreis. Vorher kurz prüfen!'],
    ['Alternative', 'Prepaid-SIM von Síminn (beste Abdeckung im Hochland) oder Nova.']
  ],
  apps: [
    ['112 Iceland', 'Notruf mit Standortübermittlung und Reiseplan-Hinterlegung (SafeTravel).'],
    ['Veður (vedur.is)', 'Offizieller Wetterdienst inkl. Polarlicht-Vorhersage.'],
    ['Umferðin (umferdin.is)', 'Straßenzustand und Sperrungen in Echtzeit.']
  ],

  places: [
    ['Reykjavík', 64.1466, -21.9426], ['Akureyri', 65.6885, -18.1262], ['Vík', 63.4186, -19.006],
    ['Höfn', 64.2539, -15.2082], ['Ísafjörður', 66.0749, -23.1351]
  ]
};
