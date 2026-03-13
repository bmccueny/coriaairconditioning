import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const { Resend } = await import('resend');
    
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const body: ContactFormData = await request.json();

    const { name, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    const emailContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #830f14; color: white; padding: 20px; text-align: center; }
    .content { background: #f9f9f9; padding: 20px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #555; }
    .value { color: #333; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Contact Form Submission</h1>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Name:</span>
        <span class="value">${name}</span>
      </div>
      <div class="field">
        <span class="label">Email:</span>
        <span class="value">${email}</span>
      </div>
      <div class="field">
        <span class="label">Phone:</span>
        <span class="value">${phone || 'Not provided'}</span>
      </div>
      <div class="field">
        <span class="label">Service Interested In:</span>
        <span class="value">${service || 'Not specified'}</span>
      </div>
      <div class="field">
        <span class="label">Message:</span>
        <p class="value">${message}</p>
      </div>
    </div>
  </div>
</body>
</html>
    `;

    const data = await resend.emails.send({
      from: 'Coria HVAC Contact <onboarding@resend.dev>',
      to: ['bmccueny@gmail.com'],
      subject: `New Contact Form: ${name} - ${service || 'General Inquiry'}`,
      html: emailContent,
      replyTo: email,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
