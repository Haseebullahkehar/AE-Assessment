# 🚀 DEPLOYMENT INSTRUCTIONS

## ✅ Status: Ready to Deploy!

Your code is now on GitHub with a secure serverless architecture:
- ✅ **Repository**: https://github.com/Haseebullahkehar/AE-Assessment
- ✅ **No credentials in source code**
- ✅ **Serverless API functions ready**

---

## 🎯 Deploy to Vercel (5 Minutes)

### Step 1: Import to Vercel

1. Go to **[vercel.com/new](https://vercel.com/new)**  
2. Sign in with your GitHub account
3. Click **"Import Project"**
4. Select: `Haseebullahkehar/AE-Assessment`
5. Click **"Import"**

### Step 2: Add Environment Variables

Before deploying, add these 4 environment variables:

```bash
N8N_WEBHOOK_URL=https://scaletopia.app.n8n.cloud/webhook/recruitment-intake
AIRTABLE_BASE_ID=app6WIbM8JbcYSrs7
AIRTABLE_TABLE_ID=tblAmJXZy1HOYsDwG
AIRTABLE_TOKEN=<your-actual-token-from-local-.env-file>
```

**How to add:**
- In Vercel, expand "Environment Variables"
- For each variable:
  - Name: (e.g., `N8N_WEBHOOK_URL`)
  - Value: (paste the value)
  - Environment: Select all (Production, Preview, Development)
- Click **"Add"** for each

### Step 3: Deploy

1. Leave all other settings as default
2. Click **"Deploy"**
3. Wait ~30 seconds
4. Your site will be live! 🎉

### Step 4: Test Your Application

Visit your live URL (Vercel will show it after deployment):

**Test Form Submission:**
1. Fill out the application form
2. Upload a test resume
3. Submit and verify success message

**Test Dashboard:**
1. Click "Dashboard" tab
2. View submitted applications
3. Try updating a candidate status

---

## 📱 Your Live URLs

After deployment, you'll get:
- **Production URL**: `https://your-project-name.vercel.app`
- **Custom Domain**: Add in Vercel settings if needed

---

## 🔄 Future Updates

Every git push automatically redeploys:

```bash
# Make changes locally
git add .
git commit -m "Your changes"
git push origin main

# Vercel auto-deploys in ~30 seconds!
```

---

## 🔧 How the Secure API Works

Your application uses serverless functions to protect credentials:

### API Endpoints

- **`/api/submit`** - Form submissions  
  ├─ Accepts application data  
  ├─ Sends to n8n webhook  
  └─ Falls back to Airtable

- **`/api/candidates`** - Dashboard data  
  ├─ GET: Fetch all candidates  
  └─ PATCH: Update candidate status

All credentials are in Vercel environment variables, never exposed to browsers!

---

## ✅ Checklist

- [ ] Code pushed to GitHub
- [ ] Imported to Vercel
- [ ] Environment variables added
- [ ] Deployed successfully
- [ ] Tested form submission
- [ ] Tested dashboard
- [ ] Verified data in Airtable

---

## 🆘 Troubleshooting

**Form submission fails:**
- Check environment variables are set correctly
- Verify Airtable token hasn't expired
- Check browser console for errors

**Dashboard not loading:**
- Verify AIRTABLE_BASE_ID and AIRTABLE_TABLE_ID are correct
- Check Airtable permissions

**Build fails:**
- Check Vercel build logs
- Ensure all files pushed to GitHub
- Verify no syntax errors in JavaScript files

---

## 📞 Need Help?

- Vercel Docs: https://vercel.com/docs
- Check deployment logs in Vercel dashboard
- View browser console for client errors

---

**Happy Deploying! 🚀**
