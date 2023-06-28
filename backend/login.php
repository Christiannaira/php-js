<?php

include 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $data = json_decode(file_get_contents('php://input'), true);

    $email = $data['email'];
    $password = $data['password'];

    $sql = "SELECT * FROM newaccounts WHERE email = '$email'";
    $result = $connect->query($sql);

    if ($result->num_rows > 0) {

        $row = $result->fetch_assoc();
        $hashedPassword = $row['password'];

        if (password_verify($password, $hashedPassword)) {

            $response = array(
                'success' => true,
                'message' => "You logged in successfully!"
            );

            echo json_encode($response);

        } else {

            $response = array(
                'success' => false,
                'message' => "Password incorrect!"
            );

            echo json_encode($response);

        }

    } else {

        $response = array(
            'success' => false,
            'message' => "Account doesn't exist!"
        );

        echo json_encode($response);

    }

}

?>