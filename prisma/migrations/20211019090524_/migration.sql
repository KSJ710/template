/*
  Warnings:

  - You are about to drop the `bg_color` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "bg_color";

-- CreateTable
CREATE TABLE "color" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "class_name" TEXT NOT NULL,
    "kana_name" TEXT NOT NULL,

    CONSTRAINT "color_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "color_class_name_key" ON "color"("class_name");
