// ─── DATA ─────────────────────────────────────────────────────────────────────

const DOG_PARKS = [
  { name: "Schuylkill River Dog Run", address: "300 S 25th St, 19103", neighborhood: "Fitler Square", lat: 39.9481, lng: -75.1815, fenced: true, offLeash: true, separateAreas: true, membership: "Free", ground: "Synthetic grass", water: true, amenities: "Fountains, waste bags, separate large/small areas" },
  { name: "Seger Dog Park", address: "1001 Rodman St, 19147", neighborhood: "Washington Square West", lat: 39.9432, lng: -75.1593, fenced: true, offLeash: true, separateAreas: false, membership: "$50/yr suggested", ground: "Artificial turf", water: true, amenities: "Benches, water fountains, seasonal events" },
  { name: "Mario Lanza Dog Park", address: "200 Queen St, 19147", neighborhood: "Queen Village", lat: 39.9412, lng: -75.1483, fenced: true, offLeash: true, separateAreas: true, membership: "Free", ground: "Gravel", water: true, amenities: "Water fountains, benches, tables, night lighting" },
  { name: "Columbus Square Dog Park", address: "1200 Wharton St, 19147", neighborhood: "South Philadelphia", lat: 39.9321, lng: -75.1617, fenced: true, offLeash: true, separateAreas: true, membership: "Free", ground: "Pea gravel / turf", water: true, amenities: "Water fountains, benches, shade trees" },
  { name: "Orianna Hill Dog Park", address: "901 N Orianna St, 19123", neighborhood: "Northern Liberties", lat: 39.966, lng: -75.1417, fenced: true, offLeash: true, separateAreas: false, membership: "Free reg, $50/yr suggested", ground: "Mixed", water: true, amenities: "Tennis balls, water fountain, bowls, trail" },
  { name: "Pop's Playground Dog Park", address: "2171 E Hazzard St, 19125", neighborhood: "Fishtown / Kensington", lat: 39.9748, lng: -75.1241, fenced: true, offLeash: true, separateAreas: false, membership: "Key access required", ground: "Mixed", water: false, amenities: "Key access" },
  { name: "Palmer Doggie Depot", address: "37 E Palmer St, 19125", neighborhood: "Fishtown", lat: 39.9712, lng: -75.1327, fenced: true, offLeash: true, separateAreas: false, membership: "Free", ground: "Dirt and cobblestone", water: true, amenities: "Doggie fountain, solar lighting" },
  { name: "Pretzel Park Dog Run", address: "4300 Silverwood St, 19127", neighborhood: "Manayunk", lat: 40.0259, lng: -75.2243, fenced: true, offLeash: true, separateAreas: false, membership: "Free", ground: "Dirt and wood chips", water: false, amenities: "Fencing" },
  { name: "Roxborough Dog Park", address: "4117 Mitchell St, 19128", neighborhood: "Roxborough", lat: 40.031, lng: -75.2254, fenced: true, offLeash: true, separateAreas: true, membership: "$25+/yr", ground: "Mixed", water: false, amenities: "Separate large/small areas" },
  { name: "Lanier Dog Park", address: "2911 Tasker St, 19145", neighborhood: "Grays Ferry", lat: 39.9377, lng: -75.1854, fenced: true, offLeash: true, separateAreas: true, membership: "$50/yr suggested", ground: "ForeverLawn turf", water: true, amenities: "Toys, water dishes, poop bags, pools (summer)" },
  { name: "Bok Building Dog Park", address: "9th & Dudley St, 19148", neighborhood: "South Philadelphia", lat: 39.9268, lng: -75.1569, fenced: true, offLeash: true, separateAreas: false, membership: "Free", ground: "Mixed", water: true, amenities: "Cement seating, water area, poop station" },
  { name: "Penn's Landing Dog Park", address: "N Columbus Blvd & Market St, 19106", neighborhood: "Old City", lat: 39.9507, lng: -75.1393, fenced: true, offLeash: true, separateAreas: true, membership: "Free", ground: "Mixed", water: true, amenities: "Benches, water stations, river views" },
  { name: "Green Street Dog Park", address: "156 W Wildey St, 19123", neighborhood: "Northern Liberties", lat: 39.967, lng: -75.146, fenced: true, offLeash: true, separateAreas: false, membership: "Membership required", ground: "Mixed", water: false, amenities: "Fenced area, green space" },
  { name: "Chester Avenue Dog Park", address: "Chester Ave & 48th St, 19143", neighborhood: "Cedar Park", lat: 39.9525, lng: -75.2208, fenced: true, offLeash: true, separateAreas: false, membership: "$60/yr + deposit", ground: "Mixed", water: true, amenities: "Kiddie pool, ramps, hurdles, toys" },
  { name: "Clark Park Dog Bowl", address: "4300 Baltimore Ave, 19104", neighborhood: "University City", lat: 39.9485, lng: -75.2108, fenced: false, offLeash: false, separateAreas: false, membership: "Free", ground: "Grass and dirt", water: false, amenities: "Open green space" },
  { name: "The Boozy Mutt", address: "2653 W Girard Ave, 19130", neighborhood: "Brewerytown", lat: 39.9717, lng: -75.18, fenced: true, offLeash: true, separateAreas: false, membership: "Day pass required", ground: "Turf", water: true, amenities: "Bar, restaurant, dog menu" },
];

