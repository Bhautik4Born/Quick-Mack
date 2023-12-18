-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 18, 2023 at 11:53 PM
-- Server version: 10.5.22-MariaDB-cll-lve
-- PHP Version: 8.1.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `graphig_QuickMake`
--

-- --------------------------------------------------------

--
-- Table structure for table `quickma_users`
--

CREATE TABLE `quickma_users` (
  `id` int(50) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mobile_number` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `organizations` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `zip` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `language` varchar(255) DEFAULT NULL,
  `timezone` varchar(255) DEFAULT NULL,
  `currency` varchar(255) DEFAULT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `quickma_users`
--

INSERT INTO `quickma_users` (`id`, `username`, `email`, `mobile_number`, `password`, `first_name`, `last_name`, `organizations`, `address`, `state`, `zip`, `country`, `language`, `timezone`, `currency`, `created_at`) VALUES
(1, 'Sorathiya', 'mergautam@gmail.com2', '9570111208822', 'Sorathiya@2005', 'Mer 202', 'Gautam2', 'Sorathiya Tech2', 'Rajkot , Gujrat , india2', 'Gujarat2', '47895012', 'USA', 'English', '(GMT-11:00) International Date Line West', '2', '2023-12-18 13:18:07.830036'),
(2, '4Born', '4born@gmail.com', '6356529852', '4Born@2023', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-12-18 10:18:16.421621');

-- --------------------------------------------------------

--
-- Table structure for table `technology`
--

CREATE TABLE `technology` (
  `id` int(255) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `technology` varchar(255) NOT NULL,
  `hourse` varchar(255) NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `technology`
--

INSERT INTO `technology` (`id`, `user_id`, `technology`, `hourse`, `created_at`) VALUES
(1, '1', 'Node.js', '10', '2023-12-18 17:48:05.083815'),
(2, '1', 'PHP.js', '11', '2023-12-18 18:05:23.448120'),
(4, '1', 'Python', '1', '2023-12-18 18:21:03.803713'),
(5, '1', 'PHP', '4', '2023-12-18 18:21:12.698963'),
(6, '1', 'PHP', '40', '2023-12-18 18:21:14.025222'),
(7, '2', 'PHP', '40', '2023-12-18 18:21:17.983963'),
(8, '2', 'PHP', '40', '2023-12-18 18:21:22.083379'),
(9, '2', 'Node', '40', '2023-12-18 18:21:24.749293'),
(10, '2', 'Python', '40', '2023-12-18 18:21:28.992764');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `quickma_users`
--
ALTER TABLE `quickma_users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `technology`
--
ALTER TABLE `technology`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `quickma_users`
--
ALTER TABLE `quickma_users`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `technology`
--
ALTER TABLE `technology`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
