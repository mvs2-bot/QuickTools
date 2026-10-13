/* Quick-Tools · Südkorea – Länderdaten (nur diese Datei pro Land bearbeiten) */
window.QT = {
  slug: 'suedkorea',
  name: 'Südkorea',
  flag: '🇰🇷',
  tz: 'Asia/Seoul',
  currency: { code: 'KRW', symbol: '₩', name: 'Südkoreanischer Won', tableDecimals: 0 },

  phrases: [
    { title: '🇰🇷 Koreanisch', lang: 'ko-KR', items: [
      { de: 'Hallo', local: '안녕하세요', phonetic: 'Annyeonghaseyo' },
      { de: 'Danke schön', local: '감사합니다', phonetic: 'Gamsahamnida' },
      { de: 'Entschuldigung (Bedienung rufen)', local: '저기요', phonetic: 'Jeogiyo' },
      { de: 'Wie viel kostet das?', local: '이거 얼마예요?', phonetic: 'Igeo eolmayeyo?' },
      { de: 'Die Rechnung, bitte', local: '계산해 주세요', phonetic: 'Gyesanhae juseyo' },
      { de: 'Sprechen Sie Englisch?', local: '영어 할 수 있어요?', phonetic: 'Yeongeo hal su isseoyo?' },
      { de: 'Wo ist das Krankenhaus?', local: '병원이 어디예요?', phonetic: 'Byeongwoni eodiyeyo?' },
      { de: 'Ein großes Bier bitte', local: '맥주 큰 거 하나 주세요', phonetic: 'Maekju keun geo hana juseyo' },
      { de: 'Ich bin Vegetarier/in', local: '저는 채식주의자예요', phonetic: 'Jeoneun chaesikjuuijayeyo' },
      { de: 'Ich esse kein Fleisch und Fisch, aber Eier schon', local: '고기랑 생선은 안 먹지만 달걀은 먹어요', phonetic: 'Gogirang saengseoneun an meokjiman dalgyareun meogeoyo' },
      { de: 'Bitte nicht scharf', local: '안 맵게 해 주세요', phonetic: 'An maepge hae juseyo' },
      { de: 'Das Essen war sehr lecker', local: '정말 맛있었어요!', phonetic: 'Jeongmal masisseosseoyo!' },
      { de: 'Hilfe! Es ist ein Notfall!', local: '도와주세요! 응급 상황이에요!', phonetic: 'Dowajuseyo! Eunggeup sanghwangieyo!' }
    ]}
  ],

  emergency: [
    ['112', 'Polizei'],
    ['119', 'Rettungsdienst & Feuerwehr'],
    ['1330', 'Korea Travel Hotline (24 h, Englisch & Übersetzung)']
  ],
  embassy: {
    title: 'Deutsche Botschaft Seoul',
    address: ['8F, Seoul Square, 416 Hangang-daero, Jung-gu', 'Seoul 04637'],
    phone: '+82 2 748 4114',
    emergency: '+82 10 5240 7124', emergencyNote: '(auch per SMS)'
  },
  aaUrl: 'https://www.auswaertiges-amt.de/de/service/laender/korearepublik-node',

  rules: [
    ['Karten-Apps', 'Google Maps funktioniert in Korea nur eingeschränkt (keine Fuß-/Autonavigation) – Naver Map oder KakaoMap nutzen.'],
    ['Höflichkeit', 'Gegenstände und Geld mit beiden Händen geben/annehmen, besonders bei Älteren. Leichte Verbeugung zur Begrüßung.'],
    ['Schuhe', 'In Wohnungen, Tempeln und vielen traditionellen Restaurants Schuhe ausziehen.'],
    ['Essen', 'Stäbchen nicht senkrecht in den Reis stecken. Beim Trinken mit Älteren den Kopf leicht abwenden.'],
    ['Trinkgeld', 'Trinkgeld ist nicht üblich.']
  ],
  sim: [
    ['Einfachste Lösung', 'Vorab eSIM (z. B. Airalo, KT, SK Telecom) buchen oder am Flughafen Incheon Daten-SIM / Pocket-WiFi holen.'],
    ['WLAN', 'Sehr gutes kostenloses WLAN in U-Bahn, Cafés und Städten.']
  ],
  apps: [
    ['Naver Map / KakaoMap', 'Navigation, Öffis und Restaurants (auch auf Englisch).'],
    ['Kakao T', 'Taxi-App, funktioniert auch mit ausländischer Kreditkarte.'],
    ['Papago', 'Übersetzer von Naver – für Koreanisch oft besser als Google.'],
    ['T-money', 'Aufladbare Karte für U-Bahn, Bus und Convenience Stores.']
  ],

  places: [
    ['Seoul', 37.5665, 126.978], ['Busan', 35.1796, 129.0756], ['Jeju', 33.4996, 126.5312],
    ['Gyeongju', 35.8562, 129.2247], ['Incheon', 37.4563, 126.7052]
  ]
};
