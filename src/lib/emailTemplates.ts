export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

export interface CompanyInfo {
  name: string;
  website: string;
  phone: string;
  address: string;
  email: string;
}

// Auto-response email template for customers
export function getCustomerAutoResponseTemplate(data: ContactFormData, company: CompanyInfo): { subject: string; html: string } {
  const subject = `Thank you for contacting ${company.name}! We'll be in touch soon.`;
  
  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank you for your inquiry</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f8fafc; }
    .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
    .header { background: linear-gradient(135deg, #10b981, #14b8a6); color: white; padding: 40px 30px; text-align: center; }
    .header h1 { margin: 0; font-size: 28px; font-weight: 700; }
    .header p { margin: 10px 0 0 0; font-size: 16px; opacity: 0.9; }
    .content { padding: 40px 30px; }
    .greeting { font-size: 18px; margin-bottom: 20px; color: #1f2937; }
    .message-box { background: #f0fdf4; border-left: 4px solid #10b981; padding: 20px; margin: 25px 0; border-radius: 8px; }
    .next-steps { background: #eff6ff; border-radius: 8px; padding: 25px; margin: 25px 0; }
    .next-steps h3 { color: #1e40af; margin: 0 0 15px 0; font-size: 18px; }
    .step { display: flex; align-items: flex-start; margin: 12px 0; }
    .step-number { background: #3b82f6; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; margin-right: 12px; flex-shrink: 0; }
    .contact-info { background: #f9fafb; border-radius: 8px; padding: 20px; margin: 25px 0; }
    .contact-item { display: flex; align-items: center; margin: 8px 0; }
    .contact-icon { width: 20px; height: 20px; margin-right: 12px; }
    .footer { background: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb; }
    .footer p { margin: 5px 0; color: #6b7280; font-size: 14px; }
    .social-links { margin: 20px 0; }
    .social-links a { display: inline-block; margin: 0 10px; color: #10b981; text-decoration: none; }
    .button { display: inline-block; background: linear-gradient(135deg, #10b981, #14b8a6); color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; margin: 15px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🚀 Thank You, ${data.name}!</h1>
      <p>We received your inquiry and we're excited to work with you</p>
    </div>
    
    <div class="content">
      <div class="greeting">
        Hi ${data.name},
      </div>
      
      <p>Thank you for reaching out to <strong>${company.name}</strong>! We're thrilled that you're interested in our <strong>${data.service}</strong> services.</p>
      
      <div class="message-box">
        <p><strong>📋 Your Message:</strong></p>
        <p style="margin: 10px 0 0 0; font-style: italic;">"${data.message}"</p>
      </div>
      
      <div class="next-steps">
        <h3>🎯 What Happens Next?</h3>
        <div class="step">
          <div class="step-number">1</div>
          <div>
            <strong>Quick Review (Within 2 hours)</strong><br>
            <span style="color: #6b7280;">We'll review your project details and prepare a personalized response</span>
          </div>
        </div>
        <div class="step">
          <div class="step-number">2</div>
          <div>
            <strong>Personal Response (Within 24 hours)</strong><br>
            <span style="color: #6b7280;">You'll receive a detailed email with project insights and next steps</span>
          </div>
        </div>
        <div class="step">
          <div class="step-number">3</div>
          <div>
            <strong>Free Consultation Call</strong><br>
            <span style="color: #6b7280;">We'll schedule a call to discuss your project in detail and answer any questions</span>
          </div>
        </div>
      </div>
      
      <p>In the meantime, feel free to explore our website to learn more about our services and previous work.</p>
      
      <div style="text-align: center; margin: 30px 0;">
        <a href="${company.website}" class="button">Explore Our Services</a>
      </div>
    </div>
    
    <div class="contact-info">
      <h3 style="margin: 0 0 15px 0; color: #1f2937;">📞 Need to reach us immediately?</h3>
      <div class="contact-item">
        <span style="margin-right: 12px;">📧</span>
        <span><strong>Email:</strong> ${company.email}</span>
      </div>
      <div class="contact-item">
        <span style="margin-right: 12px;">📱</span>
        <span><strong>Phone:</strong> ${company.phone}</span>
      </div>
      <div class="contact-item">
        <span style="margin-right: 12px;">📍</span>
        <span><strong>Address:</strong> ${company.address}</span>
      </div>
    </div>
    
    <div class="footer">
      <p><strong>${company.name}</strong></p>
      <p>Simple Software That Works</p>
      <p style="margin-top: 15px;">This is an automated response. We'll get back to you personally within 24 hours.</p>
      
      <div class="social-links">
        <a href="https://linkedin.com/company/navirasoft">LinkedIn</a> •
        <a href="https://github.com/navirasoft">GitHub</a> •
        <a href="https://twitter.com/navirasoft">Twitter</a>
      </div>
    </div>
  </div>
</body>
</html>`;

  return { subject, html };
}

// Internal notification email template for company
export function getInternalNotificationTemplate(data: ContactFormData, company: CompanyInfo): { subject: string; html: string } {
  const subject = `🚨 New ${data.service} Inquiry from ${data.name}`;
  
  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #f8fafc; }
    .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
    .header { background: linear-gradient(135deg, #dc2626, #ea580c); color: white; padding: 30px; text-align: center; }
    .header h1 { margin: 0; font-size: 24px; font-weight: 700; }
    .content { padding: 30px; }
    .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0; }
    .info-item { background: #f9fafb; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981; }
    .info-item strong { color: #1f2937; display: block; margin-bottom: 5px; }
    .message-box { background: #fef3c7; border: 1px solid #f59e0b; padding: 20px; border-radius: 8px; margin: 20px 0; }
    .actions { background: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center; }
    .button { display: inline-block; background: #3b82f6; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; margin: 5px 10px; }
    .urgent { background: #dc2626; }
    .timestamp { color: #6b7280; font-size: 14px; text-align: center; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🚨 New Lead Alert!</h1>
      <p>Someone is interested in ${data.service}</p>
    </div>
    
    <div class="content">
      <div class="info-grid">
        <div class="info-item">
          <strong>👤 Name</strong>
          ${data.name}
        </div>
        <div class="info-item">
          <strong>📧 Email</strong>
          <a href="mailto:${data.email}">${data.email}</a>
        </div>
        <div class="info-item">
          <strong>🎯 Service</strong>
          ${data.service}
        </div>
        <div class="info-item">
          <strong>⏰ Received</strong>
          ${new Date().toLocaleString()}
        </div>
      </div>
      
      <div class="message-box">
        <strong>💬 Message:</strong>
        <p style="margin: 10px 0 0 0; white-space: pre-wrap;">${data.message}</p>
      </div>
      
      <div class="actions">
        <h3 style="margin: 0 0 15px 0; color: #1e40af;">Quick Actions</h3>
        <a href="mailto:${data.email}?subject=Re: Your ${data.service} Inquiry&body=Hi ${data.name},%0D%0A%0D%0AThank you for your interest in our ${data.service} services. I'd love to discuss your project in more detail.%0D%0A%0D%0ABest regards,%0D%0ANaviraSoft Team" class="button urgent">Reply Now</a>
        <a href="tel:${data.email}" class="button">Call Customer</a>
      </div>
      
      <div class="timestamp">
        <p><strong>⚡ Action Required:</strong> Customer received auto-response. Please follow up within 24 hours for best conversion rates.</p>
      </div>
    </div>
  </div>
</body>
</html>`;

  return { subject, html };
}




