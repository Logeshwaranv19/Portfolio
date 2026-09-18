import { createServerFn } from '@tanstack/react-start';
// @ts-ignore
import nodemailer from 'nodemailer';
import fs from 'node:fs';
import path from 'node:path';

function getEnvVar(key: string): string {
  if (process.env[key]) {
    return process.env[key]!;
  }
  try {
    const envPath = path.resolve(process.cwd(), '.env');
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf-8');
      for (const line of content.split('\n')) {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#')) {
          const [k, ...v] = trimmed.split('=');
          if (k.trim() === key) {
            return v.join('=').trim().replace(/^["']|["']$/g, '');
          }
        }
      }
    }
  } catch (e) {
    console.error('Error reading .env file:', e);
  }
  return '';
}

export const sendEmail = createServerFn({ method: 'POST' })
  .inputValidator((data: { name: string; email: string; message: string }) => data)
  .handler(async ({ data }) => {
    const user = getEnvVar('GMAIL_USER') || 'logeshwaranv19@gmail.com';
    const rawPass = getEnvVar('GMAIL_APP_PASS');
    const pass = rawPass.replace(/\s+/g, '');

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


