import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, generateApplicationConfirmationEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Save to database (placeholder - implement with your DB)
    console.log('Cleaner application data:', data);

    // Send admin email
    await sendEmail({
      to: process.env.ADMIN_EMAIL || 'charvigneenterprises@gmail.com',
      subject: `New Cleaner Application - ${data.fullName}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1A5276;">New Cleaner Application</h2>
          <p><strong>Name:</strong> ${data.fullName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>State:</strong> ${data.state}</p>
          <p><strong>Area:</strong> ${data.area}</p>
          <p><strong>Experience Level:</strong> ${data.experience}</p>
          <p><strong>Service Types:</strong> ${data.serviceTypes.join(', ')}</p>
          <p><strong>Own Supplies:</strong> ${data.ownSupplies ? 'Yes' : 'No'}</p>
          <p><strong>Bio:</strong> ${data.bio}</p>
          ${data.referralSource ? `<p><strong>Referral Source:</strong> ${data.referralSource}</p>` : ''}
        </div>
      `,
    });

    // Send applicant confirmation email
    await sendEmail({
      to: data.email,
      subject: 'Application Received - Charvigne CleanConnect',
      html: generateApplicationConfirmationEmail(data.fullName),
    });

    return NextResponse.json(
      { message: 'Application submitted successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Application error:', error);
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    );
  }
}
