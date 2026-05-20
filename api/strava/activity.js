export default async function handler(req, res) {
  const auth = req.headers.authorization || '';
  const token = auth.replace('Bearer ', '');
  const { id } = req.query || {};

  if (!token) return res.status(401).json({ error: 'Missing access token' });
  if (!id) return res.status(400).json({ error: 'Missing activity id' });

  try {
    const activityRes = await fetch(`https://www.strava.com/api/v3/activities/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const activity = await activityRes.json();
    if (!activityRes.ok) return res.status(activityRes.status).json(activity);

    const streamsRes = await fetch(
      `https://www.strava.com/api/v3/activities/${id}/streams?keys=latlng,altitude,distance,time,heartrate,watts,velocity_smooth&key_by_type=true`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const streams = await streamsRes.ok ? await streamsRes.json() : {};

    const laps = (activity.laps || []).map((lap, index) => ({
      index: index + 1,
      distance_m: lap.distance,
      moving_time: lap.moving_time,
      elapsed_time: lap.elapsed_time,
      average_speed: lap.average_speed,
      pace_sec_per_km: lap.distance ? lap.moving_time / (lap.distance / 1000) : null,
      total_elevation_gain: lap.total_elevation_gain,
      average_heartrate: lap.average_heartrate
    }));

    return res.status(200).json({
      activity,
      streams,
      laps
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Failed to fetch activity detail' });
  }
}
