<?php

// Replace these with your database credentials
require('connection.php');

// Replace these credentials with your database connection details
// $host = 'localhost';
// $dbname = 'ecommerce_db';
// $username = 'your_username';
// $password = 'your_password';

// try {
//     // Connect to the database
//     $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
//     $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
// } catch (PDOException $e) {
//     die("Connection failed: " . $e->getMessage());
// }

// Function to add an item to the cart
function addToCart($wig_id, $wig_quantity, $unit_price, $total_price, $cart_status)
{
    global $conn;
    try {
        $stmt = $conn->prepare("INSERT INTO carts (wig_ID, product_quantity, unit_price, total_price, cart_status)
                                VALUES ( :wig_id, :product_quantity, :unit_price, :total_price, :cart_status)");
        
        $stmt->bindParam(':wig_ID', $wig_id);
        $stmt->bindParam(':product_quantity', $wig_quantity);
        $stmt->bindParam(':unit_price', $unit_price);
        $stmt->bindParam(':total_price', $total_price);
        $stmt->bindParam(':cart_status', $cart_status);

        $stmt->execute();
        return true;
    } catch (PDOException $e) {
        // Handle any errors here
        return false;
    }
}

// Function to retrieve all cart items for a specific cart
function getCartItemsByUser($cart_id)
{
    global $conn;
    try {
        $stmt = $conn->prepare("SELECT * FROM carts WHERE id = :cart_id");
        $stmt->bindParam(':cart_ID', $cart_id);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        // Handle any errors here
        return [];
    }
}

// Function to update cart item quantity
function updateCartItemQuantity($cart_id, $new_quantity)
{
    global $conn;
    try {
        $stmt = $conn->prepare("UPDATE carts SET product_quantity = :new_quantity WHERE id = :cart_id");
        $stmt->bindParam(':new_quantity', $new_quantity);
        $stmt->bindParam(':cart_id', $cart_id);
        $stmt->execute();
        return true;
    } catch (PDOException $e) {
        // Handle any errors here
        return false;
    }
}

// Function to remove an item from the cart
function removeFromCart($cart_id)
{
    global $conn;
    try {
        $stmt = $conn->prepare("DELETE FROM carts WHERE id = :cart_id");
        $stmt->bindParam(':cart_id', $cart_id);
        $stmt->execute();
        return true;
    } catch (PDOException $e) {
        // Handle any errors here
        return false;
    }
}

// Close the database connection
$conn = null;

?>
