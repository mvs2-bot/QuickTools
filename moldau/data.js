/* Quick-Tools · Moldau – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "moldau",
  name: "Moldau",
  flag: "🇲🇩",
  tz: "Europe/Chisinau",
  currency: {"code": "MDL", "symbol": "L", "name": "Moldauischer Leu"},

  glance: {"plug": "C / F", "volt": 230, "adapter": "nein", "drive": "R", "water": "Nicht empfohlen – Flaschenwasser", "tip": "ca. 10 %", "dial": "+373"},
  taxi: {"local": "Vă rog să mă duceți la această adresă.", "phonetic": "we ROG se me DU-tschetz la a-TSCHAS-te a-DRE-se"},

  phrases: [
    { title: "🇲🇩 Rumänisch", lang: "ro-MD", items: [
      {"de": "Hallo / Guten Tag", "local": "Bună ziua", "phonetic": "BU-ne SI-wa"},
      {"de": "Danke schön", "local": "Mulțumesc frumos", "phonetic": "mul-tsu-MESK fru-MOS"},
      {"de": "Entschuldigung", "local": "Scuzați-mă", "phonetic": "sku-SA-tsi-me"},
      {"de": "Wie viel kostet das?", "local": "Cât costă?", "phonetic": "kit KOS-te"},
      {"de": "Die Rechnung, bitte", "local": "Nota, vă rog", "phonetic": "NO-ta, we ROG"},
      {"de": "Sprechen Sie Englisch?", "local": "Vorbiți engleză?", "phonetic": "wor-BITS en-GLE-se"},
      {"de": "Wo ist das Krankenhaus?", "local": "Unde este spitalul?", "phonetic": "UN-de JES-te spi-TA-lul"},
      {"de": "Ein großes Bier bitte", "local": "O bere mare, vă rog", "phonetic": "o BE-re MA-re, we ROG"},
      {"de": "Ich bin Vegetarier/in", "local": "Sunt vegetarian / vegetariană", "phonetic": "sunt we-dsche-ta-RJAN / -RJA-ne"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "Nu mănânc carne și pește, dar mănânc ouă", "phonetic": "nu me-NINK KAR-ne schi PESCH-te, dar me-NINK O-we"},
      {"de": "Das Essen war sehr lecker", "local": "Mâncarea a fost foarte bună!", "phonetic": "min-KA-rja a fost FOAR-te BU-ne"},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "Ajutor! Este o urgență!", "phonetic": "a-schu-TOR! JES-te o ur-DSCHEN-tse"}
    ]},
    { title: "🇷🇺 Russisch (weit verbreitet)", lang: "ru-MD", items: [
      {"de": "Hallo / Guten Tag", "local": "Здравствуйте", "phonetic": "SDRAST-wuj-tje"},
      {"de": "Danke schön", "local": "Большое спасибо", "phonetic": "bal-SCHO-je spa-SSI-ba"},
      {"de": "Entschuldigung", "local": "Извините", "phonetic": "is-wi-NI-tje"},
      {"de": "Wie viel kostet das?", "local": "Сколько это стоит?", "phonetic": "SKOL-ka E-ta STO-it"}
    ]}
  ],

  status: [
    ["Transnistrien", "Der Landesteil östlich des Dnister hat sich abgespalten und ist von keinem UN-Staat anerkannt. Eigene Kontrollposten, eigene Währung (Transnistrischer Rubel); deutsche Konsularhilfe ist dort nicht möglich. Das Auswärtige Amt rät von Reisen nach Transnistrien ab."]
  ],
  emergency: [
    ["112", "Notruf (Polizei, Rettung, Feuerwehr)"]
  ],
  embassy: {"title": "Deutsche Botschaft Chișinău", "address": ["Str. Alexei Mateevici 82", "MD-2009 Chișinău"], "phone": "+373 22 20 06 00", "emergency": "+373 76 00 08 13"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/moldau-node",

  rules: [
    ["Ukraine-Grenze", "Im Nachbarland herrscht Krieg – nicht in die Ukraine weiterreisen und Grenznähe im Norden und Osten meiden."],
    ["Reisepass", "Pass immer dabeihaben; Kontrollen sind häufig, auch an der Grenze zu Transnistrien."],
    ["Bargeld", "Außerhalb von Chișinău wird oft nur bar in Lei bezahlt. Euro lassen sich in Wechselstuben gut tauschen."],
    ["Weinkeller", "Cricova und Mileștii Mici nur mit Führung – vorher reservieren. Nach der Weinprobe nicht selbst fahren."]
  ],
  car: [
    ["Vignette", "Für Autos mit ausländischem Kennzeichen ist eine Vignette („Rovinietă“) Pflicht – an Tankstellen, Bankfilialen oder online als E-Vignette. Grüne Karte vorgeschrieben."],
    ["Promille", "0,0 ‰. Straßen außerhalb der Städte oft in schlechtem Zustand – nachts nicht über Land fahren."]
  ],
  substances: [
    ["Alkohol", "Ab 18 Jahren."],
    ["Drogen", "Auch Cannabis ist verboten; Drogendelikte werden streng bestraft."]
  ],
  sim: [
    ["Roaming", "Moldau ist nicht in der EU – vorher prüfen, ob Ihr Tarif Moldau einschließt, sonst wird es teuer."],
    ["Lokale SIM / eSIM", "Prepaid-SIM von Orange oder Moldcell (Pass nötig) – günstig und gutes Netz. Oder vorab eSIM."]
  ],
  apps: [
    ["Yandex Go", "Taxis in Chișinău zum Festpreis bestellen."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Chișinău", 47.0105, 28.8638],
    ["Orheiul Vechi", 47.3017, 28.9697],
    ["Cricova", 47.1386, 28.8611],
    ["Mileștii Mici", 46.9056, 28.8264],
    ["Soroca", 48.1558, 28.2975]
  ]
};
