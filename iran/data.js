/* Quick-Tools · Iran – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "iran",
  name: "Iran",
  flag: "🇮🇷",
  tz: "Asia/Tehran",
  currency: {"code": "IRR", "symbol": "IRR", "name": "Iranischer Rial", "tableDecimals": 0},

  glance: {"plug": "C / F", "volt": 220, "adapter": "nein", "drive": "R", "water": "Nicht empfohlen – Flaschenwasser", "tip": "ca. 5–10 %", "dial": "+98"},
  taxi: {"local": "لطفاً منو به این آدرس ببرید", "phonetic": "LOT-fan MA-no be in aad-RES be-ba-RID"},

  phrases: [
    { title: "🇮🇷 Persisch (Farsi)", lang: "fa-IR", items: [
      {"de": "Hallo / Guten Tag", "local": "سلام", "phonetic": "sa-LAAM"},
      {"de": "Danke schön", "local": "خیلی ممنون", "phonetic": "CHEI-li mam-NUUN"},
      {"de": "Entschuldigung", "local": "ببخشید", "phonetic": "be-bach-SCHID"},
      {"de": "Wie viel kostet das?", "local": "این چنده؟", "phonetic": "in TSCHAN-de"},
      {"de": "Die Rechnung, bitte", "local": "صورت‌حساب، لطفاً", "phonetic": "su-RAT-he-saab, LOT-fan"},
      {"de": "Sprechen Sie Englisch?", "local": "انگلیسی بلدید؟", "phonetic": "en-ge-LI-si ba-la-DID"},
      {"de": "Wo ist das Krankenhaus?", "local": "بیمارستان کجاست؟", "phonetic": "bi-maa-res-TAAN ko-DSCHAAST"},
      {"de": "Eine Flasche Wasser, bitte", "local": "یک بطری آب، لطفاً", "phonetic": "jek bot-RI aab, LOT-fan"},
      {"de": "Ich bin Vegetarier/in", "local": "من گیاهخوارم", "phonetic": "man gi-yaah-CHAA-ram"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "گوشت و ماهی نمی‌خورم، ولی تخم‌مرغ می‌خورم", "phonetic": "guscht o maa-HI NE-mi-cho-ram, wa-LI tochm-MORGH MI-cho-ram"},
      {"de": "Das Essen war sehr lecker", "local": "غذا خیلی خوشمزه بود", "phonetic": "gha-SAA CHEI-li chosch-ma-SE bud"},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "کمک! اورژانسیه!", "phonetic": "ko-MAK! ur-schaan-SI-ye"}
    ]}
  ],

  emergency: [
    ["110", "Polizei"],
    ["115", "Rettungsdienst"],
    ["125", "Feuerwehr"]
  ],
  embassy: {"title": "Deutsche Botschaft Teheran", "address": ["Ferdowsi Avenue 320–324", "Teheran"], "phone": "+98 21 3999 0000", "emergencyNote": "Die Botschaft war 2025 zeitweise geschlossen – Erreichbarkeit vor der Reise prüfen."},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/iran-node",

  rules: [
    ["Reisewarnung", "Das Auswärtige Amt warnt vor Reisen nach Iran – vor jeder Reise die aktuelle Lage prüfen."],
    ["Festnahmen", "Deutsche, besonders mit doppelter Staatsangehörigkeit, wurden wiederholt willkürlich festgenommen. Doppelstaater gelten in Iran nur als Iraner."],
    ["Kleidung", "Frauen müssen in der Öffentlichkeit Kopftuch und weite, lange Kleidung tragen; Männer keine kurzen Hosen."],
    ["Bargeld", "Wegen der Sanktionen funktionieren ausländische Bank- und Kreditkarten nicht – alles Geld bar (Euro) mitnehmen. Preise werden oft in Toman genannt (1 Toman = 10 Rial)."],
    ["Fotografieren", "Keine Fotos von Militär, Polizei, Regierungsgebäuden oder Demonstrationen; Menschen nur mit Erlaubnis."],
    ["Internet", "Viele Websites und Apps (z. B. Instagram, WhatsApp) sind gesperrt; die Nutzung von VPN ist verbreitet, aber rechtlich heikel."]
  ],
  car: [
    ["Verkehr", "Sehr chaotischer Verkehr – besser App-Taxi oder Fahrer nehmen."],
    ["Promille", "0,0 ‰ – Alkohol ist ohnehin verboten."]
  ],
  substances: [
    ["Alkohol", "Komplett verboten – Besitz, Konsum und Einfuhr werden hart bestraft, auch mit Peitschenhieben."],
    ["Drogen", "Drogendelikte werden extrem hart bestraft, bis hin zur Todesstrafe."]
  ],
  sim: [
    ["Lokale SIM", "MCI (Hamrahe Aval) oder Irancell – Touristen-SIM am Flughafen, Pass nötig. Ausländische eSIMs funktionieren oft nicht."]
  ],
  apps: [
    ["Snapp", "Fahrdienst (iranisches Uber) – braucht lokale Nummer."],
    ["Neshan", "Iranische Navigations-App, oft genauer als Google Maps."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Teheran", 35.6892, 51.389],
    ["Isfahan", 32.6546, 51.668],
    ["Schiras", 29.5918, 52.5837],
    ["Yazd", 31.8974, 54.3569],
    ["Persepolis", 29.9355, 52.8916]
  ]
};
