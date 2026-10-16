/* Quick-Tools · Slowakei – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "slowakei",
  name: "Slowakei",
  flag: "🇸🇰",
  tz: "Europe/Bratislava",
  currency: null, // Euro → kein Rechner, Startseite = Phrasen

  glance: {"plug": "C / E", "volt": 230, "adapter": "nein", "drive": "R", "water": "Trinkbar", "tip": "5–10 %", "dial": "+421"},
  taxi: {"local": "Prosím, odvezte ma na túto adresu.", "phonetic": "PRO-siim, OD-wes-tje ma na TUU-to AD-re-su"},

  phrases: [
    { title: "🇸🇰 Slowakisch", lang: "sk-SK", items: [
      {"de": "Hallo / Guten Tag", "local": "Dobrý deň", "phonetic": "DOB-rii djen"},
      {"de": "Danke schön", "local": "Ďakujem pekne", "phonetic": "DJA-ku-jem PEK-ne"},
      {"de": "Entschuldigung", "local": "Prepáčte", "phonetic": "PRE-paatsch-tje"},
      {"de": "Wie viel kostet das?", "local": "Koľko to stojí?", "phonetic": "KOL-ko to STO-jii"},
      {"de": "Die Rechnung, bitte", "local": "Účet, prosím", "phonetic": "UU-tschet, PRO-siim"},
      {"de": "Sprechen Sie Englisch?", "local": "Hovoríte po anglicky?", "phonetic": "HO-wo-rii-tje po ANG-lits-ki"},
      {"de": "Wo ist das Krankenhaus?", "local": "Kde je nemocnica?", "phonetic": "gdje je NE-mots-ni-tsa"},
      {"de": "Ein großes Bier bitte", "local": "Jedno veľké pivo, prosím", "phonetic": "JED-no WEL-kee PI-wo, PRO-siim"},
      {"de": "Ich bin Vegetarier/in", "local": "Som vegetarián / vegetariánka", "phonetic": "som WE-ge-ta-ri-aan / -aan-ka"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "Nejem mäso ani ryby, ale vajcia áno", "phonetic": "NE-jem ME-so A-ni RI-bi, A-le WAJ-tsja AA-no"},
      {"de": "Das Essen war sehr lecker", "local": "Jedlo bolo vynikajúce!", "phonetic": "JED-lo BO-lo WI-ni-ka-juu-tse"},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "Pomoc! Je to núdzový prípad!", "phonetic": "PO-mots! je to NUU-dso-wii PRII-pat"}
    ]}
  ],

  emergency: [
    ["112", "Europäischer Notruf (alle Dienste)"],
    ["155", "Rettungsdienst"],
    ["158", "Polizei"],
    ["150", "Feuerwehr"],
    ["18 300", "Bergwacht"]
  ],
  embassy: {"title": "Deutsche Botschaft Bratislava", "address": ["Hviezdoslavovo námestie 10", "813 03 Bratislava"], "phone": "+421 2 5920 4400", "emergency": "+421 903 444 633", "emergencyNote": "(Mo–Fr 17–24 Uhr, Wochenende 8–24 Uhr; auch SMS)"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/slowakei-node",

  rules: [
    ["Berge", "In der Hohen Tatra ist die Bergrettung kostenpflichtig – Bergungsversicherung abschließen. Viele Hochgebirgswege sind von November bis Mitte Juni gesperrt."],
    ["Ausweis", "Personalausweis oder Reisepass immer dabeihaben."],
    ["Trinkgeld", "Rund 10 % in Restaurants sind üblich."]
  ],
  car: [
    ["Promille", "0,0 ‰."],
    ["Vignette & Licht", "Für Autobahnen ist eine elektronische Vignette (eznamka.sk) Pflicht. Licht auch tagsüber."]
  ],
  substances: [
    ["Alkohol", "Ab 18 Jahren."],
    ["Drogen", "Auch Cannabis ist verboten; Drogendelikte werden streng bestraft."]
  ],
  sim: [
    ["EU-Roaming", "Mit deutschem Tarif ohne Aufpreis surfen und telefonieren („Roam like at home“)."]
  ],
  apps: [
    ["Bolt & Uber", "Fahrdienste in Bratislava und Košice."],
    ["CP.sk", "Fahrpläne für Bahn und Bus im ganzen Land."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Bratislava", 48.1486, 17.1077],
    ["Hohe Tatra (Štrbské Pleso)", 49.1194, 20.0606],
    ["Košice", 48.7164, 21.2611],
    ["Banská Štiavnica", 48.4586, 18.8931],
    ["Zipser Burg", 48.9997, 20.7681]
  ]
};
