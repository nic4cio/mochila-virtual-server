-- CreateTable
CREATE TABLE "conteudos" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "materia" TEXT NOT NULL,
    "assunto" TEXT NOT NULL,
    "descricao" TEXT,
    "pdf" TEXT NOT NULL,

    CONSTRAINT "conteudos_pkey" PRIMARY KEY ("id")
);
