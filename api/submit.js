// Vercel Serverless Function for secure API calls
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const payload = req.body;

    // Log for debugging (visible in Vercel logs)
    console.log('Received submission:', { name: payload.Name, email: payload.Email });

    // Get credentials from environment variables
    const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL;
    const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
    const AIRTABLE_TABLE_ID = process.env.AIRTABLE_TABLE_ID;
    const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;

    // Try n8n webhook first
    if (N8N_WEBHOOK_URL && N8N_WEBHOOK_URL !== 'YOUR_N8N_WEBHOOK_URL_HERE') {
      try {
        const response = await fetch(N8N_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          console.error('N8N webhook failed:', response.status, response.statusText);
          throw new Error(`N8N webhook failed: ${response.status}`);
        }

        console.log('Successfully submitted to n8n webhook');
        return res.status(200).json({ success: true, message: 'Submitted successfully' });
      } catch (webhookError) {
        console.error('N8N webhook error:', webhookError.message);
        console.log('Falling back to direct Airtable write...');
        // Continue to Airtable fallback
      }
    }

    // Fallback to direct Airtable write
    const avg = (payload.Rating_AI_Automation + payload.Rating_n8n_Make + payload.Rating_Vibe_Coding) / 3;
    const score = avg >= 7 ? 'Good Fit' : avg >= 4 ? 'Maybe' : 'Not Fit';
    const status = score === 'Good Fit' ? 'Shortlisted' : score === 'Not Fit' ? 'Rejected' : 'New';

    const fields = {
      'Name': payload.Name,
      'Email': payload.Email,
      'WhatsApp Number': payload.WhatsApp_Number,
      'LinkedIn Profile': payload.LinkedIn_Profile,
      'Based in Karachi': payload.Based_in_Karachi,
      'Location': payload.Location,
      'Current Role': payload.Current_Role,
      'Applying For': payload.Applying_For,
      'Notice Period': payload.Notice_Period,
      'Resume / CV': payload.Resume_CV || '[File uploaded]',
      'Rating - AI Automation': payload.Rating_AI_Automation,
      'Rating - n8n/Make': payload.Rating_n8n_Make,
      'Rating - Vibe Coding': payload.Rating_Vibe_Coding,
      'Average Rating': Math.round(avg * 100) / 100,
      'Proud Automation Description': payload.Proud_Automation_Description,
      'Score': score,
      'Status': status
    };

    console.log('Writing to Airtable...');
    const airtableResponse = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AIRTABLE_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fields })
      }
    );

    if (!airtableResponse.ok) {
      const errorText = await airtableResponse.text();
      console.error('Airtable error:', airtableResponse.status, errorText);
      let errorMsg = `Airtable write failed: ${airtableResponse.status}`;
      try {
        const errorJson = JSON.parse(errorText);
        if (errorJson.error?.message) {
          errorMsg = errorJson.error.message;
        }
      } catch (e) {
        // Error text is not JSON, use as is
      }
      throw new Error(errorMsg);
    }

    const result = await airtableResponse.json();
    console.log('Successfully written to Airtable:', result.id);
    return res.status(200).json({ success: true, message: 'Submitted successfully' });
  } catch (error) {
    console.error('Submission error:', error.message, error.stack);
    return res.status(500).json({ error: error.message || 'Submission failed' });
  }
}
