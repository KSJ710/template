/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CategoryToPost` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[pinnedById]` on the table `Post` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "_CategoryToPost" DROP CONSTRAINT "_CategoryToPost_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryToPost" DROP CONSTRAINT "_CategoryToPost_B_fkey";

-- DropIndex
DROP INDEX "Member_email_key";

-- AlterTable
ALTER TABLE "Member" DROP COLUMN "createdAt",
DROP COLUMN "email",
DROP COLUMN "role";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "createdAt",
DROP COLUMN "published",
DROP COLUMN "updatedAt",
ADD COLUMN     "pinnedById" INTEGER,
ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "title" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "Category";

-- DropTable
DROP TABLE "_CategoryToPost";

-- DropEnum
DROP TYPE "Role";

-- CreateIndex
CREATE UNIQUE INDEX "Post_pinnedById_key" ON "Post"("pinnedById");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_pinnedById_fkey" FOREIGN KEY ("pinnedById") REFERENCES "Member"("id") ON DELETE SET NULL ON UPDATE CASCADE;
