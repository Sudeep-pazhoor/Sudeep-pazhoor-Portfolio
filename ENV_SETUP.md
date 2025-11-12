# Environment Variables Setup

This project uses environment variables to securely store API credentials.

## Setup Instructions

### 1. Create `.env` file

Copy the `.env.example` file to create your own `.env` file:

```bash
cp .env.example .env
```

### 2. Get EmailJS Credentials

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/admin)
2. Sign in or create an account
3. Get your credentials:

#### Service ID
- Go to **Email Services**
- Copy your Service ID (e.g., `service_xxxxxxx`)

#### Template ID
- Go to **Email Templates**
- Copy your Template ID (e.g., `template_xxxxxxx`)

#### Public Key
- Go to **Account** → **General**
- Copy your Public Key

### 3. Update `.env` file

Open `.env` and replace the placeholder values:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 4. Restart Development Server

After updating `.env`, restart your development server:

```bash
npm run dev
```

## Environment Variables Used

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS Service ID | Yes |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS Template ID | Yes |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS Public Key | Yes |

## Security Notes

- ✅ `.env` is included in `.gitignore` (not committed to git)
- ✅ `.env.example` is committed (template only, no real credentials)
- ✅ Never commit real API keys to version control
- ✅ Use different credentials for development and production

## Deployment

When deploying to platforms like Vercel, Netlify, or others:

1. Add environment variables in your hosting platform's dashboard
2. Use the same variable names (with `VITE_` prefix)
3. Never expose sensitive keys in client-side code

## Troubleshooting

**Contact form not working?**
- Check if `.env` file exists in project root
- Verify all three variables are set correctly
- Restart development server after changes
- Check browser console for error messages

**Still having issues?**
- Verify EmailJS credentials in dashboard
- Check EmailJS logs: https://dashboard.emailjs.com/admin/logs
- Ensure template variables match form field names
