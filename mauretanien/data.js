/* Quick-Tools · Mauretanien – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "mauretanien",
  name: "Mauretanien",
  flag: "🇲🇷",
  tz: "Africa/Nouakchott",
  currency: {"code": "MRU", "symbol": "UM", "name": "Mauretanischer Ouguiya"},

  glance: {"plug": "C", "volt": 220, "adapter": "nein", "drive": "R", "water": "Nicht empfohlen – Flaschenwasser", "tip": "Kein Muss, kleine Trinkgelder (ca. 5–10 %) gern gesehen", "dial": "+222"},
  taxi: {"local": "من فضلك، خذني إلى هذا العنوان", "phonetic": "min FAD-lak, CHUD-ni i-LA HAA-dha l-un-WAAN"},

  phrases: [
    { title: "🇲🇷 Arabisch", lang: "ar-MR", items: [
      {"de": "Hallo / Guten Tag", "local": "السلام عليكم", "phonetic": "as-sa-LAAM a-LAI-kum"},
      {"de": "Danke schön", "local": "شكرا جزيلا", "phonetic": "SCHUK-ran dscha-SII-lan"},
      {"de": "Entschuldigung", "local": "لو سمحت", "phonetic": "lau sa-MACHT"},
      {"de": "Wie viel kostet das?", "local": "بكم هذا؟", "phonetic": "bi-KAM HAA-dha"},
      {"de": "Die Rechnung, bitte", "local": "الحساب من فضلك", "phonetic": "al-hi-SAAB min FAD-lak"},
      {"de": "Sprechen Sie Englisch?", "local": "هل تتكلم الإنجليزية؟", "phonetic": "hal ta-ta-KAL-lam al-ing-li-SII-ja"},
      {"de": "Wo ist das Krankenhaus?", "local": "أين المستشفى؟", "phonetic": "AI-na al-mus-TASCH-fa"},
      {"de": "Eine Flasche Wasser, bitte", "local": "زجاجة ماء من فضلك", "phonetic": "su-DSCHAA-dschat MAA min FAD-lak"},
      {"de": "Ich bin Vegetarier/in", "local": "أنا نباتي / نباتية", "phonetic": "A-na na-BAA-ti / na-baa-TII-ja"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "لا آكل اللحم ولا السمك، لكن آكل البيض", "phonetic": "laa AA-kul al-LACHM wa-la as-SA-mak, LAA-kin AA-kul al-BAID"},
      {"de": "Das Essen war sehr lecker", "local": "الأكل كان لذيذا جدا", "phonetic": "al-AKL kaan la-DHII-dhan DSCHID-dan"},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "النجدة! إنها حالة طارئة!", "phonetic": "an-NADSCH-da! IN-na-ha HAA-la TAA-ri-a"}
    ]},
    { title: "🇲🇷 Französisch", lang: "fr-MR", items: [
      {"de": "Hallo / Guten Tag", "local": "Bonjour", "phonetic": "bon-SCHUR"},
      {"de": "Danke schön", "local": "Merci beaucoup", "phonetic": "mär-SI bo-KU"},
      {"de": "Wie viel kostet das?", "local": "C'est combien ?", "phonetic": "sä kom-BJÄ"},
      {"de": "Wo ist das Krankenhaus?", "local": "Où est l'hôpital ?", "phonetic": "u ä lo-pi-TAL"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "Je ne mange ni viande ni poisson, mais je mange des œufs", "phonetic": "sche ne mansch ni WJAND ni pua-SO, mä sche mansch de SÖ"}
    ]}
  ],

  emergency: [
    ["117", "Polizei"],
    ["116", "Gendarmerie"],
    ["118", "Feuerwehr"],
    ["101", "Rettungsdienst"]
  ],
  embassy: {"title": "Deutsche Botschaft Nouakchott", "address": ["Avenue Mamadou Lemine Konaté, Tevragh Zeina", "Nouakchott"], "phone": "+222 45 25 17 29", "emergency": "+222 46 48 00 81", "emergencyNote": "(keine Visaanfragen)"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/mauretanien-node",

  rules: [
    ["Reisewarnung", "Das Auswärtige Amt warnt vor Reisen in die Grenzgebiete zu Algerien und Mali und rät von Reisen in entlegene Gebiete der Sahara ab (Teilreisewarnung) – vor jeder Reise die aktuelle Lage prüfen."],
    ["Visum", "E-Visum vorab online beantragen und ausgedruckt mitnehmen; Gebühr (55 €) bar bei der Einreise. Reisepass mind. 6 Monate gültig."],
    ["Kleidung & Ramadan", "Schultern und Knie bedecken, keine Zärtlichkeiten in der Öffentlichkeit. Im Ramadan sind Restaurants tagsüber meist geschlossen (außer große Hotels)."],
    ["Homosexualität", "Gleichgeschlechtliche Handlungen sind strafbar, gesetzlich droht sogar die Todesstrafe – äußerste Diskretion."],
    ["Bargeld", "Karten nur in großen Hotels, Geldautomaten fast nur in Nouakchott und Nouadhibou – Euro in bar mitnehmen."],
    ["Malaria", "Im Süden ganzjährig, sonst Juli–Januar (auch Nouakchott) – Mückenschutz und ärztliche Beratung zur Prophylaxe."]
  ],
  car: [
    ["Promille", "0,0 ‰ – Alkohol ist ohnehin verboten."],
    ["Führerschein", "Internationaler Führerschein nur zusammen mit dem deutschen Führerschein gültig."],
    ["Wüste", "Nicht bei Dunkelheit fahren; abseits der Asphaltstraßen nur im Konvoi mit Wasser, Treibstoff und Satellitentelefon."]
  ],
  substances: [
    ["Alkohol", "Verkauf und Einfuhr sind verboten – mitgebrachter Alkohol wird beschlagnahmt, es drohen Geldstrafen."],
    ["Drogen", "Einfuhr und Handel sind verboten und werden streng bestraft."]
  ],
  sim: [
    ["Lokale SIM", "Mauritel, Mattel oder Chinguitel – Pass nötig. In der Wüste oft kein Netz."]
  ],
  apps: [
    ["Sicher Reisen", "App des Auswärtigen Amts mit aktuellen Sicherheitshinweisen – zusätzlich in die Krisenvorsorgeliste ELEFAND eintragen."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Nouakchott", 18.0735, -15.9582],
    ["Nouadhibou", 20.931, -17.0347],
    ["Atar", 20.517, -13.0499],
    ["Chinguetti", 20.463, -12.3646],
    ["Banc d'Arguin", 19.88, -16.3]
  ]
};
