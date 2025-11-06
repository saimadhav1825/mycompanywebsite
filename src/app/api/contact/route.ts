import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import nodemailer from "nodemailer";
import { getCustomerAutoResponseTemplate, getInternalNotificationTemplate, type ContactFormData, type CompanyInfo } from "@/lib/emailTemplates";
import { withSecurity, sanitizeObject, handleCORS, corsHeaders } from "@/lib/security";

const resend = new Resend(process.env.RESEND_API_KEY);

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function handlePOST(request: NextRequest) {
  try {
    // Handle CORS preflight
    const corsResponse = handleCORS(request);
    if (corsResponse) return corsResponse;

    const body = await request.json();
    
    // Sanitize all inputs
    const sanitizedBody = sanitizeObject(body);
    const { name, email, service, message } = sanitizedBody as ContactFormData;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Invalid payload. Name, email, and message are required." },
        { status: 400, headers: corsHeaders }
      );
    }

    // Validate email format
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400, headers: corsHeaders }
      );
    }

    // Validate field lengths
    if (name.length > 100) {
      return NextResponse.json(
        { error: "Name is too long (max 100 characters)" },
        { status: 400, headers: corsHeaders }
      );
    }

    if (email.length > 255) {
      return NextResponse.json(
        { error: "Email is too long (max 255 characters)" },
        { status: 400, headers: corsHeaders }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { error: "Message is too long (max 5000 characters)" },
        { status: 400, headers: corsHeaders }
      );
    }

    // Company information from environment variables
    const companyInfo: CompanyInfo = {
      name: process.env.COMPANY_NAME || "SoftceroSolutions",
      website: process.env.COMPANY_WEBSITE || "https://softcerosolutions.com",
      phone: process.env.COMPANY_PHONE || "+1 (555) 123-4567",
      address: process.env.COMPANY_ADDRESS || "123 Innovation Drive, Tech City, TC 12345",
      email: process.env.COMPANY_REPLY_EMAIL || "hello@softcerosolutions.com"
    };

    const contactData: ContactFormData = { name, email, service, message };

    // Generate email templates
    const customerEmail = getCustomerAutoResponseTemplate(contactData, companyInfo);
    const internalEmail = getInternalNotificationTemplate(contactData, companyInfo);

    // Try Resend first
    try {
      if (process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL) {
        // Send internal notification email
        await resend.emails.send({
          from: process.env.CONTACT_FROM_EMAIL || "SoftceroSolutions <noreply@softcerosolutions.com>",
          to: [process.env.CONTACT_TO_EMAIL],
          subject: internalEmail.subject,
          html: internalEmail.html,
          replyTo: email,
        });

        // Send auto-response to customer
        await resend.emails.send({
          from: process.env.CONTACT_FROM_EMAIL || "SoftceroSolutions <noreply@softcerosolutions.com>",
          to: [email],
          subject: customerEmail.subject,
          html: customerEmail.html,
          replyTo: process.env.COMPANY_REPLY_EMAIL || "hello@softcerosolutions.com",
        });

        return NextResponse.json({ ok: true }, { headers: corsHeaders });
      }
    } catch (err) {
      console.error("Resend error:", err);
      // fallback to SMTP
    }

    if (process.env.SMTP_HOST && process.env.CONTACT_TO_EMAIL) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: Boolean(process.env.SMTP_SECURE === "true"),
        auth: process.env.SMTP_USER && process.env.SMTP_PASS ? {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        } : undefined,
      });

      // Send internal notification email
      await transporter.sendMail({
        from: process.env.CONTACT_FROM_EMAIL || "SoftceroSolutions <noreply@softcerosolutions.com>",
        to: process.env.CONTACT_TO_EMAIL,
        subject: internalEmail.subject,
        html: internalEmail.html,
        replyTo: email,
      });

      // Send auto-response to customer
      await transporter.sendMail({
        from: process.env.CONTACT_FROM_EMAIL || "SoftceroSolutions <noreply@softcerosolutions.com>",
        to: email,
        subject: customerEmail.subject,
        html: customerEmail.html,
        replyTo: process.env.COMPANY_REPLY_EMAIL || "hello@softcerosolutions.com",
      });

      return NextResponse.json({ ok: true }, { headers: corsHeaders });
    }

    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 500, headers: corsHeaders }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500, headers: corsHeaders }
    );
  }
}

// Export with security middleware
export const POST = withSecurity(handlePOST);

// Handle OPTIONS for CORS
export async function OPTIONS(request: NextRequest) {
  return handleCORS(request) || new NextResponse(null, { status: 204, headers: corsHeaders });
}


