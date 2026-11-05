(() => {
  'use strict';
  const script = document.currentScript;
  const endpoint = script?.dataset.endpoint;
  document.getElementById('copy-wechat')?.addEventListener('click', async () => {
    const status = document.getElementById('copy-status');
    try { await navigator.clipboard.writeText('wutsupman'); status.textContent = 'Copied'; }
    catch { status.textContent = 'WeChat: wutsupman'; }
  });
  if (endpoint) {
    const admin = document.getElementById('teacher-stats');
    if (admin) { admin.href = endpoint.replace(/\/$/, '') + '/admin'; admin.hidden = false; }
  }
  if (!endpoint || location.protocol !== 'https:' || location.hostname !== 'wenatnyu.github.io') return;
  const base = endpoint.replace(/\/$/, '');
  async function updateStats() {
    if (!document.getElementById('visit-total')) return;
    try {
      const response = await fetch(base + '/api/stats', { mode: 'cors', credentials: 'omit', cache: 'no-store', signal: AbortSignal.timeout(7000) });
      if (!response.ok) throw new Error('Unavailable');
      const data = await response.json();
      if (!Number.isFinite(data.total_views) || !Number.isFinite(data.today_views)) throw new Error('Invalid data');
      const format = new Intl.NumberFormat('en-US');
      document.getElementById('visit-total').textContent = format.format(data.total_views);
      document.getElementById('visit-today').textContent = format.format(data.today_views);
      document.getElementById('visit-status').textContent = 'Page views · Home & Notes · Shanghai time';
    } catch { document.getElementById('visit-status').textContent = 'Statistics temporarily unavailable'; }
  }
  async function record() {
    try {
      // No cookies or persistent browser identifier. Each page load is one view.
      await fetch(base + '/api/visit', { method: 'POST', mode: 'cors', credentials: 'omit', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ event_id: crypto.randomUUID(), path: location.pathname }), signal: AbortSignal.timeout(7000) });
    } catch { /* A failed stats request must never interrupt the lesson. */ }
    await updateStats();
  }
  if (document.visibilityState === 'visible') record();
  else document.addEventListener('visibilitychange', function visible() {
    if (document.visibilityState !== 'visible') return;
    document.removeEventListener('visibilitychange', visible); record();
  });
})();
