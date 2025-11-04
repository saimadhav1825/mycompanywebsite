import { NextResponse } from "next/server";
import { getCustomerAutoResponseTemplate, getInternalNotificationTemplate, type ContactFormData, type CompanyInfo } from "@/lib/emailTemplates";

export async function GET() {
  try {
    // Test data
    const testContactData: ContactFormData = {
      name: "John Doe",
      email: "john.doe@example.com",
      service: "Website Development",
      message: "Hi! I'm interested in building a modern e-commerce website for my business. I need something that works great on mobile and has a clean, professional design. My budget is around $5,000-$8,000. Can we schedule a call to discuss this project?"
    };

    const companyInfo: CompanyInfo = {
      name: process.env.COMPANY_NAME || "SoftceroSolutions",
      website: process.env.COMPANY_WEBSITE || "https://softcerosolutions.com",
      phone: process.env.COMPANY_PHONE || "+1 (555) 123-4567",
      address: process.env.COMPANY_ADDRESS || "123 Innovation Drive, Tech City, TC 12345",
      email: process.env.COMPANY_REPLY_EMAIL || "hello@softcerosolutions.com"
    };

    // Generate templates
    const customerEmail = getCustomerAutoResponseTemplate(testContactData, companyInfo);
    const internalEmail = getInternalNotificationTemplate(testContactData, companyInfo);

    // Return HTML preview
    return new Response(`
<!DOCTYPE html>
<html>
<head>
  <title>Email Template Preview</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }
    .preview { background: white; margin: 20px 0; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    h1 { color: #333; border-bottom: 2px solid #10b981; padding-bottom: 10px; }
    h2 { color: #666; margin-top: 30px; }
    .email-frame { border: 1px solid #ddd; border-radius: 4px; overflow: hidden; }
  </style>
</head>
<body>
  <h1>📧 Email Template Preview</h1>
  
  <div class="preview">
    <h2>🤖 Customer Auto-Response Email</h2>
    <p><strong>Subject:</strong> ${customerEmail.subject}</p>
    <div class="email-frame">
      ${customerEmail.html}
    </div>
  </div>

  <div class="preview">
    <h2>🚨 Internal Notification Email</h2>
    <p><strong>Subject:</strong> ${internalEmail.subject}</p>
    <div class="email-frame">
      ${internalEmail.html}
    </div>
  </div>

  <div class="preview">
    <h2>🧪 How to Test</h2>
    <ol>
      <li>Set up your <code>.env.local</code> file with email credentials</li>
      <li>Go to your contact form and submit with your real email</li>
      <li>Check your inbox for both emails</li>
    </ol>
    <p><strong>Environment Variables Needed:</strong></p>
    <ul>
      <li><code>RESEND_API_KEY</code> or SMTP settings</li>
      <li><code>CONTACT_FROM_EMAIL</code></li>
      <li><code>CONTACT_TO_EMAIL</code></li>
      <li><code>COMPANY_REPLY_EMAIL</code></li>
    </ul>
  </div>
</body>
</html>`, {
      headers: { 'Content-Type': 'text/html' }
    });

  } catch (_error) {
    return NextResponse.json({ error: "Failed to generate preview" }, { status: 500 });
  }
}




