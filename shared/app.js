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

  function glanceHtml(g) {
    const adapter = g.adapter === 'nein' ? '✅ Kein Adapter nötig' : g.adapter === 'ja' ? '⚠️ Adapter nötig' : (g.adapter || '');
    const drive = g.drive === 'L' ? '⚠️ Linksverkehr' : 'Rechtsverkehr';
    const tile = (ico, lbl, val, sub) => `<div class="glance-tile"><span>${ico} ${lbl}</span><b>${esc(val)}</b>${sub ? `<small>${esc(sub)}</small>` : ''}</div>`;
    return `<div class="box"><h2>👀 Auf einen Blick</h2><div class="glance-grid">
      ${tile('🔌', 'Steckdose', 'Typ ' + g.plug + (g.volt ? ' · ' + g.volt + ' V' : ''), adapter + (g.voltNote ? ' · ' + g.voltNote : ''))}
      ${tile('🚗', 'Straßenverkehr', drive, g.driveNote || '')}
      ${tile('🚰', 'Leitungswasser', g.water, '')}
      ${tile('💶', 'Trinkgeld', g.tip, '')}
      ${tile('📞', 'Ländervorwahl', g.dial, g.dialNote || '')}
    </div></div>`;
  }

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
        <details class="fx-manual" id="fxManualBox">
          <summary>✏️ Eigenen Kurs verwenden</summary>
          <p class="note" style="margin:6px 0 8px">Z. B. den Kurs der Wechselstube oder – in Argentinien – den tatsächlichen Kartenkurs. Gilt nur auf diesem Gerät.</p>
          <div class="fx-manual-row">
            <span>1 € =</span><input type="number" inputmode="decimal" step="any" min="0" id="fxManual" aria-label="Eigener Kurs"><span>${fx.code}</span>
          </div>
          <div class="link-row"><button class="link-btn primary" id="fxManualSave">Übernehmen</button><button class="link-btn" id="fxManualOff">Zurück zum Live-Kurs</button></div>
        </details>
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
        <div id="voiceNote"></div>
        <div id="phraseList"></div>
        <details class="own-form">
          <summary>➕ Eigene Phrase hinzufügen</summary>
          <div class="own-fields">
            <div class="fx-field"><label for="ownDe">Deutsch</label><input id="ownDe" placeholder="z. B. Ich habe eine Nussallergie"></div>
            <div class="fx-field"><label for="ownLocal">${esc(C.phrases[0].title.replace(/^\S+\s/, ''))}</label><input id="ownLocal" placeholder="Übersetzung (z. B. aus Google Translate kopieren)"></div>
            <div class="fx-field"><label for="ownPh">Aussprache (optional)</label><input id="ownPh"></div>
            <button class="f own-save" id="ownSave">💾 Speichern</button>
          </div>
          <p class="note" style="margin:8px 0 0">Eigene Phrasen und Favoriten (☆) werden nur auf diesem Gerät gespeichert.</p>
        </details>
      </div>
    </div>

    <div id="gps" class="pane">
      <div class="box">
        <h2>🚕 Taxi-Karte „Bring mich zu …“</h2>
        <p class="note">Unterkunft eintragen und dem Fahrer im Vollbild zeigen. Tipp: Adresse aus der Buchung in Landesschrift kopieren. Wird nur auf diesem Gerät gespeichert.</p>
        <div class="taxi-fields">
          <div class="fx-field"><label for="taxiName">Name der Unterkunft</label><input id="taxiName" placeholder="z. B. Hotel Sunshine"></div>
          <div class="fx-field"><label for="taxiAddr">Adresse</label><textarea id="taxiAddr" rows="3" placeholder="Straße, Ort (gern in Landesschrift)"></textarea></div>
          <div class="fx-field"><label for="taxiTel">Telefon der Unterkunft (optional)</label><input id="taxiTel" type="tel" placeholder="+…"></div>
        </div>
        <div class="link-row">
          <button class="link-btn primary" id="taxiShow">⛶ Groß zeigen</button>
          <button class="link-btn" id="taxiMaps">🗺️ In Maps öffnen</button>
          <button class="link-btn" id="taxiClear">🗑️ Löschen</button>
        </div>
      </div>
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
      ${C.glance ? glanceHtml(C.glance) : ''}
      <div class="box">
        <h2>${C.flag} ${esc(C.name)}</h2>
        <h3 class="info-sub">🚨 Notrufnummern (zum Anrufen antippen)</h3>
        <div class="emg-grid">
          ${C.emergency.map(e => `<a class="emg-tile" href="${telHref(e[0])}"><b>${esc(e[0])}</b><span>${esc(e[1])}</span></a>`).join('')}
        </div>
        ${C.embassy ? `
        <h3 class="info-sub">🏛️ ${esc(C.embassy.title)}</h3>
        <address class="addr"><strong>${esc(C.embassy.title)}</strong><br>${C.embassy.address.map(esc).join('<br>')}</address>
        <p class="contact">
          Telefon: <a href="${telHref(C.embassy.phone)}">${esc(C.embassy.phone)}</a>
          ${C.embassy.emergency ? `<br>Notfälle außerhalb der Öffnungszeiten: <a href="${telHref(C.embassy.emergency)}">${esc(C.embassy.emergency)}</a>${C.embassy.emergencyNote ? ' ' + esc(C.embassy.emergencyNote) : ''}` : ''}
        </p>` : ''}
        ${C.embassy || C.aaUrl ? `<div class="link-row">
          ${C.embassy ? `<a class="link-btn primary" href="https://www.google.com/maps/search/?api=1&amp;query=${encodeURIComponent(C.embassy.title + ', ' + C.embassy.address.join(', '))}" target="_blank" rel="noopener">🗺️ In Google Maps öffnen</a>` : ''}
          ${C.aaUrl ? `<a class="link-btn" href="${esc(C.aaUrl)}" target="_blank" rel="noopener">🌐 ${esc(C.aaLabel || 'Auswärtiges Amt: ' + C.name)}</a>` : ''}
        </div>` : ''}
      </div>
      <div class="box">
        <h2>${esc(C.rulesTitle || '🙏 Verhaltensregeln')}</h2>
        <p class="note">${esc(C.rulesNote || 'Allgemeine Hinweise zur Orientierung – aktuelle Vorgaben bitte beim Auswärtigen Amt prüfen.')}</p>
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

  /* ---------- Phrasen: Liste, Suche, Favoriten, eigene Phrasen, Audio, Vollbild ---------- */
  const MAIN_LANG = C.phrases[0].lang;
  const FAV_KEY = KEY + 'fav_v1', OWN_KEY = KEY + 'own_v1';
  const load = (k, d) => { try { return JSON.parse(store.get(k)) || d; } catch (e) { return d; } };
  let favs = new Set(load(FAV_KEY, []));
  let own = load(OWN_KEY, []);
  const builtin = [];
  C.phrases.forEach(g => g.items.forEach(p => builtin.push(Object.assign({ group: g.title, lang: g.lang, id: 'b:' + p.de + '|' + p.local }, p))));
  let flat = [], shown = [], cur = 0;

  /* Toast (kurze Hinweise statt alert) */
  const toast = document.createElement('div'); toast.className = 'qt-toast'; document.body.appendChild(toast);
  let toastT;
  function say(msg) { toast.textContent = msg; toast.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => toast.classList.remove('show'), 3500); }

  /* Stimmen-Check: Gibt es auf diesem Gerät eine Stimme für die Sprache? */
  const langName = l => { try { return new Intl.DisplayNames(['de'], { type: 'language' }).of(l.split('-')[0]); } catch (e) { return l; } };
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
    if (!('speechSynthesis' in window)) { say('Dein Browser unterstützt leider keine Sprachausgabe.'); return; }
    if (!hasVoice(p.lang)) { say(`🔇 Keine Stimme für ${langName(p.lang)} installiert – zeig die Phrase groß (⛶).`); return; }
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance((p.speak || p.local).replace(/\s*\/\s*/g, ', '));
    u.lang = p.lang; u.rate = 0.9;
    const v = voiceFor(p.lang); if (v) u.voice = v;
    speechSynthesis.speak(u);
  }

  function renderVoiceNote() {
    const missing = [...new Set(C.phrases.map(g => g.lang))].filter(l => !hasVoice(l));
    $('#voiceNote').innerHTML = missing.length
      ? `<p class="voice-note">🔇 Auf diesem Gerät ist keine Stimme für ${missing.map(l => esc(langName(l))).join(', ')} installiert. Phrasen dann mit ⛶ groß zeigen – oder in den Handy-Einstellungen unter „Sprachausgabe“ das Sprachpaket nachladen.</p>`
      : '';
  }

  function renderPhrases() {
    const q = $('#phraseSearch').value.trim().toLowerCase();
    const ownItems = own.map(o => Object.assign({ group: '✍️ Eigene Phrasen', lang: MAIN_LANG, own: true }, o));
    const match = p => !q || (p.de + ' ' + p.local + ' ' + (p.phonetic || '')).toLowerCase().includes(q);
    const favItems = [...builtin, ...ownItems].filter(p => favs.has(p.id)).map(p => Object.assign({}, p, { group: '⭐ Favoriten' }));
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
          <button class="speak-btn${mute ? ' no-voice' : ''}" data-say="${n}" title="${mute ? 'Keine Stimme installiert' : 'Vorlesen'}">${mute ? '🔇' : '🔊'}<span class="lbl"> Anhören</span></button>
          <button class="speak-btn" data-full="${n}" aria-label="Groß anzeigen" title="Groß anzeigen">⛶</button>
          <button class="speak-btn star${fav ? ' on' : ''}" data-fav="${n}" aria-label="${fav ? 'Aus Favoriten entfernen' : 'Zu Favoriten'}" title="Favorit">${fav ? '★' : '☆'}</button>
          ${p.own ? `<button class="speak-btn del" data-del="${n}" aria-label="Eigene Phrase löschen" title="Löschen">🗑️</button>` : ''}
        </div>
      </div>`;
    });
    $('#phraseList').innerHTML = out || '<p class="note">Keine passende Phrase gefunden.</p>';
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
      if (!confirm('Eigene Phrase löschen?')) return;
      own = own.filter(o => o.id !== id); favs.delete(id);
      store.set(OWN_KEY, JSON.stringify(own)); store.set(FAV_KEY, JSON.stringify([...favs])); renderPhrases();
    }
  };
  $('#ownSave').onclick = () => {
    const de = $('#ownDe').value.trim(), local = $('#ownLocal').value.trim(), phonetic = $('#ownPh').value.trim();
    if (!de || !local) { say('Bitte Deutsch und Übersetzung ausfüllen.'); return; }
    own.push({ id: 'o:' + Date.now(), de, local, phonetic });
    store.set(OWN_KEY, JSON.stringify(own));
    $('#ownDe').value = $('#ownLocal').value = $('#ownPh').value = '';
    renderPhrases(); say('✅ Phrase gespeichert');
  };

  /* Vollbild (für Phrasen und Taxi-Karte) */
  const pf = document.createElement('div');
  pf.className = 'pf'; pf.id = 'phraseFull';
  pf.innerHTML = '<div class="pf-de" id="pfDe"></div><div class="pf-local" id="pfLocal"></div><div class="pf-ph" id="pfPh"></div><div class="pf-btns"><button class="f" id="pfPrev" aria-label="Zurück">◀</button><button class="f" id="pfSpeak" aria-label="Vorlesen">🔊</button><button class="f" id="pfNext" aria-label="Weiter">▶</button></div><button class="f" id="pfClose">✕ Schließen</button>';
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
  const taxiSentence = () => C.taxi || { local: 'Please take me to this address.', phonetic: '' };
  const taxi = load(TAXI_KEY, {});
  $('#taxiName').value = taxi.name || ''; $('#taxiAddr').value = taxi.addr || ''; $('#taxiTel').value = taxi.tel || '';
  const saveTaxi = () => store.set(TAXI_KEY, JSON.stringify({ name: $('#taxiName').value.trim(), addr: $('#taxiAddr').value.trim(), tel: $('#taxiTel').value.trim() }));
  ['#taxiName', '#taxiAddr', '#taxiTel'].forEach(id => $(id).addEventListener('input', saveTaxi));
  $('#taxiShow').onclick = () => {
    const name = $('#taxiName').value.trim(), addr = $('#taxiAddr').value.trim(), tel = $('#taxiTel').value.trim();
    if (!name && !addr) { say('Bitte erst Name oder Adresse der Unterkunft eintragen.'); return; }
    pfMode = 'taxi'; pf.classList.add('taxi');
    const t = taxiSentence();
    $('#pfDe').textContent = t.local + (t.phonetic ? ' (' + t.phonetic + ')' : '');
    $('#pfLocal').textContent = [name, addr].filter(Boolean).join('\n');
    $('#pfPh').textContent = tel ? '📞 ' + tel : '';
    pf.classList.add('open');
  };
  $('#taxiMaps').onclick = () => {
    const q = [$('#taxiName').value.trim(), $('#taxiAddr').value.trim()].filter(Boolean).join(', ');
    if (!q) { say('Bitte erst Name oder Adresse der Unterkunft eintragen.'); return; }
    window.open('https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q), '_blank', 'noopener');
  };
  $('#taxiClear').onclick = () => {
    if (!confirm('Taxi-Karte leeren?')) return;
    $('#taxiName').value = $('#taxiAddr').value = $('#taxiTel').value = ''; saveTaxi();
  };

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
    if (!curLat) { say('Bitte erst den Standort ermitteln!'); return; }
    const text = `${curLat}, ${curLng}`;
    navigator.clipboard.writeText(text).then(() => say('📋 Koordinaten kopiert'))
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

  /* ---------- Währung (Live-Kurs, Offline-Cache, eigener Kurs) ---------- */
  if (hasFx) {
    const FX_KEY = KEY + 'fx_v1', MANUAL_KEY = KEY + 'fx_manual_v1';
    const AMOUNTS = C.currency.amounts || [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30, 40, 50, 100, 200, 300, 500, 1000];
    const dec = C.currency.decimals == null ? 2 : C.currency.decimals;
    const names = { EUR: 'Euro' }; names[fx.code] = fx.name;
    let live = null, manual = parseFloat(store.get(MANUAL_KEY)) || null, rates = null;
    const nf = (v, min, max) => v.toLocaleString('de-DE', { minimumFractionDigits: min, maximumFractionDigits: max == null ? min : max });

    async function loadRates() {
      $('#rateStatus').textContent = 'Kurse werden geladen...';
      try {
        const r = await fetch('https://open.er-api.com/v6/latest/EUR', { cache: 'no-store' });
        const d = await r.json();
        if (d.result !== 'success' || !d.rates[fx.code]) throw new Error('API-Fehler');
        live = { EUR: 1, [fx.code]: d.rates[fx.code], unix: d.time_last_update_unix, live: true };
        store.set(FX_KEY, JSON.stringify(live));
      } catch (e) {
        const c = store.get(FX_KEY);
        if (c) { live = JSON.parse(c); live.live = false; }
      }
      renderRates();
    }
    function renderRates() {
      rates = manual ? { EUR: 1, [fx.code]: manual } : live;
      $('#fxManualBox').classList.toggle('active', !!manual);
      if (manual) $('#fxManual').value = manual;
      else if (live && !$('#fxManual').value) $('#fxManual').placeholder = nf(live[fx.code], 2);
      if (!rates) { $('#rateLocal').textContent = '–'; $('#rateStatus').textContent = '⚠️ Kurse konnten nicht geladen werden (keine Verbindung).'; calc(); renderTable(); return; }
      $('#rateLocal').textContent = `${nf(rates[fx.code], dec)} ${fx.symbol}`;
      const when = live ? new Date(live.unix * 1000).toLocaleString('de-DE', { dateStyle: 'medium', timeStyle: 'short' }) : '';
      $('#rateStatus').textContent = manual
        ? `✏️ Eigener Kurs aktiv${live ? ` · Live-Kurs wäre ${nf(live[fx.code], dec)} ${fx.symbol}` : ''}`
        : live.live ? `✅ Live-Kurs, Stand: ${when} · Quelle: open.er-api.com` : `📴 Offline – zuletzt gespeicherter Kurs vom ${when}`;
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
      rateLine.textContent = `${names[to]} · Kurs: 1 ${from} = ${nf(rate, 2, 4)} ${to}${manual ? ' (eigener Kurs)' : ''}`;
    }
    $('#fxAmount').oninput = calc;
    $('#fxFrom').onchange = calc;
    $('#fxTo').onchange = calc;
    $('#fxSwap').onclick = () => { const a = $('#fxFrom'), b = $('#fxTo'); [a.value, b.value] = [b.value, a.value]; calc(); };
    $('#fxReload').onclick = loadRates;
    $('#fxManualSave').onclick = () => {
      const v = parseFloat(String($('#fxManual').value).replace(',', '.'));
      if (!(v > 0)) { say('Bitte einen gültigen Kurs eingeben.'); return; }
      manual = v; store.set(MANUAL_KEY, String(v)); renderRates(); say('✏️ Eigener Kurs übernommen');
    };
    $('#fxManualOff').onclick = () => {
      manual = null; try { localStorage.removeItem(MANUAL_KEY); } catch (e) {}
      $('#fxManual').value = ''; renderRates(); say('✅ Wieder Live-Kurs');
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
