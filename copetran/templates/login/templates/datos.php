<?php $vector=$_POST; ?> <!-- Variables del formulario register -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../static/css/login.css">
    <script src="https://cdn.tailwindcss.com"></script>

</head>

<body class="p-16">
    
    <ul role="list" class="divide-y divide-gray-100">
        <li class="flex justify-between gap-x-6 py-5 bg-gray-200 rounded-lg border-solid border-2 border-gray-600">
        <div class="flex gap-x-4">
            <img class="ml-2 h-12 w-12 flex-none rounded-full bg-gray-50" src="../images/Profile-Avatar-PNG.png" alt="">
            <div class="min-w-0 flex-auto">
            <p id="name" class="text-sm font-semibold leading-6 text-gray-900"> <b> Nombre: </b> <?php echo($vector['nombre']);?> <?php echo($vector['apellido']);?> </p>
            <p id="email" class="text-sm font-semibold leading-6 text-gray-900"> <b> Correo: </b> <?php echo($vector['email']);?></p>
            </div>
        </div>
        <div class="hidden sm:flex sm:flex-col sm:items-end pr-2">
            <p class="text-sm leading-6 text-gray-900"> <b>Contraseña:</b> <?php echo($vector['password']);?> </p>
        </div>
        </li>
    </ul>

</body>