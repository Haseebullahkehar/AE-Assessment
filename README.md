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

## ⚠️ Configuration Required

**Before deploying**, you must configure your API credentials. See [CONFIG.md](CONFIG.md) for detailed instructions.

Quick setup:
1. Edit `recruitment_form.html` (line ~790)
2. Replace placeholder values with your actual credentials
3. Commit and push to GitHub
4. Deploy to Vercel

```javascript
const N8N_WEBHOOK_URL = 'YOUR_N8N_WEBHOOK_URL';
const AIRTABLE_BASE_ID = 'YOUR_AIRTABLE_BASE_ID';
const AIRTABLE_TABLE_ID = 'YOUR_AIRTABLE_TABLE_ID';
const AIRTABLE_TOKEN = 'YOUR_AIRTABLE_TOKEN';
```

## Local Development

1. Clone the repository
```bash
git clone https://github.com/Haseebullahkehar/AE-Assessment.git
```

2. Configure your credentials (see above)

3. Open `index.html` or `recruitment_form.html` in your browser

## Security Note

⚠️ **Never commit real API tokens to public repositories!** 

For production deployments:
- Use Vercel environment variables
- Keep sensitive data out of source code
- Regularly rotate API tokens

## License

MIT
