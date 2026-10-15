#!/usr/bin/env node
/*
 * Verteilt die englischen Texte auf  shared/i18n-en.js  und  <land>/en.js.
 *
 * Aufruf (im Repo-Ordner):   node tools/en_aufteilen.js
 *
 *  * Texte, die nur EIN Land benutzt  → <land>/en.js   (wird nur auf dieser Länderseite geladen)
 *  * Ländernamen und Texte, die mehrere Länder benutzen → shared/i18n-en.js
 *  * Neue Übersetzungen kann man in beide Dateien schreiben – das Skript räumt sie auf.
 * Danach  python3 tools/neues_land.py  laufen lassen (bindet die en.js ein).
 */
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.resolve(__dirname, '..');
const SHARED = path.join(ROOT, 'shared', 'i18n-en.js');

function load(file, code) {
  const ctx = { window: {} };
  vm.runInNewContext(code || fs.readFileSync(file, 'utf8'), ctx, { filename: file });
  return ctx.window;
}
const strings = (v, out = new Set()) => {
  if (typeof v === 'string') out.add(v);
  else if (Array.isArray(v)) v.forEach(x => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach(x => strings(x, out));
  return out;
};

const dict = Object.assign({}, load(SHARED).QT_EN);
const countries = fs.readdirSync(ROOT).filter(d => fs.existsSync(path.join(ROOT, d, 'data.js'))).sort();
const used = {}, names = new Set();
for (const land of countries) {
  const qt = load(path.join(ROOT, land, 'data.js')).QT;
  names.add(qt.name);
  for (const s of strings(qt)) (used[s] = used[s] || new Set()).add(land);
  const en = path.join(ROOT, land, 'en.js');
  if (fs.existsSync(en)) {
    const extra = load(en, 'window.QT_EN = {};\n' + fs.readFileSync(en, 'utf8')).QT_EN;
    for (const [k, v] of Object.entries(extra)) if (!(k in dict)) dict[k] = v;
  }
}

const shared = {}, per = {};
for (const [k, v] of Object.entries(dict)) {
  const u = used[k];
  if (u && u.size === 1 && !names.has(k)) { const land = [...u][0]; (per[land] = per[land] || {})[k] = v; }
  else shared[k] = v;
}
const body = o => Object.entries(o).map(([k, v]) => JSON.stringify(k) + ': ' + JSON.stringify(v)).join(',\n');
fs.writeFileSync(SHARED, '/* Englische Übersetzungen (Deutsch → Englisch), die mehrere Länder oder die Übersicht brauchen.\n'
  + '   Texte nur für ein Land stehen in <land>/en.js. Fehlt ein Eintrag, wird Deutsch angezeigt. */\nwindow.QT_EN = {\n' + body(shared) + '\n};\n');
for (const land of countries) {
  const f = path.join(ROOT, land, 'en.js');
  if (!per[land]) { if (fs.existsSync(f)) fs.unlinkSync(f); continue; }
  fs.writeFileSync(f, `/* Englische Texte nur für ${load(path.join(ROOT, land, 'data.js')).QT.name} (Deutsch → Englisch) */\n`
    + 'Object.assign(window.QT_EN = window.QT_EN || {}, {\n' + body(per[land]) + '\n});\n');
}
console.log(`✓ ${Object.keys(shared).length} gemeinsame Texte, ${Object.keys(per).length} Länder mit eigener en.js`);
