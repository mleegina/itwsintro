<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "orders";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
//
// $value = $_POST["token"];
// $value2 = $_POST["username"];

// attempt insert query execution
// $sql = "INSERT INTO users (grp_token) VALUES ('$value')";
// $spl2 = "UPDATE users SET grp_token=$value2 WHERE name=$value";
 $sql = "INSERT INTO users (grp_token) VALUES ('$_POST[token]')";
if(mysqli_query($conn, $sql)){
    echo "Records added successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
}

// close connection
mysqli_close($conn);
?>
