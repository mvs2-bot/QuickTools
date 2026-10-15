#!/usr/bin/env python3
"""
Erzeugt bzw. aktualisiert die Rahmendateien aller Länderordner und die Übersichtsseite.

Aufruf (im Repo-Ordner):   python3 tools/neues_land.py

Was das Skript macht:
  * sucht alle Ordner mit einer  data.js
  * schreibt dort  index.html, manifest.json, sw.js, icon.svg  (immer gleich aufgebaut)
  * schreibt die Übersichtsseite  index.html  im Hauptordner neu

Neues Land anlegen:
  1. einen bestehenden Länderordner kopieren (z. B. spanien -> griechenland)
  2. in griechenland/data.js  slug, name, flag, tz, currency und Inhalte anpassen
  3. unten bei REGION den Ordnernamen eintragen
  4. dieses Skript laufen lassen und alles hochladen

Man braucht das Skript NICHT, um Inhalte zu ändern – dafür reicht die data.js
des Landes bzw. shared/app.js / shared/style.css für alle Länder.
"""
import json, re, pathlib, shutil, subprocess, urllib.parse

ROOT = pathlib.Path(__file__).resolve().parent.parent

# Reihenfolge und Gruppierung auf der Übersichtsseite
REGION = {
    'Europa': ['albanien', 'belgien', 'daenemark', 'deutschland', 'frankreich', 'griechenland', 'grossbritannien', 'island',
               'italien', 'kroatien', 'montenegro', 'niederlande', 'norwegen', 'oesterreich', 'polen', 'portugal',
               'schweden', 'schweiz', 'slowenien', 'spanien', 'tschechien', 'tuerkei', 'ungarn'],
    'Asien': ['china', 'indonesien', 'japan', 'kambodscha', 'malaysia', 'philippinen', 'srilanka', 'suedkorea', 'thailand', 'vietnam'],
    'Amerika': ['argentinien', 'bolivien', 'chile', 'costarica', 'ecuador', 'guatemala', 'kanada', 'kolumbien', 'mexiko', 'peru', 'usa'],
    'Afrika': ['aegypten', 'marokko', 'suedafrika'],
    'Ozeanien': ['australien', 'neuseeland'],
}

THEME_BOOT = ("<script>(function(){try{if(localStorage.getItem('qt_theme_v1')==='dark')"
              "document.documentElement.setAttribute('data-theme','dark');}catch(e){}})();</script>")
FONTS = ('<link rel="preconnect" href="https://fonts.googleapis.com">\n'
         '    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'
         '    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">')


def read_meta(data_js: str) -> dict:
    """Liest slug, name, flag, Währung und ersten Ort – egal ob '…' oder "…" verwendet wird."""
    Q = r"""['"]"""
    def grab(key):
        m = re.search(rf"\b{key}\s*:\s*{Q}([^'\"]*){Q}", data_js)
        return m.group(1) if m else ''
    cur = re.search(rf"currency\s*:\s*\{{[^}}]*{Q}?code{Q}?\s*:\s*{Q}([A-Z]{{3}}){Q}", data_js)
    pl = re.search(rf"places\s*:\s*\[\s*\[\s*{Q}[^'\"]*{Q}\s*,\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)", data_js)
    return {'slug': grab('slug'), 'name': grab('name'), 'flag': grab('flag'),
            'currency': cur.group(1) if cur else None,
            'lat': float(pl.group(1)) if pl else 0, 'lng': float(pl.group(2)) if pl else 0}


