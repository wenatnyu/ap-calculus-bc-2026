# Course visitor statistics

The course remains on GitHub Pages. This service supplies aggregate counters and an authenticated teacher dashboard.

Service: `https://ap-calculus-visitor-stats.igcs0478-private-analytics.workers.dev`

Teacher dashboard: `https://ap-calculus-visitor-stats.igcs0478-private-analytics.workers.dev/admin`

## Endpoints

- `POST /api/visit`: allowed course origin only; records one page-load event. The IP comes from Cloudflare's `CF-Connecting-IP` header, never from the JSON body. Retry event IDs are deduplicated. Known bot user agents are skipped.
- `GET /api/stats`: public lifetime and current-day page views; no visit records or IP data.
- `/admin`: teacher login and dashboard.
- `POST /api/admin/login`, `POST /api/admin/logout`: same-origin session endpoints.
- `GET /api/admin/data`: authenticated latest 200 visits, 30 daily aggregate rows, and today's unique-IP count.
- `GET /api/admin/export`: authenticated CSV export of up to 10,000 retained visits.

The browser sends the pathname only, with no query string, fragment, referrer, persistent identifier, or email. Raw visit records contain the time, pathname, IP, and country code. A daily cron removes records older than 30 days. Aggregate counters remain. Counts start when tracking is enabled; they cannot recover earlier visits. Client-side counting can miss blocked scripts and is not an attendance system.

## Maintain

```sh
npm ci
npm test
npx wrangler d1 migrations apply ap-calculus-visitors --remote
npx wrangler deploy
```

Rotate the password with `npx wrangler secret put ADMIN_PASSWORD`. Changing it invalidates existing sessions. Keep the local password in the ignored `private/` folder; never commit secrets. Worker observability is disabled so that request logs are not duplicated there.

The public Worker URL is configured on the `assets/site-analytics.js` script tags in `index.html` and `notes.html`. Other pages can opt in using the same script and endpoint with the appropriate relative asset path. The public origin and base path are configured in `wrangler.jsonc`.

The project uses the Workers Free plan and a single D1 database, with no paid service enabled. Free-plan usage limits still apply; if the service becomes unavailable, the lessons remain accessible.
