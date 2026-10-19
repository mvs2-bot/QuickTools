/* Quick-Tools · Mosambik – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "mosambik",
  name: "Mosambik",
  flag: "🇲🇿",
  tz: "Africa/Maputo",
  currency: {"code": "MZN", "symbol": "MT", "name": "Mosambikanischer Metical"},

  glance: {"plug": "C / F / M", "volt": 220, "adapter": "teils – Eurostecker passt meist", "drive": "L", "water": "Nicht trinkbar", "tip": "ca. 10 %", "dial": "+258"},
  taxi: {"local": "Leve-me a este endereço, por favor.", "phonetic": "LE-we-me a ESCH-te en-de-RE-su, pur fa-WOR"},

  phrases: [
    { title: "🇲🇿 Portugiesisch", lang: "pt-MZ", items: [
      {"de": "Hallo / Guten Tag", "local": "Olá / Bom dia", "phonetic": "o-LA / bong DI-a"},
      {"de": "Danke schön", "local": "Muito obrigado / obrigada", "phonetic": "MUIN-tu o-bri-GA-du / -da"},
      {"de": "Entschuldigung", "local": "Desculpe", "phonetic": "desch-KUL-pe"},
      {"de": "Wie viel kostet das?", "local": "Quanto custa?", "phonetic": "KUAN-tu KUSCH-ta"},
      {"de": "Die Rechnung, bitte", "local": "A conta, por favor", "phonetic": "a KON-ta, pur fa-WOR"},
      {"de": "Sprechen Sie Englisch?", "local": "Fala inglês?", "phonetic": "FA-la in-GLESCH"},
      {"de": "Wo ist das Krankenhaus?", "local": "Onde fica o hospital?", "phonetic": "ON-de FI-ka u osch-pi-TAL"},
      {"de": "Ein großes Bier bitte", "local": "Uma cerveja grande, por favor", "phonetic": "U-ma ser-WE-scha GRAN-de, pur fa-WOR"},
      {"de": "Ich bin Vegetarier/in", "local": "Sou vegetariano / vegetariana", "phonetic": "so we-sche-ta-RJA-nu / -na"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "Não como carne nem peixe, mas como ovos", "phonetic": "naung KO-mu KAR-ne neng PEI-sche, mas KO-mu O-wusch"},
      {"de": "Das Essen war sehr lecker", "local": "A comida estava deliciosa", "phonetic": "a ku-MI-da isch-TA-wa de-li-SJO-sa"},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "Socorro! É uma emergência!", "phonetic": "su-KO-hu! ä U-ma i-mer-SCHEN-sja"}
    ]}
  ],

  emergency: [
    ["119", "Polizei"],
    ["117", "Rettungsdienst"],
    ["198", "Feuerwehr"]
  ],
  embassy: {"title": "Deutsche Botschaft Maputo", "address": ["Rua Damião de Góis 506", "Maputo"], "phone": "+258 21 482 700", "emergency": "+258 82 303 33 00", "emergencyNote": "(außerhalb der Öffnungszeiten, alternativ +258 84 303 33 00 – keine Visaanfragen)"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/mosambik-node",

  rules: [
    ["Teilreisewarnung", "Das Auswärtige Amt warnt vor Reisen in die Provinz Cabo Delgado (alle Distrikte außer Pemba) sowie in die Distrikte Memba und Erati (Provinz Nampula) und Mecula und Marrupa (Provinz Niassa) – vor jeder Reise die aktuelle Lage prüfen."],
    ["Einreise", "Vorab online über evisa.gov.mz registrieren: eTA für bis zu 30 Tage (ca. 41 €). Reisepass mindestens 6 Monate gültig und unbeschädigt."],
    ["Malaria", "Ganzjährig Risiko – Mückenschutz (lange Kleidung, Repellent, Netz) und vorher ärztliche Beratung zur Prophylaxe."],
    ["Ausweis", "Pass im Original immer dabeihaben, Kopien getrennt aufbewahren – die Polizei kontrolliert häufig."],
    ["Fotografieren", "Keine Fotos von Regierungsgebäuden, Militär, Polizei, Flughäfen und Brücken."],
    ["Sprache", "Amtssprache ist Portugiesisch, Englisch sprechen vor allem Hotels und Tauchschulen."]
  ],
  car: [
    ["Promille", "Am besten gar nicht trinken und fahren – Kontrollen und Unfallrisiko sind hoch."],
    ["Ausrüstung", "Zwei Warndreiecke und Warnweste sind Pflicht – fehlt etwas, wird bei Kontrollen kassiert."],
    ["Nachtfahrten", "Nachts nicht über Land fahren – unbeleuchtete Fahrzeuge, Fußgänger und Tiere auf der Straße."]
  ],
  substances: [
    ["Alkohol", "Ab 18 Jahren."],
    ["Drogen", "Auch Cannabis ist verboten; Drogendelikte werden streng bestraft."]
  ],
  sim: [
    ["Lokale SIM", "Vodacom, Movitel oder Tmcel im Shop – Pass nötig (Registrierung)."],
    ["eSIM", "Alternativ vorab eSIM (z. B. Airalo) buchen – am einfachsten schon vor dem Abflug einrichten."]
  ],
  apps: [
    ["WhatsApp", "Unterkünfte, Guides und Fahrer sind meist per WhatsApp erreichbar."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Maputo", -25.9692, 32.5732],
    ["Tofo", -23.8517, 35.5444],
    ["Vilankulo (Bazaruto-Archipel)", -21.995, 35.3165],
    ["Ilha de Moçambique", -15.0342, 40.7358],
    ["Inhambane", -23.865, 35.383]
  ]
};