MAP_BOX = """<div class="box map-box" id="mapBox"><div id="worldMap" role="img" aria-label="Weltkarte mit allen Ländern"></div></div>
    <script src="shared/i18n-en.js"></script>
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" crossorigin=""></script>
    <script>
    (function () {
      const PINS = __PINS__;
      if (!window.L) { document.getElementById('mapBox').style.display = 'none'; return; }   // offline → Karte ausblenden
      const EN = (function () { try { return localStorage.getItem('qt_lang_v1') === 'en'; } catch (e) { return false; } })();
      PINS.forEach(p => { if (EN && window.QT_EN && QT_EN[p.n]) p.n = QT_EN[p.n]; });
      const map = L.map('worldMap', { worldCopyJump: true, minZoom: 1, maxZoom: 7, scrollWheelZoom: false, zoomSnap: 0.25 });
      /* OpenStreetMap-Kacheln (kostenlos, ohne API-Schlüssel); Dunkelmodus per CSS-Filter */
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>', maxZoom: 19
      }).addTo(map);
      const markers = PINS.map(p => L.marker([p.lat, p.lng], {
          icon: L.divIcon({ className: '', html: '<div class="map-pin">' + p.f + '</div>', iconSize: [36, 36], iconAnchor: [18, 18] }),
          title: p.n, keyboard: true
        })
        .bindTooltip(p.f + ' ' + p.n, { direction: 'top', offset: [0, -16] })
        .on('click', () => { location.href = p.s + '/'; })
        .addTo(map));
      const el = document.getElementById('worldMap');
      const size = () => el.classList.toggle('far', map.getZoom() < 3);
      map.on('zoomend', size);
      map.fitBounds(L.featureGroup(markers).getBounds(), { padding: [30, 30] });
      size();
    })();
    </script>"""


def emoji_favicon(emoji: str) -> str:
    svg = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">{emoji}</text></svg>'
    return 'data:image/svg+xml,' + urllib.parse.quote(svg)


def icon_svg(emoji: str) -> str:
    return ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">'
            '<rect width="512" height="512" rx="112" fill="#15803d"/>'
            '<rect x="56" y="56" width="400" height="400" rx="80" fill="#f4f7f4"/>'
            f'<text x="256" y="330" font-size="240" text-anchor="middle">{emoji}</text></svg>\n')


# Pfad der Seite auf GitHub Pages (https://mvs2-bot.github.io/QuickTools/).
# Daraus wird die eindeutige "id" jeder App gebaut: Eine relative id wie "./" wird
# gegen die Domain aufgelöst und wäre sonst für ALLE Seiten auf mvs2-bot.github.io
# dieselbe – das Handy hält die App dann für bereits installiert.
PAGES_PATH = '/QuickTools/'
# Die Übersicht umfasst mit scope "./" absichtlich alle Länderordner: Chrome auf
# Android installiert pro Domain (mvs2-bot.github.io) praktisch nur EINE App.
# So reicht die Übersichts-App, und jedes Land öffnet sich darin.


def manifest(name, short, emoji_desc, sub=''):
    return json.dumps({
        "id": PAGES_PATH + (sub + '/' if sub else ''), "start_url": "./", "scope": "./",
        "name": name, "short_name": short, "description": emoji_desc,
        "display": "standalone", "orientation": "portrait",
        "background_color": "#f4f7f4", "theme_color": "#15803d", "lang": "de",
        "icons": [{"src": "icon.svg", "sizes": "any", "type": "image/svg+xml", "purpose": "any"}]
    }, ensure_ascii=False, indent=2) + '\n'


def sw_js(extra_files):
    files = ['./', './index.html', './manifest.json', './icon.svg'] + extra_files
    return f"""/* Service Worker – offline-fähig (für alle Länder gleich, nicht bearbeiten) */
const CACHE = 'qt-' + new URL(self.registration.scope).pathname;
const FILES = {json.dumps(files)};

self.addEventListener('install', e => {{
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
}});
self.addEventListener('activate', e => {{
  e.waitUntil(self.clients.claim());
}});
/* Eigene Dateien & Schriften: sofort aus dem Cache, im Hintergrund aktualisieren.
   Wechselkurse: immer live (die Seite speichert den letzten Kurs selbst). */
self.addEventListener('fetch', e => {{
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const own = url.origin === location.origin;
  const font = /(fonts\\.(googleapis|gstatic)\\.com|unpkg\\.com|cdn\\.jsdelivr\\.net)$/.test(url.hostname);
  if (!own && !font) return;
  e.respondWith(caches.open(CACHE).then(async c => {{
    const hit = await c.match(req, {{ ignoreSearch: own }});
    const net = fetch(req).then(r => {{ if (r && (r.ok || r.type === 'opaque')) c.put(req, r.clone()); return r; }}).catch(() => hit);
    return hit || net;
  }}));
}});
"""


