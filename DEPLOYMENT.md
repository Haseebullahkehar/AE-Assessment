# Deploying to Vercel - Step by Step Guide

## ✅ Step 1: Code is Already on GitHub

Your code is now successfully pushed to:
**https://github.com/Haseebullahkehar/AE-Assessment.git**

## 🚀 Step 2: Deploy to Vercel

### Option A: Using Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in (or sign up with your GitHub account)

2. Click **"Add New..." → "Project"**

3. Import your GitHub repository:
   - Click **"Import"** next to `Haseebullahkehar/AE-Assessment`
   - If you don't see it, click **"Adjust GitHub App Permissions"** to grant access

4. Configure the project:
   - **Framework Preset**: Other (it will auto-detect)
   - **Root Directory**: `./` (keep as default)
   - **Build Command**: Leave empty (static HTML site)
   - **Output Directory**: Leave empty

5. **IMPORTANT - Add Environment Variables** (if you want to use them later):
   - Expand "Environment Variables" section
   - Normally you'd add these, but since we're using client-side JS, you'll need to:
     - Either: Edit `recruitment_form.html` with your real credentials before deploying
     - Or: Add them as environment variables (requires code changes to access them)

6. Click **"Deploy"**

7. Wait 30-60 seconds for deployment to complete

8. Your site will be live at: `https://your-project-name.vercel.app`

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to your project
cd "c:\Users\Haseebullah\Documents\AE Assessment"

# Deploy
vercel

# Follow the prompts and deploy!
```

## 🔧 Step 3: Configure Your API Credentials

Since your site uses client-side JavaScript, you have two options:

### Option 1: Direct Configuration (Quick & Simple)

1. Edit [recruitment_form.html](recruitment_form.html) locally (around line 790)

2. Replace the placeholder values with your actual credentials:
   ```javascript
   const N8N_WEBHOOK_URL = 'https://scaletopia.app.n8n.cloud/webhook-test/recruitment-intake';
   const AIRTABLE_BASE_ID = 'app6WIbM8JbcYSrs7';
   const AIRTABLE_TABLE_ID = 'tblAmJXZy1HOYsDwG';
   const AIRTABLE_TOKEN = 'your_actual_token_here';
   ```

3. Commit and push:
   ```bash
   git add recruitment_form.html
   git commit -m "Add API credentials"
   git push origin main
   ```

4. Vercel will automatically redeploy with your credentials

⚠️ **Warning**: This exposes your API keys in the browser. For production, use server-side functions or environment variables with a backend.

### Option 2: Use Vercel Serverless Functions (More Secure)

This requires refactoring your code to use Vercel serverless functions to hide credentials. See [Vercel Functions Documentation](https://vercel.com/docs/functions).

## 📱 Step 4: Access Your Live Site

After deployment completes:
- Your site will be at: `https://your-project-name.vercel.app`
- Vercel will give you a production URL
- You can add a custom domain in Vercel settings

## 🔄 Future Updates

Every time you push to GitHub, Vercel will automatically deploy the changes!

```bash
# Make changes
git add .
git commit -m "Your update message"
git push origin main
# Vercel auto-deploys!
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
