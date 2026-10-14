/* Quick-Tools · Ägypten – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "aegypten",
  name: "Ägypten",
  flag: "🇪🇬",
  tz: "Africa/Cairo",
  currency: {"code": "EGP", "symbol": "E£", "name": "Ägyptisches Pfund"},

  glance: {"plug": "C / F", "volt": 220, "adapter": "nein", "drive": "R", "water": "Nicht trinkbar", "tip": "Bakschisch ist überall üblich (Restaurant 10 %)", "dial": "+20"},
  taxi: {"local": "لو سمحت وديني العنوان ده", "phonetic": "Law samaht, waddini el-ʿenwan da."},

  phrases: [
    { title: "🇪🇬 Ägyptisches Arabisch", lang: "ar-EG", items: [
      {"de": "Hallo", "local": "السلام عليكم", "phonetic": "Salamu alaykum"},
      {"de": "Danke", "local": "شكراً", "phonetic": "Shukran"},
      {"de": "Bitte (Anfrage)", "local": "لو سمحت", "phonetic": "Law samaht"},
      {"de": "Wie viel kostet das?", "local": "بكام ده؟", "phonetic": "Bikam da?"},
      {"de": "Nein danke (bei Händlern)", "local": "لا شكراً", "phonetic": "La, shukran"},
      {"de": "Die Rechnung, bitte", "local": "الحساب لو سمحت", "phonetic": "El-hisab law samaht"},
      {"de": "Wo ist das Krankenhaus?", "local": "فين المستشفى؟", "phonetic": "Fen el-mustashfa?"},
      {"de": "Ich bin Vegetarier/in", "local": "أنا نباتي", "phonetic": "Ana nabati"},
      {"de": "Bitte nicht scharf", "local": "مش حار لو سمحت", "phonetic": "Mesh har law samaht"},
      {"de": "Das Essen war sehr lecker", "local": "الأكل كان حلو أوي", "phonetic": "El-akl kan helw awi"},
      {"de": "Hilfe!", "local": "الحقوني!", "phonetic": "Ilhaʾuni!"}
    ]}
  ],

  emergency: [
    ["122", "Polizei"],
    ["123", "Rettungsdienst"],
    ["180", "Feuerwehr"],
    ["126", "Touristenpolizei"]
  ],
  embassy: {"title": "Deutsche Botschaft Kairo", "address": ["2 Sharia Berlin (off Sharia Hassan Sabri)", "Zamalek, Kairo 11211"], "phone": "+20 2 2728 2000"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/aegypten-node",

  rules: [
    ["Bakschisch", "Kleine Trinkgelder für Toilettenpersonal, Gepäck, Wegweiser usw. sind üblich – Kleingeld bereithalten."],
    ["Kleidung", "Außerhalb der Badeorte Schultern und Knie bedecken; in Moscheen Frauen zusätzlich Kopftuch."],
    ["Fotografieren", "Keine Fotos von Militär, Polizei, Brücken oder Regierungsgebäuden. In manchen Gräbern Fotoverbot."],
    ["Visum", "Visum bei Ankunft oder vorab als e-Visum; Reisepass muss noch mind. 6 Monate gültig sein."],
    ["Ramadan", "Im Ramadan tagsüber nicht demonstrativ in der Öffentlichkeit essen, trinken oder rauchen."]
  ],
  car: [
    ["Selbst fahren?", "Sehr chaotischer Verkehr – besser Fahrer oder App-Taxi nehmen. Viele Kontrollpunkte, Pass immer dabeihaben."]
  ],
  substances: [
    ["Alkohol", "Ab 21, nur in Hotels, lizenzierten Bars und Spezialläden. Trinken in der Öffentlichkeit ist verboten."],
    ["Medikamente", "Manche Schmerzmittel (z. B. Tramadol, Codein) sind verboten – nur mit ärztlicher Bescheinigung mitnehmen."],
    ["Drogen", "Extrem harte Strafen, auch Cannabis."]
  ],
  sim: [
    ["Lokale SIM", "Vodafone EG, Orange oder WE am Flughafen – Pass nötig."],
    ["eSIM", "Alternativ vorab eSIM (z. B. Airalo) buchen – am einfachsten schon vor dem Abflug einrichten."]
  ],
  apps: [
    ["Uber & Careem", "Fahrdienste in Kairo, Alexandria und Hurghada – Preis steht vorher fest."],
    ["Talabat", "Essen bestellen."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Kairo (Gizeh)", 30.0444, 31.2357],
    ["Luxor", 25.6872, 32.6396],
    ["Assuan", 24.0889, 32.8998],
    ["Hurghada", 27.2579, 33.8116],
    ["Sharm el-Sheikh", 27.9158, 34.33]
  ]
};