const COMMUNITY_RESOURCES = [
  { name: "Broad Street Ministry", address: "315 S Broad St, 19107", lat: 39.9469, lng: -75.1657, type: "Meals & Services", phone: "(215) 735-4847", description: "Free meals, mail services, case management, and ID assistance." },
  { name: "Project HOME Hub of Hope", address: "1500 JFK Blvd (Suburban Station), 19102", lat: 39.9543, lng: -75.1676, type: "Shelter & Services", phone: "(215) 232-7272", description: "Drop-in center offering meals, showers, laundry, and connection to housing." },
  { name: "SHARE Food Program", address: "2901 W Hunting Park Ave, 19129", lat: 39.9908, lng: -75.173, type: "Food Pantry", phone: "(215) 223-2220", description: "Food distribution hub supporting 700+ community organizations." },
  { name: "Philabundance", address: "3616 S Galloway St, 19148", lat: 39.9118, lng: -75.1586, type: "Food Bank", phone: "(215) 339-0900", description: "Region's largest hunger relief organization serving 135,000+ weekly." },
  { name: "Health Center #3", address: "555 S 43rd St, 19104", lat: 39.9481, lng: -75.2142, type: "Health Clinic", phone: "(215) 685-7504", description: "City-run health center. Accepts Medicare, Medicaid, and sliding-scale fees." },
  { name: "Health Center #2", address: "1700 S Broad St, 19145", lat: 39.9286, lng: -75.1711, type: "Health Clinic", phone: "(215) 685-1803", description: "Comprehensive primary care, immunizations, and women's health." },
  { name: "Health Center #5", address: "1900 N 20th St, 19121", lat: 39.9812, lng: -75.1711, type: "Health Clinic", phone: "(215) 685-2133", description: "Family medicine, pediatrics, behavioral health, and dental care." },
  { name: "Health Center #10", address: "2230 Cottman Ave, 19149", lat: 40.0537, lng: -75.0981, type: "Health Clinic", phone: "(215) 685-0639", description: "Primary care, pharmacy, and WIC services in Northeast Philly." },
  { name: "Prevention Point Philadelphia", address: "2913 Kensington Ave, 19134", lat: 39.9942, lng: -75.1282, type: "Health & Harm Reduction", phone: "(215) 634-5272", description: "Harm reduction services, Narcan, HIV/Hep C testing, and case management." },
  { name: "MANNA", address: "420 N 20th St, 19130", lat: 39.9602, lng: -75.1723, type: "Nutrition Services", phone: "(215) 496-2662", description: "Medically tailored meals for people with serious illnesses." },
  { name: "People's Emergency Center", address: "325 N 39th St, 19104", lat: 39.958, lng: -75.2041, type: "Shelter & Housing", phone: "(267) 777-5816", description: "Emergency housing, workforce development, and early childhood education." },
  { name: "Sunday Breakfast Rescue Mission", address: "302 N 13th St, 19107", lat: 39.9582, lng: -75.1581, type: "Shelter & Meals", phone: "(215) 922-6400", description: "Emergency shelter, three daily meals, recovery programs, and job training." },
  { name: "Bethesda Project", address: "1630 S Broad St, 19145", lat: 39.9303, lng: -75.1703, type: "Shelter & Services", phone: "(215) 985-1600", description: "Shelter and supportive housing for individuals experiencing homelessness." },
  { name: "Chosen 300 Ministries", address: "Locations vary", lat: 39.9526, lng: -75.1652, type: "Meals & Outreach", phone: "(215) 382-1231", description: "Outdoor feeding and resource distribution at 15+ locations." },
  { name: "Philadelphia FIGHT", address: "1233 Locust St, 19107", lat: 39.9464, lng: -75.161, type: "Health Clinic", phone: "(215) 985-4448", description: "Primary care, HIV services, dental, and behavioral health for all." },
  { name: "Benefits Data Trust", address: "30 S 15th St, 19102", lat: 39.951, lng: -75.1654, type: "Benefits Enrollment", phone: "(844) 848-4376", description: "Help enrolling in SNAP, Medicaid, LIHEAP, and other benefit programs." },
];

