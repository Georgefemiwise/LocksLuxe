<?php

// Replace these with your database credentials
require('connection.php');

// Assuming you get the product details from the frontend
if (isset($_POST['wig_ID']) && isset($_POST['quantity']) && isset($_POST['user_ID'])) {
    $product_id = $_POST['wig_ID'];
    $quantity = $_POST['wig_name'];
    $user_id = $_POST['user_ID'];
    // $quantity = $_POST['quantity'];
    // $user_id = $_POST['user_ID'];

    // Check if the product exists in the database
    $sql = "SELECT * FROM products WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('i', $product_id);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 1) {
        // Product exists, add it to the cart
        $row = $result->fetch_assoc();
        $product_name = $row['name'];
        $product_price = $row['price'];

        // Check if the product is already in the cart for the user
        $sql = "SELECT * FROM cart WHERE wig_id = ? AND user_id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param('ii', $product_id, $user_id);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows == 1) {
            // Product is already in the cart, update the quantity
            $row = $result->fetch_assoc();
            $cart_id = $row['id'];
            $new_quantity = $row['quantity'] + $quantity;

            $sql = "UPDATE cart SET quantity = ? WHERE id = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param('ii', $new_quantity, $cart_id);
            $stmt->execute();
        } else {
            // Product is not in the cart, insert a new row
            $sql = "INSERT INTO cart ( user_id, quantity) VALUES (?, ?, )";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param('iii', $product_id, $user_id, $quantity);
            $stmt->execute();
        }

        echo "Product added to the cart successfully.";
    } else {
        echo "Product not found.";
    }
} else {
    echo "Invalid request.";
}

$conn->close();
?>
