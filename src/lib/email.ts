import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

export interface EmailPayload {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

export async function sendEmail(payload: EmailPayload) {
  try {
    const response = await transporter.sendMail({
      from: payload.from || 'noreply@cleanconnect.ng',
      to: payload.to,
      subject: payload.subject,
      html: payload.html,
    });

    return { success: true, data: response };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error };
  }
}

export function generateBookingConfirmationEmail(
  customerName: string,
  serviceType: string,
  date: string,
  time: string,
  cleanerName?: string
) {
  return `
    <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #1A5276 0%, #148F77 100%); padding: 40px; text-align: center; color: white; border-radius: 12px 12px 0 0;">
        <h1 style="margin: 0; font-size: 28px; font-weight: 700;">Booking Confirmed! ✓</h1>
      </div>
      
      <div style="padding: 40px; background: #FDFEFE; border-radius: 0 0 12px 12px;">
        <p style="font-size: 16px; color: #333;">Hi ${customerName},</p>
        
        <p style="font-size: 16px; color: #555;">Thank you for booking with <strong>Charvigne CleanConnect</strong>! Your cleaning service is confirmed.</p>
        
        <div style="background: #D6EAF8; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1A5276; font-weight: 600;">Booking Details</h3>
          <p style="margin: 10px 0; color: #333;"><strong>Service:</strong> ${serviceType}</p>
          <p style="margin: 10px 0; color: #333;"><strong>Date:</strong> ${date}</p>
          <p style="margin: 10px 0; color: #333;"><strong>Time:</strong> ${time}</p>
          ${cleanerName ? `<p style="margin: 10px 0; color: #333;"><strong>Assigned Cleaner:</strong> ${cleanerName}</p>` : ''}
        </div>
        
        <p style="font-size: 16px; color: #555;">Your assigned cleaner will contact you 30 minutes before arrival. You can track their location in real-time via the app.</p>
        
        <p style="margin-top: 30px; font-size: 16px; color: #555;">Questions? Contact us on WhatsApp: <a href="https://wa.me/234816013232" style="color: #148F77; text-decoration: none; font-weight: 600;">+234 816 013 2332</a></p>
        
        <p style="margin-top: 40px; color: #999; font-size: 14px;">Best regards,<br/><strong>The Charvigne CleanConnect Team</strong></p>
      </div>
    </div>
  `;
}

export function generateApplicationConfirmationEmail(applicantName: string) {
  return `
    <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #1A5276 0%, #148F77 100%); padding: 40px; text-align: center; color: white; border-radius: 12px 12px 0 0;">
        <h1 style="margin: 0; font-size: 28px; font-weight: 700;">Application Received! 🎉</h1>
      </div>
      
      <div style="padding: 40px; background: #FDFEFE; border-radius: 0 0 12px 12px;">
        <p style="font-size: 16px; color: #333;">Hi ${applicantName},</p>
        
        <p style="font-size: 16px; color: #555;">Thank you for applying to become a cleaner with <strong>Charvigne CleanConnect</strong>!</p>
        
        <p style="font-size: 16px; color: #555;">We've received your application and our team is reviewing it. We'll get back to you within 48 hours with next steps.</p>
        
        <div style="background: #D6EAF8; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
          <p style="margin: 0; color: #1A5276; font-size: 18px; font-weight: 600;">📱 Keep your phone handy!</p>
          <p style="margin: 10px 0 0 0; color: #666; font-size: 16px;">We'll contact you soon with exciting opportunities.</p>
        </div>
        
        <p style="font-size: 16px; color: #555;">In the meantime, check out our blog for cleaning tips and industry insights.</p>
        
        <p style="margin-top: 40px; color: #999; font-size: 14px;">Best regards,<br/><strong>The Charvigne CleanConnect Team</strong></p>
      </div>
    </div>
  `;
}

export function generateContactFormEmail(
  name: string,
  email: string,
  phone: string,
  subject: string,
  message: string
) {
  return `
    <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #1A5276 0%, #148F77 100%); padding: 40px; text-align: center; color: white; border-radius: 12px 12px 0 0;">
        <h1 style="margin: 0; font-size: 24px; font-weight: 700;">New Contact Form Submission</h1>
      </div>
      
      <div style="padding: 40px; background: #FDFEFE; border-radius: 0 0 12px 12px;">
        <h3 style="color: #1A5276; font-weight: 600;">Submission Details</h3>
        <p style="margin: 10px 0; color: #333;"><strong>Name:</strong> ${name}</p>
        <p style="margin: 10px 0; color: #333;"><strong>Email:</strong> ${email}</p>
        <p style="margin: 10px 0; color: #333;"><strong>Phone:</strong> ${phone}</p>
        <p style="margin: 10px 0; color: #333;"><strong>Subject:</strong> ${subject}</p>
        <h3 style="color: #1A5276; font-weight: 600; margin-top: 20px;">Message</h3>
        <p style="margin: 10px 0; color: #555; white-space: pre-wrap;">${message}</p>
      </div>
    </div>
  `;
}
