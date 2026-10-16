/* Quick-Tools · Osttimor – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "osttimor",
  name: "Osttimor",
  flag: "🇹🇱",
  tz: "Asia/Dili",
  currency: {"code": "USD", "symbol": "$", "name": "US-Dollar (offizielle Währung)"},

  glance: {"plug": "C / E / F / I", "volt": 220, "adapter": "teils – Eurostecker passt meist", "drive": "L", "water": "Nicht trinkbar", "tip": "Nicht üblich", "dial": "+670"},
  taxi: {"local": "Favór ida, lori ha'u ba enderesu ne'e.", "phonetic": "fa-WOR I-da, LO-ri HA-u ba en-de-RE-su NE-e"},

  phrases: [
    { title: "🇹🇱 Tetum", lang: "tet-TL", items: [
      {"de": "Hallo / Guten Tag", "local": "Bondia / Botarde", "phonetic": "bon-DI-a / bo-TAR-de"},
      {"de": "Danke schön", "local": "Obrigadu barak / Obrigada barak", "phonetic": "o-bri-GA-du BA-rak / o-bri-GA-da BA-rak"},
      {"de": "Entschuldigung", "local": "Deskulpa", "phonetic": "des-KUL-pa"},
      {"de": "Wie viel kostet das?", "local": "Ida ne'e folin hira?", "phonetic": "I-da NE-e FO-lin HI-ra"},
      {"de": "Ich möchte bezahlen", "local": "Ha'u hakarak selu", "phonetic": "HA-u ha-KA-rak SE-lu"},
      {"de": "Sprechen Sie Englisch?", "local": "Ita koalia Inglés?", "phonetic": "I-ta ko-a-LI-a ing-LES"},
      {"de": "Wo ist das Krankenhaus?", "local": "Ospitál iha ne'ebé?", "phonetic": "os-pi-TAL I-ha ne-e-BE"},
      {"de": "Ich esse kein Fleisch", "local": "Ha'u la han na'an", "phonetic": "HA-u la HAN NA-an"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "Ha'u la han na'an no ikan, maibé ha'u han manutolun", "phonetic": "HA-u la HAN NA-an no I-kan, mai-BE HA-u HAN ma-nu-TO-lun"},
      {"de": "Das Essen war sehr lecker", "local": "Hahán ne'e gostu tebes!", "phonetic": "ha-HAN NE-e GOS-tu TE-bes"},
      {"de": "Hilfe!", "local": "Tulun!", "phonetic": "TU-lun"}
    ]},
    { title: "🇵🇹 Portugiesisch (Amtssprache)", lang: "pt-PT", items: [
      {"de": "Guten Tag", "local": "Bom dia", "phonetic": "bõ DI-a"},
      {"de": "Danke schön", "local": "Muito obrigado / obrigada", "phonetic": "MUIN-tu o-bri-GA-du / -da"},
      {"de": "Sprechen Sie Englisch?", "local": "Fala inglês?", "phonetic": "FA-la in-GLESCH"},
      {"de": "Wo ist das Krankenhaus?", "local": "Onde fica o hospital?", "phonetic": "ON-de FI-ka u osch-pi-TAL"}
    ]}
  ],

  emergency: [
    ["112", "Polizei"],
    ["110", "Rettungsdienst"],
    ["115", "Feuerwehr"]
  ],
  embassy: {"title": "Zuständig: Deutsche Botschaft Jakarta (Indonesien)", "address": ["Jalan M. H. Thamrin No. 1", "Jakarta 10310", "Honorarkonsulin Dili: Rua St. Antonio 11, Farol-Palapaso, Tel. +670 7802 4018"], "phone": "+62 21 3985 5000", "emergency": "+62 811 152 526", "emergencyNote": "(nicht für Visafragen)"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/timorleste-node",

  rules: [
    ["US-Dollar", "Bezahlt wird in US-Dollar (dazu lokale Centavo-Münzen). Viel Bargeld mitnehmen – Karten werden kaum akzeptiert, Geldautomaten fast nur in Dili."],
    ["Krokodile", "An vielen Küsten und Flussmündungen leben Salzwasserkrokodile – nur an empfohlenen Stellen baden, nachts nicht ins Wasser."],
    ["Kirche", "Das Land ist streng katholisch: In Kirchen und Dörfern Schultern und Knie bedecken."],
    ["Infrastruktur", "Außerhalb von Dili schlechte Straßen, wenig Unterkünfte und kaum medizinische Versorgung – Auslandskrankenversicherung mit Rücktransport abschließen."]
  ],
  car: [
    ["Straßen", "Linksverkehr. Viele Pisten nur mit Allrad befahrbar, in der Regenzeit oft unpassierbar. Nicht nachts fahren."]
  ],
  substances: [
    ["Alkohol", "Lokaler Palmschnaps (Tua Sabu) ist sehr stark."],
    ["Drogen", "Verboten; Drogendelikte werden mit Haftstrafen geahndet."]
  ],
  sim: [
    ["Lokale SIM", "Telkomcel, Timor Telecom oder Telemor in Dili – Pass nötig. Außerhalb der Städte oft schwaches Netz."]
  ],
  apps: [
    ["WhatsApp", "Unterkünfte, Fahrer und Tauchbasen sind meist darüber erreichbar."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Dili", -8.5569, 125.5603],
    ["Atauro", -8.2236, 125.6017],
    ["Baucau", -8.4667, 126.45],
    ["Jaco-Insel", -8.425, 127.33],
    ["Maubisse", -8.8392, 125.5967]
  ]
};
