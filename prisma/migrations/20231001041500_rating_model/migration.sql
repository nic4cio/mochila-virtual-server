-- CreateEnum
CREATE TYPE "EnumVoteType" AS ENUM ('UPVOTE', 'DOWNVOTE');

-- CreateTable
CREATE TABLE "ContentRating" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "conteudoId" INTEGER NOT NULL,
    "voteType" "EnumVoteType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContentRating_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ContentRating_userId_conteudoId_key" ON "ContentRating"("userId", "conteudoId");

-- AddForeignKey
ALTER TABLE "ContentRating" ADD CONSTRAINT "ContentRating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContentRating" ADD CONSTRAINT "ContentRating_conteudoId_fkey" FOREIGN KEY ("conteudoId") REFERENCES "conteudos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
