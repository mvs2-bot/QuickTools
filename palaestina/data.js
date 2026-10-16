/* Quick-Tools · Palästina – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "palaestina",
  name: "Palästina",
  flag: "🇵🇸",
  tz: "Asia/Hebron",
  currency: {"code": "ILS", "symbol": "₪", "name": "Israelischer Schekel"},

  glance: {"plug": "C / H", "volt": 230, "adapter": "teils – Eurostecker passt meist", "drive": "R", "water": "Nicht empfohlen – Flaschenwasser", "tip": "ca. 10 %", "dial": "+970"},
  taxi: {"local": "لو سمحت، وصّلني على هالعنوان", "phonetic": "lau SA-macht, WAS-sil-ni a-la hal-un-WAAN"},

  phrases: [
    { title: "🇵🇸 Arabisch", lang: "ar-PS", items: [
      {"de": "Hallo / Guten Tag", "local": "مرحبا", "phonetic": "MAR-ha-ba"},
      {"de": "Danke schön", "local": "شكراً كتير", "phonetic": "SCHUK-ran k'TIIR"},
      {"de": "Entschuldigung", "local": "لو سمحت", "phonetic": "lau SA-macht"},
      {"de": "Wie viel kostet das?", "local": "قديش هاد؟", "phonetic": "ad-DEESCH HAAD"},
      {"de": "Die Rechnung, bitte", "local": "الحساب لو سمحت", "phonetic": "il-hi-SAAB, lau SA-macht"},
      {"de": "Sprechen Sie Englisch?", "local": "بتحكي إنجليزي؟", "phonetic": "BTIH-ki ing-LII-si"},
      {"de": "Wo ist das Krankenhaus?", "local": "وين المستشفى؟", "phonetic": "wein il-mus-TASCH-fa"},
      {"de": "Eine Flasche Wasser, bitte", "local": "قنينة مي لو سمحت", "phonetic": "an-NII-nit MAI, lau SA-macht"},
      {"de": "Ich bin Vegetarier/in", "local": "أنا نباتي / نباتية", "phonetic": "A-na na-BAA-ti / na-baa-TIY-ye"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "ما باكل لحمة ولا سمك، بس باكل بيض", "phonetic": "ma BAA-kul LAH-me wa-la SA-mak, bass BAA-kul BEID"},
      {"de": "Das Essen war sehr lecker", "local": "الأكل كان كتير طيب", "phonetic": "il-AKL kaan k'TIIR TAI-yeb"},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "النجدة! في حالة طوارئ!", "phonetic": "in-NADSCH-de! fi HAA-le ta-WAA-ri"}
    ]}
  ],

  status: [
    ["Staatlichkeit", "Palästina ist seit 2012 Beobachterstaat der Vereinten Nationen und wird von vielen Staaten als Staat anerkannt. Deutschland erkennt Palästina bislang nicht als Staat an."],
    ["Gebiete", "Westjordanland (mit Ostjerusalem) und Gazastreifen gelten völkerrechtlich als von Israel besetzt. Die Palästinensische Autonomiebehörde verwaltet nur Teile des Westjordanlands; Ein- und Ausreise kontrolliert Israel."]
  ],
  emergency: [
    ["100", "Polizei"],
    ["101", "Rettungsdienst (Roter Halbmond)"],
    ["102", "Feuerwehr"]
  ],
  embassy: {"title": "Vertretungsbüro der Bundesrepublik Deutschland Ramallah", "address": ["Al-Erssal Street", "Ramallah"], "phone": "+970 2 297 7630"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/palaestinensischegebiete-node",

  rules: [
    ["Reisewarnung", "Das Auswärtige Amt warnt vor Reisen in den Gazastreifen und rät von Reisen ins Westjordanland ab – vor jeder Reise die aktuelle Lage prüfen."],
    ["Einreise", "Nur über Israel (ETA-IL nötig) oder von Jordanien über die Allenby-/König-Hussein-Brücke; Israel kontrolliert alle Übergänge."],
    ["Kontrollpunkte", "Zwischen Israel und dem Westjordanland sowie innerhalb davon gibt es Checkpoints – Pass immer dabeihaben, Wartezeiten einplanen."],
    ["Kleidung", "Schultern und Knie bedecken, besonders in Moscheen, Kirchen und in Hebron oder Nablus."],
    ["Ramadan", "Im Ramadan tagsüber nicht demonstrativ in der Öffentlichkeit essen, trinken oder rauchen."]
  ],
  car: [
    ["Mietwagen", "Israelische Mietwagen sind in den palästinensischen A-Gebieten meist nicht versichert – besser palästinensisches Taxi oder Mietwagen aus Ramallah/Ostjerusalem."]
  ],
  substances: [
    ["Alkohol", "In christlichen Orten (Bethlehem, Ramallah, Taybeh mit eigener Brauerei) erhältlich, sonst kaum; nicht in der Öffentlichkeit trinken."],
    ["Drogen", "Drogendelikte werden hart bestraft."]
  ],
  sim: [
    ["Lokale SIM", "Jawwal oder Ooredoo Palestine – Pass nötig. Israelische SIM/eSIM funktioniert in weiten Teilen des Westjordanlands."]
  ],
  apps: [
    ["WhatsApp", "Wichtigster Kommunikationsweg vor Ort."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Ramallah", 31.9038, 35.2034],
    ["Bethlehem", 31.7054, 35.2024],
    ["Jericho", 31.8667, 35.45],
    ["Hebron", 31.5326, 35.0998],
    ["Nablus", 32.2211, 35.2544]
  ]
};
