/* Quick-Tools · USA – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "usa",
  name: "USA",
  flag: "🇺🇸",
  tz: "America/New_York",
  currency: {"code": "USD", "symbol": "$", "name": "US-Dollar"},

  glance: {"plug": "A / B", "volt": 120, "adapter": "ja", "drive": "R", "water": "Trinkbar (schmeckt oft nach Chlor)", "tip": "15–20 % im Restaurant, 1–2 $ pro Drink", "dial": "+1", "voltNote": "120 V – Netzteil muss 100–240 V können", "driveNote": "Rechtsabbiegen bei Rot meist erlaubt"},
  taxi: {"local": "Please take me to this address.", "phonetic": ""},

  phrases: [
    { title: "🇺🇸 Englisch (USA)", lang: "en-US", items: [
      {"de": "Hallo / Guten Morgen", "local": "Hello / Good morning", "phonetic": ""},
      {"de": "Danke schön", "local": "Thank you very much", "phonetic": ""},
      {"de": "Entschuldigung", "local": "Excuse me / Sorry", "phonetic": ""},
      {"de": "Wie viel kostet das?", "local": "How much is this?", "phonetic": ""},
      {"de": "Die Rechnung, bitte", "local": "Could I get the check, please?", "phonetic": ""},
      {"de": "Wo ist das Krankenhaus?", "local": "Where is the hospital?", "phonetic": ""},
      {"de": "Ein großes Bier, bitte", "local": "Can I get a large beer?", "phonetic": ""},
      {"de": "Wo ist die Toilette?", "local": "Where's the restroom?", "phonetic": ""},
      {"de": "Ich bin Vegetarier/in", "local": "I'm vegetarian", "phonetic": ""},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "I don't eat meat or fish, but I do eat eggs", "phonetic": ""},
      {"de": "Das Essen war sehr lecker", "local": "That was delicious!", "phonetic": ""},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "Help! It's an emergency!", "phonetic": ""}
    ]}
  ],

  emergency: [
    ["911", "Notruf (Polizei, Rettung, Feuerwehr)"],
    ["1-800-222-1222", "Giftnotruf (Poison Control)"]
  ],
  embassy: {"title": "Deutsche Botschaft Washington", "address": ["4645 Reservoir Road NW", "Washington, DC 20007"], "phone": "+1 202 298 4000", "emergency": "+1 202 298 4000", "emergencyNote": "(zentrale Rufbereitschaft, auch nachts)"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/usa-node",

  rules: [
    ["Einreise", "Vorab ESTA online beantragen (nur auf der offiziellen Seite esta.cbp.dhs.gov). Rückflugticket und Unterkunft parat haben."],
    ["Trinkgeld", "Trinkgeld ist Teil des Lohns: 15–20 % im Restaurant, auch bei Taxi, Friseur, Zimmerservice."],
    ["Preise", "Preise sind meist ohne Umsatzsteuer angegeben – an der Kasse kommt sie noch dazu."],
    ["Krankenversicherung", "Behandlungen sind extrem teuer – Auslandskrankenversicherung mit hoher Deckung abschließen."]
  ],
  car: [
    ["Promille", "0,8 ‰ (Utah 0,5 ‰). Offene Alkoholflaschen im Auto sind verboten."],
    ["Schulbus & Kreuzungen", "Hält ein Schulbus mit Blinklicht, müssen meist beide Richtungen anhalten. An „4-Way Stops“ fährt zuerst, wer zuerst da war."],
    ["Polizei", "Bei Verkehrskontrolle im Auto sitzen bleiben, Hände ans Lenkrad, keine hektischen Bewegungen."]
  ],
  bike: [
    ["Helm", "Helmpflicht je nach Bundesstaat bzw. Stadt – für Kinder fast überall."]
  ],
  substances: [
    ["Alkohol", "Alkohol erst ab 21; Trinken in der Öffentlichkeit meist verboten. Ausweis wird oft kontrolliert."],
    ["Cannabis", "In vielen Bundesstaaten legal (ab 21), auf Bundesebene aber verboten – nie in Nationalparks, an Flughäfen oder über Staatsgrenzen."],
    ["Tabak", "Zigaretten und Vapes erst ab 21."]
  ],
  sim: [
    ["Roaming", "Viele deutsche Tarife sind in den USA teuer – vorher prüfen oder Reisepaket buchen."],
    ["eSIM", "Einfachste Lösung: vorab eSIM (z. B. Airalo) – oder Prepaid von T-Mobile, AT&T, Verizon."]
  ],
  apps: [
    ["Uber & Lyft", "Fahrdienste fast überall."],
    ["GasBuddy", "Günstigste Tankstellen finden."],
    ["Yelp", "Restaurants und Bewertungen."]
  ],

  places: [
    ["New York", 40.7128, -74.006],
    ["Los Angeles", 34.0522, -118.2437, "America/Los_Angeles"],
    ["San Francisco", 37.7749, -122.4194, "America/Los_Angeles"],
    ["Las Vegas", 36.1699, -115.1398, "America/Los_Angeles"],
    ["Miami", 25.7617, -80.1918],
    ["Chicago", 41.8781, -87.6298, "America/Chicago"],
    ["Grand Canyon", 36.0544, -112.1401, "America/Phoenix"],
    ["Honolulu", 21.3069, -157.8583, "Pacific/Honolulu"]
  ]
};
