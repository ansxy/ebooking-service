/*
  Warnings:

  - Added the required column `from` to the `Flight` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "flights"."Flight" ADD COLUMN     "from" TEXT NOT NULL;
