import { NextResponse } from "next/server";
import { Resend } from "resend";
import nodemailer from "nodemailer";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, service, message } = body as {
      name: string;
      email: string;
      service: string;
      message: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    const subject = `New inquiry from ${name} — ${service || "General"}`;
    const html = `
      <div>
        <h2>${subject}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      </div>
    `;

    // Try Resend first
    try {
      if (process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL) {
        await resend.emails.send({
          from: process.env.CONTACT_FROM_EMAIL || "Acme <noreply@acmedevstudio.com>",
          to: [process.env.CONTACT_TO_EMAIL],
          subject,
          html,
          reply_to: email,
        });
        return NextResponse.json({ ok: true });
      }
    } catch (err) {
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

      await transporter.sendMail({
        from: process.env.CONTACT_FROM_EMAIL || "Acme <noreply@acmedevstudio.com>",
        to: process.env.CONTACT_TO_EMAIL,
        subject,
        html,
        replyTo: email,
      });
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}


