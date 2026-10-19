/* Quick-Tools · Südafrika – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "suedafrika",
  name: "Südafrika",
  flag: "🇿🇦",
  tz: "Africa/Johannesburg",
  currency: {"code": "ZAR", "symbol": "R", "name": "Südafrikanischer Rand"},

  glance: {"plug": "M / N (teils C)", "volt": 230, "adapter": "ja", "drive": "L", "water": "In Städten trinkbar", "tip": "10–15 % im Restaurant, Tankwart 5–10 R", "dial": "+27"},
  taxi: {"local": "Please take me to this address.", "phonetic": ""},

  phrases: [
    { title: "🇿🇦 Englisch", lang: "en-ZA", items: [
      {"de": "Hallo / Guten Morgen", "local": "Hello / Good morning", "phonetic": ""},
      {"de": "Danke schön", "local": "Thank you very much", "phonetic": ""},
      {"de": "Entschuldigung", "local": "Excuse me / Sorry", "phonetic": ""},
      {"de": "Wie viel kostet das?", "local": "How much is this?", "phonetic": ""},
      {"de": "Die Rechnung, bitte", "local": "Could I have the bill, please?", "phonetic": ""},
      {"de": "Wo ist das Krankenhaus?", "local": "Where is the hospital?", "phonetic": ""},
      {"de": "Ein großes Bier, bitte", "local": "A large beer, please", "phonetic": ""},
      {"de": "Wo ist die Toilette?", "local": "Where's the bathroom?", "phonetic": ""},
      {"de": "Ich bin Vegetarier/in", "local": "I'm vegetarian", "phonetic": ""},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "I don't eat meat or fish, but I do eat eggs", "phonetic": ""},
      {"de": "Das Essen war sehr lecker", "local": "That was delicious!", "phonetic": ""},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "Help! It's an emergency!", "phonetic": ""}
    ]},
    { title: "🇿🇦 Afrikaans & isiZulu (Grüße)", lang: "af-ZA", items: [
      {"de": "Guten Tag (Afrikaans)", "local": "Goeie dag", "phonetic": "CHUI-e dach"},
      {"de": "Danke (Afrikaans)", "local": "Baie dankie", "phonetic": "BA-je DAN-ki"},
      {"de": "Tschüss (Afrikaans)", "local": "Totsiens", "phonetic": "TOT-sins"},
      {"de": "Hallo (isiZulu)", "local": "Sawubona", "phonetic": "sa-wu-BO-na"},
      {"de": "Danke (isiZulu)", "local": "Ngiyabonga", "phonetic": "ngi-ja-BON-ga"},
      {"de": "Grillen (überall)", "local": "Braai", "phonetic": "brai"},
      {"de": "Gleich / irgendwann (Slang)", "local": "Just now", "phonetic": ""}
    ]}
  ],

  emergency: [
    ["10111", "Polizei"],
    ["10177", "Rettungsdienst"],
    ["112", "Notruf vom Handy"]
  ],
  embassy: {"title": "Deutsche Botschaft Pretoria", "address": ["201 Florence Ribeiro Avenue, Groenkloof", "Pretoria 0181", "Generalkonsulat Kapstadt: 4 Stirling Street, Tel. +27 21 405 3000"], "phone": "+27 12 427 8900", "emergency": "+27 78 608 0950", "emergencyNote": "(außerhalb der Öffnungszeiten, auch SMS, keine Visaanfragen)"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/suedafrika-node",

  rules: [
    ["Sicherheit", "Die Innenstädte (CBD) von Johannesburg, Pretoria, Gqeberha und Durban meiden. Nachts nicht zu Fuß unterwegs sein, Wertsachen nicht zeigen, Autotüren verriegeln, an Ampeln Fenster zu. Nur App-Taxis."],
    ["Load Shedding", "Geplante Stromabschaltungen sind möglich – App „EskomSePush“ zeigt die Zeiten."],
    ["Parkwächter", "Inoffizielle „Car Guards“ passen auf das Auto auf – 5–10 Rand bei der Abfahrt sind üblich."],
    ["Safari", "In Nationalparks nie aus dem Auto steigen (außer an markierten Stellen), Tiere nicht füttern."],
    ["Kinder", "Reisen mit Kindern: Geburtsurkunde (engl.) mitnehmen wird empfohlen."],
    ["Einreise", "Pass mindestens 30 Tage über die Ausreise hinaus gültig, zwei freie Seiten. Wer die 90 Tage überzieht, erhält eine Einreisesperre."],
    ["Malaria", "Im Nordosten (Krüger-Nationalpark, Limpopo, Mpumalanga) Sept.–Mai hohes Risiko – Mückenschutz und ärztliche Beratung."]
  ],
  car: [
    ["Linksverkehr", "0,5 ‰. An „4-Way Stops“ fährt zuerst, wer zuerst da war. Nachts nicht über Land fahren."]
  ],
  substances: [
    ["Cannabis", "Für Erwachsene privat erlaubt – in der Öffentlichkeit und Kauf/Verkauf aber verboten."],
    ["Alkohol", "Ab 18. Trinken in der Öffentlichkeit ist verboten; Verkauf sonntags je nach Provinz eingeschränkt."]
  ],
  sim: [
    ["Lokale SIM", "Vodacom, MTN oder Cell C am Flughafen – Pass und Adresse nötig (RICA-Registrierung)."],
    ["eSIM", "Alternativ vorab eSIM (z. B. Airalo) buchen – am einfachsten schon vor dem Abflug einrichten."]
  ],
  apps: [
    ["Uber & Bolt", "Sichere Fahrdienste in den Städten."],
    ["EskomSePush", "Zeiten für Stromabschaltungen (Load Shedding)."],
    ["SANParks", "Nationalparks und Unterkünfte buchen."]
  ],

  places: [
    ["Kapstadt", -33.9249, 18.4241],
    ["Johannesburg", -26.2041, 28.0473],
    ["Krüger-Nationalpark (Skukuza)", -24.9965, 31.5916],
    ["Durban", -29.8587, 31.0218],
    ["Garden Route (Knysna)", -34.0363, 23.0471]
  ]
};
