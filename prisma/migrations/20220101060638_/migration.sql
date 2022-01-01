/*
  Warnings:

  - Added the required column `style` to the `font_families` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "font_families" ADD COLUMN     "style" TEXT NOT NULL;
