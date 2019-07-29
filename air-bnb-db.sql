-- MySQL dump 10.13  Distrib 8.0.16, for macos10.14 (x86_64)
--
-- Host: 127.0.0.1    Database: fs_bnb
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `booking` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `dateTo` varchar(45) NOT NULL,
  `userId` int(6) unsigned NOT NULL,
  `dateFrom` varchar(45) NOT NULL,
  `propertyId` int(6) unsigned NOT NULL,
  `status` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId_idx` (`userId`),
  KEY `propertyId_idx` (`propertyId`),
  CONSTRAINT `propertyId` FOREIGN KEY (`propertyId`) REFERENCES `property` (`id`) ON DELETE RESTRICT,
  CONSTRAINT `userId` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=224 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
INSERT INTO `booking` VALUES (183,'2019-07-29T14:40:12.981Z',5,'2019-07-29T14:40:12.981Z',2,'NEW'),(184,'2019-07-29T14:40:12.981Z',5,'2019-07-29T14:40:12.981Z',2,'NEW'),(185,'2019-07-29T14:40:12.981Z',5,'2019-07-29T14:40:12.981Z',2,'NEW'),(186,'2019-07-29T14:40:12.981Z',5,'2019-07-29T14:40:12.981Z',2,'NEW'),(200,'2019-07-29T14:40:12.981Z',5,'2019-07-29T14:40:12.981Z',2,'NEW'),(221,'2019-07-29T21:44:08.550Z',5,'2019-07-29T21:44:08.550Z',2,'NEW'),(222,'2019-07-29T21:44:14.525Z',5,'2019-07-29T21:44:14.525Z',11,'NEW'),(223,'2019-07-29T21:44:21.453Z',5,'2019-07-29T21:44:21.453Z',14,'NEW');
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `run_on` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (6,'/20190719080020-provider','2019-07-19 10:31:02');
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `property`
--

DROP TABLE IF EXISTS `property`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `property` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` varchar(45) NOT NULL,
  `location` varchar(45) NOT NULL,
  `imageUrl` varchar(255) NOT NULL,
  `providerId` int(6) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `providerId_idx` (`providerId`),
  CONSTRAINT `providerId` FOREIGN KEY (`providerId`) REFERENCES `provider` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `property`
--

LOCK TABLES `property` WRITE;
/*!40000 ALTER TABLE `property` DISABLE KEYS */;
INSERT INTO `property` VALUES (1,'Exclusive Apartment Overlooking Lion\'s Head Mountain','595 ','Cape Town, Western Cape, South Africa','https://rnr.co.za/wp-content/uploads/myhh_images/beautiful-house-hd-wallpapers-6.jpg',1),(2,'Super Stylish Kloof Street Apartment','292 ','Cape Town, Western Cape, South Africa','https://a0.muscache.com/im/pictures/fd1de76b-8e65-4d8a-a1af-e6012388665a.jpg?aki_policy=xx_large',2),(3,'Superbly Stylish Sanctuary with Stunning Views','490 ','Cape Town, Western Cape, South Africa','https://a0.muscache.com/im/pictures/2b89e7e1-40fc-43bb-9b85-de7438e12923.jpg?aki_policy=xx_large',3),(11,'Beautiful House by Bavaro Beach','12900','Punta Cana, Dominican Republic','https://s3-us-west-2.amazonaws.com/locations-images/image_60463.jpeg',4),(12,'Spacious City Centre Studio','320','Western Cape, Cape Town, South Africa','https://a0.muscache.com/im/pictures/b094e5ef-e633-46c4-84de-585bd271fc74.jpg?aki_policy=xx_large',4),(14,'Charm Of Old Montmartre','1312','Montmartre, Paris','https://a0.muscache.com/im/pictures/88221400/518d4559_original.jpg?aki_policy=xx_large',4);
/*!40000 ALTER TABLE `property` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `propertyOG`
--

DROP TABLE IF EXISTS `propertyOG`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `propertyOG` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` varchar(45) NOT NULL,
  `location` varchar(45) NOT NULL,
  `imageUrl` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `propertyOG`
--

LOCK TABLES `propertyOG` WRITE;
/*!40000 ALTER TABLE `propertyOG` DISABLE KEYS */;
INSERT INTO `propertyOG` VALUES (1,'Exclusive Apartment Overlooking Lion\'s Head Mountain','595 ZAR/night','Cape Town, Western Cape, South Africa','https://rnr.co.za/wp-content/uploads/myhh_images/beautiful-house-hd-wallpapers-6.jpg'),(2,'Super Stylish Kloof Street Apartment','292 ZAR/night','Cape Town, Western Cape, South Africa','https://a0.muscache.com/im/pictures/fd1de76b-8e65-4d8a-a1af-e6012388665a.jpg?aki_policy=xx_large'),(3,'Superbly Stylish Sanctuary with Stunning Views','490 ZAR/night','Cape Town, Western Cape, South Africa','https://a0.muscache.com/im/pictures/2b89e7e1-40fc-43bb-9b85-de7438e12923.jpg?aki_policy=xx_large'),(4,'Sea views, fast WIFI, noise free, netflix','420 ZAR/night','Cape Town, Western Cape, South Africa','https://a0.muscache.com/im/pictures/8f76e824-f0b4-4ed4-86da-bce5c109d47a.jpg?aki_policy=xx_large');
/*!40000 ALTER TABLE `propertyOG` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `provider`
--

DROP TABLE IF EXISTS `provider`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `provider` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `lastName` varchar(45) NOT NULL,
  `cellPhone` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(45) NOT NULL,
  `role` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `provider`
--

LOCK TABLES `provider` WRITE;
/*!40000 ALTER TABLE `provider` DISABLE KEYS */;
INSERT INTO `provider` VALUES (1,'Rompe','Toto','3478299231','b@c.com','b','provider'),(2,'Kyle','Jenkins','555','j','a','provider'),(3,'John','Eshirow','555','eshirow@gmail.com','a','provider'),(4,'John','Eshirow','555','joel','a','provider'),(5,'John','Eshirow','555','chino@gmail.com','a','provider'),(6,'ff','ff','ff','ff','ff','provider'),(7,'kyle','guy','555','guy@gmail.com','g','provider'),(8,'a','b','911','a@b.com','a','provider');
/*!40000 ALTER TABLE `provider` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `surName` varchar(255) NOT NULL,
  `cellPhone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(30) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Brett','Villiers','0928123463','byron@appstrax.tech','password','provider'),(2,'Alice','Ville','0928123222','alice@appstrax.tech','passwords','admin'),(3,'Alex','Rivera','0928123222','rivera@mail.com','p@ssword','admin'),(4,'Rompe','Toto','3478299231','cornholio@gmail.com','password','admin'),(5,'Joel','Tavarez','3478676237','jt3bk@virginia.edu','password','user'),(6,'Moja','Panty','3478299231','majar@gmail.com','password','user'),(7,'Michael','Jordan','3478129233','jordan@gmail.com','password','user'),(8,'Joel','Tavarez','3478293331','mm6md@gmauk.com','password','user'),(9,'Michael','Masner','3478195430','mm6md@virginia.edu','password','user'),(10,'a','b','911','a@b.com','a','user'),(19,'John','Eshirow','3478195430','eshirow@gmail.com','password','provider');
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

-- Dump completed on 2019-07-29 23:47:58