def country_index(m, has_en=False):
    en = '\n    <script src="en.js"></script>' if has_en else ''
    return f"""<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex, nofollow">
    <meta name="theme-color" content="#15803d">
    {THEME_BOOT}
    <title>{m['flag']} Quick-Tools {m['name']}</title>
    <link rel="icon" href="{emoji_favicon(m['flag'])}">
    {FONTS}
    <link rel="stylesheet" href="../shared/style.css">
    <link rel="manifest" href="manifest.json">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <link rel="apple-touch-icon" href="icon.svg">
</head>
<body>
    <noscript>Bitte JavaScript aktivieren.</noscript>
    <!-- Inhalte: data.js (nur dieses Land) · Aufbau & Funktionen: ../shared/app.js (alle Länder) -->
    <script src="data.js"></script>
    <script src="../shared/i18n-en.js"></script>{en}
    <script src="../shared/app.js"></script>
</body>
</html>
"""


def overview_index(countries):
    sections = []
    for region, slugs in REGION.items():
        cards = []
        sortkey = lambda x: (countries.get(x, {}).get('name', x)).replace('Ä', 'Ae').replace('Ö', 'Oe').replace('Ü', 'Ue')
        for s in sorted(slugs, key=sortkey):
            m = countries.get(s)
            if not m:
                continue
            tag = f'<span data-t="calc">Rechner</span> {m["currency"]}' if m['currency'] else '€ · <span data-t="phr">Phrasen</span>'
            q = f"{m['name']} {s} {m['currency'] or 'euro eur'}".lower()
            cards.append(f'<a class="land" data-q="{q}" href="{s}/"><span class="land-flag">{m["flag"]}</span>'
                         f'<span class="land-name" data-n>{m["name"]}</span><span class="land-tag">{tag}</span></a>')
        if cards:
            sections.append(f'<div class="box region"><h2 data-n>{region}</h2><div class="land-grid">{"".join(cards)}</div></div>')
    pins = [{'s': k, 'n': v['name'], 'f': v['flag'], 'lat': v['lat'], 'lng': v['lng']} for k, v in countries.items()]
    map_box = MAP_BOX.replace('__PINS__', json.dumps(pins, ensure_ascii=False))
    return f"""<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex, nofollow">
    <meta name="theme-color" content="#15803d">
    {THEME_BOOT}
    <title>🌍 Urlaubs-Quick-Tools</title>
    <link rel="icon" href="{emoji_favicon('🌍')}">
    {FONTS}
    <link rel="stylesheet" href="shared/style.css">
    <link rel="manifest" href="manifest.json">
    <link rel="apple-touch-icon" href="icon.svg">
    <!-- Leaflet (Weltkarte) -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="">
    <style>
      .land-grid {{ display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 10px; margin-top: 12px; }}
      .land {{ display: flex; flex-direction: column; align-items: center; gap: 2px; text-decoration: none; background: var(--card); border: 1px solid var(--line); border-radius: 10px; padding: 14px 8px; box-shadow: var(--shadow); transition: border-color .15s, transform .15s, background .15s; }}
      .land:hover {{ border-color: var(--p1); background: var(--hover); transform: translateY(-1px); }}
      .land-flag {{ font-size: 2.2rem; line-height: 1.1; }}
      .land-name {{ font-weight: 800; color: var(--ink); }}
      .land-tag {{ font-size: .72rem; font-weight: 700; color: var(--mute); }}
      .map-box {{ padding: 0; overflow: hidden; }}
      #worldMap {{ height: 340px; width: 100%; background: var(--bg); z-index: 0; }}
      .map-pin {{ display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 50%; background: var(--card); border: 2px solid var(--p1); box-shadow: 0 2px 8px rgba(0,0,0,.25); font-size: 1.25rem; line-height: 1; transition: transform .15s; }}
      .map-pin:hover {{ transform: scale(1.2); }}
      #worldMap.far .map-pin {{ width: 26px; height: 26px; font-size: .95rem; border-width: 1.5px; margin: 5px; }}
      .leaflet-container, .leaflet-tooltip {{ font-family: 'Twemoji Country Flags', 'Plus Jakarta Sans', system-ui, sans-serif; }}
      .leaflet-tooltip {{ font-weight: 700; }}
      :root[data-theme="dark"] #worldMap .leaflet-tile-pane {{ filter: invert(1) hue-rotate(180deg) brightness(.85) contrast(.9); }}
      .leaflet-container a {{ color: var(--p1); }}
      @media (max-width: 600px) {{ #worldMap {{ height: 260px; }} }}
    </style>
</head>
<body>
  <div class="wrap">
    <div class="sticky-header">
      <header>
        <div><h1>🌍 <span data-t="title">Urlaubs-Quick-Tools</span></h1><p data-t="sub">Phrasen, Währung, GPS &amp; Notfall-Infos</p></div>
        <div class="header-actions"><button class="burger-btn lang-toggle" type="button"><span>DE</span><span>EN</span></button><button class="burger-btn theme-toggle" type="button" aria-label="Zum dunklen Modus wechseln">🌙</button></div>
      </header>
    </div>
    {map_box}
    <input type="search" id="landSearch" class="phrase-search" placeholder="🔍 Land suchen ({len(countries)} Länder) …" data-ph-en="🔍 Search country ({len(countries)} countries) …" aria-label="Land suchen">
    <p class="note" id="noHit" style="display:none;text-align:center" data-t="nohit">Kein Land gefunden.</p>
    {''.join(sections)}
    <p class="note" style="text-align:center" data-t="tipnote">Tipp: Jedes Land lässt sich einzeln als App installieren und funktioniert danach offline.</p>
  </div>
  <script>
  (function () {{
    const KEY = 'qt_theme_v1';
    /* Sprache DE/EN (gleiche Einstellung wie auf den Länderseiten) */
    let EN = false; try {{ EN = localStorage.getItem('qt_lang_v1') === 'en'; }} catch (e) {{}}
    const UI = {{ title: 'Holiday Quick Tools', sub: 'Phrases, currency, GPS &amp; emergency info', calc: 'Calculator', phr: 'Phrases',
      nohit: 'No country found.', tipnote: 'Tip: every country can be installed as its own app and then works offline.' }};
    document.querySelectorAll('.lang-toggle span')[EN ? 1 : 0].className = 'on';
    document.querySelectorAll('.lang-toggle').forEach(b => {{
      b.title = b.ariaLabel = EN ? 'Auf Deutsch umschalten' : 'Switch to English';
      b.onclick = () => {{ try {{ localStorage.setItem('qt_lang_v1', EN ? 'de' : 'en'); }} catch (e) {{}} location.reload(); }};
    }});
    if (EN) {{
      document.documentElement.lang = 'en';
      document.title = '🌍 Holiday Quick Tools';
      document.querySelectorAll('[data-t]').forEach(el => {{ if (UI[el.dataset.t]) el.innerHTML = UI[el.dataset.t]; }});
      document.querySelectorAll('[data-n]').forEach(el => {{ const t = (window.QT_EN || {{}})[el.textContent]; if (t) el.textContent = t; }});
      document.querySelectorAll('.land-grid').forEach(g => [...g.children]
        .sort((a, b) => a.querySelector('.land-name').textContent.localeCompare(b.querySelector('.land-name').textContent, 'en'))
        .forEach(a => g.appendChild(a)));   // englisch alphabetisch sortieren
      const si = document.getElementById('landSearch'); si.placeholder = si.dataset.phEn; si.setAttribute('aria-label', 'Search country');
    }}
    /* Suche findet deutsche und englische Ländernamen */
    document.querySelectorAll('.land').forEach(a => {{ const n = a.querySelector('.land-name').textContent; a.dataset.q += ' ' + n.toLowerCase(); }});
    function apply(t, save) {{
      const dark = t === 'dark';
      document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
      document.querySelector('meta[name="theme-color"]').setAttribute('content', dark ? '#0f1512' : '#15803d');
      document.querySelectorAll('.theme-toggle').forEach(b => {{ b.textContent = dark ? '☀️' : '🌙'; b.setAttribute('aria-label', dark ? 'Zum hellen Modus wechseln' : 'Zum dunklen Modus wechseln'); }});
      if (save) {{ try {{ localStorage.setItem(KEY, t); }} catch (e) {{}} }}
    }}
    apply(document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light', false);
    document.querySelectorAll('.theme-toggle').forEach(b => b.onclick = () =>
      apply(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark', true));
    /* Suche */
    const inp = document.getElementById('landSearch');
    const norm = t => t.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    inp.addEventListener('input', () => {{
      const q = norm(inp.value.trim()); let hits = 0;
      document.querySelectorAll('.region').forEach(sec => {{
        let n = 0;
        sec.querySelectorAll('.land').forEach(a => {{ const ok = !q || norm(a.dataset.q).includes(q); a.style.display = ok ? '' : 'none'; if (ok) n++; }});
        sec.style.display = n ? '' : 'none'; hits += n;
      }});
      document.getElementById('noHit').style.display = hits ? 'none' : '';
    }});
    inp.addEventListener('keydown', e => {{
      if (e.key !== 'Enter') return;
      const vis = [...document.querySelectorAll('.land')].filter(a => a.style.display !== 'none');
      if (vis.length === 1) location.href = vis[0].getAttribute('href');
    }});
    if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {{}}));
  }})();
  </script>
</body>
</html>
"""


