/* Quick-Tools · Ungarn – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "ungarn",
  name: "Ungarn",
  flag: "🇭🇺",
  tz: "Europe/Budapest",
  currency: {"code": "HUF", "symbol": "Ft", "name": "Ungarischer Forint", "tableDecimals": 0},

  glance: {"plug": "C / F", "volt": 230, "adapter": "nein", "drive": "R", "water": "Trinkbar", "tip": "10–15 % (Servicegebühr prüfen)", "dial": "+36"},
  taxi: {"local": "Kérem, vigyen el erre a címre.", "phonetic": "KE-rem, WI-djen el ER-re a TSIIM-re"},

  phrases: [
    { title: "🇭🇺 Ungarisch", lang: "hu-HU", items: [
      {"de": "Guten Tag / Hallo", "local": "Jó napot / Szia", "phonetic": "jo NA-pot / SI-a"},
      {"de": "Danke schön", "local": "Köszönöm szépen", "phonetic": "KÖ-sö-nöm SE-pen"},
      {"de": "Entschuldigung", "local": "Elnézést", "phonetic": "EL-ne-zescht"},
      {"de": "Wie viel kostet das?", "local": "Mennyibe kerül?", "phonetic": "MEN-nji-be KE-rül"},
      {"de": "Die Rechnung, bitte", "local": "A számlát, legyen szíves", "phonetic": "a SAAM-laat, LE-djen SI-wesch"},
      {"de": "Sprechen Sie Englisch?", "local": "Beszél angolul?", "phonetic": "BE-sel AN-go-lul"},
      {"de": "Wo ist das Krankenhaus?", "local": "Hol van a kórház?", "phonetic": "hol wan a KOR-haas"},
      {"de": "Ein großes Bier bitte", "local": "Egy nagy sört kérek", "phonetic": "edj nadj schört KE-rek"},
      {"de": "Ich bin Vegetarier/in", "local": "Vegetáriánus vagyok", "phonetic": "WE-ge-taa-ri-aa-nusch WA-djok"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "Nem eszem húst és halat, de tojást igen", "phonetic": "nem E-sem huuscht esch HA-lat, de TO-jaascht I-gen"},
      {"de": "Das Essen war sehr lecker", "local": "Az étel nagyon finom volt!", "phonetic": "as E-tel NA-djon FI-nom wolt"},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "Segítség! Vészhelyzet van!", "phonetic": "SCHE-giit-scheeg! WEES-hej-zet wan"}
    ]}
  ],

  emergency: [
    ["112", "Europäischer Notruf"],
    ["104", "Rettungsdienst"],
    ["107", "Polizei"],
    ["105", "Feuerwehr"]
  ],
  embassy: {"title": "Deutsche Botschaft Budapest", "address": ["Úri utca 64-66", "1014 Budapest I."], "phone": "+36 1 488 35 00", "emergency": "+36 30 924 1767", "emergencyNote": "(Mo–Fr 17–24 Uhr, Wochenende 8–24 Uhr)"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/ungarn-node",

  rules: [
    ["Servicegebühr", "Viele Restaurants schlagen 10–15 % „szervízdíj“ auf – dann ist kein weiteres Trinkgeld nötig."],
    ["Anstoßen", "Traditionell stößt man mit Bier nicht an – mit Wein oder Pálinka schon."],
    ["Vignette", "Für Autobahnen ist eine digitale Vignette (e-matrica) Pflicht. 0,0 Promille."],
    ["Euro", "Euro werden oft angenommen, aber zu schlechtem Kurs – lieber Forint oder Karte."],
    ["Thermalbäder", "Badekappe ist in manchen Schwimmbecken Pflicht; Badeschlappen mitnehmen."]
  ],
  sim: [
    ["EU-Roaming", "Mit deutschem Tarif ohne Aufpreis surfen und telefonieren („Roam like at home“)."],
    ["Alternative", "eSIM (z. B. Airalo) oder Prepaid-SIM im Shop vor Ort – Ausweis nötig."]
  ],
  apps: [
    ["BKK Futár & Budapest GO", "Nahverkehr und Tickets in Budapest."],
    ["Bolt", "Fahrdienst in Budapest (Uber gibt es nicht)."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Budapest", 47.4979, 19.0402],
    ["Balaton (Siófok)", 46.9041, 18.0581],
    ["Pécs", 46.0727, 18.2323],
    ["Eger", 47.9025, 20.3772],
    ["Debrecen", 47.5316, 21.6273]
  ]
};
