/* Quick-Tools · Estland – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "estland",
  name: "Estland",
  flag: "🇪🇪",
  tz: "Europe/Tallinn",
  currency: null, // Euro → kein Rechner, Startseite = Phrasen

  glance: {"plug": "C / F", "volt": 230, "adapter": "nein", "drive": "R", "water": "Trinkbar", "tip": "Aufrunden, ca. 5–10 %", "dial": "+372"},
  taxi: {"local": "Palun viige mind sellele aadressile.", "phonetic": "PA-lun WII-ge mind SEL-le-le AA-dres-si-le"},

  phrases: [
    { title: "🇪🇪 Estnisch", lang: "et-EE", items: [
      {"de": "Hallo / Guten Tag", "local": "Tere / Tere päevast", "phonetic": "TE-re / TE-re PÄ-e-wast"},
      {"de": "Danke schön", "local": "Suur aitäh", "phonetic": "suur AI-täh"},
      {"de": "Entschuldigung", "local": "Vabandage", "phonetic": "WA-ban-da-ge"},
      {"de": "Wie viel kostet das?", "local": "Kui palju see maksab?", "phonetic": "kui PAL-ju see MAK-sab"},
      {"de": "Die Rechnung, bitte", "local": "Arve, palun", "phonetic": "AR-we, PA-lun"},
      {"de": "Sprechen Sie Englisch?", "local": "Kas te räägite inglise keelt?", "phonetic": "kas te RÄÄ-gi-te ING-li-se keelt"},
      {"de": "Wo ist das Krankenhaus?", "local": "Kus on haigla?", "phonetic": "kus on HAIG-la"},
      {"de": "Ein großes Bier bitte", "local": "Üks suur õlu, palun", "phonetic": "üks suur Ö-lu, PA-lun"},
      {"de": "Ich bin Vegetarier/in", "local": "Ma olen taimetoitlane", "phonetic": "ma O-len TAI-me-toit-la-ne"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "Ma ei söö liha ega kala, aga mune söön", "phonetic": "ma ei söö LI-ha E-ga KA-la, A-ga MU-ne söön"},
      {"de": "Das Essen war sehr lecker", "local": "Toit oli väga maitsev!", "phonetic": "toit O-li WÄ-ga MAIT-sew"},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "Appi! See on hädaolukord!", "phonetic": "AP-pi! see on HÄ-da-o-lu-kord"}
    ]}
  ],

  emergency: [
    ["112", "Notruf (Polizei, Rettung, Feuerwehr)"],
    ["1220", "Ärztliche Beratung (rund um die Uhr, nicht dringend)"]
  ],
  embassy: {"title": "Deutsche Botschaft Tallinn", "address": ["Toom-Kuninga 11", "15048 Tallinn"], "phone": "+372 627 53 00"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/estland-node",

  rules: [
    ["Reflektor", "Fußgänger müssen im Dunkeln auf unbeleuchteten Straßen einen Reflektor tragen – Bußgeld möglich."],
    ["Bargeldlos", "Karte oder Handy werden fast überall akzeptiert, auch bei kleinen Beträgen."],
    ["Jedermannsrecht", "Wandern und Zelten in der Natur ist weitgehend erlaubt; Feuer nur an ausgewiesenen Plätzen (RMK)."]
  ],
  car: [
    ["Promille", "0,2 ‰."],
    ["Licht & Winter", "Licht auch tagsüber Pflicht. Von Dezember bis Februar Winterreifen Pflicht. Achtung vor Elchen und Wildschweinen."]
  ],
  substances: [
    ["Alkohol", "Ab 18. Im Laden nur zwischen 10 und 22 Uhr erhältlich."],
    ["Drogen", "Auch Cannabis ist verboten."]
  ],
  sim: [
    ["EU-Roaming", "Mit deutschem Tarif ohne Aufpreis surfen und telefonieren („Roam like at home“)."],
    ["Alternative", "eSIM (z. B. Airalo) oder Prepaid-SIM von Telia, Elisa oder Tele2."]
  ],
  apps: [
    ["Bolt", "Fahrdienst aus Estland – in allen größeren Städten verbreitet."],
    ["Elron", "Zugtickets im ganzen Land."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Tallinn", 59.437, 24.7536],
    ["Tartu", 58.378, 26.729],
    ["Pärnu", 58.3859, 24.4971],
    ["Kuressaare (Saaremaa)", 58.2529, 22.4849],
    ["Lahemaa-Nationalpark", 59.5065, 25.9587]
  ]
};
