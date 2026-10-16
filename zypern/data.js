/* Quick-Tools · Zypern – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "zypern",
  name: "Zypern",
  flag: "🇨🇾",
  tz: "Asia/Nicosia",
  currency: null, // Euro → kein Rechner, Startseite = Phrasen

  glance: {"plug": "G", "volt": 230, "adapter": "ja", "drive": "L", "water": "Trinkbar (oft entsalzt), viele nehmen Flaschenwasser", "tip": "5–10 %", "dial": "+357"},
  taxi: {"local": "Παρακαλώ, πηγαίνετέ με σε αυτή τη διεύθυνση.", "phonetic": "pa-ra-ka-LO, pi-JE-ne-TE me se af-TI ti di-EF-thin-si"},

  phrases: [
    { title: "🇨🇾 Griechisch", lang: "el-CY", items: [
      {"de": "Hallo / Guten Tag", "local": "Γεια σας / Καλημέρα", "phonetic": "JA sas / ka-li-ME-ra"},
      {"de": "Danke schön", "local": "Ευχαριστώ πολύ", "phonetic": "ef-cha-ri-STO po-LI"},
      {"de": "Entschuldigung", "local": "Συγγνώμη", "phonetic": "si-GNO-mi"},
      {"de": "Wie viel kostet das?", "local": "Πόσο κάνει;", "phonetic": "PO-so KA-ni"},
      {"de": "Die Rechnung, bitte", "local": "Τον λογαριασμό, παρακαλώ", "phonetic": "ton lo-gar-jas-MO, pa-ra-ka-LO"},
      {"de": "Sprechen Sie Englisch?", "local": "Μιλάτε αγγλικά;", "phonetic": "mi-LA-te an-gli-KA"},
      {"de": "Wo ist das Krankenhaus?", "local": "Πού είναι το νοσοκομείο;", "phonetic": "pu I-ne to no-so-ko-MI-o"},
      {"de": "Ein großes Bier bitte", "local": "Μια μεγάλη μπύρα, παρακαλώ", "phonetic": "mja me-GA-li BI-ra, pa-ra-ka-LO"},
      {"de": "Ich bin Vegetarier/in", "local": "Είμαι χορτοφάγος", "phonetic": "I-me chor-to-FA-gos"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "Δεν τρώω κρέας ούτε ψάρι, αλλά τρώω αυγά", "phonetic": "den TRO-o KRE-as U-te PSA-ri, a-LA TRO-o aw-GA"},
      {"de": "Das Essen war sehr lecker", "local": "Το φαγητό ήταν πολύ νόστιμο!", "phonetic": "to fa-ji-TO I-tan po-LI NO-sti-mo"},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "Βοήθεια! Είναι επείγον!", "phonetic": "wo-I-thia! I-ne e-PI-gon"}
    ]},
    { title: "🇹🇷 Türkisch (Norden)", lang: "tr-CY", items: [
      {"de": "Hallo / Guten Tag", "local": "Merhaba", "phonetic": "MER-ha-ba"},
      {"de": "Danke schön", "local": "Çok teşekkürler", "phonetic": "tschok te-schek-kür-LER"},
      {"de": "Entschuldigung", "local": "Affedersiniz", "phonetic": "af-fe-DER-si-nis"}
    ]}
  ],

  status: [
    ["Geteilte Insel", "Seit 1974 ist Zypern geteilt. Die „Türkische Republik Nordzypern“ wird nur von der Türkei anerkannt; dazwischen liegt eine UN-Pufferzone. Die EU-Regeln gelten faktisch nur im Süden."],
    ["Grenzübergänge", "Wechsel zwischen Süd und Nord an den Checkpoints mit Ausweis möglich. Mietwagen aus dem Süden sind im Norden meist nicht versichert – an der Grenze eine Zusatzversicherung kaufen."]
  ],
  emergency: [
    ["112", "Europäischer Notruf (alle Dienste)"],
    ["199", "Notruf (alternativ)"]
  ],
  embassy: {"title": "Deutsche Botschaft Nikosia", "address": ["Nikitara 10", "1080 Nikosia"], "phone": "+357 22 451 145"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/zypern-node",

  rules: [
    ["Pufferzone & Militär", "Militäranlagen und die Pufferzone nicht fotografieren – Schilder beachten."],
    ["Kirchen & Klöster", "Schultern und Knie bedecken."],
    ["Sonne & Feuer", "Im Sommer sehr heiß und hohe Waldbrandgefahr – kein offenes Feuer, Zigaretten nie wegwerfen."],
    ["Trinkgeld", "Rund 10 % in Restaurants sind üblich."]
  ],
  car: [
    ["Linksverkehr", "Achtung, in Zypern wird links gefahren. Mietwagen haben rote Kennzeichen."],
    ["Promille", "0,5 ‰; Fahranfänger 0,2 ‰."]
  ],
  substances: [
    ["Alkohol", "Ab 17 Jahren."],
    ["Drogen", "Auch Cannabis ist verboten; Drogendelikte werden streng bestraft."]
  ],
  sim: [
    ["EU-Roaming", "Mit deutschem Tarif ohne Aufpreis surfen und telefonieren („Roam like at home“)."],
    ["Achtung im Norden", "Im Norden gelten türkische Netze – kein EU-Roaming, sehr teuer. Daten-Roaming dort ausschalten."]
  ],
  apps: [
    ["Cyprus by Bus", "Fahrpläne für Überland- und Stadtbusse."],
    ["Bolt", "Fahrdienst und Taxis in den Städten."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Nikosia", 35.1856, 33.3823],
    ["Limassol", 34.7071, 33.0226],
    ["Paphos", 34.7754, 32.4245],
    ["Ayia Napa", 34.9823, 33.9997],
    ["Troodos", 34.9214, 32.8667]
  ]
};
