# Complete EmailJS Setup Guide

## ✅ What's Already Done

1. ✅ EmailJS package installed
2. ✅ Contact form created with all fields
3. ✅ Form validation and error handling
4. ✅ Success/Error notifications
5. ✅ Beautiful styling matching your portfolio
6. ✅ Fixed nested `<a>` tag error in Works section

---

## 🔧 What You Need to Do

### Step 1: Setup EmailJS Template

1. **Go to EmailJS Templates**
   - Visit: https://dashboard.emailjs.com/admin/templates
   - Click "Create New Template"

2. **Configure Template Settings**
   - **Template Name**: Portfolio Contact Form
   - **Subject**: New Message from {{name}} - Portfolio Contact

3. **Set Email Content**
   - Click on the template editor
   - **IMPORTANT**: Use the HTML code from `EMAILJS_TEMPLATE_CODE.html` file
   - Or copy this:

```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
  <div>A message by {{name}} has been received. Kindly respond at your earliest convenience.</div>
  
  <div style="margin-top: 20px; padding: 15px 0; border-width: 1px 0; border-style: dashed; border-color: lightgrey;">
    <table role="presentation">
      <tr>
        <td style="vertical-align: top">
          <div style="padding: 6px 10px; margin: 0 10px; background-color: aliceblue; border-radius: 5px; font-size: 26px;" role="img">
            👤
          </div>
        </td>
        <td style="vertical-align: top">
          <div style="color: #2c3e50; font-size: 16px">
            <strong>{{name}}</strong>
          </div>
          <div style="color: #7f8c8d; font-size: 13px">
            Email: {{email}}
          </div>
          <div style="color: #cccccc; font-size: 13px">
            {{time}}
          </div>
          <p style="font-size: 16px; color: #2c3e50; line-height: 1.6; margin-top: 15px;">
            {{message}}
          </p>
        </td>
      </tr>
    </table>
  </div>
  
  <div style="margin-top: 20px; padding: 15px; background-color: #f8f9fa; border-radius: 5px; font-size: 11px; color: #7f8c8d;">
    <p style="margin: 0;">This message was sent from your portfolio contact form.</p>
    <p style="margin: 5px 0 0 0;">Reply directly to this email to respond to {{name}}.</p>
  </div>
</div>
```

4. **Configure Reply-To**
   - In the template settings, set:
   - **To Email**: `sudeeppazhoor@gmail.com`
   - **Reply-To**: `{{email}}` (This allows you to reply directly to the sender)
   - **From Name**: `{{name}}`

5. **Save Template**
   - Click "Save"
   - **Copy the Template ID** (looks like: `template_xxxxxxx`)

---

### Step 2: Setup Email Service

1. **Go to Email Services**
   - Visit: https://dashboard.emailjs.com/admin
   - Click "Add New Service"

2. **Choose Gmail** (Recommended)
   - Click on "Gmail"
   - Click "Connect Account"
   - Authorize EmailJS to access your Gmail

3. **Service Created**
   - **Copy the Service ID** (looks like: `service_xxxxxxx`)

---

### Step 3: Get Your Public Key

1. **Go to Account Settings**
   - Visit: https://dashboard.emailjs.com/admin/account
   - Under "General" tab
   - **Copy your Public Key** (looks like: `xYz123AbC456DeF789`)

---

### Step 4: Update Your Code

**Your credentials are already in the code!** I can see:
- Service ID: `service_isredjp`
- Template ID: `template_c78ky2c`
- Public Key: `LmaKTAbrD2jm5UJnh`

**If these are correct, you're all set!** If not, update them in `src/components/Contact.jsx` on lines 28-30.

---

## 🧪 Testing Your Form

1. **Start your dev server**:
   ```bash
   npm run dev
   ```

2. **Navigate to Contact section**

3. **Fill out the form**:
   - Full Name: Test User
   - Email: test@example.com
   - Message: This is a test message

4. **Click "Send Message"**

5. **Check your email**: `sudeeppazhoor@gmail.com`
   - You should receive a beautifully formatted email
   - The email will show the sender's name, email, timestamp, and message

---

## 📋 Template Variables Used

Your form sends these variables to EmailJS:
- `{{name}}` - Full name from the form
- `{{email}}` - Email address from the form
- `{{message}}` - Message from the form
- `{{time}}` - Automatically added timestamp

---

## ✅ Issues Fixed

### 1. Nested `<a>` Tag Error - FIXED ✓
**Problem**: You had `<a>` tags nested inside other `<a>` tags in the Works section.

**Solution**: Replaced anchor tags with `div` elements using `onClick` handlers and `window.open()` for navigation. This maintains the same functionality without HTML validation errors.

### 2. EmailJS Template Variables - FIXED ✓
**Problem**: Form field names didn't match template variables.

**Solution**: Updated form to use `name` instead of `fullName` to match your template's `{{name}}` variable.

---

## 🎨 Form Features

✅ Full Name field
✅ Email Address field  
✅ Message textarea
✅ Send button with loading spinner
✅ Success notification (green)
✅ Error notification (red)
✅ Form validation
✅ Auto-clear after successful send
✅ Timestamp automatically added
✅ Responsive design
✅ Smooth animations

---

## 🔍 Troubleshooting

### Form not sending?
1. Check browser console for errors
2. Verify all three credentials are correct
3. Check EmailJS dashboard logs: https://dashboard.emailjs.com/admin/logs

### Emails not arriving?
1. Check spam folder
2. Verify "To Email" in template is: `sudeeppazhoor@gmail.com`
3. Make sure Gmail service is connected properly

### Template variables not showing?
1. Ensure template uses: `{{name}}`, `{{email}}`, `{{message}}`, `{{time}}`
2. Check that form field names match: `name`, `email`, `message`

---

## 📊 EmailJS Free Tier

- **200 emails/month** (free)
- Upgrade if you need more

---

## 🔐 Security Note

Your Public Key is safe in frontend code - it's designed for client-side use. For extra security, enable reCAPTCHA in EmailJS settings.

---

## 📞 Need Help?

- EmailJS Docs: https://www.emailjs.com/docs/
- EmailJS Dashboard: https://dashboard.emailjs.com/admin

---

**You're all set! Your contact form should be working perfectly now.** 🎉
