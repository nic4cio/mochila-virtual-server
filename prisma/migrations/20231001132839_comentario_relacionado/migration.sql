/*
  Warnings:

  - Added the required column `conteudoId` to the `comentarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "comentarios" ADD COLUMN     "conteudoId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "comentarios" ADD CONSTRAINT "comentarios_conteudoId_fkey" FOREIGN KEY ("conteudoId") REFERENCES "conteudos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
