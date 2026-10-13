# 🌍 Urlaubs-Quick-Tools

Phrasen, Währungsrechner, GPS, Sonnenzeiten und Notfall-Infos für 14 Länder – als eine GitHub Page, jedes Land einzeln als App installierbar und offline nutzbar.

Adresse nach dem Hochladen: `https://mvs2-bot.github.io/QuickTools/` (Länder z. B. unter `…/QuickTools/spanien/`)

## Aufbau

```
QuickTools/
├── index.html, manifest.json, sw.js, icon.svg   ← Übersichtsseite (wird erzeugt)
├── shared/
│   ├── app.js      ← Aufbau & alle Funktionen – Änderung wirkt in ALLEN Ländern
│   └── style.css   ← Design – Änderung wirkt in ALLEN Ländern
├── spanien/
│   ├── data.js     ← ⭐ Inhalte nur für Spanien (Phrasen, Notruf, Botschaft, Tipps …)
│   └── index.html, manifest.json, sw.js, icon.svg   ← werden erzeugt, nicht bearbeiten
├── … (ein Ordner pro Land)
└── tools/
    ├── neues_land.py        ← erzeugt Rahmendateien + Übersicht
    └── weiterleitung.html   ← Vorlage für die alten Einzel-Repos
```

## Was bearbeite ich wo?

| Ich will …                                      | Datei                        |
|-------------------------------------------------|------------------------------|
| eine Phrase, Notrufnummer oder Botschaft ändern | `<land>/data.js`             |
| eine Funktion für alle Länder ändern/ergänzen   | `shared/app.js`              |
| Farben, Abstände, Schrift für alle ändern       | `shared/style.css`           |
| ein neues Land anlegen                          | siehe unten                  |

**Währung:** In `data.js` steht `currency: null` → Euro-Land, kein Rechner, Startseite = Phrasen.
Mit `currency: { code: 'CHF', symbol: 'Fr.', name: 'Schweizer Franken' }` erscheint der Rechner als erster Tab.

**Uhren-Leiste** erscheint automatisch nur, wenn das Land eine andere Uhrzeit als Deutschland hat.

## Neues Land anlegen

1. Einen ähnlichen Länderordner kopieren, z. B. `kroatien` → `griechenland`
2. In `griechenland/data.js` `slug: 'griechenland'` (= Ordnername), `name`, `flag`, `tz`, `currency` und die Inhalte anpassen
3. In `tools/neues_land.py` oben bei `REGION` den Ordnernamen eintragen
4. `python3 tools/neues_land.py` ausführen und alles hochladen

## Veröffentlichen (GitHub Pages)

1. Neues Repo **QuickTools** anlegen, den kompletten Inhalt dieses Ordners hochladen
2. *Settings → Pages → Branch: `main` / Ordner: `/ (root)`* → Speichern
3. Nach 1–2 Minuten ist die Seite erreichbar

## Alte Einzel-Repos weiterleiten

In den alten Repos (QuickToolsThailand, QuickToolsSriLanka, …) die `index.html` durch `tools/weiterleitung.html` ersetzen und darin das Ziel-Land anpassen. Alte Lesezeichen landen dann auf der neuen Seite. Die alte installierte App auf dem Handy danach deinstallieren und die neue installieren.

## Speicher im Browser

Alle Seiten liegen unter derselben Adresse `mvs2-bot.github.io` und teilen sich den Browserspeicher. Deshalb nutzt jedes Land eigene Schlüssel (`qt_<land>_fx_v1` für den letzten Wechselkurs). Hell/Dunkel (`qt_theme_v1`) gilt absichtlich für alle Länder gemeinsam.

Wechselkurse: open.er-api.com · Notruf- & Botschaftsdaten: Auswärtiges Amt (Stand Oktober 2026) – vor der Reise kurz gegenprüfen.
