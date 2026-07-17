-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "StationStatus" AS ENUM ('AVAILABLE', 'BUSY', 'MAINTENANCE', 'INACTIVE');

-- CreateEnum
CREATE TYPE "ChargerType" AS ENUM ('NORMAL', 'FAST', 'ULTRA');

-- CreateEnum
CREATE TYPE "SlotStatus" AS ENUM ('AVAILABLE', 'OCCUPIED', 'MAINTENANCE');

-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('PENDING', 'CONFIRMED', 'ONGOING', 'COMPLETED', 'CANCELLED');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "full_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "phone_number" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'USER',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "charging_stations" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "latitude" DECIMAL(10,7) NOT NULL,
    "longitude" DECIMAL(10,7) NOT NULL,
    "description" TEXT,
    "status" "StationStatus" NOT NULL DEFAULT 'AVAILABLE',
    "image_url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "charging_stations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "charging_slots" (
    "id" SERIAL NOT NULL,
    "station_id" INTEGER NOT NULL,
    "slot_code" TEXT NOT NULL,
    "charger_type" "ChargerType" NOT NULL,
    "power_kw" INTEGER NOT NULL,
    "price_per_kwh" DECIMAL(10,2) NOT NULL,
    "status" "SlotStatus" NOT NULL DEFAULT 'AVAILABLE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "charging_slots_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bookings" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "slot_id" INTEGER NOT NULL,
    "booking_code" TEXT NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,
    "estimated_kwh" DECIMAL(10,2),
    "estimated_cost" DECIMAL(12,2),
    "status" "BookingStatus" NOT NULL DEFAULT 'PENDING',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bookings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "charging_slots_station_id_slot_code_key" ON "charging_slots"("station_id", "slot_code");

-- CreateIndex
CREATE UNIQUE INDEX "bookings_booking_code_key" ON "bookings"("booking_code");

-- AddForeignKey
ALTER TABLE "charging_slots" ADD CONSTRAINT "charging_slots_station_id_fkey" FOREIGN KEY ("station_id") REFERENCES "charging_stations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_slot_id_fkey" FOREIGN KEY ("slot_id") REFERENCES "charging_slots"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
