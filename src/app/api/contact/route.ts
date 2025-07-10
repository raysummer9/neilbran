import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    // Forward to PHP endpoint
    const phpEndpoint = 'http://neilbrinahacks.it.com/contact-mailer.php'; // <-- Update with your actual PHP script URL
    const res = await fetch(phpEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      return NextResponse.json({ success: false, error: 'Failed to send message.' }, { status: 500 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Server error.' }, { status: 500 });
  }
} 