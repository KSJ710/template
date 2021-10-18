/*
  Warnings:

  - Added the required column `name` to the `color` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "color" ADD COLUMN     "name" TEXT NOT NULL;
