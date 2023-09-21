/*
  Warnings:

  - Added the required column `conteudoId` to the `comentarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `conteudos` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'CURADOR');

-- AlterTable
ALTER TABLE "comentarios" ADD COLUMN     "conteudoId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "conteudos" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'USER';

-- AddForeignKey
ALTER TABLE "conteudos" ADD CONSTRAINT "conteudos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comentarios" ADD CONSTRAINT "comentarios_conteudoId_fkey" FOREIGN KEY ("conteudoId") REFERENCES "conteudos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
