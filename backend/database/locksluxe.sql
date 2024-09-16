CREATE DATABASE  IF NOT EXISTS `locksluxe` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `locksluxe`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: locksluxe
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carts` (
  `cart_ID` int NOT NULL AUTO_INCREMENT,
  `wig_ID` int NOT NULL,
  `product_quantity` int NOT NULL,
  `unit_price` decimal(10,2) NOT NULL,
  `total_price` decimal(10,2) NOT NULL,
  `cart_status` enum('open','closed','abandoned') NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_modified_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`cart_ID`),
  KEY `wig_ID` (`wig_ID`),
  CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`wig_ID`) REFERENCES `products` (`wig_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `checkouts`
--

DROP TABLE IF EXISTS `checkouts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `checkouts` (
  `checkout_id` int NOT NULL AUTO_INCREMENT,
  `cart_id` int NOT NULL,
  `total_amount` decimal(10,2) NOT NULL,
  `payment_method` varchar(50) NOT NULL,
  `payment_status` enum('pending','completed','failed') NOT NULL,
  `payment_date` datetime DEFAULT NULL,
  `shipping_address` varchar(255) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `contact` varchar(17) NOT NULL,
  `additional_information` varchar(255) DEFAULT NULL,
  `region` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `order_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `order_status` enum('processing','shipped','delivered') NOT NULL,
  `transaction_id` varchar(100) DEFAULT NULL,
  `cardholder_name` varchar(100) DEFAULT NULL,
  `authorization_code` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`checkout_id`),
  KEY `cart_id` (`cart_id`),
  CONSTRAINT `checkouts_ibfk_1` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`cart_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `checkouts`
--

LOCK TABLES `checkouts` WRITE;
/*!40000 ALTER TABLE `checkouts` DISABLE KEYS */;
/*!40000 ALTER TABLE `checkouts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `unit_price` decimal(10,2) NOT NULL,
  `quantity` int NOT NULL,
  `subtotal_amount` decimal(10,2) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `wig_ID` int NOT NULL AUTO_INCREMENT,
  `wig_name` varchar(100) NOT NULL,
  `wig_type` varchar(200) NOT NULL,
  `material` varchar(100) NOT NULL,
  `texture` varchar(20) NOT NULL,
  `color` varchar(20) NOT NULL,
  `length` varchar(20) NOT NULL,
  `density` varchar(20) NOT NULL,
  `cap_size` varchar(20) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `wig_description` text NOT NULL,
  `wig_image` blob,
  PRIMARY KEY (`wig_ID`),
  KEY `products_index` (`wig_name`,`price`),
  KEY `products_index2` (`price`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Elegant Wavy Human Hair Wig','Lace Front Wig','100% Human Hair','Wavy','Natural Black','14 inches','150%','Average',200,'Achieve a sophisticated look with this elegant wavy human hair wig. The lace front creates a natural-looking hairline, \nand the wavy texture adds volume and movement. It is made from 100% human hair, allowing for versatile styling. \nThe wig has a medium cap size and a comfortable fit with adjustable straps. Available in a stylish natural black \ncolor, perfect for daily wear or special occasions.',NULL),(2,'Elegant Wavy Human Hair Wig','Lace Front Wig','100% Human Hair','Wavy','Natural Black','14 inches','150%','Average',200,'Achieve a sophisticated look with this elegant wavy human hair wig. The lace front creates a natural-looking hairline, \nand the wavy texture adds volume and movement. It is made from 100% human hair, allowing for versatile styling. \nThe wig has a medium cap size and a comfortable fit with adjustable straps. Available in a stylish natural black \ncolor, perfect for daily wear or special occasions.',NULL),(3,'Elegant Wavy Human Hair Wig','Lace Front Wig','100% Human Hair','Wavy','Natural Black','14 inches','150%','Average',200,'Achieve a sophisticated look with this elegant wavy human hair wig. The lace front creates a natural-looking hairline, \nand the wavy texture adds volume and movement. It is made from 100% human hair, allowing for versatile styling. \nThe wig has a medium cap size and a comfortable fit with adjustable straps. Available in a stylish natural black \ncolor, perfect for daily wear or special occasions.',NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_ID` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `user_password` varchar(100) NOT NULL,
  `contact` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`user_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-08 14:31:42
