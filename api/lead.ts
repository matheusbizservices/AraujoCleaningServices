type LeadSource = 'estimate' | 'checklist';

interface LeadPayload {
  source: LeadSource;
  name: string;
  email: string;
  phone?: string;
  details?: {
    serviceLabel?: string;
    estimatedTotal?: number;
    addons?: string;
    quoteId?: string;
  };
}

function buildSlackText(payload: LeadPayload, submittedAt: string): string {
  const { source, name, email, phone, details } = payload;

  if (source === 'estimate') {
    return (
      `📋 *New Estimate Request*${details?.quoteId ? ` (Ref ${details.quoteId})` : ''}\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone || 'n/a'}\n` +
      `*Email:* ${email}\n` +
      `*Service:* ${details?.serviceLabel || 'n/a'}` +
      `${details?.addons ? `\n*Add-ons:* ${details.addons}` : ''}` +
      `${details?.estimatedTotal ? `\n*Est. Total:* $${details.estimatedTotal}` : ''}\n` +
      `*Submitted:* ${submittedAt}`
    );
  }

  return `🧹 *New Checklist Lead*\n*Name:* ${name}\n*Email:* ${email}\n*Submitted:* ${submittedAt}`;
}

async function notifySlack(text: string): Promise<boolean> {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error('SLACK_WEBHOOK_URL is not configured');
    return false;
  }
  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
    return true;
  } catch (err) {
    console.error('Slack notify failed:', err);
    return false;
  }
}

async function syncHubSpotContact(payload: LeadPayload): Promise<boolean> {
  const token = process.env.HUBSPOT_ACCESS_TOKEN;
  if (!token) {
    console.error('HUBSPOT_ACCESS_TOKEN is not configured');
    return false;
  }

  const [firstname, ...rest] = payload.name.trim().split(' ');
  const lastname = rest.join(' ');

  const properties: Record<string, string> = {
    firstname: firstname || payload.name,
    ...(lastname ? { lastname } : {}),
    ...(payload.phone ? { phone: payload.phone } : {}),
    ...(payload.source === 'estimate' ? { website_lead_estimate: 'true' } : {}),
    ...(payload.source === 'checklist' ? { website_lead_checklist: 'true' } : {}),
  };

  try {
    const res = await fetch(
      `https://api.hubapi.com/crm/v3/objects/contacts/${encodeURIComponent(payload.email)}?idProperty=email`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ properties }),
      }
    );

    // A contact that doesn't exist yet returns 404 on PATCH; create it instead.
    if (res.status === 404) {
      const createRes = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ properties: { email: payload.email, ...properties } }),
      });
      if (!createRes.ok) {
        console.error('HubSpot contact create failed:', createRes.status, await createRes.text());
        return false;
      }
      return true;
    }

    if (!res.ok) {
      console.error('HubSpot contact update failed:', res.status, await res.text());
      return false;
    }
    return true;
  } catch (err) {
    console.error('HubSpot sync failed:', err);
    return false;
  }
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const payload = req.body as LeadPayload;
  if (!payload?.source || !payload?.name || !payload?.email) {
    res.status(400).json({ error: 'Missing required fields: source, name, email' });
    return;
  }

  const submittedAt = new Date().toLocaleString();
  const [slackDelivered, hubspotSynced] = await Promise.all([
    notifySlack(buildSlackText(payload, submittedAt)),
    syncHubSpotContact(payload),
  ]);

  res.status(200).json({ ok: true, slackDelivered, hubspotSynced });
}
