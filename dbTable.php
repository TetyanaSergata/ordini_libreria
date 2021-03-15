<?php
include 'config/dbConn.php';
// Create the connection
$conn = new mysqli(DB_SERVER, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT);
// var_dump($conn);
// Check the connection
if ($conn->connect_error) {
  echo 'Errore di connesione:' . $conn->connect_error; die();
}

// Set the question to the Database - Create the connection to the database
$query = 'SELECT * FROM ordini';
// Run the query and take the result
$order = $conn->query($query);
// var_dump($order);
// Close the connection
$conn->close();
?>
