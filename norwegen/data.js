/* Quick-Tools · Norwegen – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "norwegen",
  name: "Norwegen",
  flag: "🇳🇴",
  tz: "Europe/Oslo",
  currency: {"code": "NOK", "symbol": "kr", "name": "Norwegische Krone"},

  glance: {"plug": "C / F", "volt": 230, "adapter": "nein", "drive": "R", "water": "Trinkbar", "tip": "Nicht üblich", "dial": "+47"},
  taxi: {"local": "Kan du kjøre meg til denne adressen?", "phonetic": "kan dü TSCHÖ-re mai til DEN-ne a-DRES-sen"},

  phrases: [
    { title: "🇳🇴 Norwegisch", lang: "nb-NO", items: [
      {"de": "Hallo", "local": "Hei", "phonetic": "hai"},
      {"de": "Danke schön", "local": "Tusen takk", "phonetic": "TÜ-sen takk"},
      {"de": "Entschuldigung", "local": "Unnskyld", "phonetic": "ÜN-schül"},
      {"de": "Wie viel kostet das?", "local": "Hva koster det?", "phonetic": "wa KOS-ter de"},
      {"de": "Die Rechnung, bitte", "local": "Kan jeg få regningen?", "phonetic": "kan jai fo RAI-ning-en"},
      {"de": "Sprechen Sie Englisch?", "local": "Snakker du engelsk?", "phonetic": "SNAK-ker dü ENG-elsk"},
      {"de": "Wo ist das Krankenhaus?", "local": "Hvor er sykehuset?", "phonetic": "wur är SÜ-ke-hü-se"},
      {"de": "Ein großes Bier bitte", "local": "En stor øl, takk", "phonetic": "en stur öl, takk"},
      {"de": "Ich bin Vegetarier/in", "local": "Jeg er vegetarianer", "phonetic": "jai är we-ge-ta-ri-A-ner"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "Jeg spiser ikke kjøtt eller fisk, men egg går fint", "phonetic": "jai SPI-ser IK-ke tschött EL-ler fisk, men egg gor fint"},
      {"de": "Das Essen war sehr lecker", "local": "Maten var veldig god!", "phonetic": "MAA-ten war WEL-di gu"},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "Hjelp! Det er en nødsituasjon!", "phonetic": "jelp! de är en NÖD-si-tu-a-schun"}
    ]}
  ],

  emergency: [
    ["113", "Rettungsdienst"],
    ["112", "Polizei"],
    ["110", "Feuerwehr"],
    ["116 117", "Ärztlicher Notdienst (Legevakt)"]
  ],
  embassy: {"title": "Deutsche Botschaft Oslo", "address": ["Oscars gate 45", "0258 Oslo"], "phone": "+47 23 27 54 00", "emergency": "+47 90 85 08 02", "emergencyNote": "(Mo–Do ab 16 Uhr, Fr ab 13 Uhr bis 24 Uhr; Wochenende 8–24 Uhr)"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/norwegen-node",

  rules: [
    ["Jedermannsrecht", "Wandern und Zelten in der Natur ist erlaubt (mind. 150 m vom nächsten Haus). Vom 15.4. bis 15.9. kein offenes Feuer in Waldnähe."],
    ["Maut", "Viele Straßen, Tunnel und Fähren sind mautpflichtig – Mietwagen haben meist einen AutoPASS-Chip, sonst vorab online registrieren."],
    ["Alkohol", "Wein und Spirituosen gibt es nur im staatlichen „Vinmonopolet“; Bier im Supermarkt nur zu bestimmten Zeiten."],
    ["Bargeld", "Fast alles läuft über Karte – Bargeld braucht man kaum."],
    ["Wetter", "In den Bergen schnelle Wetterwechsel, auch im Sommer. Wanderungen nur mit passender Ausrüstung."]
  ],
  sim: [
    ["EWR-Roaming", "Norwegen gehört zum EWR – die meisten deutschen Tarife gelten dort ohne Aufpreis. Vorher kurz prüfen!"],
    ["Alternative", "Prepaid-SIM von Telenor oder Telia, oder vorab eSIM."]
  ],
  apps: [
    ["Entur", "Fahrpläne und Tickets für Zug, Bus und Fähren im ganzen Land."],
    ["Yr", "Sehr genaue Wettervorhersage des norwegischen Wetterdienstes."],
    ["Vipps", "Bezahlen von Handy zu Handy (in Norwegen sehr verbreitet)."]
  ],

  places: [
    ["Oslo", 59.9139, 10.7522],
    ["Bergen", 60.3913, 5.3221],
    ["Tromsø", 69.6492, 18.9553],
    ["Lofoten (Svolvær)", 68.2343, 14.5683],
    ["Geiranger", 62.1008, 7.206]
  ]
};
