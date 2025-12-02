import express from "express";
import { createEntidade } from "./services/Entidade.js";
import { createCampoAtuacao } from "./services/campoAtuacao.js";

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

  try {
    const entidade = await createEntidade({ nome, campoDeAtuacaoId, campoDeColeta });

    res.json(entidade);
  } catch (err) {
    res.status(400).json({ error: "Erro ao criar entidade", details: err.message || err });
  }
});

// Criar campo de atuação
app.post("/campo-de-atuacao", async (req, res) => {
  const { campo } = req.body;

  try {
    const novo = await createCampoAtuacao({ campo });

    res.json(novo);
  } catch (err) {
    res.status(400).json({error: "Erro ao criar CampoDeAtuacao", details: err.message || err});
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});