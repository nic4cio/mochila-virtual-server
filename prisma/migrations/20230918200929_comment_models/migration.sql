-- CreateTable
CREATE TABLE "comentarios" (
    "id" SERIAL NOT NULL,
    "texto" TEXT NOT NULL,
    "upvote" INTEGER NOT NULL,
    "downvote" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "comentarios_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "comentarios" ADD CONSTRAINT "comentarios_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
