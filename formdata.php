<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['name'])) {$name = $_POST['name'];}
    if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
    if (isset($_POST['comment'])) {$phone = $_POST['comment'];}
//    if (isset($_POST['email'])) {$email = $_POST['email'];}

    $to = "info@artbysofia.uz"; /*Укажите адрес, га который должно приходить письмо*/
    $sendfrom   = "mr.pokeman@mail.ru"; /*Укажите адрес, с которого будет приходить письмо, можно не настоящий, нужно для формирования заголовка письма*/
    $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    $subject = "От поситителя сайта";
    $message = "<b>Заявка из сайта ArtBySofia</b> <br><br> <b>Имя:</b> $name <br> <b>Телефон:</b> $phone <br><b>Комментарии:</b> $comment <br>";
    mail ($to, $subject, $message, $headers);
}
?>
<!--<b>Имя пославшего:</b> $name <br><b>Телефон:</b> $phone <br> <b>Сумма:</b> $summa <br> <b>Срок:</b> $srok <br> <b>Аванс:</b> $avans-->