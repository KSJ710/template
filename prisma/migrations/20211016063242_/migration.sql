-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "color" (
    "id" SERIAL NOT NULL,
    "class_name" TEXT NOT NULL,

    CONSTRAINT "color_pkey" PRIMARY KEY ("id")
);
