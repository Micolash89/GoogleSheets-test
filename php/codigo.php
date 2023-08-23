<?php

$nombre = $_POST['nombre']; 
$email = $_POST['correo']; 
$servicio = $_POST['telefono'];

// $to = 'gusarapo_garipilo@hotmail.com'; 
$to = 'espindolajavier2013@gmail.com'; 
$email_subject = "consultorio"; 
$email_body = "Haz recibido un nuevo mensaje 
              \n Nombre: $nombre
              \n Correo: $email
              \n Consulta por el siguiente servicio: $servicio 
              "; 
$headers = "From: $email";

if(mail($to, $email_subject, $email_body, $headers)) {
    echo 'Pronto nos estaremos comunicando con usted!';
}

?>

<br>
<br>
<button><a href="../index.html">Volver</a></button>