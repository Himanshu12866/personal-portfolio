<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // React formData ke fields ko capture karte hain
    $name    = $_POST["name"] ?? '';
    $email   = $_POST["email"] ?? '';
    $message = $_POST["message"] ?? '';
    $phone   = $_POST["phone"] ?? '';
    $company = $_POST["company"] ?? '';
    $date    = $_POST["date"] ?? '';

    // Mail receiver address (apna email daal dena)
    $to = "manshu010m@gmail.com";
    $subject = "New Contact Form Submission";

    // Mail body
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

    // Mail bhejo
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["status" => "success", "message" => "Message sent successfully."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Message could not be sent."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request."]);
}
?>
