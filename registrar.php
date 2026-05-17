<?php

require_once "conn.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST"){
    header("Location: index.html");
    exit();
}

$nombre = trim($_POST["nombre"] ?? "");
$email = trim($_POST["email"] ?? "");
$telefono = trim($_POST["telefono"] ?? "");
$mensaje = trim($_POST["mensaje"] ?? "");

 if (empty($nombre) || empty($email)){
    header("Location: index.html?status=vacio#contacto");
    exit();
 }

 if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
    header("Location: index.html?status=error#contacto");
    exit();
 }

 $sql = "INSERT INTO clientes (cli_nombre, cli_email, cli_telefono, cli_mensaje) VALUES (?, ?, ?, ?)";
 $stm = $conn->prepare($sql);
 $stm->bind_param("ssss", $nombre, $email, $telefono, $mensaje);

 if ($stm->execute()){
    header("Location: index.html?status=ok#contacto");
 }
 else {
    header("Location: index.html?status=error#contacto");
 }

 $stm->close();
 $conn->close();
 exit();
 ?>