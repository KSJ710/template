/*
  Warnings:

  - You are about to drop the `addresses` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "addresses";

-- CreateTable
CREATE TABLE "city" (
    "id" SERIAL NOT NULL,
    "prefectureId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "city_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prefecture" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "prefecture_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "city" ADD CONSTRAINT "city_prefectureId_fkey" FOREIGN KEY ("prefectureId") REFERENCES "prefecture"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
