import { createServerFn } from '@tanstack/react-start';
// @ts-ignore
import nodemailer from 'nodemailer';

export const sendEmail = createServerFn({ method: 'POST' })
  .inputValidator((data: { name: string; email: string; message: string }) => data)
  .handler(async ({ data }) => {
    const user = process.env.GMAIL_USER || 'logeshwaranv19@gmail.com';
    const rawPass = process.env.GMAIL_APP_PASS || '';
    const pass = rawPass.replace(/\s+/g, '');

    if (!pass) {
      return {
        success: false,
        error: 'Missing Gmail App Password. If your dev server was running before .env was created, please restart it (Ctrl+C then npm run dev).',
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



