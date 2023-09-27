/*
  Warnings:

  - Added the required column `userId` to the `conteudos` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'CURADOR');

-- AlterTable
ALTER TABLE "conteudos" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'USER';

-- CreateTable
CREATE TABLE "comentarios" (
    "id" SERIAL NOT NULL,
    "texto" TEXT NOT NULL,
    "upvote" INTEGER NOT NULL,
    "downvote" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "conteudoId" INTEGER NOT NULL,

    CONSTRAINT "comentarios_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "conteudos" ADD CONSTRAINT "conteudos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comentarios" ADD CONSTRAINT "comentarios_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comentarios" ADD CONSTRAINT "comentarios_conteudoId_fkey" FOREIGN KEY ("conteudoId") REFERENCES "conteudos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
