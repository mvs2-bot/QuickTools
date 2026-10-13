/* Quick-Tools · Griechenland – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "griechenland",
  name: "Griechenland",
  flag: "🇬🇷",
  tz: "Europe/Athens",
  currency: null, // Euro → kein Rechner, Startseite = Phrasen

  glance: {"plug": "C / F", "volt": 230, "adapter": "nein", "drive": "R", "water": "In Städten trinkbar, auf vielen Inseln besser Flaschenwasser", "tip": "5–10 %", "dial": "+30"},
  taxi: {"local": "Παρακαλώ, πηγαίνετέ με σε αυτή τη διεύθυνση.", "phonetic": "Parakaló, pigénete me se aftí ti diéfthinsi."},

  phrases: [
    { title: "🇬🇷 Griechisch", lang: "el-GR", items: [
      {"de": "Hallo / Guten Morgen", "local": "Γεια σας / Καλημέρα", "phonetic": "Jássas / Kaliméra"},
      {"de": "Danke schön", "local": "Ευχαριστώ πολύ", "phonetic": "Efcharistó polí"},
      {"de": "Entschuldigung", "local": "Συγγνώμη", "phonetic": "Signómi"},
      {"de": "Wie viel kostet das?", "local": "Πόσο κάνει;", "phonetic": "Póso káni?"},
      {"de": "Die Rechnung, bitte", "local": "Τον λογαριασμό, παρακαλώ", "phonetic": "Ton logariasmó, parakaló"},
      {"de": "Sprechen Sie Englisch?", "local": "Μιλάτε αγγλικά;", "phonetic": "Miláte angliká?"},
      {"de": "Wo ist das Krankenhaus?", "local": "Πού είναι το νοσοκομείο;", "phonetic": "Pu íne to nosokomío?"},
      {"de": "Ein großes Bier bitte", "local": "Μια μεγάλη μπύρα, παρακαλώ", "phonetic": "Mia megáli bíra, parakaló"},
      {"de": "Ich bin Vegetarier/in", "local": "Είμαι χορτοφάγος", "phonetic": "Íme chortofágos"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "Δεν τρώω κρέας ούτε ψάρι, αλλά τρώω αυγά", "phonetic": "Den tróo kréas úte psári, allá tróo avgá"},
      {"de": "Das Essen war sehr lecker", "local": "Το φαγητό ήταν πολύ νόστιμο!", "phonetic": "To fajitó ítan polí nóstimo!"},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "Βοήθεια! Είναι επείγον!", "phonetic": "Voíthia! Íne epígon!"}
    ]}
  ],

  emergency: [
    ["112", "Europäischer Notruf"],
    ["166", "Rettungsdienst"],
    ["100", "Polizei"],
    ["199", "Feuerwehr"],
    ["1571", "Touristenpolizei"]
  ],
  embassy: {"title": "Deutsche Botschaft Athen", "address": ["Karaoli Dimitriou 3", "106 75 Athen-Kolonaki"], "phone": "+30 210 728 51 11", "emergency": "+30 693 233 81 53", "emergencyNote": "(Mo–Do ab 17 Uhr, Fr ab 16 Uhr bis 24 Uhr; Wochenende 8–24 Uhr)"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/griechenland-node",

  rules: [
    ["Kirchen & Klöster", "Schultern und Knie bedecken – auf dem Berg Athos und in vielen Klöstern gelten strenge Kleiderregeln."],
    ["Toilettenpapier", "In vielen Toiletten nicht ins WC werfen, sondern in den Eimer daneben – die Rohre sind sehr eng."],
    ["Kopfnicken", "Ein kurzes Anheben des Kopfes (mit „ne“ = ja, „ochi“ = nein) kann „nein“ bedeuten – im Zweifel nachfragen."],
    ["Sonne & Feuer", "Im Sommer hohe Waldbrandgefahr – kein offenes Feuer, Zigaretten nie wegwerfen."],
    ["Antiken", "Steine oder Scherben von archäologischen Stätten mitzunehmen ist streng verboten."]
  ],
  sim: [
    ["EU-Roaming", "Mit deutschem Tarif ohne Aufpreis surfen und telefonieren („Roam like at home“)."],
    ["Alternative", "eSIM (z. B. Airalo) oder Prepaid-SIM im Shop vor Ort – Ausweis nötig."]
  ],
  apps: [
    ["FreeNow & Uber", "Taxis in Athen und Thessaloniki per App."],
    ["Ferryhopper", "Fähren zwischen den Inseln vergleichen und buchen."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Athen", 37.9838, 23.7275],
    ["Thessaloniki", 40.6401, 22.9444],
    ["Santorini (Fira)", 36.4167, 25.4317],
    ["Kreta (Heraklion)", 35.3387, 25.1442],
    ["Korfu", 39.6243, 19.9217]
  ]
};
