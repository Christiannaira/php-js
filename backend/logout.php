<?php

require 'config.php';

session_destroy();

$response = array(
    'success' => true,
    'message' => 'You logged out successfully!'
);

echo json_encode($response);

?>