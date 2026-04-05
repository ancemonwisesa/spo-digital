const CAT_MAP = {};
CATS.forEach(c => CAT_MAP[c.id] = c);
let activeSPO = null;
let stepsDone = {};

function buildSidebar(list) {
  let html = '';
  CATS.forEach(cat => {
    const items = list.filter(s => s.cat === cat.id);
    if (!items.length) return;
    html += `<div class="cat-label">${cat.label} <span style="opacity:.6">(${items.length})</span></div>`;
    items.forEach(s => {
      html += `<div class="spo-item${activeSPO === s.id ? ' active' : ''}" onclick="openSPO('${s.id}')" id="si-${s.id}">
    <div class="spo-item-icon c-${cat.color}">${ICONS[cat.icon]}</div>
    <div class="spo-item-text">
      <div class="spo-item-num">${s.id}</div>
      <div class="spo-item-name">${s.name}</div>
    </div>
  </div>`;
    });
  });
  document.getElementById('sidebar-body').innerHTML = html;
}

function buildHome() {
  const total = SPO.length;
  let html = `<div class="home-hero">
<h1>Sistem Digital SPO</h1>
<p>Standar Prosedur Operasional terintegrasi dengan EMR dan SIMRS.<br>RS Bhakti Husada II Purwakarta · Unit Rekam Medis</p>
<div class="hero-chips"><span class="hero-chip">Terintegrasi EMR</span><span class="hero-chip">Terintegrasi SIMRS</span><span class="hero-chip">Rekam Medis Digital</span></div>
  </div>
  <div class="stats-row">
<div class="stat-card"><div class="stat-num">${total}</div><div class="stat-label">Total SPO aktif</div></div>
<div class="stat-card"><div class="stat-num">${CATS.length}</div><div class="stat-label">Kategori layanan</div></div>
<div class="stat-card"><div class="stat-num">EMR</div><div class="stat-label">Terintegrasi</div></div>
<div class="stat-card"><div class="stat-num">SIMRS</div><div class="stat-label">Terintegrasi</div></div>
  </div>`;
  CATS.forEach(cat => {
    const items = SPO.filter(s => s.cat === cat.id);
    if (!items.length) return;
    html += `<div class="cat-section">
  <h2>${cat.label} <span class="cat-count">(${items.length})</span></h2>
  <div class="spo-cards">`;
    items.forEach(s => {
      html += `<div class="spo-home-card" onclick="openSPO('${s.id}')">
    <div class="shc-icon c-${cat.color}">${ICONS[cat.icon]}</div>
    <div class="shc-num">${s.id}</div>
    <div class="shc-name">${s.name}</div>
    <div class="shc-unit">${s.unit}</div>
  </div>`;
    });
    html += `</div></div>`;
  });
  document.getElementById('home-screen').innerHTML = html;
}

function openSPO(id) {
  activeSPO = id;
  if (!stepsDone[id]) stepsDone[id] = {};
  const spo = SPO.find(s => s.id === id);
  buildSidebar(SPO);
  renderDetail(spo);
  document.getElementById('home-screen').classList.add('hidden');
  const d = document.getElementById('detail-screen');
  d.classList.add('active');
  document.getElementById('mobile-title').textContent = spo.id;
  closeSidebar();
  window.scrollTo(0, 0);
}

function goHome() {
  activeSPO = null;
  buildSidebar(SPO);
  document.getElementById('home-screen').classList.remove('hidden');
  document.getElementById('detail-screen').classList.remove('active');
  document.getElementById('mobile-title').textContent = 'Digital SPO';
}

