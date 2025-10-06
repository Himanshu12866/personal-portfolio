<?php
// CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("HTTP/1.1 200 OK");
    exit(0);
}

try {
    if ($_SERVER["REQUEST_METHOD"] !== "POST") {
        throw new Exception("Invalid request method");
    }

    // Capture React formData fields
    $name    = $_POST["name"] ?? '';
    $email   = $_POST["email"] ?? '';
    $message = $_POST["message"] ?? '';
    $phone   = $_POST["phone"] ?? '';
    $company = $_POST["company"] ?? '';
    $date    = $_POST["date"] ?? '';

    // Mail receiver address
    $to = "manshu010m@gmail.com";
    $subject = "New Contact Form Submission";

    // Prepare email body
    $body = "You have received a new message:\n\n";
    $body .= "Name: " . $name . "\n";
    $body .= "Email: " . $email . "\n";
    $body .= "Phone: " . $phone . "\n";
    $body .= "Company: " . $company . "\n";
    $body .= "Date: " . $date . "\n";
    $body .= "Message:\n" . $message . "\n";

    // Headers
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";

    // Send mail
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode([
            "status" => "success",
            "message" => "Message sent successfully."
        ]);
    } else {
        throw new Exception("Message could not be sent");
    }
} catch (Exception $e) {
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
?>
