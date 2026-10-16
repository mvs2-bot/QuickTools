/* Quick-Tools · Finnland – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "finnland",
  name: "Finnland",
  flag: "🇫🇮",
  tz: "Europe/Helsinki",
  currency: null, // Euro → kein Rechner, Startseite = Phrasen

  glance: {"plug": "C / F", "volt": 230, "adapter": "nein", "drive": "R", "water": "Trinkbar", "tip": "Nicht üblich, Aufrunden gern gesehen", "dial": "+358"},
  taxi: {"local": "Voisitteko viedä minut tähän osoitteeseen?", "phonetic": "WOI-sit-te-ko WIE-dä MI-nut TÄ-hän O-soit-tee-seen"},

  phrases: [
    { title: "🇫🇮 Finnisch", lang: "fi-FI", items: [
      {"de": "Hallo / Guten Tag", "local": "Hei / Päivää", "phonetic": "hej / PÄI-wää"},
      {"de": "Danke schön", "local": "Kiitos paljon", "phonetic": "KII-tos PAL-jon"},
      {"de": "Entschuldigung", "local": "Anteeksi", "phonetic": "AN-teek-si"},
      {"de": "Wie viel kostet das?", "local": "Paljonko tämä maksaa?", "phonetic": "PAL-jon-ko TÄ-mä MAK-saa"},
      {"de": "Die Rechnung, bitte", "local": "Saisinko laskun?", "phonetic": "SAI-sin-ko LAS-kun"},
      {"de": "Sprechen Sie Englisch?", "local": "Puhutteko englantia?", "phonetic": "PU-hut-te-ko ENG-lan-ti-a"},
      {"de": "Wo ist das Krankenhaus?", "local": "Missä on sairaala?", "phonetic": "MIS-sä on SAI-raa-la"},
      {"de": "Ein großes Bier bitte", "local": "Iso olut, kiitos", "phonetic": "I-so O-lut, KII-tos"},
      {"de": "Ich bin Vegetarier/in", "local": "Olen kasvissyöjä", "phonetic": "O-len KAS-wis-süö-jä"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "En syö lihaa enkä kalaa, mutta munia syön", "phonetic": "en süö LI-haa EN-kä KA-laa, MUT-ta MU-ni-a süön"},
      {"de": "Das Essen war sehr lecker", "local": "Ruoka oli tosi hyvää!", "phonetic": "RUO-ka O-li TO-si HÜ-wää"},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "Apua! On hätätilanne!", "phonetic": "A-pu-a! on HÄ-tä-ti-lan-ne"}
    ]},
    { title: "🇫🇮 Schwedisch (zweite Amtssprache)", lang: "sv-FI", items: [
      {"de": "Hallo", "local": "Hej", "phonetic": "hej"},
      {"de": "Danke schön", "local": "Tack så mycket", "phonetic": "tack so MÜ-ke"},
      {"de": "Entschuldigung", "local": "Ursäkta", "phonetic": "UR-schek-ta"},
      {"de": "Sprechen Sie Englisch?", "local": "Talar du engelska?", "phonetic": "TA-lar dü ENG-el-ska"}
    ]}
  ],

  emergency: [
    ["112", "Notruf (Polizei, Rettung, Feuerwehr)"],
    ["116 117", "Ärztliche Beratung (nicht dringend)"]
  ],
  embassy: {"title": "Deutsche Botschaft Helsinki", "address": ["Krogiuksentie 4b", "00340 Helsinki"], "phone": "+358 9 458 580", "emergency": "+358 50 563 6546", "emergencyNote": "(Mo–Fr 17–24 Uhr, Wochenende/Feiertage 8–24 Uhr)"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/finnland-node",

  rules: [
    ["Jedermannsrecht", "Wandern, Zelten sowie Beeren- und Pilzesammeln sind in der Natur erlaubt – nicht nah an Häusern, kein Feuer ohne Erlaubnis."],
    ["Sauna", "Nackt saunieren ist normal, öffentliche Saunen sind meist nach Geschlechtern getrennt; in gemischten Saunen Badekleidung."],
    ["Mücken", "Im Sommer viele Mücken, besonders im Norden und an Seen – Mückenschutz mitnehmen."],
    ["Bargeldlos", "Karte oder Handy werden fast überall akzeptiert, auch bei kleinen Beträgen."],
    ["Grenze zu Russland", "Alle Grenzübergänge nach Russland sind geschlossen. Das Grenzgebiet nicht ohne Genehmigung betreten – es gab Festnahmen."]
  ],
  car: [
    ["Promille", "0,5 ‰."],
    ["Licht, Wild & Winter", "Licht auch tagsüber Pflicht. Achtung vor Elchen und Rentieren, besonders in der Dämmerung. Bei Winterwetter Winterreifen Pflicht."]
  ],
  substances: [
    ["Alkohol", "Getränke über 8 % gibt es nur im staatlichen „Alko“ (Spirituosen ab 20); Bier und Wein bis 8 % im Supermarkt ab 18, nur bis 21 Uhr."],
    ["Drogen", "Auch Cannabis ist verboten."]
  ],
  sim: [
    ["EU-Roaming", "Mit deutschem Tarif ohne Aufpreis surfen und telefonieren („Roam like at home“)."],
    ["Alternative", "eSIM (z. B. Airalo) oder Prepaid-SIM von Elisa, DNA oder Telia."]
  ],
  apps: [
    ["VR", "Zugtickets in ganz Finnland."],
    ["HSL", "Nahverkehrstickets in Helsinki und Umgebung."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Helsinki", 60.1699, 24.9384],
    ["Turku", 60.4518, 22.2666],
    ["Tampere", 61.4978, 23.761],
    ["Savonlinna", 61.8687, 28.8789],
    ["Rovaniemi", 66.5039, 25.7294]
  ]
};
