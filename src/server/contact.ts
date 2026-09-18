import { createServerFn } from '@tanstack/react-start';
// @ts-ignore
import nodemailer from 'nodemailer';
import fs from 'node:fs';
import path from 'node:path';

function getGmailCredentials() {
  let user = process.env.GMAIL_USER || '';
  let pass = process.env.GMAIL_APP_PASS || process.env.VITE_GMAIL_APP_PASS || '';

  // If not found in process.env, read directly from .env file at request time
  if (!pass || !user) {
    try {
      const candidatePaths = [
        path.resolve(process.cwd(), '.env'),
        path.resolve(process.cwd(), '../.env'),
        path.resolve(process.cwd(), '../../.env'),
        'd:\\New folder (11)\\Portfolio\\.env'
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
    const { user, pass } = getGmailCredentials();

    if (!pass) {
      return {
        success: false,
        error: 'Missing Gmail App Password. Please check GMAIL_APP_PASS in your .env file.',
      };
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: user,
      to: user,
      subject: `Portfolio Contact: ${data.name}`,
      text: `
        You have a new message from your portfolio contact form:
        
        Name: ${data.name}
        Email: ${data.email}
        Message: ${data.message}
      `,
      replyTo: data.email
    };

    try {
      await transporter.sendMail(mailOptions);
      return { success: true };
    } catch (error: any) {
      console.error('Error sending email:', error);
      let userFriendlyError = 'Failed to send message. Please check server mail configuration.';
      if (error?.message?.includes('535') || error?.message?.includes('BadCredentials')) {
        userFriendlyError = 'Invalid Gmail App Password. Please update your 16-character App Password in the .env file.';
      } else if (error?.message) {
        userFriendlyError = error.message;
      }
      return { success: false, error: userFriendlyError };
    }
  });




