import { Usuario } from './Usuario';
import { Categoria } from "./Categoria";

export class Produto {
  public categoria: Categoria;
  public curtidos: number;
  public dataLancamento: Date;
  public descricao: string;
  public estilo: string;
  public foto: string;
  public id: number;
  public nome: string;
  public preco: number;
  public publisher: string;
  public quantidade: number;
  public tipo: string;
  public usuario: Usuario;
}