import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactSchema } from '@/lib/validators/contact.schema';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { RivalsWelcomeEmail } from '@/lib/email/RivalsWelcome'; 

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: result.error.flatten() },
        { status: 400 }
      );
    }

    const data = result.data;

    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const emailAdminTask = resend.emails.send({
      from: 'R1VALS <no-reply@r1vals.com>',
      to: ['info@r1vals.com'],
      subject: `New Registration: ${data.interest.toUpperCase()} - ${data.fullName}`,
      // Keep admin email simple HTML or create a separate template
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

    // 2. UPDATE THE USER EMAIL TASK
    const emailUserTask = resend.emails.send({
      from: 'R1VALS <no-reply@r1vals.com>',
      to: [data.email],
      subject: 'Welcome to the R1VALS Protocol',
      // Use the 'react' field instead of 'html'
      react: RivalsWelcomeEmail({ 
        fullName: data.fullName,
        interest: data.interest 
      }),
    });

    const googleSheetTask = (async () => {
      const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID as string, serviceAccountAuth);
      await doc.loadInfo();
      const sheet = doc.sheetsByIndex[0];
      
      await sheet.addRow({
        Name: data.fullName,
        Email: data.email,
        Phone: data.phone,
        'Interest Type': data.interest,
        'Team Name': data.teamName || 'N/A',
        Social: data.social || 'N/A',
        Date: new Date().toLocaleString('en-MY', { timeZone: 'Asia/Kuala_Lumpur' }),
      });
    })();

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