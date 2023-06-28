<?php

require 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $data = json_decode(file_get_contents('php://input'), true);

    $email = $data['email'];
    $firstname = $data['firstname'];
    $lastname = $data['lastname'];
    $birthdate = $data['birthdate'];
    $password = $data['password'];

    $sql = "SELECT * FROM newaccounts WHERE email = '$email'";
    $result = $connect->query($sql);

    if ($result->num_rows === 0) {

        $password = password_hash($password, PASSWORD_DEFAULT);
        $sql = "INSERT INTO newaccounts(email, firstname, lastname, birthdate, password)
                VALUES ('$email', '$firstname', '$lastname', '$birthdate', '$password')";

        if ($connect->query($sql)) {

            $response = array(
                'success' => true,
                'message' => 'You created an account successfully!'
            );

            echo json_encode($response);

        }


    } else {

        $response = array(
            'success' => false,
            'message' => 'Account is already existing!'
        );

        echo json_encode($response);
    }

}

?>