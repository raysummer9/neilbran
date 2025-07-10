<?php
// test-mail-simple.php - Simple mail test

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

echo "Testing mail() function...\n\n";

// Test 1: Simple text email
echo "Test 1: Sending simple text email...\n";
$to = 'contact@nedtrustprivate.com';
$subject = 'Test Email from Server';
$message = "This is a test email sent from the server.\n\n";
$message .= "Server: " . $_SERVER['SERVER_NAME'] . "\n";
$message .= "Time: " . date('Y-m-d H:i:s T') . "\n";
$message .= "PHP Version: " . phpversion() . "\n";

$headers = array();
$headers[] = 'From: Test <noreply@neilbrinahacks.it.com>';
$headers[] = 'Reply-To: noreply@neilbrinahacks.it.com';
$headers[] = 'X-Mailer: PHP/' . phpversion();

$mailSent = mail($to, $subject, $message, implode("\r\n", $headers));

if ($mailSent) {
    echo "✓ SUCCESS: Test email sent successfully!\n";
    echo "Check your email at: contact@nedtrustprivate.com\n";
} else {
    echo "✗ FAILED: Test email could not be sent.\n";
}

echo "\n";

// Test 2: HTML email (like the contact form)
echo "Test 2: Sending HTML email...\n";
$htmlSubject = 'Test HTML Email from Server';
$htmlMessage = "
<html>
<head>
    <title>Test Email</title>
</head>
<body>
    <h2>Test HTML Email</h2>
    <p>This is a test HTML email sent from the server.</p>
    <p><strong>Server:</strong> " . $_SERVER['SERVER_NAME'] . "</p>
    <p><strong>Time:</strong> " . date('Y-m-d H:i:s T') . "</p>
    <p><strong>PHP Version:</strong> " . phpversion() . "</p>
</body>
</html>";

$htmlHeaders = array();
$htmlHeaders[] = 'MIME-Version: 1.0';
$htmlHeaders[] = 'Content-Type: text/html; charset=UTF-8';
$htmlHeaders[] = 'From: Test <noreply@neilbrinahacks.it.com>';
$htmlHeaders[] = 'Reply-To: noreply@neilbrinahacks.it.com';
$htmlHeaders[] = 'X-Mailer: PHP/' . phpversion();

$htmlMailSent = mail($to, $htmlSubject, $htmlMessage, implode("\r\n", $htmlHeaders));

if ($htmlMailSent) {
    echo "✓ SUCCESS: HTML test email sent successfully!\n";
} else {
    echo "✗ FAILED: HTML test email could not be sent.\n";
}

echo "\nTest completed.\n";
echo "\nIf emails are not being received, check:\n";
echo "1. Spam/junk folder\n";
echo "2. Email server configuration\n";
echo "3. Contact your hosting provider about mail settings\n"; 