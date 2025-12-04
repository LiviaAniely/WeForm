import { api } from "@/services/api";
import { CampoDeAtuacaoDTO } from "@/types/campoDeAtuacao";

export async function getCampoDeAtuacao() {
  const { data } = await api.get("/campo-de-atuacao");
  return data;
}

export async function createCampoDeAtuacao(dto: CampoDeAtuacaoDTO) {
  const { data } = await api.post("/campo-de-atuacao", dto);
  return data;
}

export async function updateCampoDeAtuacao(id: number, dto: CampoDeAtuacaoDTO) {
  const { data } = await api.put(`/campo-de-atuacao/${id}`, dto);
  return data;
}

export async function deleteCampoDeAtuacao(id: number) {
  const { data } = await api.delete(`/campo-de-atuacao/${id}`);
  return data;
}