/*
  Warnings:

  - Added the required column `historico` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `motivoCurador` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "historico" TEXT NOT NULL,
ADD COLUMN     "motivoCurador" TEXT NOT NULL;
