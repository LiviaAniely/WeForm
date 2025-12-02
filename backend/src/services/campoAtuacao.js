import { prisma } from "../db.js";

export async function getAllCampoAtuacao() {
  return await prisma.campoDeAtuacao.findMany();
}

export async function getCampoAtuacaoById(id) {
  return await prisma.campoDeAtuacao.findUnique({
    where: { id: Number(id) },
  });
}

export async function createCampoAtuacao(data) {
  return await prisma.campoDeAtuacao.create({
    data,
  });
}

export async function updateCampoAtuacao(id, data) {
  return await prisma.campoDeAtuacao.update({
    where: { id: Number(id) },
    data,
  });
}

export async function deleteCampoAtuacao(id) {
  return await prisma.campoDeAtuacao.delete({
    where: { id: Number(id) },
  });
}