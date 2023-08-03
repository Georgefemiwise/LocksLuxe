<?php
$servername = "localhost"; 
$username = "root"; 
$password = "freDerick@MSQL2023"; // Change this to your MySQL password
$dbname = "locksluxe"; // Replace with your database name

// Create a connection
$conn =  mysqli_connect($servername, $username, $password, $dbname);

// Check connection
// if ($conn->connect_error) {
//     die("Connection failed: " . $conn->connect_error);
// }
// echo "Connected successfully<br>";

?>
