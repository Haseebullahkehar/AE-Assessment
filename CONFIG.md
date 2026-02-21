# ⚠️ IMPORTANT: Configuration Required

Before deploying to Vercel, you need to configure your API credentials:

## Method 1: Direct Edit (For Testing)

Edit `recruitment_form.html` and replace the placeholder values around line 790:

```javascript
const N8N_WEBHOOK_URL = 'https://scaletopia.app.n8n.cloud/webhook-test/recruitment-intake';
const AIRTABLE_BASE_ID = 'app6WIbM8JbcYSrs7';
const AIRTABLE_TABLE_ID = 'tblAmJXZy1HOYsDwG';
const AIRTABLE_TOKEN = 'your_actual_token_here';
```

## Method 2: Using Vercel Environment Variables (Recommended for Production)

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add the following variables:
   - `N8N_WEBHOOK_URL`
   - `AIRTABLE_BASE_ID`
   - `AIRTABLE_TABLE_ID`
   - `AIRTABLE_TOKEN`

**Note:** The current code uses hardcoded values. For production use with environment variables, you'll need to modify the code to fetch these from Vercel's environment.

## Quick Deploy to Vercel

1. Push your code to GitHub (with placeholders)
2. Connect your GitHub repo to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

For immediate deployment, manually update the credentials in `recruitment_form.html` before pushing.
