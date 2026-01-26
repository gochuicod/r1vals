import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactSchema } from '@/lib/validators/contact.schema';


export async function POST(req: Request) {

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();

    // 1. Validate data against the correct schema
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: result.error.flatten() },
        { status: 400 }
      );
    }

    const data = result.data;

    // 2. Send Admin Email
    await resend.emails.send({
      from: 'R1VALS <no-reply@wisedrive.my>', // Ensure this domain is verified in Resend
      to: ['nurhafiz.zubir@wisedrive.com'],
      subject: `New Registration: ${data.interest.toUpperCase()} - ${data.fullName}`,
      html: `
        <h2>New R1VALS Protocol Entry</h2>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Interest Type:</strong> ${data.interest}</p>
        <p><strong>Team Name:</strong> ${data.teamName || 'N/A'}</p>
        <p><strong>Social/Website:</strong> ${data.social || 'N/A'}</p>
      `,
    });

    // 3. Send User Confirmation Email
    await resend.emails.send({
      from: 'R1VALS <no-reply@wisedrive.my>',
      to: [data.email],
      subject: 'We received your R1VALS application',
      html: `
        <p>Hi ${data.fullName},</p>
        <p>We have received your application for the R1VALS Protocol as a <strong>${data.interest}</strong>.</p>
        <p>Our team is reviewing your details and we will contact you shortly regarding the next steps.</p>
        <br />
        <p>Best,<br>The R1VALS Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}