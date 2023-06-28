<?php

session_start();

$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'kodego';

$connect = new mysqli($servername, $username, $password, $dbname);

if ($connect->connect_error) {

    die("Connection Error :" . $connect->connect_error);

}


?>