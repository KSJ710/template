/*
  Warnings:

  - You are about to drop the column `class_name` on the `colors` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[color_code]` on the table `colors` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `color_code` to the `colors` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "colors_class_name_key";

-- AlterTable
ALTER TABLE "colors" DROP COLUMN "class_name",
ADD COLUMN     "color_code" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "colors_color_code_key" ON "colors"("color_code");
