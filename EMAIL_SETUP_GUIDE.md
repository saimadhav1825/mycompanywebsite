# 📧 Automatic Email Response Setup Guide

This guide will help you set up automatic email responses for your contact form. When someone fills out your contact form, they'll receive a professional auto-response email, and you'll get a notification.

## 🚀 Quick Setup (Recommended: Resend)

### Step 1: Create a Resend Account
1. Go to [resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day free)
3. Verify your email address

### Step 2: Get Your API Key
1. In your Resend dashboard, go to "API Keys"
2. Click "Create API Key"
3. Copy the API key (starts with `re_`)

### Step 3: Add Domain (Optional but Recommended)
1. In Resend dashboard, go to "Domains"
2. Add your domain (e.g., `softcerosolutions.com`)
3. Follow DNS setup instructions
4. Or use `onboarding@resend.dev` for testing

### Step 4: Configure Environment Variables
Create a `.env.local` file in your project root:

```env
# Resend Configuration
RESEND_API_KEY=re_your_api_key_here

# Email Addresses
CONTACT_FROM_EMAIL="SoftceroSolutions <noreply@softcerosolutions.com>"
CONTACT_TO_EMAIL=hello@softcerosolutions.com
COMPANY_REPLY_EMAIL=hello@softcerosolutions.com

# Company Information (Optional - uses defaults if not set)
COMPANY_NAME=SoftceroSolutions
COMPANY_WEBSITE=https://softcerosolutions.com
COMPANY_PHONE="+1 (555) 123-4567"
COMPANY_ADDRESS="123 Innovation Drive, Tech City, TC 12345"
```

## 🔧 Alternative Setup (Gmail/SMTP)

If you prefer using Gmail or another SMTP service:

### Step 1: Enable App Passwords (Gmail)
1. Go to Google Account settings
2. Enable 2-Factor Authentication
3. Generate an "App Password" for this application

### Step 2: Configure Environment Variables
```env
# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Email Addresses
CONTACT_FROM_EMAIL="SoftceroSolutions <your-email@gmail.com>"
CONTACT_TO_EMAIL=your-email@gmail.com
COMPANY_REPLY_EMAIL=your-email@gmail.com

# Company Information
COMPANY_NAME=SoftceroSolutions
COMPANY_WEBSITE=https://softcerosolutions.com
COMPANY_PHONE="+1 (555) 123-4567"
COMPANY_ADDRESS="123 Innovation Drive, Tech City, TC 12345"
```

## 📋 Environment Variables Explained

| Variable | Description | Example |
|----------|-------------|---------|
| `RESEND_API_KEY` | Your Resend API key | `re_abc123...` |
| `CONTACT_FROM_EMAIL` | Sender email address | `"SoftceroSolutions <noreply@softcerosolutions.com>"` |
| `CONTACT_TO_EMAIL` | Where notifications are sent | `hello@softcerosolutions.com` |
| `COMPANY_REPLY_EMAIL` | Reply-to address for customers | `hello@softcerosolutions.com` |
| `COMPANY_NAME` | Your company name | `SoftceroSolutions` |
| `COMPANY_WEBSITE` | Your website URL | `https://softcerosolutions.com` |
| `COMPANY_PHONE` | Your phone number | `"+1 (555) 123-4567"` |
| `COMPANY_ADDRESS` | Your business address | `"123 Innovation Drive, Tech City, TC 12345"` |

## 🧪 Testing the Setup

### Step 1: Start Your Development Server
```bash
npm run dev
```

### Step 2: Test the Contact Form
1. Go to your website's contact section
2. Fill out the form with your own email
3. Submit the form

### Step 3: Check Your Emails
You should receive:
1. **Auto-response email** (to the customer's email)
2. **Notification email** (to your business email)

## 📧 What Customers Receive

Customers get a beautiful, professional email with:
- ✅ Confirmation their message was received
- 📋 Summary of their inquiry
- 🎯 Clear next steps (what happens next)
- 📞 Your contact information
- 🔗 Links to your website and social media

## 🚨 What You Receive

You get an urgent notification email with:
- 🚨 New lead alert
- 👤 Customer details (name, email, service)
- 💬 Their full message
- ⚡ Quick action buttons (reply, call)
- ⏰ Timestamp and urgency reminder

## 🔧 Troubleshooting

### Email Not Sending?
1. Check your `.env.local` file exists and has correct values
2. Restart your development server after adding environment variables
3. Check the browser console for errors
4. Verify your API key is correct

### Using Resend but emails not working?
1. Make sure your domain is verified (or use `onboarding@resend.dev` for testing)
2. Check your Resend dashboard for error logs
3. Ensure you're not exceeding rate limits

### Using SMTP but emails not working?
1. Verify SMTP credentials are correct
2. Check if your email provider requires app passwords
3. Ensure firewall/network allows SMTP connections

## 🎨 Customizing Email Templates

Email templates are in `/src/lib/emailTemplates.ts`. You can customize:
- Colors and styling
- Company branding
- Message content
- Call-to-action buttons

## 📈 Production Deployment

### Vercel/Netlify
Add environment variables in your deployment platform's dashboard.

### Other Platforms
Ensure all environment variables are set in your production environment.

## 🔒 Security Best Practices

1. **Never commit `.env.local`** to version control
2. **Use app passwords** instead of real passwords for SMTP
3. **Verify sender domains** in production
4. **Monitor email usage** to prevent abuse

## 💡 Pro Tips

1. **Test with real emails** before going live
2. **Set up email forwarding** so you don't miss inquiries
3. **Monitor response times** - customers expect quick replies
4. **Customize templates** to match your brand
5. **Use Resend** for better deliverability and analytics

## 🆘 Need Help?

If you're having trouble setting up emails:
1. Check the console for error messages
2. Verify all environment variables are set correctly
3. Test with a simple email first
4. Check your email provider's documentation

---

**🎉 That's it!** Your automatic email response system is now ready to impress customers and keep you organized!




