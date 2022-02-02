/*
  Warnings:

  - You are about to drop the `city` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `members` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `prefecture` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "city" DROP CONSTRAINT "city_prefectureId_fkey";

-- DropTable
DROP TABLE "city";

-- DropTable
DROP TABLE "members";

-- DropTable
DROP TABLE "prefecture";

-- CreateTable
CREATE TABLE "m_cities" (
    "id" SERIAL NOT NULL,
    "prefectureId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "m_cities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "image" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "m_prefectures" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "m_prefectures_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "m_cities" ADD CONSTRAINT "m_cities_prefectureId_fkey" FOREIGN KEY ("prefectureId") REFERENCES "m_prefectures"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
