import { createServerFn } from '@tanstack/react-start';
// @ts-ignore
import nodemailer from 'nodemailer';

export const sendEmail = createServerFn({ method: 'POST' })
  .inputValidator((data: { name: string; email: string; message: string }) => data)
  .handler(async ({ data }) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'logeshwaranv19@gmail.com',
        pass: 'ndjh gpte bxir oulq',
      },
    });

    const mailOptions = {
      from: 'logeshwaranv19@gmail.com',
      to: 'logeshwaranv19@gmail.com',
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
      return { success: false, error: error.message || 'Failed to send email' };
    }
  });
