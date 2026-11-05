CREATE TABLE site_totals (
  id INTEGER PRIMARY KEY CHECK (id = 1),
  views INTEGER NOT NULL DEFAULT 0,
  started_at TEXT NOT NULL
);
INSERT INTO site_totals (id, views, started_at) VALUES (1, 0, strftime('%Y-%m-%dT%H:%M:%fZ', 'now'));
CREATE TABLE visits (
  event_id TEXT PRIMARY KEY,
  occurred_at TEXT NOT NULL,
  day TEXT NOT NULL,
  path TEXT NOT NULL,
  ip TEXT NOT NULL,
  country TEXT NOT NULL,
  counted INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX visits_time ON visits(occurred_at DESC);
CREATE INDEX visits_day ON visits(day);
CREATE TABLE daily_stats (day TEXT PRIMARY KEY, views INTEGER NOT NULL DEFAULT 0);
