<?php

include 'config.php';



$id = $_GET['id'];

$sql = "SELECT * FROM newaccounts WHERE id = '$id'";

$result = $connect->query($sql);
$row = $result->fetch_assoc();

$user = array(
    'id' => $row['id'],
    'firstname' => $row['firstname'],
    'lastname' => $row['lastname'],
);

$response = array(
    'success' => true,
    'user' => $user,
);

echo json_encode($response);











?>