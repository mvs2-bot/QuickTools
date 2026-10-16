/* Quick-Tools · Haiti – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "haiti",
  name: "Haiti",
  flag: "🇭🇹",
  tz: "America/Port-au-Prince",
  currency: {"code": "HTG", "symbol": "G", "name": "Haitianische Gourde", "tableDecimals": 0},

  glance: {"plug": "A / B", "volt": 110, "adapter": "ja", "drive": "R", "water": "Nicht trinkbar", "tip": "ca. 10 %", "dial": "+509", "voltNote": "110 V – Netzteil muss 100–240 V können"},
  taxi: {"local": "Tanpri, mennen m nan adrès sa a.", "phonetic": "tan-PRI, me-NEN m nan a-DRÄS sa a"},

  phrases: [
    { title: "🇭🇹 Haitianisches Kreol", lang: "fr-HT", items: [
      {"de": "Hallo / Guten Tag", "local": "Bonjou", "phonetic": "bon-SCHU"},
      {"de": "Danke schön", "local": "Mèsi anpil", "phonetic": "mä-SI an-PIL"},
      {"de": "Entschuldigung", "local": "Eskize m", "phonetic": "es-ki-SE-m"},
      {"de": "Wie viel kostet das?", "local": "Konbyen li koute?", "phonetic": "kon-BJÄ li KU-te"},
      {"de": "Die Rechnung, bitte", "local": "Konbyen mwen dwe w, tanpri?", "phonetic": "kon-BJÄ mwä DWE u, tan-PRI"},
      {"de": "Sprechen Sie Englisch?", "local": "Èske ou pale angle?", "phonetic": "ES-ke u pa-LE an-GLE"},
      {"de": "Wo ist das Krankenhaus?", "local": "Ki kote lopital la ye?", "phonetic": "ki KO-te lo-pi-TAL la JE"},
      {"de": "Ein großes Bier bitte", "local": "Yon gwo byè, tanpri", "phonetic": "jon gwo BJÄ, tan-PRI"},
      {"de": "Ich bin Vegetarier/in", "local": "Mwen se vejetaryen", "phonetic": "mwä se we-sche-ta-RJÄ"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "Mwen pa manje vyann ni pwason, men mwen manje ze", "phonetic": "mwä pa man-SCHE WJAN ni pwa-SON, mä mwä man-SCHE SE"},
      {"de": "Das Essen war sehr lecker", "local": "Manje a te bon anpil!", "phonetic": "man-SCHE a te BON an-PIL"},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "Anmwe! Se yon ijans!", "phonetic": "an-MWE! se jon i-SCHANS"}
    ]},
    { title: "🇭🇹 Französisch", lang: "fr-FR", items: [
      {"de": "Guten Tag", "local": "Bonjour", "phonetic": "bon-SCHUR"},
      {"de": "Danke schön", "local": "Merci beaucoup", "phonetic": "mär-SI bo-KU"},
      {"de": "Auf Wiedersehen", "local": "Au revoir", "phonetic": "o re-WOAR"},
      {"de": "Sprechen Sie Englisch?", "local": "Parlez-vous anglais ?", "phonetic": "par-le WU an-GLÄ"}
    ]}
  ],

  emergency: [
    ["114", "Polizei"],
    ["115", "Feuerwehr"],
    ["116", "Rettungsdienst (Rotes Kreuz)"],
    ["122", "Polizei (alternativ)"]
  ],
  embassy: {"title": "Zuständig: Deutsche Botschaft Santo Domingo (Dominikanische Republik)", "address": ["Die Botschaft in Port-au-Prince ist für Besucher geschlossen und leistet keine konsularische Hilfe vor Ort.", "Edificio Equinox, Piso 5 y 6", "Av. Núñez de Cáceres No. 11, Bella Vista, Santo Domingo"], "phone": "+1 809 542 8949", "emergency": "+1 809 543 5650", "emergencyNote": "(Bereitschaft Santo Domingo, auch SMS; Notfallnummer der Botschaft Port-au-Prince: +509 3752 0163, auch WhatsApp)"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/haiti-node",

  rules: [
    ["Reisewarnung", "Das Auswärtige Amt warnt vor Reisen nach Haiti und fordert Deutsche zur Ausreise auf. Der Flughafen Port-au-Prince ist geschlossen, Flüge gibt es nur eingeschränkt ab Cap-Haïtien; von Reisen auf dem Landweg wird dringend abgeraten."],
    ["Sicherheit", "Bewaffnete Banden kontrollieren große Teile von Port-au-Prince und wichtige Straßen; Entführungen sind häufig. Flughafen und Grenzübergänge können kurzfristig schließen."],
    ["Gesundheit", "Cholera tritt immer wieder auf – nur abgefülltes Wasser trinken, auf Hygiene achten."],
    ["Hurrikansaison", "Juni bis November – Wetterwarnungen verfolgen und Reiserücktritts-/Reiseversicherung prüfen."]
  ],
  car: [
    ["Straßen", "Straßensperren und Überfälle möglich – nicht selbst fahren, nur mit ortskundigem, vertrauenswürdigem Fahrer."]
  ],
  substances: [
    ["Alkohol", "Rum (z. B. Barbancourt) und Bier (Prestige) gibt es überall."],
    ["Drogen", "Drogendelikte werden streng bestraft."]
  ],
  sim: [
    ["Roaming", "Kein EU-Roaming – deutsche Tarife sind hier oft sehr teuer. Tarif vorher prüfen oder Datenroaming ausschalten."],
    ["Lokale SIM", "Digicel oder Natcom (Pass nötig); Netz und Strom fallen öfter aus."]
  ],
  apps: [
    ["WhatsApp", "Gängig für Taxis, Unterkünfte und Touranbieter."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Port-au-Prince", 18.5944, -72.3074],
    ["Cap-Haïtien", 19.7579, -72.2042],
    ["Citadelle Laferrière", 19.5732, -72.2436],
    ["Jacmel", 18.2343, -72.5347],
    ["Île-à-Vache", 18.0667, -73.6333]
  ]
};
