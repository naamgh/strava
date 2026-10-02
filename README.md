# Overlay Studio

Turn a Strava activity into a bold, transparent PNG stats card for Instagram/TikTok Stories.

- Single static page — no build step, no server code.
- Strava sign-in uses the shared Strava API app (client id 248261). The client secret lives only in the
  Cloudflare Worker at https://strava-proxy.nomtron.workers.dev (POST /exchange, /refresh); all activity
  reads go from the browser straight to Strava.
- Works on any page under https://naamgh.github.io (that's the Strava callback domain and the Worker's
  allowed origin).

## Deploy

1. Put `index.html` in a GitHub Pages repo under the naamgh account (e.g. a repo called `overlay`).
2. Settings → Pages → Deploy from branch → `main` / root.
3. Open https://naamgh.github.io/overlay/ and tap the activity pill → Connect Strava.
