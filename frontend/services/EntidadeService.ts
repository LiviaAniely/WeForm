import { api } from "@/services/api";
import { EntidadeDTO } from "@/types/entidade";

export async function getEntidade() {
  const { data } = await api.get("/entidade");
  return data;
}

export async function createEntidade(dto: EntidadeDTO) {
  const { data } = await api.post("/entidade", dto);
  return data;
}

export async function updateEntidade(id: number, dto: EntidadeDTO) {
  const { data } = await api.put(`/entidade/${id}`, dto);
  return data;
}

export async function deleteEntidade(id: number) {
  const { data } = await api.delete(`/entidade/${id}`);
  return data;
}