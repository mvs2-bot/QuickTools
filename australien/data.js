/* Quick-Tools · Australien – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "australien",
  name: "Australien",
  flag: "🇦🇺",
  tz: "Australia/Sydney",
  currency: {"code": "AUD", "symbol": "$", "name": "Australischer Dollar"},

  glance: {"plug": "I", "volt": 230, "adapter": "ja", "drive": "L", "water": "Trinkbar", "tip": "Nicht üblich, Aufrunden bei gutem Service", "dial": "+61"},
  taxi: {"local": "Please take me to this address.", "phonetic": ""},

  phrases: [
    { title: "🇦🇺 Englisch", lang: "en-AU", items: [
      {"de": "Hallo / Guten Morgen", "local": "Hello / Good morning", "phonetic": ""},
      {"de": "Danke schön", "local": "Thank you very much", "phonetic": ""},
      {"de": "Entschuldigung", "local": "Excuse me / Sorry", "phonetic": ""},
      {"de": "Wie viel kostet das?", "local": "How much is this?", "phonetic": ""},
      {"de": "Die Rechnung, bitte", "local": "Could I get the bill, please?", "phonetic": ""},
      {"de": "Wo ist das Krankenhaus?", "local": "Where is the hospital?", "phonetic": ""},
      {"de": "Ein großes Bier, bitte", "local": "A schooner, please", "phonetic": ""},
      {"de": "Wo ist die Toilette?", "local": "Where's the toilet?", "phonetic": ""},
      {"de": "Ich bin Vegetarier/in", "local": "I'm vegetarian", "phonetic": ""},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "I don't eat meat or fish, but I do eat eggs", "phonetic": ""},
      {"de": "Das Essen war sehr lecker", "local": "That was delicious!", "phonetic": ""},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "Help! It's an emergency!", "phonetic": ""}
    ]},
    { title: "🦘 Aussie-Slang", lang: "en-AU", items: [
      {"de": "Hallo", "local": "G'day (mate)!", "phonetic": ""},
      {"de": "Kein Problem", "local": "No worries", "phonetic": ""},
      {"de": "Frühstück", "local": "Brekkie", "phonetic": ""},
      {"de": "Nachmittag", "local": "Arvo", "phonetic": ""},
      {"de": "Flip-Flops", "local": "Thongs", "phonetic": ""},
      {"de": "Tankstelle", "local": "Servo", "phonetic": ""},
      {"de": "Getränkemarkt", "local": "Bottle-O", "phonetic": ""},
      {"de": "Grillen", "local": "Barbie", "phonetic": ""}
    ]}
  ],

  emergency: [
    ["000", "Notruf (Polizei, Rettung, Feuerwehr)"],
    ["112", "Notruf vom Handy"],
    ["13 11 26", "Giftnotruf"]
  ],
  embassy: {"title": "Deutsche Botschaft Canberra", "address": ["119 Empire Circuit, Yarralumla", "ACT 2600", "Generalkonsulat Sydney: Level 17, 100 William St, Tel. +61 2 8302 4900"], "phone": "+61 2 6270 1911", "emergency": "+61 412 359 826", "emergencyNote": "(auch per SMS, gilt auch für Sydney)"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/australien-node",

  rules: [
    ["Einreise", "Vorab eVisitor-Visum online beantragen (kostenlos, nur über die offizielle Seite)."],
    ["Einfuhr", "Sehr strenge Kontrollen: Lebensmittel, Pflanzen, Holz und Wanderschuhe mit Erde deklarieren – sonst hohe Strafen."],
    ["Sonne", "Extrem hohe UV-Strahlung: Sonnencreme, Hut, Shirt – auch bei Wolken. „Slip, Slop, Slap“."],
    ["Meer", "Nur zwischen den rot-gelben Flaggen baden. Im Norden Quallen (Stinger) und Krokodile – Warnschilder beachten."],
    ["Outback", "Lange Strecken ohne Tankstelle: Wasser, Sprit und Bescheid geben, wohin man fährt."]
  ],
  car: [
    ["Linksverkehr", "0,5 ‰ (Lern- und Probeführerschein 0,0 ‰). Handy am Steuer wird per Kamera geahndet. Deutscher Führerschein nur mit internationalem Führerschein oder beglaubigter englischer Übersetzung."],
    ["Wildtiere", "In der Dämmerung auf Kängurus achten; Outback-Strecken nur mit Wasser- und Tankreserve."]
  ],
  bike: [
    ["Helm", "Helmpflicht für Radfahrer (fast überall)."]
  ],
  substances: [
    ["Alkohol", "Ab 18. In vielen Parks und an Stränden alkoholfreie Zonen."],
    ["Vapes", "Nur in Apotheken erhältlich; Einfuhr nur in kleinen Mengen für den Eigenbedarf."],
    ["Cannabis", "Verboten (Ausnahme: kleine private Mengen im Hauptstadtterritorium ACT)."]
  ],
  sim: [
    ["Lokale SIM", "Telstra (beste Abdeckung im Outback), Optus oder Vodafone – am Flughafen oder im Supermarkt."],
    ["eSIM", "Alternativ vorab eSIM (z. B. Airalo) buchen – am einfachsten schon vor dem Abflug einrichten."]
  ],
  apps: [
    ["Uber & DiDi", "Fahrdienste in den Städten."],
    ["WikiCamps", "Camping- und Rastplätze in ganz Australien."],
    ["Beachsafe", "Infos zu bewachten Stränden und Gefahren."]
  ],

  places: [
    ["Sydney", -33.8688, 151.2093],
    ["Melbourne", -37.8136, 144.9631, "Australia/Melbourne"],
    ["Cairns", -16.9186, 145.7781, "Australia/Brisbane"],
    ["Uluru", -25.3444, 131.0369, "Australia/Darwin"],
    ["Perth", -31.9505, 115.8605, "Australia/Perth"],
    ["Brisbane", -27.4698, 153.0251, "Australia/Brisbane"]
  ]
};
