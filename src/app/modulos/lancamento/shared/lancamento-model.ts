export interface Lancamento {
  id?: number;
  urlGit: string;
  projetoId: number;
  tarefaId: number;
  hash: string;
  ofId: number;
  atividadeId: number;
  arquivoGit: string;
  status: string;
}
