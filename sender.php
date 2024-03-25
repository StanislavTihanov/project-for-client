<?php
    $name = $_POST['name'];
	$phone = $_POST['phone'];


	$to = "stas89tihanov@gmail.com"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка c сайта";

	
	$msg="
    Имя: $name /n
    Телефон: $phone /n
	mail($to, $subject, $msg, "From: $from ");

?>

<p>Форма отправлена</p>
