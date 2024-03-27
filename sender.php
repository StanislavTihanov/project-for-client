<?php
    $name = @$_POST['name'];
	$phone = @$_POST['phone'];

	$to = "tanyasuper200@mail.ru"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = @$email;
	$subject = "Заявка c сайта";

	
	$msg="
    Имя: $name /n
    Телефон: $phone"; 	
	mail($to, $subject, $msg, "From: $from ");

?>

<p>Спасибо! <br>
В ближайшее время с Вами свяжется менеджер
</p>