const ZIP_COORDS = {
  "19101":{lat:39.9526,lng:-75.1652},"19102":{lat:39.9535,lng:-75.1681},"19103":{lat:39.9509,lng:-75.1726},
  "19104":{lat:39.9571,lng:-75.2011},"19106":{lat:39.9465,lng:-75.1441},"19107":{lat:39.9521,lng:-75.1583},
  "19109":{lat:39.9498,lng:-75.1629},"19110":{lat:39.9526,lng:-75.1652},"19111":{lat:40.0581,lng:-75.0749},
  "19112":{lat:39.8914,lng:-75.1764},"19113":{lat:39.8685,lng:-75.2526},"19114":{lat:40.0714,lng:-74.9975},
  "19115":{lat:40.0898,lng:-75.0419},"19116":{lat:40.1176,lng:-75.0094},"19118":{lat:40.0779,lng:-75.2094},
  "19119":{lat:40.0596,lng:-75.1859},"19120":{lat:40.0345,lng:-75.1194},"19121":{lat:39.9786,lng:-75.1744},
  "19122":{lat:39.9726,lng:-75.1487},"19123":{lat:39.964,lng:-75.1486},"19124":{lat:40.0215,lng:-75.0983},
  "19125":{lat:39.975,lng:-75.1306},"19126":{lat:40.0557,lng:-75.1437},"19127":{lat:40.0263,lng:-75.2244},
  "19128":{lat:40.0462,lng:-75.2261},"19129":{lat:40.011,lng:-75.184},"19130":{lat:39.967,lng:-75.1752},
  "19131":{lat:39.9853,lng:-75.2329},"19132":{lat:40.0032,lng:-75.1723},"19133":{lat:39.9929,lng:-75.1389},
  "19134":{lat:39.993,lng:-75.1082},"19135":{lat:40.0263,lng:-75.0476},"19136":{lat:40.0468,lng:-75.0266},
  "19137":{lat:39.9987,lng:-75.0717},"19138":{lat:40.0556,lng:-75.1612},"19139":{lat:39.9614,lng:-75.2301},
  "19140":{lat:40.0125,lng:-75.1479},"19141":{lat:40.038,lng:-75.1535},"19142":{lat:39.9225,lng:-75.235},
  "19143":{lat:39.9398,lng:-75.2267},"19144":{lat:40.0362,lng:-75.1764},"19145":{lat:39.9168,lng:-75.1825},
  "19146":{lat:39.9392,lng:-75.1774},"19147":{lat:39.9359,lng:-75.154},"19148":{lat:39.9166,lng:-75.1534},
  "19149":{lat:40.0375,lng:-75.0667},"19150":{lat:40.0726,lng:-75.1664},"19151":{lat:39.9721,lng:-75.2611},
  "19152":{lat:40.0645,lng:-75.0517},"19153":{lat:39.8995,lng:-75.2236},"19154":{lat:40.1019,lng:-74.9805},
};

