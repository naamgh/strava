export default function handler(req, res) {
  const clientId = process.env.STRAVA_CLIENT_ID;
  if (!clientId) return res.status(500).json({ error: 'Missing STRAVA_CLIENT_ID env var' });
  return res.status(200).json({ client_id: clientId });
}
