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
