import { NextResponse } from "next/server";
import { Resend } from "resend";
import nodemailer from "nodemailer";
import { getCustomerAutoResponseTemplate, getInternalNotificationTemplate, type ContactFormData, type CompanyInfo } from "@/lib/emailTemplates";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, service, message } = body as ContactFormData;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
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

        return NextResponse.json({ ok: true });
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
        from: process.env.CONTACT_FROM_EMAIL || "NaviraSoft <noreply@navirasoft.com>",
        to: process.env.CONTACT_TO_EMAIL,
        subject: internalEmail.subject,
        html: internalEmail.html,
        replyTo: email,
      });

      // Send auto-response to customer
      await transporter.sendMail({
        from: process.env.CONTACT_FROM_EMAIL || "NaviraSoft <noreply@navirasoft.com>",
        to: email,
        subject: customerEmail.subject,
        html: customerEmail.html,
        replyTo: process.env.COMPANY_REPLY_EMAIL || "hello@softcerosolutions.com",
      });

      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  } catch (_error) {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}