function renderDetail(spo) {
  const cat = CAT_MAP[spo.cat];
  const done = stepsDone[spo.id];
  const totalDone = Object.values(done).filter(Boolean).length;
  const total = spo.prosedur.length;
  const pct = Math.round(totalDone / total * 100);
  const allDone = totalDone === total;

  const colorVars = {
    blue: ['var(--blue-bg)', 'var(--blue-text)', 'rgba(44,146,147,0.25)'],
    teal: ['var(--teal-bg)', 'var(--teal-text)', 'rgba(15,113,115,0.25)'],
    amber: ['var(--amber-bg)', 'var(--amber-text)', 'rgba(176,96,0,0.25)'],
    red: ['var(--red-bg)', 'var(--red-text)', 'rgba(192,40,30,0.25)'],
    purple: ['var(--purple-bg)', 'var(--purple-text)', 'rgba(90,62,166,0.25)'],
    slate: ['var(--slate-bg)', 'var(--slate-text)', 'rgba(61,90,128,0.25)'],
  };
  const [cbg, ctxt, cborder] = colorVars[cat.color];

  let html = `<button class="back-btn" onclick="goHome()"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg> Kembali ke menu</button>
  <div class="detail-badge" style="background:${cbg};color:${ctxt};border:1px solid ${cborder}">${ICONS[cat.icon].replace('<svg', '<svg style="width:11px;height:11px;stroke:currentColor;fill:none;stroke-width:2"')} ${cat.label}</div>
  <div class="detail-title">${spo.name}</div>
  <div class="detail-meta"><span class="meta-chip">${spo.id}</span><span class="meta-chip">${spo.unit}</span><span class="meta-chip">RS Bhakti Husada II</span></div>
  <div class="progress-strip">
<div class="prog-bar-wrap"><div class="prog-bar-fill" style="width:${pct}%"></div></div>
<span class="prog-text">${totalDone}/${total} langkah${allDone ? ' · <span style="color:var(--green);font-weight:500">Selesai</span>' : ''}</span>
  </div>
  <div class="info-sections">
<div class="info-box"><div class="info-box-label">Pengertian</div><div class="info-box-text">${spo.pengertian}</div></div>
<div class="info-box"><div class="info-box-label">Tujuan</div><div class="info-box-text">${spo.tujuan}</div></div>
<div class="info-box" style="grid-column:1/-1"><div class="info-box-label">Unit terkait</div><div class="unit-list">${spo.unitTerkait.map(u => `<span class="unit-badge">${u}</span>`).join('')}</div></div>
  </div>
  <div class="prosedur-section"><h3>Prosedur</h3><div class="step-list">`;

  spo.prosedur.forEach((step, i) => {
    const isDone = !!done[i];
    html += `<div class="step-card${isDone ? ' done' : ''}" onclick="toggleStep('${spo.id}',${i})">
  <div class="step-num">${isDone ? `<svg viewBox="0 0 24 24" style="width:12px;height:12px;stroke:white;fill:none;stroke-width:2.5"><polyline points="20 6 9 17 4 12"/></svg>` : i + 1}</div>
  <div class="step-body">
    <div class="step-title-text">${step.title}</div>
    <div class="step-desc-text">${step.desc}</div>
    ${step.emr ? `<div class="emr-note"><svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg><span>${step.emr}</span></div>` : ''}
  </div>
  <div class="step-check">
    <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
  </div>
</div>`;
  });

  html += `</div></div>`;
  // Tombol cetak selalu tampil
  html += `<button class="print-btn" onclick="printSPO('${spo.id}')">
<svg viewBox="0 0 24 24"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
Cetak SPO
  </button>`;

  if (allDone) {
    html += `<div class="done-banner">
  <div class="done-icon-wrap"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div>
  <div class="done-title">Prosedur ${spo.id} selesai dilaksanakan</div>
  <div class="done-sub">Semua langkah telah dikonfirmasi oleh petugas.</div>
  <button class="btn btn-reset" onclick="resetSPO('${spo.id}')">Reset prosedur</button>
</div>`;
  } else {
    html += `<div class="action-bar">
  <button class="btn btn-primary" onclick="checkAll('${spo.id}')">Tandai semua selesai</button>
  <button class="btn btn-secondary" onclick="resetSPO('${spo.id}')">Reset</button>
</div>`;
  }
  document.getElementById('detail-screen').innerHTML = html;
}

