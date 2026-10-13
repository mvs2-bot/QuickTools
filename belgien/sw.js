/* Service Worker – offline-fähig (für alle Länder gleich, nicht bearbeiten) */
const CACHE = 'qt-' + new URL(self.registration.scope).pathname;
const FILES = ["./", "./index.html", "./manifest.json", "./icon.svg", "./data.js", "../shared/app.js", "../shared/style.css"];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(self.clients.claim());
});
/* Eigene Dateien & Schriften: sofort aus dem Cache, im Hintergrund aktualisieren.
   Wechselkurse: immer live (die Seite speichert den letzten Kurs selbst). */
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const own = url.origin === location.origin;
  const font = /(fonts\.(googleapis|gstatic)\.com|unpkg\.com|cdn\.jsdelivr\.net)$/.test(url.hostname);
  if (!own && !font) return;
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(req, { ignoreSearch: own });
    const net = fetch(req).then(r => { if (r && (r.ok || r.type === 'opaque')) c.put(req, r.clone()); return r; }).catch(() => hit);
    return hit || net;
  }));
});
