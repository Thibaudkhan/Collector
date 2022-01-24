-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : Dim 16 jan. 2022 à 13:24
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `collector`
--
CREATE DATABASE IF NOT EXISTS `collector` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `collector`;

-- --------------------------------------------------------

--
-- Structure de la table `api_item`
--

DROP TABLE IF EXISTS `api_item`;
CREATE TABLE IF NOT EXISTS `api_item` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_api` int(11) NOT NULL,
  `id_item` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `api_id` (`id_api`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `api_name`
--

DROP TABLE IF EXISTS `api_name`;
CREATE TABLE IF NOT EXISTS `api_name` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `api_table_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_api` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `api_id` (`id_api`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `filter`
--

DROP TABLE IF EXISTS `filter`;
CREATE TABLE IF NOT EXISTS `filter` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_api` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `api_id` (`id_api`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `followers`
--

DROP TABLE IF EXISTS `followers`;
CREATE TABLE IF NOT EXISTS `followers` (
  `id_follower` int(11) NOT NULL COMMENT 'Celui qu''on suit',
  `id_followed` int(11) NOT NULL COMMENT 'Celui qui suit',
  KEY `follower` (`id_follower`),
  KEY `followed` (`id_followed`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `list_of_possible_items_to_trade`
--

DROP TABLE IF EXISTS `list_of_possible_items_to_trade`;
CREATE TABLE IF NOT EXISTS `list_of_possible_items_to_trade` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL,
  `id_item` int(11) NOT NULL,
  `number_of_list` int(11) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`id_user`),
  KEY `item_id` (`id_item`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Liste des possibles items à échanger';

-- --------------------------------------------------------

--
-- Structure de la table `review_trade`
--

DROP TABLE IF EXISTS `review_trade`;
CREATE TABLE IF NOT EXISTS `review_trade` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rating` int(11) NOT NULL,
  `message` text NOT NULL,
  `id_reviewer` int(11) NOT NULL,
  `id_reviewed` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `reviewer_id` (`id_reviewer`),
  KEY `reviewed_id` (`id_reviewed`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tchat`
--

DROP TABLE IF EXISTS `tchat`;
CREATE TABLE IF NOT EXISTS `tchat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `message` text NOT NULL,
  `id_user_sender` int(11) NOT NULL,
  `id_user_receiver` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_sender` (`id_user_sender`),
  KEY `user_receiver` (`id_user_receiver`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `trade`
--

DROP TABLE IF EXISTS `trade`;
CREATE TABLE IF NOT EXISTS `trade` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_seller` int(11) NOT NULL,
  `id_buyer` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `seller_id` (`id_seller`),
  KEY `buyer_id` (`id_buyer`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `trade_list_item`
--

DROP TABLE IF EXISTS `trade_list_item`;
CREATE TABLE IF NOT EXISTS `trade_list_item` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_item_buyer` int(11) NOT NULL,
  `id_item_seller` int(11) NOT NULL,
  `id_trade` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `trade_id` (`id_trade`),
  KEY `seller_item_id` (`id_item_seller`),
  KEY `buyer_item_id` (`id_item_buyer`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `user_collection`
--

DROP TABLE IF EXISTS `user_collection`;
CREATE TABLE IF NOT EXISTS `user_collection` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL,
  `created_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `owner_collection` (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `user_item_collection`
--

DROP TABLE IF EXISTS `user_item_collection`;
CREATE TABLE IF NOT EXISTS `user_item_collection` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_of_api` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_item_api` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`id_user`),
  KEY `api_id` (`id_of_api`),
  KEY `id_api_item` (`id_item_api`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `wishlist`
--

DROP TABLE IF EXISTS `wishlist`;
CREATE TABLE IF NOT EXISTS `wishlist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_item` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `creation_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `item_id` (`id_item`),
  KEY `user_id` (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `api_item`
--
ALTER TABLE `api_item`
  ADD CONSTRAINT `api_item_ibfk_1` FOREIGN KEY (`id_api`) REFERENCES `api_name` (`id`);

--
-- Contraintes pour la table `category`
--
ALTER TABLE `category`
  ADD CONSTRAINT `category_ibfk_1` FOREIGN KEY (`id_api`) REFERENCES `api_name` (`id`);

--
-- Contraintes pour la table `filter`
--
ALTER TABLE `filter`
  ADD CONSTRAINT `filter_ibfk_1` FOREIGN KEY (`id_api`) REFERENCES `api_name` (`id`);

--
-- Contraintes pour la table `followers`
--
ALTER TABLE `followers`
  ADD CONSTRAINT `followers_ibfk_1` FOREIGN KEY (`id_follower`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `followers_ibfk_2` FOREIGN KEY (`id_followed`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `list_of_possible_items_to_trade`
--
ALTER TABLE `list_of_possible_items_to_trade`
  ADD CONSTRAINT `list_of_possible_items_to_trade_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `list_of_possible_items_to_trade_ibfk_2` FOREIGN KEY (`id_item`) REFERENCES `user_item_collection` (`id`);

--
-- Contraintes pour la table `review_trade`
--
ALTER TABLE `review_trade`
  ADD CONSTRAINT `review_trade_ibfk_1` FOREIGN KEY (`id_reviewer`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `review_trade_ibfk_2` FOREIGN KEY (`id_reviewed`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `tchat`
--
ALTER TABLE `tchat`
  ADD CONSTRAINT `tchat_ibfk_1` FOREIGN KEY (`id_user_sender`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `tchat_ibfk_2` FOREIGN KEY (`id_user_receiver`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `trade`
--
ALTER TABLE `trade`
  ADD CONSTRAINT `trade_ibfk_1` FOREIGN KEY (`id_seller`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `trade_ibfk_2` FOREIGN KEY (`id_buyer`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `trade_list_item`
--
ALTER TABLE `trade_list_item`
  ADD CONSTRAINT `trade_list_item_ibfk_1` FOREIGN KEY (`id_trade`) REFERENCES `trade` (`id`),
  ADD CONSTRAINT `trade_list_item_ibfk_2` FOREIGN KEY (`id_item_buyer`) REFERENCES `user_item_collection` (`id`),
  ADD CONSTRAINT `trade_list_item_ibfk_3` FOREIGN KEY (`id_item_seller`) REFERENCES `user_item_collection` (`id`);

--
-- Contraintes pour la table `user_collection`
--
ALTER TABLE `user_collection`
  ADD CONSTRAINT `user_collection_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `user_item_collection`
--
ALTER TABLE `user_item_collection`
  ADD CONSTRAINT `user_item_collection_ibfk_1` FOREIGN KEY (`id_of_api`) REFERENCES `api_name` (`id`),
  ADD CONSTRAINT `user_item_collection_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `user_item_collection_ibfk_3` FOREIGN KEY (`id_item_api`) REFERENCES `api_item` (`id`);

--
-- Contraintes pour la table `wishlist`
--
ALTER TABLE `wishlist`
  ADD CONSTRAINT `wishlist_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `wishlist_ibfk_2` FOREIGN KEY (`id_item`) REFERENCES `user_item_collection` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

INSERT INTO `user` (`firstname`,`lastname`,`email`,`password` )
VALUES ('John','Doe','jd@test.fr','1234');