function toggleStep(id, idx) { stepsDone[id][idx] = !stepsDone[id][idx]; renderDetail(SPO.find(s => s.id === id)) }
function checkAll(id) { SPO.find(s => s.id === id).prosedur.forEach((_, i) => stepsDone[id][i] = true); renderDetail(SPO.find(s => s.id === id)) }
function resetSPO(id) { stepsDone[id] = {}; renderDetail(SPO.find(s => s.id === id)) }
function filterSPO(q) {
  const lq = q.toLowerCase();
  buildSidebar(q ? SPO.filter(s => s.name.toLowerCase().includes(lq) || s.id.toLowerCase().includes(lq) || s.cat.toLowerCase().includes(lq)) : SPO);
}
function openSidebar() { document.getElementById('sidebar').classList.add('open'); document.getElementById('overlay').classList.add('open') }
function closeSidebar() { document.getElementById('sidebar').classList.remove('open'); document.getElementById('overlay').classList.remove('open') }


// ── PRINT FUNCTION ──────────────────────────────────────────────────────────
const LOGO_B64 = 'data:image/png;base64,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';

function getPrintDate() {
  const d = new Date();
  const bln = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  return `${d.getDate().toString().padStart(2, '0')} ${bln[d.getMonth()]} ${d.getFullYear()}`;
}

function getRomawi(n) {
  const r = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
  return r[n - 1] || n;
}

function getNoDoc(spo) {
  const d = new Date();
  const unitMap = {
    'pendaftaran': 'ADM', 'rajal': 'RJ', 'ranap': 'RI', 'dokumen': 'DK', 'admin': 'AM', 'keamanan': 'KR'
  };
  const kode = unitMap[spo.cat] || 'RM';
  return `${spo.id}/SPO/${kode}/RSBH-II/${getRomawi(d.getMonth() + 1)}/${d.getFullYear()}`;
}

function headerHTML(spo, page, totalPages) {
  return `
  <table class="spo-header-table">
<tr>
  <td class="spo-logo-cell" rowspan="2">
    <img src="${LOGO_B64}" alt="Logo RSBH"><br>
    <div class="spo-rs-name">RS. Bhakti Husada II<br>Purwakarta</div>
  </td>
  <td class="spo-title-cell" colspan="3" rowspan="2" style="width:80mm">
    ${spo.name.toUpperCase()}
  </td>
  <td style="width:35mm">
    <div class="spo-meta-label">No. Dokumen</div>
    <div class="spo-meta-val" style="font-size:8pt">${getNoDoc(spo)}</div>
  </td>
  <td style="width:15mm">
    <div class="spo-meta-label">No. Revisi</div>
    <div class="spo-meta-val">01</div>
  </td>
  <td style="width:15mm">
    <div class="spo-meta-label">Halaman</div>
    <div class="spo-meta-val">${page}/${totalPages}</div>
  </td>
</tr>
<tr>
  <td>
    <div class="spo-meta-label">Tanggal Terbit</div>
    <!-- <div class="spo-meta-val">${getPrintDate()}</div> -->
    <div class="spo-meta-val"></div>
  </td>
  <td colspan="2" class="spo-ttd-cell">
    <div>Ditetapkan<br>Direktur RS. Bhakti Husada II Purwakarta</div>
    <span class="spo-ttd-space"></span>
    <div style="border-bottom:1px solid #000;padding-top:2px;font-size:9pt"><b>dr. Jimmy Tanmadibrata</b></div>
  </td>
</tr>
<tr>
  <td colspan="7" style="text-align:center;font-weight:bold;font-size:10pt;background:#f0f0f0;padding:3px">
    STANDAR PROSEDUR OPERASIONAL
  </td>
</tr>
  </table>`;
}

function page2HeaderHTML(spo, page, totalPages) {
  return `
  <table class="spo-page2-header">
<tr>
  <td class="spo-logo-cell" style="width:22mm;text-align:center;vertical-align:middle">
    <img src="${LOGO_B64}" style="width:14mm;height:auto" alt="Logo">
    <div style="font-size:7.5pt;font-weight:bold;text-align:center">RS. Bhakti Husada II<br>Purwakarta</div>
  </td>
  <td style="text-align:center;font-weight:bold;font-size:11pt;width:80mm">
    ${spo.name.toUpperCase()}
  </td>
  <td style="width:35mm">
    <div class="spo-meta-label">No. Dokumen</div>
    <div style="font-size:8pt">${getNoDoc(spo)}</div>
  </td>
  <td style="width:15mm">
    <div class="spo-meta-label">No. Revisi</div>
    <div></div>
  </td>
  <td style="width:15mm">
    <div class="spo-meta-label">Halaman</div>
    <div>${page}/${totalPages}</div>
  </td>
</tr>
  </table>`;
}

