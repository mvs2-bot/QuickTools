/* Quick-Tools · Malta – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "malta",
  name: "Malta",
  flag: "🇲🇹",
  tz: "Europe/Malta",
  currency: null, // Euro → kein Rechner, Startseite = Phrasen

  glance: {"plug": "G", "volt": 230, "adapter": "ja", "drive": "L", "water": "Trinkbar (entsalzt), schmeckt aber stark gechlort – viele nehmen Flaschenwasser", "tip": "5–10 %", "dial": "+356"},
  taxi: {"local": "Jekk jogħġbok, ħudni f’dan l-indirizz.", "phonetic": "jek JOJ-bok, HUD-ni f-dan lin-di-RIZ"},

  phrases: [
    { title: "🇲🇹 Maltesisch", lang: "mt-MT", items: [
      {"de": "Hallo / Guten Tag", "local": "Bonġu", "phonetic": "BON-dschu"},
      {"de": "Danke schön", "local": "Grazzi ħafna", "phonetic": "GRAT-tsi HAF-na"},
      {"de": "Entschuldigung", "local": "Skużani", "phonetic": "sku-SA-ni"},
      {"de": "Wie viel kostet das?", "local": "Kemm jiswa?", "phonetic": "kemm JIS-wa"},
      {"de": "Die Rechnung, bitte", "local": "Il-kont, jekk jogħġbok", "phonetic": "il-KONT, jek JOJ-bok"},
      {"de": "Sprechen Sie Englisch?", "local": "Titkellem bl-Ingliż?", "phonetic": "tit-KEL-lem bl-in-GLIS"},
      {"de": "Wo ist das Krankenhaus?", "local": "Fejn hu l-isptar?", "phonetic": "fejn u lis-PTAR"},
      {"de": "Ein großes Bier bitte", "local": "Birra kbira, jekk jogħġbok", "phonetic": "BIR-ra KBI-ra, jek JOJ-bok"},
      {"de": "Ich bin Vegetarier/in", "local": "Jien veġetarjan / veġetarjana", "phonetic": "jin we-dsche-tar-JAN / -JA-na"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "Ma niekolx laħam u ħut, imma bajd niekol", "phonetic": "ma NI-kolsch LA-ham u hut, IM-ma bajt NI-kol"},
      {"de": "Das Essen war sehr lecker", "local": "L-ikel kien tajjeb ħafna!", "phonetic": "LI-kel kin TAJ-jep HAF-na"},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "Ajjut! Hija emerġenza!", "phonetic": "aj-JUT! I-ja e-mer-DSCHEN-tsa"}
    ]}
  ],

  emergency: [
    ["112", "Notruf (Polizei, Rettung, Feuerwehr)"]
  ],
  embassy: {"title": "Deutsche Botschaft Valletta", "address": ["Il-Piazzetta A, Entrance B, 1st Floor, Tower Road", "Sliema SLM 1605"], "phone": "+356 2133 6531"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/malta-node",

  rules: [
    ["Sprache", "Englisch ist neben Maltesisch Amtssprache – damit kommt man überall durch."],
    ["Kirchen", "Schultern und Knie bedecken, z. B. in der St. John’s Co-Cathedral in Valletta."],
    ["Sonne", "Im Sommer sehr heiß und kaum Schatten – Sonnenschutz und Wasser mitnehmen."],
    ["Trinkgeld", "Rund 10 % in Restaurants sind üblich."]
  ],
  car: [
    ["Linksverkehr", "Achtung, in Malta wird links gefahren. Straßen sind eng und oft verstopft."],
    ["Promille", "0,5 ‰; Fahranfänger 0,2 ‰."]
  ],
  substances: [
    ["Alkohol", "Ab 17 Jahren."],
    ["Cannabis", "Für Erwachsene bis 7 g Besitz straffrei, Konsum in der Öffentlichkeit aber verboten. Andere Drogen werden streng bestraft."]
  ],
  sim: [
    ["EU-Roaming", "Mit deutschem Tarif ohne Aufpreis surfen und telefonieren („Roam like at home“)."],
    ["Achtung auf Fähren", "Auf See bucht sich das Handy manchmal ins teure Schiffsnetz ein – Daten-Roaming dort ausschalten."]
  ],
  apps: [
    ["Tallinja", "Busfahrpläne und Tickets für Malta und Gozo."],
    ["Bolt & Uber", "Fahrdienste – meist günstiger als Taxis."],
    ["Gozo Channel", "Fähre Ċirkewwa – Gozo."]
  ],

  places: [
    ["Valletta", 35.8989, 14.5146],
    ["Mdina", 35.8858, 14.4031],
    ["Gozo (Victoria)", 36.0443, 14.2394],
    ["Sliema", 35.9122, 14.5042],
    ["Marsaxlokk", 35.8419, 14.5431]
  ]
};
