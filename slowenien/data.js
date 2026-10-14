/* Quick-Tools · Slowenien – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "slowenien",
  name: "Slowenien",
  flag: "🇸🇮",
  tz: "Europe/Ljubljana",
  currency: null, // Euro → kein Rechner, Startseite = Phrasen

  glance: {"plug": "C / F", "volt": 230, "adapter": "nein", "drive": "R", "water": "Trinkbar", "tip": "Aufrunden, ca. 10 % im Restaurant", "dial": "+386"},
  taxi: {"local": "Prosim, peljite me na ta naslov.", "phonetic": "PRO-sim, PEL-ji-te me na ta NAS-lou"},

  phrases: [
    { title: "🇸🇮 Slowenisch", lang: "sl-SI", items: [
      {"de": "Guten Tag", "local": "Dober dan", "phonetic": "DO-ber dan"},
      {"de": "Danke schön", "local": "Hvala lepa", "phonetic": "HWA-la LE-pa"},
      {"de": "Entschuldigung", "local": "Oprostite", "phonetic": "o-PROS-ti-te"},
      {"de": "Wie viel kostet das?", "local": "Koliko stane?", "phonetic": "KO-li-ko STA-ne"},
      {"de": "Die Rechnung, bitte", "local": "Račun, prosim", "phonetic": "RA-tschun, PRO-sim"},
      {"de": "Sprechen Sie Englisch?", "local": "Ali govorite angleško?", "phonetic": "A-li go-wo-RI-te ang-LESCH-ko"},
      {"de": "Wo ist das Krankenhaus?", "local": "Kje je bolnišnica?", "phonetic": "kje je bol-NISCH-ni-tsa"},
      {"de": "Ein großes Bier bitte", "local": "Eno veliko pivo, prosim", "phonetic": "E-no we-LI-ko PI-wo, PRO-sim"},
      {"de": "Ich bin Vegetarier/in", "local": "Sem vegetarijanec / vegetarijanka", "phonetic": "sem we-ge-ta-ri-JA-nets / -JAN-ka"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "Ne jem mesa in rib, jajca pa jem", "phonetic": "ne jem ME-sa in rib, JAJ-tsa pa jem"},
      {"de": "Das Essen war sehr lecker", "local": "Hrana je bila zelo okusna!", "phonetic": "HRA-na je BI-la SE-lo o-KUS-na"},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "Na pomoč! Nujno je!", "phonetic": "na po-MOTSCH! NUJ-no je"}
    ]}
  ],

  emergency: [
    ["112", "Notruf: Rettung & Feuerwehr"],
    ["113", "Polizei"]
  ],
  embassy: {"title": "Deutsche Botschaft Ljubljana", "address": ["Prešernova cesta 27", "1000 Ljubljana"], "phone": "+386 1 479 0300", "emergency": "+386 30 708 055", "emergencyNote": "(nur dringende konsularische Notfälle)"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/slowenien-node",

  rules: [
    ["Berge", "Im Triglav-Nationalpark auf den Wegen bleiben, Wetter in den Julischen Alpen kann schnell umschlagen."],
    ["Bled & Bohinj", "Im Sommer sind Parkplätze teuer und schnell voll – früh kommen oder Shuttle/Bus nutzen."],
    ["Bezahlen", "Karte ist verbreitet, in Berghütten und kleinen Gaststätten oft nur Bargeld."]
  ],
  car: [
    ["Promille", "0,5 ‰; Fahranfänger 0,0 ‰."],
    ["Vignette", "Für Autobahnen ist eine digitale Vignette (e-vinjeta) Pflicht – vor der Grenze online kaufen. Licht auch tagsüber."],
    ["Winter", "Vom 15. November bis 15. März Winterausrüstung Pflicht."]
  ],
  substances: [
    ["Alkohol", "Ab 18 Jahren."],
    ["Drogen", "Auch Cannabis ist verboten."]
  ],
  sim: [
    ["EU-Roaming", "Mit deutschem Tarif ohne Aufpreis surfen und telefonieren („Roam like at home“)."],
    ["Alternative", "eSIM (z. B. Airalo) oder Prepaid-SIM im Shop vor Ort – Ausweis nötig."]
  ],
  apps: [
    ["Slovenske železnice", "Zugfahrpläne und Tickets."],
    ["GoOpti", "Shuttles von/zu den Flughäfen der Region."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Ljubljana", 46.0569, 14.5058],
    ["Bled", 46.3683, 14.1146],
    ["Piran", 45.5285, 13.5683],
    ["Bohinj", 46.2779, 13.8869],
    ["Maribor", 46.5547, 15.6459]
  ]
};
