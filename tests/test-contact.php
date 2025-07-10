<?php
// test-contact.php - Test contact form processing

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

echo "Testing contact form processing...\n\n";

// Simulate form data
$testData = array(
    'firstName' => 'Test',
    'lastName' => 'User',
    'country' => 'Test Country',
    'email' => 'test@example.com',
    'phone' => '+1234567890',
    'recoveryType' => 'Password Recovery',
    'walletType' => 'Bitcoin',
    'lostAmount' => '1000',
    'privacy' => true
);

echo "Test data:\n";
print_r($testData);
echo "\n";

// Test JSON processing
echo "Testing JSON processing...\n";
$jsonData = json_encode($testData);
echo "JSON data: " . $jsonData . "\n\n";

// Test mail function
echo "Testing mail function...\n";
$to = 'contact@nedtrustprivate.com';
$subject = 'Test Contact Form - NeilBrina Hacks';
$message = "Test contact form submission\n\n";
$message .= "Name: {$testData['firstName']} {$testData['lastName']}\n";
$message .= "Email: {$testData['email']}\n";
$message .= "Phone: {$testData['phone']}\n";
$message .= "Country: {$testData['country']}\n";
$message .= "Recovery Type: {$testData['recoveryType']}\n";
$message .= "Wallet Type: {$testData['walletType']}\n";
$message .= "Lost Amount: {$testData['lostAmount']}\n";

$headers = array();
$headers[] = 'From: Test <noreply@neilbrinahacks.it.com>';
$headers[] = 'Reply-To: ' . $testData['email'];

$mailSent = mail($to, $subject, $message, implode("\r\n", $headers));

if ($mailSent) {
    echo "SUCCESS: Test email sent successfully!\n";
} else {
    echo "FAILED: Test email could not be sent.\n";
}

echo "\nTest completed.\n"; 