# 🌍 Urlaubs-Quick-Tools

Phrasen, Währungsrechner, GPS, Sonnenzeiten und Notfall-Infos für alle 197 Länder (193 UN-Staaten, Vatikanstadt, Palästina, Kosovo und Taiwan) – als eine GitHub Page, jedes Land einzeln als App installierbar und offline nutzbar.

Adresse nach dem Hochladen: `https://mvs2-bot.github.io/QuickTools/` (Länder z. B. unter `…/QuickTools/spanien/`)

## Aufbau

```
QuickTools/
├── index.html, manifest.json, sw.js, icon.svg   ← Übersichtsseite (wird erzeugt)
├── shared/
│   ├── app.js      ← Aufbau & alle Funktionen – Änderung wirkt in ALLEN Ländern
│   ├── style.css   ← Design – Änderung wirkt in ALLEN Ländern
│   └── icons.js    ← Linien-Symbole (SVG) für Übersicht und Länder
├── spanien/
│   ├── data.js     ← ⭐ Inhalte nur für Spanien (Phrasen, Notruf, Botschaft, Tipps …)
│   ├── en.js       ← englische Texte nur für Spanien
│   └── index.html, manifest.json, sw.js, icon.svg   ← werden erzeugt, nicht bearbeiten
├── … (ein Ordner pro Land)
└── tools/
    ├── neues_land.py        ← erzeugt Rahmendateien + Übersicht
    ├── en_aufteilen.js      ← verteilt die englischen Texte auf shared/ und <land>/en.js
    └── weiterleitung.html   ← Vorlage für die alten Einzel-Repos
```

## Was bearbeite ich wo?

| Ich will …                                      | Datei                        |
|-------------------------------------------------|------------------------------|
| eine Phrase, Notrufnummer oder Botschaft ändern | `<land>/data.js`             |
| eine Funktion für alle Länder ändern/ergänzen   | `shared/app.js`              |
| Farben, Abstände, Schrift für alle ändern       | `shared/style.css`           |
| ein Symbol ändern oder ergänzen                 | `shared/icons.js`            |
| ein neues Land anlegen                          | siehe unten                  |

**Währung:** In `data.js` steht `currency: null` → Euro-Land, kein Rechner, Startseite = Phrasen.
Mit `currency: { code: 'CHF', symbol: 'Fr.', name: 'Schweizer Franken' }` erscheint der Rechner als erster Tab. Der zuletzt geladene Kurs wird auf dem Gerät gespeichert, beim Öffnen sofort angezeigt (auch offline) und mit Datum versehen („Kurs vom 12.01.“); ist er älter als 7 Tage, erscheint ein Warnhinweis.

**Uhren-Leiste** erscheint automatisch nur, wenn das Land eine andere Uhrzeit als Deutschland hat.

**Optionale Felder in `data.js`:** `embassy: null` blendet den Botschafts-Block aus (z. B. Deutschland), `rulesTitle` / `rulesNote` ändern Überschrift und Hinweis der Regeln-Box, `aaLabel` den Text des Link-Buttons. `status` (Box „🌐 Status & Anerkennung“, z. B. bei Taiwan, Kosovo oder Palästina) ist eine Liste wie `rules`. `car` und `bike` (Box „🚦 Verkehrsregeln“) sowie `substances` (Box „🍺 Alkohol, Tabak & Drogen“) sind Listen wie `rules` – fehlen sie, wird die jeweilige Box bzw. Unterüberschrift einfach weggelassen. Bei Orten in einer anderen Zeitzone als dem Rest des Landes als 4. Wert die Zeitzone angeben, z. B. `['Ponta Delgada (Azoren)', 37.74, -25.68, 'Atlantic/Azores']`.

**Achtung Apostroph:** Text in `'…'` darf kein `'` enthalten – dann den Text in `"…"` setzen (z. B. `"C'est combien ?"`). Das Skript prüft das automatisch, wenn Node.js installiert ist.

**Auf einen Blick & Taxi-Karte:** `glance` (Steckdose, Spannung, Adapter, Links/Rechtsverkehr, Leitungswasser, Trinkgeld, Vorwahl) erscheint oben im Infos-Tab; `taxi` ist der Satz „Bitte bringen Sie mich zu dieser Adresse“ in Landessprache für die Taxi-Karte im GPS-Tab.

**Nur auf dem Gerät gespeichert:** Favoriten (☆), eigene Phrasen, Taxi-Karte und ein eigener Wechselkurs – je Land getrennt, nichts davon landet im Repo.

