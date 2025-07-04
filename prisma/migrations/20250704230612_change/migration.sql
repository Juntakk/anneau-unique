/*
  Warnings:

  - You are about to drop the column `armure_1` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `casque_1` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "armure_1",
DROP COLUMN "casque_1",
ADD COLUMN     "armure" TEXT NOT NULL DEFAULT '1',
ADD COLUMN     "casque" TEXT NOT NULL DEFAULT '1';
