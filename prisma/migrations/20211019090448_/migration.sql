-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bg_color" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "class_name" TEXT NOT NULL,
    "kana_name" TEXT NOT NULL,

    CONSTRAINT "bg_color_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "bg_color_class_name_key" ON "bg_color"("class_name");