**Weltkarte:** Die Übersicht zeigt jedes Land als Flagge an seinem ersten Ort in `places` (meist die Hauptstadt). Offline wird die Karte einfach ausgeblendet.

## Design

Apple-Designsprache wie die anderen Seiten (Dashboard, Zuhause …): Systemschrift ohne Serifen, kleine bis mittlere Größen, weiße Karten auf grauem Grund, Linien-Symbole statt Emojis (Flaggen bleiben). Akzent nach Wikipedia: Linkblau `#3366cc` (dunkel `#88a3e8`) mit Wikipedias Grautönen. Alle Farben stehen als Variablen oben in `shared/style.css`.

Nach Änderungen an Design oder Code in allen `sw.js` die Cache-Version (`qt-v2-`) hochzählen, damit installierte Apps sofort neu laden.

## Sprache (DE/EN)

Oben rechts neben dem Hell/Dunkel-Button schaltet **DE | EN** alle Texte um – auf der Übersicht und in allen Ländern gleichzeitig (gespeichert als `qt_lang_v1`).

- Die Inhalte in den `data.js` bleiben **auf Deutsch**. Die englischen Texte stehen als Paare `"Deutscher Text": "English text"` in `<land>/en.js` (nur dieses Land) und in `shared/i18n-en.js` (Ländernamen und Texte, die mehrere Länder nutzen). So lädt jede Länderseite nur ihre eigenen Übersetzungen.
- Nach größeren Änderungen `node tools/en_aufteilen.js` ausführen: Es sortiert die Paare automatisch in die richtige Datei.
- Fehlt eine Übersetzung, wird einfach der deutsche Text angezeigt – nichts geht kaputt.
- Ändert man einen deutschen Text in einer `data.js`, muss der Schlüssel in `<land>/en.js` bzw. `shared/i18n-en.js` mit angepasst werden (sonst erscheint dort Deutsch).
- Bedienelemente (Buttons, Überschriften) stehen in `shared/app.js` im Objekt `UI`.
- Favoriten bleiben beim Sprachwechsel erhalten.

## Neues Land anlegen

1. Einen ähnlichen Länderordner kopieren, z. B. `kroatien` → `griechenland`
2. In `griechenland/data.js` `slug: 'griechenland'` (= Ordnername), `name`, `flag`, `tz`, `currency` und die Inhalte anpassen, in `griechenland/en.js` die englischen Texte
3. In `tools/neues_land.py` oben bei `REGION` den Ordnernamen eintragen
4. `python3 tools/neues_land.py` ausführen und alles hochladen

## Veröffentlichen (GitHub Pages)

1. Neues Repo **QuickTools** anlegen, den kompletten Inhalt dieses Ordners hochladen
2. *Settings → Pages → Branch: `main` / Ordner: `/ (root)`* → Speichern
3. Nach 1–2 Minuten ist die Seite erreichbar

## Alte Einzel-Repos weiterleiten

In den alten Repos (QuickToolsThailand, QuickToolsSriLanka, …) die `index.html` durch `tools/weiterleitung.html` ersetzen und darin das Ziel-Land anpassen. Alte Lesezeichen landen dann auf der neuen Seite. Die alte installierte App auf dem Handy danach deinstallieren und die neue installieren.

## Als App installieren

Auf dem Handy die **Übersicht** installieren. Sie umfasst alle Länder, die sich dann in der App öffnen. Chrome auf Android lässt pro Domain (`mvs2-bot.github.io`) nur eine installierte App zu. Ist schon ein einzelnes Land oder eine andere Seite von `mvs2-bot.github.io` installiert, meldet Chrome „Diese App wurde bereits installiert“. Dann zuerst diese App deinstallieren.

## Speicher im Browser

Alle Seiten liegen unter derselben Adresse `mvs2-bot.github.io` und teilen sich den Browserspeicher. Deshalb nutzt jedes Land eigene Schlüssel (`qt_<land>_fx_v1` für den letzten Wechselkurs). Hell/Dunkel (`qt_theme_v1`) gilt absichtlich für alle Länder gemeinsam.

Wechselkurse: open.er-api.com · Notruf- & Botschaftsdaten: Auswärtiges Amt (Stand Oktober 2026; die 148 im Oktober 2026 neu ergänzten Länder sind noch nicht einzeln gegen die AA-Seiten geprüft) – vor der Reise kurz gegenprüfen.
