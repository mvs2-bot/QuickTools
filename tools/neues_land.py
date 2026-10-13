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
    'Europa': ['albanien', 'belgien', 'daenemark', 'deutschland', 'frankreich', 'island', 'italien', 'kroatien',
               'niederlande', 'oesterreich', 'portugal', 'schweden', 'schweiz', 'spanien', 'tschechien'],
    'Asien': ['china', 'japan', 'srilanka', 'suedkorea', 'thailand'],
    'Mittel- & Südamerika': ['argentinien', 'bolivien', 'chile', 'guatemala', 'kolumbien', 'peru'],
}

THEME_BOOT = ("<script>(function(){try{if(localStorage.getItem('qt_theme_v1')==='dark')"
              "document.documentElement.setAttribute('data-theme','dark');}catch(e){}})();</script>")
FONTS = ('<link rel="preconnect" href="https://fonts.googleapis.com">\n'
         '    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'
         '    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">')


def read_meta(data_js: str) -> dict:
    def grab(key):
        m = re.search(rf"\b{key}:\s*'([^']*)'", data_js)
        return m.group(1) if m else ''
    cur = re.search(r"currency:\s*\{[^}]*code:\s*'([A-Z]{3})'", data_js)
    pl = re.search(r"places:\s*\[\s*\['[^']*',\s*(-?[\d.]+),\s*(-?[\d.]+)", data_js)
    return {'slug': grab('slug'), 'name': grab('name'), 'flag': grab('flag'),
            'currency': cur.group(1) if cur else None,
            'lat': float(pl.group(1)) if pl else 0, 'lng': float(pl.group(2)) if pl else 0}

MAP_BOX = """<div class="box map-box" id="mapBox"><div id="worldMap" role="img" aria-label="Weltkarte mit allen Ländern"></div></div>
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" crossorigin=""></script>
    <script>
    (function () {
      const PINS = __PINS__;
      if (!window.L) { document.getElementById('mapBox').style.display = 'none'; return; }   // offline → Karte ausblenden
      const map = L.map('worldMap', { worldCopyJump: true, minZoom: 1, maxZoom: 7, scrollWheelZoom: false, zoomSnap: 0.25 });
      const url = d => 'https://{s}.basemaps.cartocdn.com/' + (d ? 'dark_all' : 'rastertiles/voyager') + '/{z}/{x}/{y}{r}.png';
      const attr = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>';
      const isDark = () => document.documentElement.getAttribute('data-theme') === 'dark';
      const tiles = L.tileLayer(url(isDark()), { attribution: attr, subdomains: 'abcd', maxZoom: 19 }).addTo(map);
      window.qtMapTheme = d => tiles.setUrl(url(d));
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


def manifest(name, short, emoji_desc):
    return json.dumps({
        "id": "./", "start_url": "./", "scope": "./",
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
  const font = /(fonts\\.(googleapis|gstatic)\\.com|unpkg\\.com)$/.test(url.hostname);
  if (!own && !font) return;
  e.respondWith(caches.open(CACHE).then(async c => {{
    const hit = await c.match(req, {{ ignoreSearch: own }});
    const net = fetch(req).then(r => {{ if (r && (r.ok || r.type === 'opaque')) c.put(req, r.clone()); return r; }}).catch(() => hit);
    return hit || net;
  }}));
}});
"""


def country_index(m):
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
    <script src="../shared/app.js"></script>
</body>
</html>
"""


def overview_index(countries):
    sections = []
    for region, slugs in REGION.items():
        cards = []
        for s in slugs:
            m = countries.get(s)
            if not m:
                continue
            tag = f"Rechner {m['currency']}" if m['currency'] else '€ · Phrasen'
            cards.append(f'<a class="land" href="{s}/"><span class="land-flag">{m["flag"]}</span>'
                         f'<span class="land-name">{m["name"]}</span><span class="land-tag">{tag}</span></a>')
        if cards:
            sections.append(f'<div class="box"><h2>{region}</h2><div class="land-grid">{"".join(cards)}</div></div>')
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
      .leaflet-tooltip {{ font-family: inherit; font-weight: 700; }}
      .leaflet-container a {{ color: var(--p1); }}
      @media (max-width: 600px) {{ #worldMap {{ height: 260px; }} }}
    </style>
</head>
<body>
  <div class="wrap">
    <div class="sticky-header">
      <header>
        <div><h1>🌍 Urlaubs-Quick-Tools</h1><p>Phrasen, Währung, GPS &amp; Notfall-Infos</p></div>
        <div class="header-actions"><button class="burger-btn theme-toggle" type="button" aria-label="Zum dunklen Modus wechseln">🌙</button></div>
      </header>
    </div>
    {map_box}
    {''.join(sections)}
    <p class="note" style="text-align:center">Tipp: Jedes Land lässt sich einzeln als App installieren und funktioniert danach offline.</p>
  </div>
  <script>
  (function () {{
    const KEY = 'qt_theme_v1';
    function apply(t, save) {{
      const dark = t === 'dark';
      document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
      document.querySelector('meta[name="theme-color"]').setAttribute('content', dark ? '#0f1512' : '#15803d');
      document.querySelectorAll('.theme-toggle').forEach(b => {{ b.textContent = dark ? '☀️' : '🌙'; b.setAttribute('aria-label', dark ? 'Zum hellen Modus wechseln' : 'Zum dunklen Modus wechseln'); }});
      if (save) {{ try {{ localStorage.setItem(KEY, t); }} catch (e) {{}} }}
      if (window.qtMapTheme) window.qtMapTheme(dark);
    }}
    apply(document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light', false);
    document.querySelectorAll('.theme-toggle').forEach(b => b.onclick = () =>
      apply(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark', true));
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
        (folder / 'index.html').write_text(country_index(m), encoding='utf-8')
        (folder / 'manifest.json').write_text(
            manifest(f"Quick-Tools {m['name']}", m['name'], f"Urlaubs-Quick-Tools {m['name']}"), encoding='utf-8')
        (folder / 'sw.js').write_text(sw_js(['./data.js', '../shared/app.js', '../shared/style.css']), encoding='utf-8')
        (folder / 'icon.svg').write_text(icon_svg(m['flag']), encoding='utf-8')
        print(f"✓ {m['flag']}  {folder.name}")
    missing = set(countries) - {s for v in REGION.values() for s in v}
    if missing:
        print('⚠️  Nicht in REGION eingetragen (fehlt auf der Übersicht):', ', '.join(sorted(missing)))
    (ROOT / 'index.html').write_text(overview_index(countries), encoding='utf-8')
    (ROOT / 'manifest.json').write_text(manifest('Urlaubs-Quick-Tools', 'Quick-Tools', 'Alle Länder'), encoding='utf-8')
    (ROOT / 'sw.js').write_text(sw_js(['./shared/style.css']), encoding='utf-8')
    (ROOT / 'icon.svg').write_text(icon_svg('🌍'), encoding='utf-8')
    print(f'✓ Übersicht mit {len(countries)} Ländern')


if __name__ == '__main__':
    main()
