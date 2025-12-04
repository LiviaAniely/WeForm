import { CampoDeAtuacaoDTO } from "./campoDeAtuacao";

export type EntidadeDTO = {
  id: number;
  nome: string;
  campoDeColeta: string;
  criadaEm: Date
  campoDeAtuacaoId: number;
  campoDeAtuacao: CampoDeAtuacaoDTO;
};