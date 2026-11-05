const byId = id => document.getElementById(id);
const format = n => new Intl.NumberFormat('en-US').format(n);
function rows(target, data, cells) {
  const fragment = document.createDocumentFragment();
  for (const item of data) {
    const tr = document.createElement('tr');
    for (const value of cells(item)) {
      const td = document.createElement('td');
      td.textContent = String(value);
      tr.append(td);
    }
    fragment.append(tr);
  }
  if (!data.length) {
    const tr = document.createElement('tr'), td = document.createElement('td');
    td.textContent = 'No visits recorded yet.';
    td.colSpan = 4;
    tr.append(td); fragment.append(tr);
  }
  byId(target).replaceChildren(fragment);
}
async function load() {
  byId('status').textContent = 'Loading…';
  try {
    const response = await fetch('/api/admin/data', { cache: 'no-store' });
    if (response.status === 401) {
      byId('dashboard').hidden = true; byId('login-form').hidden = false; byId('status').textContent = ''; return;
    }
    if (!response.ok) throw new Error('暂时无法加载统计，请稍后重试。');
    const data = await response.json();
    byId('total').textContent = format(data.total_views);
    byId('today').textContent = format(data.today_views);
    byId('unique').textContent = format(data.today_unique_ips);
    const date = new Intl.DateTimeFormat('zh-CN', { timeZone: 'Asia/Shanghai', dateStyle: 'short', timeStyle: 'medium', hour12: false });
    rows('visits', data.visits, item => [date.format(new Date(item.occurred_at)), item.path, item.ip, item.country || '—']);
    rows('daily', data.daily, item => [item.day, format(item.views)]);
    byId('login-form').hidden = true; byId('dashboard').hidden = false;
    byId('status').textContent = `Updated ${date.format(new Date())}`;
  } catch (error) { byId('status').textContent = error.message; }
}
byId('login-form').addEventListener('submit', async event => {
  event.preventDefault();
  const button = event.currentTarget.querySelector('button');
  button.disabled = true;
  try {
    const response = await fetch('/api/admin/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password: byId('password').value }) });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Login failed');
    byId('password').value = ''; await load();
  } catch (error) { byId('status').textContent = error.message; }
  finally { button.disabled = false; }
});
byId('refresh').addEventListener('click', load);
byId('logout').addEventListener('click', async () => {
  try {
    const response = await fetch('/api/admin/logout', { method: 'POST' });
    if (!response.ok) throw new Error('Sign out failed. Please retry.');
    byId('dashboard').hidden = true; byId('login-form').hidden = false; byId('status').textContent = '';
    byId('visits').replaceChildren(); byId('daily').replaceChildren();
  } catch (error) { byId('status').textContent = error.message; }
});
load();
