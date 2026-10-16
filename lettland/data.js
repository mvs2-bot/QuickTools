/* Quick-Tools · Lettland – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "lettland",
  name: "Lettland",
  flag: "🇱🇻",
  tz: "Europe/Riga",
  currency: null, // Euro → kein Rechner, Startseite = Phrasen

  glance: {"plug": "C / F", "volt": 230, "adapter": "nein", "drive": "R", "water": "Trinkbar", "tip": "ca. 10 %", "dial": "+371"},
  taxi: {"local": "Lūdzu, aizvediet mani uz šo adresi.", "phonetic": "LU-dsu, AIS-we-diet MA-ni us scho AD-re-si"},

  phrases: [
    { title: "🇱🇻 Lettisch", lang: "lv-LV", items: [
      {"de": "Hallo / Guten Tag", "local": "Sveiki / Labdien", "phonetic": "SWEI-ki / LAB-dien"},
      {"de": "Danke schön", "local": "Liels paldies", "phonetic": "liels PAL-dies"},
      {"de": "Entschuldigung", "local": "Atvainojiet", "phonetic": "AT-wai-no-jiet"},
      {"de": "Wie viel kostet das?", "local": "Cik tas maksā?", "phonetic": "tsik tas MAK-sa"},
      {"de": "Die Rechnung, bitte", "local": "Rēķinu, lūdzu", "phonetic": "RE-tji-nu, LU-dsu"},
      {"de": "Sprechen Sie Englisch?", "local": "Vai jūs runājat angliski?", "phonetic": "wai jus RU-na-jat ANG-li-ski"},
      {"de": "Wo ist das Krankenhaus?", "local": "Kur ir slimnīca?", "phonetic": "kur ir SLIM-ni-tsa"},
      {"de": "Ein großes Bier bitte", "local": "Vienu lielu alu, lūdzu", "phonetic": "WIE-nu LIE-lu A-lu, LU-dsu"},
      {"de": "Ich bin Vegetarier/in", "local": "Es esmu veģetārietis / veģetāriete", "phonetic": "es ES-mu WE-dje-ta-rie-tis / WE-dje-ta-rie-te"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "Es neēdu gaļu un zivis, bet olas ēdu", "phonetic": "es NE-e-du GA-lju un SI-wis, bet O-las E-du"},
      {"de": "Das Essen war sehr lecker", "local": "Ēdiens bija ļoti garšīgs!", "phonetic": "E-diens BI-ja LJO-ti GAR-schigs"},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "Palīgā! Tas ir ārkārtas gadījums!", "phonetic": "PA-li-ga! tas ir AR-kar-tas GA-di-jums"}
    ]}
  ],

  emergency: [
    ["112", "Allgemeiner Notruf"],
    ["110", "Polizei"],
    ["113", "Rettungsdienst"]
  ],
  embassy: {"title": "Deutsche Botschaft Riga", "address": ["Raiņa bulvāris 13", "LV-1050 Riga"], "phone": "+371 67 08 51 00"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/lettland-node",

  rules: [
    ["Reflektor", "Fußgänger müssen im Dunkeln auf unbeleuchteten Straßen einen Reflektor tragen – Bußgeld möglich."],
    ["Blumen", "Blumen verschenkt man in ungerader Zahl – gerade Zahlen sind für Beerdigungen."],
    ["Sicherheit", "In Rigas Altstadt auf Taschendiebe achten; in manchen Bars wird Touristen überhöht abgerechnet – Preise vorher klären, Rechnung prüfen."]
  ],
  car: [
    ["Promille", "0,5 ‰; Fahranfänger 0,2 ‰."],
    ["Licht & Winter", "Licht auch tagsüber Pflicht. Von Dezember bis Februar Winterreifen Pflicht."]
  ],
  substances: [
    ["Alkohol", "Ab 18. Trinken in der Öffentlichkeit ist verboten."],
    ["Drogen", "Auch Cannabis ist verboten."]
  ],
  sim: [
    ["EU-Roaming", "Mit deutschem Tarif ohne Aufpreis surfen und telefonieren („Roam like at home“)."],
    ["Alternative", "eSIM (z. B. Airalo) oder Prepaid-SIM von LMT, Tele2 oder Bite."]
  ],
  apps: [
    ["Bolt", "Fahrdienst – in Riga und anderen Städten verbreitet."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Riga", 56.9496, 24.1052],
    ["Jūrmala", 56.968, 23.7704],
    ["Sigulda", 57.1537, 24.8533],
    ["Cēsis", 57.3119, 25.2706],
    ["Liepāja", 56.5047, 21.0108]
  ]
};
