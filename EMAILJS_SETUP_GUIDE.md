# EmailJS Setup Guide for Portfolio Contact Form

## Step-by-Step Instructions

### 1. EmailJS Account Setup (Already Done ✓)
You've already created an account at EmailJS. Great!

### 2. Get Your Credentials

#### A. Get Your Public Key
1. Go to https://dashboard.emailjs.com/admin/account
2. Under "General" tab, you'll see **"Public Key"**
3. Copy this key (it looks like: `YOUR_PUBLIC_KEY_HERE`)

#### B. Create an Email Service
1. Go to https://dashboard.emailjs.com/admin
2. Click on **"Email Services"** in the left sidebar
3. Click **"Add New Service"**
4. Choose your email provider (Gmail is recommended)
5. Follow the connection steps:
   - For Gmail: Click "Connect Account" and authorize EmailJS
6. Once connected, you'll see a **Service ID** (like: `service_xxxxxxx`)
7. Copy this Service ID

#### C. Create an Email Template
1. Go to https://dashboard.emailjs.com/admin/templates
2. Click **"Create New Template"**
3. Set up your template with these variables:

**Template Content:**
```
Subject: New Message from {{fullName}} - Portfolio Contact Form

From: {{fullName}}
Email: {{email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

**Important:** Make sure your template uses these exact variable names:
- `{{fullName}}`
- `{{email}}`
- `{{message}}`

4. In the "To Email" field, enter: **sudeeppazhoor@gmail.com**
5. Click **"Save"**
6. Copy the **Template ID** (like: `template_xxxxxxx`)

### 3. Update Your Code

Open `src/components/Contact.jsx` and replace these three values on lines 28-30:

```javascript
const result = await emailjs.sendForm(
  'service_xxxxxxx',      // Replace with your Service ID
  'template_xxxxxxx',     // Replace with your Template ID
  formRef.current,
  'YOUR_PUBLIC_KEY_HERE'  // Replace with your Public Key
);
```

**Example:**
```javascript
const result = await emailjs.sendForm(
  'service_abc123',
  'template_xyz789',
  formRef.current,
  'xYz123AbC456DeF789'
);
```

### 4. Test Your Form

1. Save all files
2. Run your development server: `npm run dev`
3. Navigate to the Contact section
4. Fill out the form with test data
5. Click "Send Message"
6. Check your email (sudeeppazhoor@gmail.com) for the message

### 5. Troubleshooting

**If emails aren't sending:**

1. **Check Browser Console** - Look for error messages
2. **Verify Credentials** - Make sure all IDs and keys are correct
3. **Check EmailJS Dashboard** - Go to "Logs" to see if requests are being received
4. **Gmail Settings** - If using Gmail, make sure you've authorized EmailJS properly
5. **Template Variables** - Ensure template uses `{{fullName}}`, `{{email}}`, `{{message}}`

**Common Issues:**

- **"Invalid public key"** - Double-check your Public Key
- **"Service not found"** - Verify your Service ID
- **"Template not found"** - Verify your Template ID
- **Emails not arriving** - Check spam folder, verify "To Email" in template

### 6. EmailJS Free Tier Limits

- 200 emails per month (free tier)
- If you need more, consider upgrading or using a different service

### 7. Security Note

Your Public Key is safe to expose in frontend code - it's designed for client-side use. However, if you want extra security, you can enable reCAPTCHA in EmailJS settings.

---

## Quick Reference

**EmailJS Dashboard:** https://dashboard.emailjs.com/admin

**What You Need:**
1. ✅ Public Key (from Account settings)
2. ✅ Service ID (from Email Services)
3. ✅ Template ID (from Email Templates)

**Where to Update:**
- File: `src/components/Contact.jsx`
- Lines: 28-30
- Replace: `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, `YOUR_PUBLIC_KEY`

---

## Form Features Included

✅ Full Name field
✅ Email Address field
✅ Message textarea
✅ Send button with loading state
✅ Success notification
✅ Error notification
✅ Form validation
✅ Auto-clear form after successful send
✅ Responsive design
✅ Smooth animations

---

Need help? Check the EmailJS documentation: https://www.emailjs.com/docs/
