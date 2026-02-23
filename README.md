# AE Assessment - Recruitment Portal

Automation Engineer recruitment application tracker with integrated form submission and dashboard.

## Features

- 📝 **Application Form** - Comprehensive recruitment form with file upload support
- 📊 **Dashboard** - Real-time applicant tracking and management
- ⭐ **Rating System** - Skill assessment with star ratings
- 🔄 **Auto Scoring** - Automatic candidate scoring based on ratings
- 📱 **Responsive Design** - Works on all devices

## Tech Stack

- HTML5
- CSS3 (Custom design with modern UI)
- Vanilla JavaScript
- Airtable API (Database)
- n8n Webhook Integration

## Deployment

This project is deployed on Vercel.

### Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Haseebullahkehar/AE-Assessment.git)

## ✅ Configuration Status

**Secure API architecture implemented!** This project uses Vercel serverless functions to keep credentials safe.

- ✅ Serverless API endpoints created (`/api/submit` and `/api/candidates`)
- ✅ Credentials stored securely in environment variables
- ✅ No sensitive data exposed in client-side code
- ✅ Ready to deploy to Vercel

### Quick Deploy to Vercel

1. Click the button below to deploy:
   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Haseebullahkehar/AE-Assessment.git)

2. Add environment variables in Vercel dashboard:
   - `N8N_WEBHOOK_URL`
   - `AIRTABLE_BASE_ID`
   - `AIRTABLE_TABLE_ID`
   - `AIRTABLE_TOKEN`

3. Deploy and your site will be live!

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

## Local Development

1. Clone the repository
```bash
git clone https://github.com/Haseebullahkehar/AE-Assessment.git
```

2. Configure your credentials (see above)

3. Open `index.html` or `recruitment_form.html` in your browser

## Security

✅ **Secure Architecture**
- API credentials stored in Vercel environment variables
- Serverless functions handle all API calls
- No sensitive data exposed in client-side code

For local development, copy `.env.example` to `.env` and add your credentials.

## License

MIT
