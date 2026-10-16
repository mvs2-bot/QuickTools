/* Quick-Tools · Andorra – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "andorra",
  name: "Andorra",
  flag: "🇦🇩",
  tz: "Europe/Andorra",
  currency: null, // Euro → kein Rechner, Startseite = Phrasen

  glance: {"plug": "C / F", "volt": 230, "adapter": "nein", "drive": "R", "water": "Trinkbar", "tip": "Aufrunden, ca. 5–10 %", "dial": "+376"},
  taxi: {"local": "Em pot portar a aquesta adreça, si us plau?", "phonetic": "em pot pur-TA a a-KES-ta a-DRE-sa, sis PLAU"},

  phrases: [
    { title: "🇦🇩 Katalanisch", lang: "ca-AD", items: [
      {"de": "Hallo / Guten Tag", "local": "Hola / Bon dia", "phonetic": "O-la / bon DI-a"},
      {"de": "Danke schön", "local": "Moltes gràcies", "phonetic": "MOL-tes GRA-si-es"},
      {"de": "Entschuldigung", "local": "Perdoni", "phonetic": "per-DO-ni"},
      {"de": "Wie viel kostet das?", "local": "Quant costa?", "phonetic": "kwan KOS-ta"},
      {"de": "Die Rechnung, bitte", "local": "El compte, si us plau", "phonetic": "el KOM-te, sis PLAU"},
      {"de": "Sprechen Sie Englisch?", "local": "Parla anglès?", "phonetic": "PAR-la ang-GLES"},
      {"de": "Wo ist das Krankenhaus?", "local": "On és l’hospital?", "phonetic": "on es los-pi-TAL"},
      {"de": "Ein großes Bier bitte", "local": "Una cervesa gran, si us plau", "phonetic": "U-na ser-WE-sa gran, sis PLAU"},
      {"de": "Ich bin Vegetarier/in", "local": "Sóc vegetarià / vegetariana", "phonetic": "sok we-sche-ta-ri-A / we-sche-ta-ri-A-na"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "No menjo carn ni peix, però ous sí", "phonetic": "no MEN-scho karn ni pesch, pe-RO OUS si"},
      {"de": "Das Essen war sehr lecker", "local": "El menjar era boníssim!", "phonetic": "el men-SCHA E-ra bu-NI-sim"},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "Ajuda! És una emergència!", "phonetic": "a-SCHU-da! es U-na e-mer-SCHEN-si-a"}
    ]},
    { title: "🇪🇸 Spanisch", lang: "es-ES", items: [
      {"de": "Hallo", "local": "Hola", "phonetic": "O-la"},
      {"de": "Danke", "local": "Gracias", "phonetic": "GRA-sjas"},
      {"de": "Sprechen Sie Englisch?", "local": "¿Habla inglés?", "phonetic": "A-bla in-GLES"},
      {"de": "Die Rechnung, bitte", "local": "La cuenta, por favor", "phonetic": "la KWEN-ta, por fa-WOR"}
    ]}
  ],

  emergency: [
    ["112", "Allgemeiner Notruf"],
    ["110", "Polizei"],
    ["116", "Rettungsdienst"],
    ["118", "Feuerwehr"]
  ],
  embassy: {"title": "Zuständig: Deutsche Botschaft Madrid (Spanien)", "address": ["Calle de Fortuny 8", "28010 Madrid"], "phone": "+34 91 557 90 00"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/andorra-node",

  rules: [
    ["Euro", "Andorra nutzt den Euro, ist aber nicht in der EU."],
    ["Zoll", "Einkaufen ist steuergünstig, bei der Rückkehr in die EU gelten aber Freimengen (z. B. 200 Zigaretten, 1 l Spirituosen) – an der Grenze wird oft kontrolliert."],
    ["Sprache", "Amtssprache ist Katalanisch; Spanisch und Französisch werden überall verstanden."],
    ["Berge", "Das Wetter ändert sich schnell – beim Wandern passende Ausrüstung, im Winter auf Lawinenwarnungen achten."]
  ],
  car: [
    ["Promille", "0,5 ‰."],
    ["Winter", "Im Winter Winterreifen oder Schneeketten – der Pass Port d’Envalira kann bei Schnee gesperrt sein."]
  ],
  substances: [
    ["Alkohol", "Ab 18 Jahren."],
    ["Drogen", "Auch Cannabis ist verboten; Drogendelikte werden streng bestraft."]
  ],
  sim: [
    ["Kein EU-Roaming", "Andorra ist nicht in der EU – Roaming kann mit vielen deutschen Tarifen teuer sein. Tarif vorher prüfen!"],
    ["Lokale SIM / eSIM", "Prepaid-SIM von Andorra Telecom (Pass nötig) – oder vorab eSIM."]
  ],
  apps: [
    ["Grandvalira", "Pistenplan, Lifte und Skipässe im größten Skigebiet des Landes."],
    ["Google Maps & Translate", "Offline-Karten herunterladen und Übersetzer parat haben."]
  ],

  places: [
    ["Andorra la Vella", 42.5063, 1.5218],
    ["Escaldes-Engordany", 42.5089, 1.5386],
    ["Ordino", 42.5562, 1.5332],
    ["Soldeu", 42.5766, 1.6672],
    ["Pas de la Casa", 42.5425, 1.7336]
  ]
};
