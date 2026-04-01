import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';
import { UserConfirmationEmail } from '@/components/emails/UserConfirmationEmail';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Zod Schema for Input Validation
const BookCallSchema = z.object({
  name: z.string().min(2, 'Name is required and must be valid.'),
  email: z.string().email('Invalid email address format.'),
  phone: z.string().min(7, 'Phone number is required.'),
  description: z.string().min(10, 'Please provide more details in the description.'),
});

export async function POST(req: Request) {
  try {
    // 1. Parse and Validate Request Body
    const body = await req.json();
    const validatedData = BookCallSchema.safeParse(body);

    if (!validatedData.success) {
      return NextResponse.json(
        { 
          error: 'Validation failed', 
          details: validatedData.error.flatten().fieldErrors 
        },
        { status: 400 }
      );
    }

    const { name, email, phone, description } = validatedData.data;

    // 2. Send User Confirmation Email (priority)
    const userResult = await resend.emails.send({
      from: 'Hyon Technologies <onboarding@resend.dev>',
      to: email,
      subject: 'Call Confirmation - Hyon Technologies',
      react: UserConfirmationEmail({ name }),
    });

    if (userResult.error) {
      console.error('Error sending User email:', userResult.error);
      return NextResponse.json({ error: 'Failed to send confirmation email.' }, { status: 500 });
    }

    // 3. Send Admin Notification (best-effort — don't block the user response)
    try {
      const adminResult = await resend.emails.send({
        from: 'Hyon Technologies <onboarding@resend.dev>',
        to: process.env.ADMIN_EMAIL!,
        subject: `📞 New Call Booking: ${name}`,
        text: [
          '━━━ NEW BOOKING REQUEST ━━━',
          '',
          `Name:    ${name}`,
          `Email:   ${email}`,
          `Phone:   ${phone}`,
          '',
          '── Message ──',
          description,
          '',
          '━━━━━━━━━━━━━━━━━━━━━━━━━━',
        ].join('\n'),
      });

      if (adminResult.error) {
        console.error('Error sending Admin email (non-blocking):', adminResult.error);
      }
    } catch (adminError) {
      console.error('Admin email dispatch failed (non-blocking):', adminError);
    }

    // 4. Success — user always gets a response
    return NextResponse.json(
      { success: true, message: 'Call booked successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Book Call Route Error:', error);
    return NextResponse.json(
      { error: 'An unexpected internal server error occurred.' },
      { status: 500 }
    );
  }
}
