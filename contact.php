<?php
include "classes/phpmailer/class.phpmailer.php";
$mail = new PHPMailer;
$mail->IsSMTP();
$mail->Host = 'email-smtp.us-east-1.amazonaws.com';
$mail->SMTPAuth = true;
$mail->Username = 'AKIAJSWUXNDIETFEUVGQ';
$mail->Password = 'AnES1DLuK8VaFIgB9erfpekyhSn3RzbA9Z65JStezN93';
$mail->SMTPSecure = 'tls';
$mail->From = $_GET['email'];
$mail->FromName = $_GET['name'];
$mail->AddReplyTo($_GET['email']);
$mail->AddAddress('tony@wylei.com');
$mail->WordWrap = 50;
$mail->IsHTML(false);
$mail->Subject = 'Wylei Contact Form';
$body = 'phone: ' . $_GET['phone'];
$body += ' name: ' . $_GET['name'];
$body += ' email: ' . $_GET['email'];
$mail->Body = $body;
$mail->Send();
header('Location: index.html');
?>
