/*
  Warnings:

  - A unique constraint covering the columns `[class_name]` on the table `colors` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `class_name` to the `colors` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "colors" ADD COLUMN     "class_name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "colors_class_name_key" ON "colors"("class_name");
