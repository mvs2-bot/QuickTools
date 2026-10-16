/* Quick-Tools · China – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: 'china',
  name: 'China',
  flag: '🇨🇳',
  tz: 'Asia/Shanghai',
  currency: { code: 'CNY', symbol: '¥', name: 'Chinesischer Yuan (Renminbi)' },

  glance: {"plug": "A / C / I", "volt": 220, "adapter": "teils – Eurostecker passt oft", "drive": "R", "water": "Nicht trinkbar", "tip": "Nicht üblich", "dial": "+86"},
  taxi: {"local": "请带我去这个地址。", "phonetic": "Qǐng dài wǒ qù zhège dìzhǐ."},

  phrases: [
    { title: '🇨🇳 Chinesisch (Mandarin)', lang: 'zh-CN', items: [
      { de: 'Hallo', local: '你好', phonetic: 'Nǐ hǎo' },
      { de: 'Danke', local: '谢谢', phonetic: 'Xièxie' },
      { de: 'Entschuldigung', local: '不好意思', phonetic: 'Bù hǎo yìsi' },
      { de: 'Wie viel kostet das?', local: '多少钱？', phonetic: 'Duōshao qián?' },
      { de: 'Die Rechnung, bitte', local: '买单', phonetic: 'Mǎidān' },
      { de: 'Sprechen Sie Englisch?', local: '你会说英语吗？', phonetic: 'Nǐ huì shuō Yīngyǔ ma?' },
      { de: 'Wo ist das Krankenhaus?', local: '医院在哪里？', phonetic: 'Yīyuàn zài nǎlǐ?' },
      { de: 'Eine große Flasche Bier, bitte', local: '请给我一瓶大啤酒', phonetic: 'Qǐng gěi wǒ yì píng dà píjiǔ' },
      { de: 'Ich bin Vegetarier/in', local: '我吃素', phonetic: 'Wǒ chī sù' },
      { de: 'Ich esse kein Fleisch und Fisch, aber Eier schon', local: '我不吃肉和鱼，但是吃鸡蛋', phonetic: 'Wǒ bù chī ròu hé yú, dànshì chī jīdàn' },
      { de: 'Bitte nicht scharf', local: '不要辣', phonetic: 'Bú yào là' },
      { de: 'Das Essen war sehr lecker', local: '很好吃！', phonetic: 'Hěn hǎochī!' },
      { de: 'Hilfe! Es ist ein Notfall!', local: '救命！这是紧急情况！', phonetic: 'Jiùmìng! Zhè shì jǐnjí qíngkuàng!' }
    ]}
  ],

  emergency: [
    ['110', 'Polizei'],
    ['120', 'Rettungsdienst'],
    ['119', 'Feuerwehr'],
    ['122', 'Verkehrsunfall']
  ],
  embassy: {
    title: 'Deutsche Botschaft Peking',
    address: ['17 Dong Zhi Men Wai Da Jie, Chaoyang District', 'Beijing 100600'],
    phone: '+86 10 8532 9000',
    emergency: '+86 10 8532 9202', emergencyNote: '(nur für deutsche Staatsangehörige, keine Visafragen)'
  },
  aaUrl: 'https://www.auswaertiges-amt.de/de/service/laender/china-node',

  status: [
    ["Taiwan", "Die Volksrepublik betrachtet Taiwan als Teil Chinas und erkennt die Regierung in Taipeh nicht an. Taiwan hat eigene Einreiseregeln und eine eigene Währung."],
    ["Hongkong & Macau", "Sonderverwaltungszonen mit eigener Einreise, eigener Währung und eigenem Notruf (999) – bei der Weiterreise nach Festlandchina gilt wieder die chinesische Einreise."]
  ],
  rules: [
    ["Internet", "Google (inkl. Maps, Gmail), WhatsApp, Instagram u. a. sind gesperrt. Eine ausländische eSIM mit Roaming umgeht das meist – vor der Reise einrichten! VPN-Nutzung ist offiziell verboten."],
    ["Bezahlen", "Fast alles läuft über Alipay oder WeChat Pay. Beide Apps vorab installieren und mit Kreditkarte verknüpfen. Etwas Bargeld als Reserve."],
    ["Einreise", "Mit deutschem Reisepass bis 30 Tage visumfrei (Regelung gilt bis 31.12.2026); Pass muss für den ganzen Aufenthalt gültig sein. Personalausweis wird nicht anerkannt."],
    ["Reisepass", "Pass immer dabeihaben – er wird für Hotels, Züge und viele Sehenswürdigkeiten (Online-Reservierung!) gebraucht."],
    ["Politik", "Politische Themen in der Öffentlichkeit meiden; keine Fotos von Militär, Polizei oder Demonstrationen."],
    ["Trinkgeld", "Trinkgeld ist nicht üblich."]
  ],
  car: [
    ["Führerschein", "Der internationale Führerschein wird nicht anerkannt – Autofahren nur mit chinesischer (Kurzzeit-)Fahrerlaubnis. Einfacher: DiDi oder Fahrer buchen."],
    ["Promille", "Faktisch 0,0 ‰ – schon ab 0,2 ‰ wird bestraft, ab 0,8 ‰ ist es eine Straftat mit Haft. Nach Unfällen wird der Pass oft einbehalten (Ausreise unmöglich)."]
  ],
  bike: [
    ["E-Bikes", "Auf Radwegen sind viele lautlose E-Roller unterwegs – auch beim Überqueren gut schauen. Leihräder laufen meist über Alipay/WeChat."]
  ],
  substances: [
    ["Drogen", "Extrem harte Strafen bis zur Todesstrafe. Auch positive Drogentests (Konsum vor der Einreise) können bestraft werden."],
    ["Rauchen", "In Innenräumen vieler Großstädte (z. B. Peking, Shanghai) verboten."]
  ],
  sim: [
    ['Ausländische eSIM (empfohlen)', 'eSIM z. B. von Airalo mit Roaming-Daten – damit funktionieren Google, WhatsApp & Co. ohne VPN.'],
    ['Chinesische SIM', 'Von China Mobile/Unicom am Flughafen (Pass nötig) – dann gilt die Internetsperre.']
  ],
  apps: [
    ['Alipay & WeChat', 'Bezahlen, Taxi, Essen bestellen, Tickets – unverzichtbar.'],
    ['Amap (高德地图) / Apple Karten', 'Google Maps ist in China ungenau.'],
    ['DiDi', 'Taxi-App (auch in Englisch, in Alipay integriert).'],
    ['Trip.com', 'Zugtickets (Hochgeschwindigkeitszüge) und Hotels.']
  ],

  places: [
    ['Peking', 39.9042, 116.4074], ['Shanghai', 31.2304, 121.4737], ["Xi'an", 34.3416, 108.9398],
    ['Chengdu', 30.5728, 104.0668], ['Guilin', 25.2736, 110.29]
  ]
};
