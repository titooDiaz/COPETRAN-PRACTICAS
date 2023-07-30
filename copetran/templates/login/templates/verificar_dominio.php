<?php
function verificarDominioCorreo($email) {
  $dominio = explode('@', $email)[1];
  
  if (checkdnsrr($dominio, 'MX')) {
    echo 'true';
  } else {
    echo 'false';
  }

}

if (isset($_POST['email'])) {
  $email = $_POST['email'];
  verificarDominioCorreo($email);
}
?>