function printSPO(id) {
  const spo = SPO.find(s => s.id === id);
  if (!spo) return;

  // Hitung total halaman: 1 jika prosedur <= 5, 2 jika lebih
  const totalPages = spo.prosedur.length <= 5 ? 1 : 2;

  // ── Halaman 1 ──────────────────────────────────────────────────────────────
  let p1 = `<div class="spo-page">`;
  p1 += headerHTML(spo, 1, totalPages);
  p1 += `<table class="spo-body-table">
<tr>
  <td class="spo-section-label">Pengertian</td>
  <td>${spo.pengertian}</td>
</tr>
<tr>
  <td class="spo-section-label">Tujuan</td>
  <td>${spo.tujuan}</td>
</tr>
<tr>
  <td class="spo-section-label">Kebijakan</td>
  <td>Sesuai Kebijakan RS Bhakti Husada II Purwakarta tentang Pelayanan Unit Rekam Medis.</td>
</tr>
<tr>
  <td class="spo-section-label">Prosedur</td>
  <td>
    ${spo.prosedur.map((step, i) => `
      <div class="spo-step-row">
        <span class="spo-step-num">${i + 1}.</span>
        <span><strong>${step.title}</strong><br>${step.desc}${step.emr ? `<br><em style="color:#1A5859;font-size:9.5pt">&#9658; Integrasi EMR/SIMRS: ${step.emr}</em>` : ''}</span>
      </div>`).join('')}
  </td>
</tr>
${totalPages === 1 ? `<tr>
  <td class="spo-section-label">Unit Terkait</td>
  <td>${spo.unitTerkait.map((u, i) => `${i + 1}. ${u}`).join('<br>')}</td>
</tr>` : ''}
  </table>`;
  p1 += `</div>`;

  // ── Halaman 2 (jika prosedur > 5) ─────────────────────────────────────────
  let p2 = '';
  if (totalPages === 2) {
    p2 = `<div class="spo-page">`;
    p2 += page2HeaderHTML(spo, 2, totalPages);
    p2 += `<table class="spo-body-table">
  <tr>
    <td class="spo-section-label">Unit Terkait</td>
    <td>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:4px">
        ${spo.unitTerkait.map(u => `<div style="border:1px solid #ccc;padding:4px 6px;font-size:10pt">${u}</div>`).join('')}
      </div>
    </td>
  </tr>
</table>`;
    p2 += `</div>`;
  }

  const overlay = document.getElementById('print-overlay');
  const area = document.getElementById('print-area');
  const toolbar = `
<style>@media print { .print-toolbar { display: none !important; } }</style>
<div class="print-toolbar" style="position:sticky;top:0;z-index:10;background:#333;padding:8px 16px;display:flex;gap:10px;align-items:center;justify-content:space-between;font-family:sans-serif">
  <span style="color:white;font-size:13px;font-weight:500">Preview Cetak — ${spo.name}</span>
  <div style="display:flex;gap:8px">
    <button onclick="window.print()" style="padding:6px 14px;background:#2C9293;color:white;border:none;border-radius:4px;font-size:13px;cursor:pointer;font-family:sans-serif">🖨️ Cetak / Simpan PDF</button>
    <button onclick="document.getElementById('print-overlay').style.display='none'" style="padding:6px 12px;background:#666;color:white;border:none;border-radius:4px;font-size:13px;cursor:pointer;font-family:sans-serif">✕ Tutup</button>
  </div>
</div>`;
  area.innerHTML = toolbar + p1 + p2;
  overlay.style.display = 'flex';
}

function closePrint() {
  document.getElementById('print-overlay').style.display = 'none';
}

function doPrint() {
  window.print();
}

buildSidebar(SPO);
buildHome();
