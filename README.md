# Strava Activity Overlay Studio

Mobile-first social overlay generator for runners and cyclists.

## Stack

- Frontend: standalone HTML/CSS/JS
- Backend: Vercel serverless functions
- Data source: Strava API

## Features

- Connect Strava account
- Import latest activities
- Restyle activity overlays for Instagram/TikTok
- Export story-ready PNGs

## Setup

## 1. Create Strava API app

Go to:
https://www.strava.com/settings/api

Create an app.

Set Authorization Callback Domain to:

```text
localhost
```

Later replace with your production domain.

## 2. Add environment variables

Inside Vercel:

```text
STRAVA_CLIENT_ID=
STRAVA_CLIENT_SECRET=
```

## 3. Deploy to Vercel

Import GitHub repo into Vercel.

Vercel automatically supports the `/api` folder.

## OAuth Flow

Frontend opens:

```text
https://www.strava.com/oauth/authorize
```

User approves access.

Strava redirects back with:

```text
?code=...
```

Frontend exchanges code through:

```text
/api/strava/exchange
```

Then fetches activities from:

```text
/api/strava/activities
```

## Next Steps

- Add Connect Strava button
- Activity picker sheet
- Polyline route rendering
- Auto-generated route art
- Reel/story export presets
- Transparent PNG export
- Activity sticker packs
