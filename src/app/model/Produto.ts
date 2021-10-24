import { Usuario } from './Usuario';
import { Categoria } from "./Categoria";

export class Produto {
  public categoria: Categoria;
  public tipo: string;
  public curtidos: number;
  public descricao: string;
  public foto: string;
  public id: number;
  public nome: string;
  public preco: number;
  public quantidade: number;
  public usuario: Usuario;
}