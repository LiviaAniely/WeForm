import { prisma } from "../db.js";

export const getAllEntidade = async () => {
  return await prisma.entidade.findMany();
}

export const getEntidadeById = async (id) => {
  return await prisma.entidade.findUnique({
    where: { id: Number(id) },
  });
}

export const createEntidade = async (data) => {
  return await prisma.entidade.create({
    data,
  });
}

export const updateEntidade = async (id, data) => {
  return await prisma.entidade.update({
    where: { id: Number(id) },
    data,
  });
}

export const deleteEntidade = async (id) => {
  return await prisma.entidade.delete({
    where: { id: Number(id) },
  });
}