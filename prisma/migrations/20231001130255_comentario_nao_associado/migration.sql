/*
  Warnings:

  - You are about to drop the column `conteudoId` on the `comentarios` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "comentarios" DROP CONSTRAINT "comentarios_conteudoId_fkey";

-- AlterTable
ALTER TABLE "comentarios" DROP COLUMN "conteudoId";
