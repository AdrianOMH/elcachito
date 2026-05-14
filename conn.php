<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "elcachito";

try {
    $conn = new mysqli($servername, $username, $password, $dbname);
    
} catch (Exception $e) {
    die("Error al conectar.");
}
?>