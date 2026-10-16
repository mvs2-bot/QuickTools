/* ==========================================================================
   URLAUBS-QUICK-TOOLS – gemeinsamer Code für alle Länder
   --------------------------------------------------------------------------
   Jede Länderseite lädt zuerst ihre eigene  data.js  (window.QT = {...})
   und danach diese Datei. Änderungen hier wirken sofort in ALLEN Ländern.
   ========================================================================== */
(function () {
  'use strict';
  if (!window.QT) { document.body.textContent = 'Fehler: data.js fehlt.'; return; }

  /* ---------- Sprache (DE/EN): gilt für alle Länder, Inhalte aus shared/i18n-en.js ---------- */
  const LANG_KEY = 'qt_lang_v1';
  const LANG = (() => { try { return localStorage.getItem(LANG_KEY) === 'en' ? 'en' : 'de'; } catch (e) { return 'de'; } })();
  const LOCALE = LANG === 'en' ? 'en-GB' : 'de-DE';
  const DICT = LANG === 'en' ? (window.QT_EN || {}) : {};
  const tr = s => (typeof s === 'string' && DICT[s]) ? DICT[s] : s;     // Inhalte übersetzen (fehlt etwas → Deutsch)
  const UI = {"appTitle": ["Urlaubs-Quick-Tools", "Holiday Quick Tools"], "allCountries": ["Alle Länder", "All countries"], "tabFx": ["Rechner", "Currency"], "tabFxLong": ["Währungsrechner", "Currency converter"], "tabPhr": ["Phrasen", "Phrases"], "tabPhrLong": ["Wichtige Phrasen & Audio", "Key phrases & audio"], "tabGps": ["GPS", "GPS"], "tabGpsLong": ["GPS-Standort", "GPS location"], "tabInfo": ["Infos", "Info"], "tabInfoLong": ["Infos & Notfall", "Info & emergency"], "quick": ["Schnellzugriff", "Quick access"], "darkOn": ["Zum dunklen Modus wechseln", "Switch to dark mode"], "lightOn": ["Zum hellen Modus wechseln", "Switch to light mode"], "darkTitle": ["Dunklen Modus aktivieren", "Enable dark mode"], "lightTitle": ["Hellen Modus aktivieren", "Enable light mode"], "menu": ["Menü öffnen", "Open menu"], "close": ["Schließen", "Close"], "langBtn": ["Switch to English", "Auf Deutsch umschalten"], "glance": ["Auf einen Blick", "At a glance"], "socket": ["Steckdose", "Power socket"], "type": ["Typ", "Type"], "noAdapter": ["✅ Kein Adapter nötig", "✅ No adapter needed"], "adapter": ["⚠️ Adapter nötig", "⚠️ Adapter needed"], "traffic": ["Straßenverkehr", "Traffic"], "left": ["⚠️ Linksverkehr", "⚠️ Drives on the left"], "right": ["Rechtsverkehr", "Drives on the right"], "water": ["Leitungswasser", "Tap water"], "tip": ["Trinkgeld", "Tipping"], "dial": ["Ländervorwahl", "Country code"], "fxTitle": ["Wechselkurs-Rechner", "Currency converter"], "amount": ["Betrag", "Amount"], "from": ["Von", "From"], "to": ["Nach", "To"], "swap": ["Währungen tauschen", "Swap currencies"], "equals": ["↓ entspricht", "↓ equals"], "result": ["Ergebnis", "Result"], "rates": ["Aktuelle Kurse", "Current rates"], "refresh": ["🔄 Aktualisieren", "🔄 Refresh"], "ratesLoading": ["Kurse werden geladen...", "Loading rates..."], "manualSum": ["✏️ Eigenen Kurs verwenden", "✏️ Use your own rate"], "manualNote": ["Z. B. den Kurs der Wechselstube oder – in Argentinien – den tatsächlichen Kartenkurs. Gilt nur auf diesem Gerät.", "E.g. the exchange office rate or – in Argentina – the actual card rate. Only applies on this device."], "manualAria": ["Eigener Kurs", "Own rate"], "apply": ["Übernehmen", "Apply"], "backLive": ["Zurück zum Live-Kurs", "Back to live rate"], "overview": ["Betragsübersicht", "Quick reference"], "overviewNote": ["Gängige Beträge in Euro, umgerechnet zum aktuellen Tageskurs.", "Common amounts in euros, converted at today's rate."], "phrTitle": ["Wichtige Notfall- & Alltagsphrasen", "Key emergency & everyday phrases"], "phrNote": ["Zum Vorzeigen oder Vorlesen lassen per Klick (Audio).", "Show them or tap to have them read aloud (audio)."], "search": ["Phrase suchen", "Search phrases"], "german": ["Deutsch", "English"], "pron": ["Aussprache", "pronunciation"], "ownAdd": ["➕ Eigene Phrase hinzufügen", "➕ Add your own phrase"], "ownEx": ["z. B. Ich habe eine Nussallergie", "e.g. I have a nut allergy"], "ownTr": ["Übersetzung (z. B. aus Google Translate kopieren)", "Translation (e.g. copied from Google Translate)"], "ownPh": ["Aussprache (optional)", "Pronunciation (optional)"], "save": ["💾 Speichern", "💾 Save"], "ownNote": ["Eigene Phrasen und Favoriten (☆) werden nur auf diesem Gerät gespeichert.", "Your own phrases and favourites (☆) are only stored on this device."], "taxiTitle": ["Taxi-Karte „Bring mich zu …“", "Taxi card \"Take me to …\""], "taxiNote": ["Unterkunft eintragen und dem Fahrer im Vollbild zeigen. Tipp: Adresse aus der Buchung in Landesschrift kopieren. Wird nur auf diesem Gerät gespeichert.", "Enter your accommodation and show it to the driver full screen. Tip: copy the address from your booking in the local script. Only stored on this device."], "taxiName": ["Name der Unterkunft", "Accommodation name"], "taxiAddr": ["Adresse", "Address"], "taxiAddrPh": ["Straße, Ort (gern in Landesschrift)", "Street, town (ideally in the local script)"], "taxiTel": ["Telefon der Unterkunft (optional)", "Accommodation phone (optional)"], "showBig": ["⛶ Groß zeigen", "⛶ Show full screen"], "openMaps": ["🗺️ In Maps öffnen", "🗺️ Open in Maps"], "clear": ["🗑️ Löschen", "🗑️ Clear"], "gpsTitle": ["GPS-Standort", "GPS location"], "gpsBtn": ["🛰️ Standort ermitteln", "🛰️ Get location"], "gpsNote": ["Ermittle deine aktuellen Koordinaten für Notfälle oder Taxifahrer.", "Get your current coordinates for emergencies or taxi drivers."], "lat": ["Breitengrad (Lat)", "Latitude (Lat)"], "lng": ["Längengrad (Lng)", "Longitude (Lng)"], "acc": ["Genauigkeit / Status", "Accuracy / status"], "notYet": ["Noch nicht ermittelt", "Not determined yet"], "copy": ["📋 Koordinaten kopieren", "📋 Copy coordinates"], "sunTitle": ["Sonnenauf- &amp; -untergang", "Sunrise &amp; sunset"], "sunNote": ["Heute, offline berechnet. Nach dem Standort-Abruf wird dein GPS-Standort verwendet (Ortszeit des Geräts).", "Today, calculated offline. After getting your location, your GPS position is used (device local time)."], "place": ["Ort", "Place"], "sunrise": ["🌅 Sonnenaufgang", "🌅 Sunrise"], "sunset": ["🌇 Sonnenuntergang", "🌇 Sunset"], "daylen": ["☀️ Tageslänge", "☀️ Day length"], "myLoc": ["📍 Mein Standort (nach GPS-Abruf)", "📍 My location (after GPS fix)"], "emg": ["🚨 Notrufnummern (zum Anrufen antippen)", "🚨 Emergency numbers (tap to call)"], "phone": ["Telefon", "Phone"], "outside": ["Notfälle außerhalb der Öffnungszeiten", "Emergencies outside opening hours"], "gmaps": ["🗺️ In Google Maps öffnen", "🗺️ Open in Google Maps"], "aa": ["Auswärtiges Amt", "German Foreign Office"], "rules": ["🙏 Verhaltensregeln", "🙏 Etiquette & rules"], "rulesNote": ["Allgemeine Hinweise zur Orientierung – aktuelle Vorgaben bitte beim Auswärtigen Amt prüfen.", "General guidance – please check current rules with official sources before you travel."], "sim": ["📱 SIM-Karten & Internet", "📱 SIM cards & internet"], "apps": ["📲 Nützliche Apps", "📲 Useful apps"], "noTts": ["Dein Browser unterstützt leider keine Sprachausgabe.", "Sorry, your browser doesn't support speech output."], "noVoiceToast": ["🔇 Keine Stimme für {l} installiert – zeig die Phrase groß (⛶).", "🔇 No voice installed for {l} – show the phrase full screen (⛶)."], "noVoiceNote": ["🔇 Auf diesem Gerät ist keine Stimme für {l} installiert. Phrasen dann mit ⛶ groß zeigen – oder in den Handy-Einstellungen unter „Sprachausgabe“ das Sprachpaket nachladen.", "🔇 No voice is installed on this device for {l}. Show phrases full screen with ⛶ – or download the language pack in your phone settings under \"Text-to-speech\"."], "ownGroup": ["✍️ Eigene Phrasen", "✍️ My phrases"], "favGroup": ["⭐ Favoriten", "⭐ Favourites"], "noVoiceTitle": ["Keine Stimme installiert", "No voice installed"], "readAloud": ["Vorlesen", "Read aloud"], "listen": [" Anhören", " Listen"], "big": ["Groß anzeigen", "Show full screen"], "favRemove": ["Aus Favoriten entfernen", "Remove from favourites"], "favAdd": ["Zu Favoriten", "Add to favourites"], "fav": ["Favorit", "Favourite"], "ownDel": ["Eigene Phrase löschen", "Delete own phrase"], "del": ["Löschen", "Delete"], "noMatch": ["Keine passende Phrase gefunden.", "No matching phrase found."], "confirmDel": ["Eigene Phrase löschen?", "Delete this phrase?"], "fillBoth": ["Bitte Deutsch und Übersetzung ausfüllen.", "Please fill in English and the translation."], "saved": ["✅ Phrase gespeichert", "✅ Phrase saved"], "back": ["Zurück", "Back"], "next": ["Weiter", "Next"], "closeX": ["✕ Schließen", "✕ Close"], "taxiFirst": ["Bitte erst Name oder Adresse der Unterkunft eintragen.", "Please enter the accommodation name or address first."], "taxiConfirm": ["Taxi-Karte leeren?", "Clear the taxi card?"], "gpsNo": ["GPS wird nicht unterstützt", "GPS not supported"], "gpsSearch": ["Suche Satelliten...", "Searching for satellites..."], "gpsAcc": ["Genau: ±{m}m", "Accuracy: ±{m}m"], "gpsErr": ["Fehler / Zugriff verweigert", "Error / access denied"], "gpsFirst": ["Bitte erst den Standort ermitteln!", "Please get your location first!"], "copied": ["📋 Koordinaten kopiert", "📋 Coordinates copied"], "copyFail": ["Kopieren nicht möglich. Koordinaten: ", "Copying not possible. Coordinates: "], "rateFail": ["⚠️ Kurse konnten nicht geladen werden (keine Verbindung).", "⚠️ Rates could not be loaded (no connection)."], "ownActive": ["✏️ Eigener Kurs aktiv", "✏️ Own rate active"], "liveWould": [" · Live-Kurs wäre ", " · live rate would be "], "liveRate": ["✅ Live-Kurs, Stand: {w} · Quelle: open.er-api.com", "✅ Live rate, as of {w} · source: open.er-api.com"], "offlineRate": ["📴 Offline – zuletzt gespeicherter Kurs vom {w}", "📴 Offline – last saved rate from {w}"], "noRates": ["Keine Kurse verfügbar", "No rates available"], "rateFrom": ["Kurs vom {d}", "Rate from {d}"], "rateOld": [" · ⚠️ älter als {n} Tage", " · ⚠️ more than {n} days old"], "enterAmount": ["Bitte Betrag eingeben", "Please enter an amount"], "rateWord": ["Kurs", "Rate"], "ownRateSuffix": [" (eigener Kurs)", " (own rate)"], "validRate": ["Bitte einen gültigen Kurs eingeben.", "Please enter a valid rate."], "rateApplied": ["✏️ Eigener Kurs übernommen", "✏️ Own rate applied"], "liveAgain": ["✅ Wieder Live-Kurs", "✅ Back to live rate"], "euro": ["Euro", "Euro"], "taxiFallback": ["Please take me to this address.", "Please take me to this address."], "traffic2": ["🚦 Verkehrsregeln", "🚦 Traffic rules"], "trafficNote": ["Besonderheiten für Autofahrer und Radfahrer – ohne Gewähr, Regeln können sich ändern.", "Special rules for drivers and cyclists – no guarantee, rules can change."], "carSub": ["🚗 Auto & Roller", "🚗 Car & scooter"], "bikeSub": ["🚲 Fahrrad", "🚲 Bicycle"], "subs": ["🍺 Alkohol, Tabak & Drogen", "🍺 Alcohol, tobacco & drugs"], "status": ["🌐 Status & Anerkennung", "🌐 Status & recognition"], "subsNote": ["Was ist erlaubt, was nicht? Ohne Gewähr – im Zweifel beim Auswärtigen Amt nachlesen.", "What is allowed and what isn’t? No guarantee – if in doubt, check official travel advice."]};
  const T = new Proxy({}, { get: (o, k) => (UI[k] ? UI[k][LANG === 'en' ? 1 : 0] : k) });
  document.documentElement.lang = LANG;
  const C = (function localize(Q) {
    const c = JSON.parse(JSON.stringify(Q));
    c.phrases.forEach(g => g.items.forEach(p => { p.id = 'b:' + p.de + '|' + p.local; }));   // Favoriten-ID bleibt sprachunabhängig
    if (LANG !== 'en') return c;
    c.name = tr(c.name);
    if (c.currency) c.currency.name = tr(c.currency.name);
    c.phrases.forEach(g => { g.title = tr(g.title); g.items.forEach(p => { p.de = tr(p.de); }); });
    c.emergency = c.emergency.map(e => [e[0], tr(e[1])]);
    if (c.embassy) { c.embassy.title = tr(c.embassy.title); c.embassy.emergencyNote = tr(c.embassy.emergencyNote); c.embassy.address = c.embassy.address.map(tr); }
    ['aaLabel', 'rulesTitle', 'rulesNote'].forEach(k => { if (c[k]) c[k] = tr(c[k]); });
    ['status', 'rules', 'sim', 'apps', 'car', 'bike', 'substances'].forEach(k => { if (c[k]) c[k] = c[k].map(r => [tr(r[0]), tr(r[1])]); });
    if (c.glance) ['water', 'tip', 'voltNote', 'driveNote', 'dialNote'].forEach(k => { if (c.glance[k]) c.glance[k] = tr(c.glance[k]); });
    if (c.glance && !['ja', 'nein'].includes(c.glance.adapter)) c.glance.adapter = tr(c.glance.adapter);
    c.places = c.places.map(p => [tr(p[0])].concat(p.slice(1)));
    return c;
  })(window.QT);

  const $ = s => document.querySelector(s);
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const telHref = n => 'tel:' + String(n).replace(/[^\d+]/g, '');
  const KEY = 'qt_' + C.slug + '_';            // eigener Speicher-Bereich je Land
  const THEME_KEY = 'qt_theme_v1';             // Hell/Dunkel gilt für alle Länder
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  /* ---------- Zeitzone: Uhren nur zeigen, wenn Zeit von DE abweicht ---------- */
  function offsetMin(tz, d) {
    const p = new Intl.DateTimeFormat('en-US', { timeZone: tz, hourCycle: 'h23', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' }).formatToParts(d);
    const g = t => +p.find(x => x.type === t).value;
    return (Date.UTC(g('year'), g('month') - 1, g('day'), g('hour'), g('minute')) - Math.floor(d / 60000) * 60000) / 60000;
  }
  const showClocks = offsetMin(C.tz, new Date()) !== offsetMin('Europe/Berlin', new Date());
  const hasFx = !!C.currency;

  /* ---------- Tabs ---------- */
  const TABS = [];
  if (hasFx) TABS.push({ id: 'currency', icon: '🧮', short: T.tabFx, long: T.tabFxLong });
  TABS.push({ id: 'phrases', icon: '🗣️', short: T.tabPhr, long: T.tabPhrLong });
  TABS.push({ id: 'gps', icon: '📍', short: T.tabGps, long: T.tabGpsLong });
  TABS.push({ id: 'misc', icon: '🚨', short: T.tabInfo, long: T.tabInfoLong });
  const START = TABS[0].id;

  /* ---------- Seitenaufbau ---------- */
  document.title = `${C.flag} Quick-Tools ${C.name}`;
  const infoList = rows => `<ul class="info-list" style="margin-top:8px">${rows.map(r => `<li><strong>${esc(r[0])}:</strong> ${esc(r[1])}</li>`).join('')}</ul>`;
  const langPill = () => `<span class="${LANG === 'de' ? 'on' : ''}">DE</span><span class="${LANG === 'en' ? 'on' : ''}">EN</span>`;
  const fx = C.currency;
  const allPhraseLangs = C.phrases.map(g => g.title).join(', ');

  function glanceHtml(g) {
    const adapter = g.adapter === 'nein' ? T.noAdapter : g.adapter === 'ja' ? T.adapter : (g.adapter || '');
    const drive = g.drive === 'L' ? T.left : T.right;
    const tile = (ico, lbl, val, sub) => `<div class="glance-tile"><span>${ico} ${lbl}</span><b>${esc(val)}</b>${sub ? `<small>${esc(sub)}</small>` : ''}</div>`;
    return `<div class="box"><h2>👀 ${T.glance}</h2><div class="glance-grid">
      ${tile('🔌', T.socket, T.type + ' ' + g.plug + (g.volt ? ' · ' + g.volt + ' V' : ''), adapter + (g.voltNote ? ' · ' + g.voltNote : ''))}
      ${tile('🚗', T.traffic, drive, g.driveNote || '')}
      ${tile('🚰', T.water, g.water, '')}
      ${tile('💶', T.tip, g.tip, '')}
      ${tile('📞', T.dial, g.dial, g.dialNote || '')}
    </div></div>`;
  }

  const html = `
  <div class="wrap">
    <div class="sticky-header">
      <header>
        <div>
          <a class="home-link" href="../">← ${T.allCountries}</a>
          <h1>⚡ ${T.appTitle} ${C.flag}</h1>
          <p>${C.flag} ${esc(C.name)}</p>
        </div>
        <div class="header-actions">
          <button class="burger-btn theme-toggle" type="button" aria-label="${T.darkOn}">🌙</button>
          <button class="burger-btn lang-toggle" type="button" title="${T.langBtn}" aria-label="${T.langBtn}">${langPill()}</button>
          <button id="menuBurger" class="burger-btn" aria-label="${T.menu}">☰</button>
        </div>
      </header>
      <div class="header-clocks-bar${showClocks ? '' : ' hidden'}">
        <div class="clock-badge"><span>🇩🇪 DE</span><b id="clockHome">-:--</b></div>
        <div class="clock-badge"><span>${C.flag} ${esc(C.name)}</span><b id="clockLocal">-:--</b></div>
      </div>
      <div class="tabs${TABS.length === 3 ? ' cols-3' : ''}" role="tablist">
        ${TABS.map(t => `<button class="tab" data-t="${t.id}"><span>${t.icon}</span>${t.short}</button>`).join('')}
      </div>
    </div>

    <div id="navPopover" class="nav-popover">
      <div class="popover-content">
        <div class="popover-header">
          <div class="popover-title">
            <h2>🧭 ${T.quick}</h2>
            <button class="theme-toggle" type="button" aria-label="${T.darkOn}">🌙</button>
            <button class="theme-toggle lang-toggle" type="button" title="${T.langBtn}" aria-label="${T.langBtn}">${langPill()}</button>
          </div>
          <button id="closePopover" aria-label="${T.close}">✕</button>
        </div>
        <div class="popover-links">
          ${TABS.map(t => `<button data-t="${t.id}" class="pop-btn"><span>${t.icon}</span>${esc(t.long)}</button>`).join('')}
          <button class="pop-home" onclick="location.href='../'"><span>🌍</span>${T.allCountries}</button>
        </div>
      </div>
    </div>

    ${hasFx ? `
    <div id="currency" class="pane">
      <div class="box">
        <h2>🧮 ${T.fxTitle}</h2>
        <div class="fx-form">
          <div class="fx-field fx-amount">
            <label for="fxAmount">${T.amount}</label>
            <input type="number" inputmode="decimal" id="fxAmount" value="100" min="0" step="any">
          </div>
          <div class="fx-field">
            <label for="fxFrom">${T.from}</label>
            <select id="fxFrom"><option value="${fx.code}">${fx.code} (${esc(fx.symbol)})</option><option value="EUR">EUR (€)</option></select>
          </div>
          <button class="f fx-swap" id="fxSwap" aria-label="${T.swap}">⇄</button>
          <div class="fx-field">
            <label for="fxTo">${T.to}</label>
            <select id="fxTo"><option value="${fx.code}">${fx.code} (${esc(fx.symbol)})</option><option value="EUR" selected>EUR (€)</option></select>
          </div>
        </div>
        <div class="fx-result-card">
          <div class="fx-from-line" id="fxFromLine">–</div>
          <div class="fx-arrow">${T.equals}</div>
          <div class="fx-to-line" id="fxResult">–</div>
          <div class="fx-rate-line" id="fxResultLbl">${T.result}</div>
        </div>
      </div>
      <div class="box box-compact">
        <div class="mh"><h2>💰 ${T.rates}</h2><button id="fxReload">${T.refresh}</button></div>
        <div class="rate-chips"><div class="rate-chip"><span>${C.flag} 1 € in ${esc(fx.name)}</span><b id="rateLocal">–</b><small class="rate-date" id="rateDate"></small></div></div>
        <p class="rate-status" id="rateStatus">${T.ratesLoading}</p>
        <details class="fx-manual" id="fxManualBox">
          <summary>${T.manualSum}</summary>
          <p class="note" style="margin:6px 0 8px">${T.manualNote}</p>
          <div class="fx-manual-row">
            <span>1 € =</span><input type="number" inputmode="decimal" step="any" min="0" id="fxManual" aria-label="${T.manualAria}"><span>${fx.code}</span>
          </div>
          <div class="link-row"><button class="link-btn primary" id="fxManualSave">${T.apply}</button><button class="link-btn" id="fxManualOff">${T.backLive}</button></div>
        </details>
      </div>
      <div class="box">
        <h2 style="margin-bottom:6px">📊 ${T.overview}</h2>
        <p class="note">${T.overviewNote}</p>
        <div class="fx-table-wrap"><table class="fx-table">
          <thead><tr><th>EUR</th><th>${fx.code}</th></tr></thead><tbody id="fxTableBody"></tbody>
        </table></div>
      </div>
    </div>` : ''}

    <div id="phrases" class="pane">
      <div class="box">
        <h2>🗣️ ${T.phrTitle}</h2>
        <p class="note">${T.phrNote}</p>
        <input type="search" id="phraseSearch" class="phrase-search" placeholder="🔍 ${T.search} (${T.german}, ${esc(allPhraseLangs)}, ${T.pron})…">
        <div id="voiceNote"></div>
        <div id="phraseList"></div>
        <details class="own-form">
          <summary>${T.ownAdd}</summary>
          <div class="own-fields">
            <div class="fx-field"><label for="ownDe">${T.german}</label><input id="ownDe" placeholder="${T.ownEx}"></div>
            <div class="fx-field"><label for="ownLocal">${esc(C.phrases[0].title.replace(/^\S+\s/, ''))}</label><input id="ownLocal" placeholder="${T.ownTr}"></div>
            <div class="fx-field"><label for="ownPh">${T.ownPh}</label><input id="ownPh"></div>
            <button class="f own-save" id="ownSave">${T.save}</button>
          </div>
          <p class="note" style="margin:8px 0 0">${T.ownNote}</p>
        </details>
      </div>
    </div>

    <div id="gps" class="pane">
      <div class="box">
        <h2>🚕 ${T.taxiTitle}</h2>
        <p class="note">${T.taxiNote}</p>
        <div class="taxi-fields">
          <div class="fx-field"><label for="taxiName">${T.taxiName}</label><input id="taxiName" placeholder="z. B. Hotel Sunshine"></div>
          <div class="fx-field"><label for="taxiAddr">${T.taxiAddr}</label><textarea id="taxiAddr" rows="3" placeholder="${T.taxiAddrPh}"></textarea></div>
          <div class="fx-field"><label for="taxiTel">${T.taxiTel}</label><input id="taxiTel" type="tel" placeholder="+…"></div>
        </div>
        <div class="link-row">
          <button class="link-btn primary" id="taxiShow">${T.showBig}</button>
          <button class="link-btn" id="taxiMaps">${T.openMaps}</button>
          <button class="link-btn" id="taxiClear">${T.clear}</button>
        </div>
      </div>
      <div class="box">
        <div class="mh"><h2>📍 ${T.gpsTitle}</h2><button id="gpsBtn">${T.gpsBtn}</button></div>
        <p class="note">${T.gpsNote}</p>
        <div class="gps-grid">
          <div class="gps-stat"><span>${T.lat}</span><b id="gpsLat">–</b></div>
          <div class="gps-stat"><span>${T.lng}</span><b id="gpsLng">–</b></div>
        </div>
        <div class="gps-stat" style="margin-bottom:14px"><span>${T.acc}</span><b id="gpsStatus">${T.notYet}</b></div>
        <button class="f" id="gpsCopy" style="width:100%;padding:12px;font-size:.95rem;background:var(--p1);color:#fff;border:none;border-radius:8px;font-weight:700">${T.copy}</button>
      </div>
      <div class="box">
        <h2>🌅 ${T.sunTitle}</h2>
        <p class="note">${T.sunNote}</p>
        <div class="fx-field" style="margin-bottom:12px"><label for="sunPlace">${T.place}</label><select id="sunPlace"></select></div>
        <div class="gps-grid">
          <div class="gps-stat"><span>${T.sunrise}</span><b id="sunRise">–</b></div>
          <div class="gps-stat"><span>${T.sunset}</span><b id="sunSet">–</b></div>
        </div>
        <div class="gps-stat"><span>${T.daylen}</span><b id="sunLen">–</b></div>
      </div>
    </div>

    <div id="misc" class="pane">
      ${C.glance ? glanceHtml(C.glance) : ''}
      <div class="box">
        <h2>${C.flag} ${esc(C.name)}</h2>
        <h3 class="info-sub">${T.emg}</h3>
        <div class="emg-grid">
          ${C.emergency.map(e => `<a class="emg-tile" href="${telHref(e[0])}"><b>${esc(e[0])}</b><span>${esc(e[1])}</span></a>`).join('')}
        </div>
        ${C.embassy ? `
        <h3 class="info-sub">🏛️ ${esc(C.embassy.title)}</h3>
        <address class="addr"><strong>${esc(C.embassy.title)}</strong><br>${C.embassy.address.map(esc).join('<br>')}</address>
        <p class="contact">
          ${T.phone}: <a href="${telHref(C.embassy.phone)}">${esc(C.embassy.phone)}</a>
          ${C.embassy.emergency ? `<br>${T.outside}: <a href="${telHref(C.embassy.emergency)}">${esc(C.embassy.emergency)}</a>${C.embassy.emergencyNote ? ' ' + esc(C.embassy.emergencyNote) : ''}` : (C.embassy.emergencyNote ? `<br>${esc(C.embassy.emergencyNote)}` : '')}
        </p>` : ''}
        ${C.embassy || C.aaUrl ? `<div class="link-row">
          ${C.embassy ? `<a class="link-btn primary" href="https://www.google.com/maps/search/?api=1&amp;query=${encodeURIComponent(C.embassy.title + ', ' + C.embassy.address.join(', '))}" target="_blank" rel="noopener">${T.gmaps}</a>` : ''}
          ${C.aaUrl ? `<a class="link-btn" href="${esc(C.aaUrl)}" target="_blank" rel="noopener">🌐 ${esc(C.aaLabel || T.aa + ': ' + C.name)}</a>` : ''}
        </div>` : ''}
      </div>
      ${C.status ? `<div class="box">
        <h2>${T.status}</h2>
        ${infoList(C.status)}
      </div>` : ''}
      <div class="box">
        <h2>${esc(C.rulesTitle || T.rules)}</h2>
        <p class="note">${esc(C.rulesNote || T.rulesNote)}</p>
        <ul class="info-list">${C.rules.map(r => `<li><strong>${esc(r[0])}:</strong> ${esc(r[1])}</li>`).join('')}</ul>
      </div>
      ${(C.car || C.bike) ? `<div class="box">
        <h2>${T.traffic2}</h2>
        <p class="note">${T.trafficNote}</p>
        ${C.car ? `<h3 class="info-sub">${T.carSub}</h3>${infoList(C.car)}` : ''}
        ${C.bike ? `<h3 class="info-sub">${T.bikeSub}</h3>${infoList(C.bike)}` : ''}
      </div>` : ''}
      ${C.substances ? `<div class="box">
        <h2>${T.subs}</h2>
        <p class="note">${T.subsNote}</p>
        ${infoList(C.substances)}
      </div>` : ''}
      <div class="box">
        <h2>${T.sim}</h2>
        <ul class="info-list" style="margin-top:8px">${C.sim.map(r => `<li><strong>${esc(r[0])}:</strong> ${esc(r[1])}</li>`).join('')}</ul>
      </div>
      <div class="box">
        <h2>${T.apps}</h2>
        <ul class="info-list" style="margin-top:8px">${C.apps.map(r => `<li><strong>${esc(r[0])}:</strong> ${esc(r[1])}</li>`).join('')}</ul>
      </div>
    </div>
  </div>`;
  document.body.insertAdjacentHTML('afterbegin', html);

  /* ---------- Navigation ---------- */
  function switchTab(id) {
    if (!TABS.some(t => t.id === id)) id = START;
    document.querySelectorAll('.tabs .tab').forEach(x => x.classList.toggle('on', x.dataset.t === id));
    document.querySelectorAll('.pane').forEach(x => x.classList.toggle('on', x.id === id));
    document.querySelectorAll('.pop-btn').forEach(x => x.classList.toggle('on', x.dataset.t === id));
    if (location.hash !== '#' + id) history.replaceState(null, '', '#' + id);
    window.scrollTo(0, 0);
  }
  const pop = $('#navPopover');
  document.querySelectorAll('.tabs .tab').forEach(b => b.onclick = () => switchTab(b.dataset.t));
  document.querySelectorAll('.pop-btn').forEach(b => b.onclick = () => { switchTab(b.dataset.t); pop.classList.remove('open'); });
  $('#menuBurger').onclick = () => pop.classList.add('open');
  $('#closePopover').onclick = () => pop.classList.remove('open');
  pop.onclick = e => { if (e.target === pop) pop.classList.remove('open'); };
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { pop.classList.remove('open'); const f = document.getElementById('phraseFull'); if (f) f.classList.remove('open'); } });
  window.addEventListener('hashchange', () => switchTab(location.hash.slice(1)));
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  switchTab(location.hash.slice(1) || START);
  window.addEventListener('load', () => setTimeout(() => window.scrollTo(0, 0), 0));

  /* ---------- Hell / Dunkel ---------- */
  function applyTheme(t, save) {
    const dark = t === 'dark';
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    const m = $('meta[name="theme-color"]');
    if (m) m.setAttribute('content', dark ? '#000000' : '#15803d');
    document.querySelectorAll('.theme-toggle:not(.lang-toggle)').forEach(b => {
      b.textContent = dark ? '☀️' : '🌙';
      b.setAttribute('aria-pressed', dark ? 'true' : 'false');
      b.setAttribute('aria-label', dark ? T.lightOn : T.darkOn);
      b.title = dark ? T.lightTitle : T.darkTitle;
    });
    if (save) store.set(THEME_KEY, t);
  }
  applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light', false);
  document.querySelectorAll('.theme-toggle:not(.lang-toggle)').forEach(b => b.onclick = e => {
    e.stopPropagation();
    applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark', true);
  });

  /* ---------- Sprache umschalten (Seite wird neu aufgebaut) ---------- */
  document.querySelectorAll('.lang-toggle').forEach(b => b.onclick = e => {
    e.stopPropagation();
    try { localStorage.setItem(LANG_KEY, LANG === 'en' ? 'de' : 'en'); } catch (err) {}
    location.reload();
  });

  /* ---------- Uhren ---------- */
  function updateClocks() {
    const now = new Date();
    const fmt = tz => now.toLocaleTimeString(LOCALE, { timeZone: tz, hour: '2-digit', minute: '2-digit' });
    $('#clockHome').textContent = fmt('Europe/Berlin');
    $('#clockLocal').textContent = fmt(C.tz);
  }
  if (showClocks) { updateClocks(); setInterval(updateClocks, 1000); }

  /* ---------- Phrasen: Liste, Suche, Favoriten, eigene Phrasen, Audio, Vollbild ---------- */
  const MAIN_LANG = C.phrases[0].lang;
  const FAV_KEY = KEY + 'fav_v1', OWN_KEY = KEY + 'own_v1';
  const load = (k, d) => { try { return JSON.parse(store.get(k)) || d; } catch (e) { return d; } };
  let favs = new Set(load(FAV_KEY, []));
  let own = load(OWN_KEY, []);
  const builtin = [];
  C.phrases.forEach(g => g.items.forEach(p => builtin.push(Object.assign({ group: g.title, lang: g.lang }, p))));
  let flat = [], shown = [], cur = 0;

  /* Toast (kurze Hinweise statt alert) */
  const toast = document.createElement('div'); toast.className = 'qt-toast'; document.body.appendChild(toast);
  let toastT;
  function say(msg) { toast.textContent = msg; toast.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => toast.classList.remove('show'), 3500); }

  /* Stimmen-Check: Gibt es auf diesem Gerät eine Stimme für die Sprache? */
  const langName = l => { try { return new Intl.DisplayNames([LANG], { type: 'language' }).of(l.split('-')[0]); } catch (e) { return l; } };
  let voices = [], voicesKnown = false;
  function readVoices() {
    if (!('speechSynthesis' in window)) return;
    voices = speechSynthesis.getVoices() || [];
    if (voices.length) { voicesKnown = true; renderPhrases(); }
  }
  function voiceFor(lang) {
    const want = lang.toLowerCase().replace('_', '-'), base = want.split('-')[0];
    const norm = v => v.lang.toLowerCase().replace('_', '-');
    return voices.find(v => norm(v) === want) || voices.find(v => norm(v).split('-')[0] === base) || null;
  }
  const hasVoice = lang => !voicesKnown || !!voiceFor(lang);
  if ('speechSynthesis' in window) {
    readVoices();
    speechSynthesis.addEventListener && speechSynthesis.addEventListener('voiceschanged', readVoices);
  }

  function speak(p) {
    if (!('speechSynthesis' in window)) { say(T.noTts); return; }
    if (!hasVoice(p.lang)) { say(T.noVoiceToast.replace('{l}', langName(p.lang))); return; }
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance((p.speak || p.local).replace(/\s*\/\s*/g, ', '));
    u.lang = p.lang; u.rate = 0.9;
    const v = voiceFor(p.lang); if (v) u.voice = v;
    speechSynthesis.speak(u);
  }

  function renderVoiceNote() {
    const missing = [...new Set(C.phrases.map(g => g.lang))].filter(l => !hasVoice(l));
    $('#voiceNote').innerHTML = missing.length
      ? `<p class="voice-note">${T.noVoiceNote.replace('{l}', missing.map(l => esc(langName(l))).join(', '))}</p>`
      : '';
  }

  function renderPhrases() {
    const q = $('#phraseSearch').value.trim().toLowerCase();
    const ownItems = own.map(o => Object.assign({ group: T.ownGroup, lang: MAIN_LANG, own: true }, o));
    const match = p => !q || (p.de + ' ' + p.local + ' ' + (p.phonetic || '')).toLowerCase().includes(q);
    const favItems = [...builtin, ...ownItems].filter(p => favs.has(p.id)).map(p => Object.assign({}, p, { group: T.favGroup }));
    flat = [...favItems, ...ownItems.filter(p => !favs.has(p.id)), ...builtin.filter(p => !favs.has(p.id))].filter(match);
    shown = flat.map((p, i) => i);
    const titles = C.phrases.length > 1 || favItems.length || ownItems.length;
    let lastGroup = null, out = '';
    flat.forEach((p, n) => {
      if (titles && p.group !== lastGroup) { out += `<h3 class="phrase-group-title">${esc(p.group)}</h3>`; lastGroup = p.group; }
      const fav = favs.has(p.id), mute = !hasVoice(p.lang);
      out += `<div class="phrase-card">
        <div class="phrase-info">
          <div>${esc(p.de)}</div>
          <div>${esc(p.local)}${p.phonetic ? ` <span style="font-weight:normal;color:var(--mute)">(${esc(p.phonetic)})</span>` : ''}</div>
        </div>
        <div class="phrase-actions">
          <button class="speak-btn${mute ? ' no-voice' : ''}" data-say="${n}" title="${mute ? T.noVoiceTitle : T.readAloud}">${mute ? '🔇' : '🔊'}<span class="lbl">${T.listen}</span></button>
          <button class="speak-btn" data-full="${n}" aria-label="${T.big}" title="${T.big}">⛶</button>
          <button class="speak-btn star${fav ? ' on' : ''}" data-fav="${n}" aria-label="${fav ? T.favRemove : T.favAdd}" title="${T.fav}">${fav ? '★' : '☆'}</button>
          ${p.own ? `<button class="speak-btn del" data-del="${n}" aria-label="${T.ownDel}" title="${T.del}">🗑️</button>` : ''}
        </div>
      </div>`;
    });
    $('#phraseList').innerHTML = out || `<p class="note">${T.noMatch}</p>`;
    renderVoiceNote();
  }
  $('#phraseSearch').oninput = renderPhrases;
  $('#phraseList').onclick = e => {
    const b = e.target.closest('button'); if (!b) return;
    if (b.dataset.say) speak(flat[+b.dataset.say]);
    if (b.dataset.full) openFull(+b.dataset.full);
    if (b.dataset.fav) {
      const id = flat[+b.dataset.fav].id;
      favs.has(id) ? favs.delete(id) : favs.add(id);
      store.set(FAV_KEY, JSON.stringify([...favs])); renderPhrases();
    }
    if (b.dataset.del) {
      const id = flat[+b.dataset.del].id;
      if (!confirm(T.confirmDel)) return;
      own = own.filter(o => o.id !== id); favs.delete(id);
      store.set(OWN_KEY, JSON.stringify(own)); store.set(FAV_KEY, JSON.stringify([...favs])); renderPhrases();
    }
  };
  $('#ownSave').onclick = () => {
    const de = $('#ownDe').value.trim(), local = $('#ownLocal').value.trim(), phonetic = $('#ownPh').value.trim();
    if (!de || !local) { say(T.fillBoth); return; }
    own.push({ id: 'o:' + Date.now(), de, local, phonetic });
    store.set(OWN_KEY, JSON.stringify(own));
    $('#ownDe').value = $('#ownLocal').value = $('#ownPh').value = '';
    renderPhrases(); say(T.saved);
  };

  /* Vollbild (für Phrasen und Taxi-Karte) */
  const pf = document.createElement('div');
  pf.className = 'pf'; pf.id = 'phraseFull';
  pf.innerHTML = `<div class="pf-de" id="pfDe"></div><div class="pf-local" id="pfLocal"></div><div class="pf-ph" id="pfPh"></div><div class="pf-btns"><button class="f" id="pfPrev" aria-label="${T.back}">◀</button><button class="f" id="pfSpeak" aria-label="${T.readAloud}">🔊</button><button class="f" id="pfNext" aria-label="${T.next}">▶</button></div><button class="f" id="pfClose">${T.closeX}</button>`;
  document.body.appendChild(pf);
  let pfMode = 'phrase';
  function showFull() { const p = flat[shown[cur]]; $('#pfDe').textContent = p.de; $('#pfLocal').textContent = p.local; $('#pfPh').textContent = p.phonetic || ''; }
  function openFull(n) { pfMode = 'phrase'; pf.classList.remove('taxi'); cur = n; showFull(); pf.classList.add('open'); }
  $('#pfPrev').onclick = () => { cur = (cur - 1 + shown.length) % shown.length; showFull(); };
  $('#pfNext').onclick = () => { cur = (cur + 1) % shown.length; showFull(); };
  $('#pfSpeak').onclick = () => pfMode === 'taxi' ? speak({ local: taxiSentence().local, lang: MAIN_LANG }) : speak(flat[shown[cur]]);
  $('#pfClose').onclick = () => pf.classList.remove('open');
  renderPhrases();

  /* ---------- Taxi-Karte ---------- */
  const TAXI_KEY = KEY + 'taxi_v1';
  const taxiSentence = () => C.taxi || { local: T.taxiFallback, phonetic: '' };
  const taxi = load(TAXI_KEY, {});
  $('#taxiName').value = taxi.name || ''; $('#taxiAddr').value = taxi.addr || ''; $('#taxiTel').value = taxi.tel || '';
  const saveTaxi = () => store.set(TAXI_KEY, JSON.stringify({ name: $('#taxiName').value.trim(), addr: $('#taxiAddr').value.trim(), tel: $('#taxiTel').value.trim() }));
  ['#taxiName', '#taxiAddr', '#taxiTel'].forEach(id => $(id).addEventListener('input', saveTaxi));
  $('#taxiShow').onclick = () => {
    const name = $('#taxiName').value.trim(), addr = $('#taxiAddr').value.trim(), tel = $('#taxiTel').value.trim();
    if (!name && !addr) { say(T.taxiFirst); return; }
    pfMode = 'taxi'; pf.classList.add('taxi');
    const t = taxiSentence();
    $('#pfDe').textContent = t.local + (t.phonetic ? ' (' + t.phonetic + ')' : '');
    $('#pfLocal').textContent = [name, addr].filter(Boolean).join('\n');
    $('#pfPh').textContent = tel ? '📞 ' + tel : '';
    pf.classList.add('open');
  };
  $('#taxiMaps').onclick = () => {
    const q = [$('#taxiName').value.trim(), $('#taxiAddr').value.trim()].filter(Boolean).join(', ');
    if (!q) { say(T.taxiFirst); return; }
    window.open('https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q), '_blank', 'noopener');
  };
  $('#taxiClear').onclick = () => {
    if (!confirm(T.taxiConfirm)) return;
    $('#taxiName').value = $('#taxiAddr').value = $('#taxiTel').value = ''; saveTaxi();
  };

  /* ---------- GPS ---------- */
  let curLat = null, curLng = null;
  $('#gpsBtn').onclick = () => {
    if (!navigator.geolocation) { $('#gpsStatus').textContent = T.gpsNo; return; }
    $('#gpsStatus').textContent = T.gpsSearch;
    navigator.geolocation.getCurrentPosition(pos => {
      curLat = pos.coords.latitude.toFixed(6); curLng = pos.coords.longitude.toFixed(6);
      $('#gpsLat').textContent = curLat; $('#gpsLng').textContent = curLng;
      $('#gpsStatus').textContent = T.gpsAcc.replace('{m}', Math.round(pos.coords.accuracy));
      const o = sel.querySelector('option[value="gps"]'); o.disabled = false; sel.value = 'gps'; renderSun();
    }, () => { $('#gpsStatus').textContent = T.gpsErr; },
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 });
  };
  $('#gpsCopy').onclick = () => {
    if (!curLat) { say(T.gpsFirst); return; }
    const text = `${curLat}, ${curLng}`;
    navigator.clipboard.writeText(text).then(() => say(T.copied))
      .catch(() => alert(T.copyFail + text));
  };

  /* ---------- Sonnenzeiten (offline, SunCalc-Formeln) ---------- */
  function sunTimes(date, lat, lng) {
    const R = Math.PI / 180, D = 864e5, J1970 = 2440588, J2000 = 2451545, J0 = 0.0009, E = R * 23.4397;
    const lw = R * -lng, phi = R * lat;
    const d = date.valueOf() / D - 0.5 + J1970 - J2000;
    const n = Math.round(d - J0 - lw / (2 * Math.PI));
    const approx = Ht => J0 + (Ht + lw) / (2 * Math.PI) + n;
    const ds = approx(0), M = R * (357.5291 + 0.98560028 * ds);
    const Cc = R * (1.9148 * Math.sin(M) + 0.02 * Math.sin(2 * M) + 0.0003 * Math.sin(3 * M));
    const L = M + Cc + R * 102.9372 + Math.PI, dec = Math.asin(Math.sin(L) * Math.sin(E));
    const transit = x => J2000 + x + 0.0053 * Math.sin(M) - 0.0069 * Math.sin(2 * L);
    const w = Math.acos((Math.sin(R * -0.833) - Math.sin(phi) * Math.sin(dec)) / (Math.cos(phi) * Math.cos(dec)));
    if (isNaN(w)) return null;
    const Jn = transit(ds), Js = transit(approx(w)), Jr = Jn - (Js - Jn);
    const fromJ = j => new Date((j + 0.5 - J1970) * D);
    return { rise: fromJ(Jr), set: fromJ(Js) };
  }
  const sel = $('#sunPlace');
  sel.innerHTML = `<option value="gps" disabled>${T.myLoc}</option>` +
    C.places.map((p, i) => `<option value="${i}">${esc(p[0])}</option>`).join('');
  sel.value = '0';
  function renderSun() {
    let lat, lng, tz;
    if (sel.value === 'gps') { lat = +curLat; lng = +curLng; tz = undefined; }
    else { const p = C.places[+sel.value]; lat = p[1]; lng = p[2]; tz = p[3] || C.tz; }
    const t = sunTimes(new Date(), lat, lng);
    const f = d => d.toLocaleTimeString(LOCALE, { timeZone: tz, hour: '2-digit', minute: '2-digit' });
    if (!t) { $('#sunRise').textContent = $('#sunSet').textContent = $('#sunLen').textContent = '–'; return; }
    const m = Math.round((t.set - t.rise) / 60000);
    $('#sunRise').textContent = f(t.rise); $('#sunSet').textContent = f(t.set);
    $('#sunLen').textContent = Math.floor(m / 60) + ' h ' + String(m % 60).padStart(2, '0') + ' min';
  }
  sel.onchange = renderSun;
  renderSun();

  /* ---------- Währung (Live-Kurs, Offline-Cache, eigener Kurs) ---------- */
  if (hasFx) {
    const FX_KEY = KEY + 'fx_v1', MANUAL_KEY = KEY + 'fx_manual_v1';
    const AMOUNTS = C.currency.amounts || [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30, 40, 50, 100, 200, 300, 500, 1000];
    const dec = C.currency.decimals == null ? 2 : C.currency.decimals;
    const names = { EUR: T.euro }; names[fx.code] = fx.name;
    let live = null, manual = parseFloat(store.get(MANUAL_KEY)) || null, rates = null;
    const nf = (v, min, max) => v.toLocaleString(LOCALE, { minimumFractionDigits: min, maximumFractionDigits: max == null ? min : max });

    const OLD_DAYS = 7;
    const cached = () => { try { const c = JSON.parse(store.get(FX_KEY)); return c && c[fx.code] > 0 ? Object.assign(c, { live: false }) : null; } catch (e) { return null; } };
    live = cached();                               // letzten Kurs sofort zeigen, nicht erst nach dem Laden
    const shortDate = () => live ? new Date(live.unix * 1000).toLocaleDateString(LOCALE, { day: '2-digit', month: '2-digit' }) : '';

    async function loadRates(ev) {
      if (ev || !live) $('#rateStatus').textContent = T.ratesLoading;
      const ctl = window.AbortController ? new AbortController() : null;
      const timer = ctl && setTimeout(() => ctl.abort(), 8000);   // schlechtes Netz: nicht ewig warten
      try {
        const r = await fetch('https://open.er-api.com/v6/latest/EUR', { cache: 'no-store', signal: ctl ? ctl.signal : undefined });
        const d = await r.json();
        if (d.result !== 'success' || !d.rates[fx.code]) throw new Error('API-Fehler');
        live = { EUR: 1, [fx.code]: d.rates[fx.code], unix: d.time_last_update_unix, live: true };
        store.set(FX_KEY, JSON.stringify(live));
      } catch (e) {
        live = cached();
      }
      clearTimeout(timer);
      renderRates();
    }
    function renderRates() {
      rates = manual ? { EUR: 1, [fx.code]: manual } : live;
      $('#fxManualBox').classList.toggle('active', !!manual);
      if (manual) $('#fxManual').value = manual;
      else if (live && !$('#fxManual').value) $('#fxManual').placeholder = nf(live[fx.code], 2);
      if (!rates) { $('#rateLocal').textContent = '–'; $('#rateDate').textContent = ''; $('#rateStatus').textContent = T.rateFail; calc(); renderTable(); return; }
      $('#rateLocal').textContent = `${nf(rates[fx.code], dec)} ${fx.symbol}`;
      const days = live ? Math.floor((Date.now() / 1000 - live.unix) / 86400) : 0;
      $('#rateDate').textContent = manual ? T.ownRateSuffix.trim() : T.rateFrom.replace('{d}', shortDate()) + (days > OLD_DAYS ? T.rateOld.replace('{n}', OLD_DAYS) : '');
      const when = live ? new Date(live.unix * 1000).toLocaleString(LOCALE, { dateStyle: 'medium', timeStyle: 'short' }) : '';
      $('#rateStatus').textContent = manual
        ? T.ownActive + (live ? `${T.liveWould}${nf(live[fx.code], dec)} ${fx.symbol}` : '')
        : (live.live ? T.liveRate : T.offlineRate).replace('{w}', when);
      calc(); renderTable();
    }
    function renderTable() {
      $('#fxTableBody').innerHTML = AMOUNTS.map(eur =>
        `<tr><td>${nf(eur, 0)}</td><td>${rates ? nf(eur * rates[fx.code], C.currency.tableDecimals == null ? 1 : C.currency.tableDecimals) : '–'}</td></tr>`).join('');
    }
    function calc() {
      const out = $('#fxResult'), fromLine = $('#fxFromLine'), rateLine = $('#fxResultLbl');
      const from = $('#fxFrom').value, to = $('#fxTo').value;
      if (!rates) { out.textContent = '–'; fromLine.textContent = ''; rateLine.textContent = T.noRates; return; }
      const amount = parseFloat($('#fxAmount').value);
      if (isNaN(amount)) { out.textContent = '–'; fromLine.textContent = T.enterAmount; rateLine.textContent = ''; return; }
      const rate = rates[to] / rates[from];
      fromLine.textContent = `${nf(amount, 2)} ${from} (${names[from]})`;
      out.textContent = `${nf(amount * rate, 2)} ${to}`;
      rateLine.textContent = `${names[to]} · ${T.rateWord}: 1 ${from} = ${nf(rate, 2, 4)} ${to}${manual ? T.ownRateSuffix : ' · ' + T.rateFrom.replace('{d}', shortDate())}`;
    }
    $('#fxAmount').oninput = calc;
    $('#fxFrom').onchange = calc;
    $('#fxTo').onchange = calc;
    $('#fxSwap').onclick = () => { const a = $('#fxFrom'), b = $('#fxTo'); [a.value, b.value] = [b.value, a.value]; calc(); };
    $('#fxReload').onclick = loadRates;
    $('#fxManualSave').onclick = () => {
      const v = parseFloat(String($('#fxManual').value).replace(',', '.'));
      if (!(v > 0)) { say(T.validRate); return; }
      manual = v; store.set(MANUAL_KEY, String(v)); renderRates(); say(T.rateApplied);
    };
    $('#fxManualOff').onclick = () => {
      manual = null; try { localStorage.removeItem(MANUAL_KEY); } catch (e) {}
      $('#fxManual').value = ''; renderRates(); say(T.liveAgain);
    };
    if (manual) $('#fxManualBox').open = true;
    renderRates();
    loadRates();
  }

  /* ---------- PWA: Service Worker ---------- */
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
  }
})();
