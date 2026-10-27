/* ==========================================================================
   LINIEN-SYMBOLE (SVG-Sprite) – für Übersicht und alle Länder
   Einbinden vor app.js. Verwendung: qtIcon('pin') → <svg class="ic">…</svg>
   Strichstärke folgt der Schrift (currentColor), Größe über .ic in style.css.
   ========================================================================== */
(function () {
  const S = {
    back: '<path d="M15 5l-7 7 7 7"/>',
    next: '<path d="M9 5l7 7-7 7"/>',
    calc: '<rect x="5" y="3" width="14" height="18" rx="3"/><path d="M8.5 7h7"/><path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01M8.5 15h.01M12 15h.01M15.5 15h.01M8.5 18h.01M12 18h.01M15.5 18h.01"/>',
    chat: '<path d="M20 11.5c0 4-3.6 7-8 7-1 0-2-.2-2.9-.5L5 19.5l1.2-3.3C4.8 15 4 13.3 4 11.5c0-4 3.6-7 8-7s8 3 8 7z"/>',
    pin: '<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0113 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.4"/>',
    info: '<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5"/><path d="M12 7.6h.01"/>',
    moon: '<path d="M19.5 14.6A7.8 7.8 0 019.4 4.5a7.8 7.8 0 1010.1 10.1z"/>',
    sun: '<circle cx="12" cy="12" r="3.8"/><path d="M12 2.8v2M12 19.2v2M2.8 12h2M19.2 12h2M5.5 5.5l1.4 1.4M17.1 17.1l1.4 1.4M5.5 18.5l1.4-1.4M17.1 6.9l1.4-1.4"/>',
    menu: '<path d="M4.5 7h15M4.5 12h15M4.5 17h15"/>',
    x: '<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>',
    swap: '<path d="M7 8h12l-3.5-3.5"/><path d="M17 16H5l3.5 3.5"/>',
    refresh: '<path d="M19.5 12a7.5 7.5 0 11-2.2-5.3"/><path d="M19.5 4.5v4.2h-4.2"/>',
    table: '<rect x="3.5" y="5" width="17" height="14" rx="2.5"/><path d="M3.5 9.5h17M12 9.5V19"/>',
    trend: '<path d="M4 17l5-5 3.5 3.5L20 8"/><path d="M15 8h5v5"/>',
    car: '<path d="M5 16.5V12l1.8-4.6A2 2 0 018.7 6h6.6a2 2 0 011.9 1.4L19 12v4.5"/><path d="M4 12h16v4.5H4z"/><path d="M6.5 16.5v2M17.5 16.5v2"/><path d="M7.5 14.2h.01M16.5 14.2h.01"/>',
    sunrise: '<path d="M4 18h16"/><path d="M7.5 18a4.5 4.5 0 019 0"/><path d="M12 4v5M9.5 6.5L12 4l2.5 2.5"/><path d="M4.6 12.6l1.4 1M19.4 12.6l-1.4 1"/>',
    sunset: '<path d="M4 18h16"/><path d="M7.5 18a4.5 4.5 0 019 0"/><path d="M12 4v5M9.5 6.5L12 9l2.5-2.5"/><path d="M4.6 12.6l1.4 1M19.4 12.6l-1.4 1"/>',
    clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    eye: '<path d="M2.8 12S6.2 5.5 12 5.5 21.2 12 21.2 12 17.8 18.5 12 18.5 2.8 12 2.8 12z"/><circle cx="12" cy="12" r="2.8"/>',
    plug: '<path d="M9 3.5v4M15 3.5v4"/><path d="M6.5 7.5h11V11a5.5 5.5 0 01-11 0z"/><path d="M12 16.5v4"/>',
    drop: '<path d="M12 3.5s6 6.4 6 10.8a6 6 0 01-12 0C6 9.9 12 3.5 12 3.5z"/>',
    cash: '<rect x="3" y="6.5" width="18" height="11" rx="2.2"/><circle cx="12" cy="12" r="2.4"/><path d="M6.5 9.5h.01M17.5 14.5h.01"/>',
    phone: '<path d="M6.6 3.8h2.6l1.4 4-2 1.3a11 11 0 005.3 5.3l1.3-2 4 1.4v2.6a2 2 0 01-2.2 2A15.5 15.5 0 014.6 6a2 2 0 012-2.2z"/>',
    bank: '<path d="M3.5 9L12 4.5 20.5 9"/><path d="M5 9.5h14"/><path d="M6.5 10v7M10 10v7M14 10v7M17.5 10v7"/><path d="M4 19.5h16"/>',
    speaker: '<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.5 9a4 4 0 010 6M18 6.5a7.5 7.5 0 010 11"/>',
    mute: '<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/>',
    expand: '<path d="M4.5 9.5v-5h5M19.5 9.5v-5h-5M4.5 14.5v5h5M19.5 14.5v5h-5"/>',
    star: '<path d="M12 3.8l2.5 5.2 5.7.8-4.1 4 1 5.6L12 16.7l-5.1 2.7 1-5.6-4.1-4 5.7-.8z"/>',
    trash: '<path d="M4.5 6.5h15"/><path d="M9.5 6.5V4.5h5v2"/><path d="M6.5 6.5l.9 12a2 2 0 002 1.8h5.2a2 2 0 002-1.8l.9-12"/><path d="M10 10.5v6M14 10.5v6"/>',
    map: '<path d="M9 4.5l-5 2v13l5-2 6 2 5-2v-13l-5 2z"/><path d="M9 4.5v13M15 6.5v13"/>',
    locate: '<path d="M20 4L4 10.8l6.8 2.4L13.2 20z"/>',
    copy: '<rect x="8.5" y="8.5" width="11" height="11" rx="2.2"/><path d="M15.5 8.5V6.7a2.2 2.2 0 00-2.2-2.2H6.7a2.2 2.2 0 00-2.2 2.2v6.6a2.2 2.2 0 002.2 2.2h1.8"/>',
    pencil: '<path d="M4.5 19.5l1-4.2L15.8 5a2 2 0 012.9 0l.3.3a2 2 0 010 2.9L8.7 18.5z"/><path d="M14 6.8l3.2 3.2"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    globe: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17"/><path d="M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.2-3.6-8.5S9.6 5.9 12 3.5z"/>',
    book: '<path d="M12 6.5c-1.8-1.4-4.3-2-7.5-2v13c3.2 0 5.7.6 7.5 2 1.8-1.4 4.3-2 7.5-2v-13c-3.2 0-5.7.6-7.5 2z"/><path d="M12 6.5v13"/>',
    sim: '<path d="M7 3.5h7.5L18 7v11.5a2 2 0 01-2 2H7a2 2 0 01-2-2v-13a2 2 0 012-2z"/><rect x="8.5" y="11" width="7" height="6.5" rx="1.2"/>',
    apps: '<rect x="4" y="4" width="6.5" height="6.5" rx="1.8"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.8"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.8"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.8"/>',
    traffic: '<rect x="8" y="3" width="8" height="18" rx="3"/><circle cx="12" cy="7.5" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="12" cy="16.5" r="1.4"/>',
    bike: '<circle cx="6" cy="16" r="3.5"/><circle cx="18" cy="16" r="3.5"/><path d="M6 16l3.5-7h5L18 16M9.5 9l3 7h-1M13.5 6.5h2.5"/>',
    glass: '<path d="M6.5 4h11l-1.2 9.2a4.3 4.3 0 01-8.6 0z"/><path d="M12 17.5v3M8.5 20.5h7"/><path d="M6.9 8h10.2"/>',
    search: '<circle cx="10.8" cy="10.8" r="6"/><path d="M15.3 15.3l4.2 4.2"/>',
    warn: '<path d="M12 4.2l8.5 15H3.5z"/><path d="M12 10v4.2M12 16.8h.01"/>',
    siren: '<path d="M6.5 18v-5.5a5.5 5.5 0 0111 0V18"/><path d="M4.5 18h15v2.5h-15z"/><path d="M12 3v1.5M4.2 6.2l1.1 1.1M19.8 6.2l-1.1 1.1"/><path d="M12 11v3.5"/>',
    flag: '<path d="M5.5 21V4.5"/><path d="M5.5 5c4.5-2 8.5 2 13 0v8.5c-4.5 2-8.5-2-13 0"/>'
  };
  const sprite = '<svg xmlns="http://www.w3.org/2000/svg" style="position:absolute;width:0;height:0;overflow:hidden" aria-hidden="true">' +
    Object.keys(S).map(k => `<symbol id="i-${k}" viewBox="0 0 24 24">${S[k]}</symbol>`).join('') + '</svg>';
  const put = () => { if (!document.getElementById('i-back')) document.body.insertAdjacentHTML('afterbegin', sprite); };
  if (document.body) put(); else document.addEventListener('DOMContentLoaded', put);
  window.qtIcon = (name, cls) => `<svg class="ic${cls ? ' ' + cls : ''}" aria-hidden="true"><use href="#i-${name}"/></svg>`;
})();