// ─── RESOURCE TYPE → CSS CLASS ────────────────────────────────────────────────

const TYPE_CLASS = {
  "Food Pantry":           "rc-food",
  "Food Bank":             "rc-food",
  "Health Clinic":         "rc-health",
  "Health & Harm Reduction": "rc-harm",
  "Nutrition Services":    "rc-nutri",
  "Shelter & Services":    "rc-shelter",
  "Shelter & Housing":     "rc-shelter",
  "Shelter & Meals":       "rc-shelter",
  "Meals & Services":      "rc-meals",
  "Meals & Outreach":      "rc-meals",
  "Benefits Enrollment":   "rc-ben",
};

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function haversine(lat1, lng1, lat2, lng2) {
  const R = 3959;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) ** 2
    + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function findNearest(lat, lng, items, count = 3) {
  return items
    .map(item => ({ ...item, distance: haversine(lat, lng, item.lat, item.lng) }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, count);
}

function tag(label, yes) {
  return `<span class="tag ${yes ? 'tag--yes' : 'tag--no'}">${yes ? '✓' : '✗'} ${label}</span>`;
}

// ─── RENDER HELPERS ───────────────────────────────────────────────────────────

function renderParkCard(park, rank) {
  return `
    <div class="park-card">
      <span class="park-badge">${park.distance.toFixed(1)} mi</span>
      <div class="park-header">
        <div class="park-rank">${rank}</div>
        <div class="park-name">${park.name}</div>
      </div>
      <p class="park-addr">📍 ${park.address} · ${park.neighborhood}</p>
      <div class="park-tags">
        ${tag('Fenced', park.fenced)}
        ${tag('Off-Leash', park.offLeash)}
        ${tag('Sm/Lg Areas', park.separateAreas)}
        ${tag('Water', park.water)}
      </div>
      <div class="park-details">
        <strong>Ground:</strong> ${park.ground} &nbsp;·&nbsp;
        <strong>Access:</strong> ${park.membership}<br>
        <strong>Amenities:</strong> ${park.amenities}
      </div>
    </div>`;
}

function renderResourceCard(r) {
  const cls = TYPE_CLASS[r.type] || 'rc-other';
  return `
    <div class="resource-card" style="border-left: 4px solid currentColor">
      <div class="resource-top">
        <div>
          <span class="resource-type-badge ${cls}">${r.type}</span>
          <div class="resource-name">${r.name}</div>
        </div>
        <span class="resource-dist">${r.distance.toFixed(1)} mi</span>
      </div>
      <p class="resource-desc">${r.description}</p>
      <div class="resource-meta">
        <span>📍 ${r.address}</span>
        ${r.phone ? `<span>📞 ${r.phone}</span>` : ''}
      </div>
    </div>`;
}

// ─── SEARCH ───────────────────────────────────────────────────────────────────

function handleSearch() {
  const input   = document.getElementById('zip-input');
  const errorEl = document.getElementById('zip-error');
  const zip     = input.value.trim();

  errorEl.textContent = '';
  document.getElementById('parks-list').innerHTML = '';

  if (!/^\d{5}$/.test(zip)) {
    errorEl.textContent = 'Please enter a valid 5-digit Philadelphia ZIP code.';
    return;
  }

  const coords = ZIP_COORDS[zip];
  if (!coords) {
    errorEl.textContent = 'This ZIP isn\'t in our Philadelphia database. Try a Philly ZIP (19101–19154).';
    return;
  }

  const parks = findNearest(coords.lat, coords.lng, DOG_PARKS, 3);
  renderParksList(parks);
}

function renderParksList(parks) {
  document.getElementById('parks-list').innerHTML = parks.map(park => {
    const mapsQuery = encodeURIComponent(`${park.name}, ${park.address}`);
    return `
      <li>
        <div class="modal-park-name">${park.name} <span style="font-weight:400">(${park.distance.toFixed(1)} miles away)</span></div>
        <div class="modal-park-addr">${park.address}</div>
        <a class="modal-park-link" href="https://www.google.com/maps/search/?api=1&query=${mapsQuery}" target="_blank" rel="noopener">Get directions</a>
      </li>`;
  }).join('');
}

// ─── MODAL ────────────────────────────────────────────────────────────────────

function openFinderModal(e) {
  e.preventDefault();
  const modal = document.getElementById('finder-modal');
  modal.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
  // Focus the ZIP input after the transition settles
  setTimeout(() => document.getElementById('zip-input').focus(), 50);
}

function closeFinderModal() {
  const modal = document.getElementById('finder-modal');
  modal.setAttribute('hidden', '');
  document.body.style.overflow = '';
}

// Close on backdrop click (outside the modal panel)
document.getElementById('finder-modal').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeFinderModal();
});

