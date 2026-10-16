/* Quick-Tools · Syrien – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "syrien",
  name: "Syrien",
  flag: "🇸🇾",
  tz: "Asia/Damascus",
  currency: {"code": "SYP", "symbol": "LS", "name": "Syrisches Pfund", "tableDecimals": 0},

  glance: {"plug": "C / E / L", "volt": 220, "adapter": "nein", "drive": "R", "water": "Nicht trinkbar", "tip": "ca. 10 %", "dial": "+963"},
  taxi: {"local": "لو سمحت، وصّلني على هالعنوان", "phonetic": "lau SA-macht, WAS-sil-ni a-la hal-un-WAAN"},

  phrases: [
    { title: "🇸🇾 Arabisch", lang: "ar-SY", items: [
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
    ["Gebiete", "Nach dem Sturz der Assad-Regierung Ende 2024 kontrolliert die Übergangsregierung in Damaskus nicht das ganze Land: Teile des Nordostens werden von kurdisch geführten Kräften (SDF) verwaltet, die Golanhöhen sind seit 1967 von Israel besetzt."]
  ],
  emergency: [
    ["112", "Polizei"],
    ["110", "Rettungsdienst"],
    ["113", "Feuerwehr"]
  ],
  embassy: {"title": "Zuständig: Deutsche Botschaft Beirut (Libanon)", "address": ["Rabieh, Mtaileb, Jasmine Street", "Beirut"], "phone": "+961 4 935 000", "emergencyNote": "Die Botschaft in Damaskus ist seit 2025 wieder mit einem kleinen Team besetzt, bietet aber nur eingeschränkt konsularische Hilfe."},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/syrien-node",

  rules: [
    ["Reisewarnung", "Das Auswärtige Amt warnt vor Reisen nach Syrien – vor jeder Reise die aktuelle Lage prüfen."],
    ["Sicherheit", "Gefahr durch bewaffnete Konflikte, Anschläge, Entführungen sowie Minen und Blindgänger, auch in ehemals umkämpften Städten."],
    ["Bargeld", "Internationale Bank- und Kreditkarten funktionieren kaum – genug Bargeld (US-Dollar oder Euro) mitnehmen."],
    ["Kleidung", "Konservativ kleiden; in Moscheen Frauen mit Kopftuch, Schuhe ausziehen."],
    ["Fotografieren", "Keine Fotos von Militär, Kontrollpunkten oder Regierungsgebäuden; Menschen nur mit Erlaubnis."]
  ],
  car: [
    ["Selbst fahren?", "Nicht empfohlen – viele Kontrollpunkte, Minen abseits der Hauptstraßen. Nur mit ortskundigem Fahrer."]
  ],
  substances: [
    ["Alkohol", "Regional unterschiedlich erhältlich, vor allem in christlichen Vierteln; nicht in der Öffentlichkeit trinken."],
    ["Drogen", "Drogendelikte werden extrem hart bestraft."]
  ],
  sim: [
    ["Lokale SIM", "Syriatel oder MTN Syria – Pass nötig, Internet langsam und teils eingeschränkt."]
  ],
  apps: [
    ["WhatsApp", "Wichtigster Kommunikationsweg vor Ort."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Damaskus", 33.5138, 36.2765],
    ["Aleppo", 36.2021, 37.1343],
    ["Palmyra", 34.5503, 38.2691],
    ["Krak des Chevaliers", 34.7569, 36.2945],
    ["Latakia", 35.5317, 35.7915]
  ]
};
