import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, generateContactFormEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Save to database (placeholder - implement with your DB)
    console.log('Contact form data:', data);

    // Send admin email
    await sendEmail({
      to: process.env.ADMIN_EMAIL || 'charvigneenterprises@gmail.com',
      subject: `New Contact Form - ${data.subject}`,
      html: generateContactFormEmail(
        data.fullName,
        data.email,
        data.phone,
        data.subject,
        data.message
      ),
    });

    // Send customer confirmation email
    await sendEmail({
      to: data.email,
      subject: 'We received your message - Charvigne CleanConnect',
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1A5276 0%, #148F77 100%); padding: 40px; text-align: center; color: white; border-radius: 12px 12px 0 0;">
            <h1 style="margin: 0; font-size: 24px; font-weight: 700;">Message Received!</h1>
          </div>
          <div style="padding: 40px; background: #FDFEFE; border-radius: 0 0 12px 12px;">
            <p style="font-size: 16px; color: #333;">Hi ${data.fullName},</p>
            <p style="font-size: 16px; color: #555;">Thank you for reaching out to Charvigne CleanConnect. We have received your message and will get back to you within 2 hours.</p>
            <p style="font-size: 16px; color: #555;">In the meantime, feel free to contact us via WhatsApp: <a href="https://wa.me/234816013232" style="color: #148F77;">+234 816 013 2332</a></p>
            <p style="margin-top: 40px; color: #999; font-size: 14px;">Best regards,<br/>The Charvigne CleanConnect Team</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
