<?php
// Requiring connection from connection.php file
require('connection.php');

                                    


// API endpoint to create a new checkout
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if ($_POST['action'] === 'create_checkout') {
        $cart_id = $_POST['cart_id'];
        $total_amount = $_POST['total_amount'];
        $payment_method = $_POST['payment_method'];
        $payment_status = 'pending'; // Default payment status is "pending"
        $payment_date = null; // Payment date is initially null
        $shipping_address = $_POST['shipping_address'];
        $first_name = $_POST['first_name'];
        $last_name = $_POST['last_name'];
        $contact = $_POST['contact'];
        $addtional_information = $_POST['additional_information'];
        $region = $_POST['region'];
        $city = $_POST['city'];
        $billing_address = $_POST['billing_address'];
        $order_status = 'processing'; // Default order status is "processing"
        $transaction_id = $_POST['transaction_id'];
        $cardholder_name = $_POST['cardholder_name'];
        $authorization_code = $_POST['authorization_code'];

        

        try {
            $stmt = $conn->prepare("INSERT INTO checkouts (cart_ID, total_amount, payment_method, payment_status, payment_date, shipping_address, billing_address, order_status, transaction_id, cardholder_name, authorization_code)
                                VALUES (:cart_ID, :total_amount, :payment_method, :payment_status, :payment_date, :shipping_address, :first_name, :last_name, :contact, :additional_information, :region, :city, :billing_address, :order_status, :transaction_id, :cardholder_name,  :authorization_code)");
           
            $stmt->bind_Param(':cart_ID', $cart_id);
            $stmt->bind_Param(':total_amount', $total_amount);
            $stmt->bind_Param(':payment_method', $payment_method);
            $stmt->bind_Param(':payment_status', $payment_status);
            $stmt->bind_Param(':payment_date', $payment_date);
            $stmt->bind_Param(':shipping_address', $shipping_address);
            $stmt->bind_Param(':first_name', $first_name);
            $stmt->bind_Param(':last_name', $last_name);
            $stmt->bind_Param(':contact', $contact);
            $stmt->bind_Param(':additional_information', $addtional_information);
            $stmt->bind_Param(':region', $region);
            $stmt->bind_Param(':city', $city);
            $stmt->bind_Param(':billing_address', $billing_address);
            $stmt->bind_Param(':order_status', $order_status);
            $stmt->bind_Param(':transaction_id', $transaction_id);
            $stmt->bind_Param(':cardholder_name', $cardholder_name);
            $stmt->bind_Param(':authorization_code', $authorization_code);

            $stmt->execute();
            echo json_encode(['success' => true]);
        } catch (PDOException $e) {
            echo json_encode(['error' => 'Failed to create checkout']);
        }
    }
}

// Close the database connection
$conn = null;


/* 
// Function to create a new checkout record
function createCheckout( $cart_id, $total_amount, $payment_method, $payment_status, $payment_date, $shipping_address, $billing_address, $order_status, $transaction_id, $currency, $cardholder_name, $card_last_four_digits, $authorization_code)
{
    global $conn;
    try {
        $stmt = $conn->prepare("INSERT INTO checkouts ( cart_ID, total_amount, payment_method, payment_status, payment_date, shipping_address, first_name, last_name, contact,additional_information, region, city, billing_address, order_status, transaction_id, currency, cardholder_name, card_last_four_digits, authorization_code)
                                VALUES ( :cart_id, :total_amount, :payment_method, :payment_status, :payment_date, :shipping_address, :first_name, :last_name, :contact, :additional_information, :region, :city, :billing_address, :order_status, :transaction_id, :currency, :cardholder_name, :card_last_four_digits, :authorization_code)");
       
        $stmt->bindParam(':cart_ID', $cart_id);
        $stmt->bindParam(':total_amount', $total_amount);
        $stmt->bindParam(':payment_method', $payment_method);
        $stmt->bindParam(':payment_status', $payment_status);
        $stmt->bindParam(':payment_date', $payment_date);
        $stmt->bindParam(':shipping_address', $shipping_address);
        $stmt->bindParam(':billing_address', $billing_address);
        $stmt->bindParam(':order_status', $order_status);
        $stmt->bindParam(':transaction_id', $transaction_id);
        $stmt->bindParam(':currency', $currency);
        $stmt->bindParam(':cardholder_name', $cardholder_name);
        $stmt->bindParam(':card_last_four_digits', $card_last_four_digits);
        $stmt->bindParam(':authorization_code', $authorization_code);

        $stmt->execute();
        return true;
    } catch (PDOException $e) {
        // Handle any errors here
        return false;
    }
}

// Function to retrieve checkout details by checkout ID
function getCheckoutById($checkout_id)
{
    global $conn;
    try {
        $stmt = $conn->prepare("SELECT * FROM checkouts WHERE id = :checkout_id");
        $stmt->bindParam(':checkout_id', $checkout_id);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        // Handle any errors here
        return null;
    }
}

// Close the database connection
$conn = null; */
?>
