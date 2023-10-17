-- CreateTable
CREATE TABLE `talents` (
    `id` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `mbti` VARCHAR(191) NOT NULL,
    `experience` INTEGER NOT NULL,
    `last_education` VARCHAR(191) NOT NULL,
    `start_education_year` INTEGER NOT NULL,
    `end_education_year` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `projects` (
    `id` VARCHAR(191) NOT NULL,
    `talent_id` VARCHAR(191) NOT NULL,
    `picture` VARCHAR(191) NULL,
    `name` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `start_date` DATETIME(3) NOT NULL,
    `end_date` DATETIME(3) NOT NULL,
    `description` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `projects` ADD CONSTRAINT `projects_talent_id_fkey` FOREIGN KEY (`talent_id`) REFERENCES `talents`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
