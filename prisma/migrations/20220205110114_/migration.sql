/*
  Warnings:

  - You are about to drop the `Members` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Members" DROP CONSTRAINT "Members_successorId_fkey";

-- DropTable
DROP TABLE "Members";

-- CreateTable
CREATE TABLE "Hoby" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "successorId" INTEGER,

    CONSTRAINT "Hoby_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Hoby_successorId_key" ON "Hoby"("successorId");

-- AddForeignKey
ALTER TABLE "Hoby" ADD CONSTRAINT "Hoby_successorId_fkey" FOREIGN KEY ("successorId") REFERENCES "Hoby"("id") ON DELETE SET NULL ON UPDATE CASCADE;
