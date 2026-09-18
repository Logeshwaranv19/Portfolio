import { createServerFn } from '@tanstack/react-start';
// @ts-ignore
import nodemailer from 'nodemailer';
import fs from 'node:fs';
import path from 'node:path';

function getEnvVar(key: string): string {
  // 1. Try process.env
  if (process.env[key]) return process.env[key]!;
  if (process.env[`VITE_${key}`]) return process.env[`VITE_${key}`]!;

  // 2. Try import.meta.env (Vite)
  try {
    const metaEnv = (import.meta as any).env;
    if (metaEnv) {
      if (metaEnv[key]) return metaEnv[key];
      if (metaEnv[`VITE_${key}`]) return metaEnv[`VITE_${key}`];
    }
  } catch {}

  // 3. Search candidate locations for .env file
  try {
    const cwd = process.cwd();
    const candidates = [
      path.resolve(cwd, '.env'),
      path.resolve(cwd, '../.env'),
      path.resolve(cwd, '../../.env'),
    ];
    
    // @ts-ignore
    if (typeof __dirname !== 'undefined') {
      // @ts-ignore
      candidates.push(path.resolve(__dirname, '.env'));
      // @ts-ignore
      candidates.push(path.resolve(__dirname, '../.env'));
      // @ts-ignore
      candidates.push(path.resolve(__dirname, '../../.env'));
      // @ts-ignore
      candidates.push(path.resolve(__dirname, '../../../.env'));
    }

    for (const envPath of candidates) {
      if (fs.existsSync(envPath)) {
        const content = fs.readFileSync(envPath, 'utf-8');
        for (const line of content.split('\n')) {
          const trimmed = line.trim();
          if (trimmed && !trimmed.startsWith('#')) {
            const [k, ...v] = trimmed.split('=');
            const trimmedKey = k.trim();
            if (trimmedKey === key || trimmedKey === `VITE_${key}`) {
              const val = v.join('=').trim().replace(/^["']|["']$/g, '');
              if (val) return val;
            }
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


