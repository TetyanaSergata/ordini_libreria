<?php
include 'config/dbConn.php';
// Create the connection
$conn = new mysqli(DB_SERVER, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT);
// var_dump($conn);
// Check the connection
if ($conn->connect_error) {
    echo 'Errore di connesione:' . $conn->connect_error;
    die();
}
$orderBy = $_POST["order"];

// Set the query to the Database - Create the connection to the database
$query = 'SELECT * FROM ordini ORDER BY `data` ' . $orderBy;
// Run the query and take the result
$order = $conn->query($query);
// Close the connection
$conn->close();

//Create an empty array
$result = array();
while ($row = $order->fetch_assoc()) {
    $result[] = $row;
}
//Encode an array into a JSON object
echo json_encode($result);
