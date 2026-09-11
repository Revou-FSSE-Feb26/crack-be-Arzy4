/*
  Warnings:

  - The values [BUSY] on the enum `StationStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "StationStatus_new" AS ENUM ('AVAILABLE', 'MAINTENANCE', 'INACTIVE');
ALTER TABLE "public"."charging_stations" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "charging_stations" ALTER COLUMN "status" TYPE "StationStatus_new" USING ("status"::text::"StationStatus_new");
ALTER TYPE "StationStatus" RENAME TO "StationStatus_old";
ALTER TYPE "StationStatus_new" RENAME TO "StationStatus";
DROP TYPE "public"."StationStatus_old";
ALTER TABLE "charging_stations" ALTER COLUMN "status" SET DEFAULT 'AVAILABLE';
COMMIT;
