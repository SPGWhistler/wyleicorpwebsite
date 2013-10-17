<?php
include "classes/phpmailer/class.SMTP.php";
include "classes/phpmailer/class.phpmailer.php";
$mail = new PHPMailer;
$mail->IsSMTP();
$mail->Host = 'email-smtp.us-east-1.amazonaws.com';
$mail->SMTPAuth = true;
$mail->Username = 'AKIAIP2VBA26DYVGZKNQ';
$mail->Password = 'ArG7jJxeXs0jI3REuzzKTuG+bIsZq4O61v2SbCl95Qgf';
$mail->SMTPSecure = 'tls';
$mail->From = 'contact@wylei.com';
$mail->FromName = 'wylei';
$mail->AddAddress('contact@wylei.com');
$mail->WordWrap = 50;
$mail->IsHTML(true);
$mail->Subject = 'Wylei Contact Form';
$body = "";
$body .= " name: " . $_GET['name'] . "<br>\n";
$body .= " email: " . $_GET['email'] . "<br>\n";
$mail->Body = $body;
$mail->AltBody = $body;
$mail->Send();
echo $_GET['callback'] . '({"success":true});';
?>
