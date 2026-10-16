/* Quick-Tools · Libanon – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "libanon",
  name: "Libanon",
  flag: "🇱🇧",
  tz: "Asia/Beirut",
  currency: {"code": "LBP", "symbol": "L£", "name": "Libanesisches Pfund", "tableDecimals": 0},

  glance: {"plug": "C / D / G", "volt": 230, "adapter": "teils – Eurostecker passt meist", "drive": "R", "water": "Nicht trinkbar", "tip": "ca. 10–15 %", "dial": "+961"},
  taxi: {"local": "لو سمحت، وصّلني على هالعنوان", "phonetic": "lau SA-macht, WAS-sil-ni a-la hal-un-WAAN"},

  phrases: [
    { title: "🇱🇧 Arabisch", lang: "ar-LB", items: [
      {"de": "Hallo / Guten Tag", "local": "مرحبا", "phonetic": "MAR-ha-ba"},
      {"de": "Danke schön", "local": "شكراً كتير", "phonetic": "SCHUK-ran k'TIIR"},
      {"de": "Entschuldigung", "local": "لو سمحت", "phonetic": "lau SA-macht"},
      {"de": "Wie viel kostet das?", "local": "قديش هاد؟", "phonetic": "ad-DEESCH HAAD"},
      {"de": "Die Rechnung, bitte", "local": "الحساب لو سمحت", "phonetic": "il-hi-SAAB, lau SA-macht"},
      {"de": "Sprechen Sie Englisch?", "local": "بتحكي إنجليزي؟", "phonetic": "BTIH-ki ing-LII-si"},
      {"de": "Wo ist das Krankenhaus?", "local": "وين المستشفى؟", "phonetic": "wein il-mus-TASCH-fa"},
      {"de": "Ein großes Bier bitte", "local": "بيرة كبيرة لو سمحت", "phonetic": "BII-ra ka-BII-re, lau SA-macht"},
      {"de": "Ich bin Vegetarier/in", "local": "أنا نباتي / نباتية", "phonetic": "A-na na-BAA-ti / na-baa-TIY-ye"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "ما باكل لحمة ولا سمك، بس باكل بيض", "phonetic": "ma BAA-kul LAH-me wa-la SA-mak, bass BAA-kul BEID"},
      {"de": "Das Essen war sehr lecker", "local": "الأكل كان كتير طيب", "phonetic": "il-AKL kaan k'TIIR TAI-yeb"},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "النجدة! في حالة طوارئ!", "phonetic": "in-NADSCH-de! fi HAA-le ta-WAA-ri"}
    ]},
    { title: "🇫🇷 Französisch", lang: "fr-LB", items: [
      {"de": "Guten Tag", "local": "Bonjour", "phonetic": "bon-SCHUR"},
      {"de": "Danke schön", "local": "Merci beaucoup", "phonetic": "mär-SI bo-KU"},
      {"de": "Die Rechnung, bitte", "local": "L'addition, s'il vous plaît", "phonetic": "la-di-SJO, sil wu PLÄ"},
      {"de": "Wo ist das Krankenhaus?", "local": "Où est l'hôpital ?", "phonetic": "u ä lo-pi-TAL"}
    ]}
  ],

  emergency: [
    ["112", "Polizei"],
    ["140", "Rettungsdienst (Rotes Kreuz)"],
    ["175", "Feuerwehr"]
  ],
  embassy: {"title": "Deutsche Botschaft Beirut", "address": ["Regent Park Tower (hinter Freeway Center), Dekwaneh", "Metn (Großraum Beirut)"], "phone": "+961 1 504 600"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/libanon-node",

  rules: [
    ["Reisewarnung", "Das Auswärtige Amt warnt vor Reisen in den Süden (südlich von Jiyeh), die Bekaa-Ebene, Baalbek-Hermel, das Grenzgebiet zu Syrien, die Palästinenserlager und die südlichen Vororte Beiruts; von Reisen in alle übrigen Landesteile wird dringend abgeraten – vor jeder Reise die aktuelle Lage prüfen."],
    ["Israel", "Wer erkennbar in Israel war (Stempel, israelische Produkte, Apps oder Fotos), kann abgewiesen werden. Israel nicht erwähnen."],
    ["Bargeld", "Wegen der Bankenkrise viel in US-Dollar bar bezahlt; Kartenzahlung nicht überall möglich – ausreichend Dollar in kleinen Scheinen mitnehmen."],
    ["Strom", "Häufige Stromausfälle; viele Häuser laufen über Generatoren."],
    ["Kleidung", "In Beirut locker, in religiösen Stätten und auf dem Land Schultern und Knie bedecken."]
  ],
  car: [
    ["Verkehr", "Chaotischer Verkehr, kaum Regeln – besser App-Taxi oder Fahrer. Kontrollpunkte von Armee und Polizei: Pass dabeihaben."]
  ],
  substances: [
    ["Alkohol", "Ab 18, überall erhältlich – Libanon hat eine lange Wein- und Arak-Tradition."],
    ["Drogen", "Drogendelikte werden hart bestraft, auch Cannabis."]
  ],
  sim: [
    ["Lokale SIM", "alfa oder touch – Pass nötig; mobile Daten sind relativ teuer."],
    ["eSIM", "Alternativ vorab eSIM (z. B. Airalo) buchen – am einfachsten schon vor dem Abflug einrichten."]
  ],
  apps: [
    ["Uber & Bolt", "Fahrdienste in Beirut – Preis steht vorher fest."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Beirut", 33.8938, 35.5018],
    ["Byblos", 34.1236, 35.6511],
    ["Baalbek", 34.0069, 36.2181],
    ["Jeita-Grotte", 33.9437, 35.6411],
    ["Zedern von Bscharri", 34.2436, 36.0118]
  ]
};
