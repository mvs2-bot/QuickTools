/* Quick-Tools · Jemen – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "jemen",
  name: "Jemen",
  flag: "🇾🇪",
  tz: "Asia/Aden",
  currency: {"code": "YER", "symbol": "YR", "name": "Jemen-Rial", "tableDecimals": 0},

  glance: {"plug": "A / D / G", "volt": 230, "adapter": "ja", "drive": "R", "water": "Nicht trinkbar", "tip": "Kleines Trinkgeld willkommen", "dial": "+967"},
  taxi: {"local": "لو سمحت، ودّني على هذا العنوان", "phonetic": "lau SA-macht, WAD-di-ni a-la HAA-dha il-un-WAAN"},

  phrases: [
    { title: "🇾🇪 Arabisch", lang: "ar-YE", items: [
      {"de": "Hallo / Guten Tag", "local": "السلام عليكم", "phonetic": "as-sa-LAA-mu a-LAI-kum"},
      {"de": "Danke schön", "local": "شكراً جزيلاً", "phonetic": "SCHUK-ran dscha-SII-lan"},
      {"de": "Entschuldigung", "local": "لو سمحت", "phonetic": "lau SA-macht"},
      {"de": "Wie viel kostet das?", "local": "بكم هذا؟", "phonetic": "BI-kam HAA-dha"},
      {"de": "Die Rechnung, bitte", "local": "الحساب لو سمحت", "phonetic": "il-hi-SAAB, lau SA-macht"},
      {"de": "Sprechen Sie Englisch?", "local": "تتكلم إنجليزي؟", "phonetic": "ta-TA-kal-lam ing-LII-si"},
      {"de": "Wo ist das Krankenhaus?", "local": "وين المستشفى؟", "phonetic": "wein il-mus-TASCH-fa"},
      {"de": "Eine Flasche Wasser, bitte", "local": "زجاجة ماء لو سمحت", "phonetic": "su-DSCHAA-dschat MAA, lau SA-macht"},
      {"de": "Ich bin Vegetarier/in", "local": "أنا نباتي / نباتية", "phonetic": "A-na na-BAA-ti / na-baa-TII-ya"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "ما آكل لحم ولا سمك، بس آكل بيض", "phonetic": "ma AA-kul LAHM wa-la SA-mak, bass AA-kul BEID"},
      {"de": "Das Essen war sehr lecker", "local": "الأكل كان لذيذ جداً", "phonetic": "il-AKL kaan la-DHIIDH DSCHID-dan"},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "النجدة! حالة طوارئ!", "phonetic": "an-NADSCH-da! HAA-lat ta-WAA-ri"}
    ]}
  ],

  status: [
    ["Geteiltes Land", "Seit dem Bürgerkrieg kontrollieren die Huthi den Norden mit der Hauptstadt Sanaa; die international anerkannte Regierung sitzt in Aden. Einreise und Visa unterscheiden sich je nach Gebiet."]
  ],
  emergency: [
    ["194", "Polizei"],
    ["191", "Rettungsdienst & Feuerwehr"]
  ],
  embassy: {"title": "Zuständig: Deutsche Botschaft Riad (Saudi-Arabien)", "address": ["Diplomatic Quarter", "Riad"], "phone": "+966 11 277 6900", "emergencyNote": "Die Botschaft in Sanaa ist seit 2015 geschlossen – konsularische Hilfe im Jemen ist praktisch nicht möglich."},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/jemen-node",

  rules: [
    ["Reisewarnung", "Das Auswärtige Amt warnt vor Reisen in den Jemen – vor jeder Reise die aktuelle Lage prüfen."],
    ["Sicherheit", "Bürgerkrieg, Entführungsgefahr und Kontrollpunkte bewaffneter Gruppen im ganzen Land. Ausländer wurden mehrfach festgenommen."],
    ["Sokotra", "Die Insel ist nur über wenige Flüge (meist ab Abu Dhabi) und mit organisierter Tour erreichbar."],
    ["Kleidung", "Konservativ kleiden – lange Hosen und Ärmel; Frauen mit Kopftuch."],
    ["Fotografieren", "Keine Fotos von Militär, Kontrollpunkten oder Regierungsgebäuden; Menschen, vor allem Frauen, nur mit Erlaubnis."]
  ],
  car: [
    ["Selbst fahren?", "Nicht empfohlen – viele Kontrollpunkte, Minen in umkämpften Gebieten. Nur mit ortskundigem Fahrer."]
  ],
  substances: [
    ["Alkohol", "Verboten, Einfuhr ebenfalls."],
    ["Kat", "Das Kauen der Kat-Blätter ist im Jemen legal und weit verbreitet – in Deutschland ist Kat verboten, nicht mitnehmen."],
    ["Drogen", "Drogendelikte werden extrem hart bestraft, bis hin zur Todesstrafe."]
  ],
  sim: [
    ["Lokale SIM", "Yemen Mobile oder YOU – Pass nötig; Netz und Internet oft eingeschränkt oder abgeschaltet."]
  ],
  apps: [
    ["WhatsApp", "Wichtigster Kommunikationsweg vor Ort."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Sanaa", 15.3694, 44.191],
    ["Aden", 12.7855, 45.0187],
    ["Sokotra (Hadibu)", 12.6519, 54.0237],
    ["Schibam", 15.9268, 48.6268],
    ["Mukalla", 14.5425, 49.1242]
  ]
};
