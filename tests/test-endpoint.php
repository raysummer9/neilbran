<?php
// test-endpoint.php - Simple endpoint test

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

echo json_encode([
    'success' => true,
    'message' => 'PHP endpoint is working!',
    'timestamp' => date('c'),
    'server' => $_SERVER['SERVER_NAME'],
    'method' => $_SERVER['REQUEST_METHOD']
]); 