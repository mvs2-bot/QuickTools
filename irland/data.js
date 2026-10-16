/* Quick-Tools · Irland – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "irland",
  name: "Irland",
  flag: "🇮🇪",
  tz: "Europe/Dublin",
  currency: null, // Euro → kein Rechner, Startseite = Phrasen

  glance: {"plug": "G", "volt": 230, "adapter": "ja", "drive": "L", "water": "Trinkbar", "tip": "ca. 10 % im Restaurant, im Pub nicht üblich", "dial": "+353"},
  taxi: {"local": "Could you take me to this address, please?", "phonetic": "kud ju TEIK mi tu dis e-DRES, pliis"},

  phrases: [
    { title: "🇮🇪 Englisch", lang: "en-IE", items: [
      {"de": "Hallo / Guten Tag", "local": "Hello / Good day", "phonetic": "he-LOU / gud DEI"},
      {"de": "Danke schön", "local": "Thank you very much", "phonetic": "THENK ju WE-ri matsch"},
      {"de": "Entschuldigung", "local": "Excuse me / Sorry", "phonetic": "iks-KJUS mi / SO-ri"},
      {"de": "Wie viel kostet das?", "local": "How much is this?", "phonetic": "hau MATSCH is dis"},
      {"de": "Die Rechnung, bitte", "local": "Could I have the bill, please?", "phonetic": "kud ai häw dhe BILL, pliis"},
      {"de": "Wo ist die Toilette?", "local": "Where’s the toilet?", "phonetic": "wers dhe TOI-let"},
      {"de": "Wo ist das Krankenhaus?", "local": "Where’s the hospital?", "phonetic": "wers dhe HOS-pi-tl"},
      {"de": "Ein großes Bier bitte", "local": "A pint, please", "phonetic": "e PAINT, pliis"},
      {"de": "Ich bin Vegetarier/in", "local": "I’m vegetarian", "phonetic": "aim we-dsche-TE-ri-en"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "I don’t eat meat or fish, but I do eat eggs", "phonetic": "ai DOUNT iit miit or fisch, bat ai DU iit EGGS"},
      {"de": "Das Essen war sehr lecker", "local": "That was delicious!", "phonetic": "dhät wos di-LI-schös"},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "Help! It’s an emergency!", "phonetic": "HELP! its en i-MÖR-dschen-si"}
    ]},
    { title: "🇮🇪 Irisch (Gälisch)", lang: "ga-IE", items: [
      {"de": "Hallo", "local": "Dia duit", "phonetic": "DI-a gwitsch"},
      {"de": "Danke", "local": "Go raibh maith agat", "phonetic": "go ro MA a-gut"},
      {"de": "Prost!", "local": "Sláinte!", "phonetic": "SLAWN-tsche"},
      {"de": "Tschüss", "local": "Slán", "phonetic": "slawn"}
    ]}
  ],

  emergency: [
    ["112 / 999", "Notruf (Polizei, Rettung, Feuerwehr)"]
  ],
  embassy: {"title": "Deutsche Botschaft Dublin", "address": ["31 Trimleston Avenue", "Booterstown, Blackrock, Co. Dublin"], "phone": "+353 1 269 30 11"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/irland-node",

  rules: [
    ["Linksverkehr", "Beim Überqueren der Straße zuerst nach RECHTS schauen („Look right“ steht oft auf dem Boden)."],
    ["Pub", "Bestellt und bezahlt wird an der Theke; in Gruppen gibt man reihum eine Runde aus („a round“)."],
    ["Wetter", "Regenjacke immer dabeihaben – das Wetter wechselt mehrmals am Tag."],
    ["Rauchen", "Rauchverbot in Pubs, Restaurants und allen geschlossenen Arbeitsplätzen."]
  ],
  car: [
    ["Promille", "0,5 ‰; Fahranfänger 0,2 ‰."],
    ["Straßen & Maut", "Landstraßen sind oft schmal und kurvig; Tempo in km/h. Die Maut auf der M50 bei Dublin wird nicht an einer Schranke kassiert – bis 20 Uhr am Folgetag online (eflow.ie) zahlen."]
  ],
  substances: [
    ["Alkohol", "Ab 18. Im Laden Mo–Sa 10:30–22 Uhr, So 12:30–22 Uhr."],
    ["Drogen", "Auch Cannabis ist verboten."]
  ],
  sim: [
    ["EU-Roaming", "Mit deutschem Tarif ohne Aufpreis surfen und telefonieren („Roam like at home“)."],
    ["Alternative", "eSIM (z. B. Airalo) oder Prepaid-SIM von Vodafone, Three oder Eir."]
  ],
  apps: [
    ["TFI Live", "Echtzeit-Fahrpläne für Bus, Bahn und die Dubliner Tram Luas."],
    ["FREENOW", "Taxi-App, in Irland sehr verbreitet."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Dublin", 53.3498, -6.2603],
    ["Galway", 53.2707, -9.0568],
    ["Cork", 51.8985, -8.4756],
    ["Cliffs of Moher", 52.9715, -9.4309],
    ["Killarney", 52.0599, -9.5044]
  ]
};
