import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactSchema } from '@/lib/validators/contact.schema';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();

    // 1. Validate data against schema
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: result.error.flatten() },
        { status: 400 }
      );
    }

    const data = result.data;

    // 2. Prepare Google Sheets Auth (Define this early)
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    // 3. Define the Tasks
    // We wrap them in promises so we can run them in parallel
    const emailAdminTask = resend.emails.send({
      from: 'R1VALS <no-reply@r1vals.com>',
      to: ['darelle@infigroup.co'],
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

    const emailUserTask = resend.emails.send({
      from: 'R1VALS <no-reply@r1vals.com>',
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

    const googleSheetTask = (async () => {
      const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID as string, serviceAccountAuth);
      await doc.loadInfo();
      const sheet = doc.sheetsByIndex[0];
      
      // IMPORTANT: Ensure your Google Sheet Row 1 has these exact headers
      await sheet.addRow({
        Name: data.fullName,
        Email: data.email,
        Phone: data.phone,
        'Interest Type': data.interest,
        'Team Name': data.teamName || 'N/A',
        Social: data.social || 'N/A',
        Date: new Date().toLocaleString('en-MY', { timeZone: 'Asia/Kuala_Lumpur' }), // Adjusted to local time if needed
      });
    })();

    // 4. Execute all tasks in parallel
    await Promise.all([emailAdminTask, emailUserTask, googleSheetTask]);

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}