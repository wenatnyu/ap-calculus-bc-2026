import adminHtml from './admin.html';
import adminJs from './admin.js';

const DAY = 86400000;
const encoder = new TextEncoder();
export const shanghaiDay = (date = new Date()) => new Date(date.getTime() + 8 * 3600000).toISOString().slice(0, 10);
export const cutoff = () => new Date(Date.now() - 30 * DAY).toISOString();
const headers = { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff', 'Referrer-Policy': 'no-referrer' };
function json(body, status = 200, extra = {}) {
  return new Response(JSON.stringify(body), { status, headers: { ...headers, 'Content-Type': 'application/json; charset=utf-8', ...extra } });
}
export function validEvent(value, env) {
  return value && /^[0-9a-f-]{36}$/i.test(value.event_id || '') && typeof value.path === 'string'
    && value.path.length <= 250 && value.path.startsWith(env.SITE_BASE)
    && !/[?#\\\r\n]/.test(value.path) && !value.path.split('/').includes('..');
}
async function hmac(text, secret) {
  const key = await crypto.subtle.importKey('raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const bytes = new Uint8Array(await crypto.subtle.sign('HMAC', key, encoder.encode(text)));
  return Array.from(bytes, n => n.toString(16).padStart(2, '0')).join('');
}
export async function equalSecret(a, b) {
  const [left, right] = await Promise.all([crypto.subtle.digest('SHA-256', encoder.encode(a)), crypto.subtle.digest('SHA-256', encoder.encode(b))]);
  const x = new Uint8Array(left), y = new Uint8Array(right);
  let diff = 0;
  for (let i = 0; i < x.length; i++) diff |= x[i] ^ y[i];
  return diff === 0;
}
export async function authenticated(request, env) {
  if (!env.ADMIN_PASSWORD) return false;
  const cookie = (request.headers.get('Cookie') || '').match(/(?:^|;\s*)course_admin=([^;]+)/)?.[1];
  if (!cookie) return false;
  const [expiry, signature, extra] = cookie.split('.');
  if (extra || !/^\d+$/.test(expiry) || Number(expiry) < Date.now() || Number(expiry) > Date.now() + 9 * 3600000) return false;
  return equalSecret(signature || '', await hmac(expiry, env.ADMIN_PASSWORD));
}
async function record(request, env) {
  if (Number(request.headers.get('Content-Length') || 0) > 1024) return json({ error: 'Request too large' }, 413);
  const text = await request.text();
  if (text.length > 1024) return json({ error: 'Request too large' }, 413);
  let data;
  try { data = JSON.parse(text); } catch { return json({ error: 'Invalid JSON' }, 400); }
  if (!validEvent(data, env)) return json({ error: 'Invalid event' }, 400);
  if (/bot|crawler|spider|headless/i.test(request.headers.get('User-Agent') || '')) return json({ recorded: false });
  const ip = request.headers.get('CF-Connecting-IP');
  if (!ip || ip.length > 45 || !/^[a-f0-9:.]+$/i.test(ip)) return json({ error: 'Client IP unavailable' }, 400);
  const country = /^[A-Z]{2}$/.test(request.cf?.country || '') ? request.cf.country : '';
  const now = new Date();
  await env.DB.batch([
    env.DB.prepare('INSERT OR IGNORE INTO visits (event_id, occurred_at, day, path, ip, country) VALUES (?, ?, ?, ?, ?, ?)').bind(data.event_id, now.toISOString(), shanghaiDay(now), data.path, ip, country),
    env.DB.prepare('UPDATE site_totals SET views = views + 1 WHERE id = 1 AND EXISTS (SELECT 1 FROM visits WHERE event_id = ? AND counted = 0)').bind(data.event_id),
    env.DB.prepare('INSERT INTO daily_stats (day, views) SELECT ?, 1 WHERE EXISTS (SELECT 1 FROM visits WHERE event_id = ? AND counted = 0) ON CONFLICT(day) DO UPDATE SET views = views + 1').bind(shanghaiDay(now), data.event_id),
    env.DB.prepare('UPDATE visits SET counted = 1 WHERE event_id = ?').bind(data.event_id)
  ]);
  return json({ recorded: true });
}
async function summary(env) {
  const [total, today] = await Promise.all([
    env.DB.prepare('SELECT views, started_at FROM site_totals WHERE id = 1').first(),
    env.DB.prepare('SELECT views FROM daily_stats WHERE day = ?').bind(shanghaiDay()).first()
  ]);
  return { total_views: total?.views || 0, today_views: today?.views || 0, started_at: total?.started_at || null, timezone: 'Asia/Shanghai' };
}
const cookieHeader = value => `course_admin=${value}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=${value ? 28800 : 0}`;
async function route(request, env) {
  const url = new URL(request.url);
  const origin = request.headers.get('Origin');
  const sameOrigin = origin === url.origin;
  if (url.pathname === '/api/visit' && request.method === 'POST') {
    if (origin !== env.SITE_ORIGIN) return json({ error: 'Origin not allowed' }, 403);
    return record(request, env);
  }
  if (url.pathname === '/api/stats' && request.method === 'GET') return json(await summary(env));
  if (url.pathname === '/api/admin/login' && request.method === 'POST') {
    if (!sameOrigin || request.headers.get('Content-Type') !== 'application/json') return json({ error: 'Origin not allowed' }, 403);
    if (!env.ADMIN_PASSWORD) return json({ error: 'Admin login is not configured' }, 503);
    const body = await request.text();
    if (body.length > 1024) return json({ error: 'Request too large' }, 413);
    let password;
    try { password = JSON.parse(body).password; } catch { return json({ error: 'Invalid JSON' }, 400); }
    if (typeof password !== 'string' || !(await equalSecret(password, env.ADMIN_PASSWORD))) return json({ error: 'Incorrect password' }, 401);
    const expiry = String(Date.now() + 8 * 3600000);
    return json({ ok: true }, 200, { 'Set-Cookie': cookieHeader(`${expiry}.${await hmac(expiry, env.ADMIN_PASSWORD)}`) });
  }
  if (url.pathname === '/api/admin/logout' && request.method === 'POST') {
    if (!sameOrigin) return json({ error: 'Origin not allowed' }, 403);
    return json({ ok: true }, 200, { 'Set-Cookie': cookieHeader('') });
  }
  if (url.pathname === '/api/admin/data' || url.pathname === '/api/admin/export') {
    if (request.method !== 'GET') return json({ error: 'Method not allowed' }, 405);
    if (!(await authenticated(request, env))) return json({ error: 'Login required' }, 401);
    const limit = url.pathname.endsWith('export') ? 10000 : 200;
    const visits = await env.DB.prepare('SELECT occurred_at, path, ip, country FROM visits WHERE occurred_at >= ? AND counted = 1 ORDER BY occurred_at DESC LIMIT ?').bind(cutoff(), limit).all();
    if (url.pathname.endsWith('export')) {
      const cell = value => '"' + String(value ?? '').replace(/^[=+@\-\t\r]/, "'$&").replaceAll('"', '""') + '"';
      const csv = '\uFEFF' + ['time_utc,page,ip,country', ...visits.results.map(v => [v.occurred_at, v.path, v.ip, v.country].map(cell).join(','))].join('\r\n');
      return new Response(csv, { headers: { ...headers, 'Content-Type': 'text/csv; charset=utf-8', 'Content-Disposition': 'attachment; filename="course-visits.csv"' } });
    }
    const [stats, daily, unique] = await Promise.all([
      summary(env),
      env.DB.prepare('SELECT day, views FROM daily_stats ORDER BY day DESC LIMIT 30').all(),
      env.DB.prepare('SELECT COUNT(DISTINCT ip) AS count FROM visits WHERE day = ? AND counted = 1').bind(shanghaiDay()).first()
    ]);
    return json({ ...stats, today_unique_ips: unique.count, visits: visits.results, daily: daily.results });
  }
  if ((url.pathname === '/admin' || url.pathname === '/admin/') && request.method === 'GET') {
    return new Response(adminHtml, { headers: { ...headers, 'Content-Type': 'text/html; charset=utf-8', 'Content-Security-Policy': "default-src 'none'; script-src 'self'; style-src 'unsafe-inline'; connect-src 'self'; form-action 'self'; frame-ancestors 'none'; base-uri 'none'" } });
  }
  if (url.pathname === '/admin.js' && request.method === 'GET') return new Response(adminJs, { headers: { ...headers, 'Content-Type': 'application/javascript; charset=utf-8' } });
  return json({ error: 'Not found' }, 404);
}
export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin');
    const cors = origin === env.SITE_ORIGIN ? { 'Access-Control-Allow-Origin': origin, 'Vary': 'Origin' } : {};
    if (request.method === 'OPTIONS') {
      if (origin !== env.SITE_ORIGIN) return json({ error: 'Origin not allowed' }, 403);
      return new Response(null, { status: 204, headers: { ...cors, 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Max-Age': '86400' } });
    }
    let response;
    try { response = await route(request, env); } catch { response = json({ error: 'Service temporarily unavailable' }, 503); }
    for (const [key, value] of Object.entries(cors)) response.headers.set(key, value);
    return response;
  },
  async scheduled(_event, env) {
    await env.DB.prepare('DELETE FROM visits WHERE occurred_at < ?').bind(cutoff()).run();
  }
};
