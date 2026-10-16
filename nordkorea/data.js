/* Quick-Tools · Nordkorea – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: "nordkorea",
  name: "Nordkorea",
  flag: "🇰🇵",
  tz: "Asia/Pyongyang",
  currency: null, // Touristen zahlen in Euro, Yuan oder US-Dollar – Won ist für Ausländer praktisch nicht erhältlich

  glance: {"plug": "A / C / F", "volt": 220, "adapter": "teils – Eurostecker passt meist", "drive": "R", "water": "Nicht trinkbar", "tip": "Für Guides und Fahrer am Ende der Tour üblich", "dial": "+850"},
  taxi: {"local": "이 주소로 가 주십시오.", "phonetic": "i TSCHU-so-ro ka tschu-SCHIP-schi-o"},

  phrases: [
    { title: "🇰🇵 Koreanisch", lang: "ko-KP", items: [
      {"de": "Hallo / Guten Tag", "local": "안녕하십니까", "phonetic": "an-njong-ha-SCHIM-ni-kka"},
      {"de": "Danke schön", "local": "감사합니다", "phonetic": "kam-sa-HAM-ni-da"},
      {"de": "Entschuldigung", "local": "미안합니다", "phonetic": "mi-an-HAM-ni-da"},
      {"de": "Wie viel kostet das?", "local": "이거 얼마입니까?", "phonetic": "i-go OL-ma-im-ni-kka"},
      {"de": "Die Rechnung, bitte", "local": "계산해 주십시오", "phonetic": "kje-san-hä tschu-SCHIP-schi-o"},
      {"de": "Sprechen Sie Englisch?", "local": "영어를 할 줄 압니까?", "phonetic": "jong-o-rül hal tschul AM-ni-kka"},
      {"de": "Wo ist das Krankenhaus?", "local": "병원이 어디 있습니까?", "phonetic": "pjong-won-i O-di is-süm-ni-kka"},
      {"de": "Ein großes Bier bitte", "local": "큰 맥주 한 병 주십시오", "phonetic": "khün MÄK-tschu han pjong tschu-SCHIP-schi-o"},
      {"de": "Ich bin Vegetarier/in", "local": "저는 채식주의자입니다", "phonetic": "tscho-nün TSCHÄ-schik-tschu-i-dscha-im-ni-da"},
      {"de": "Ich esse kein Fleisch und Fisch, aber Eier schon", "local": "고기와 생선은 안 먹지만 달걀은 먹습니다", "phonetic": "ko-gi-wa säng-son-ün an mok-tschi-man tal-gja-rün MOK-süm-ni-da"},
      {"de": "Das Essen war sehr lecker", "local": "정말 맛있었습니다", "phonetic": "tschong-mal ma-SCHI-sos-süm-ni-da"},
      {"de": "Hilfe! Es ist ein Notfall!", "local": "도와주십시오! 응급 상황입니다!", "phonetic": "to-wa-tschu-SCHIP-schi-o! üng-güp sang-hwang-im-ni-da"}
    ]}
  ],

  status: [
    ["Anerkennung", "Nordkorea (Demokratische Volksrepublik Korea) ist seit 1991 UN-Mitglied; Deutschland unterhält seit 2001 diplomatische Beziehungen. Südkorea erkennt Nordkorea verfassungsrechtlich nicht als eigenständigen Staat an und beansprucht die ganze Halbinsel. Japan und die USA unterhalten keine diplomatischen Beziehungen."],
    ["Grenze zu Südkorea", "Kein regulärer Grenzübertritt nach Südkorea möglich. Einreise nur über China (Peking, Dandong) oder Russland (Wladiwostok)."]
  ],
  emergency: [
    ["+49 30 1817 0", "Auswärtiges Amt Berlin (rund um die Uhr)"]
  ],
  embassy: {"title": "Deutsche Botschaft Pjöngjang (derzeit geschlossen)", "address": ["Munsu-dong, Pjöngjang", "Seit 2020 nicht besetzt – im Notfall das Auswärtige Amt in Berlin kontaktieren"], "phone": "+49 30 1817 0"},
  aaUrl: "https://www.auswaertiges-amt.de/de/service/laender/koreademokratischevolksrepublik-node",

  rules: [
    ["Reisewarnung", "Das Auswärtige Amt rät dringend von Reisen nach Nordkorea ab; konsularische Hilfe ist kaum möglich – vor jeder Reise die aktuelle Lage prüfen."],
    ["Nur geführte Reisen", "Touristische Einreise nur mit staatlich genehmigter Gruppenreise; staatliche Reiseleiter begleiten jederzeit. Seit 2020 ist das Land für westliche Touristen weitgehend geschlossen."],
    ["Führer-Kult", "An Statuen und Bildern der Staatsführer respektvoll verhalten (Verbeugung wird erwartet). Zeitungen mit ihren Bildern nicht falten oder wegwerfen."],
    ["Fotografieren", "Nur dort, wo die Reiseleitung es erlaubt. Keine Fotos von Militär, Baustellen oder Menschen ohne Zustimmung."],
    ["Mitbringen", "Keine Bibeln, religiösen Schriften, südkoreanischen Medien oder politischen Inhalte – auch nicht auf Handy oder Laptop. Verstöße werden mit Haft bestraft."]
  ],
  car: [
    ["Selbstfahren", "Für Touristen nicht möglich – alle Fahrten erfolgen mit Fahrer der Reiseagentur."]
  ],
  substances: [
    ["Alkohol", "Bier (z. B. Taedonggang) und Soju sind in Hotels erhältlich."],
    ["Drogen", "Streng verboten – es drohen lange Haftstrafen in Arbeitslagern."]
  ],
  sim: [
    ["Kein Roaming", "Deutsche Handys haben kein Netz. Eine Koryolink-SIM für Ausländer ist teuer und erlaubt nur Auslandsgespräche – das Internet ist praktisch nicht zugänglich."]
  ],
  apps: [
    ["Offline-Karten", "Vorher Karten und Übersetzer offline speichern – vor Ort gibt es kein Internet."],
    ["Bargeld", "Euro, Yuan oder US-Dollar in kleinen Scheinen mitnehmen; ausländische Karten funktionieren nicht."]
  ],

  places: [
    ["Pjöngjang", 39.0392, 125.7625],
    ["Kaesong", 37.9706, 126.5544],
    ["Panmunjom (DMZ)", 37.956, 126.6772],
    ["Wonsan", 39.1528, 127.4436],
    ["Paektu-san", 42.0062, 128.0556]
  ]
};
