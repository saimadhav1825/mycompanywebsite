import { Resend } from "resend";

export type ContactPayload = {
  name: string;
  email: string;
  service: string;
  message: string;
};

export function buildContactEmail(payload: ContactPayload): { subject: string; html: string } {
  const subject = `New inquiry from ${payload.name} — ${payload.service || "General"}`;
  const html = `
    <div>
      <h2>${subject}</h2>
      <p><strong>Name:</strong> ${payload.name}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Service:</strong> ${payload.service}</p>
      <p><strong>Message:</strong></p>
      <p>${payload.message.replace(/\n/g, "<br/>")}</p>
    </div>
  `;
  return { subject, html };
}

export function getResend(): Resend | null {
  if (!process.env.RESEND_API_KEY) return null;
  return new Resend(process.env.RESEND_API_KEY);
}


