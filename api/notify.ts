export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { text } = req.body || {};
  if (!text) {
    res.status(400).json({ error: 'Missing text' });
    return;
  }

  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error('SLACK_WEBHOOK_URL is not configured');
    res.status(200).json({ ok: true, delivered: false });
    return;
  }

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
    res.status(200).json({ ok: true, delivered: true });
  } catch (err) {
    console.error('Slack notify failed:', err);
    res.status(200).json({ ok: true, delivered: false });
  }
}
