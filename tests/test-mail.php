<?php
// test-mail.php - Test cPanel mail() function

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

echo "Testing cPanel mail() function...\n";

$to = 'contact@nedtrustprivate.com';
$subject = 'Test Email from cPanel';
$message = "This is a test email to verify that the mail() function works on your cPanel hosting.\n\n";
$message .= "Server: " . $_SERVER['SERVER_NAME'] . "\n";
$message .= "Time: " . date('Y-m-d H:i:s T') . "\n";
$message .= "PHP Version: " . phpversion() . "\n";

$headers = array();
$headers[] = 'From: Test <noreply@neilbrinahacks.it.com>';
$headers[] = 'Reply-To: noreply@neilbrinahacks.it.com';
$headers[] = 'X-Mailer: PHP/' . phpversion();

$mailSent = mail($to, $subject, $message, implode("\r\n", $headers));

if ($mailSent) {
    echo "SUCCESS: Test email sent successfully!\n";
    echo "Check your email at: contact@nedtrustprivate.com\n";
} else {
    echo "FAILED: Test email could not be sent.\n";
    echo "This might indicate:\n";
    echo "1. Mail function is disabled on your hosting\n";
    echo "2. Email configuration issues\n";
    echo "3. Server restrictions\n";
}

// Also test with HTML email
echo "\nTesting HTML email...\n";

$htmlMessage = "
<html>
<head>
    <title>Test Email</title>
</head>
<body>
    <h2>Test Email from cPanel</h2>
    <p>This is a test email to verify that the mail() function works on your cPanel hosting.</p>
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

$htmlMailSent = mail($to, $subject . ' (HTML)', $htmlMessage, implode("\r\n", $htmlHeaders));

if ($htmlMailSent) {
    echo "SUCCESS: HTML test email sent successfully!\n";
} else {
    echo "FAILED: HTML test email could not be sent.\n";
} 