import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    console.log('=== CONTACT FORM DEBUG ===');
    console.log('1. Received form data:', data);
    
    // Forward to PHP endpoint
    const phpEndpoint = 'http://neilbrinahacks.it.com/contact-mailer.php';
    console.log('2. Sending to PHP endpoint:', phpEndpoint);
    
    // Try JSON first
    let res = await fetch(phpEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    
    console.log('3. HTTP status:', res.status);
    console.log('4. HTTP status text:', res.statusText);
    
    let text = await res.text();
    console.log('5. Raw PHP response:', text);
    
    // Try to parse JSON response
    let phpResponse;
    try {
      phpResponse = JSON.parse(text);
      console.log('6. Parsed JSON response:', phpResponse);
    } catch {
      console.log('7. Failed to parse JSON response, trying form data...');
      // If JSON parsing fails, try form data
      const formBody = new URLSearchParams(data).toString();
      console.log('8. Form data:', formBody);
      
      res = await fetch(phpEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody,
      });
      
      console.log('9. Form data HTTP status:', res.status);
      text = await res.text();
      console.log('10. Form data response:', text);
      
      try {
        phpResponse = JSON.parse(text);
        console.log('11. Parsed form data response:', phpResponse);
      } catch {
        console.log('12. Failed to parse form data response');
        return NextResponse.json({ success: false, error: 'Invalid response from server.' }, { status: 500 });
      }
    }
    
    // Check if PHP script returned success
    if (phpResponse && phpResponse.success) {
      console.log('13. SUCCESS: Email sent successfully');
      return NextResponse.json({ success: true });
    } else {
      const error = phpResponse?.error || 'Unknown error from server';
      console.log('14. ERROR:', error);
      return NextResponse.json({ success: false, error }, { status: 500 });
    }
    
  } catch (error) {
    console.log('15. EXCEPTION:', error);
    return NextResponse.json({ success: false, error: 'Server error.' }, { status: 500 });
  }
} 