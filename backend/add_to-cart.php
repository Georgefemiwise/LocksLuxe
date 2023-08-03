<?php

// Requiring connection from connection.php file
require('connection.php');

// API endpoint to add an item to the cart
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if ($_POST['action'] === 'add_to_cart') {
        $wig_ID = $_POST['$wig_ID'];
        $wig_quantity = $_POST['$wig_quantity'];
        $unit_price = $_POST['$unit_price'];
        $total_price = $_POST['$total_price'];
        $cart_status = 'open';

        try {
            $stmt = $conn->prepare("INSERT INTO carts (wig_ID, product_quantity, unit_price, total_price, cart_status)
                                VALUES ( :wig_id, :product_quantity, :unit_price, :total_price, :cart_status)");

            $stmt->bind_Param(':wig_ID', $wig_id);
            $stmt->bind_Param(':product_quantity', $wig_quantity);
            $stmt->bind_Param(':unit_price', $unit_price);
            $stmt->bind_Param(':total_price', $total_price);
            $stmt->bind_Param(':cart_status', $cart_status);

            $stmt->execute();
            echo json_encode(['message' => true]);
        } catch (\Throwable $th) {
            echo json_encode(['error' => False]);
        }
    }
}
    //Closed connection
    $conn = null;


    


// Function to add an item to the cart
/* function addToCart($wig_id, $wig_quantity, $unit_price, $total_price, $cart_status)
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
    } catch (PDOException $e) { */
        // Handle any errors here
       /*  return false;
    }
} */

// Function to retrieve all cart items for a specific cart
/* function getCartItemsByUser($cart_id)
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
} */

// Function to update cart item quantity
/* function updateCartItemQuantity($cart_id, $new_quantity)
{
    global $conn;
    try {
        $stmt = $conn->prepare("UPDATE carts SET product_quantity = :new_quantity WHERE id = :cart_id");
        $stmt->bindParam(':new_quantity', $new_quantity);
        $stmt->bindParam(':cart_id', $cart_id);
        $stmt->execute();
        return true;
    } catch (PDOException $e) { */
        // Handle any errors here
       /*  return false;
    }
} */

// Function to remove an item from the cart
/* function removeFromCart($cart_id)
{
    global $conn;
    try {
        $stmt = $conn->prepare("DELETE FROM carts WHERE id = :cart_id");
        $stmt->bindParam(':cart_id', $cart_id);
        $stmt->execute();
        return true;
    } catch (PDOException $e) { */
        // Handle any errors here
      /*   return false;
    }
} */
    


// Close the database connection
/* $conn = null; */

?>