def main():
    countries = {}
    for data in sorted(ROOT.glob('*/data.js')):
        folder = data.parent
        if shutil.which('node'):   # Tippfehler (z. B. Apostroph in '...') früh erkennen
            r = subprocess.run(['node', '--check', str(data)], capture_output=True, text=True)
            if r.returncode:
                raise SystemExit(f"⚠️  Syntaxfehler in {folder.name}/data.js:\n{r.stderr}")
        m = read_meta(data.read_text(encoding='utf-8'))
        if m['slug'] != folder.name:
            raise SystemExit(f"⚠️  {folder.name}/data.js: slug '{m['slug']}' muss gleich dem Ordnernamen sein")
        countries[folder.name] = m
        has_en = (folder / 'en.js').exists()   # englische Texte nur für dieses Land
        (folder / 'index.html').write_text(country_index(m, has_en), encoding='utf-8')
        (folder / 'manifest.json').write_text(
            manifest(f"Quick-Tools {m['name']}", m['name'], f"Urlaubs-Quick-Tools {m['name']}", folder.name), encoding='utf-8')
        (folder / 'sw.js').write_text(sw_js(['./data.js'] + (['./en.js'] if has_en else []) + ['../shared/i18n-en.js', '../shared/app.js', '../shared/style.css']), encoding='utf-8')
        (folder / 'icon.svg').write_text(icon_svg(m['flag']), encoding='utf-8')
        print(f"✓ {m['flag']}  {folder.name}")
    missing = set(countries) - {s for v in REGION.values() for s in v}
    if missing:
        print('⚠️  Nicht in REGION eingetragen (fehlt auf der Übersicht):', ', '.join(sorted(missing)))
    (ROOT / 'index.html').write_text(overview_index(countries), encoding='utf-8')
    (ROOT / 'manifest.json').write_text(manifest('Urlaubs-Quick-Tools', 'Quick-Tools', 'Alle Länder'), encoding='utf-8')
    (ROOT / 'sw.js').write_text(sw_js(['./shared/style.css', './shared/i18n-en.js']), encoding='utf-8')
    (ROOT / 'icon.svg').write_text(icon_svg('🌍'), encoding='utf-8')
    print(f'✓ Übersicht mit {len(countries)} Ländern')


if __name__ == '__main__':
    main()
