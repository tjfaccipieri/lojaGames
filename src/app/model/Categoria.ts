import { Produto } from "./Produto";

export class Categoria {
  public id: number;
  public numeroProdutos: number;
  public produto: Produto[];
  public tipo: string;
  public foto: string;
}