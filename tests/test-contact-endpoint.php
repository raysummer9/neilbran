<?php
// test-contact-endpoint.php - Test contact form endpoint

// Simulate a POST request to contact-mailer.php
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

echo "Testing contact-mailer.php endpoint...\n\n";

// Test JSON POST
echo "1. Testing JSON POST request...\n";
$jsonData = json_encode($testData);

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'http://neilbrinahacks.it.com/contact-mailer.php');
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonData);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'Content-Length: ' . strlen($jsonData)
));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 30);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$error = curl_error($ch);
curl_close($ch);

echo "HTTP Code: " . $httpCode . "\n";
echo "Response: " . $response . "\n";
if ($error) {
    echo "CURL Error: " . $error . "\n";
}
echo "\n";

// Test form POST
echo "2. Testing form POST request...\n";
$formData = http_build_query($testData);

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'http://neilbrinahacks.it.com/contact-mailer.php');
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $formData);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/x-www-form-urlencoded'
));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 30);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$error = curl_error($ch);
curl_close($ch);

echo "HTTP Code: " . $httpCode . "\n";
echo "Response: " . $response . "\n";
if ($error) {
    echo "CURL Error: " . $error . "\n";
}
echo "\n";

echo "Test completed.\n"; 