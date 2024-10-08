/*
  Warnings:

  - You are about to drop the `_categorytouser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_categorytouser` DROP FOREIGN KEY `_CategoryToUser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_categorytouser` DROP FOREIGN KEY `_CategoryToUser_B_fkey`;

-- DropTable
DROP TABLE `_categorytouser`;

-- DropTable
DROP TABLE `category`;

-- CreateTable
CREATE TABLE `Character` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `species` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
