/*
  Warnings:

  - You are about to drop the column `class_name` on the `colors` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "colors_class_name_key";

-- AlterTable
ALTER TABLE "colors" DROP COLUMN "class_name";
