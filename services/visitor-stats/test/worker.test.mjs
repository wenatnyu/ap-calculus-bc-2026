import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { DatabaseSync } from 'node:sqlite';

// Substitute text assets only; exercise the actual Worker and its actual SQL.
const source = (await readFile(new URL('../src/worker.mjs', import.meta.url), 'utf8'))
  .replace("import adminHtml from './admin.html';", "const adminHtml = '<!doctype html><title>Admin</title>';")
  .replace("import adminJs from './admin.js';", "const adminJs = '';");
const { default: worker, shanghaiDay, authenticated } = await import('data:text/javascript;base64,' + Buffer.from(source).toString('base64'));
const schema = await readFile(new URL('../migrations/0001_visits.sql', import.meta.url), 'utf8');
const origin = 'https://wenatnyu.github.io', backend = 'https://stats.example.com';
const event = () => ({ event_id: crypto.randomUUID(), path: '/ap-calculus-bc-2026/' });
function fixture() {
  const db = new DatabaseSync(':memory:'); db.exec(schema);
  function statement(sql, values = []) {
    return {
      bind: (...next) => statement(sql, next),
      first: async () => db.prepare(sql).get(...values) || null,
      all: async () => ({ results: db.prepare(sql).all(...values) }),
      run: async () => ({ meta: db.prepare(sql).run(...values) })
    };
  }
  const env = { SITE_ORIGIN: origin, SITE_BASE: '/ap-calculus-bc-2026/', ADMIN_PASSWORD: 'test-only-high-entropy-password', DB: {
    prepare: statement,
    batch: async queries => {
      db.exec('BEGIN');
      try { const output = []; for (const q of queries) output.push(await q.run()); db.exec('COMMIT'); return output; }
      catch (error) { db.exec('ROLLBACK'); throw error; }
    }
  } };
  function request(path, { method = 'GET', body, headers = {} } = {}) {
    return new Request(backend + path, { method, headers, ...(body === undefined ? {} : { body: JSON.stringify(body) }) });
  }
  const visit = (body = event(), headers = {}) => worker.fetch(request('/api/visit', { method: 'POST', body, headers: { Origin: origin, 'CF-Connecting-IP': '192.0.2.10', ...headers } }), env);
  return { db, env, request, visit };
}
test('Shanghai date changes at 16:00 UTC', () => {
  assert.equal(shanghaiDay(new Date('2026-11-05T15:59:59Z')), '2026-11-05');
  assert.equal(shanghaiDay(new Date('2026-11-05T16:00:00Z')), '2026-11-06');
});
test('records one page load, deduplicates retries, and exposes aggregates only', async () => {
  const f = fixture(), data = event();
  assert.equal((await f.visit(data)).status, 200);
  assert.equal((await f.visit(data)).status, 200);
  const response = await worker.fetch(f.request('/api/stats', { headers: { Origin: origin } }), f.env);
  const stats = await response.json();
  assert.equal(stats.total_views, 1); assert.equal(stats.today_views, 1);
  assert.equal(response.headers.get('Access-Control-Allow-Origin'), origin);
  assert.equal(JSON.stringify(stats).includes('192.0.2.10'), false);
  assert.equal(f.db.prepare('SELECT COUNT(*) AS n FROM visits').get().n, 1);
  assert.equal(f.db.prepare('SELECT views FROM daily_stats').get().views, 1);
});
test('rejects foreign origins, invalid paths, forged client data, and oversized bodies', async () => {
  const f = fixture();
  assert.equal((await f.visit(event(), { Origin: 'https://evil.example' })).status, 403);
  for (const path of ['/other-site/', '/ap-calculus-bc-2026/?email=private', '/ap-calculus-bc-2026/../private', '/ap-calculus-bc-2026/\\private']) {
    assert.equal((await f.visit({ ...event(), path })).status, 400);
  }
  assert.equal((await f.visit({ ...event(), padding: 'x'.repeat(2000) })).status, 413);
  assert.equal((await f.visit(event(), { 'CF-Connecting-IP': '', 'X-Forwarded-For': '192.0.2.99' })).status, 400);
  await f.visit({ ...event(), ip: '192.0.2.99' });
  assert.equal(f.db.prepare('SELECT ip FROM visits').get().ip, '192.0.2.10');
});
test('bots do not inflate the counter', async () => {
  const f = fixture();
  assert.equal((await (await f.visit(event(), { 'User-Agent': 'ExampleBot/1.0' })).json()).recorded, false);
  assert.equal(f.db.prepare('SELECT views FROM site_totals').get().views, 0);
});
test('IP records and CSV require authentication; password stays server-side', async () => {
  const f = fixture(); await f.visit();
  for (const path of ['/api/admin/data', '/api/admin/export']) assert.equal((await worker.fetch(f.request(path), f.env)).status, 401);
  const login = password => worker.fetch(f.request('/api/admin/login', { method: 'POST', body: { password }, headers: { Origin: backend, 'Content-Type': 'application/json' } }), f.env);
  assert.equal((await login('incorrect')).status, 401);
  const response = await login(f.env.ADMIN_PASSWORD); assert.equal(response.status, 200);
  const setCookie = response.headers.get('Set-Cookie');
  for (const flag of ['HttpOnly', 'Secure', 'SameSite=Strict']) assert.ok(setCookie.includes(flag));
  assert.equal(setCookie.includes(f.env.ADMIN_PASSWORD), false);
  const cookie = setCookie.split(';')[0];
  const dataResponse = await worker.fetch(f.request('/api/admin/data', { headers: { Cookie: cookie } }), f.env);
  const data = await dataResponse.json();
  assert.equal(data.visits[0].ip, '192.0.2.10'); assert.equal(data.today_unique_ips, 1);
  const csv = await worker.fetch(f.request('/api/admin/export', { headers: { Cookie: cookie } }), f.env);
  assert.equal(csv.status, 200); assert.match(await csv.text(), /192\.0\.2\.10/);
  assert.equal(await authenticated(f.request('/admin', { headers: { Cookie: 'course_admin=1.forged' } }), f.env), false);
  assert.equal(await authenticated(f.request('/admin', { headers: { Cookie: cookie } }), { ...f.env, ADMIN_PASSWORD: 'rotated-secret' }), false);
});
test('login rejects cross-site requests and unset admin credentials', async () => {
  const f = fixture();
  const req = originValue => f.request('/api/admin/login', { method: 'POST', body: { password: 'wrong' }, headers: { Origin: originValue, 'Content-Type': 'application/json' } });
  assert.equal((await worker.fetch(req(origin), f.env)).status, 403);
  assert.equal((await worker.fetch(req(backend), { ...f.env, ADMIN_PASSWORD: '' })).status, 503);
});
test('retention removes old IP records but keeps lifetime and daily counters', async () => {
  const f = fixture(); await f.visit();
  f.db.prepare('UPDATE visits SET occurred_at = ?').run(new Date(Date.now() - 31 * 86400000).toISOString());
  await worker.scheduled({}, f.env);
  assert.equal(f.db.prepare('SELECT COUNT(*) AS n FROM visits').get().n, 0);
  assert.equal(f.db.prepare('SELECT views FROM site_totals').get().views, 1);
  assert.equal(f.db.prepare('SELECT views FROM daily_stats').get().views, 1);
});
test('database failures return a generic message and preserve CORS', async () => {
  const f = fixture(); f.env.DB.prepare = () => { throw new Error('secret internal detail'); };
  const response = await worker.fetch(f.request('/api/stats', { headers: { Origin: origin } }), f.env);
  assert.equal(response.status, 503); assert.equal(response.headers.get('Access-Control-Allow-Origin'), origin);
  assert.equal((await response.text()).includes('secret internal detail'), false);
});
