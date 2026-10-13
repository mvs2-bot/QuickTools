/* ==========================================================================
   URLAUBS-QUICK-TOOLS – gemeinsamer Code für alle Länder
   --------------------------------------------------------------------------
   Jede Länderseite lädt zuerst ihre eigene  data.js  (window.QT = {...})
   und danach diese Datei. Änderungen hier wirken sofort in ALLEN Ländern.
   ========================================================================== */
(function () {
  'use strict';
  const C = window.QT;
  if (!C) { document.body.textContent = 'Fehler: data.js fehlt.'; return; }

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
  if (hasFx) TABS.push({ id: 'currency', icon: '🧮', short: 'Rechner', long: 'Währungsrechner' });
  TABS.push({ id: 'phrases', icon: '🗣️', short: 'Phrasen', long: 'Wichtige Phrasen & Audio' });
  TABS.push({ id: 'gps', icon: '📍', short: 'GPS', long: 'GPS-Standort' });
  TABS.push({ id: 'misc', icon: '🚨', short: 'Infos', long: 'Infos & Notfall' });
  const START = TABS[0].id;

  /* ---------- Seitenaufbau ---------- */
  document.title = `${C.flag} Quick-Tools ${C.name}`;
  const fx = C.currency;
  const allPhraseLangs = C.phrases.map(g => g.title).join(', ');

  const html = `
  <div class="wrap">
    <div class="sticky-header">
      <header>
        <div>
          <a class="home-link" href="../">← Alle Länder</a>
          <h1>⚡ Urlaubs-Quick-Tools ${C.flag}</h1>
          <p>${C.flag} ${esc(C.name)}</p>
        </div>
        <div class="header-actions">
          <button class="burger-btn theme-toggle" type="button" aria-label="Zum dunklen Modus wechseln">🌙</button>
          <button id="menuBurger" class="burger-btn" aria-label="Menü öffnen">☰</button>
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
            <h2>🧭 Schnellzugriff</h2>
            <button class="theme-toggle" type="button" aria-label="Zum dunklen Modus wechseln">🌙</button>
          </div>
          <button id="closePopover" aria-label="Schließen">✕</button>
        </div>
        <div class="popover-links">
          ${TABS.map(t => `<button data-t="${t.id}" class="pop-btn"><span>${t.icon}</span>${esc(t.long)}</button>`).join('')}
          <button class="pop-home" onclick="location.href='../'"><span>🌍</span>Alle Länder</button>
        </div>
      </div>
    </div>

    ${hasFx ? `
    <div id="currency" class="pane">
      <div class="box">
        <h2>🧮 Wechselkurs-Rechner</h2>
        <div class="fx-form">
          <div class="fx-field fx-amount">
            <label for="fxAmount">Betrag</label>
            <input type="number" inputmode="decimal" id="fxAmount" value="100" min="0" step="any">
          </div>
          <div class="fx-field">
            <label for="fxFrom">Von</label>
            <select id="fxFrom"><option value="${fx.code}">${fx.code} (${esc(fx.symbol)})</option><option value="EUR">EUR (€)</option></select>
          </div>
          <button class="f fx-swap" id="fxSwap" aria-label="Währungen tauschen">⇄</button>
          <div class="fx-field">
            <label for="fxTo">Nach</label>
            <select id="fxTo"><option value="${fx.code}">${fx.code} (${esc(fx.symbol)})</option><option value="EUR" selected>EUR (€)</option></select>
          </div>
        </div>
        <div class="fx-result-card">
          <div class="fx-from-line" id="fxFromLine">–</div>
          <div class="fx-arrow">↓ entspricht</div>
          <div class="fx-to-line" id="fxResult">–</div>
          <div class="fx-rate-line" id="fxResultLbl">Ergebnis</div>
        </div>
      </div>
      <div class="box box-compact">
        <div class="mh"><h2>💰 Aktuelle Kurse</h2><button id="fxReload">🔄 Aktualisieren</button></div>
        <div class="rate-chips"><div class="rate-chip"><span>${C.flag} 1 € in ${esc(fx.name)}</span><b id="rateLocal">–</b></div></div>
        <p class="rate-status" id="rateStatus">Kurse werden geladen...</p>
      </div>
      <div class="box">
        <h2 style="margin-bottom:6px">📊 Betragsübersicht</h2>
        <p class="note">Gängige Beträge in Euro, umgerechnet zum aktuellen Tageskurs.</p>
        <div class="fx-table-wrap"><table class="fx-table">
          <thead><tr><th>EUR</th><th>${fx.code}</th></tr></thead><tbody id="fxTableBody"></tbody>
        </table></div>
      </div>
    </div>` : ''}

    <div id="phrases" class="pane">
      <div class="box">
        <h2>🗣️ Wichtige Notfall- & Alltagsphrasen</h2>
        <p class="note">Zum Vorzeigen oder Vorlesen lassen per Klick (Audio).</p>
        <input type="search" id="phraseSearch" class="phrase-search" placeholder="🔍 Phrase suchen (Deutsch, ${esc(allPhraseLangs)}, Aussprache)…">
        <div id="phraseList"></div>
      </div>
    </div>

    <div id="gps" class="pane">
      <div class="box">
        <div class="mh"><h2>📍 GPS-Standort</h2><button id="gpsBtn">🛰️ Standort ermitteln</button></div>
        <p class="note">Ermittle deine aktuellen Koordinaten für Notfälle oder Taxifahrer.</p>
        <div class="gps-grid">
          <div class="gps-stat"><span>Breitengrad (Lat)</span><b id="gpsLat">–</b></div>
          <div class="gps-stat"><span>Längengrad (Lng)</span><b id="gpsLng">–</b></div>
        </div>
        <div class="gps-stat" style="margin-bottom:14px"><span>Genauigkeit / Status</span><b id="gpsStatus">Noch nicht ermittelt</b></div>
        <button class="f" id="gpsCopy" style="width:100%;padding:12px;font-size:.95rem;background:var(--p1);color:#fff;border:none;border-radius:8px;font-weight:700">📋 Koordinaten kopieren</button>
      </div>
      <div class="box">
        <h2>🌅 Sonnenauf- &amp; -untergang</h2>
        <p class="note">Heute, offline berechnet. Nach dem Standort-Abruf wird dein GPS-Standort verwendet (Ortszeit des Geräts).</p>
        <div class="fx-field" style="margin-bottom:12px"><label for="sunPlace">Ort</label><select id="sunPlace"></select></div>
        <div class="gps-grid">
          <div class="gps-stat"><span>🌅 Sonnenaufgang</span><b id="sunRise">–</b></div>
          <div class="gps-stat"><span>🌇 Sonnenuntergang</span><b id="sunSet">–</b></div>
        </div>
        <div class="gps-stat"><span>☀️ Tageslänge</span><b id="sunLen">–</b></div>
      </div>
    </div>

    <div id="misc" class="pane">
      <div class="box">
        <h2>${C.flag} ${esc(C.name)}</h2>
        <h3 class="info-sub">🚨 Notrufnummern (zum Anrufen antippen)</h3>
        <div class="emg-grid">
          ${C.emergency.map(e => `<a class="emg-tile" href="${telHref(e[0])}"><b>${esc(e[0])}</b><span>${esc(e[1])}</span></a>`).join('')}
        </div>
        <h3 class="info-sub">🏛️ ${esc(C.embassy.title)}</h3>
        <address class="addr"><strong>${esc(C.embassy.title)}</strong><br>${C.embassy.address.map(esc).join('<br>')}</address>
        <p class="contact">
          Telefon: <a href="${telHref(C.embassy.phone)}">${esc(C.embassy.phone)}</a>
          ${C.embassy.emergency ? `<br>Notfälle außerhalb der Öffnungszeiten: <a href="${telHref(C.embassy.emergency)}">${esc(C.embassy.emergency)}</a>${C.embassy.emergencyNote ? ' ' + esc(C.embassy.emergencyNote) : ''}` : ''}
        </p>
        <div class="link-row">
          <a class="link-btn primary" href="https://www.google.com/maps/search/?api=1&amp;query=${encodeURIComponent(C.embassy.title + ', ' + C.embassy.address.join(', '))}" target="_blank" rel="noopener">🗺️ In Google Maps öffnen</a>
          <a class="link-btn" href="${esc(C.aaUrl)}" target="_blank" rel="noopener">🌐 Auswärtiges Amt: ${esc(C.name)}</a>
        </div>
      </div>
      <div class="box">
        <h2>${esc(C.rulesTitle || '🙏 Verhaltensregeln')}</h2>
        <p class="note">Allgemeine Hinweise zur Orientierung – aktuelle Vorgaben bitte beim Auswärtigen Amt prüfen.</p>
        <ul class="info-list">${C.rules.map(r => `<li><strong>${esc(r[0])}:</strong> ${esc(r[1])}</li>`).join('')}</ul>
      </div>
      <div class="box">
        <h2>📱 SIM-Karten & Internet</h2>
        <ul class="info-list" style="margin-top:8px">${C.sim.map(r => `<li><strong>${esc(r[0])}:</strong> ${esc(r[1])}</li>`).join('')}</ul>
      </div>
      <div class="box">
        <h2>📲 Nützliche Apps</h2>
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
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { pop.classList.remove('open'); pf.classList.remove('open'); } });
  window.addEventListener('hashchange', () => switchTab(location.hash.slice(1)));
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  switchTab(location.hash.slice(1) || START);
  window.addEventListener('load', () => setTimeout(() => window.scrollTo(0, 0), 0));

  /* ---------- Hell / Dunkel ---------- */
  function applyTheme(t, save) {
    const dark = t === 'dark';
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    const m = $('meta[name="theme-color"]');
    if (m) m.setAttribute('content', dark ? '#0f1512' : '#15803d');
    document.querySelectorAll('.theme-toggle').forEach(b => {
      b.textContent = dark ? '☀️' : '🌙';
      b.setAttribute('aria-pressed', dark ? 'true' : 'false');
      b.setAttribute('aria-label', dark ? 'Zum hellen Modus wechseln' : 'Zum dunklen Modus wechseln');
      b.title = dark ? 'Hellen Modus aktivieren' : 'Dunklen Modus aktivieren';
    });
    if (save) store.set(THEME_KEY, t);
  }
  applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light', false);
  document.querySelectorAll('.theme-toggle').forEach(b => b.onclick = e => {
    e.stopPropagation();
    applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark', true);
  });

  /* ---------- Uhren ---------- */
  function updateClocks() {
    const now = new Date();
    const fmt = tz => now.toLocaleTimeString('de-DE', { timeZone: tz, hour: '2-digit', minute: '2-digit' });
    $('#clockHome').textContent = fmt('Europe/Berlin');
    $('#clockLocal').textContent = fmt(C.tz);
  }
  if (showClocks) { updateClocks(); setInterval(updateClocks, 1000); }

  /* ---------- Phrasen: Liste, Suche, Audio, Vollbild ---------- */
  const flat = [];
  C.phrases.forEach(g => g.items.forEach(p => flat.push(Object.assign({ group: g.title, lang: g.lang }, p))));
  let shown = [], cur = 0;

  function speak(p) {
    if (!('speechSynthesis' in window)) { alert('Dein Browser unterstützt leider keine Sprachausgabe.'); return; }
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance((p.speak || p.local).replace(/\s*\/\s*/g, ', '));
    u.lang = p.lang; u.rate = 0.9;
    speechSynthesis.speak(u);
  }

  function renderPhrases() {
    const q = $('#phraseSearch').value.trim().toLowerCase();
    shown = flat.map((p, i) => i).filter(i => {
      const p = flat[i];
      return !q || (p.de + ' ' + p.local + ' ' + (p.phonetic || '')).toLowerCase().includes(q);
    });
    const multi = C.phrases.length > 1;
    let lastGroup = null, out = '';
    shown.forEach((i, n) => {
      const p = flat[i];
      if (multi && p.group !== lastGroup) { out += `<h3 class="phrase-group-title">${esc(p.group)}</h3>`; lastGroup = p.group; }
      out += `<div class="phrase-card">
        <div class="phrase-info">
          <div>${esc(p.de)}</div>
          <div>${esc(p.local)}${p.phonetic ? ` <span style="font-weight:normal;color:var(--mute)">(${esc(p.phonetic)})</span>` : ''}</div>
        </div>
        <div class="phrase-actions">
          <button class="speak-btn" data-say="${n}">🔊 Anhören</button>
          <button class="speak-btn" data-full="${n}" aria-label="Groß anzeigen">⛶</button>
        </div>
      </div>`;
    });
    $('#phraseList').innerHTML = out || '<p class="note">Keine passende Phrase gefunden.</p>';
  }
  $('#phraseSearch').oninput = renderPhrases;
  $('#phraseList').onclick = e => {
    const b = e.target.closest('button'); if (!b) return;
    if (b.dataset.say) speak(flat[shown[+b.dataset.say]]);
    if (b.dataset.full) openFull(+b.dataset.full);
  };

  const pf = document.createElement('div');
  pf.className = 'pf'; pf.id = 'phraseFull';
  pf.innerHTML = '<div class="pf-de" id="pfDe"></div><div class="pf-local" id="pfLocal"></div><div class="pf-ph" id="pfPh"></div><div class="pf-btns"><button class="f" id="pfPrev" aria-label="Zurück">◀</button><button class="f" id="pfSpeak" aria-label="Vorlesen">🔊</button><button class="f" id="pfNext" aria-label="Weiter">▶</button></div><button class="f" id="pfClose">✕ Schließen</button>';
  document.body.appendChild(pf);
  function showFull() { const p = flat[shown[cur]]; $('#pfDe').textContent = p.de; $('#pfLocal').textContent = p.local; $('#pfPh').textContent = p.phonetic || ''; }
  function openFull(n) { cur = n; showFull(); pf.classList.add('open'); }
  $('#pfPrev').onclick = () => { cur = (cur - 1 + shown.length) % shown.length; showFull(); };
  $('#pfNext').onclick = () => { cur = (cur + 1) % shown.length; showFull(); };
  $('#pfSpeak').onclick = () => speak(flat[shown[cur]]);
  $('#pfClose').onclick = () => pf.classList.remove('open');
  renderPhrases();

  /* ---------- GPS ---------- */
  let curLat = null, curLng = null;
  $('#gpsBtn').onclick = () => {
    if (!navigator.geolocation) { $('#gpsStatus').textContent = 'GPS wird nicht unterstützt'; return; }
    $('#gpsStatus').textContent = 'Suche Satelliten...';
    navigator.geolocation.getCurrentPosition(pos => {
      curLat = pos.coords.latitude.toFixed(6); curLng = pos.coords.longitude.toFixed(6);
      $('#gpsLat').textContent = curLat; $('#gpsLng').textContent = curLng;
      $('#gpsStatus').textContent = `Genau: ±${Math.round(pos.coords.accuracy)}m`;
      const o = sel.querySelector('option[value="gps"]'); o.disabled = false; sel.value = 'gps'; renderSun();
    }, () => { $('#gpsStatus').textContent = 'Fehler / Zugriff verweigert'; },
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 });
  };
  $('#gpsCopy').onclick = () => {
    if (!curLat) { alert('Bitte erst den Standort ermitteln!'); return; }
    const text = `${curLat}, ${curLng}`;
    navigator.clipboard.writeText(text).then(() => alert('Koordinaten in Zwischenablage kopiert!'))
      .catch(() => alert('Kopieren nicht möglich. Koordinaten: ' + text));
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
  sel.innerHTML = '<option value="gps" disabled>📍 Mein Standort (nach GPS-Abruf)</option>' +
    C.places.map((p, i) => `<option value="${i}">${esc(p[0])}</option>`).join('');
  sel.value = '0';
  function renderSun() {
    let lat, lng, tz;
    if (sel.value === 'gps') { lat = +curLat; lng = +curLng; tz = undefined; }
    else { const p = C.places[+sel.value]; lat = p[1]; lng = p[2]; tz = p[3] || C.tz; }
    const t = sunTimes(new Date(), lat, lng);
    const f = d => d.toLocaleTimeString('de-DE', { timeZone: tz, hour: '2-digit', minute: '2-digit' });
    if (!t) { $('#sunRise').textContent = $('#sunSet').textContent = $('#sunLen').textContent = '–'; return; }
    const m = Math.round((t.set - t.rise) / 60000);
    $('#sunRise').textContent = f(t.rise); $('#sunSet').textContent = f(t.set);
    $('#sunLen').textContent = Math.floor(m / 60) + ' h ' + String(m % 60).padStart(2, '0') + ' min';
  }
  sel.onchange = renderSun;
  renderSun();

  /* ---------- Währung ---------- */
  if (hasFx) {
    const FX_KEY = KEY + 'fx_v1';
    const AMOUNTS = C.currency.amounts || [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30, 40, 50, 100, 200, 300, 500, 1000];
    const dec = C.currency.decimals == null ? 2 : C.currency.decimals;
    const names = { EUR: 'Euro' }; names[fx.code] = fx.name;
    let rates = null;
    const nf = (v, min, max) => v.toLocaleString('de-DE', { minimumFractionDigits: min, maximumFractionDigits: max == null ? min : max });

    async function loadRates() {
      $('#rateStatus').textContent = 'Kurse werden geladen...';
      try {
        const r = await fetch('https://open.er-api.com/v6/latest/EUR', { cache: 'no-store' });
        const d = await r.json();
        if (d.result !== 'success' || !d.rates[fx.code]) throw new Error('API-Fehler');
        rates = { EUR: 1, [fx.code]: d.rates[fx.code], unix: d.time_last_update_unix, live: true };
        store.set(FX_KEY, JSON.stringify(rates));
      } catch (e) {
        const c = store.get(FX_KEY);
        if (c) { rates = JSON.parse(c); rates.live = false; }
      }
      renderRates();
    }
    function renderRates() {
      if (!rates) { $('#rateStatus').textContent = '⚠️ Kurse konnten nicht geladen werden (keine Verbindung).'; calc(); renderTable(); return; }
      $('#rateLocal').textContent = `${nf(rates[fx.code], dec)} ${fx.symbol}`;
      const when = new Date(rates.unix * 1000).toLocaleString('de-DE', { dateStyle: 'medium', timeStyle: 'short' });
      $('#rateStatus').textContent = rates.live
        ? `✅ Live-Kurs, Stand: ${when} · Quelle: open.er-api.com`
        : `📴 Offline – zuletzt gespeicherter Kurs vom ${when}`;
      calc(); renderTable();
    }
    function renderTable() {
      $('#fxTableBody').innerHTML = AMOUNTS.map(eur =>
        `<tr><td>${nf(eur, 0)}</td><td>${rates ? nf(eur * rates[fx.code], C.currency.tableDecimals == null ? 1 : C.currency.tableDecimals) : '–'}</td></tr>`).join('');
    }
    function calc() {
      const out = $('#fxResult'), fromLine = $('#fxFromLine'), rateLine = $('#fxResultLbl');
      const from = $('#fxFrom').value, to = $('#fxTo').value;
      if (!rates) { out.textContent = '–'; fromLine.textContent = ''; rateLine.textContent = 'Keine Kurse verfügbar'; return; }
      const amount = parseFloat($('#fxAmount').value);
      if (isNaN(amount)) { out.textContent = '–'; fromLine.textContent = 'Bitte Betrag eingeben'; rateLine.textContent = ''; return; }
      const rate = rates[to] / rates[from];
      fromLine.textContent = `${nf(amount, 2)} ${from} (${names[from]})`;
      out.textContent = `${nf(amount * rate, 2)} ${to}`;
      rateLine.textContent = `${names[to]} · Kurs: 1 ${from} = ${nf(rate, 2, 4)} ${to}`;
    }
    $('#fxAmount').oninput = calc;
    $('#fxFrom').onchange = calc;
    $('#fxTo').onchange = calc;
    $('#fxSwap').onclick = () => { const a = $('#fxFrom'), b = $('#fxTo'); [a.value, b.value] = [b.value, a.value]; calc(); };
    $('#fxReload').onclick = loadRates;
    renderTable();
    loadRates();
  }

  /* ---------- PWA: Service Worker ---------- */
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
  }
})();
