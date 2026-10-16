/* Quick-Tools · Libyen – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "libyen",
  name: "Libyen",
  flag: "🇱🇾",
  tz: "Africa/Tripoli",
  currency: {"code": "LYD", "symbol": "LD", "name": "Libyscher Dinar"},

  glance: {"plug": "C / D / L", "volt": 230, "adapter": "teils – Eurostecker passt meist", "drive": "R", "water": "Nicht trinkbar", "tip": "ca. 10 %", "dial": "+218"},
  taxi: {"local": "من فضلك، وصّلني لهذا العنوان", "phonetic": "min FAD-lak, was-SIL-ni li-HA-dha el-un-WAN"},

  phrases: [
    { title: "🇱🇾 Arabisch", lang: "ar-LY", items: [
      {"de": "Hallo / Guten Tag", "local": "السلام عليكم", "phonetic": "as-sa-LAM a-LEI-kum"},
      {"de": "Danke schön", "local": "شكرًا جزيلًا", "phonetic": "SCHUK-ran dsche-ZI-lan"},
      {"de": "Entschuldigung", "local": "سامحني", "phonetic": "SAM-ha-ni"},
      {"de": "Wie viel kostet das?", "local": "بكم هذا؟", "phonetic": "BI-kam HA-dha"},
      {"de": "Die Rechnung, bitte", "local": "الحساب، من فضلك", "phonetic": "el-hi-SAB, min FAD-lak"},
      {"de": "Sprechen Sie Englisch?", "local": "تتكلم إنجليزي؟", "phonetic": "ti-TKAL-lam in-gi-LI-zi"},
      {"de": "Wo ist das Krankenhaus?", "local": "وين المستشفى؟", "phonetic": "win el-mus-TASCH-fa"},
      {"de": "Eine Flasche Wasser, bitte", "local": "قنينة ماء، من فضلك", "phonetic": "ga-NI-nat ma, min FAD-lak"},
      {"de": "Ich bin Vegetarier/in", "local": "أنا نباتي / نباتية", "phonetic": "A-na na-BA-ti / na-ba-TI-ja"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "ما ناكلش اللحم والحوت، لكن ناكل البيض", "phonetic": "ma NAK-lesch el-LAHM wel-HUT, LA-kin NA-kul el-BEID"},
      {"de": "Das Essen war sehr lecker", "local": "الأكل كان بنين واجد", "phonetic": "el-AKL kan bnIN WA-dschid"},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "النجدة! حالة طوارئ!", "phonetic": "en-NADSCH-da! HA-lat ta-WA-ri"}
    ]}
  ],

  emergency: [
    ["1515", "Polizei & Rettungsdienst"],
    ["180", "Feuerwehr"]
  ],
  embassy: {"title": "Deutsche Botschaft Tripolis", "address": ["Tripolis", "Telefon: Zentrale des Auswärtigen Amts (Berlin), leitet weiter"], "phone": "+49 30 1817-0", "emergencyNote": "(Botschaft nur eingeschränkt arbeitsfähig – Kontaktdaten vorab auf der AA-Seite prüfen)"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/libyen-node",

  rules: [
    ["Reisewarnung", "Das Auswärtige Amt warnt vor Reisen nach Libyen – vor jeder Reise die aktuelle Lage prüfen."],
    ["Sicherheit", "Bewaffnete Konflikte zwischen Milizen und ein hohes Entführungsrisiko. Konsularische Hilfe ist nur sehr eingeschränkt möglich."],
    ["Krisenvorsorge", "Wer trotzdem reist, sollte sich in die Krisenvorsorgeliste „Elefand“ des Auswärtigen Amts eintragen."],
    ["Kleidung", "Konservativ kleiden: lange Hosen und Ärmel, Frauen am besten mit Kopftuch."],
    ["Ramadan", "Im Ramadan tagsüber nicht demonstrativ in der Öffentlichkeit essen, trinken oder rauchen."]
  ],
  car: [
    ["Selbst fahren?", "Nicht empfohlen – zahlreiche bewaffnete Kontrollpunkte und unklare Zuständigkeiten."]
  ],
  substances: [
    ["Alkohol", "Komplett verboten – auch Einfuhr und Besitz werden bestraft."],
    ["Drogen", "Schon kleine Mengen werden extrem streng bestraft."]
  ],
  sim: [
    ["Lokale SIM", "Libyana oder Al-Madar – Pass nötig. Netz außerhalb der Küstenstädte lückenhaft."]
  ],
  apps: [
    ["Sicher Reisen", "App des Auswärtigen Amts mit aktuellen Reise- und Sicherheitshinweisen."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Tripolis", 32.8872, 13.1913],
    ["Bengasi", 32.1167, 20.0667],
    ["Leptis Magna", 32.6383, 14.2906],
    ["Ghadames", 30.1337, 9.5007],
    ["Kyrene (Shahhat)", 32.825, 21.8583]
  ]
};
