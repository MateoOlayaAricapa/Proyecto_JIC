-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: jardines
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `imagen`
--

DROP TABLE IF EXISTS `imagen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagen` (
  `id_imagen` int NOT NULL AUTO_INCREMENT,
  `foto_jardin` varchar(250) NOT NULL,
  `dni` int NOT NULL,
  PRIMARY KEY (`id_imagen`),
  KEY `conserva` (`dni`),
  CONSTRAINT `conserva` FOREIGN KEY (`dni`) REFERENCES `jardin_infantil` (`dni`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagen`
--

LOCK TABLES `imagen` WRITE;
/*!40000 ALTER TABLE `imagen` DISABLE KEYS */;
INSERT INTO `imagen` VALUES (1,'https://jardininfantilpelusa.edu.co/wp-content/uploads/2018/12/blog.jpg',7734),(2,'https://losmejoresjardines.com/wp-content/uploads/2020/11/Burbujitas-3-min.png',8867),(3,'https://www.integracionsocial.gov.co/images/stories/2018/INFANCIA/jardin_el_nogal/jardin_nogal_2.jpg',8812);
/*!40000 ALTER TABLE `imagen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `integrante`
--

DROP TABLE IF EXISTS `integrante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `integrante` (
  `id_integrante` int NOT NULL AUTO_INCREMENT,
  `nombre_integrante` varchar(30) NOT NULL,
  `apellido_integrante` varchar(30) NOT NULL,
  `experiencia` int NOT NULL,
  `licenciatura` varchar(150) NOT NULL,
  `foto_integrante` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id_integrante`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `integrante`
--

LOCK TABLES `integrante` WRITE;
/*!40000 ALTER TABLE `integrante` DISABLE KEYS */;
INSERT INTO `integrante` VALUES (1,'Karla','Ramirez',4,'Educación','https://cdn1.matadornetwork.com/blogs/2/2019/03/mujer-mexico-1200x859.jpg'),(2,'Katherin','Bedoya',2,'Preescolar','https://blog.oxfamintermon.org/wp-content/uploads/2018/05/mujeres-que-luchan-contra-el-machismo.jpg'),(3,'Victoria','Agudelo',3,'Preescolar','https://weareuo.com/descubre/imagenes/katie-bouman-1024x776.jpg'),(4,'Veronica','Santanilla',1,'Preescolar','https://media.glamour.mx/photos/6190653fa6e030d6480f788b/master/w_1600%2Cc_limit/238674.jpg'),(5,'Camila','Estrada',7,'Preescolar','https://phantom-telva.unidadeditorial.es/e1cbf21143a2646976d95f5df115d7c8/resize/1200/f/jpg/assets/multimedia/imagenes/2022/11/26/16694203126392.jpg'),(6,'Jennifer','León',2,'Preescolar','https://media.vogue.es/photos/61e98993dd52dacaa3c9fc6c/master/w_3071,h_4095,c_limit/GettyImages-1210199106.jpg'),(7,'Isabella','Mana',10,'Preescolar','https://cdn1.matadornetwork.com/blogs/2/2019/03/frases-sobre-mujeres-shutterstock_400610314.jpg'),(8,'Karen','Díaz',5,'Preescolar','https://minmujeryeg.gob.cl/wp-content/uploads/2022/03/orellana.png'),(9,'Daniela','Quintero',2,'Preescolar','https://donbalonrosa.defensacentral.com/images/2023/03/18/1679121039.PNG'),(10,'Tatiana','Osban',3,'Preescolar','https://minmujeryeg.gob.cl/wp-content/uploads/2022/03/orellana.png'),(11,'Laura','Restrepo',6,'Preescolar','https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg'),(12,'Valeria','Osban',1,'Preescolar','https://vivolabs.es/wp-content/uploads/2022/03/perfil-mujer-vivo.png'),(13,'Paola','Peñón',2,'Preescolar','https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg'),(14,'Valentina','García',2,'Preescolar','https://vivolabs.es/wp-content/uploads/2022/03/perfil-mujer-vivo.png'),(15,'Sara','Nuñez',7,'Preescolar','https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg'),(16,'Sofía','Fercuso',4,'Preescolar','https://vivolabs.es/wp-content/uploads/2022/03/perfil-mujer-vivo.png'),(17,'Lucía','López',3,'Preescolar','https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg'),(18,'María','Camila',3,'Preescolar','https://vivolabs.es/wp-content/uploads/2022/03/perfil-mujer-vivo.png'),(20,'paola','paola',10,'preescolar','https://oji.fundacion-sm.org/wp-content/uploads/2020/03/woman-in-green-and-white-checkered-dress-shirt-wearing-brown-3979152-scaled.jpg'),(21,'karla','karla',10,'preescolar','https://oji.fundacion-sm.org/wp-content/uploads/2020/03/woman-in-green-and-white-checkered-dress-shirt-wearing-brown-3979152-scaled.jpg'),(22,'paola','paola',10,'preescolar','https://oji.fundacion-sm.org/wp-content/uploads/2020/03/woman-in-green-and-white-checkered-dress-shirt-wearing-brown-3979152-scaled.jpg'),(23,'Jennifer','Loaiza',10,'Preescolar','https://oji.fundacion-sm.org/wp-content/uploads/2020/03/woman-in-green-and-white-checkered-dress-shirt-wearing-brown-3979152-scaled.jpg'),(24,'Victoria','agudelo',15,'preescolar','https://oji.fundacion-sm.org/wp-content/uploads/2020/03/woman-in-green-and-white-checkered-dress-shirt-wearing-brown-3979152-scaled.jpg'),(25,'Camila','perez',4,'Preescolar','https://oji.fundacion-sm.org/wp-content/uploads/2020/03/woman-in-green-and-white-checkered-dress-shirt-wearing-brown-3979152-scaled.jpg'),(26,'Lucia','sandoval',2,'Preescolar','https://oji.fundacion-sm.org/wp-content/uploads/2020/03/woman-in-green-and-white-checkered-dress-shirt-wearing-brown-3979152-scaled.jpg'),(27,'Sara','Uribe',8,'Preescolar','https://oji.fundacion-sm.org/wp-content/uploads/2020/03/woman-in-green-and-white-checkered-dress-shirt-wearing-brown-3979152-scaled.jpg');
/*!40000 ALTER TABLE `integrante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jardin_infantil`
--

DROP TABLE IF EXISTS `jardin_infantil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jardin_infantil` (
  `dni` int NOT NULL,
  `nombre_jardin` varchar(250) NOT NULL,
  `direccion` varchar(150) NOT NULL,
  `departamento_jardin` varchar(20) NOT NULL,
  `ciudad_jardin` varchar(20) NOT NULL,
  `descripcion` varchar(1000) DEFAULT NULL,
  `cupo` varchar(5) NOT NULL,
  `correo_institucion` varchar(100) NOT NULL,
  `telefono_celular1` varchar(15) NOT NULL,
  `telefono_celular2` varchar(15) NOT NULL,
  `usuario_id` int NOT NULL,
  `comuna` int NOT NULL,
  PRIMARY KEY (`dni`),
  KEY `registra` (`usuario_id`),
  CONSTRAINT `registra` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jardin_infantil`
--

LOCK TABLES `jardin_infantil` WRITE;
/*!40000 ALTER TABLE `jardin_infantil` DISABLE KEYS */;
INSERT INTO `jardin_infantil` VALUES (99,'Jardín sur','Carrera 20 # 14','Valle del Cauca','Cali',NULL,'Si','JS@gmail.com','3189903646','3218843451',4,12),(1190,'Enseñanza por amor','Carrera 100 # 50 - 12','Valle del Cauca','Cali',NULL,'Si','Amor@gmail.com','3146395678','3128843980',4,2),(1567,'Montañas gigantes','Carrera 87 # 34','Valle del Cauca','Cali',NULL,'Si','Montañas@hotmail.com','3146123646','3128847654',1,21),(3434,'Niños increíbles','Carrera 58 # 12','Valle del Cauca','Cali',NULL,'Si','NiñosI@gmail.com','3177773646','3128890512',1,15),(4567,'Bonitas flores','Carrera 50 # 14','Valle del Cauca','Cali',NULL,'Si','BonitasFlores@gmail.com','3146393646','3128843451',3,8),(5612,'Valle de niños','Carrera 120 # 67','Valle del Cauca','Cali',NULL,'No','ValleNiños@gmail.com','3126393667','3216783451',4,12),(7521,'Amigos siempre','Carrera 70 # 20','Valle del Cauca','Cali',NULL,'Si','AmigosSiempre@hotmail.com','3159903646','3207713451',3,20),(7734,'Entusiasmo grande','carrera 60 # 80 -12 cbis','Cali, Valle de Cauca','Cali, Valle de Cauca','Ayudamos a todos los niños','Si','entusiasmoG@gmail.com','3146396767','3146396767',3,16),(7799,'Jardín amor y cariño','Carrera 78 # 09','Valle del Cauca','Cali',NULL,'No','JAC@gmail.com','3116378946','3150843490',1,1),(8812,'Jardín pureza','Calle 34 # 12cbis',' Valle de Cauca','Cali','Nos enfocamos en enseñar adecuadamente a los niños y niñas. ','Si','JP@hotmail.com','3206574567','3206574567',4,5),(8867,'Burbujitas Cali','Calle 100 # 80','Cali, Valle de Cauca','Cali, Valle de Cauca','Educamos lo mejor que podamos','Si','Burbujitas@gmail.com','3126397878','3126397878',2,20),(9234,'Sabiduria valle','Carrera 23 # 90','Valle del Cauca','Cali',NULL,'No','SV@hotmail.com','3196345646','3128843451',3,5);
/*!40000 ALTER TABLE `jardin_infantil` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jardin_integrante`
--

DROP TABLE IF EXISTS `jardin_integrante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jardin_integrante` (
  `id_jardin_integrante` int NOT NULL AUTO_INCREMENT,
  `rol` varchar(20) NOT NULL,
  `dni` int NOT NULL,
  `id_integrante` int NOT NULL,
  PRIMARY KEY (`id_jardin_integrante`),
  KEY `tiene` (`dni`),
  KEY `trabaja` (`id_integrante`),
  CONSTRAINT `tiene` FOREIGN KEY (`dni`) REFERENCES `jardin_infantil` (`dni`),
  CONSTRAINT `trabaja` FOREIGN KEY (`id_integrante`) REFERENCES `integrante` (`id_integrante`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jardin_integrante`
--

LOCK TABLES `jardin_integrante` WRITE;
/*!40000 ALTER TABLE `jardin_integrante` DISABLE KEYS */;
INSERT INTO `jardin_integrante` VALUES (1,'Profesora',99,1),(2,'Profesora',99,2),(3,'Profesora',1190,3),(4,'Profesora',1190,4),(5,'Profesora',1567,5),(6,'Profesora',1567,6),(7,'Profesora',3434,7),(8,'Profesora',3434,8),(9,'Profesora',4567,9),(10,'Profesora',4567,10),(11,'Profesora',5612,11),(12,'Profesora',5612,12),(13,'Profesora',7521,13),(14,'Profesora',7521,14),(15,'Profesora',7799,15),(16,'Profesora',7799,16),(17,'Profesora',9234,17),(18,'Profesora',9234,18),(19,'Profesora',7734,21),(20,'Profesora',7734,22),(21,'Profesora',8867,23),(22,'Profesora',8867,24),(23,'Profesora',8812,25),(24,'Profesora',8812,26),(25,'Profesora',8812,27);
/*!40000 ALTER TABLE `jardin_integrante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nivel`
--

DROP TABLE IF EXISTS `nivel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nivel` (
  `id_nivel` int NOT NULL AUTO_INCREMENT,
  `nombre_nivel` varchar(30) NOT NULL,
  PRIMARY KEY (`id_nivel`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nivel`
--

LOCK TABLES `nivel` WRITE;
/*!40000 ALTER TABLE `nivel` DISABLE KEYS */;
INSERT INTO `nivel` VALUES (1,'Salacuna'),(2,'Caminantes'),(3,'Párvulos'),(4,'PreJardín'),(5,'Jardín'),(6,'Transición');
/*!40000 ALTER TABLE `nivel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nivel_jardin`
--

DROP TABLE IF EXISTS `nivel_jardin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nivel_jardin` (
  `id_nivel_jardin` int NOT NULL AUTO_INCREMENT,
  `id_nivel` int NOT NULL,
  `dni` int NOT NULL,
  PRIMARY KEY (`id_nivel_jardin`),
  KEY `seencuentra` (`id_nivel`),
  KEY `incluye` (`dni`),
  CONSTRAINT `incluye` FOREIGN KEY (`dni`) REFERENCES `jardin_infantil` (`dni`),
  CONSTRAINT `seencuentra` FOREIGN KEY (`id_nivel`) REFERENCES `nivel` (`id_nivel`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nivel_jardin`
--

LOCK TABLES `nivel_jardin` WRITE;
/*!40000 ALTER TABLE `nivel_jardin` DISABLE KEYS */;
INSERT INTO `nivel_jardin` VALUES (2,1,99),(3,2,99),(4,3,99),(5,4,99),(6,1,1190),(7,2,1190),(8,3,1190),(9,4,1190),(10,5,1190),(11,6,1190),(12,1,1567),(13,2,1567),(14,3,1567),(15,1,3434),(16,2,3434),(17,3,3434),(18,4,3434),(19,1,4567),(20,2,4567),(21,3,4567),(22,4,4567),(23,5,4567),(24,6,4567),(25,1,5612),(26,2,5612),(27,3,5612),(28,1,7521),(29,2,7521),(30,3,7521),(31,1,7799),(32,2,7799),(33,3,7799),(34,1,9234),(35,2,9234),(36,3,9234),(37,4,9234),(38,5,9234),(39,6,9234),(40,1,7734),(41,2,7734),(42,3,7734),(43,4,7734),(44,5,7734),(45,1,7734),(46,2,7734),(47,3,7734),(48,4,7734),(49,5,7734),(50,1,8867),(51,2,8867),(52,4,8867),(53,1,8812),(54,4,8812),(55,6,8812);
/*!40000 ALTER TABLE `nivel_jardin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicio`
--

DROP TABLE IF EXISTS `servicio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servicio` (
  `id_servicio` int NOT NULL AUTO_INCREMENT,
  `nombre_servicio` varchar(100) NOT NULL,
  PRIMARY KEY (`id_servicio`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicio`
--

LOCK TABLES `servicio` WRITE;
/*!40000 ALTER TABLE `servicio` DISABLE KEYS */;
INSERT INTO `servicio` VALUES (1,'Natación'),(2,'Danzas'),(3,'Psicología'),(4,'Alimentación'),(5,'Refuerzos'),(6,'Transporte'),(7,'Recreación'),(8,'Inglés');
/*!40000 ALTER TABLE `servicio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicio_jardin`
--

DROP TABLE IF EXISTS `servicio_jardin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servicio_jardin` (
  `id_servicio_jardin` int NOT NULL AUTO_INCREMENT,
  `id_servicio` int NOT NULL,
  `dni` int NOT NULL,
  PRIMARY KEY (`id_servicio_jardin`),
  KEY `esofrecido` (`id_servicio`),
  KEY `ofrece` (`dni`),
  CONSTRAINT `esofrecido` FOREIGN KEY (`id_servicio`) REFERENCES `servicio` (`id_servicio`),
  CONSTRAINT `ofrece` FOREIGN KEY (`dni`) REFERENCES `jardin_infantil` (`dni`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicio_jardin`
--

LOCK TABLES `servicio_jardin` WRITE;
/*!40000 ALTER TABLE `servicio_jardin` DISABLE KEYS */;
INSERT INTO `servicio_jardin` VALUES (3,1,99),(4,2,99),(5,3,99),(6,4,99),(7,5,99),(8,6,99),(9,5,1190),(10,6,1190),(11,7,1190),(12,8,1190),(13,2,1567),(14,4,1567),(15,6,1567),(16,7,1567),(17,4,3434),(18,2,3434),(19,3,3434),(21,1,3434),(22,5,3434),(23,1,4567),(24,2,4567),(25,3,4567),(26,7,4567),(27,8,4567),(28,4,5612),(29,5,5612),(30,6,5612),(31,7,5612),(32,1,7521),(33,2,7521),(34,3,7521),(35,5,7799),(36,6,7799),(37,7,7799),(38,8,7799),(39,1,9234),(40,2,9234),(41,3,9234),(42,4,9234),(43,5,9234),(44,6,9234),(46,2,7734),(47,1,7734),(48,6,7734),(49,7,7734),(50,5,7734),(51,2,7734),(52,1,7734),(53,6,7734),(54,7,7734),(55,5,7734),(56,1,8867),(57,3,8867),(58,6,8867),(59,7,8867),(60,2,8812),(61,5,8812),(62,7,8812),(63,4,8812);
/*!40000 ALTER TABLE `servicio_jardin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `correo` varchar(150) NOT NULL,
  `contraseña` varchar(20) NOT NULL,
  `departamento` varchar(20) NOT NULL,
  `ciudad` varchar(20) NOT NULL,
  `foto_usuario` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Alejandro','Olaya','mateo.olaya@uao.edu.co','auto@5757','Valle del Cauca','Cali','https://www.labsaenzrenauld.com/wp-content/uploads/2020/10/Perfil-hombre-ba%CC%81sico_738242395.jpg'),(2,'mateo','Olaya','mateo@uao.edu.co','auto@4545','Valle del Cauca','Cali','https://www.labsaenzrenauld.com/wp-content/uploads/2020/10/Perfil-hombre-ba%CC%81sico_738242395.jpg'),(3,'Camila','Leon M.','leon@uao.edu.co','auto@5757','Valle del Cauca','Cali','https://smoda.elpais.com/wp-content/uploads/2017/08/40mujeres14-1-635x480.jpg'),(4,'Carlos','Olaya','carlos@uao.edu.co','4567865','Valle del Cauca','Cali','https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg'),(5,'Sebastián','Muñoz','sebas.nuñez@hotmail.com','Auto@8989','Valle del Cauca','Cali','https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg'),(6,'Victoria','Camacho','victoria.camacho@gmail.com','1234','Valle del Cauca','Cali','https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg'),(7,'Camilo','Anibal','','5678','Valle del Cauca','Cali','https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg'),(8,'Daniel','Espinoza','DE@hotmail.com','0987','Valle del Cauca','Cali','https://www.publimetro.com.mx/resizer/x46TI3BsR_8TALpxbMTDPxjeTcw=/800x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/XX36TYPTINFV5GALNZNMOENPDQ.jpg'),(9,'Jasson','Narvaez','Jasson@yahoo.com','34789','Valle del Cauca','Cali','https://cloudfront-eu-central-1.images.arcpublishing.com/prisaradiolos40/ILN2K525EBPPRLXQGCYMMTP5R4.jpg'),(10,'Jaramillo','Mosquera','Mosquera@hotmail.com','4569423234','Valle del Cauca','Cali','https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg'),(11,'Bonilla','Garcia','Garcia@hotmail.com','456456456','Valle del Cauca','Cali','https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg'),(12,'Valentina','Garcia','Valentina@hotmail.com','9083112','Valle del Cauca','Cali','https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg'),(13,'Tatiana','muñoz','Tati@gmail.com','345345346','Valle del Cauca','Cali','https://secrecyjewels.es/blog/wp-content/uploads/2022/10/esencia-de-una-persona.jpg');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-10 14:40:45
