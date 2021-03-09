<?php /*
$_POST = json_decode(file_get_contents('php://input'), true);
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$address = $_POST['address'];
$notes = $_POST['notes'];
$arr = array(
  'name' => $name, 
  'email' => $email, 
  'phone' => $phone,
  'address' => $address,
  'notes' => $notes
);
echo json_encode($arr, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_NUMERIC_CHECK);
*/?>

<?php/*
$mail->Host = 'ssl://smtp.yandex.ru';
$mail->Port = 465;
$mail->Username = 'Логин@yandex.ru';
$mail->Password = 'Пароль';

В настройках почты нужно разрешить доступ к почтовому ящику с помощью почтовых клиентов
Почта -> Все настройки -> Почтовые программы - там поставить галочки IMAP
*/?>

<?php 

// Файлы phpmailer
require(dirname(__FILE__) . '/PHPMailer.php');
require(dirname(__FILE__) . '/SMTP.php');
require(dirname(__FILE__) . '/Exception.php');
// require '/PHPMailer.php';
// require '/SMTP.php';
// require '/Exception.php';

// Почему-то без этого говна не работает
$_POST = json_decode(file_get_contents('php://input'), true);

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$email = $_POST['email'];

// Формирование самого письма
$title = "Заголовок письма";
$body = "
<h2>Новое письмо</h2>
<b>Имя:</b> $name<br>
<b>Почта:</b> $email<br><br>
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

echo $mail;

// try {
//     $mail->isSMTP();   
//     $mail->CharSet = "UTF-8";
//     $mail->SMTPAuth   = true;
//     //$mail->SMTPDebug = 2;
//     $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

//     // Настройки вашей почты
// // $mail->Host = 'ssl://smtp.yandex.ru';
// // $mail->Port = 465;
// // $mail->Username = 'Логин@yandex.ru';
// // $mail->Password = 'Пароль';
//     $mail->Host       = 'smtp.yandex.ru'; // SMTP сервера вашей почты
//     $mail->Username   = 'raffmailtest'; // Логин на почте
//     $mail->Password   = '1234567uU'; // Пароль на почте
//     $mail->SMTPSecure = 'ssl';
//     $mail->Port       = 465;
//     $mail->setFrom('raffmailtest@yandex.ru', 'Захар Петрович'); // Адрес самой почты и имя отправителя

//     // Получатель письма
//     $mail->addAddress('al.nkow@gmail.com');  
//     // $mail->addAddress('youremail@gmail.com'); // Ещё один, если нужен

//     // Прикрипление файлов к письму
//     if (!empty($file['name'][0])) {
//         for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
//             $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
//             $filename = $file['name'][$ct];
//             if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
//                 $mail->addAttachment($uploadfile, $filename);
//                 $rfile[] = "Файл $filename прикреплён";
//             } else {
//                 $rfile[] = "Не удалось прикрепить файл $filename";
//             }
//         }   
//     }
//     // Отправка сообщения
//     $mail->isHTML(true);
//     $mail->Subject = $title;
//     $mail->Body = $body;    

//     // Проверяем отравленность сообщения
//     if ($mail->send()) {$result = "success";} 
//     else {$result = "error";}

// } catch (Exception $e) {
//     $result = "error";
//     $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
// }

// // Отображение результата
// echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);

?>





<?php

if($_SERVER['REQUEST_METHOD'] == "POST") {
	//$email = trim($_POST['email']);
	$name = htmlspecialchars($_POST['name']);

	// на яндекс приходит имя в непонятной кодировке
	// потому в тему письма пердаем перекодированное имя
	$name2 = '=?UTF-8?B?'.base64_encode($name).'?=';

	$phone = htmlspecialchars($_POST['phone']);
	$subject = htmlspecialchars($_POST['subject']);
	$email = htmlspecialchars($_POST['email']);
	$message = htmlspecialchars($_POST['message']);

	if(!$message) {
		$message = $subject."\r\n"."Поступила заявка от посетителя сайта"."\r\n".$name.", номер телефона: ".$phone;
	}

	// ----------------------------------------
	$error = '';
	if(!$name) {
		$error .= 'Укажите Ваше имя. ';
	}
	if(!$phone) {
		$error .= 'Укажите номер телефона. ';
	}
	// if( var_dump( filter_var($email, FILTER_VALIDATE_EMAIL) ) ) {
	// 	$error .= 'Введите корректный e-mail. ';
	// }
	if(!$message || strlen($message) < 1) {
		$error .= "Введите ваше сообщение. ";
	}
	// ----------------------------------------

	// Check email ----------------------------
	function ValidateEmail($value) 	{
		$regex = '|^[-0-9a-z_\.]+@[-0-9a-z_^\.]+\.[a-z]{2,6}$|i';
		if($value == '') {
			return false;
		} else {
			$string = preg_replace($regex, '', $value);
		}
		return empty($string) ? true : false;
	}
	if(!$email) {
		$error .= 'Не заполнено поле e-mail. ';
	}
	if($email && !ValidateEmail($email)) 	{
		$error .= 'Введите корректный e-mail. ';
	}
	// ----------------------------------------

	if(!$error) {
		$mail = mail('info@raffinati.org', $subject, $message,
		"From: ".$name2." <".$email.">"."\r\n"
		."Reply-To: ".$email."\r\n"
		."X-Mailer: PHP/" . phpversion());
		if ($mail) {
			echo 'OK';
		}
	} else {
		//echo '<div class="notification_error">'.$error.'</div>';	
		echo $error;
	}
}

?>