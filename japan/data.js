/* Quick-Tools · Japan – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: 'japan',
  name: 'Japan',
  flag: '🇯🇵',
  tz: 'Asia/Tokyo',
  currency: { code: 'JPY', symbol: '¥', name: 'Japanischer Yen', tableDecimals: 0 },

  glance: {"plug": "A / B", "volt": 100, "adapter": "ja", "drive": "L", "water": "Trinkbar", "tip": "Kein Trinkgeld", "dial": "+81", "voltNote": "100 V – Netzteil muss 100–240 V können"},
  taxi: {"local": "この住所までお願いします。", "phonetic": "Kono jūsho made onegai shimasu."},

  phrases: [
    { title: '🇯🇵 Japanisch', lang: 'ja-JP', items: [
      { de: 'Hallo / Guten Tag', local: 'こんにちは', phonetic: 'Konnichiwa' },
      { de: 'Danke schön', local: 'ありがとうございます', phonetic: 'Arigatō gozaimasu' },
      { de: 'Entschuldigung', local: 'すみません', phonetic: 'Sumimasen' },
      { de: 'Wie viel kostet das?', local: 'いくらですか？', phonetic: 'Ikura desu ka?' },
      { de: 'Die Rechnung, bitte', local: 'お会計お願いします', phonetic: 'O-kaikei onegai shimasu' },
      { de: 'Sprechen Sie Englisch?', local: '英語を話せますか？', phonetic: 'Eigo o hanasemasu ka?' },
      { de: 'Wo ist das Krankenhaus?', local: '病院はどこですか？', phonetic: 'Byōin wa doko desu ka?' },
      { de: 'Ein großes Bier bitte', local: '大きいビールをください', phonetic: 'Ōkii bīru o kudasai' },
      { de: 'Ich bin Vegetarier/in', local: '私はベジタリアンです', phonetic: 'Watashi wa bejitarian desu' },
      { de: 'Ich esse kein Fleisch und Fisch, aber Eier schon', local: '肉と魚は食べませんが、卵は食べます', phonetic: 'Niku to sakana wa tabemasen ga, tamago wa tabemasu' },
      { de: 'Bitte ohne Fischbrühe (Dashi)', local: '魚の出汁なしでお願いします', phonetic: 'Sakana no dashi nashi de onegai shimasu' },
      { de: 'Das Essen war sehr lecker', local: 'とても美味しかったです', phonetic: 'Totemo oishikatta desu' },
      { de: 'Hilfe! Es ist ein Notfall!', local: '助けて！緊急です！', phonetic: 'Tasukete! Kinkyū desu!' }
    ]}
  ],

  emergency: [
    ['119', 'Rettungsdienst & Feuerwehr'],
    ['110', 'Polizei'],
    ['050-3816-2787', 'Japan Visitor Hotline (24 h, Englisch)']
  ],
  embassy: {
    title: 'Deutsche Botschaft Tokyo',
    address: ['4-5-10 Minami-Azabu, Minato-ku', 'Tokyo 106-0047', '(Metro Hiro-o, Hibiya Line, Ausgang 1)'],
    phone: '+81 3 5791 7700'
  },
  aaUrl: 'https://www.auswaertiges-amt.de/de/service/laender/japan-node',

  rules: [
    ['Schuhe', 'In Wohnungen, Ryokans, vielen Tempeln und manchen Restaurants Schuhe ausziehen – auf Hausschuhe/Regale achten.'],
    ['Trinkgeld', 'Kein Trinkgeld geben – das gilt eher als unhöflich.'],
    ['Öffentlicher Raum', 'In Bahnen leise sein und nicht telefonieren. Im Gehen essen ist unüblich. Müll wieder mitnehmen – es gibt kaum Mülleimer.'],
    ['Onsen', 'Vor dem Bad gründlich waschen, nackt baden, Handtuch nicht ins Wasser. Tattoos sind oft nicht erlaubt – vorher fragen.'],
    ['Medikamente', 'Einige in Deutschland erhältliche Mittel (z. B. mit Pseudoephedrin, Codein) sind verboten oder genehmigungspflichtig – vorher prüfen.'],
    ['Ausweis', 'Reisepass muss immer mitgeführt werden.']
  ],
  sim: [
    ['Einfachste Lösung', 'Vorab eSIM (z. B. Airalo, Ubigi) buchen oder am Flughafen Daten-SIM / Pocket-WiFi holen.'],
    ['Hinweis', 'Reine Daten-SIMs haben meist keine Telefonnummer – Notrufe gehen trotzdem.']
  ],
  apps: [
    ['Suica / Pasmo (Apple / Google Wallet)', 'Digitale IC-Karte für Bahn, Bus und Konbini.'],
    ['Japan Transit Planner / Google Maps', 'Sehr genaue Zugverbindungen inkl. Gleis.'],
    ['GO Taxi', 'Taxis per App bestellen.'],
    ['Google Translate (Kamera)', 'Speisekarten und Schilder per Kamera übersetzen.']
  ],

  places: [
    ['Tokio', 35.6762, 139.6503], ['Kyoto', 35.0116, 135.7681], ['Osaka', 34.6937, 135.5023],
    ['Hiroshima', 34.3853, 132.4553], ['Sapporo', 43.0618, 141.3545]
  ]
};
