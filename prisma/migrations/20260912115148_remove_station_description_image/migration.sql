/*
  Warnings:

  - You are about to drop the column `description` on the `charging_stations` table. All the data in the column will be lost.
  - You are about to drop the column `image_url` on the `charging_stations` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "charging_stations" DROP COLUMN "description",
DROP COLUMN "image_url";
