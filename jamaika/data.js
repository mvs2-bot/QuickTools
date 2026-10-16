/* Quick-Tools · Jamaika – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "jamaika",
  name: "Jamaika",
  flag: "🇯🇲",
  tz: "America/Jamaica",
  currency: {"code": "JMD", "symbol": "J$", "name": "Jamaika-Dollar", "tableDecimals": 0},

  glance: {"plug": "A / B", "volt": 110, "adapter": "ja", "drive": "L", "water": "In Städten und Hotels meist trinkbar, sonst Flaschenwasser", "tip": "10–15 %, falls kein Service berechnet", "dial": "+1", "voltNote": "110 V – Netzteil muss 100–240 V können"},
  taxi: {"local": "Please take me to this address.", "phonetic": "pliis TEIK mi tu dis e-DRES"},

  phrases: [
    { title: "🇯🇲 Englisch", lang: "en-JM", items: [
      {"de": "Hallo / Guten Tag", "local": "Hello / Good day", "phonetic": "he-LOU / gud DEI"},
      {"de": "Danke schön", "local": "Thank you very much", "phonetic": "SÄNK ju WE-ri matsch"},
      {"de": "Entschuldigung", "local": "Excuse me / Sorry", "phonetic": "iks-KJUS mi / SO-ri"},
      {"de": "Wie viel kostet das?", "local": "How much is this?", "phonetic": "hau MATSCH is DIS"},
      {"de": "Die Rechnung, bitte", "local": "Could I have the bill, please?", "phonetic": "kud ai häw se BILL, pliis"},
      {"de": "Wo ist die Toilette?", "local": "Where is the toilet?", "phonetic": "wär is se TOI-let"},
      {"de": "Wo ist das Krankenhaus?", "local": "Where is the hospital?", "phonetic": "wär is se HOS-pi-tl"},
      {"de": "Ein großes Bier bitte", "local": "A large beer, please", "phonetic": "e LAADSCH bier, pliis"},
      {"de": "Ich bin Vegetarier/in", "local": "I'm vegetarian", "phonetic": "aim we-dschi-TÄ-ri-en"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "I don't eat meat or fish, but I do eat eggs", "phonetic": "ai DOUNT iit MIIT or FISCH, bat ai DU iit ÄGS"},
      {"de": "Das Essen war sehr lecker", "local": "That was delicious!", "phonetic": "dät wos di-LI-schos"},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "Help! It's an emergency!", "phonetic": "HELP! its en i-MÖR-dschen-si"}
    ]},
    { title: "🇯🇲 Patois (Grüße)", lang: "en-JM", items: [
      {"de": "Was geht? / Wie geht’s?", "local": "Wah gwaan?", "phonetic": "wa GWAAN"},
      {"de": "Alles gut / entspannt", "local": "Irie", "phonetic": "EI-ri"},
      {"de": "Bis später", "local": "Likkle more", "phonetic": "LI-kl MOR"},
      {"de": "Respekt / Danke", "local": "Respek!", "phonetic": "ri-SPEK"},
      {"de": "Gleich (heißt oft: irgendwann)", "local": "Soon come", "phonetic": "suun KAM"}
    ]}
  ],

  emergency: [
    ["119", "Polizei"],
    ["110", "Rettungsdienst & Feuerwehr"]
  ],
  embassy: {"title": "Deutsche Botschaft Kingston", "address": ["10 Waterloo Road", "Kingston 10"], "phone": "+1 876 926 6728"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/jamaika-node",

  rules: [
    ["Sicherheit", "Hohe Gewaltkriminalität in Teilen von Kingston und Montego Bay – nachts nicht zu Fuß, Wertsachen nicht zeigen."],
    ["Taxi", "Nur lizenzierte Taxis mit rotem Kennzeichen (PPV) oder über das Hotel; Preis vorher vereinbaren."],
    ["Gesetze", "Sex zwischen Männern ist gesetzlich verboten; öffentliche Zärtlichkeiten unter Gleichgeschlechtlichen besser vermeiden."],
    ["Tarnkleidung", "Kleidung im Camouflage-Muster ist Zivilisten verboten – auch für Kinder."],
    ["Hurrikansaison", "Juni bis November – Wetterwarnungen verfolgen und Reiserücktritts-/Reiseversicherung prüfen."]
  ],
  car: [
    ["Linksverkehr", "Viele Schlaglöcher, riskante Überholmanöver – nachts nicht über Land fahren."]
  ],
  substances: [
    ["Cannabis", "Besitz kleiner Mengen (bis ca. 57 g) ist nur eine Ordnungswidrigkeit; Rauchen in der Öffentlichkeit ist verboten, Ausfuhr streng strafbar – am Flughafen wird kontrolliert."],
    ["Alkohol", "Ab 18 Jahren."]
  ],
  sim: [
    ["Roaming", "Kein EU-Roaming – deutsche Tarife sind hier oft sehr teuer. Tarif vorher prüfen oder Datenroaming ausschalten."],
    ["Lokale SIM / eSIM", "Digicel oder Flow am Flughafen (Pass nötig) – oder vorab eSIM."]
  ],
  apps: [
    ["Knutsford Express", "Komfortable Fernbusse zwischen Kingston, Ocho Rios, Montego Bay und Negril."],
    ["WhatsApp", "Gängig für Taxis, Unterkünfte und Touranbieter."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Kingston", 17.9714, -76.7931],
    ["Montego Bay", 18.4762, -77.8939],
    ["Negril", 18.2683, -78.3478],
    ["Ocho Rios", 18.4077, -77.1031],
    ["Port Antonio", 18.1767, -76.4503]
  ]
};
