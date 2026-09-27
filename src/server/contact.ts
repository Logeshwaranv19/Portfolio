import { createServerFn } from '@tanstack/react-start';
// @ts-ignore
import nodemailer from 'nodemailer';
import fs from 'node:fs';
import path from 'node:path';

function getGmailCredentials() {
  let user = process.env.GMAIL_USER || '';
  let pass = process.env.GMAIL_APP_PASS || process.env.VITE_GMAIL_APP_PASS || '';

  if (!pass || !user) {
    try {
      const candidatePaths = [
        path.resolve(process.cwd(), '.env'),
        path.resolve(process.cwd(), '../.env'),
        path.resolve(process.cwd(), '../../.env'),
      ];

      for (const envPath of candidatePaths) {
        if (fs.existsSync(envPath)) {
          const content = fs.readFileSync(envPath, 'utf-8');
          for (const line of content.split('\n')) {
            const trimmed = line.trim();
            if (trimmed && !trimmed.startsWith('#')) {
              const [k, ...v] = trimmed.split('=');
              const key = k.trim();
              const val = v.join('=').trim().replace(/^["']|["']$/g, '');
              if (key === 'GMAIL_USER' || key === 'VITE_GMAIL_USER') {
                if (!user) user = val;
              }
              if (key === 'GMAIL_APP_PASS' || key === 'VITE_GMAIL_APP_PASS') {
                if (!pass) pass = val;
              }
            }
          }
          if (user && pass) break;
        }
      }
    } catch (err) {
      console.error('Error reading .env dynamically:', err);
    }
  }

  return {
    user: user || 'logeshwaranv19@gmail.com',
    pass: (pass || '').replace(/\s+/g, '')
  };
}

export const sendEmail = createServerFn({ method: 'POST' })
  .inputValidator((data: { name: string; email: string; message: string }) => data)
  .handler(async ({ data }) => {
    // 1. First try EmailJS REST API
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Origin': 'http://localhost:3000',
        },
        body: JSON.stringify({
          service_id: 'service_hveptng',
          template_id: 'template_fleygfc',
          user_id: 'dolJchDKVTn_oqmkB',
          accessToken: 'mrS6ir80AMbXYCvjdQvkR',
          template_params: {
            name: data.name,
            email: data.email,
            message: data.message,
            from_name: data.name,
            from_email: data.email,
            reply_to: data.email,
          },
        }),
      });

      const text = await response.text();
      if (response.ok || text === 'OK') {
        return { success: true };
      }
    } catch (e) {
      // Fallback below
    }

    // 2. Direct Nodemailer fallback
    try {
      const { user, pass } = getGmailCredentials();
      if (!pass) {
        return { success: false, error: 'Failed to send email via EmailJS or Nodemailer' };
      }

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user, pass },
      });

      await transporter.sendMail({
        from: user,
        to: user,
        subject: `Portfolio Contact: ${data.name}`,
        text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
        replyTo: data.email,
      });

      return { success: true };
    } catch (error: any) {
      console.error('Error sending email:', error);
      return { success: false, error: error?.message || 'Failed to send message.' };
    }
  });

