// 50 minimal line icons (24x24 grid, stroke-based). Rasterized to PNG at use time.
const ICONS = [
  ['מעטפה', '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>'],
  ['גלגל שיניים', '<path d="M18.18 9.67 L20.78 10.04 L20.78 13.96 L18.18 14.33 L18.01 14.72 L19.60 16.82 L16.82 19.60 L14.72 18.01 L14.33 18.18 L13.96 20.78 L10.04 20.78 L9.67 18.18 L9.28 18.01 L7.18 19.60 L4.40 16.82 L5.99 14.72 L5.82 14.33 L3.22 13.96 L3.22 10.04 L5.82 9.67 L5.99 9.28 L4.40 7.18 L7.18 4.40 L9.28 5.99 L9.67 5.82 L10.04 3.22 L13.96 3.22 L14.33 5.82 L14.72 5.99 L16.82 4.40 L19.60 7.18 L18.01 9.28Z"/><circle cx="12" cy="12" r="3"/>'],
  ['עיפרון', '<path d="M16 3l5 5L8 21H3v-5z"/><path d="M13.5 5.5l5 5"/>'],
  ['מסמך', '<path d="M6 2h8l5 5v15H6z"/><path d="M14 2v5h5M9 12h7M9 16h7"/>'],
  ['איש', '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>'],
  ['אנשים', '<circle cx="9" cy="8" r="3.5"/><path d="M2 20c0-3.9 3.1-6 7-6s7 2.1 7 6"/><circle cx="17" cy="7" r="2.5"/><path d="M17.5 12.5c2.6.3 4.5 2.2 4.5 5"/>'],
  ['תיקייה', '<path d="M3 6a1 1 0 011-1h5l2 2h9a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1z"/>'],
  ['דיאגרמה', '<rect x="9" y="3" width="6" height="5" rx="1"/><rect x="3" y="16" width="6" height="5" rx="1"/><rect x="15" y="16" width="6" height="5" rx="1"/><path d="M12 8v4M6 16v-4h12v4"/>'],
  ['גרף עמודות', '<path d="M3 3v18h18"/><path d="M8 17v-5M12 17V8M16 17v-8M20 17V6"/>'],
  ['גרף עוגה', '<path d="M12 3a9 9 0 109 9h-9z"/><path d="M15 2.5A9 9 0 0121.5 9H15z"/>'],
  ['מגמה עולה', '<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>'],
  ['לוח שנה', '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>'],
  ['שעון', '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'],
  ['טלפון', '<path d="M5 3h4l2 5-2.5 1.5a11 11 0 006 6L16 13l5 2v4a2 2 0 01-2 2A17 17 0 013 5a2 2 0 012-2z"/>'],
  ['בועת צ׳אט', '<path d="M4 4h16a1 1 0 011 1v11a1 1 0 01-1 1H9l-5 4v-4a1 1 0 01-1-1V5a1 1 0 011-1z"/>'],
  ['פעמון', '<path d="M6 16V11a6 6 0 0112 0v5l2 2H4z"/><path d="M10 21h4"/>'],
  ['מנעול', '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/>'],
  ['מפתח', '<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M17 6l3 3M14 9l2 2"/>'],
  ['זכוכית מגדלת', '<circle cx="11" cy="11" r="7"/><path d="M16 16l5 5"/>'],
  ['בית', '<path d="M3 11l9-8 9 8"/><path d="M5 9.5V21h14V9.5M10 21v-6h4v6"/>'],
  ['בניין', '<rect x="5" y="3" width="14" height="18"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M11 21v-3h2v3"/>'],
  ['תיק עבודה', '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2M3 13h18"/>'],
  ['מחשב נייד', '<rect x="5" y="4" width="14" height="10" rx="1"/><path d="M2 18h20l-2-4H4z"/>'],
  ['מסך', '<rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>'],
  ['סמארטפון', '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>'],
  ['ענן', '<path d="M7 18a5 5 0 01-.5-10A6 6 0 0118 9a4.5 4.5 0 01-1 9z"/>'],
  ['מסד נתונים', '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>'],
  ['קישור', '<path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1"/>'],
  ['אטב', '<path d="M20 11l-8.5 8.5a5 5 0 01-7-7L13 4a3.5 3.5 0 015 5l-8.5 8.5a2 2 0 01-3-3L14 7"/>'],
  ['V (אישור)', '<circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/>'],
  ['X (ביטול)', '<circle cx="12" cy="12" r="9"/><path d="M9 9l6 6M15 9l-6 6"/>'],
  ['רשימת משימות', '<path d="M4 6l1.5 1.5L8 5M4 12l1.5 1.5L8 11M4 18l1.5 1.5L8 17M11 6h9M11 12h9M11 18h9"/>'],
  ['לוח (קליפבורד)', '<rect x="5" y="4" width="14" height="18" rx="2"/><rect x="9" y="2" width="6" height="4" rx="1"/><path d="M9 11h6M9 15h6"/>'],
  ['נורה (רעיון)', '<path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9V16h7v-2.1A6 6 0 0012 3z"/>'],
  ['מטרה', '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>'],
  ['דגל', '<path d="M5 21V4M5 4h12l-2 4 2 4H5"/>'],
  ['כוכב', '<path d="M12 3l2.8 5.8 6.2.9-4.5 4.4 1 6.2L12 17.4 6.5 20.3l1-6.2L3 9.7l6.2-.9z"/>'],
  ['לב', '<path d="M12 20s-8-4.8-8-11a4.5 4.5 0 018-2.8A4.5 4.5 0 0120 9c0 6.2-8 11-8 11z"/>'],
  ['מטבע / כסף', '<circle cx="12" cy="12" r="9"/><path d="M15 9h-4a1.5 1.5 0 000 3h2a1.5 1.5 0 010 3H9M12 7v2M12 15v2"/>'],
  ['עגלת קניות', '<path d="M2 3h3l2.5 12h11L21 7H6"/><circle cx="9" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/>'],
  ['AI', '<path d="M10 3l1.8 5.2L17 10l-5.2 1.8L10 17l-1.8-5.2L3 10l5.2-1.8z"/><path d="M18 14l.9 2.1L21 17l-2.1.9L18 20l-.9-2.1L15 17l2.1-.9z"/><path d="M18 3v4M16 5h4"/>'],
  ['מיקום', '<path d="M12 21s-7-6.5-7-12a7 7 0 0114 0c0 5.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>'],
  ['גלובוס', '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3z"/>'],
  ['העלאה', '<path d="M12 16V4M7 9l5-5 5 5M4 17v3h16v-3"/>'],
  ['הורדה', '<path d="M12 4v12M7 11l5 5 5-5M4 17v3h16v-3"/>'],
  ['סנכרון / רענון', '<path d="M20 11a8 8 0 00-14.5-4.5L4 8M4 4v4h4M4 13a8 8 0 0014.5 4.5L20 16M20 20v-4h-4"/>'],
  ['אזהרה', '<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18h.01"/>'],
  ['מידע', '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5h.01"/>'],
  ['הגדרות (סליידרים)', '<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>'],
  ['פאזל', '<path d="M4 8h4a2 2 0 114 0h4v4a2 2 0 110 4v4h-4a2 2 0 10-4 0H4v-4a2 2 0 100-4z"/>'],
];

// Render icon i to a PNG data URL (size px, color).
function iconPng(i, size = 128, color = '#1f2937') {
  return new Promise(res => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="${color}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${ICONS[i][1]}</svg>`;
    const img = new Image();
    img.onload = () => {
      const c = document.createElement('canvas'); c.width = c.height = size;
      c.getContext('2d').drawImage(img, 0, 0, size, size);
      res(c.toDataURL('image/png'));
    };
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  });
}
