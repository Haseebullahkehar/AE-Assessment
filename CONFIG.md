# ✅ Secure Configuration with Vercel

This project now uses **Vercel serverless functions** to keep your API credentials secure!

## Architecture

- **Client-side**: HTML form and dashboard
- **Server-side**: Vercel serverless functions (`/api/submit` and `/api/candidates`)
- **Environment Variables**: Credentials stored securely in Vercel

## Setup for Vercel Deployment

### Step 1: Deploy to Vercel

1. Push your code to GitHub (credentials are NOT in the code!)
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Click "Deploy"

### Step 2: Add Environment Variables

In your Vercel project dashboard:

1. Go to **Settings** → **Environment Variables**
2. Add the following variables:

```
N8N_WEBHOOK_URL=https://scaletopia.app.n8n.cloud/webhook-test/recruitment-intake
AIRTABLE_BASE_ID=app6WIbM8JbcYSrs7
AIRTABLE_TABLE_ID=tblAmJXZy1HOYsDwG
AIRTABLE_TOKEN=YOUR_AIRTABLE_PERSONAL_ACCESS_TOKEN_HERE
```

3. Click **Save**
4. Redeploy your project

### Step 3: Done!

Your application will now:
- ✅ Submit forms securely via `/api/submit`
- ✅ Load candidates via `/api/candidates`  
- ✅ Keep all credentials hidden from client-side code

## Local Development

For local testing:

1. Copy `.env.example` to `.env`
2. Add your actual credentials to `.env`
3. Install Vercel CLI: `npm install -g vercel`
4. Run: `vercel dev`

This will run the serverless functions locally at `http://localhost:3000`

## How It Works

### API Endpoints

**POST `/api/submit`**
- Submits application to n8n webhook or Airtable
- Handles file uploads
- Returns success/error response

**GET `/api/candidates`**
- Fetches all candidates from Airtable
- Returns candidate data for dashboard

**PATCH `/api/candidates`**  
- Updates candidate status
- Requires `recordId` and `status` in request body

All credentials are accessed via `process.env` in the serverless functions, never exposed to the client.
