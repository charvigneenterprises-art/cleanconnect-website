import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, generateBookingConfirmationEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Save to database (placeholder - implement with your DB)
    console.log('Booking data:', data);

    // Send admin email
    await sendEmail({
      to: process.env.ADMIN_EMAIL || 'charvigneenterprises@gmail.com',
      subject: `New Booking Request - ${data.serviceType}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1A5276;">New Booking Submission</h2>
          <p><strong>Name:</strong> ${data.fullName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Service:</strong> ${data.serviceType}</p>
          <p><strong>Date:</strong> ${data.date}</p>
          <p><strong>Time:</strong> ${data.time}</p>
          <p><strong>Area:</strong> ${data.area}</p>
          <p><strong>Address:</strong> ${data.address}</p>
          <p><strong>Payment Method:</strong> ${data.paymentMethod}</p>
          ${data.specialRequests ? `<p><strong>Special Requests:</strong> ${data.specialRequests}</p>` : ''}
        </div>
      `,
    });

    // Send customer confirmation email
    await sendEmail({
      to: data.email,
      subject: 'Booking Confirmed - Charvigne CleanConnect',
      html: generateBookingConfirmationEmail(
        data.fullName,
        data.serviceType,
        data.date,
        data.time
      ),
    });

    return NextResponse.json(
      { message: 'Booking created successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { error: 'Failed to process booking' },
      { status: 500 }
    );
  }
}
