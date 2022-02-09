CREATE DATABASE  IF NOT EXISTS `online-shop` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `online-shop`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: online-shop
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
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `cart_id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int unsigned NOT NULL,
  `product_id` int unsigned NOT NULL,
  `quantity` int unsigned NOT NULL DEFAULT '1',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`cart_id`),
  KEY `fk_cart_user` (`user_id`),
  KEY `fk_cart_product` (`product_id`),
  CONSTRAINT `fk_cart_product` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_cart_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (1,1,1,4,'2022-02-08 16:41:31','2022-02-08 16:41:31'),(2,1,3,3,'2022-02-08 16:41:33','2022-02-09 09:33:51'),(3,1,8,6,'2022-02-09 09:41:30','2022-02-09 09:50:07'),(4,1,7,3,'2022-02-09 09:52:22','2022-02-09 09:52:26'),(5,2,6,2,'2022-02-09 09:52:27','2022-02-09 09:52:28'),(6,2,8,5,'2022-02-09 09:54:42','2022-02-09 09:54:43'),(7,2,1,2,'2022-02-09 09:54:46','2022-02-09 09:54:59'),(8,2,2,1,'2022-02-09 09:54:49','2022-02-09 09:54:49');
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `product_id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` int unsigned NOT NULL,
  `image` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`product_id`),
  UNIQUE KEY `title` (`title`),
  UNIQUE KEY `title_2` (`title`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Product 1','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',500,'image_1643820649602.jpg','2022-02-02 16:50:49','2022-02-02 16:50:49'),(2,'Product 2','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',500,'image_1643820663293.jpg','2022-02-02 16:51:03','2022-02-08 15:06:10'),(3,'Product 3','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',500,'image_1643820679155.jpg','2022-02-02 16:51:19','2022-02-02 16:51:19'),(4,'Product 4','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',500,'image_1643820689579.jpg','2022-02-02 16:51:29','2022-02-02 16:51:29'),(5,'Product 5','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',500,'image_1643820699372.jpg','2022-02-02 16:51:39','2022-02-02 16:51:39'),(6,'Product 6','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',500,'image_1643820740982.jpg','2022-02-02 16:52:20','2022-02-02 16:52:20'),(7,'Product 7','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',500,'image_1643820753535.jpg','2022-02-02 16:52:33','2022-02-02 16:52:33'),(8,'Product 8','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',500,'image_1643820766783.jpg','2022-02-08 10:21:45','2022-02-09 09:35:43');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `email_2` (`email`),
  UNIQUE KEY `email_3` (`email`),
  UNIQUE KEY `email_4` (`email`),
  UNIQUE KEY `email_5` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Abdul Muqeet Arshad','imuqeetchaudhary@gmail.com','$2b$10$p94/oZYFqHSSzKglmsuHF.aWiwm/CI6jOGdyAem8uZgxYpcapiUki','2022-02-02 13:22:51','2022-02-02 13:22:51'),(2,'Test','test@gmail.com','$2b$10$bYjLsaSG5LMPqPu18WmtFOH5H8V5ggwcnGT5lL68hN0SwzFDY6g5u','2022-02-07 16:51:47','2022-02-07 16:51:47');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-09 15:44:59
