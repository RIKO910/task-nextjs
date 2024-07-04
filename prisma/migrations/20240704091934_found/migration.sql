-- CreateTable
CREATE TABLE `Found` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `found_name` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `claim_process` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
