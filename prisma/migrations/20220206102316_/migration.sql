/*
  Warnings:

  - You are about to drop the `Hoby` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Member` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Hoby" DROP CONSTRAINT "Hoby_successorId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_pinnedById_fkey";

-- DropTable
DROP TABLE "Hoby";

-- DropTable
DROP TABLE "Member";

-- DropTable
DROP TABLE "Post";
