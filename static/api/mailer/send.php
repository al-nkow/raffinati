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
$phone = $_POST['phone'];
$address = $_POST['address'];
$notes = $_POST['notes'];
$order = $_POST['order'];
$details = $_POST['details'];
$price = $_POST['price'];

$domain = 'http://raffinati.org/';
$card = '4276 5500 1723 2037';
$orderPhone = '+7 (921) 932-80-89';

// Формирование самого письма
$title = "RAFFINATI.ORG заказ";
$body = "
<div style=\"padding:0;margin:0 auto;width:100%!important;font-family:Helvetica Neue,Helvetica,Arial,sans-serif\">
<table role=\"presentation\" align=\"center\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" bgcolor=\"#F3F2EF\" style=\"background-color:#f3f2ef;table-layout:fixed\">
<tbody><tr>
<td align=\"center\" style=\"padding-top:24px;padding-bottom:24px;\">
<center style=\"width:100%\">
<table role=\"presentation\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" width=\"512\" bgcolor=\"#FFFFFF\" style=\"background-color:#ffffff;margin:0 auto;max-width:512px;width:inherit\">
<tbody><tr>
<td bgcolor=\"#FFFFFF\" style=\"background-color:#ffffff;\">
<div style=\"background-color:#a82d2c;color:#ffffff;padding:18px 24px;font-size:18px;\">
<table role=\"presentation\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" style=\"width:100%!important;min-width:100%!important\">
<tbody>
<tr>
<td align=\"left\" valign=\"middle\" style=\"font-weight:bold;\">
RAFFINATI
</td>
<td valign=\"middle\" width=\"100%\" align=\"right\">
Заказ №$order
</td>
</tr>
</tbody>
</table>
</div>
<div style=\"margin:0;padding:24px;color:#242424;font-weight:400;font-size:20px;line-height:1.333;\">
Здравствуйте, $name!
</div>
<div style=\"margin:0;padding:0 24px 24px 24px;color:#242424;font-weight:200;font-size:16px;line-height:1.5;\">
Вы сделали заказ на сайте <a href=\"$domain\" style=\"word-wrap:normal;color:#0a66c2;word-break:normal;white-space:nowrap;text-decoration:none\" target=\"_blank\">raffinati.org</a><br />
Детали заказа: $details
</div>
<div style=\"margin:0;padding:0 24px 24px 24px;color:#242424;font-weight:400;font-size:20px;line-height:1.333;\">
Всего к оплате: $price руб
</div>
<div style=\"margin:0;padding:0 24px 24px 24px;color:#242424;font-weight:200;font-size:16px;line-height:1.5;\">
Совершить оплату Вы можете путём перечисления стоимости заказа на карту Сбербанка<br>
номер карты: <span style=\"font-weight:400;color:#a82d2c;\">$card</span><br>
Дарья Никитична И.<br>
Или оплатить на странице банка перейдя 
<a href=\"https://secure.openbank.ru/openapi/deploy/open_payments/index.html?partnerId=ip_ikonnikova_d_n&serviceId=24817&note=Пошив%20штор&email=$email&account=$order&amount=$price\">по ссылке</a>
В комментарии к платежу ничего указывать не надо.<br>
Как только Ваш заказ будет готов, мы незамедлительно свяжемся с Вами.<br>
</div>
<div style=\"margin:0;padding:0 24px 8px 24px;color:#242424;font-weight:400;font-size:18px;line-height:1.333;\">
Ваши данные
</div>
<div style=\"margin:0;padding:0 24px 24px 24px;color:#242424;font-weight:200;font-size:14px;line-height:1.5;\">
Имя: <span style=\"font-weight:400;\">$name</span><br>
Email: <span style=\"font-weight:400;\">$email</span><br>
Телефон: <span style=\"font-weight:400;\">$phone</span><br>
Адрес доставки: <span style=\"font-weight:400;\">$address</span><br>
".  ($notes ? "Комментарий к заказу: <span style=\"font-weight:400;\">$notes</span>" : '') ."
</div><div>Вы можете получить информацию о Вашем заказе по номеру телефона +7 (921) 932-80-89</div>
</td></tr></tbody></table></center></td></tr></tbody></table></div>
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
  $mail->setFrom('raffmailtest@yandex.ru', 'RAFFINATI'); // Адрес самой почты и имя отправителя

  // Получатель письма
  $mail->addAddress($email);
  $mail->addAddress('daria@raffinati.org'); // info@raffinati.org
  $mail->addAddress('al.nkow@yandex.ru');
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