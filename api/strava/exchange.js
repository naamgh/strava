export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { code } = req.body || {};
  if (!code) return res.status(400).json({ error: 'Missing Strava authorization code' });

  const client_id = process.env.STRAVA_CLIENT_ID;
  const client_secret = process.env.STRAVA_CLIENT_SECRET;
  if (!client_id || !client_secret) {
    return res.status(500).json({ error: 'Missing STRAVA_CLIENT_ID or STRAVA_CLIENT_SECRET env vars' });
  }

  const body = new URLSearchParams({
    client_id,
    client_secret,
    code,
    grant_type: 'authorization_code'
  });

  const response = await fetch('https://www.strava.com/oauth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body
  });

  const data = await response.json();
  if (!response.ok) return res.status(response.status).json(data);

  // MVP note: returning tokens to the browser is OK for personal testing only.
  // Production should store refresh tokens server-side against a user session.
  return res.status(200).json({
    athlete: data.athlete,
    access_token: data.access_token,
    refresh_token: data.refresh_token,
    expires_at: data.expires_at
  });
}
