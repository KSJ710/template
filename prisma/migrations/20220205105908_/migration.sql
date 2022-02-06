/*
  Warnings:

  - You are about to drop the `Hoby` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Hoby" DROP CONSTRAINT "Hoby_successorId_fkey";

-- DropTable
DROP TABLE "Hoby";

-- CreateTable
CREATE TABLE "Members" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "successorId" INTEGER,

    CONSTRAINT "Members_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Members_successorId_key" ON "Members"("successorId");

-- AddForeignKey
ALTER TABLE "Members" ADD CONSTRAINT "Members_successorId_fkey" FOREIGN KEY ("successorId") REFERENCES "Members"("id") ON DELETE SET NULL ON UPDATE CASCADE;
