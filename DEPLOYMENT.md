# Deploying to Vercel - Step by Step Guide

## ✅ Step 1: Code is Ready on GitHub

Your code is pushed to: **https://github.com/Haseebullahkehar/AE-Assessment.git**

The application now uses **secure serverless functions** - no credentials in the code!

## 🚀 Step 2: Deploy to Vercel

### Option A: Using Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account

2. Click **"Add New..." → "Project"**

3. Import your GitHub repository:
   - Find and click **"Import"** next to `Haseebullahkehar/AE-Assessment`
   - If you don't see it, click **"Adjust GitHub App Permissions"** to grant access

4. Configure the project:
   - **Framework Preset**: Other (auto-detect)
   - **Root Directory**: `./` (default)
   - **Build Command**: Leave empty
   - **Output Directory**: Leave empty

5. **IMPORTANT - Add Environment Variables**:
   
   Click "Environment Variables" and add these 4 variables:

   ```
   N8N_WEBHOOK_URL = https://scaletopia.app.n8n.cloud/webhook-test/recruitment-intake
   AIRTABLE_BASE_ID = app6WIbM8JbcYSrs7
   AIRTABLE_TABLE_ID = tblAmJXZy1HOYsDwG
   AIRTABLE_TOKEN = YOUR_AIRTABLE_PERSONAL_ACCESS_TOKEN_HERE
   ```

6. Click **"Deploy"**

7. Wait 30-60 seconds for deployment to complete

8. Your site will be live at: `https://your-project-name.vercel.app`

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to your project
cd "c:\Users\Haseebullah\Documents\AE Assessment"

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts and deploy!
```

After deployment, add environment variables via the web dashboard or CLI:

```bash
vercel env add N8N_WEBHOOK_URL
vercel env add AIRTABLE_BASE_ID  
vercel env add AIRTABLE_TABLE_ID
vercel env add AIRTABLE_TOKEN
```

## � Step 3: How It Works

Your application now uses secure serverless functions:

### API Endpoints

- **`/api/submit`** - Handles form submissions
  - Submits to n8n webhook
  - Falls back to direct Airtable write
  - Processes file uploads

- **`/api/candidates`** - Manages candidate data
  - GET: Fetches all candidates
  - PATCH: Updates candidate status

All API credentials are stored in Vercel environment variables and accessed server-side. They're **never exposed** in the browser!

## 🎉 Step 4: Test Your Deployment

1. Visit your live URL: `https://your-project-name.vercel.app`

2. Test the application form:
   - Fill out all required fields
   - Upload a test resume
   - Submit the form

3. Check the dashboard:
   - Click "Dashboard" in the navigation
   - You should see your test submission
   - Try updating the status

4. Verify in Airtable:
   - Check your Airtable base
   - The new record should appear

## 🔄 Future Updates

Every time you push to GitHub, Vercel will automatically redeploy!

```bash
# Make changes
git add .
git commit -m "Your update message"  
git push origin main
# Vercel auto-deploys in ~30 seconds!
```

## 🎯 Quick Deploy Button

You can also use this one-click deploy:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Haseebullahkehar/AE-Assessment.git)

---

## ✅ Checklist

- [x] Code pushed to GitHub
- [ ] Vercel account created/signed in
- [ ] Repository imported to Vercel
- [ ] API credentials configured
- [ ] Site deployed and live
- [ ] Tested form submission
- [ ] Tested dashboard view

Need help? Check [CONFIG.md](CONFIG.md) for more details!
