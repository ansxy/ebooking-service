-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "balance";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "flights";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "user";

-- CreateEnum
CREATE TYPE "user"."Role" AS ENUM ('ADMIN', 'PENGGUNA', 'MITRA');

-- CreateTable
CREATE TABLE "user"."User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "role" "user"."Role" NOT NULL,
    "balanceId" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "flights"."Airpots" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Airpots_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "flights"."Flight" (
    "id" SERIAL NOT NULL,
    "destination" TEXT NOT NULL,
    "deparatur_time" TIMESTAMP(3) NOT NULL,
    "arrival_time" TIMESTAMP(3) NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "flight_type" TEXT NOT NULL,
    "airportId" INTEGER NOT NULL,
    "delayed_time" INTEGER,

    CONSTRAINT "Flight_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hotels"."Hotel" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Hotel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hotels"."Room" (
    "id" SERIAL NOT NULL,
    "room_number" INTEGER NOT NULL,
    "price_per_night" INTEGER NOT NULL,
    "room_type" TEXT NOT NULL,
    "hotelId" INTEGER NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "balance"."Balance" (
    "id" SERIAL NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Balance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "user"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_balanceId_key" ON "user"."User"("balanceId");

-- AddForeignKey
ALTER TABLE "user"."User" ADD CONSTRAINT "User_balanceId_fkey" FOREIGN KEY ("balanceId") REFERENCES "balance"."Balance"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flights"."Flight" ADD CONSTRAINT "Flight_airportId_fkey" FOREIGN KEY ("airportId") REFERENCES "flights"."Airpots"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hotels"."Room" ADD CONSTRAINT "Room_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "hotels"."Hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
