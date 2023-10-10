<?php  
 
if(isset($_POST['submit'])) {
 $mailto = "rendre.greyling@gmail.com";  //My email address
 
 //getting user data entered in form data
 $fromEmail = $_POST['email']; //getting user email address
 $fname = $_POST['firstname']; //getting user first name
 $lname = $_POST['lastname']; //getting user last name
 $phone = $_POST['phone']; //getting user phone number

 $checkbox1 =  $_POST['check-email']; //Checkbox of email
 $checkbox2 =  $_POST['check-sms']; //Checkbox of sms
 $favupdate =  $_POST['favourite-update']; //Radio buttons of favourite update
 $platform =  $_POST['platform']; //Radio buttons of the platofrm the user has the game on
 $tetxArea = $_POST['txtArea']; //Getting the users thoughts

 //Subject lines of the emails.
 $subject1 = "New Sign Up on your website | Satisfactory";
 $subject2 = "Confirmation: Sign Up submitted successfully | Satisfactory"; // For customer confirmation
 
 //Email body I will receive
 $message1 = "User Email: " . $fromEmail . "\n"
 . "User First Name: " . $fname . "\n"
 . "User Last Name: " . $lname . "\n"
 . "User Phone Number: " . $phone . "\n"
 . "Email: " . $checkbox1. "\n"
 . "SMS: " . $checkbox2 . "\n"
 . "Favourite  Update: " . $favupdate . "\n"
 . "Platform: " . $platform . "\n"
 . "Client Message: " . "\n" . $tetxArea;
 
 //Message for user confirmation
 $message2 = "Dear " . $fname . " " . $lname . "\n"
 . "Thank you for signing up to receive news from us regarding Satisfactory" . "\n\n"
 . "You submitted the following message: " . "\n" . $tetxArea . "\n\n"
 . "Regards," . "\n" . "- Satisfactory";
 
 //Email headers
 $headers1 = "From: " . $fromEmail; // user sign up email that I will receive
 $headers2 = "From: " . $mailto; // user sign up confirmation email that the user will receive
 
 //PHP mailer function
 
  $result1 = mail($mailto, $subject1, $message1, $headers1); // This email sent to My address
  //$result2 = mail($fromEmail, $subject2, $message2, $headers2); //This confirmation email to client
 
  //Checking if Mails sent successfully
 
  if ($result1) {
    $outcome = "Your Message was sent Successfully!";
  } else {
    $outcome = "Sorry! Message was not sent, Try again Later.";
  }
  
  echo $outcome;
}
 
?>