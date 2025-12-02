import express from "express";
import { prisma } from "./db.js";

const app = express();
const port = 4000;

app.use(express.json());

// Rota simples
app.get("/", (_req, res) => {
  res.send("Olá eu!");
});

// Criar entidade
app.post("/entidades", async (req, res) => {
  const { nome, campoDeAtuacaoId, campoDeColeta } = req.body;

  // res.send("Rota para criar entidade ainda não implementada.");
  try {
    const entidade = await prisma.entidade.create({
      data: { nome, campoDeAtuacaoId, campoDeColeta },
    });

    res.json(entidade);
  } catch (err) {
    res.status(400).json({ error: "Erro ao criar entidade", details: err });
  }
});

// Criar campo de atuação
app.post("/campo-de-atuacao", async (req, res) => {
  const { campo } = req.body;

  try {
    const novo = await prisma.campoDeAtuacao.create({
      data: { campo },
    });

    res.json(novo);
  } catch (err) {
    console.error(err);
    res.status(400).json({
      error: "Erro ao criar CampoDeAtuacao",
      details: err.message || err,
    });
  }
});

// Listar entidades
app.get("/entidades", async (_req, res) => {
  // try {
  //   const entidades = await prisma.entidade.findMany();
  //   res.json(entidades);
  // } catch (err) {
  //   res.status(400).json({ error: "Erro ao listar entidades", details: err });
  // }
  res.send("Rota para listar entidades ainda não implementada.");
});
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});