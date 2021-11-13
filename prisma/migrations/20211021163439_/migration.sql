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
