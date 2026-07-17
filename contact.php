<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Get form fields and remove whitespace
    $firstName   = strip_tags(trim($_POST["first_name"]));
    $lastName    = strip_tags(trim($_POST["last_name"]));
    $email       = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone       = strip_tags(trim($_POST["phone"]));
    $inquiryType = strip_tags(trim($_POST["inquiry_type"]));
    $message     = trim($_POST["message"]);

    // Check that data was sent to the mailer
    if ( empty($firstName) || empty($phone) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL) ) {
        // Set a 400 (bad request) response code and exit
        http_response_code(400);
        echo "Please complete the form and try again.";
        exit;
    }

    // Set the recipient email address
    // FIXME: Update this to the user's actual email if they want it to go somewhere else
    $recipient = "ranjan3606@gmail.com";

    // Set the email subject
    $subject = "New Contact Form Inquiry: " . $inquiryType . " from " . $firstName;

    // Build the email content
    $email_content = "Name: $firstName $lastName\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n";
    $email_content .= "Inquiry Type: $inquiryType\n\n";
    $email_content .= "Message:\n$message\n";

    // Build the email headers
    $email_headers = "From: $firstName <$email>";

    // Send the email
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        // Set a 200 (okay) response code
        http_response_code(200);
        // Redirect back to the contact page with a success parameter
        header("Location: contact.html?success=1");
        exit;
    } else {
        // Set a 500 (internal server error) response code
        http_response_code(500);
        echo "Oops! Something went wrong and we couldn't send your message.";
        exit;
    }

} else {
    // Not a POST request, set a 403 (forbidden) response code
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
    exit;
}
?>
