<?php 
// Файлы phpmailer
require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';

// Почему-то без этого говна не работает
$_POST = json_decode(file_get_contents('php://input'), true);

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$email = $_POST['email'];

// Формирование самого письма
$title = "RAFFINATI.ORG заказ";
$body = "
<h2>Детали заказа</h2>
<b>Имя:</b> $name<br>
<b>Почта:</b> $email<br><br>
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP();   
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth   = true;
  //$mail->SMTPDebug = 2;
  $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

  // Настройки вашей почты
  $mail->Host       = 'smtp.yandex.ru'; // SMTP сервера вашей почты
  $mail->Username   = 'raffmailtest'; // Логин на почте
  $mail->Password   = '1234567uU'; // Пароль на почте
  $mail->SMTPSecure = 'ssl';
  $mail->Port       = 465;
  $mail->setFrom('raffmailtest@yandex.ru', 'Ебантяй Кривозадович'); // Адрес самой почты и имя отправителя

  // Получатель письма
  $mail->addAddress('al.nkow@gmail.com');  
  // $mail->addAddress('youremail@gmail.com'); // Ещё один, если нужен

  // Прикрипление файлов к письму
  if (!empty($file['name'][0])) {
      for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
          $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
          $filename = $file['name'][$ct];
          if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
              $mail->addAttachment($uploadfile, $filename);
              $rfile[] = "Файл $filename прикреплён";
          } else {
              $rfile[] = "Не удалось прикрепить файл $filename";
          }
      }   
  }

  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;    

  // Проверяем, отправилось ли сообщение
  if ($mail->send()) {
    $result = "success";
    $status = "ok";
  } else {
    $result = "error";
    $status = "error";
  }

} catch (Exception $e) {
  $result = "error";
  $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);

?>