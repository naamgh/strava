export default async function handler(req, res) {
  const auth = req.headers.authorization || '';
  const token = auth.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'Missing access token' });
  }

  const response = await fetch('https://www.strava.com/api/v3/athlete/activities?per_page=20', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const data = await response.json();
  if (!response.ok) return res.status(response.status).json(data);

  const mapped = data.map(activity => ({
    id: activity.id,
    name: activity.name,
    type: activity.sport_type,
    distance_km: (activity.distance / 1000).toFixed(1),
    moving_time: activity.moving_time,
    elevation_m: Math.round(activity.total_elevation_gain),
    average_speed_kmh: (activity.average_speed * 3.6).toFixed(1),
    average_heartrate: activity.average_heartrate,
    start_date: activity.start_date,
    map: activity.map?.summary_polyline || null
  }));

  return res.status(200).json(mapped);
}
