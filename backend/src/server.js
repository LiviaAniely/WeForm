import express from "express";
import { createEntidade, getAllEntidade } from "./services/Entidade.js";
import { createCampoAtuacao } from "./services/campoAtuacao.js";
import cors from "cors";

const app = express();
const port = 4000;
app.use(cors({
  origin: "http://localhost:3000",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type, Authorization"
}));

app.use(express.json());

// Rota simples
app.get("/", (_req, res) => {
  res.send("Olá eu!");
});

// Criar entidade
app.post("/api/entidade", async (req, res) => {
  const { nome, campoDeAtuacaoId, campoDeColeta } = req.body;

  try {
    const entidade = await createEntidade({ nome, campoDeAtuacaoId, campoDeColeta });

    res.json(entidade);
  } catch (err) {
    res.status(400).json({ error: "Erro ao criar entidade", details: err.message || err });
  }
});

// Criar campo de atuação
app.post("/api/campo-de-atuacao", async (req, res) => {
  const { campo } = req.body;

  try {
    const novo = await createCampoAtuacao({ campo });

    res.json(novo);
  } catch (err) {
    res.status(400).json({error: "Erro ao criar CampoDeAtuacao", details: err.message || err});
  }
});

// listar entidades
app.get("/api/entidade", async (_, res) => {
  try {
    const entidades = await getAllEntidade();
    console.log('entidades no servidor: ', entidades);
    res.json(entidades);
  } catch (err) {
    res.status(400).json({ error: "Erro ao criar entidade", details: err.message || err });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/api`);
});