// Close on Escape key — handles both modals
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeFinderModal();
    closeWriteModal();
  }
});

// ─── WRITE MESSAGE MODAL ─────────────────────────────────────────────────────

function openWriteModal(e) {
  e.preventDefault();
  document.getElementById('write-modal').removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.getElementById('write-message').focus(), 50);
}

function closeWriteModal() {
  document.getElementById('write-modal').setAttribute('hidden', '');
  document.body.style.overflow = '';
}

document.getElementById('write-modal').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeWriteModal();
});

// Inline SVG of the mascot (embedded so it renders in the print window)
const MASCOT_SVG = `<svg viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="12" y="48" width="96" height="80" rx="3" stroke="#1a1a1a" stroke-width="2.5" fill="white"/>
  <line x1="60" y1="48" x2="60" y2="128" stroke="#1a1a1a" stroke-width="1.5"/>
  <line x1="12" y1="68" x2="108" y2="68" stroke="#1a1a1a" stroke-width="1.5"/>
  <path d="M12 48 L18 20 L60 20 L60 48" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round" fill="white"/>
  <path d="M60 48 L60 20 L102 20 L108 48" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round" fill="white"/>
  <circle cx="38" cy="90" r="14" stroke="#1a1a1a" stroke-width="2" fill="white"/>
  <circle cx="38" cy="90" r="6" fill="#1a1a1a"/>
  <circle cx="41" cy="87" r="2" fill="white"/>
  <circle cx="82" cy="90" r="14" stroke="#1a1a1a" stroke-width="2" fill="white"/>
  <circle cx="82" cy="90" r="6" fill="#1a1a1a"/>
  <circle cx="85" cy="87" r="2" fill="white"/>
  <path d="M32 128 L32 142" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round"/>
  <path d="M25 142 Q32 138 39 142" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M88 128 L88 142" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round"/>
  <path d="M81 142 Q88 138 95 142" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
</svg>`;

function printTemplate(text) {
  const safe = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '<br>');

  const win = window.open('', '', 'width=850,height=1100');
  win.document.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Dear Package Thief</title>
  <style>
    @page { size: 8.5in 11in; margin: 0; }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body { width: 8.5in; height: 11in; background: #fff; }
    .page {
      width: 8.5in;
      height: 11in;
      padding: 0.75in 0.75in 0.6in;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .message {
      font-family: system-ui, -apple-system, sans-serif;
      font-size: 96pt;
      font-weight: 700;
      color: #000;
      line-height: 1.05;
      word-break: break-word;
    }
    .mascot {
      width: 110px;
      height: auto;
      transform: rotate(-8deg);
    }
  </style>
</head>
<body>
  <div class="page">
    <div class="message">${safe}</div>
    <div class="mascot">${MASCOT_SVG}</div>
  </div>
</body>
</html>`);
  win.document.close();
  setTimeout(() => { win.print(); }, 400);
}

function printMessage() {
  const text = document.getElementById('write-message').value.trim();
  if (!text) return;
  printTemplate(text);
}

function printCard(el, e) {
  e.preventDefault();
  printTemplate(el.dataset.message);
}

// Search on Enter or automatically when 5 digits are typed
document.getElementById('zip-input').addEventListener('input', e => {
  if (e.target.value.replace(/\D/g, '').length === 5) handleSearch();
});
document.getElementById('zip-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') handleSearch();
  // Only allow digits
  if (e.key.length === 1 && !/\d/.test(e.key)) e.preventDefault();
});
