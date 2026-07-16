import nodemailer from 'nodemailer';
import config from '../config/env.js';

let transporter = null;

if (config.smtp.host && config.smtp.user && config.smtp.pass) {
  transporter = nodemailer.createTransport({
    host: config.smtp.host,
    port: config.smtp.port || 587,
    secure: config.smtp.port == 465, // true for 465, false for other ports
    auth: {
      user: config.smtp.user,
      pass: config.smtp.pass,
    },
  });
}

/**
 * Send an email
 * @param {Object} options - Email options
 * @param {string} options.to - Recipient email
 * @param {string} options.subject - Email subject
 * @param {string} options.html - Email HTML content
 */
export const sendEmail = async ({ to, subject, html }) => {
  if (!transporter) {
    console.warn('⚠️ SMTP not configured. Skipping email send to:', to);
    return;
  }

  try {
    const fromAddress = config.smtp.from || `"TimeMedia Admin" <${config.smtp.user}>`;
    const info = await transporter.sendMail({
      from: fromAddress, // sender address
      to, // list of receivers
      subject, // Subject line
      html, // html body
    });

    console.log('Message sent: %s', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

export const sendNominationConfirmationEmail = async (nomineeName, email) => {
  const subject = 'Your Nomination has been Received - TimeMedia';
  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-w-xl mx-auto;">
      <h2 style="color: #0284c7;">Nomination Received!</h2>
      <p>Dear ${nomineeName},</p>
      <p>Thank you for submitting your nomination. We have successfully received your details and our team will review them shortly.</p>
      <p>We appreciate your interest in our awards and events.</p>
      <p>Best Regards,<br><strong>TimeMedia Team</strong></p>
    </div>
  `;

  await sendEmail({ to: email, subject, html });
};
