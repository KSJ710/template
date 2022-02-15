/*
  Warnings:

  - You are about to drop the `accounts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `colors` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `font_families` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `foot_parts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `head_parts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sessions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `verificationtokens` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "accounts" DROP CONSTRAINT "accounts_userId_fkey";

-- DropForeignKey
ALTER TABLE "sessions" DROP CONSTRAINT "sessions_userId_fkey";

-- DropTable
DROP TABLE "accounts";

-- DropTable
DROP TABLE "colors";

-- DropTable
DROP TABLE "font_families";

-- DropTable
DROP TABLE "foot_parts";

-- DropTable
DROP TABLE "head_parts";

-- DropTable
DROP TABLE "sessions";

-- DropTable
DROP TABLE "users";

-- DropTable
DROP TABLE "verificationtokens";

-- CreateTable
CREATE TABLE "m_colors" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "color_code" TEXT NOT NULL,
    "kana_name" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "m_colors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "m_font_families" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "style" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "m_font_families_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "m_foot_parts" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "m_foot_parts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "m_head_parts" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "m_head_parts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nextauth_accounts" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "oauth_token_secret" TEXT,
    "oauth_token" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "nextauth_accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nextauth_sessions" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMPTZ NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "nextauth_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nextauth_users" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMPTZ,
    "image" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "nextauth_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nextauth_verificationtokens" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMPTZ NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "members" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "image" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "members_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "m_colors_color_code_key" ON "m_colors"("color_code");

-- CreateIndex
CREATE UNIQUE INDEX "nextauth_accounts_provider_providerAccountId_key" ON "nextauth_accounts"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "nextauth_sessions_sessionToken_key" ON "nextauth_sessions"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "nextauth_users_email_key" ON "nextauth_users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "nextauth_verificationtokens_token_key" ON "nextauth_verificationtokens"("token");

-- CreateIndex
CREATE UNIQUE INDEX "nextauth_verificationtokens_identifier_token_key" ON "nextauth_verificationtokens"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "members_email_key" ON "members"("email");

-- AddForeignKey
ALTER TABLE "nextauth_accounts" ADD CONSTRAINT "nextauth_accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "nextauth_users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nextauth_sessions" ADD CONSTRAINT "nextauth_sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "nextauth_users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
