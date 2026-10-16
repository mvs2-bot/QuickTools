/* Quick-Tools · Sudan – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "sudan",
  name: "Sudan",
  flag: "🇸🇩",
  tz: "Africa/Khartoum",
  currency: {"code": "SDG", "symbol": "SDG", "name": "Sudanesisches Pfund", "tableDecimals": 0},

  glance: {"plug": "C / D", "volt": 230, "adapter": "teils – Eurostecker passt meist", "drive": "R", "water": "Nicht trinkbar", "tip": "Nicht üblich, kleine Beträge werden geschätzt", "dial": "+249"},
  taxi: {"local": "لو سمحت، وصّلني للعنوان ده", "phonetic": "lau sa-MAHT, was-SIL-ni lil-un-WAN da"},

  phrases: [
    { title: "🇸🇩 Sudanesisches Arabisch", lang: "ar-SD", items: [
      {"de": "Hallo / Guten Tag", "local": "السلام عليكم", "phonetic": "as-sa-LAM a-LEI-kum"},
      {"de": "Danke schön", "local": "شكرًا جزيلًا", "phonetic": "SCHUK-ran dsche-ZI-lan"},
      {"de": "Entschuldigung", "local": "معليش", "phonetic": "ma-a-LESCH"},
      {"de": "Wie viel kostet das?", "local": "بكم ده؟", "phonetic": "BI-kam da"},
      {"de": "Die Rechnung, bitte", "local": "الحساب لو سمحت", "phonetic": "el-hi-SAB lau sa-MAHT"},
      {"de": "Sprechen Sie Englisch?", "local": "بتتكلم إنجليزي؟", "phonetic": "bi-tit-KAL-lam in-gi-LI-zi"},
      {"de": "Wo ist das Krankenhaus?", "local": "وين المستشفى؟", "phonetic": "win el-mus-TASCH-fa"},
      {"de": "Eine Flasche Wasser, bitte", "local": "قزازة موية لو سمحت", "phonetic": "ga-ZA-zat MOI-ja, lau sa-MAHT"},
      {"de": "Ich bin Vegetarier/in", "local": "أنا نباتي / نباتية", "phonetic": "A-na na-BA-ti / na-ba-TI-ja"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "ما باكل لحمة ولا سمك، لكن باكل بيض", "phonetic": "ma BA-kul LAH-ma WA-la SA-mak, LA-kin BA-kul BEID"},
      {"de": "Das Essen war sehr lecker", "local": "الأكل كان سمح شديد", "phonetic": "el-AKL kan SAMH scha-DID"},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "النجدة! حالة طوارئ!", "phonetic": "en-NADSCH-da! HA-lat ta-WA-ri"}
    ]}
  ],

  emergency: [
    ["999", "Polizei / Notruf"],
    ["998", "Feuerwehr"]
  ],
  embassy: {"title": "Deutsche Botschaft Khartum (geschlossen)", "address": ["Botschaft seit April 2023 geschlossen", "Telefon: Zentrale des Auswärtigen Amts (Berlin), leitet weiter"], "phone": "+49 30 1817-0"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/sudan-node",

  rules: [
    ["Reisewarnung", "Das Auswärtige Amt warnt vor Reisen in den Sudan – vor jeder Reise die aktuelle Lage prüfen."],
    ["Krieg", "Seit April 2023 herrscht Krieg zwischen Armee und RSF-Miliz. Flughafen Khartum ist außer Betrieb, konsularische Hilfe ist vor Ort nicht möglich."],
    ["Krisenvorsorge", "Wer trotzdem reist, sollte sich in die Krisenvorsorgeliste „Elefand“ des Auswärtigen Amts eintragen."],
    ["Fotografieren", "Für Fotos ist eine Genehmigung nötig. Keine Fotos von Militär, Brücken, Behörden und Infrastruktur."],
    ["Kleidung", "Konservativ kleiden: lange Hosen und Ärmel, Frauen am besten mit Kopftuch."]
  ],
  car: [
    ["Selbst fahren?", "Nicht möglich – Kampfgebiete, Minen und zahlreiche bewaffnete Kontrollpunkte."]
  ],
  substances: [
    ["Alkohol", "Weitgehend verboten – Einfuhr ist strafbar."],
    ["Drogen", "Schon kleine Mengen werden extrem streng bestraft."]
  ],
  sim: [
    ["Lokale SIM", "Zain, MTN oder Sudani – Pass nötig. Netz und Internet fallen kriegsbedingt oft aus."]
  ],
  apps: [
    ["Sicher Reisen", "App des Auswärtigen Amts mit aktuellen Reise- und Sicherheitshinweisen."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Khartum", 15.5007, 32.5599],
    ["Omdurman", 15.6445, 32.4777],
    ["Port Sudan", 19.6158, 37.2164],
    ["Pyramiden von Meroë", 16.9383, 33.7489],
    ["Kassala", 15.451, 36.4]
  ]
};
