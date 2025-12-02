-- CreateTable
CREATE TABLE "CampoDeAtuacao" (
    "id" SERIAL NOT NULL,
    "campo" TEXT NOT NULL,

    CONSTRAINT "CampoDeAtuacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Entidade" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "campoDeColeta" TEXT NOT NULL,
    "criadaEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "campoDeAtuacaoId" INTEGER,

    CONSTRAINT "Entidade_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Entidade" ADD CONSTRAINT "Entidade_campoDeAtuacaoId_fkey" FOREIGN KEY ("campoDeAtuacaoId") REFERENCES "CampoDeAtuacao"("id") ON DELETE SET NULL ON UPDATE CASCADE;
