import { Usuario } from './Usuario';
import { Categoria } from "./Categoria";

export class Produto {
  public categoria: Categoria;
  public console: string;
  public curtidos: number;
  public descricao: string;
  public id: number;
  public nome: string;
  public preco: number;
  public usuario: Usuario;
}