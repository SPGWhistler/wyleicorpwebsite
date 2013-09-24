<?php
include "classes/phpmailer/class.SMTP.php";
include "classes/phpmailer/class.phpmailer.php";
$mail = new PHPMailer;
$mail->IsSMTP();
$mail->Host = 'email-smtp.us-east-1.amazonaws.com';
$mail->SMTPAuth = true;
$mail->Username = 'AKIAJSWUXNDIETFEUVGQ';
$mail->Password = 'AnES1DLuK8VaFIgB9erfpekyhSn3RzbA9Z65JStezN93';
$mail->SMTPSecure = 'tls';
$mail->From = 'support@appmobi.com';
$mail->FromName = 'wylei support';
$mail->AddReplyTo('support@appmobi.com');
$mail->AddAddress('ken@wylei.com');
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
