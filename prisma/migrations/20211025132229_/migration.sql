/*
  Warnings:

  - You are about to drop the `color` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "color";

-- CreateTable
CREATE TABLE "colors" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "class_name" TEXT NOT NULL,
    "kana_name" TEXT NOT NULL,

    CONSTRAINT "colors_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "colors_class_name_key" ON "colors"("class_name");
